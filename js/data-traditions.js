// Caminhos espirituais disponíveis no portal (Fé Católica, Fé Evangélica e Doutrina Espírita),
// 12 estados emocionais para a Palavra do Dia e índice completo dos livros bíblicos.

window.FEELINGS_LIST = [
  { id: "ansiedade", label: "Ansiedade e Inquietação" },
  { id: "luto", label: "Luto e Saudade de Quem Partiu" },
  { id: "desanimo", label: "Cansaço e Falta de Forças" },
  { id: "saude", label: "Saúde Frágil ou Tratamento" },
  { id: "gratidao", label: "Gratidão pela Vida e Família" },
  { id: "solidao", label: "Solidão e Sentimento de Abandono" },
  { id: "medo", label: "Medo e Insegurança com o Futuro" },
  { id: "insonia", label: "Insônia e Noite Difícil" },
  { id: "familia", label: "Preocupação com Filhos e Netos" },
  { id: "sustento", label: "Aflição Financeira e Trabalho" },
  { id: "perdao", label: "Mágoa e Necessidade de Perdoar" },
  { id: "paz", label: "Busca por Paz Interior e Silêncio" }
];

window.BIBLE_ALL_BOOKS_INDEX = [
  { book: "Gênesis", abbrev: "gn", chaptersCount: 50, testament: "Antigo Testamento" },
  { book: "Êxodo", abbrev: "ex", chaptersCount: 40, testament: "Antigo Testamento" },
  { book: "Levítico", abbrev: "lv", chaptersCount: 27, testament: "Antigo Testamento" },
  { book: "Números", abbrev: "nm", chaptersCount: 36, testament: "Antigo Testamento" },
  { book: "Deuteronômio", abbrev: "dt", chaptersCount: 34, testament: "Antigo Testamento" },
  { book: "Josué", abbrev: "js", chaptersCount: 24, testament: "Antigo Testamento" },
  { book: "Juízes", abbrev: "jz", chaptersCount: 21, testament: "Antigo Testamento" },
  { book: "Rute", abbrev: "rt", chaptersCount: 4, testament: "Antigo Testamento" },
  { book: "1 Samuel", abbrev: "1sm", chaptersCount: 31, testament: "Antigo Testamento" },
  { book: "2 Samuel", abbrev: "2sm", chaptersCount: 24, testament: "Antigo Testamento" },
  { book: "1 Reis", abbrev: "1rs", chaptersCount: 22, testament: "Antigo Testamento" },
  { book: "2 Reis", abbrev: "2rs", chaptersCount: 25, testament: "Antigo Testamento" },
  { book: "1 Crônicas", abbrev: "1cr", chaptersCount: 29, testament: "Antigo Testamento" },
  { book: "2 Crônicas", abbrev: "2cr", chaptersCount: 36, testament: "Antigo Testamento" },
  { book: "Esdras", abbrev: "ed", chaptersCount: 10, testament: "Antigo Testamento" },
  { book: "Neemias", abbrev: "ne", chaptersCount: 13, testament: "Antigo Testamento" },
  { book: "Ester", abbrev: "et", chaptersCount: 10, testament: "Antigo Testamento" },
  { book: "Jó", abbrev: "job", chaptersCount: 42, testament: "Antigo Testamento" },
  { book: "Salmos", abbrev: "sl", chaptersCount: 150, testament: "Antigo Testamento" },
  { book: "Provérbios", abbrev: "pv", chaptersCount: 31, testament: "Antigo Testamento" },
  { book: "Eclesiastes", abbrev: "ec", chaptersCount: 12, testament: "Antigo Testamento" },
  { book: "Cânticos", abbrev: "ct", chaptersCount: 8, testament: "Antigo Testamento" },
  { book: "Isaías", abbrev: "is", chaptersCount: 66, testament: "Antigo Testamento" },
  { book: "Jeremias", abbrev: "jr", chaptersCount: 52, testament: "Antigo Testamento" },
  { book: "Lamentações", abbrev: "lm", chaptersCount: 5, testament: "Antigo Testamento" },
  { book: "Ezequiel", abbrev: "ez", chaptersCount: 48, testament: "Antigo Testamento" },
  { book: "Daniel", abbrev: "dn", chaptersCount: 12, testament: "Antigo Testamento" },
  { book: "Oséias", abbrev: "os", chaptersCount: 14, testament: "Antigo Testamento" },
  { book: "Joel", abbrev: "jl", chaptersCount: 3, testament: "Antigo Testamento" },
  { book: "Amós", abbrev: "am", chaptersCount: 9, testament: "Antigo Testamento" },
  { book: "Obadias", abbrev: "ob", chaptersCount: 1, testament: "Antigo Testamento" },
  { book: "Jonas", abbrev: "jn", chaptersCount: 4, testament: "Antigo Testamento" },
  { book: "Miquéias", abbrev: "mq", chaptersCount: 7, testament: "Antigo Testamento" },
  { book: "Naum", abbrev: "na", chaptersCount: 3, testament: "Antigo Testamento" },
  { book: "Habacuque", abbrev: "hc", chaptersCount: 3, testament: "Antigo Testamento" },
  { book: "Sofonias", abbrev: "sf", chaptersCount: 3, testament: "Antigo Testamento" },
  { book: "Ageu", abbrev: "ag", chaptersCount: 2, testament: "Antigo Testamento" },
  { book: "Zacarias", abbrev: "zc", chaptersCount: 14, testament: "Antigo Testamento" },
  { book: "Malaquias", abbrev: "ml", chaptersCount: 4, testament: "Antigo Testamento" },
  { book: "Mateus", abbrev: "mt", chaptersCount: 28, testament: "Novo Testamento" },
  { book: "Marcos", abbrev: "mc", chaptersCount: 16, testament: "Novo Testamento" },
  { book: "Lucas", abbrev: "lc", chaptersCount: 24, testament: "Novo Testamento" },
  { book: "João", abbrev: "jo", chaptersCount: 21, testament: "Novo Testamento" },
  { book: "Atos dos Apóstolos", abbrev: "at", chaptersCount: 28, testament: "Novo Testamento" },
  { book: "Romanos", abbrev: "rm", chaptersCount: 16, testament: "Novo Testamento" },
  { book: "1 Coríntios", abbrev: "1co", chaptersCount: 16, testament: "Novo Testamento" },
  { book: "2 Coríntios", abbrev: "2co", chaptersCount: 13, testament: "Novo Testamento" },
  { book: "Gálatas", abbrev: "gl", chaptersCount: 6, testament: "Novo Testamento" },
  { book: "Efésios", abbrev: "ef", chaptersCount: 6, testament: "Novo Testamento" },
  { book: "Filipenses", abbrev: "fp", chaptersCount: 4, testament: "Novo Testamento" },
  { book: "Colossenses", abbrev: "cl", chaptersCount: 4, testament: "Novo Testamento" },
  { book: "1 Tessalonicenses", abbrev: "1ts", chaptersCount: 5, testament: "Novo Testamento" },
  { book: "2 Tessalonicenses", abbrev: "2ts", chaptersCount: 3, testament: "Novo Testamento" },
  { book: "1 Timóteo", abbrev: "1tm", chaptersCount: 6, testament: "Novo Testamento" },
  { book: "2 Timóteo", abbrev: "2tm", chaptersCount: 4, testament: "Novo Testamento" },
  { book: "Tito", abbrev: "tt", chaptersCount: 3, testament: "Novo Testamento" },
  { book: "Filemom", abbrev: "fm", chaptersCount: 1, testament: "Novo Testamento" },
  { book: "Hebreus", abbrev: "hb", chaptersCount: 13, testament: "Novo Testamento" },
  { book: "Tiago", abbrev: "tg", chaptersCount: 5, testament: "Novo Testamento" },
  { book: "1 Pedro", abbrev: "1pe", chaptersCount: 5, testament: "Novo Testamento" },
  { book: "2 Pedro", abbrev: "2pe", chaptersCount: 3, testament: "Novo Testamento" },
  { book: "1 João", abbrev: "1jo", chaptersCount: 5, testament: "Novo Testamento" },
  { book: "2 João", abbrev: "2jo", chaptersCount: 1, testament: "Novo Testamento" },
  { book: "3 João", abbrev: "3jo", chaptersCount: 1, testament: "Novo Testamento" },
  { book: "Judas", abbrev: "jd", chaptersCount: 1, testament: "Novo Testamento" },
  { book: "Apocalipse", abbrev: "ap", chaptersCount: 22, testament: "Novo Testamento" }
];

window.TRADITIONS_DATA = [
  {
    id: "catolica",
    imagePath: "assets/traditions/catolica.jpg",
    imageCaption: "Jesus Cristo, Luz e Bom Pastor da Fé Católica",
    name: "Fé Católica",
    tag: "Fé Cristã Católica",
    symbol: "",
    greeting: "A paz de Cristo esteja no seu lar",
    canonicalWorkTitle: "Bíblia Católica Completa",
    usesFullBibleIndex: true,
    dailyPassages: {
      ansiedade: { text: "Não vos inquieteis com o dia de amanhã, pois o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu próprio cuidado.", reference: "São Mateus 6:34", reflection: "Entregue as preocupações futuras na oração silenciosa de hoje. Deus cuida do tempo presente." },
      luto: { text: "Bem-aventurados os que choram, pois eles serão consolados.", reference: "São Mateus 5:4", reflection: "A saudade é expressão de amor sincero. Na fé cristã, a vida não é tirada, mas transformada na eternidade." },
      desanimo: { text: "Vinde a mim, todos vós que estais cansados e sobrecarregados, e eu vos aliviarei.", reference: "São Mateus 11:28", reflection: "Respire fundo e permita que o descanso da prece renove o ânimo da sua alma." },
      saude: { text: "Senhor, meu Deus, clamei a vós e vós me restituístes a saúde.", reference: "Salmo 30:2", reflection: "Una o cuidado médico diário à confiança serena no amparo divino sobre o corpo e a mente." },
      gratidao: { text: "A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus, meu Salvador.", reference: "São Lucas 1:46-47", reflection: "Reconhecer as bênçãos recebidas ilumina a casa e fortalece a esperança familiar." },
      solidao: { text: "Eis que estou convosco todos os dias, até a consumação dos séculos.", reference: "São Mateus 28:20", reflection: "Mesmo no silêncio do quarto, a presença amorosa de Cristo acompanha você." },
      medo: { text: "O Senhor é a minha luz e a minha salvação; a quem temerei?", reference: "Salmo 27:1", reflection: "Quando a confiança em Deus ocupa o coração, o medo perde a força." },
      insonia: { text: "Em paz me deito e logo adormeço, pois só vós, Senhor, fazeis que eu habite em segurança.", reference: "Salmo 4:9", reflection: "Solte o peso das tarefas do dia e entregue seu repouso aos cuidados do Criador." },
      familia: { text: "Quanto a mim e à minha casa, serviremos ao Senhor.", reference: "Josué 24:15", reflection: "Abençoe seus filhos e netos em oração; nenhuma prece de mãe, pai ou avós se perde." },
      sustento: { text: "Olhai as aves do céu: não semeiam nem colhem, e vosso Pai celeste as alimenta.", reference: "São Mateus 6:26", reflection: "A Providência Divina conhece as necessidades materiais da sua casa." },
      perdao: { text: "Sede benignos uns com os outros, misericordiosos, perdoando-vos mutuamente.", reference: "Efésios 4:32", reflection: "Perdoar liberta o próprio coração de carregar um fardo pesado." },
      paz: { text: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá.", reference: "São João 14:27", reflection: "Cultive hoje cinco minutos de silêncio interior na presença de Deus." }
    },
    chapters: [
      {
        title: "Salmo 23 - O Bom Pastor",
        verses: [
          "1. O Senhor me governa, e nada me faltará: em lugar de verdes pastos ali me pôs.",
          "2. Sobre a água de refeição me educou: converteu a minha alma.",
          "3. Guiou-me sobre as veredas da justiça, por amor do seu nome.",
          "4. Pois ainda que eu ande no meio da sombra da morte, não temerei males: porquanto tu estás comigo. A tua vara e o teu báculo, eles me consolaram.",
          "5. Preparaste uma mesa diante de mim, à vista daqueles que me atribulam. Ungiste com óleo a minha cabeça: e o meu cálice inebriante quão admirável é!",
          "6. E a tua misericórdia me seguirá todos os dias da minha vida: a fim de que eu habite na casa do Senhor por longos dias."
        ]
      },
      {
        title: "Salmo 91 - Sob a Proteção do Altíssimo",
        verses: [
          "1. Aquele que habita no auxílio do Altíssimo, na proteção do Deus do céu descansará.",
          "2. Dirá ao Senhor: Tu és o meu defensor e o meu refúgio: o meu Deus, nele esperarei.",
          "3. Pois ele me livrou do laço dos caçadores e da palavra áspera.",
          "4. Com as suas espáduas te fará sombra: e debaixo das suas asas esperarás.",
          "5. Como um escudo te cercará a sua verdade: não temerás o terror noturno.",
          "6. Nem a seta que voa de dia, nem o mal que anda nas trevas.",
          "11. Pois mandou aos seus Anjos acerca de ti, que te guardem em todos os teus caminhos."
        ]
      },
      {
        title: "São Mateus 5 - As Bem-Aventuranças",
        verses: [
          "1. E vendo Jesus as turbas, subiu a um monte, e depois que se assentou, chegaram-se a ele os seus discípulos.",
          "3. Bem-aventurados os pobres de espírito: pois deles é o Reino dos céus.",
          "4. Bem-aventurados os mansos: pois eles possuirão a terra.",
          "5. Bem-aventurados os que choram: pois eles serão consolados.",
          "6. Bem-aventurados os que têm fome e sede de justiça: pois eles serão fartos.",
          "7. Bem-aventurados os misericordiosos: pois eles alcançarão misericórdia.",
          "8. Bem-aventurados os limpos de coração: pois eles verão a Deus.",
          "9. Bem-aventurados os pacíficos: pois serão chamados filhos de Deus."
        ]
      },
      {
        title: "1 Coríntios 13 - O Hino da Caridade",
        verses: [
          "1. Ainda que eu fale as línguas dos homens e dos anjos, se não tiver caridade, sou como o metal que soa, ou como o sino que tine.",
          "4. A caridade é paciente, é benigna. A caridade não é invejosa, não obra temerariamente, não se ensoberbece.",
          "7. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
          "13. Agora permanecem a fé, a esperança e a caridade, estas três virtudes; porém a maior delas é a caridade."
        ]
      },
      {
        title: "São João 14 - O Caminho, a Verdade e a Vida",
        verses: [
          "1. Não se turbe o vosso coração. Credes em Deus, crede também em mim.",
          "2. Na casa de meu Pai há muitas moradas.",
          "6. Disse-lhe Jesus: Eu sou o caminho, a verdade e a vida.",
          "27. Deixo-vos a paz, a minha paz vos dou: não turbe o vosso coração, nem se atemorize."
        ]
      }
    ]
  },
  {
    id: "evangelica",
    imagePath: "assets/traditions/evangelica.jpg",
    imageCaption: "A Bíblia Sagrada aberta sob a luz da Graça Divina",
    name: "Fé Evangélica",
    tag: "Fé Cristã Evangélica",
    symbol: "",
    greeting: "A Graça e a Paz do Senhor Jesus",
    canonicalWorkTitle: "Bíblia Online Completa",
    usesFullBibleIndex: true,
    dailyPassages: {
      ansiedade: { text: "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças.", reference: "Filipenses 4:6", reflection: "Transforme a preocupação em súplica confiante; a paz de Deus guardará o seu coração." },
      luto: { text: "E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor.", reference: "Apocalipse 21:4", reflection: "A promessa da eternidade em Cristo sustenta a família na hora da despedida." },
      desanimo: { text: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.", reference: "Isaías 40:31", reflection: "O vigor espiritual nasce da espera confiante na fidelidade do Senhor." },
      saude: { text: "Bendize, ó minha alma, ao Senhor, que perdoa todas as tuas iniquidades e sara todas as tuas enfermidades.", reference: "Salmo 103:2-3", reflection: "Descanse sob o cuidado do Médico dos médicos em todas as etapas da recuperação." },
      gratidao: { text: "Louvai ao Senhor, porque ele é bom; porque a sua benignidade dura para sempre.", reference: "Salmo 136:1", reflection: "Um coração agradecido reconhece a mão de Deus nos detalhes do cotidiano." },
      solidao: { text: "Não te deixarei, nem te desampararei.", reference: "Hebreus 13:5", reflection: "O Senhor permanece fiel ao seu lado em todas as estações da vida." },
      medo: { text: "Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.", reference: "2 Timóteo 1:7", reflection: "Caminhe hoje com a cabeça erguida na certeza do amor do Pai." },
      insonia: { text: "Quando te deitares, não temerás; sim, tu te deitarás, e o teu sono será suave.", reference: "Provérbios 3:24", reflection: "Entregue a guarda da sua casa ao Senhor e feche os olhos em paz." },
      familia: { text: "Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.", reference: "Atos 16:31", reflection: "Continue intercedendo pela sua família; a semente da oração floresce no tempo certo." },
      sustento: { text: "O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória.", reference: "Filipenses 4:19", reflection: "Portas novas se abrem quando confiamos na provisão divina." },
      perdao: { text: "Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós.", reference: "Colossenses 3:13", reflection: "O perdão restaura a leveza da alma e abre espaço à bênção." },
      paz: { text: "Tu conservarás em perfeita paz aquele cuja mente está firme em ti; porque ele confia em ti.", reference: "Isaías 26:3", reflection: "Mantenha o pensamento ancorado nas promessas eternas da Palavra." }
    },
    chapters: [
      {
        title: "Salmo 23 - O Senhor é o Meu Pastor",
        verses: [
          "1. O Senhor é o meu pastor; nada me faltará.",
          "2. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas.",
          "3. Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.",
          "4. Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.",
          "5. Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.",
          "6. Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias."
        ]
      },
      {
        title: "Salmo 121 - O Guarda Fiel de Israel",
        verses: [
          "1. Elevo os meus olhos para os montes: de onde me virá o socorro?",
          "2. O meu socorro vem do Senhor, que fez o céu e a terra.",
          "3. Não deixará vacilar o teu pé; aquele que te guarda não tosquenejará.",
          "4. Eis que não tosquenejará nem dormirá o guarda de Israel.",
          "5. O Senhor é quem te guarda; o Senhor é a tua sombra à tua direita.",
          "6. O sol não te molestará de dia nem a lua de noite.",
          "7. O Senhor te guardará de todo o mal; ele guardará a tua alma.",
          "8. O Senhor guardará a tua entrada e a tua saída, desde agora e para sempre."
        ]
      },
      {
        title: "Romanos 8 - Mais do que Vencedores",
        verses: [
          "28. E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.",
          "31. Que diremos pois a estas coisas? Se Deus é por nós, quem será contra nós?",
          "38. Porque estou certo de que, nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,",
          "39. Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor."
        ]
      }
    ]
  },
  {
    id: "espirita",
    imagePath: "assets/traditions/espirita.jpg",
    imageCaption: "Doutrina Espírita: Fé Raciocinada, Evangelho e Caridade",
    name: "Doutrina Espírita",
    tag: "Doutrina Espírita (Kardecista)",
    symbol: "",
    greeting: "Muita paz, luz e serenidade em seu coração",
    canonicalWorkTitle: "Obras Espíritas Completas",
    usesFullBibleIndex: false,
    dedicatedLibrarySection: "obras-espiritas",
    dailyPassages: {
      ansiedade: {
        text: "A fé inabalável só o é a que pode encarar frente a frente a razão, em todas as épocas da humanidade. Sede pacientes; a paciência também é uma caridade.",
        reference: "O Evangelho Segundo o Espiritismo - Cap. 19 e Cap. 9",
        reflection: "Quando a mente se agita com o dia de amanhã, eleve o pensamento em prece calma e confie nas leis justas de Deus."
      },
      luto: {
        text: "O Espiritismo nos faz enxergar a morte como passagem libertadora; aqueles que amamos não nos deixam para sempre, pois a alma sobrevive e conserva suas afeições sinceras.",
        reference: "O Livro dos Espíritos - Questão 934 e O Evangelho Segundo o Espiritismo - Cap. 5",
        reflection: "Transforme a saudade em prece amorosa de gratidão e paz; o amor verdadeiro vence a distância entre os dois planos da vida."
      },
      desanimo: {
        text: "Coragem, pois, soldados da fé! Tendes nos vossos corações a centelha divina; acendei-a pelo dever cumprido e pela esperança na misericórdia de Deus.",
        reference: "O Evangelho Segundo o Espiritismo - Cap. 5 e Cap. 20",
        reflection: "Cada pequeno passo dado no bem, mesmo em meio ao cansaço, renova as forças espirituais e atrai bons Espíritos ao seu lar."
      },
      saude: {
        text: "A prece atrai os bons Espíritos que nos sustentam nas boas resoluções e nos inspiram pensamentos salutares; unida ao tratamento médico, devolve a calma à alma e auxilia o corpo.",
        reference: "O Livro dos Espíritos - Questão 659 e O Evangelho Segundo o Espiritismo - Cap. 27",
        reflection: "Cuide do corpo como templo sagrado do Espírito e cultive pensamentos serenos de confiança e recuperação."
      },
      gratidao: {
        text: "Louvai a Deus de todo o coração pelos benefícios que cada dia vos traz; reconhecer a bondade do Pai é abrir a alma para receber luz ainda maior.",
        reference: "O Evangelho Segundo o Espiritismo - Cap. 28 (Coletânea de Preces)",
        reflection: "Agradeça hoje pela vida, pelo pão na mesa, pelos familiares e pelas lições que o tempo ensinou."
      },
      solidao: {
        text: "Os Espíritos protetores acompanham os homens com solicitude constante; nunca o ser humano caminha verdadeiramente só quando eleva o pensamento a Deus.",
        reference: "O Livro dos Espíritos - Questões 489 e 495",
        reflection: "No recolhimento da casa, faça uma prece silenciosa e sinta a presença fraterna do seu anjo guardião."
      },
      medo: {
        text: "Quem confia na soberana justiça e na bondade infinita de Deus não teme os acidentes da jornada, pois sabe que nada acontece sem permissão sábia do Criador.",
        reference: "O Livro dos Espíritos - Questões 13 e 964",
        reflection: "Substitua o receio pela vigilância tranquila e pela prece sincera; a luz interior dissipa toda sombra."
      },
      insonia: {
        text: "Durante o sono do corpo, o Espírito recobra parcialmente a sua liberdade e pode entrar em relação com os Espíritos amigos, buscando consolo, conselho e repouso.",
        reference: "O Livro dos Espíritos - Questões 400 e 402",
        reflection: "Antes de dormir, perdoe as ofensas do dia, ore em paz e entregue seu descanso aos mentores espirituais."
      },
      familia: {
        text: "Os laços de família não se destroem com o tempo; os Espíritos que se amam reúnem-se pela afinidade moral para se auxiliarem mutuamente no caminho do progresso.",
        reference: "O Evangelho Segundo o Espiritismo - Cap. 14 (Honrai a vosso Pai e a vossa Mãe)",
        reflection: "Ore por seus filhos, netos e antepassados; o Evangelho no Lar fortalece a harmonia e protege toda a casa."
      },
      sustento: {
        text: "O trabalho é lei da Natureza; o homem encontra nele não somente o pão para o corpo, mas também o aperfeiçoamento da inteligência e a disciplina da alma.",
        reference: "O Livro dos Espíritos - Questões 674 e 676",
        reflection: "Peça discernimento, ânimo e serenidade para cumprir com dignidade os deveres de cada dia."
      },
      perdao: {
        text: "Perdoar aos inimigos é pedir perdão para si mesmo; fazer o bem pelo mal é mostrar-se superior ao agravo e conquistar a verdadeira paz de consciência.",
        reference: "O Evangelho Segundo o Espiritismo - Cap. 10 e Cap. 12",
        reflection: "Desarme o coração de mágoas antigas; quem perdoa primeiro alcança leveza e liberdade espiritual."
      },
      paz: {
        text: "Reconhece-se o verdadeiro espírita pela sua transformação moral e pelos esforços que emprega para domar suas más inclinações, praticando a benevolência para com todos.",
        reference: "O Evangelho Segundo o Espiritismo - Cap. 17 (Sede Perfeitos)",
        reflection: "Dedique alguns instantes hoje ao silêncio, à leitura edificante e à reforma íntima na presença de Deus."
      }
    },
    chapters: [
      {
        title: "O Evangelho Segundo o Espiritismo - Cap. 5: Bem-Aventurados os Aflitos",
        verses: [
          "1. Bem-aventurados os que choram, porque serão consolados. Bem-aventurados os que têm fome e sede de justiça, porque serão fartos.",
          "2. As vicissitudes da vida têm causas justas: umas resultam das imperfeições do próprio Espírito encarnado, e outras são provas escolhidas para o adiantamento moral e a purificação da alma.",
          "3. Se, em vez de vos revoltardes contra a provação, a suportardes com coragem e resignação cristã, ela se torna fonte de méritos e abre caminho para uma felicidade duradoura.",
          "4. Na calma da prece e na certeza da vida futura, a dor perde o amargor do desespero e transforma-se em escola de sabedoria, humildade e amor ao próximo."
        ]
      },
      {
        title: "O Evangelho Segundo o Espiritismo - Cap. 15: Fora da Caridade não há Salvação",
        verses: [
          "1. Toda a moral de Jesus resume-se na caridade e na humildade, isto é, nas duas virtudes contrárias ao egoísmo e ao orgulho.",
          "2. A verdadeira caridade não consiste apenas na esmola material: ela está na benevolência para com todos, na indulgência para as imperfeições alheias e no perdão das ofensas.",
          "3. Fora da caridade não há salvação, porque nenhuma criatura pode alcançar a paz celeste sem aprender a amar e servir aos seus irmãos sem distinção.",
          "4. Praticar o bem dentro do próprio lar, com paciência, escuta e respeito aos mais velhos e aos mais jovens, é a primeira forma de caridade ensinada pelo Cristo."
        ]
      },
      {
        title: "O Livro dos Espíritos - Livro I, Cap. 1: Deus e a Prece",
        verses: [
          "Questão 1. Que é Deus? Deus é a inteligência suprema, causa primária de todas as coisas.",
          "Questão 13. Deus é eterno, infinito, imutável, imaterial, único, onipotente, soberanamente justo e bom.",
          "Questão 659. A prece torna o homem melhor; quem ora com fervor e confiança se fortalece contra as tentações do mal, e Deus lhe envia bons Espíritos para o assistir.",
          "Questão 886. Qual o verdadeiro sentido da palavra caridade, como a entendia Jesus? Benevolência para com todos, indulgência para as imperfeições dos outros, perdão das ofensas."
        ]
      }
    ]
  }
];
