(function () {
  "use strict";

  var STORAGE_KEYS = {
    tradition: "he_saved_tradition",
    remember: "he_remember_choice",
    theme: "he_theme",
    fontSize: "he_font_size_px",
    candles: "he_user_candles"
  };

  var state = {
    activeSection: "inicio",
    selectedTraditionId: "catolica",
    selectedFeeling: "ansiedade",
    rememberTradition: true,
    theme: "light",
    readerFontSizePx: 19,
    prayerCategory: "todas",
    prayerSearchQuery: "",
    candleFilter: "all",
    flamePaused: false,
    libraryTraditionId: "catolica",
    libraryChapterIndex: 0,
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
    } catch (e) {
      // Ignore quota or security errors in restricted webviews.
    }
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
        statusEl.textContent = "Leitura em voz calma iniciada. Toque novamente no botão de áudio se desejar pausar.";
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

    var navButtons = document.querySelectorAll("[data-nav-target]");
    for (var j = 0; j < navButtons.length; j++) {
      var target = navButtons[j].getAttribute("data-nav-target");
      if (target === sectionId) {
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

  function renderTraditionOnboardingGrid() {
    var container = document.getElementById("traditions-grid-container");
    if (!container) return;

    var traditions = getTraditions();
    var html = "";
    for (var i = 0; i < traditions.length; i++) {
      var t = traditions[i];
      var isSelected = t.id === state.selectedTraditionId;
      html +=
        '<button type="button" class="tradition-card" data-select-tradition="' +
        escapeHtml(t.id) +
        '" aria-pressed="' +
        (isSelected ? "true" : "false") +
        '">' +
        '<span class="inline-flex items-center justify-center w-11 h-11 rounded-lg text-xl font-bold shrink-0" style="background-color: var(--bg-subtle); color: var(--accent-wine);" aria-hidden="true">' +
        escapeHtml(t.symbol) +
        "</span>" +
        '<span class="flex flex-col min-w-0">' +
        '<span class="font-semibold text-base leading-snug" style="color: var(--text-main);">' +
        escapeHtml(t.name) +
        "</span>" +
        '<span class="text-xs leading-tight mt-0.5" style="color: var(--text-muted);">' +
        escapeHtml(t.tag) +
        "</span>" +
        "</span>" +
        "</button>";
    }
    container.innerHTML = html;
  }

  function renderDailyPanel() {
    var tradition = findTradition(state.selectedTraditionId);
    if (!tradition) return;

    var headerBadge = document.getElementById("active-tradition-badge");
    if (headerBadge) {
      headerBadge.textContent = tradition.symbol + " " + tradition.name;
    }

    var greetingEl = document.getElementById("daily-tradition-greeting");
    if (greetingEl) {
      greetingEl.textContent = tradition.greeting + " (" + tradition.name + ")";
    }

    var sourceEl = document.getElementById("daily-canonical-work");
    if (sourceEl) {
      sourceEl.textContent = "Fonte Sagrada: " + tradition.canonicalWorkTitle;
    }

    var passageObj =
      (tradition.dailyPassages && tradition.dailyPassages[state.selectedFeeling]) ||
      (tradition.dailyPassages && tradition.dailyPassages.ansiedade);

    if (passageObj) {
      var textEl = document.getElementById("daily-passage-text");
      var refEl = document.getElementById("daily-passage-reference");
      var reflEl = document.getElementById("daily-passage-reflection");

      if (textEl) textEl.textContent = "“" + passageObj.text + "”";
      if (refEl) refEl.textContent = passageObj.reference;
      if (reflEl) reflEl.textContent = passageObj.reflection;
    }

    var feelingButtons = document.querySelectorAll("[data-feeling-id]");
    for (var i = 0; i < feelingButtons.length; i++) {
      var fId = feelingButtons[i].getAttribute("data-feeling-id");
      feelingButtons[i].setAttribute("aria-pressed", fId === state.selectedFeeling ? "true" : "false");
    }
  }

  function selectTradition(traditionId, syncLibrary) {
    var found = findTradition(traditionId);
    if (!found) return;

    state.selectedTraditionId = found.id;
    if (syncLibrary !== false) {
      state.libraryTraditionId = found.id;
      state.libraryChapterIndex = 0;
    }

    if (state.rememberTradition) {
      safeStorageSet(STORAGE_KEYS.tradition, found.id);
    }

    renderTraditionOnboardingGrid();
    renderDailyPanel();
    renderSacredLibrary();
     populateCandleTraditionSelect();
  }

  function renderPrayersList() {
    var container = document.getElementById("prayers-list-container");
    var countEl = document.getElementById("prayers-count-label");
    if (!container) return;

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

    if (countEl) {
      countEl.textContent = filtered.length + (filtered.length === 1 ? " oração encontrada" : " orações disponíveis");
    }

    var catButtons = document.querySelectorAll("[data-prayer-cat]");
    for (var c = 0; c < catButtons.length; c++) {
      var cat = catButtons[c].getAttribute("data-prayer-cat");
      catButtons[c].setAttribute("aria-pressed", cat === state.prayerCategory ? "true" : "false");
    }

    if (filtered.length === 0) {
      container.innerHTML =
        '<div class="surface-card p-6 text-center">' +
        '<p class="font-semibold text-lg mb-2">Nenhuma oração encontrada com esse termo.</p>' +
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">Experimente limpar o campo de busca ou selecionar a categoria "Todas as Tradições".</p>' +
        '<button type="button" class="btn-secondary" data-action="reset-prayer-filters">Mostrar todas as orações</button>' +
        "</div>";
      return;
    }

    var html = "";
    for (var j = 0; j < filtered.length; j++) {
      var item = filtered[j];
      var paragraphs = item.text.split("\n\n");
      var bodyHtml = "";
      for (var k = 0; k < paragraphs.length; k++) {
        bodyHtml +=
          '<p class="mb-3 leading-relaxed">' +
          escapeHtml(paragraphs[k]).replace(/\n/g, "<br>") +
          "</p>";
      }

      var speechId = "prayer-" + item.id;
      html +=
        '<article class="surface-card p-5 sm:p-6 flex flex-col justify-between">' +
        "<div>" +
        '<div class="flex flex-wrap items-center justify-between gap-2 mb-2">' +
        '<span class="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider" style="background-color: var(--bg-subtle); color: var(--accent-wine);">' +
        escapeHtml(item.categoryLabel) +
        "</span>" +
        '<span class="text-xs font-medium" style="color: var(--text-muted);">' +
        escapeHtml(item.salutation) +
        "</span>" +
        "</div>" +
        '<h3 class="font-serif-sacred font-bold text-xl mb-1" style="color: var(--text-main);">' +
        escapeHtml(item.title) +
        "</h3>" +
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">' +
        escapeHtml(item.subtitle) +
        "</p>" +
        '<div class="font-serif-sacred text-body-sacred p-4 rounded-xl mb-4" style="background-color: var(--bg-subtle); color: var(--text-main);">' +
        bodyHtml +
        "</div>" +
        '<p class="text-xs italic mb-4" style="color: var(--text-muted);">' +
        escapeHtml(item.usageNote) +
        "</p>" +
        "</div>" +
        '<div class="flex flex-wrap items-center gap-3 pt-2 border-t" style="border-color: var(--border-color);">' +
        '<button type="button" class="btn-secondary inline-flex items-center gap-2" data-speech-id="' +
        escapeHtml(speechId) +
        '" data-speech-prayer="' +
        escapeHtml(item.id) +
        '" data-default-label="Ouvir oração" aria-pressed="false">' +
        '<span aria-hidden="true">🔊</span> <span data-speech-label>Ouvir oração</span>' +
        "</button>" +
        '<button type="button" class="btn-secondary inline-flex items-center gap-2" data-share-prayer="' +
        escapeHtml(item.id) +
        '">' +
        '<span aria-hidden="true">📲</span> Compartilhar no WhatsApp' +
        "</button>" +
        "</div>" +
        "</article>";
    }

    container.innerHTML = html;
    updateSpeechButtons();
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

  function renderCandlesWall() {
    var container = document.getElementById("candles-wall-container");
    var counterEl = document.getElementById("candles-active-counter");
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
        '<p class="text-sm mb-4" style="color: var(--text-secondary);">Preencha o nome de quem deseja abençoar no formulário acima e toque em "Acender Vela de 7 Dias".</p>' +
        '<button type="button" class="btn-secondary" data-candle-filter="all">Ver mural comunitário de velas</button>' +
        "</div>";
      return;
    }

    var flameClass = state.flamePaused ? "candle-flame paused" : "candle-flame";
    var html = "";

    for (var i = 0; i < combined.length; i++) {
      var c = combined[i];
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

    honoreeInput.value = "";
    intentionInput.value = "";
    if (cityInput) cityInput.value = "";

    feedbackEl.textContent = "Sua Vela Virtual de 7 dias foi acesa com sucesso para " + honoree + ". Que a paz ilumine esta intenção!";
    feedbackEl.style.backgroundColor = "var(--bg-amber-soft)";
    feedbackEl.style.color = "var(--text-main)";
    feedbackEl.classList.remove("hidden");

    renderCandlesWall();
  }

  function renderSacredLibrary() {
    var selectEl = document.getElementById("library-tradition-select");
    var workTitleEl = document.getElementById("library-canonical-title");
    var chaptersTabsEl = document.getElementById("library-chapters-tabs");
    var chapterHeadingEl = document.getElementById("library-chapter-heading");
    var versesContainerEl = document.getElementById("library-verses-container");

    var traditions = getTraditions();
    if (selectEl && selectEl.options.length === 0) {
      var optsHtml = "";
      for (var i = 0; i < traditions.length; i++) {
        optsHtml +=
          '<option value="' +
          escapeHtml(traditions[i].id) +
          '">' +
          escapeHtml(traditions[i].symbol + " " + traditions[i].name + " | " + traditions[i].canonicalWorkTitle) +
          "</option>";
      }
      selectEl.innerHTML = optsHtml;
    }

    if (selectEl) {
      selectEl.value = state.libraryTraditionId;
    }

    var activeTradition = findTradition(state.libraryTraditionId);
    if (!activeTradition) return;

    if (workTitleEl) {
      workTitleEl.textContent = activeTradition.canonicalWorkTitle;
    }

    var chapters = activeTradition.chapters || [];
    if (state.libraryChapterIndex >= chapters.length) {
      state.libraryChapterIndex = 0;
    }

    if (chaptersTabsEl) {
      var tabsHtml = "";
      for (var c = 0; c < chapters.length; c++) {
        var isCurrent = c === state.libraryChapterIndex;
        tabsHtml +=
          '<button type="button" class="feeling-chip" data-library-chapter="' +
          c +
          '" aria-pressed="' +
          (isCurrent ? "true" : "false") +
          '">' +
          escapeHtml(chapters[c].title) +
          "</button>";
      }
      chaptersTabsEl.innerHTML = tabsHtml;
    }

    var activeChapter = chapters[state.libraryChapterIndex];
    if (!activeChapter) return;

    if (chapterHeadingEl) {
      chapterHeadingEl.textContent = activeChapter.title;
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

  function renderThematicComfort() {
    var tabsEl = document.getElementById("comfort-topics-tabs");
    var detailEl = document.getElementById("comfort-topic-detail");
    if (!tabsEl || !detailEl) return;

    var topics = window.THEMATIC_COMFORT || [];
    var tabsHtml = "";
    var activeTopic = topics[0];

    for (var i = 0; i < topics.length; i++) {
      var t = topics[i];
      if (t.id === state.activeComfortTopicId) {
        activeTopic = t;
      }
      var isPressed = t.id === state.activeComfortTopicId;
      tabsHtml +=
        '<button type="button" class="feeling-chip" data-comfort-topic="' +
        escapeHtml(t.id) +
        '" aria-pressed="' +
        (isPressed ? "true" : "false") +
        '">' +
        '<span aria-hidden="true">' +
        escapeHtml(t.icon) +
        "</span> " +
        escapeHtml(t.title) +
        "</button>";
    }
    tabsEl.innerHTML = tabsHtml;

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
      '<div class="surface-card p-6">' +
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
        '<div class="surface-card p-6 sm:p-8 text-center">' +
        '<span class="inline-block text-4xl mb-3" aria-hidden="true">🕊</span>' +
        '<h3 class="font-serif-sacred font-bold text-2xl mb-2">Jornada de Sabedoria Concluída!</h3>' +
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
      '<div class="surface-card p-6 sm:p-8">' +
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
    if (!listEl) return;

    var posts = window.BLOG_POSTS || [];
    if (state.activeBlogPostId && readerEl) {
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
        readerEl.innerHTML =
          '<article class="surface-card p-6 sm:p-8 mb-6">' +
          '<div class="flex flex-wrap items-center justify-between gap-2 mb-4">' +
          '<span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded" style="background-color: var(--bg-subtle); color: var(--accent-wine);">' +
          escapeHtml(activePost.category) +
          "</span>" +
          '<button type="button" class="btn-secondary text-sm py-2 px-3" data-action="close-blog-post">✕ Fechar leitura (Esc)</button>' +
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
          '<div class="mt-6 pt-4 border-t flex justify-end" style="border-color: var(--border-color);">' +
          '<button type="button" class="btn-secondary" data-action="close-blog-post">← Voltar para todos os artigos</button>' +
          "</div>" +
          "</article>";
        readerEl.classList.remove("hidden");
      }
    } else if (readerEl) {
      readerEl.classList.add("hidden");
      readerEl.innerHTML = "";
    }

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
        '">Ler artigo completo</button>' +
        "</article>";
    }
    listEl.innerHTML = cardsHtml;
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

      var traditionBtn = target.closest("[data-select-tradition]");
      if (traditionBtn) {
        selectTradition(traditionBtn.getAttribute("data-select-tradition"), true);
        return;
      }

      var feelingBtn = target.closest("[data-feeling-id]");
      if (feelingBtn) {
        state.selectedFeeling = feelingBtn.getAttribute("data-feeling-id");
        renderDailyPanel();
        return;
      }

      var prayerCatBtn = target.closest("[data-prayer-cat]");
      if (prayerCatBtn) {
        state.prayerCategory = prayerCatBtn.getAttribute("data-prayer-cat");
        renderPrayersList();
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

      var candleFilterBtn = target.closest("[data-candle-filter]");
      if (candleFilterBtn) {
        state.candleFilter = candleFilterBtn.getAttribute("data-candle-filter");
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

      var chapterBtn = target.closest("[data-library-chapter]");
      if (chapterBtn) {
        state.libraryChapterIndex = Number(chapterBtn.getAttribute("data-library-chapter")) || 0;
        renderSacredLibrary();
        return;
      }

      var comfortBtn = target.closest("[data-comfort-topic]");
      if (comfortBtn) {
        state.activeComfortTopicId = comfortBtn.getAttribute("data-comfort-topic");
        renderThematicComfort();
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
        var readerEl = document.getElementById("blog-article-reader");
        if (readerEl) readerEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      var actionBtn = target.closest("[data-action]");
      if (!actionBtn) return;

      var action = actionBtn.getAttribute("data-action");
      if (action === "toggle-theme") {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      } else if (action === "font-decrease") {
        applyReaderFontSize(state.readerFontSizePx - 2);
      } else if (action === "font-increase") {
        applyReaderFontSize(state.readerFontSizePx + 2);
      } else if (action === "enter-faith-space") {
        var dailyCard = document.getElementById("daily-word-anchor");
        if (dailyCard) dailyCard.scrollIntoView({ behavior: "smooth", block: "start" });
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
      } else if (action === "reset-prayer-filters") {
        state.prayerCategory = "todas";
        state.prayerSearchQuery = "";
        var searchInput = document.getElementById("prayer-search-input");
        if (searchInput) searchInput.value = "";
        renderPrayersList();
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
        var libT = findTradition(state.libraryTraditionId);
        var ch = libT && libT.chapters && libT.chapters[state.libraryChapterIndex];
        if (ch) {
          speakText("library-chapter", ch.title + ". " + ch.verses.join(" "));
        }
      } else if (action === "prev-library-chapter") {
        var curT = findTradition(state.libraryTraditionId);
        if (curT && curT.chapters && curT.chapters.length > 0) {
          state.libraryChapterIndex =
            (state.libraryChapterIndex - 1 + curT.chapters.length) % curT.chapters.length;
          renderSacredLibrary();
        }
      } else if (action === "next-library-chapter") {
        var nxtT = findTradition(state.libraryTraditionId);
        if (nxtT && nxtT.chapters && nxtT.chapters.length > 0) {
          state.libraryChapterIndex = (state.libraryChapterIndex + 1) % nxtT.chapters.length;
          renderSacredLibrary();
        }
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
      }
    });

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

    var prayerSearchInput = document.getElementById("prayer-search-input");
    if (prayerSearchInput) {
      prayerSearchInput.addEventListener("input", function () {
        state.prayerSearchQuery = prayerSearchInput.value;
        renderPrayersList();
      });
    }

    var librarySelect = document.getElementById("library-tradition-select");
    if (librarySelect) {
      librarySelect.addEventListener("change", function () {
        state.libraryTraditionId = librarySelect.value;
        state.libraryChapterIndex = 0;
        renderSacredLibrary();
      });
    }

    var candleForm = document.getElementById("light-candle-form");
    if (candleForm) {
      candleForm.addEventListener("submit", handleLightCandleSubmit);
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && state.activeBlogPostId) {
        state.activeBlogPostId = null;
        renderBlogList();
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

    renderTraditionOnboardingGrid();
    renderDailyPanel();
    renderPrayersList();
    populateCandleTraditionSelect();
    renderCandlesWall();
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
