(function () {
  "use strict";

  var STORAGE_KEYS = {
    tradition: "he_saved_tradition",
    remember: "he_remember_choice",
    theme: "he_theme",
    fontSize: "he_font_size_px",
    candles: "he_user_candles",
    cafeHistory: "he_cafe_history_v1",
    tracksProgress: "he_tracks_progress_v1"
  };

  var state = {
    activeSection: "inicio",
    drawerMenuOpen: false,
    selectedTraditionId: "catolica",
    selectedFeeling: "ansiedade",
    rememberTradition: true,
    theme: "light",
    readerFontSizePx: 19,

    // Orações Fortes (Paginated directory + dedicated single-prayer page)
    prayerCategory: "todas",
    prayerSearchQuery: "",
    prayerPage: 1,
    prayersPerPage: 6,
    activePrayerId: null,

    // Vela Virtual (Separate sub-pages: "form" vs "wall")
    candleSubPage: "form",
    candleFilter: "all",
    candleWallPage: 1,
    candlesPerPage: 4,
    flamePaused: false,

    // Biblioteca Sagrada (Unified local complete works engine: Book Index + Chapter Index)
    libraryTraditionId: "catolica",
    libraryBookIndex: 0,
    libraryChapterIndex: 0,

    // Retenção Diária ("Café Espiritual", "Arcanjo Miguel 21 Dias", "Trilhas", "PWA")
    cafeSelectedDay: new Date().getDate(),
    miguelSubTab: "prayers",
    miguelSelectedDay: 1,
    activeTrackId: null,
    activeTrackSelectedDay: 1,
    deferredPwaPrompt: null,

    // Alento, Quiz & Blog
    activeComfortTopicId: "luto-saudade",
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    activeBlogPostId: null,
    speakingId: null
  };

  function safeStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      // Private browsing or sandboxed webviews may block localStorage access.
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {}
  }

  function safeStorageRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  }

  function getTraditions() {
    return window.TRADITIONS_DATA || [];
  }

  function findTradition(id) {
    var list = getTraditions();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return list[0] || null;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";
    if (state.theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    safeStorageSet(STORAGE_KEYS.theme, state.theme);

    var labelEls = document.querySelectorAll("[data-theme-label]");
    for (var i = 0; i < labelEls.length; i++) {
      labelEls[i].textContent = state.theme === "dark" ? "Modo Claro" : "Modo Noturno";
    }
    var btnEls = document.querySelectorAll("[data-action='toggle-theme']");
    for (var j = 0; j < btnEls.length; j++) {
      btnEls[j].setAttribute("aria-pressed", state.theme === "dark" ? "true" : "false");
    }
  }

  function applyReaderFontSize(px) {
    var clamped = Math.max(16, Math.min(26, Number(px) || 19));
    state.readerFontSizePx = clamped;
    document.documentElement.style.setProperty("--reader-font-size", (clamped / 16).toFixed(3) + "rem");
    safeStorageSet(STORAGE_KEYS.fontSize, String(clamped));

    var indicator = document.getElementById("font-size-indicator");
    if (indicator) {
      indicator.textContent = clamped + "px";
    }
  }

  function toggleDrawerMenu(forceOpen) {
    var drawer = document.getElementById("full-site-drawer");
    var triggerBtns = document.querySelectorAll("[data-action='toggle-drawer-menu']");
    if (!drawer) return;

    state.drawerMenuOpen = typeof forceOpen === "boolean" ? forceOpen : !state.drawerMenuOpen;
    if (state.drawerMenuOpen) {
      drawer.classList.remove("hidden");
    } else {
      drawer.classList.add("hidden");
    }

    for (var i = 0; i < triggerBtns.length; i++) {
      triggerBtns[i].setAttribute("aria-expanded", state.drawerMenuOpen ? "true" : "false");
    }
  }

  function stopSpeech() {
    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    state.speakingId = null;
    updateSpeechButtons();
  }

  function speakText(id, textToRead) {
    var statusEl = document.getElementById("audio-status-banner");
    if (!("speechSynthesis" in window)) {
      if (statusEl) {
        statusEl.textContent = "Seu navegador não possui suporte de leitura em voz alta neste aparelho.";
        statusEl.classList.remove("hidden");
      }
      return;
    }

    if (state.speakingId === id) {
      stopSpeech();
      if (statusEl) statusEl.classList.add("hidden");
      return;
    }

    stopSpeech();

    try {
      var utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = "pt-BR";
      // Slightly slower cadence improves comprehension and calm for 50+ listeners.
      utterance.rate = 0.9;
      utterance.pitch = 1.0;

      utterance.onend = function () {
        state.speakingId = null;
        updateSpeechButtons();
        if (statusEl) statusEl.classList.add("hidden");
      };

      utterance.onerror = function () {
        state.speakingId = null;
        updateSpeechButtons();
        if (statusEl) statusEl.classList.add("hidden");
      };

      state.speakingId = id;
      updateSpeechButtons();
      if (statusEl) {
        statusEl.textContent = "Leitura em voz calma iniciada. Toque novamente no botão de áudio se desejar parar.";
        statusEl.classList.remove("hidden");
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      state.speakingId = null;
      updateSpeechButtons();
    }
  }

  function updateSpeechButtons() {
    var buttons = document.querySelectorAll("[data-speech-id]");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var id = btn.getAttribute("data-speech-id");
      var isSpeaking = state.speakingId === id;
      btn.setAttribute("aria-pressed", isSpeaking ? "true" : "false");
      var labelSpan = btn.querySelector("[data-speech-label]");
      if (labelSpan) {
        labelSpan.textContent = isSpeaking ? "Parar leitura em voz" : btn.getAttribute("data-default-label") || "Ouvir em voz calma";
      }
    }
  }

  function navigateToSection(sectionId, shouldScroll) {
    var sections = document.querySelectorAll("[data-section-view]");
    var targetFound = false;
    for (var i = 0; i < sections.length; i++) {
      var isMatch = sections[i].getAttribute("data-section-view") === sectionId;
      if (isMatch) {
        sections[i].classList.remove("hidden");
        targetFound = true;
      } else {
        sections[i].classList.add("hidden");
      }
    }
    if (!targetFound) return;

    state.activeSection = sectionId;
    toggleDrawerMenu(false);

    if (sectionId === "inicio") {
      renderHomeRetentionWidgets();
    } else if (sectionId === "cafe-diario") {
      renderCafeDiario();
    } else if (sectionId === "arcanjo-miguel") {
      renderArcanjoMiguelPage();
    } else if (sectionId === "trilhas") {
      renderTrilhasView();
    } else if (sectionId === "oracoes") {
      state.activePrayerId = null;
      renderPrayersView();
    } else if (sectionId === "blog") {
      state.activeBlogPostId = null;
      renderBlogList();
    } else if (sectionId === "vertente") {
      renderTraditionPage();
    } else if (sectionId === "escrituras") {
      renderSacredLibrary();
    }

    var navButtons = document.querySelectorAll("[data-nav-target]");
    for (var j = 0; j < navButtons.length; j++) {
      var target = navButtons[j].getAttribute("data-nav-target");
      var highlightTarget = sectionId === "vertente" ? "inicio" : sectionId;
      if (target === highlightTarget) {
        navButtons[j].setAttribute("aria-current", "page");
      } else {
        navButtons[j].removeAttribute("aria-current");
      }
    }

    if (shouldScroll !== false) {
      var mainEl = document.getElementById("main-content");
      if (mainEl) {
        mainEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function populateHomeAndTraditionSelectors() {
    var traditions = getTraditions();
    var feelings = window.FEELINGS_LIST || [];

    // Home Tradition Select: Clean name ONLY (no "Completa" work title here)
    var tradSelect = document.getElementById("home-tradition-select");
    if (tradSelect && tradSelect.options.length === 0) {
      var tHtml = "";
      for (var i = 0; i < traditions.length; i++) {
        var t = traditions[i];
        tHtml +=
          '<option value="' +
          escapeHtml(t.id) +
          '">' +
          escapeHtml(t.symbol + " " + t.name) +
          "</option>";
      }
      tradSelect.innerHTML = tHtml;
    }
    if (tradSelect) {
      tradSelect.value = state.selectedTraditionId;
    }

    var feelSelects = [
      document.getElementById("home-feeling-select"),
      document.getElementById("vertente-feeling-select")
    ];

    for (var s = 0; s < feelSelects.length; s++) {
      var fs = feelSelects[s];
      if (fs && fs.options.length === 0) {
        var fHtml = "";
        for (var j = 0; j < feelings.length; j++) {
          var f = feelings[j];
          fHtml += '<option value="' + escapeHtml(f.id) + '">' + escapeHtml(f.label) + "</option>";
        }
        fs.innerHTML = fHtml;
      }
      if (fs) {
        fs.value = state.selectedFeeling;
      }
    }
  }

  function renderDailyPanel() {
    populateHomeAndTraditionSelectors();
    var tradition = findTradition(state.selectedTraditionId);
    if (!tradition) return;

    var headerBadge = document.getElementById("active-tradition-badge");
    if (headerBadge) {
      headerBadge.textContent = tradition.symbol + " " + tradition.name;
    }

    var passageObj =
      (tradition.dailyPassages && tradition.dailyPassages[state.selectedFeeling]) ||
      (tradition.dailyPassages && tradition.dailyPassages.ansiedade);

    var greetingEls = document.querySelectorAll("[data-daily-greeting]");
    for (var g = 0; g < greetingEls.length; g++) {
      greetingEls[g].textContent = tradition.greeting + " (" + tradition.name + ")";
    }

    var tagEls = document.querySelectorAll("[data-daily-tradition-tag]");
    for (var tg = 0; tg < tagEls.length; tg++) {
      tagEls[tg].textContent = tradition.tag;
    }

    if (passageObj) {
      var textEls = document.querySelectorAll("[data-daily-passage-text]");
      for (var t = 0; t < textEls.length; t++) {
        textEls[t].textContent = "“" + passageObj.text + "”";
      }

      var refEls = document.querySelectorAll("[data-daily-passage-reference]");
      for (var r = 0; r < refEls.length; r++) {
        refEls[r].textContent = passageObj.reference;
      }

      var reflEls = document.querySelectorAll("[data-daily-passage-reflection]");
      for (var rf = 0; rf < reflEls.length; rf++) {
        reflEls[rf].textContent = passageObj.reflection;
      }
    }

    renderTraditionPage();
  }

  function renderTraditionPage() {
    var tradition = findTradition(state.selectedTraditionId);
    if (!tradition) return;

    var imgEl = document.getElementById("vertente-hero-image");
    var captionEl = document.getElementById("vertente-image-caption");
    var titleEl = document.getElementById("vertente-title");
    var subtitleEl = document.getElementById("vertente-subtitle");
    var workBtnLabel = document.getElementById("vertente-work-btn-label");

    var imgSrc =
      (window.EMBEDDED_TRADITION_IMAGES && window.EMBEDDED_TRADITION_IMAGES[tradition.id]) ||
      tradition.imagePath ||
      "assets/traditions/" + tradition.id + ".jpg";

    if (imgEl) {
      imgEl.src = imgSrc;
      imgEl.alt = tradition.imageCaption || tradition.name;
    }
    if (captionEl) {
      captionEl.textContent = tradition.imageCaption || tradition.tag;
    }
    if (titleEl) {
      titleEl.textContent = tradition.symbol + " " + tradition.name;
    }
    if (subtitleEl) {
      subtitleEl.textContent = tradition.greeting;
    }
    if (workBtnLabel) {
      workBtnLabel.textContent = "📖 Ler " + tradition.canonicalWorkTitle;
    }
  }

  function selectTradition(traditionId, openTraditionPage) {
    var found = findTradition(traditionId);
    if (!found) return;

    state.selectedTraditionId = found.id;
    state.libraryTraditionId = found.id;
    state.libraryBookIndex = 0;
    state.libraryChapterIndex = 0;
    state.prayerCategory = found.id;
    state.prayerPage = 1;

    if (state.rememberTradition) {
      safeStorageSet(STORAGE_KEYS.tradition, found.id);
    }

    renderDailyPanel();
    renderSacredLibrary();
    populateCandleTraditionSelect();

    if (openTraditionPage) {
      navigateToSection("vertente", true);
    }
  }

  // Unified complete sacred works builder for all 16 traditions
  function getLibraryBooksForTradition(traditionId) {
    var bible66 = window.BIBLE_FULL_DATA || [];
    var deutero7 = window.BIBLE_CATOLICA_DEUTERO || [];
    var ldeFull = window.LIVRO_DOS_ESPIRITOS_FULL || [];
    var quranFull = window.QURAN_FULL_DATA || [];
    var extras = window.EXTRA_SACRED_WORKS || {};
    var tradObj = findTradition(traditionId);

    function formatBibleBook(b, customTitlePrefix) {
      var chaps = [];
      var rawChaps = b.chapters || [];
      for (var c = 0; c < rawChaps.length; c++) {
        var vList = rawChaps[c] || [];
        var numbered = [];
        for (var v = 0; v < vList.length; v++) {
          numbered.push(v + 1 + ". " + vList[v]);
        }
        chaps.push({
          title: (customTitlePrefix || b.name) + " - Capítulo " + (c + 1),
          verses: numbered
        });
      }
      return {
        bookTitle: customTitlePrefix || b.name,
        chapters: chaps
      };
    }

    if (traditionId === "catolica") {
      // All 73 Catholic Books (39 AT + 7 Deuterocanonical + 27 NT = 1,334 chapters)
      var catBooks = [];
      for (var i = 0; i < 39 && i < bible66.length; i++) {
        catBooks.push(formatBibleBook(bible66[i]));
      }
      for (var d = 0; d < deutero7.length; d++) {
        catBooks.push(formatBibleBook(deutero7[d]));
      }
      for (var n = 39; n < bible66.length; n++) {
        catBooks.push(formatBibleBook(bible66[n]));
      }
      if (catBooks.length > 0) return catBooks;
    }

    if (traditionId === "evangelica" || traditionId === "testemunhas-jeova") {
      // All 66 Books (1,189 chapters)
      var protBooks = [];
      for (var p = 0; p < bible66.length; p++) {
        protBooks.push(formatBibleBook(bible66[p]));
      }
      if (protBooks.length > 0) return protBooks;
    }

    if (traditionId === "judaica") {
      // All 39 Books of the Hebrew Tanakh (Torah + Nevi'im + Ketuvim including all 150 Tehilim/Psalms = 929 chapters)
      var hebrewLabels = {
        "Gênesis": "Bereshit (Gênesis)",
        "Êxodo": "Shemot (Êxodo)",
        "Levítico": "Vayikrá (Levítico)",
        "Números": "Bamidbar (Números)",
        "Deuteronômio": "Devarim (Deuteronômio)",
        "Salmos": "Tehilim (Salmos)",
        "Provérbios": "Mishlei (Provérbios)"
      };
      var tanakhBooks = [];
      for (var j = 0; j < 39 && j < bible66.length; j++) {
        var bName = bible66[j].name;
        var label = hebrewLabels[bName] || bName;
        tanakhBooks.push(formatBibleBook(bible66[j], label));
      }
      if (tradObj && tradObj.chapters && tradObj.chapters.length > 0) {
        tanakhBooks.push({
          bookTitle: "Pirkei Avot (Ética dos Pais)",
          chapters: tradObj.chapters
        });
      }
      if (tanakhBooks.length > 0) return tanakhBooks;
    }

    if (traditionId === "adventista") {
      var advBooks = [];
      if (extras.adventista && extras.adventista.length > 0) {
        advBooks.push({
          bookTitle: "Livro: Caminho a Cristo (Ellen G. White - Completo)",
          chapters: extras.adventista
        });
      }
      for (var a = 0; a < bible66.length; a++) {
        advBooks.push(formatBibleBook(bible66[a]));
      }
      if (advBooks.length > 0) return advBooks;
    }

    if (traditionId === "ortodoxa") {
      var ortBooks = [];
      if (extras.ortodoxa && extras.ortodoxa.length > 0) {
        ortBooks.push({
          bookTitle: "Saltério, Liturgia e Filocalia Ortodoxa",
          chapters: extras.ortodoxa
        });
      }
      for (var o = 0; o < bible66.length; o++) {
        ortBooks.push(formatBibleBook(bible66[o]));
      }
      for (var od = 0; od < deutero7.length; od++) {
        ortBooks.push(formatBibleBook(deutero7[od]));
      }
      if (ortBooks.length > 0) return ortBooks;
    }

    if (traditionId === "espirita") {
      if (ldeFull.length > 0) {
        return [
          {
            bookTitle: "O Livro dos Espíritos (Questões 1 a 1019 - Completo)",
            chapters: ldeFull
          }
        ];
      }
    }

    if (traditionId === "islamica") {
      if (quranFull.length > 0) {
        var surahChaps = [];
        for (var q = 0; q < quranFull.length; q++) {
          surahChaps.push({
            title: quranFull[q].name + " (" + quranFull[q].verses.length + " versículos)",
            verses: quranFull[q].verses
          });
        }
        return [
          {
            bookTitle: "Sagrado Alcorão (114 Suratas Completas)",
            chapters: surahChaps
          }
        ];
      }
    }

    if (extras[traditionId] && extras[traditionId].length > 0) {
      return [
        {
          bookTitle: tradObj ? tradObj.canonicalWorkTitle : "Obra Sagrada Completa",
          chapters: extras[traditionId]
        }
      ];
    }

    return [
      {
        bookTitle: tradObj ? tradObj.canonicalWorkTitle : "Obra Sagrada Completa",
        chapters: (tradObj && tradObj.chapters) || []
      }
    ];
  }

  function renderSacredLibrary() {
    var selectEl = document.getElementById("library-tradition-select");
    var bookWrapperEl = document.getElementById("library-book-select-wrapper");
    var bookSelectEl = document.getElementById("library-book-select");
    var chapterSelectEl = document.getElementById("library-chapter-select");
    var workTitleEl = document.getElementById("library-canonical-title");
    var chapterHeadingEl = document.getElementById("library-chapter-heading");
    var versesContainerEl = document.getElementById("library-verses-container");
    var progressLabelEl = document.getElementById("library-progress-label");

    var traditions = getTraditions();
    if (selectEl && selectEl.options.length === 0) {
      var optsHtml = "";
      for (var i = 0; i < traditions.length; i++) {
        optsHtml +=
          '<option value="' +
          escapeHtml(traditions[i].id) +
          '">' +
          escapeHtml(traditions[i].symbol + " " + traditions[i].canonicalWorkTitle + " (" + traditions[i].name + ")") +
          "</option>";
      }
      selectEl.innerHTML = optsHtml;
    }

    if (selectEl) {
      selectEl.value = state.libraryTraditionId;
    }

    var activeTradition = findTradition(state.libraryTraditionId);
    if (!activeTradition) return;

    var booksList = getLibraryBooksForTradition(state.libraryTraditionId);
    if (state.libraryBookIndex >= booksList.length || state.libraryBookIndex < 0) {
      state.libraryBookIndex = 0;
    }

    var activeBook = booksList[state.libraryBookIndex];
    if (!activeBook) return;

    if (bookWrapperEl && bookSelectEl) {
      if (booksList.length > 1) {
        bookWrapperEl.classList.remove("hidden");
        var bHtml = "";
        for (var b = 0; b < booksList.length; b++) {
          bHtml +=
            '<option value="' +
            b +
            '">' +
            escapeHtml(booksList[b].bookTitle + " (" + booksList[b].chapters.length + " cap.)") +
            "</option>";
        }
        bookSelectEl.innerHTML = bHtml;
        bookSelectEl.value = String(state.libraryBookIndex);
      } else {
        bookWrapperEl.classList.add("hidden");
      }
    }

    var chapters = activeBook.chapters || [];
    if (state.libraryChapterIndex >= chapters.length || state.libraryChapterIndex < 0) {
      state.libraryChapterIndex = 0;
    }

    if (chapterSelectEl) {
      var chOpts = "";
      for (var c = 0; c < chapters.length; c++) {
        chOpts += '<option value="' + c + '">' + escapeHtml(chapters[c].title) + "</option>";
      }
      chapterSelectEl.innerHTML = chOpts;
      chapterSelectEl.value = String(state.libraryChapterIndex);
    }

    var activeChapter = chapters[state.libraryChapterIndex];
    if (!activeChapter) return;

    if (workTitleEl) {
      workTitleEl.textContent = activeTradition.canonicalWorkTitle + " • " + activeBook.bookTitle;
    }

    if (chapterHeadingEl) {
      chapterHeadingEl.textContent = activeChapter.title;
    }

    if (progressLabelEl) {
      progressLabelEl.textContent =
        "Capítulo " +
        (state.libraryChapterIndex + 1) +
        " de " +
        chapters.length +
        (booksList.length > 1 ? " • Livro " + (state.libraryBookIndex + 1) + " de " + booksList.length : "");
    }

    if (versesContainerEl) {
      var vHtml = "";
      for (var v = 0; v < activeChapter.verses.length; v++) {
        vHtml +=
          '<p class="mb-4 leading-relaxed font-serif-sacred text-body-sacred">' +
          escapeHtml(activeChapter.verses[v]) +
          "</p>";
      }
      versesContainerEl.innerHTML = vHtml;
    }
  }

  function populatePrayerCategorySelect() {
    var selectEl = document.getElementById("prayer-category-select");
    if (!selectEl || selectEl.options.length > 0) return;

    var traditions = getTraditions();
    var html = '<option value="todas">Todas as 16 Tradições Religiosas</option>';
    for (var i = 0; i < traditions.length; i++) {
      var t = traditions[i];
      html += '<option value="' + escapeHtml(t.id) + '">' + escapeHtml(t.symbol + " " + t.name) + "</option>";
    }
    selectEl.innerHTML = html;
  }

  function getFilteredPrayers() {
    var allPrayers = window.STRONG_PRAYERS || [];
    var query = state.prayerSearchQuery.trim().toLowerCase();
    var filtered = [];

    for (var i = 0; i < allPrayers.length; i++) {
      var p = allPrayers[i];
      var matchesCategory = state.prayerCategory === "todas" || p.category === state.prayerCategory;
      var matchesSearch =
        !query ||
        p.title.toLowerCase().indexOf(query) !== -1 ||
        p.subtitle.toLowerCase().indexOf(query) !== -1 ||
        p.text.toLowerCase().indexOf(query) !== -1 ||
        p.categoryLabel.toLowerCase().indexOf(query) !== -1;

      if (matchesCategory && matchesSearch) {
        filtered.push(p);
      }
    }
    return filtered;
  }

  function renderPrayersView() {
    populatePrayerCategorySelect();

    var dirView = document.getElementById("prayers-directory-view");
    var singleView = document.getElementById("prayer-single-page-view");
    var listContainer = document.getElementById("prayers-list-container");
    var paginationContainer = document.getElementById("prayers-pagination-controls");
    var countEl = document.getElementById("prayers-count-label");
    var catSelect = document.getElementById("prayer-category-select");

    if (catSelect) {
      catSelect.value = state.prayerCategory;
    }

    if (!dirView || !singleView || !listContainer) return;

    var allPrayers = window.STRONG_PRAYERS || [];

    if (state.activePrayerId) {
      var foundIndex = -1;
      for (var idx = 0; idx < allPrayers.length; idx++) {
        if (allPrayers[idx].id === state.activePrayerId) {
          foundIndex = idx;
          break;
        }
      }

      if (foundIndex !== -1) {
        var prayer = allPrayers[foundIndex];
        var nextPrayer = allPrayers[(foundIndex + 1) % allPrayers.length];
        var prayerTrad = findTradition(prayer.category);
        var imgSrc =
          (prayerTrad &&
            window.EMBEDDED_TRADITION_IMAGES &&
            window.EMBEDDED_TRADITION_IMAGES[prayerTrad.id]) ||
          (prayerTrad && prayerTrad.imagePath) ||
          "assets/traditions/catolica.jpg";

        var paragraphs = prayer.text.split("\n\n");
        var bodyHtml = "";
        for (var k = 0; k < paragraphs.length; k++) {
          bodyHtml +=
            '<p class="mb-4 leading-relaxed">' +
            escapeHtml(paragraphs[k]).replace(/\n/g, "<br>") +
            "</p>";
        }

        var speechId = "prayer-" + prayer.id;
        dirView.classList.add("hidden");
        singleView.classList.remove("hidden");

        singleView.innerHTML =
          '<article class="surface-card overflow-hidden max-w-3xl mx-auto">' +
          '<div class="relative h-48 sm:h-64 w-full bg-black">' +
          '<img src="' +
          escapeHtml(imgSrc) +
          '" alt="' +
          escapeHtml(prayer.categoryLabel) +
          '" class="w-full h-full object-cover opacity-90" />' +
          '<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5 sm:p-6">' +
          '<div>' +
          '<span class="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-950 mb-1.5">' +
          escapeHtml(prayer.categoryLabel) +
          "</span>" +
          '<h3 class="font-serif-sacred font-bold text-2xl sm:text-3xl text-white leading-tight">' +
          escapeHtml(prayer.title) +
          "</h3>" +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="p-6 sm:p-10">' +
          '<div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b" style="border-color: var(--border-color);">' +
          '<button type="button" class="btn-secondary text-sm py-2 px-4" data-action="back-to-prayers-list">← Voltar para a lista de orações</button>' +
          '<span class="text-xs font-semibold" style="color: var(--text-muted);">' +
          escapeHtml(prayer.salutation) +
          "</span>" +
          "</div>" +
          '<p class="text-base mb-5" style="color: var(--text-secondary);">' +
          escapeHtml(prayer.subtitle) +
          "</p>" +
          '<div class="font-serif-sacred text-body-sacred p-6 sm:p-8 rounded-2xl mb-6" style="background-color: var(--bg-amber-soft); color: var(--text-main); border: 1px solid var(--border-strong);">' +
          bodyHtml +
          "</div>" +
          (prayer.specialSection === "arcanjo-miguel"
            ? '<div class="p-4 rounded-xl mb-6 flex flex-wrap items-center justify-between gap-3" style="background-color: var(--bg-accent-soft); border: 1px solid var(--accent-wine);">' +
              '<span class="text-sm font-semibold" style="color: var(--accent-wine);">⚔️ Quer fazer a caminhada de 21 dias desta oração?</span>' +
              '<button type="button" class="btn-primary text-sm" data-action="open-miguel-21dias">Abrir Página Especial (21 Dias) →</button>' +
              "</div>"
            : "") +
          '<p class="text-sm italic mb-6" style="color: var(--text-muted);">' +
          escapeHtml(prayer.usageNote) +
          "</p>" +
          '<div class="flex flex-wrap items-center justify-between gap-3 pt-5 border-t" style="border-color: var(--border-color);">' +
          '<div class="flex flex-wrap gap-3">' +
          '<button type="button" class="btn-primary inline-flex items-center gap-2" data-speech-id="' +
          escapeHtml(speechId) +
          '" data-speech-prayer="' +
          escapeHtml(prayer.id) +
          '" data-default-label="Ouvir oração em voz calma" aria-pressed="false">' +
          '<span aria-hidden="true">🔊</span> <span data-speech-label>Ouvir oração em voz calma</span>' +
          "</button>" +
          '<button type="button" class="btn-secondary inline-flex items-center gap-2" data-share-prayer="' +
          escapeHtml(prayer.id) +
          '">' +
          '<span aria-hidden="true">📲</span> Enviar no WhatsApp' +
          "</button>" +
          "</div>" +
          '<button type="button" class="btn-secondary text-sm" data-open-prayer="' +
          escapeHtml(nextPrayer.id) +
          '">Próxima Oração →</button>' +
          "</div>" +
          "</div>" +
          "</article>";

        updateSpeechButtons();
        return;
      }
    }

    singleView.classList.add("hidden");
    dirView.classList.remove("hidden");

    var filtered = getFilteredPrayers();
    var totalPages = Math.max(1, Math.ceil(filtered.length / state.prayersPerPage));
    if (state.prayerPage > totalPages) state.prayerPage = totalPages;
    if (state.prayerPage < 1) state.prayerPage = 1;

    if (countEl) {
      countEl.textContent =
        filtered.length +
        (filtered.length === 1 ? " oração disponível" : " orações disponíveis") +
        " • Página " +
        state.prayerPage +
        " de " +
        totalPages;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML =
        '<div class="surface-card p-6 text-center col-span-full">' +
        '<p class="font-semibold text-lg mb-2">Nenhuma oração encontrada com esse filtro.</p>' +
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">Toque abaixo para mostrar novamente as orações de todas as 16 tradições.</p>' +
        '<button type="button" class="btn-secondary" data-action="reset-prayer-filters">Mostrar todas as orações</button>' +
        "</div>";
      if (paginationContainer) paginationContainer.innerHTML = "";
      return;
    }

    var startIdx = (state.prayerPage - 1) * state.prayersPerPage;
    var pageItems = filtered.slice(startIdx, startIdx + state.prayersPerPage);

    var html = "";
    for (var j = 0; j < pageItems.length; j++) {
      var item = pageItems[j];
      html +=
        '<article class="surface-card p-5 flex flex-col justify-between">' +
        "<div>" +
        '<span class="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2" style="background-color: var(--bg-subtle); color: var(--accent-wine);">' +
        escapeHtml(item.categoryLabel) +
        "</span>" +
        '<h3 class="font-serif-sacred font-bold text-lg mb-1" style="color: var(--text-main);">' +
        escapeHtml(item.title) +
        "</h3>" +
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">' +
        escapeHtml(item.subtitle) +
        "</p>" +
        "</div>" +
        '<button type="button" class="btn-secondary w-full justify-center text-sm" data-open-prayer="' +
        escapeHtml(item.id) +
        '">Abrir Página da Oração →</button>' +
        "</article>";
    }

    listContainer.innerHTML = html;

    if (paginationContainer) {
      if (totalPages <= 1) {
        paginationContainer.innerHTML = "";
      } else {
        paginationContainer.innerHTML =
          '<div class="flex flex-wrap items-center justify-between gap-3 surface-card p-4">' +
          '<button type="button" class="btn-secondary" data-action="prayer-prev-page" ' +
          (state.prayerPage <= 1 ? 'disabled="disabled"' : "") +
          ">← Página Anterior</button>" +
          '<span class="text-sm font-semibold" style="color: var(--text-secondary);">Página ' +
          state.prayerPage +
          " de " +
          totalPages +
          "</span>" +
          '<button type="button" class="btn-secondary" data-action="prayer-next-page" ' +
          (state.prayerPage >= totalPages ? 'disabled="disabled"' : "") +
          ">Próxima Página →</button>" +
          "</div>";
      }
    }
  }

  function getUserCandles() {
    var raw = safeStorageGet(STORAGE_KEYS.candles);
    if (!raw) return [];
    try {
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveUserCandles(list) {
    safeStorageSet(STORAGE_KEYS.candles, JSON.stringify(list));
  }

  function populateCandleTraditionSelect() {
    var selectEl = document.getElementById("candle-tradition-select");
    if (!selectEl) return;

    var traditions = getTraditions();
    var html = "";
    for (var i = 0; i < traditions.length; i++) {
      var t = traditions[i];
      var selectedAttr = t.id === state.selectedTraditionId ? ' selected="selected"' : "";
      html += '<option value="' + escapeHtml(t.name) + '"' + selectedAttr + ">" + escapeHtml(t.name) + "</option>";
    }
    selectEl.innerHTML = html;
  }

  function renderCandleSubPages() {
    var formSubPage = document.getElementById("candle-subpage-form");
    var wallSubPage = document.getElementById("candle-subpage-wall");
    var subPageBtns = document.querySelectorAll("[data-candle-subpage]");

    for (var i = 0; i < subPageBtns.length; i++) {
      var sp = subPageBtns[i].getAttribute("data-candle-subpage");
      subPageBtns[i].setAttribute("aria-pressed", sp === state.candleSubPage ? "true" : "false");
    }

    if (formSubPage && wallSubPage) {
      if (state.candleSubPage === "wall") {
        formSubPage.classList.add("hidden");
        wallSubPage.classList.remove("hidden");
      } else {
        wallSubPage.classList.add("hidden");
        formSubPage.classList.remove("hidden");
      }
    }

    renderCandlesWall();
  }

  function renderCandlesWall() {
    var container = document.getElementById("candles-wall-container");
    var counterEl = document.getElementById("candles-active-counter");
    var wallPagination = document.getElementById("candles-pagination-controls");
    if (!container) return;

    var userCandles = getUserCandles();
    var seedCandles = window.INITIAL_CANDLES || [];
    var combined = state.candleFilter === "mine" ? userCandles : userCandles.concat(seedCandles);

    if (counterEl) {
      var totalCount = userCandles.length + seedCandles.length;
      counterEl.textContent = totalCount + (totalCount === 1 ? " vela acesa em vigília" : " velas acesas em vigília");
    }

    var filterBtns = document.querySelectorAll("[data-candle-filter]");
    for (var f = 0; f < filterBtns.length; f++) {
      var mode = filterBtns[f].getAttribute("data-candle-filter");
      filterBtns[f].setAttribute("aria-pressed", mode === state.candleFilter ? "true" : "false");
    }

    if (combined.length === 0) {
      container.innerHTML =
        '<div class="surface-card p-6 text-center col-span-full">' +
        '<p class="font-serif-sacred font-bold text-lg mb-2">Você ainda não acendeu uma vela neste aparelho.</p>' +
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">Toque abaixo para abrir a página de acendimento gratuito da Vela de 7 Dias.</p>' +
        '<button type="button" class="btn-primary" data-candle-subpage="form">Ir para Acender Minha Vela</button>' +
        "</div>";
      if (wallPagination) wallPagination.innerHTML = "";
      return;
    }

    var totalPages = Math.max(1, Math.ceil(combined.length / state.candlesPerPage));
    if (state.candleWallPage > totalPages) state.candleWallPage = totalPages;
    if (state.candleWallPage < 1) state.candleWallPage = 1;

    var startIdx = (state.candleWallPage - 1) * state.candlesPerPage;
    var pageItems = combined.slice(startIdx, startIdx + state.candlesPerPage);

    var flameClass = state.flamePaused ? "candle-flame paused" : "candle-flame";
    var html = "";

    for (var i = 0; i < pageItems.length; i++) {
      var c = pageItems[i];
      html +=
        '<article class="surface-card p-5 flex flex-col justify-between">' +
        "<div>" +
        '<div class="flex items-start gap-4 mb-3">' +
        '<div class="flex flex-col items-center justify-end w-12 h-20 rounded-xl pt-2 pb-1 shrink-0" style="background-color: var(--bg-chapel);" aria-hidden="true">' +
        '<div class="' +
        flameClass +
        '" style="width: 1.15rem; height: 1.85rem;"></div>' +
        '<div class="w-4 h-7 rounded-t-sm mt-1" style="background-color: #F7F4EE;"></div>' +
        "</div>" +
        '<div class="min-w-0 flex-1">' +
        '<span class="inline-block text-xs font-semibold px-2.5 py-0.5 rounded mb-1" style="background-color: var(--bg-amber-soft); color: var(--accent-amber);">' +
        escapeHtml(c.traditionName || "Prece Universal") +
        " • " +
        escapeHtml(String(c.daysRemaining || 7)) +
        " dias restantes" +
        "</span>" +
        '<h4 class="font-serif-sacred font-bold text-lg leading-snug" style="color: var(--text-main);">' +
        escapeHtml(c.honoree) +
        "</h4>" +
        '<p class="text-xs" style="color: var(--text-muted);">' +
        escapeHtml(c.city || "Brasil") +
        " • Acesa: " +
        escapeHtml(c.createdAt || "Hoje") +
        "</p>" +
        "</div>" +
        "</div>" +
        '<p class="font-serif-sacred text-sm leading-relaxed p-3.5 rounded-lg mb-3" style="background-color: var(--bg-subtle); color: var(--text-main);">“' +
        escapeHtml(c.intention) +
        "”</p>" +
        "</div>" +
        '<div class="flex items-center justify-between gap-2 pt-2 border-t" style="border-color: var(--border-color);">' +
        '<button type="button" class="btn-secondary text-xs py-2 px-3" data-share-candle="' +
        escapeHtml(c.id) +
        '">📲 Enviar aviso de prece no WhatsApp</button>' +
        "</div>" +
        "</article>";
    }

    container.innerHTML = html;

    if (wallPagination) {
      if (totalPages <= 1) {
        wallPagination.innerHTML = "";
      } else {
        wallPagination.innerHTML =
          '<div class="flex flex-wrap items-center justify-between gap-3 surface-card p-4 mt-4">' +
          '<button type="button" class="btn-secondary" data-action="candle-prev-page" ' +
          (state.candleWallPage <= 1 ? 'disabled="disabled"' : "") +
          ">← Página Anterior</button>" +
          '<span class="text-sm font-semibold" style="color: var(--text-secondary);">Página ' +
          state.candleWallPage +
          " de " +
          totalPages +
          "</span>" +
          '<button type="button" class="btn-secondary" data-action="candle-next-page" ' +
          (state.candleWallPage >= totalPages ? 'disabled="disabled"' : "") +
          ">Próxima Página →</button>" +
          "</div>";
      }
    }
  }

  function handleLightCandleSubmit(event) {
    event.preventDefault();
    var honoreeInput = document.getElementById("candle-honoree-input");
    var cityInput = document.getElementById("candle-city-input");
    var traditionSelect = document.getElementById("candle-tradition-select");
    var intentionInput = document.getElementById("candle-intention-input");
    var feedbackEl = document.getElementById("candle-form-feedback");

    if (!honoreeInput || !intentionInput || !feedbackEl) return;

    var honoree = honoreeInput.value.trim();
    var intention = intentionInput.value.trim();
    var city = cityInput ? cityInput.value.trim() : "";
    var traditionName = traditionSelect ? traditionSelect.value : "Busca Universal";

    if (!honoree || !intention) {
      feedbackEl.textContent = "Por favor, preencha o nome da pessoa (ou família) e escreva a intenção da sua prece antes de acender a vela.";
      feedbackEl.style.backgroundColor = "var(--bg-accent-soft)";
      feedbackEl.style.color = "var(--accent-wine)";
      feedbackEl.classList.remove("hidden");
      return;
    }

    var newCandle = {
      id: "candle-" + Date.now(),
      honoree: honoree,
      intention: intention,
      traditionName: traditionName,
      city: city || "Brasil",
      daysRemaining: 7,
      createdAt: "Agora mesmo"
    };

    var current = getUserCandles();
    current.unshift(newCandle);
    saveUserCandles(current);
    renderHomeRetentionWidgets();

    honoreeInput.value = "";
    intentionInput.value = "";
    if (cityInput) cityInput.value = "";

    feedbackEl.innerHTML =
      '✓ Sua Vela Virtual de 7 dias foi acesa com sucesso para <strong>' +
      escapeHtml(honoree) +
      '</strong>! <button type="button" class="underline font-bold ml-2" data-candle-subpage="wall">Ver minha vela acesa no Mural →</button>';
    feedbackEl.style.backgroundColor = "var(--bg-amber-soft)";
    feedbackEl.style.color = "var(--text-main)";
    feedbackEl.classList.remove("hidden");

    renderCandlesWall();
  }

  function renderThematicComfort() {
    var selectEl = document.getElementById("comfort-topic-select");
    var detailEl = document.getElementById("comfort-topic-detail");
    if (!detailEl) return;

    var topics = window.THEMATIC_COMFORT || [];
    var activeTopic = topics[0];

    if (selectEl && selectEl.options.length === 0) {
      var sHtml = "";
      for (var i = 0; i < topics.length; i++) {
        sHtml +=
          '<option value="' +
          escapeHtml(topics[i].id) +
          '">' +
          escapeHtml(topics[i].icon + " " + topics[i].title) +
          "</option>";
      }
      selectEl.innerHTML = sHtml;
    }

    for (var j = 0; j < topics.length; j++) {
      if (topics[j].id === state.activeComfortTopicId) {
        activeTopic = topics[j];
        break;
      }
    }

    if (selectEl && activeTopic) {
      selectEl.value = activeTopic.id;
    }

    if (!activeTopic) return;

    var readingsHtml = "";
    for (var r = 0; r < activeTopic.readings.length; r++) {
      var item = activeTopic.readings[r];
      readingsHtml +=
        '<div class="surface-subtle p-5 rounded-xl">' +
        '<span class="inline-block text-xs font-bold uppercase tracking-wider mb-2" style="color: var(--accent-wine);">' +
        escapeHtml(item.tradition) +
        "</span>" +
        '<blockquote class="font-serif-sacred text-body-sacred font-medium mb-3" style="color: var(--text-main);">“' +
        escapeHtml(item.quote) +
        "”</blockquote>" +
        '<p class="text-sm" style="color: var(--text-secondary);"><strong>Aplicação prática:</strong> ' +
        escapeHtml(item.application) +
        "</p>" +
        "</div>";
    }

    detailEl.innerHTML =
      '<div class="surface-card p-6 max-w-3xl mx-auto">' +
      '<div class="mb-5 pb-4 border-b" style="border-color: var(--border-color);">' +
      '<h3 class="font-serif-sacred font-bold text-2xl mb-1">' +
      escapeHtml(activeTopic.icon + " " + activeTopic.title) +
      "</h3>" +
      '<p class="text-base mb-3" style="color: var(--text-secondary);">' +
      escapeHtml(activeTopic.summary) +
      "</p>" +
      '<div class="p-4 rounded-xl text-sm" style="background-color: var(--bg-amber-soft); color: var(--text-main);">' +
      "<strong>Exercício de serenidade:</strong> " +
      escapeHtml(activeTopic.breathGuide) +
      "</div>" +
      "</div>" +
      '<div class="grid grid-cols-1 gap-4">' +
      readingsHtml +
      "</div>" +
      "</div>";
  }

  function renderQuiz() {
    var container = document.getElementById("quiz-card-container");
    if (!container) return;

    var questions = window.QUIZ_QUESTIONS || [];
    if (questions.length === 0) return;

    if (state.quizIndex >= questions.length) {
      container.innerHTML =
        '<div class="surface-card p-6 sm:p-8 text-center max-w-2xl mx-auto">' +
        '<span class="inline-block text-4xl mb-3" aria-hidden="true">🕊</span>' +
        '<h3 class="font-serif-sacred font-bold text-2xl mb-2">Sabedoria Concluída!</h3>' +
        '<p class="text-lg mb-4" style="color: var(--text-secondary);">Você acertou <strong>' +
        state.quizScore +
        " de " +
        questions.length +
        "</strong> perguntas sobre as tradições espirituais e escrituras sagradas.</p>" +
        '<p class="text-sm mb-6" style="color: var(--text-muted);">Conhecer a história e os livros sagrados fortalece a nossa cultura de paz e respeito mútuo.</p>' +
        '<button type="button" class="btn-primary" data-action="restart-quiz">Jogar Novamente</button>' +
        "</div>";
      return;
    }

    var q = questions[state.quizIndex];
    var optionsHtml = "";
    for (var i = 0; i < q.options.length; i++) {
      optionsHtml +=
        '<button type="button" class="btn-secondary w-full text-left justify-start p-4 font-medium" data-quiz-option="' +
        i +
        '" ' +
        (state.quizAnswered ? 'disabled="disabled"' : "") +
        ">" +
        '<span class="inline-flex items-center justify-center w-7 h-7 rounded-full mr-3 text-xs font-bold shrink-0" style="background-color: var(--bg-subtle); color: var(--accent-wine);">' +
        String.fromCharCode(65 + i) +
        "</span>" +
        "<span>" +
        escapeHtml(q.options[i]) +
        "</span>" +
        "</button>";
    }

    container.innerHTML =
      '<div class="surface-card p-6 sm:p-8 max-w-2xl mx-auto">' +
      '<div class="flex items-center justify-between gap-2 mb-4">' +
      '<span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded" style="background-color: var(--bg-subtle); color: var(--accent-wine);">Pergunta ' +
      (state.quizIndex + 1) +
      " de " +
      questions.length +
      "</span>" +
      '<span class="text-sm font-semibold" style="color: var(--text-secondary);">Pontuação: ' +
      state.quizScore +
      "</span>" +
      "</div>" +
      '<h3 class="font-serif-sacred font-bold text-xl sm:text-2xl mb-5 leading-snug">' +
      escapeHtml(q.question) +
      "</h3>" +
      '<div class="grid grid-cols-1 gap-3 mb-4" id="quiz-options-list">' +
      optionsHtml +
      "</div>" +
      '<div id="quiz-feedback-box" class="hidden p-4 rounded-xl mt-4"></div>' +
      "</div>";
  }

  function handleQuizOptionClick(optionIndex) {
    if (state.quizAnswered) return;
    var questions = window.QUIZ_QUESTIONS || [];
    var q = questions[state.quizIndex];
    if (!q) return;

    state.quizAnswered = true;
    var isCorrect = optionIndex === q.correctIndex;
    if (isCorrect) {
      state.quizScore += 1;
    }

    var optionButtons = document.querySelectorAll("[data-quiz-option]");
    for (var i = 0; i < optionButtons.length; i++) {
      optionButtons[i].disabled = true;
      if (i === q.correctIndex) {
        optionButtons[i].style.borderColor = "var(--accent-green)";
        optionButtons[i].style.backgroundColor = "var(--bg-subtle)";
      } else if (i === optionIndex && !isCorrect) {
        optionButtons[i].style.borderColor = "var(--accent-wine)";
      }
    }

    var feedbackBox = document.getElementById("quiz-feedback-box");
    if (feedbackBox) {
      feedbackBox.style.backgroundColor = isCorrect ? "var(--bg-amber-soft)" : "var(--bg-accent-soft)";
      feedbackBox.innerHTML =
        '<p class="font-bold text-base mb-1">' +
        (isCorrect ? "✓ Resposta Correta!" : "Explicação Histórica:") +
        "</p>" +
        '<p class="text-sm mb-4" style="color: var(--text-main);">' +
        escapeHtml(q.explanation) +
        "</p>" +
        '<button type="button" class="btn-primary" data-action="next-quiz-question">' +
        (state.quizIndex + 1 < questions.length ? "Próxima Pergunta →" : "Ver Resultado Final") +
        "</button>";
      feedbackBox.classList.remove("hidden");
    }
  }

  function renderBlogList() {
    var listEl = document.getElementById("blog-posts-grid");
    var readerEl = document.getElementById("blog-article-reader");
    if (!listEl || !readerEl) return;

    var posts = window.BLOG_POSTS || [];
    if (state.activeBlogPostId) {
      var activePost = null;
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === state.activeBlogPostId) {
          activePost = posts[i];
          break;
        }
      }
      if (activePost) {
        var paragraphsHtml = "";
        for (var p = 0; p < activePost.content.length; p++) {
          paragraphsHtml +=
            '<p class="mb-4 font-serif-sacred text-body-sacred leading-relaxed">' +
            escapeHtml(activePost.content[p]) +
            "</p>";
        }
        listEl.classList.add("hidden");
        readerEl.innerHTML =
          '<article class="surface-card p-6 sm:p-10 max-w-3xl mx-auto">' +
          '<div class="flex flex-wrap items-center justify-between gap-2 mb-4">' +
          '<button type="button" class="btn-secondary text-sm py-2 px-4" data-action="close-blog-post">← Voltar para a lista de artigos</button>' +
          '<span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded" style="background-color: var(--bg-subtle); color: var(--accent-wine);">' +
          escapeHtml(activePost.category) +
          "</span>" +
          "</div>" +
          '<h3 class="font-serif-sacred font-bold text-2xl sm:text-3xl mb-2">' +
          escapeHtml(activePost.title) +
          "</h3>" +
          '<p class="text-xs mb-6" style="color: var(--text-muted);">Publicado em ' +
          escapeHtml(activePost.date) +
          " • " +
          escapeHtml(activePost.readTime) +
          "</p>" +
          '<div class="border-t pt-5" style="border-color: var(--border-color);">' +
          paragraphsHtml +
          "</div>" +
          "</article>";
        readerEl.classList.remove("hidden");
        return;
      }
    }

    readerEl.classList.add("hidden");
    readerEl.innerHTML = "";
    listEl.classList.remove("hidden");

    var cardsHtml = "";
    for (var j = 0; j < posts.length; j++) {
      var post = posts[j];
      cardsHtml +=
        '<article class="surface-card p-6 flex flex-col justify-between">' +
        "<div>" +
        '<div class="flex items-center justify-between gap-2 mb-2">' +
        '<span class="text-xs font-bold uppercase tracking-wider" style="color: var(--accent-wine);">' +
        escapeHtml(post.category) +
        "</span>" +
        '<span class="text-xs" style="color: var(--text-muted);">' +
        escapeHtml(post.readTime) +
        "</span>" +
        "</div>" +
        '<h3 class="font-serif-sacred font-bold text-xl mb-2 leading-snug">' +
        escapeHtml(post.title) +
        "</h3>" +
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">' +
        escapeHtml(post.excerpt) +
        "</p>" +
        "</div>" +
        '<button type="button" class="btn-secondary w-full justify-center mt-2" data-open-blog="' +
        escapeHtml(post.id) +
        '">Abrir Página do Artigo →</button>' +
        "</article>";
    }
    listEl.innerHTML = cardsHtml;
  }

  /* =====================================================================
     DAILY RETENTION ENGINE ("Café Espiritual", "21 Dias São Miguel", "Trilhas")
     ===================================================================== */

  function getTodayDateKey() {
    var d = new Date();
    var yyyy = d.getFullYear();
    var mm = String(d.getMonth() + 1);
    if (mm.length < 2) mm = "0" + mm;
    var dd = String(d.getDate());
    if (dd.length < 2) dd = "0" + dd;
    return yyyy + "-" + mm + "-" + dd;
  }

  function formatTodayPtBr() {
    var weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    var d = new Date();
    return weekdays[d.getDay()] + ", " + d.getDate() + " de " + months[d.getMonth()];
  }

  function getCafeDaysList() {
    return window.CAFE_ESPIRITUAL_DAYS || [];
  }

  function getCafeDayObj(dayNum) {
    var list = getCafeDaysList();
    if (list.length === 0) return null;
    var normalized = Math.max(1, Math.min(list.length, Number(dayNum) || 1));
    for (var i = 0; i < list.length; i++) {
      if (list[i].day === normalized) return list[i];
    }
    return list[normalized - 1] || list[0];
  }

  function getCafeHistory() {
    var raw = safeStorageGet(STORAGE_KEYS.cafeHistory);
    var parsed = null;
    if (raw) {
      try {
        parsed = JSON.parse(raw);
      } catch (e) {}
    }
    if (!parsed || typeof parsed !== "object") {
      parsed = { completedDates: [] };
    }
    if (!Array.isArray(parsed.completedDates)) {
      parsed.completedDates = [];
    }
    return parsed;
  }

  function computeCafeStreak(completedDates) {
    if (!completedDates || completedDates.length === 0) return 0;
    var set = {};
    for (var i = 0; i < completedDates.length; i++) {
      set[completedDates[i]] = true;
    }
    var today = getTodayDateKey();
    var cursor = new Date();
    if (!set[today]) {
      cursor.setDate(cursor.getDate() - 1);
    }
    var streak = 0;
    while (streak < 366) {
      var yyyy = cursor.getFullYear();
      var mm = String(cursor.getMonth() + 1);
      if (mm.length < 2) mm = "0" + mm;
      var dd = String(cursor.getDate());
      if (dd.length < 2) dd = "0" + dd;
      var key = yyyy + "-" + mm + "-" + dd;
      if (set[key]) {
        streak += 1;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  function markCafeTodayCompleted() {
    var history = getCafeHistory();
    var todayKey = getTodayDateKey();
    if (history.completedDates.indexOf(todayKey) === -1) {
      history.completedDates.push(todayKey);
      safeStorageSet(STORAGE_KEYS.cafeHistory, JSON.stringify(history));
    }
    renderCafeDiario();
    renderHomeRetentionWidgets();
  }

  function getAllPrayerTracks() {
    return window.PRAYER_TRACKS || [];
  }

  function findPrayerTrack(trackId) {
    var tracks = getAllPrayerTracks();
    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].id === trackId) return tracks[i];
    }
    return null;
  }

  function getTracksProgressMap() {
    var raw = safeStorageGet(STORAGE_KEYS.tracksProgress);
    if (!raw) return {};
    try {
      var obj = JSON.parse(raw);
      return obj && typeof obj === "object" ? obj : {};
    } catch (e) {
      return {};
    }
  }

  function getTrackCompletedDays(trackId) {
    var map = getTracksProgressMap();
    var entry = map[trackId];
    return entry && Array.isArray(entry.completedDays) ? entry.completedDays : [];
  }

  function getNextPendingDay(track) {
    if (!track || !track.days || track.days.length === 0) return 1;
    var done = getTrackCompletedDays(track.id);
    for (var i = 0; i < track.days.length; i++) {
      if (done.indexOf(track.days[i].day) === -1) {
        return track.days[i].day;
      }
    }
    return track.days[track.days.length - 1].day;
  }

  function toggleTrackDayCompletion(trackId, dayNum) {
    var track = findPrayerTrack(trackId);
    if (!track) return;
    var map = getTracksProgressMap();
    if (!map[trackId] || !Array.isArray(map[trackId].completedDays)) {
      map[trackId] = { completedDays: [], lastDate: "" };
    }
    var list = map[trackId].completedDays;
    var idx = list.indexOf(dayNum);
    if (idx === -1) {
      list.push(dayNum);
      map[trackId].lastDate = getTodayDateKey();
    } else {
      list.splice(idx, 1);
    }
    safeStorageSet(STORAGE_KEYS.tracksProgress, JSON.stringify(map));

    var nextDay = Math.min(track.durationDays, dayNum + 1);
    if (trackId === "arcanjo-miguel-21" && idx === -1 && dayNum < track.durationDays) {
      state.miguelSelectedDay = nextDay;
    } else if (idx === -1 && dayNum < track.durationDays && state.activeTrackId === trackId) {
      state.activeTrackSelectedDay = nextDay;
    }

    renderHomeRetentionWidgets();
    renderArcanjoMiguelPage();
    renderTrilhasView();
  }

  function renderHomeRetentionWidgets() {
    var cafeHistory = getCafeHistory();
    var todayKey = getTodayDateKey();
    var doneToday = cafeHistory.completedDates.indexOf(todayKey) !== -1;
    var streak = computeCafeStreak(cafeHistory.completedDates);
    var todayDayObj = getCafeDayObj(new Date().getDate());

    var miguelTrack = findPrayerTrack("arcanjo-miguel-21");
    var miguelDone = miguelTrack ? getTrackCompletedDays(miguelTrack.id) : [];
    var miguelNext = miguelTrack ? getNextPendingDay(miguelTrack) : 1;
    var userCandles = getUserCandles();

    var banner = document.getElementById("home-continuity-banner");
    if (banner) {
      if (cafeHistory.completedDates.length > 0 || miguelDone.length > 0 || userCandles.length > 0) {
        var parts = [];
        if (cafeHistory.completedDates.length > 0) {
          parts.push("☕ " + cafeHistory.completedDates.length + (cafeHistory.completedDates.length === 1 ? " manhã no Café" : " manhãs no Café"));
        }
        if (miguelDone.length > 0) {
          parts.push("⚔️ São Miguel: " + miguelDone.length + "/21 dias");
        }
        if (userCandles.length > 0) {
          parts.push("🕯 " + userCandles.length + (userCandles.length === 1 ? " vela acesa" : " velas acesas"));
        }
        banner.innerHTML =
          '<div class="text-sm font-semibold" style="color: var(--text-main);">' +
          'Que alegria ter você de volta! • ' +
          escapeHtml(parts.join("  |  ")) +
          "</div>" +
          '<button type="button" class="btn-secondary text-xs py-1.5 px-3" data-nav-target="cafe-diario">' +
          (doneToday ? "✓ Café de hoje feito" : "Abrir Café de Hoje →") +
          "</button>";
        banner.classList.remove("hidden");
      } else {
        banner.classList.add("hidden");
      }
    }

    var cafeBadge = document.getElementById("home-cafe-badge");
    var cafeTeaser = document.getElementById("home-cafe-teaser");
    if (cafeBadge) {
      if (doneToday) {
        cafeBadge.textContent = "✅ Concluído hoje" + (streak > 1 ? " • " + streak + " dias seguidos" : "");
      } else {
        cafeBadge.textContent = "☕ Palavra de Hoje (Dia " + new Date().getDate() + ")";
      }
    }
    if (cafeTeaser && todayDayObj) {
      cafeTeaser.textContent = 'Tema de hoje: "' + todayDayObj.theme + '" (' + todayDayObj.reference + ").";
    }

    var miguelBadge = document.getElementById("home-miguel-badge");
    var miguelTeaser = document.getElementById("home-miguel-teaser");
    if (miguelBadge) {
      if (miguelDone.length > 0) {
        miguelBadge.textContent = "⚔️ Em andamento: " + miguelDone.length + " de 21 dias";
      } else {
        miguelBadge.textContent = "⚔️ Página Especial • 21 Dias";
      }
    }
    if (miguelTeaser) {
      if (miguelDone.length >= 21) {
        miguelTeaser.textContent = "Você completou todos os 21 dias de São Miguel Arcanjo! Releia quando desejar.";
      } else if (miguelDone.length > 0) {
        miguelTeaser.textContent = "Você já rezou " + miguelDone.length + " dia(s). Continue hoje pelo Dia " + miguelNext + " de 21.";
      } else {
        miguelTeaser.textContent = "Oração tradicional completa e caminhada guiada dos 21 dias com marcação diária no aparelho.";
      }
    }
  }

  function renderCafeDiario() {
    var container = document.getElementById("cafe-diario-container");
    if (!container) return;

    var list = getCafeDaysList();
    if (list.length === 0) return;

    var todayCalDay = new Date().getDate();
    if (state.cafeSelectedDay < 1 || state.cafeSelectedDay > list.length) {
      state.cafeSelectedDay = Math.min(list.length, todayCalDay);
    }
    var item = getCafeDayObj(state.cafeSelectedDay);
    var tomorrowItem = getCafeDayObj((item.day % list.length) + 1);
    var tradition = findTradition(state.selectedTraditionId);
    var history = getCafeHistory();
    var todayKey = getTodayDateKey();
    var isTodaySelected = item.day === Math.min(list.length, todayCalDay);
    var completedToday = history.completedDates.indexOf(todayKey) !== -1;
    var streak = computeCafeStreak(history.completedDates);

    var dayOptionsHtml = "";
    for (var i = 0; i < list.length; i++) {
      var dObj = list[i];
      dayOptionsHtml +=
        '<option value="' +
        dObj.day +
        '"' +
        (dObj.day === item.day ? " selected" : "") +
        ">Dia " +
        dObj.day +
        " - " +
        escapeHtml(dObj.theme) +
        "</option>";
    }

    var bodyParagraphs = item.message.split("\n\n");
    var msgHtml = "";
    for (var p = 0; p < bodyParagraphs.length; p++) {
      msgHtml += '<p class="mb-4 leading-relaxed">' + escapeHtml(bodyParagraphs[p]) + "</p>";
    }

    container.innerHTML =
      '<article class="surface-card overflow-hidden max-w-3xl mx-auto">' +
      '<div class="relative h-56 sm:h-72 w-full bg-black">' +
      '<img src="assets/traditions/cafe-espiritual.jpg" alt="Xícara de café pela manhã ao lado das escrituras sagradas" class="w-full h-full object-cover" />' +
      '<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">' +
      '<span class="inline-block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">' +
      escapeHtml(formatTodayPtBr()) +
      " • Devocional Diário" +
      "</span>" +
      '<h2 id="cafe-main-heading" class="font-serif-sacred font-bold text-2xl sm:text-4xl text-white">☕ Café Espiritual do Dia</h2>' +
      '<p class="text-sm sm:text-base text-amber-50/95 mt-1">' +
      escapeHtml(tradition ? tradition.greeting : "Paz e bem para a sua manhã!") +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="p-6 sm:p-10 space-y-6">' +
      '<div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl" style="background-color: var(--bg-subtle); border: 1px solid var(--border-color);">' +
      '<div class="text-sm font-semibold" style="color: var(--text-main);">' +
      (completedToday
        ? "✅ Café de hoje concluído! (" + history.completedDates.length + (history.completedDates.length === 1 ? " dia lido" : " dias lidos") + (streak > 1 ? " • " + streak + " seguidos" : "") + ")"
        : "☀️ Reflexão de hoje pronta para o seu coração" + (history.completedDates.length > 0 ? " (" + history.completedDates.length + " manhãs registradas)" : "")) +
      "</div>" +
      '<div class="flex flex-wrap items-center gap-2">' +
      '<label for="cafe-day-select" class="sr-only">Escolher dia do Café Espiritual</label>' +
      '<select id="cafe-day-select" class="input-sacred py-1.5 px-3 text-sm w-auto">' +
      dayOptionsHtml +
      "</select>" +
      (!isTodaySelected
        ? '<button type="button" class="btn-secondary text-xs py-2 px-3" data-action="cafe-jump-today">Ir para Hoje</button>'
        : "") +
      "</div>" +
      "</div>" +
      '<div class="text-center space-y-2">' +
      '<span class="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider" style="background-color: var(--bg-accent-soft); color: var(--accent-wine);">Dia ' +
      item.day +
      " de 31</span>" +
      '<h3 class="font-serif-sacred font-bold text-2xl sm:text-3xl" style="color: var(--text-main);">' +
      escapeHtml(item.theme) +
      "</h3>" +
      "</div>" +
      '<div class="p-6 rounded-2xl border text-center" style="background-color: var(--bg-amber-soft); border-color: var(--border-strong);">' +
      '<blockquote class="font-serif-sacred text-body-sacred font-semibold mb-2" style="color: var(--text-main);">“' +
      escapeHtml(item.verse) +
      '”</blockquote>' +
      '<p class="font-serif-sacred font-bold text-sm" style="color: var(--accent-wine);">' +
      escapeHtml(item.reference) +
      "</p>" +
      "</div>" +
      '<div class="font-serif-sacred text-body-sacred" style="color: var(--text-main);">' +
      msgHtml +
      "</div>" +
      '<div class="p-5 rounded-xl space-y-2" style="background-color: var(--bg-subtle); border-left: 4px solid var(--accent-amber);">' +
      '<p class="text-xs font-bold uppercase tracking-wider" style="color: var(--accent-amber);">🌿 Gesto Prático de Fé para Hoje</p>' +
      '<p class="text-base font-medium" style="color: var(--text-main);">' +
      escapeHtml(item.dailyAction) +
      "</p>" +
      "</div>" +
      '<div class="p-5 rounded-xl space-y-2" style="background-color: var(--bg-accent-soft); border: 1px solid var(--border-color);">' +
      '<p class="text-xs font-bold uppercase tracking-wider" style="color: var(--accent-wine);">🙏 Oração Breve desta Manhã</p>' +
      '<p class="font-serif-sacred text-body-sacred italic" style="color: var(--text-main);">' +
      escapeHtml(item.shortPrayer) +
      "</p>" +
      "</div>" +
      '<div class="flex flex-wrap items-center justify-center gap-3 pt-2">' +
      '<button type="button" class="' +
      (completedToday ? "btn-secondary" : "btn-primary") +
      ' inline-flex items-center gap-2" data-action="cafe-mark-done">' +
      (completedToday ? "✅ Café de Hoje Concluído" : "☕ Concluir meu Café Espiritual de Hoje") +
      "</button>" +
      '<button type="button" class="btn-secondary inline-flex items-center gap-2" data-action="speak-cafe-today" data-speech-id="cafe-today" data-default-label="Ouvir devocional em voz calma" aria-pressed="false">' +
      '<span aria-hidden="true">🔊</span> <span data-speech-label>Ouvir devocional em voz calma</span>' +
      "</button>" +
      '<button type="button" class="btn-secondary inline-flex items-center gap-2" data-action="share-cafe-whatsapp">' +
      '<span aria-hidden="true">📲</span> Bom Dia no WhatsApp' +
      "</button>" +
      "</div>" +
      (tomorrowItem
        ? '<div class="p-4 rounded-xl text-center text-sm" style="background-color: var(--bg-subtle); color: var(--text-secondary);">' +
          '<strong>Amanhã no seu Café Espiritual:</strong> “' +
          escapeHtml(tomorrowItem.theme) +
          '”. <button type="button" class="underline font-bold ml-1" style="color: var(--accent-wine);" data-nav-target="salvar-app">Salvar atalho no celular para não perder →</button>' +
          "</div>"
        : "") +
      "</div>" +
      "</article>";

    updateSpeechButtons();
  }

  function buildTrackInteractiveViewHtml(track, selectedDayNum, options) {
    if (!track || !track.days || track.days.length === 0) return "";
    var doneList = getTrackCompletedDays(track.id);
    var total = track.durationDays;
    var pct = Math.round((doneList.length / total) * 100);
    var activeDayNum = Math.max(1, Math.min(track.days.length, Number(selectedDayNum) || 1));
    var dayObj = track.days[activeDayNum - 1];
    var isDayDone = doneList.indexOf(dayObj.day) !== -1;

    var gridBtnsHtml = "";
    for (var i = 0; i < track.days.length; i++) {
      var d = track.days[i];
      var checked = doneList.indexOf(d.day) !== -1;
      var active = d.day === activeDayNum;
      var cls = "day-step-btn" + (checked ? " is-completed" : "") + (active ? " is-active" : "");
      gridBtnsHtml +=
        '<button type="button" class="' +
        cls +
        '" data-track-id="' +
        escapeHtml(track.id) +
        '" data-track-day="' +
        d.day +
        '" aria-label="Abrir Dia ' +
        d.day +
        (checked ? " (concluído)" : "") +
        '">' +
        (checked ? "✓ " : "") +
        d.day +
        "</button>";
    }

    var speechId = "track-" + track.id + "-day-" + dayObj.day;

    return (
      '<div class="space-y-6">' +
      '<div class="p-5 rounded-2xl border space-y-3" style="background-color: var(--bg-subtle); border-color: var(--border-color);">' +
      '<div class="flex flex-wrap items-center justify-between gap-2">' +
      '<span class="font-bold text-sm" style="color: var(--text-main);">Progresso nesta Jornada: ' +
      doneList.length +
      " de " +
      total +
      " dias concluídos (" +
      pct +
      "%)</span>" +
      '<span class="text-xs font-semibold" style="color: var(--accent-wine);">' +
      (doneList.length >= total ? "🎉 Jornada concluída com fé!" : "Toque no número abaixo para escolher o dia") +
      "</span>" +
      "</div>" +
      '<div class="progress-track-bar" role="progressbar" aria-valuenow="' +
      pct +
      '" aria-valuemin="0" aria-valuemax="100">' +
      '<div class="progress-track-fill" style="width: ' +
      pct +
      '%;"></div>' +
      "</div>" +
      '<div class="grid grid-cols-5 sm:grid-cols-7 gap-2 pt-2">' +
      gridBtnsHtml +
      "</div>" +
      "</div>" +
      '<div class="p-6 sm:p-8 rounded-2xl border space-y-5" style="background-color: var(--bg-amber-soft); border-color: var(--border-strong);">' +
      '<div class="flex flex-wrap items-center justify-between gap-2 border-b pb-3" style="border-color: var(--border-color);">' +
      '<h3 class="font-serif-sacred font-bold text-xl sm:text-2xl" style="color: var(--accent-wine);">' +
      escapeHtml(dayObj.title) +
      "</h3>" +
      (isDayDone
        ? '<span class="px-3 py-1 rounded-full text-xs font-bold" style="background-color: var(--bg-surface); color: var(--accent-green); border: 1px solid var(--accent-green);">✓ Dia Concluído</span>'
        : '<span class="px-3 py-1 rounded-full text-xs font-bold" style="background-color: var(--bg-surface); color: var(--text-muted);">Pendente hoje</span>') +
      "</div>" +
      '<p class="text-sm font-semibold" style="color: var(--text-secondary);"><strong>Intenção do Dia:</strong> ' +
      escapeHtml(dayObj.intention) +
      "</p>" +
      '<div class="p-4 rounded-xl" style="background-color: var(--bg-surface); border: 1px solid var(--border-color);">' +
      '<p class="text-xs font-bold uppercase tracking-wider mb-1" style="color: var(--accent-wine);">Palavra de Firmeza (' +
      escapeHtml(dayObj.scriptureRef) +
      ")</p>" +
      '<p class="font-serif-sacred font-semibold text-base" style="color: var(--text-main);">“' +
      escapeHtml(dayObj.scriptureText) +
      '”</p>' +
      "</div>" +
      '<p class="text-base leading-relaxed" style="color: var(--text-main);">' +
      escapeHtml(dayObj.meditation) +
      "</p>" +
      '<div class="p-5 rounded-xl" style="background-color: var(--bg-surface); border-left: 4px solid var(--accent-wine);">' +
      '<p class="text-xs font-bold uppercase tracking-wider mb-2" style="color: var(--accent-wine);">Oração do Dia ' +
      dayObj.day +
      "</p>" +
      '<p class="font-serif-sacred text-body-sacred leading-relaxed" style="color: var(--text-main);">' +
      escapeHtml(dayObj.prayer) +
      "</p>" +
      "</div>" +
      '<div class="flex flex-wrap items-center justify-between gap-3 pt-2">' +
      '<button type="button" class="' +
      (isDayDone ? "btn-secondary" : "btn-primary") +
      ' inline-flex items-center gap-2" data-toggle-track-day="' +
      dayObj.day +
      '" data-toggle-track-id="' +
      escapeHtml(track.id) +
      '">' +
      (isDayDone ? "✓ Dia " + dayObj.day + " Concluído (Desmarcar)" : "✓ Concluir Oração do Dia " + dayObj.day) +
      "</button>" +
      '<div class="flex flex-wrap gap-2">' +
      '<button type="button" class="btn-secondary text-sm inline-flex items-center gap-2" data-speech-id="' +
      escapeHtml(speechId) +
      '" data-speak-track-id="' +
      escapeHtml(track.id) +
      '" data-speak-track-day="' +
      dayObj.day +
      '" data-default-label="Ouvir em voz calma" aria-pressed="false">' +
      '<span aria-hidden="true">🔊</span> <span data-speech-label>Ouvir em voz calma</span>' +
      "</button>" +
      '<button type="button" class="btn-secondary text-sm inline-flex items-center gap-2" data-share-track-id="' +
      escapeHtml(track.id) +
      '" data-share-track-day="' +
      dayObj.day +
      '">' +
      '<span aria-hidden="true">📲</span> WhatsApp' +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      (options && options.extraFooterHtml ? options.extraFooterHtml : "") +
      "</div>"
    );
  }

  function renderArcanjoMiguelPage() {
    var container = document.getElementById("arcanjo-miguel-container");
    if (!container) return;

    var data = window.SAO_MIGUEL_ARCANJO_DATA;
    var track = findPrayerTrack("arcanjo-miguel-21");
    if (!data || !track) return;

    var doneDays = getTrackCompletedDays(track.id);
    if (doneDays.length > 0 && state.miguelSelectedDay === 1 && !state._miguelDayInitialized) {
      state.miguelSelectedDay = getNextPendingDay(track);
      state._miguelDayInitialized = true;
    }

    var prayersHtml = "";
    for (var i = 0; i < data.prayers.length; i++) {
      var pr = data.prayers[i];
      var paragraphs = pr.text.split("\n\n");
      var pTextHtml = "";
      for (var k = 0; k < paragraphs.length; k++) {
        pTextHtml += '<p class="mb-3 leading-relaxed">' + escapeHtml(paragraphs[k]) + "</p>";
      }
      var spId = "miguel-prayer-" + pr.id;
      prayersHtml +=
        '<div class="p-6 sm:p-7 rounded-2xl border space-y-4" style="background-color: var(--bg-amber-soft); border-color: var(--border-strong);">' +
        "<div>" +
        '<h3 class="font-serif-sacred font-bold text-xl sm:text-2xl" style="color: var(--accent-wine);">' +
        escapeHtml(pr.title) +
        "</h3>" +
        '<p class="text-sm mt-1" style="color: var(--text-secondary);">' +
        escapeHtml(pr.subtitle) +
        "</p>" +
        "</div>" +
        '<div class="font-serif-sacred text-body-sacred p-5 rounded-xl" style="background-color: var(--bg-surface); color: var(--text-main); border: 1px solid var(--border-color);">' +
        pTextHtml +
        "</div>" +
        '<div class="flex flex-wrap gap-3">' +
        '<button type="button" class="btn-primary text-sm inline-flex items-center gap-2" data-speech-id="' +
        escapeHtml(spId) +
        '" data-speak-miguel-prayer="' +
        escapeHtml(pr.id) +
        '" data-default-label="Ouvir Oração" aria-pressed="false">' +
        '<span aria-hidden="true">🔊</span> <span data-speech-label>Ouvir Oração</span>' +
        "</button>" +
        '<button type="button" class="btn-secondary text-sm inline-flex items-center gap-2" data-share-miguel-prayer="' +
        escapeHtml(pr.id) +
        '">' +
        '<span aria-hidden="true">📲</span> Enviar no WhatsApp' +
        "</button>" +
        "</div>" +
        "</div>";
    }

    var tabContentHtml = "";
    if (state.miguelSubTab === "21dias") {
      tabContentHtml = buildTrackInteractiveViewHtml(track, state.miguelSelectedDay, {
        extraFooterHtml:
          '<div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl" style="background-color: var(--bg-surface); border: 1px solid var(--border-color);">' +
          '<span class="text-sm" style="color: var(--text-secondary);">Deseja acompanhar com a oração clássica de Papa Leão XIII e a Oração de Purificação?</span>' +
          '<button type="button" class="btn-secondary text-sm" data-miguel-tab="prayers">Ler Orações Completas</button>' +
          "</div>"
      });
    } else {
      tabContentHtml =
        '<div class="space-y-6">' +
        '<div class="p-5 rounded-xl flex flex-wrap items-center justify-between gap-4" style="background-color: var(--bg-accent-soft); border: 1px solid var(--accent-wine);">' +
        "<div>" +
        '<p class="font-serif-sacred font-bold text-lg" style="color: var(--accent-wine);">Trilha Completa dos 21 Dias de São Miguel Arcanjo</p>' +
        '<p class="text-sm" style="color: var(--text-secondary);">Acompanhe dia a dia do Dia 1 ao Dia 21 com intenção diária e marcação automática no seu celular (' +
        doneDays.length +
        "/21 concluídos).</p>" +
        "</div>" +
        '<button type="button" class="btn-primary text-sm" data-miguel-tab="21dias">⚔️ Abrir Checklist dos 21 Dias →</button>' +
        "</div>" +
        '<p class="text-base leading-relaxed" style="color: var(--text-secondary);">' +
        escapeHtml(data.introText) +
        "</p>" +
        prayersHtml +
        "</div>";
    }

    container.innerHTML =
      '<article class="surface-card overflow-hidden max-w-3xl mx-auto">' +
      '<div class="relative h-64 sm:h-80 w-full bg-black">' +
      '<img src="' +
      escapeHtml(data.imagePath) +
      '" onerror="this.src=\'' +
      escapeHtml(data.fallbackImagePath) +
      '\'" alt="São Miguel Arcanjo" class="w-full h-full object-cover" />' +
      '<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">' +
      '<span class="inline-block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">' +
      escapeHtml(data.imageCaption) +
      "</span>" +
      '<h2 id="miguel-main-heading" class="font-serif-sacred font-bold text-2xl sm:text-4xl text-white">⚔️ ' +
      escapeHtml(data.title) +
      "</h2>" +
      '<p class="text-sm sm:text-base text-amber-50/95 mt-1">' +
      escapeHtml(data.subtitle) +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="p-6 sm:p-10 space-y-6">' +
      '<div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b" style="border-color: var(--border-color);">' +
      '<div class="flex flex-wrap gap-2" role="group" aria-label="Páginas de São Miguel Arcanjo">' +
      '<button type="button" class="feeling-chip" data-miguel-tab="prayers" aria-pressed="' +
      (state.miguelSubTab === "prayers" ? "true" : "false") +
      '">🙏 Orações Completas</button>' +
      '<button type="button" class="feeling-chip" data-miguel-tab="21dias" aria-pressed="' +
      (state.miguelSubTab === "21dias" ? "true" : "false") +
      '">🗓 Trilha dos 21 Dias (' +
      doneDays.length +
      "/21)</button>" +
      "</div>" +
      '<button type="button" class="btn-secondary text-xs py-2 px-3" data-nav-target="vela">🕯 Acender Vela de 7 Dias</button>' +
      "</div>" +
      tabContentHtml +
      "</div>" +
      "</article>";

    updateSpeechButtons();
  }

  function renderTrilhasView() {
    var container = document.getElementById("trilhas-container");
    if (!container) return;

    var tracks = getAllPrayerTracks();
    if (state.activeTrackId) {
      var activeTrack = findPrayerTrack(state.activeTrackId);
      if (activeTrack) {
        container.innerHTML =
          '<div class="space-y-6 max-w-3xl mx-auto">' +
          '<div class="surface-card p-6 sm:p-8">' +
          '<div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b" style="border-color: var(--border-color);">' +
          '<button type="button" class="btn-secondary text-sm" data-action="back-to-trilhas-list">← Ver Todas as Trilhas</button>' +
          '<span class="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider" style="background-color: var(--bg-subtle); color: var(--accent-wine);">' +
          escapeHtml(activeTrack.badge) +
          "</span>" +
          "</div>" +
          '<h2 id="trilhas-main-heading" class="font-serif-sacred font-bold text-2xl sm:text-3xl mb-2" style="color: var(--text-main);">' +
          escapeHtml(activeTrack.title) +
          "</h2>" +
          '<p class="text-sm mb-6" style="color: var(--text-secondary);">' +
          escapeHtml(activeTrack.description) +
          "</p>" +
          buildTrackInteractiveViewHtml(activeTrack, state.activeTrackSelectedDay) +
          "</div>" +
          "</div>";
        updateSpeechButtons();
        return;
      }
    }

    var cardsHtml = "";
    for (var i = 0; i < tracks.length; i++) {
      var tr = tracks[i];
      var done = getTrackCompletedDays(tr.id);
      var pct = Math.round((done.length / tr.durationDays) * 100);
      var nextD = getNextPendingDay(tr);

      cardsHtml +=
        '<article class="surface-card p-6 flex flex-col justify-between">' +
        "<div>" +
        '<div class="flex flex-wrap items-center justify-between gap-2 mb-2">' +
        '<span class="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider" style="background-color: var(--bg-accent-soft); color: var(--accent-wine);">' +
        escapeHtml(tr.badge) +
        "</span>" +
        '<span class="text-xs font-bold" style="color: var(--text-muted);">' +
        done.length +
        "/" +
        tr.durationDays +
        " dias</span>" +
        "</div>" +
        '<h3 class="font-serif-sacred font-bold text-xl mb-1" style="color: var(--text-main);">' +
        escapeHtml(tr.title) +
        "</h3>" +
        '<p class="text-xs font-semibold mb-2" style="color: var(--accent-amber);">' +
        escapeHtml(tr.traditionLabel) +
        "</p>" +
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">' +
        escapeHtml(tr.description) +
        "</p>" +
        '<div class="progress-track-bar mb-4"><div class="progress-track-fill" style="width: ' +
        pct +
        '%;"></div></div>' +
        "</div>" +
        '<button type="button" class="btn-primary w-full text-sm" data-open-track="' +
        escapeHtml(tr.id) +
        '">' +
        (done.length > 0 && done.length < tr.durationDays
          ? "Continuar no Dia " + nextD + " →"
          : "Abrir Trilha Completa →") +
        "</button>" +
        "</article>";
    }

    container.innerHTML =
      '<div class="space-y-6">' +
      '<div class="surface-card p-6 sm:p-8 text-center max-w-2xl mx-auto">' +
      '<h2 id="trilhas-main-heading" class="font-serif-sacred heading-section font-bold mb-2">Trilhas de Oração Multi-Dias (7, 9 e 21 Dias)</h2>' +
      '<p class="text-sm" style="color: var(--text-secondary);">Escolha uma jornada abaixo para cultivar constância diária na fé. Seu progresso fica salvo automaticamente neste aparelho.</p>' +
      "</div>" +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">' +
      cardsHtml +
      "</div>" +
      "</div>";
  }

  function triggerPwaInstall() {
    var feedbackEl = document.getElementById("pwa-install-feedback");
    if (state.deferredPwaPrompt) {
      try {
        state.deferredPwaPrompt.prompt();
        state.deferredPwaPrompt.userChoice.then(function () {
          state.deferredPwaPrompt = null;
        });
      } catch (e) {}
      if (feedbackEl) {
        feedbackEl.textContent = "Confirme na janela do seu navegador para criar o ícone do Horizonte Espiritual na sua tela inicial!";
        feedbackEl.classList.remove("hidden");
      }
      return;
    }

    if (feedbackEl) {
      feedbackEl.textContent =
        "No celular: toque no menu (⋮ no Chrome do Android) ou no botão Compartilhar (Safari do iPhone) e escolha 'Adicionar à tela inicial'. Assim nosso ícone fica salvo junto aos seus aplicativos!";
      feedbackEl.classList.remove("hidden");
    }
  }

  function downloadDailyReminderIcs() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 7, 30, 0);
    function pad2(n) {
      return n < 10 ? "0" + n : String(n);
    }
    var dtStart =
      start.getFullYear() +
      pad2(start.getMonth() + 1) +
      pad2(start.getDate()) +
      "T" +
      pad2(start.getHours()) +
      pad2(start.getMinutes()) +
      "00";

    var icsContent =
      "BEGIN:VCALENDAR\r\n" +
      "VERSION:2.0\r\n" +
      "PRODID:-//Horizonte Espiritual//PT-BR\r\n" +
      "BEGIN:VEVENT\r\n" +
      "UID:horizonte-espiritual-manha@local\r\n" +
      "DTSTAMP:" + dtStart + "\r\n" +
      "DTSTART:" + dtStart + "\r\n" +
      "DURATION:PT15M\r\n" +
      "RRULE:FREQ=DAILY;COUNT=21\r\n" +
      "SUMMARY:Horizonte Espiritual - Café Diário e Oração (21 Dias)\r\n" +
      "DESCRIPTION:Reserve 5 minutos serenos com seu Café Espiritual do Dia ou Trilha de São Miguel Arcanjo.\r\n" +
      "END:VEVENT\r\n" +
      "END:VCALENDAR\r\n";

    try {
      var blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "Lembrete-Horizonte-Espiritual-21dias.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {}

    var feedback = document.getElementById("ics-feedback");
    if (feedback) {
      feedback.textContent = "✓ Lembrete criado! Abra o arquivo baixado no seu celular para ativar o aviso às 07:30 na agenda.";
      feedback.classList.remove("hidden");
    }
  }

  function copyPixKey() {
    var pixKey = "eupaulorrenato@gmail.com";
    var feedbackEl = document.getElementById("pix-copy-feedback");

    function showSuccess() {
      if (feedbackEl) {
        feedbackEl.textContent = "✓ Chave PIX eupaulorrenato@gmail.com copiada! Agora basta colar no aplicativo do seu banco.";
        feedbackEl.classList.remove("hidden");
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pixKey).then(showSuccess).catch(function () {
        fallbackCopy(pixKey, showSuccess);
      });
    } else {
      fallbackCopy(pixKey, showSuccess);
    }
  }

  function fallbackCopy(text, callback) {
    var temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "readonly");
    temp.style.position = "absolute";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(temp);
    if (callback) callback();
  }

  function shareViaWhatsApp(message) {
    var url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function initEvents() {
    document.addEventListener("click", function (event) {
      var target = event.target;

      var navBtn = target.closest("[data-nav-target]");
      if (navBtn) {
        event.preventDefault();
        navigateToSection(navBtn.getAttribute("data-nav-target"), true);
        return;
      }

      var openPrayerBtn = target.closest("[data-open-prayer]");
      if (openPrayerBtn) {
        state.activePrayerId = openPrayerBtn.getAttribute("data-open-prayer");
        renderPrayersView();
        var mainEl = document.getElementById("main-content");
        if (mainEl) mainEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      var speechPrayerBtn = target.closest("[data-speech-prayer]");
      if (speechPrayerBtn) {
        var pId = speechPrayerBtn.getAttribute("data-speech-prayer");
        var prayers = window.STRONG_PRAYERS || [];
        for (var i = 0; i < prayers.length; i++) {
          if (prayers[i].id === pId) {
            speakText("prayer-" + pId, prayers[i].title + ". " + prayers[i].text);
            break;
          }
        }
        return;
      }

      var sharePrayerBtn = target.closest("[data-share-prayer]");
      if (sharePrayerBtn) {
        var spId = sharePrayerBtn.getAttribute("data-share-prayer");
        var allP = window.STRONG_PRAYERS || [];
        for (var j = 0; j < allP.length; j++) {
          if (allP[j].id === spId) {
            shareViaWhatsApp(
              "*" + allP[j].title + "* (" + allP[j].categoryLabel + ")\n\n" + allP[j].text + "\n\nHorizonte Espiritual (Acesso 100% Gratuito)"
            );
            break;
          }
        }
        return;
      }

      var candleSubPageBtn = target.closest("[data-candle-subpage]");
      if (candleSubPageBtn) {
        state.candleSubPage = candleSubPageBtn.getAttribute("data-candle-subpage");
        renderCandleSubPages();
        return;
      }

      var candleFilterBtn = target.closest("[data-candle-filter]");
      if (candleFilterBtn) {
        state.candleFilter = candleFilterBtn.getAttribute("data-candle-filter");
        state.candleWallPage = 1;
        renderCandlesWall();
        return;
      }

      var shareCandleBtn = target.closest("[data-share-candle]");
      if (shareCandleBtn) {
        var cId = shareCandleBtn.getAttribute("data-share-candle");
        var allCandles = getUserCandles().concat(window.INITIAL_CANDLES || []);
        for (var k = 0; k < allCandles.length; k++) {
          if (allCandles[k].id === cId) {
            shareViaWhatsApp(
              "🕯 Acendi uma Vela Virtual de 7 dias no *Horizonte Espiritual* em intenção de *" +
                allCandles[k].honoree +
                "*:\n\n“" +
                allCandles[k].intention +
                "”\n\nQue a luz e a paz estejam com você!"
            );
            break;
          }
        }
        return;
      }

      var quizOptBtn = target.closest("[data-quiz-option]");
      if (quizOptBtn) {
        handleQuizOptionClick(Number(quizOptBtn.getAttribute("data-quiz-option")));
        return;
      }

      var openBlogBtn = target.closest("[data-open-blog]");
      if (openBlogBtn) {
        state.activeBlogPostId = openBlogBtn.getAttribute("data-open-blog");
        renderBlogList();
        var mainBlog = document.getElementById("main-content");
        if (mainBlog) mainBlog.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      var miguelTabBtn = target.closest("[data-miguel-tab]");
      if (miguelTabBtn) {
        state.miguelSubTab = miguelTabBtn.getAttribute("data-miguel-tab") === "21dias" ? "21dias" : "prayers";
        stopSpeech();
        renderArcanjoMiguelPage();
        return;
      }

      var speakMiguelBtn = target.closest("[data-speak-miguel-prayer]");
      if (speakMiguelBtn && window.SAO_MIGUEL_ARCANJO_DATA) {
        var mpId = speakMiguelBtn.getAttribute("data-speak-miguel-prayer");
        var mpList = window.SAO_MIGUEL_ARCANJO_DATA.prayers || [];
        for (var m = 0; m < mpList.length; m++) {
          if (mpList[m].id === mpId) {
            speakText("miguel-prayer-" + mpId, mpList[m].title + ". " + mpList[m].text);
            break;
          }
        }
        return;
      }

      var shareMiguelBtn = target.closest("[data-share-miguel-prayer]");
      if (shareMiguelBtn && window.SAO_MIGUEL_ARCANJO_DATA) {
        var smId = shareMiguelBtn.getAttribute("data-share-miguel-prayer");
        var smpList = window.SAO_MIGUEL_ARCANJO_DATA.prayers || [];
        for (var sm = 0; sm < smpList.length; sm++) {
          if (smpList[sm].id === smId) {
            shareViaWhatsApp(
              "⚔️ *" + smpList[sm].title + "*\n\n" + smpList[sm].text + "\n\nHorizonte Espiritual"
            );
            break;
          }
        }
        return;
      }

      var openTrackBtn = target.closest("[data-open-track]");
      if (openTrackBtn) {
        var otId = openTrackBtn.getAttribute("data-open-track");
        if (otId === "arcanjo-miguel-21") {
          state.miguelSubTab = "21dias";
          var otObj = findPrayerTrack(otId);
          if (otObj) state.miguelSelectedDay = getNextPendingDay(otObj);
          navigateToSection("arcanjo-miguel", true);
          return;
        }
        var foundTr = findPrayerTrack(otId);
        state.activeTrackId = otId;
        state.activeTrackSelectedDay = foundTr ? getNextPendingDay(foundTr) : 1;
        stopSpeech();
        renderTrilhasView();
        var mTop = document.getElementById("main-content");
        if (mTop) mTop.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      var trackDayBtn = target.closest("[data-track-day][data-track-id]");
      if (trackDayBtn) {
        var tdId = trackDayBtn.getAttribute("data-track-id");
        var tdDay = Number(trackDayBtn.getAttribute("data-track-day")) || 1;
        stopSpeech();
        if (tdId === "arcanjo-miguel-21") {
          state.miguelSelectedDay = tdDay;
          renderArcanjoMiguelPage();
        } else {
          state.activeTrackId = tdId;
          state.activeTrackSelectedDay = tdDay;
          renderTrilhasView();
        }
        return;
      }

      var toggleDayBtn = target.closest("[data-toggle-track-day][data-toggle-track-id]");
      if (toggleDayBtn) {
        var tgdId = toggleDayBtn.getAttribute("data-toggle-track-id");
        var tgdDay = Number(toggleDayBtn.getAttribute("data-toggle-track-day")) || 1;
        toggleTrackDayCompletion(tgdId, tgdDay);
        return;
      }

      var speakTrackBtn = target.closest("[data-speak-track-id][data-speak-track-day]");
      if (speakTrackBtn) {
        var stId = speakTrackBtn.getAttribute("data-speak-track-id");
        var stDay = Number(speakTrackBtn.getAttribute("data-speak-track-day")) || 1;
        var stObj = findPrayerTrack(stId);
        var stDayObj = stObj && stObj.days && stObj.days[stDay - 1];
        if (stDayObj) {
          speakText(
            "track-" + stId + "-day-" + stDay,
            stDayObj.title + ". " + stDayObj.scriptureText + ". " + stDayObj.meditation + ". Oração: " + stDayObj.prayer
          );
        }
        return;
      }

      var shareTrackBtn = target.closest("[data-share-track-id][data-share-track-day]");
      if (shareTrackBtn) {
        var shId = shareTrackBtn.getAttribute("data-share-track-id");
        var shDay = Number(shareTrackBtn.getAttribute("data-share-track-day")) || 1;
        var shObj = findPrayerTrack(shId);
        var shDayObj = shObj && shObj.days && shObj.days[shDay - 1];
        if (shObj && shDayObj) {
          shareViaWhatsApp(
            "🗓 *" +
              shObj.shortTitle +
              " - " +
              shDayObj.title +
              "*\n\n“" +
              shDayObj.scriptureText +
              "” (" +
              shDayObj.scriptureRef +
              ")\n\n" +
              shDayObj.prayer +
              "\n\nHorizonte Espiritual"
          );
        }
        return;
      }

      var actionBtn = target.closest("[data-action]");
      if (!actionBtn) return;

      var action = actionBtn.getAttribute("data-action");
      if (action === "toggle-theme") {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      } else if (action === "toggle-drawer-menu") {
        toggleDrawerMenu();
      } else if (action === "close-drawer-menu") {
        toggleDrawerMenu(false);
      } else if (action === "font-decrease") {
        applyReaderFontSize(state.readerFontSizePx - 2);
      } else if (action === "font-increase") {
        applyReaderFontSize(state.readerFontSizePx + 2);
      } else if (action === "open-tradition-page") {
        navigateToSection("vertente", true);
      } else if (action === "open-tradition-library") {
        state.libraryTraditionId = state.selectedTraditionId;
        state.libraryBookIndex = 0;
        state.libraryChapterIndex = 0;
        renderSacredLibrary();
        navigateToSection("escrituras", true);
      } else if (action === "open-tradition-prayers") {
        state.prayerCategory = state.selectedTraditionId;
        state.prayerPage = 1;
        state.activePrayerId = null;
        renderPrayersView();
        navigateToSection("oracoes", true);
      } else if (action === "speak-daily-passage") {
        var t = findTradition(state.selectedTraditionId);
        var p = t && t.dailyPassages && t.dailyPassages[state.selectedFeeling];
        if (p) {
          speakText("daily-passage", p.text + ". " + p.reference + ". Reflexão: " + p.reflection);
        }
      } else if (action === "share-daily-passage") {
        var tr = findTradition(state.selectedTraditionId);
        var ps = tr && tr.dailyPassages && tr.dailyPassages[state.selectedFeeling];
        if (ps) {
          shareViaWhatsApp(
            "*Palavra do Dia (" +
              tr.name +
              ")*\n\n“" +
              ps.text +
              "”\n(" +
              ps.reference +
              ")\n\n" +
              ps.reflection +
              "\n\nHorizonte Espiritual"
          );
        }
      } else if (action === "back-to-prayers-list") {
        state.activePrayerId = null;
        stopSpeech();
        renderPrayersView();
      } else if (action === "prayer-prev-page") {
        state.prayerPage = Math.max(1, state.prayerPage - 1);
        renderPrayersView();
      } else if (action === "prayer-next-page") {
        state.prayerPage += 1;
        renderPrayersView();
      } else if (action === "reset-prayer-filters") {
        state.prayerCategory = "todas";
        state.prayerSearchQuery = "";
        state.prayerPage = 1;
        var searchInput = document.getElementById("prayer-search-input");
        if (searchInput) searchInput.value = "";
        renderPrayersView();
      } else if (action === "candle-prev-page") {
        state.candleWallPage = Math.max(1, state.candleWallPage - 1);
        renderCandlesWall();
      } else if (action === "candle-next-page") {
        state.candleWallPage += 1;
        renderCandlesWall();
      } else if (action === "toggle-flame-motion") {
        state.flamePaused = !state.flamePaused;
        var heroFlame = document.getElementById("hero-candle-flame");
        if (heroFlame) {
          heroFlame.classList.toggle("paused", state.flamePaused);
        }
        actionBtn.setAttribute("aria-pressed", state.flamePaused ? "true" : "false");
        actionBtn.textContent = state.flamePaused ? "▶ Retomar movimento da chama" : "⏸ Pausar animação da chama";
        renderCandlesWall();
      } else if (action === "speak-library-chapter") {
        var books = getLibraryBooksForTradition(state.libraryTraditionId);
        var curBook = books[state.libraryBookIndex];
        var ch = curBook && curBook.chapters && curBook.chapters[state.libraryChapterIndex];
        if (ch) {
          speakText("library-chapter", ch.title + ". " + ch.verses.slice(0, 35).join(" "));
        }
      } else if (action === "prev-library-chapter") {
        var bListPrev = getLibraryBooksForTradition(state.libraryTraditionId);
        if (bListPrev.length === 0) return;
        if (state.libraryChapterIndex > 0) {
          state.libraryChapterIndex -= 1;
        } else if (state.libraryBookIndex > 0) {
          state.libraryBookIndex -= 1;
          var prevBookChaps = bListPrev[state.libraryBookIndex].chapters || [];
          state.libraryChapterIndex = Math.max(0, prevBookChaps.length - 1);
        } else {
          state.libraryBookIndex = bListPrev.length - 1;
          var lastBookChaps = bListPrev[state.libraryBookIndex].chapters || [];
          state.libraryChapterIndex = Math.max(0, lastBookChaps.length - 1);
        }
        stopSpeech();
        renderSacredLibrary();
        var readerTopPrev = document.getElementById("library-reader-card");
        if (readerTopPrev) readerTopPrev.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (action === "next-library-chapter") {
        var bListNext = getLibraryBooksForTradition(state.libraryTraditionId);
        if (bListNext.length === 0) return;
        var activeB = bListNext[state.libraryBookIndex];
        var chCount = (activeB && activeB.chapters && activeB.chapters.length) || 0;
        if (state.libraryChapterIndex + 1 < chCount) {
          state.libraryChapterIndex += 1;
        } else if (state.libraryBookIndex + 1 < bListNext.length) {
          state.libraryBookIndex += 1;
          state.libraryChapterIndex = 0;
        } else {
          state.libraryBookIndex = 0;
          state.libraryChapterIndex = 0;
        }
        stopSpeech();
        renderSacredLibrary();
        var readerTopNext = document.getElementById("library-reader-card");
        if (readerTopNext) readerTopNext.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (action === "next-quiz-question") {
        state.quizIndex += 1;
        state.quizAnswered = false;
        renderQuiz();
      } else if (action === "restart-quiz") {
        state.quizIndex = 0;
        state.quizScore = 0;
        state.quizAnswered = false;
        renderQuiz();
      } else if (action === "close-blog-post") {
        state.activeBlogPostId = null;
        renderBlogList();
      } else if (action === "copy-pix-key") {
        copyPixKey();
      } else if (action === "open-miguel-21dias") {
        state.miguelSubTab = "21dias";
        var trM = findPrayerTrack("arcanjo-miguel-21");
        if (trM) state.miguelSelectedDay = getNextPendingDay(trM);
        navigateToSection("arcanjo-miguel", true);
      } else if (action === "cafe-jump-today") {
        state.cafeSelectedDay = Math.min(getCafeDaysList().length, new Date().getDate());
        stopSpeech();
        renderCafeDiario();
      } else if (action === "cafe-mark-done") {
        markCafeTodayCompleted();
      } else if (action === "speak-cafe-today") {
        var cDay = getCafeDayObj(state.cafeSelectedDay);
        if (cDay) {
          speakText(
            "cafe-today",
            cDay.theme + ". " + cDay.verse + ". " + cDay.message + ". Oração: " + cDay.shortPrayer
          );
        }
      } else if (action === "share-cafe-whatsapp") {
        var cw = getCafeDayObj(state.cafeSelectedDay);
        if (cw) {
          shareViaWhatsApp(
            "☕ *Café Espiritual do Dia (" +
              cw.theme +
              ")*\n\n“" +
              cw.verse +
              "”\n(" +
              cw.reference +
              ")\n\n" +
              cw.shortPrayer +
              "\n\nHorizonte Espiritual (Acesso Gratuito)"
          );
        }
      } else if (action === "back-to-trilhas-list") {
        state.activeTrackId = null;
        stopSpeech();
        renderTrilhasView();
      } else if (action === "trigger-pwa-install") {
        triggerPwaInstall();
      } else if (action === "share-bookmark-whatsapp") {
        var currentHref = window.location.href && window.location.href.indexOf("http") === 0 ? window.location.href : "https://eupaulorrenato-maker.github.io/horizonte-espiritual/";
        shareViaWhatsApp(
          "🌅 *Horizonte Espiritual* - Meu refúgio diário gratuito para Café Espiritual do Dia, 21 Dias de São Miguel Arcanjo, Velas de 7 Dias e Obras Sagradas Completas:\n\n" +
            currentHref
        );
      } else if (action === "download-daily-ics") {
        downloadDailyReminderIcs();
      }
    });

    document.addEventListener("change", function (event) {
      if (event.target && event.target.id === "cafe-day-select") {
        state.cafeSelectedDay = Number(event.target.value) || 1;
        stopSpeech();
        renderCafeDiario();
      }
    });

    window.addEventListener("beforeinstallprompt", function (event) {
      event.preventDefault();
      state.deferredPwaPrompt = event;
    });

    var homeTradSelect = document.getElementById("home-tradition-select");
    if (homeTradSelect) {
      homeTradSelect.addEventListener("change", function () {
        // Selecting a tradition redirects to that tradition's dedicated page with its realistic image!
        selectTradition(homeTradSelect.value, true);
      });
    }

    var homeFeelSelect = document.getElementById("home-feeling-select");
    if (homeFeelSelect) {
      homeFeelSelect.addEventListener("change", function () {
        state.selectedFeeling = homeFeelSelect.value;
        renderDailyPanel();
      });
    }

    var vertenteFeelSelect = document.getElementById("vertente-feeling-select");
    if (vertenteFeelSelect) {
      vertenteFeelSelect.addEventListener("change", function () {
        state.selectedFeeling = vertenteFeelSelect.value;
        renderDailyPanel();
      });
    }

    var rememberCheckbox = document.getElementById("remember-tradition-checkbox");
    if (rememberCheckbox) {
      rememberCheckbox.addEventListener("change", function () {
        state.rememberTradition = rememberCheckbox.checked;
        safeStorageSet(STORAGE_KEYS.remember, state.rememberTradition ? "true" : "false");
        if (state.rememberTradition) {
          safeStorageSet(STORAGE_KEYS.tradition, state.selectedTraditionId);
        } else {
          safeStorageRemove(STORAGE_KEYS.tradition);
        }
      });
    }

    var prayerCatSelect = document.getElementById("prayer-category-select");
    if (prayerCatSelect) {
      prayerCatSelect.addEventListener("change", function () {
        state.prayerCategory = prayerCatSelect.value;
        state.prayerPage = 1;
        state.activePrayerId = null;
        renderPrayersView();
      });
    }

    var prayerSearchInput = document.getElementById("prayer-search-input");
    if (prayerSearchInput) {
      prayerSearchInput.addEventListener("input", function () {
        state.prayerSearchQuery = prayerSearchInput.value;
        state.prayerPage = 1;
        renderPrayersView();
      });
    }

    var librarySelect = document.getElementById("library-tradition-select");
    if (librarySelect) {
      librarySelect.addEventListener("change", function () {
        state.libraryTraditionId = librarySelect.value;
        state.libraryBookIndex = 0;
        state.libraryChapterIndex = 0;
        stopSpeech();
        renderSacredLibrary();
      });
    }

    var libraryBookSelect = document.getElementById("library-book-select");
    if (libraryBookSelect) {
      libraryBookSelect.addEventListener("change", function () {
        state.libraryBookIndex = Number(libraryBookSelect.value) || 0;
        state.libraryChapterIndex = 0;
        stopSpeech();
        renderSacredLibrary();
      });
    }

    var libraryChapterSelect = document.getElementById("library-chapter-select");
    if (libraryChapterSelect) {
      libraryChapterSelect.addEventListener("change", function () {
        state.libraryChapterIndex = Number(libraryChapterSelect.value) || 0;
        stopSpeech();
        renderSacredLibrary();
      });
    }

    var comfortSelect = document.getElementById("comfort-topic-select");
    if (comfortSelect) {
      comfortSelect.addEventListener("change", function () {
        state.activeComfortTopicId = comfortSelect.value;
        renderThematicComfort();
      });
    }

    var candleForm = document.getElementById("light-candle-form");
    if (candleForm) {
      candleForm.addEventListener("submit", handleLightCandleSubmit);
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (state.drawerMenuOpen) {
          toggleDrawerMenu(false);
        } else if (state.activePrayerId) {
          state.activePrayerId = null;
          renderPrayersView();
        } else if (state.activeBlogPostId) {
          state.activeBlogPostId = null;
          renderBlogList();
        }
      }
    });
  }

  function bootstrap() {
    var savedTheme = safeStorageGet(STORAGE_KEYS.theme);
    if (savedTheme === "dark" || savedTheme === "light") {
      applyTheme(savedTheme);
    }

    var savedFont = safeStorageGet(STORAGE_KEYS.fontSize);
    if (savedFont) {
      applyReaderFontSize(Number(savedFont));
    } else {
      applyReaderFontSize(19);
    }

    var savedRemember = safeStorageGet(STORAGE_KEYS.remember);
    if (savedRemember === "false") {
      state.rememberTradition = false;
      var checkbox = document.getElementById("remember-tradition-checkbox");
      if (checkbox) checkbox.checked = false;
    }

    var savedTradition = safeStorageGet(STORAGE_KEYS.tradition);
    if (savedTradition && findTradition(savedTradition)) {
      state.selectedTraditionId = savedTradition;
      state.libraryTraditionId = savedTradition;
    }

    renderDailyPanel();
    renderHomeRetentionWidgets();
    renderCafeDiario();
    renderArcanjoMiguelPage();
    renderTrilhasView();
    renderPrayersView();
    populateCandleTraditionSelect();
    renderCandleSubPages();
    renderSacredLibrary();
    renderThematicComfort();
    renderQuiz();
    renderBlogList();
    initEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
