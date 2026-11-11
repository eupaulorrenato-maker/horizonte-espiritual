// Dados das 16 tradições espirituais com títulos curtos das Obras Completas,
// 12 estados emocionais por tradição (192 passagens diárias) e estrutura de Livros e Capítulos.

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
    tag: "Tradição Cristã Católica",
    symbol: "✝",
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
    tag: "Tradição Cristã Evangélica",
    symbol: "📖",
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
    imageCaption: "Estudo, Caridade e Paz na Doutrina Espírita",
    name: "Doutrina Espírita",
    tag: "Espiritismo Kardecista",
    symbol: "🕊",
    greeting: "Muita paz e luz no seu coração",
    canonicalWorkTitle: "O Livro dos Espíritos Completo",
    dailyPassages: {
      ansiedade: { text: "A calma e a resignação hauridas na maneira de considerar a vida terrestre e na confiança no futuro dão ao espírito uma serenidade que é o melhor preservativo contra a loucura e o desespero.", reference: "O Evangelho Segundo o Espiritismo, Cap. V", reflection: "Olhe as dificuldades de hoje sob a perspectiva da vida imortal: toda tempestade é passageira." },
      luto: { text: "As afeições nunca se rompem; os Espíritos que se amam encontram-se no mundo espiritual e continuam a auxiliar-se.", reference: "O Livro dos Espíritos, Questão 938", reflection: "Aqueles que amamos continuam vivos e sensíveis às nossas preces de carinho." },
      desanimo: { text: "Reconhece-se o verdadeiro espírita pela sua transformação moral e pelos esforços que emprega para domar suas más inclinações.", reference: "O Evangelho Segundo o Espiritismo, Cap. XVII", reflection: "Cada pequeno esforço no bem é amparado pelos bons Espíritos." },
      saude: { text: "A prece é um auxílio sempre ouvido; ela atrai os bons Espíritos que vêm sustentar o enfermo na dor e inspirar os que o tratam.", reference: "O Evangelho Segundo o Espiritismo, Cap. XXVII", reflection: "Eleve o pensamento e receba o passe magnético da espiritualidade superior." },
      gratidao: { text: "Agradecei a Deus as boas inspirações que vos envia e a proteção com que envolve a vossa família.", reference: "O Evangelho Segundo o Espiritismo, Cap. XXVIII", reflection: "A gratidão sintoniza o lar com as esferas superiores da vida." },
      solidao: { text: "O homem nunca está só; tem sempre junto de si Espíritos simpáticos e o seu Espírito protetor ou Anjo Guardião.", reference: "O Livro dos Espíritos, Questão 495", reflection: "Converse em pensamento com o seu Anjo Guardião; ele escuta seu coração." },
      medo: { text: "A fé sincera é sempre calma; dá a paciência que sabe esperar, porque tem seu ponto de apoio na inteligência e na compreensão das coisas.", reference: "O Evangelho Segundo o Espiritismo, Cap. XIX", reflection: "A fé raciocinada afasta os temores infundados." },
      insonia: { text: "Durante o sono do corpo, o Espírito recupera forças no convívio com os Espíritos amigos e protetores.", reference: "O Livro dos Espíritos, Questão 401", reflection: "Faça uma prece antes de dormir preparando um bom encontro espiritual." },
      familia: { text: "Os laços de família não se destroem na erraticidade; os Espíritos permanecem unidos pelo afeto que os aproximou.", reference: "O Livro dos Espíritos, Questão 774", reflection: "O lar é uma escola abençoada de evolução mútua." },
      sustento: { text: "O trabalho é lei da Natureza, e Deus jamais desampara aquele que emprega suas forças com retidão.", reference: "O Livro dos Espíritos, Questão 674", reflection: "Mantenha a confiança e o ânimo no trabalho digno." },
      perdao: { text: "Perdoar aos inimigos é pedir perdão para si mesmo; perdoar aos amigos é dar-lhes uma prova de amizade.", reference: "O Evangelho Segundo o Espiritismo, Cap. X", reflection: "O esquecimento das ofensas alivia o coração e aproxima de Jesus." },
      paz: { text: "Fora da caridade não há salvação: benevolência para com todos, indulgência para as imperfeições alheias e perdão das ofensas.", reference: "O Evangelho Segundo o Espiritismo, Cap. XV", reflection: "A paz verdadeira nasce da bondade praticada sem ostentação." }
    },
    chapters: [
      {
        title: "Livro I - As Causas Primárias (Questões 1 a 10)",
        verses: [
          "1. Que é Deus? - Deus é a inteligência suprema, causa primária de todas as coisas.",
          "2. Que se deve entender por infinito? - O que não tem começo nem fim: o desconhecido; tudo o que é desconhecido é infinito.",
          "4. Onde se pode encontrar a prova da existência de Deus? - Num axioma que aplicais às vossas ciências: não há efeito sem causa. Procurai a causa de tudo o que não é obra do homem e a vossa razão responderá.",
          "10. Pode o homem compreender a natureza íntima de Deus? - Não; falta-lhe para isso o sentido."
        ]
      },
      {
        title: "Livro II - Do Mundo Espiritual (Questões 76 a 100)",
        verses: [
          "76. Que definição se pode dar dos Espíritos? - Pode dizer-se que os Espíritos são os seres inteligentes da criação. Povoam o Universo, fora do mundo material.",
          "84. Os Espíritos constituem um mundo à parte, fora daquele que vemos? - Sim, o mundo dos Espíritos ou das inteligências incorpóreas.",
          "88. Os Espíritos têm forma determinada, limitada e constante? - Para vós, não; para nós, sim. O Espírito é, se quiserdes, uma chama, um clarão ou uma centelha etérea."
        ]
      },
      {
        title: "Livro III - As Leis Morais: Lei de Adoração e Trabalho (Questões 649 a 685)",
        verses: [
          "649. Em que consiste a adoração? - Na elevação do pensamento a Deus. Pela adoração, aproxima-se o homem da Divindade.",
          "650. A adoração resulta de um sentimento inato, ou é produto de um ensino? - Sentimento inato, como o da existência de Deus. A consciência da sua fraqueza leva o homem a curvar-se diante daquele que o pode proteger.",
          "658. A prece é agradável a Deus? - A prece é sempre agradável a Deus, quando ditada pelo coração, pois a intenção é tudo para Ele.",
          "674. A necessidade do trabalho é lei da Natureza? - O trabalho é lei da Natureza, por isso mesmo que constitui uma necessidade, e a civilização obriga o homem a trabalhar mais, porque lhe aumenta as necessidades e os gozos."
        ]
      },
      {
        title: "Livro IV - Esperanças e Consolações (Questões 920 a 1019)",
        verses: [
          "920. Pode o homem gozar de completa felicidade na Terra? - Não, por isso que a vida lhe foi dada como prova ou expiação. Mas dele depende a suavização de seus males e o ser tão feliz quanto possível na Terra.",
          "934. A perda dos entes que nos são caros não constitui para nós legítima causa de dor? - Essa dor é legítima; contudo, atenuam-na a fé no futuro e a certeza de que os encontrareis na vida espiritual.",
          "1009. As penas impostas nunca o são para sempre? - Não; Deus é justo e misericordioso, permitindo sempre o arrependimento e o progresso do Espírito."
        ]
      },
      {
        title: "O Evangelho Segundo o Espiritismo - Bem-Aventurados os Aflitos",
        verses: [
          "1. Bem-aventurados os que choram, pois que serão consolados.",
          "2. As vicissitudes da vida são provas ou expiações que fortalecem a alma quando aceitas com fé.",
          "3. A calma na dor demonstra a confiança do Espírito na justiça soberana de Deus."
        ]
      }
    ]
  },
  {
    id: "umbanda",
    imagePath: "assets/traditions/umbanda.jpg",
    imageCaption: "Respeito e Caridade na Umbanda: Saudação a Seu Zé Pelintra e aos Guias de Luz",
    name: "Umbanda",
    tag: "Religião Brasileira de Matriz Africana, Indígena e Cristã",
    symbol: "🌿",
    greeting: "Saravá fraterno! Que Oxalá abençoe seus caminhos",
    canonicalWorkTitle: "Fundamentos e Preces da Umbanda Completo",
    dailyPassages: {
      ansiedade: { text: "Filho de fé, a pressa turva a vista, mas a paciência dos Pretos Velhos clareia a estrada. Respire fundo e confie na guarda de Oxalá.", reference: "Sabedoria dos Pretos Velhos", reflection: "Acalme o pensamento; seus guias espirituais caminham ao seu lado." },
      luto: { text: "Quem parte em paz retorna aos braços de Olorum e continua olhando com amor por aqueles que ficaram na Terra.", reference: "Tradição das Almas Benditas", reflection: "Acenda uma luz no coração e envie gratidão a quem partiu." },
      desanimo: { text: "Flecha de Caboclo não erra o alvo: erga a cabeça, firme o passo na terra e receba o sopro vivo das matas.", reference: "Saudação aos Caboclos de Oxóssi", reflection: "Renove seu ânimo com a força pura da natureza." },
      saude: { text: "Sob a palha sagrada de Obaluaê e as ervas benditas da Jurema, toda dor encontra bálsamo e restauração.", reference: "Prece de Cura nos Terreiros", reflection: "Confie na restauração do corpo e da alma." },
      gratidao: { text: "A Umbanda é paz e amor, um mundo cheio de luz: agradecer pelo pão e pela vida abre todas as portas do bem.", reference: "Hino da Umbanda e Tradição Oral", reflection: "A gratidão fortalece a corrente de luz do seu lar." },
      solidao: { text: "Filho de Umbanda nunca anda sozinho: teu Anjo de Guarda e teus Orixás velam pelo teu caminhar.", reference: "Sabedoria de Terreiro", reflection: "Sinta o amparo espiritual ao redor da sua casa." },
      medo: { text: "Com a espada de Ogum na frente e a justiça de Xangô ao lado, nenhum mal derruba quem anda na retidão.", reference: "Ponto de Firmeza de Ogum", reflection: "Caminhe com coragem e retidão." },
      insonia: { text: "Que as águas calmas de Mamãe Oxum e Iemanjá embalem teu sono e levem embora toda aflição.", reference: "Prece das Águas Sagradas", reflection: "Deixe que a serenidade das águas limpe a mente antes de dormir." },
      familia: { text: "Sant'Ana e Nanã Buruquê abençoam os avós, os filhos e os netos sob o manto da sabedoria ancestral.", reference: "Saudação a Nanã e às Famílias", reflection: "Abençoe sua família com palavras de concórdia." },
      sustento: { text: "Ogum abre as estradas do trabalho honesto e Oxóssi traz a fartura para a mesa de quem luta com honra.", reference: "Prece de Abertura de Caminhos", reflection: "Novas oportunidades se abrem ao trabalhador sincero." },
      perdao: { text: "Desate os nós da mágoa como quem limpa o congá: coração leve recebe mais axé e mais paz.", reference: "Conselho de Vovó Maria Conga", reflection: "Solte o rancor e preserve a sua paz espiritual." },
      paz: { text: "A Umbanda é a manifestação do espírito para a caridade: onde há caridade, habita a paz de Deus.", reference: "Caboclo das Sete Encruzilhadas (1908)", reflection: "Pratique hoje um gesto simples de bondade." }
    },
    chapters: [
      {
        title: "Capítulo 1 - A Fundação e o Lema da Caridade (1908)",
        verses: [
          "1. A Umbanda é a manifestação do espírito para a caridade.",
          "2. No terreiro sagrado, todos são acolhidos gratuitamente: não se pergunta de onde vem o irmão aflito, mas como aliviar a sua dor.",
          "3. O Evangelho de amor, a sabedoria dos Orixás e a humildade dos espíritos ancestrais unem-se sob a luz do Criador Supremo."
        ]
      },
      {
        title: "Capítulo 2 - As Sete Linhas Sagradas e as Falanges de Trabalho",
        verses: [
          "1. A irradiação da Fé, regida por Oxalá, traz paz e elevação espiritual.",
          "2. A irradiação do Amor, regida por Oxum, harmoniza os corações e protege os lares.",
          "3. A irradiação do Conhecimento, regida por Oxóssi e pelos Caboclos, traz clareza, cura pelas ervas e sustento.",
          "4. A irradiação da Justiça, regida por Xangô, ensina o equilíbrio e a retidão.",
          "5. A irradiação da Lei, regida por Ogum e Iansã, abre os caminhos e corta as demandas.",
          "6. A irradiação da Evolução, regida por Obaluaê e Nanã, ampara os enfermos e os Pretos Velhos.",
          "7. A irradiação da Geração, regida por Iemanjá, acolhe todas as cabeças e renova a vida."
        ]
      },
      {
        title: "Capítulo 3 - Sabedoria e Conselhos dos Pretos Velhos",
        verses: [
          "1. 'Filho, galho que enverga na ventania não quebra: aprenda a ter humildade e paciência nas horas difíceis.'",
          "2. 'A melhor defesa contra o mal é um coração limpo, uma palavra mansa e o pensamento firme em Deus.'",
          "3. 'Cuidado com o que pede e com o que fala: a boca que abençoa ilumina a própria casa.'"
        ]
      }
    ]
  },
  {
    id: "candomble",
    imagePath: "assets/traditions/candomble.jpg",
    imageCaption: "Sabedoria Ancestral dos Orixás: As Águas Sagradas de Oxalá e Iemanjá",
    name: "Candomblé",
    tag: "Tradição Ancestral dos Orixás, Voduns e Nkisis",
    symbol: "🐚",
    greeting: "Axé, Motumbá e Kolofé! Que Olorum abençoe seu Ori",
    canonicalWorkTitle: "Cânticos e Sabedoria dos Orixás Completo",
    dailyPassages: {
      ansiedade: { text: "Que o Alá branco de Oxalá cubra o teu Ori de frescor, serenidade e paciência.", reference: "Sabedoria de Oxalá (Epa Babá)", reflection: "Um Ori calmo e fresco enxerga a saída com clareza." },
      luto: { text: "Os ancestrais ilustres (Eguns) não desaparecem: tornam-se raízes sagradas que sustentam a árvore da família.", reference: "Tradição Ancestral Iorubá", reflection: "Honre a memória de quem partiu mantendo vivos os bons valores." },
      desanimo: { text: "Ogum forja o ferro no fogo e abre caminho na mata fechada: levanta-te com a firmeza de quem tem axé.", reference: "Oriki de Ogum (Ogunhê)", reflection: "Sua força interior é maior do que o obstáculo de hoje." },
      saude: { text: "Atotô Obaluaê! Senhor da terra e da cura, transforma o sofrimento em saúde e longevidade.", reference: "Oriki de Obaluaê e Omolu", reflection: "Cuide do seu corpo como templo vivo do sagrado." },
      gratidao: { text: "Agradecer a Olorum pelo sopro da manhã multiplica o axé dentro de casa.", reference: "Provérbio Tradicional Iorubá", reflection: "Reconheça as bênçãos da natureza e da vida." },
      solidao: { text: "Ninguém vem ao mundo sem o seu Orixá e sem o amparo de Iemanjá, mãe de todas as cabeças.", reference: "Oriki de Iemanjá (Odoyá)", reflection: "Você pertence a uma linhagem sagrada de vida e afeto." },
      medo: { text: "Quem caminha na verdade tem o machado justo de Xangô como escudo.", reference: "Oriki de Xangô (Kaô Kabecilê)", reflection: "A justiça divina protege quem age com retidão." },
      insonia: { text: "Que o vento suave de Oyá afaste os pensamentos pesados e traga noite tranquila ao teu descanso.", reference: "Saudação a Oyá / Iansã", reflection: "Respire lentamente e permita que a mente descanse." },
      familia: { text: "Oxum guarda as crianças, abençoa a união familiar e adoça as palavras dentro do lar.", reference: "Oriki de Oxum (Ora Yê Yê Ô)", reflection: "Cultive a doçura e a escuta no convívio familiar." },
      sustento: { text: "Oxóssi, senhor de uma só flecha, jamais volta à aldeia de mãos vazias: haverá fartura na tua mesa.", reference: "Oriki de Oxóssi (Okê Arô)", reflection: "Mantenha o foco e a dedicação no seu trabalho." },
      perdao: { text: "Água limpa de cachoeira não guarda poeira do passado: perdoe e mantenha o seu Ori em equilíbrio.", reference: "Sabedoria dos Mais Velhos", reflection: "Deixe ir o que pesa e renove sua energia." },
      paz: { text: "Iwà Pèlé: o caráter sereno, paciente e respeitoso é a maior riqueza diante dos Orixás.", reference: "Sabedoria Moral do Odù Ifá", reflection: "A serenidade do caráter atrai paz duradoura." }
    },
    chapters: [
      {
        title: "Capítulo 1 - O Conceito de Ori, Axé e Iwà Pèlé",
        verses: [
          "1. Olorum (Olódùmarè) é o Criador Supremo do Orun (mundo espiritual) e do Aiyê (mundo terreno).",
          "2. Ori é a centelha individual e o destino sagrado de cada ser humano: cuidar do equilíbrio mental e emocional é honrar o próprio Ori.",
          "3. Iwà Pèlé significa o bom caráter, feito de paciência, respeito aos mais velhos, palavra honrada e generosidade."
        ]
      },
      {
        title: "Capítulo 2 - Orikis Tradicionais de Saudação aos Orixás",
        verses: [
          "1. Oriki de Exu: 'Laroyê Exu, mensageiro que liga o Aiyê ao Orun, guardião da comunicação e da ordem dos caminhos.'",
          "2. Oriki de Ogum: 'Ogunhê! Senhor do ferro e da tecnologia, que abre as estradas para o progresso humano.'",
          "3. Oriki de Oxóssi: 'Okê Arô! Caçador de uma única flecha, provedor da comunidade e guardião das florestas.'",
          "4. Oriki de Ossaim: 'Ewê Ó! Sem folha não há cura nem axé; respeito sagrado à flora medicinal.'"
        ]
      },
      {
        title: "Capítulo 3 - Orikis das Águas, da Justiça e da Paz (Oxum, Iemanjá, Xangô e Oxalá)",
        verses: [
          "1. Oriki de Oxum: 'Ora Yê Yê Ô! Senhora das águas doces, da fertilidade, do afeto e da diplomacia.'",
          "2. Oriki de Iemanjá: 'Odoyá! Mãe soberana das águas marinhas, protetora das famílias e do equilíbrio emocional.'",
          "3. Oriki de Xangô: 'Kaô Kabecilê! Rei de Oyó, senhor da justiça reta que não tolera a mentira.'",
          "4. Oriki de Oxalá: 'Epa Babá! Senhor da brancura imaculada, da paciência ancestral e da paz sobre toda a criação.'"
        ]
      }
    ]
  },
  {
    id: "adventista",
    imagePath: "assets/traditions/adventista.jpg",
    imageCaption: "A Beleza da Criação, o Santo Sábado e a Palavra de Deus",
    name: "Igreja Adventista",
    tag: "Igreja Adventista do Sétimo Dia",
    symbol: "🌅",
    greeting: "Feliz descanso e bendita esperança no Senhor",
    canonicalWorkTitle: "Bíblia e Caminho a Cristo Completo",
    usesFullBibleIndex: true,
    dailyPassages: {
      ansiedade: { text: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", reference: "1 Pedro 5:7", reflection: "Entregue suas cargas nas mãos do Criador." },
      luto: { text: "Porque o mesmo Senhor descerá do céu, e os que morreram em Cristo ressuscitarão primeiro.", reference: "1 Tessalonicenses 4:16", reflection: "A bendita esperança do reencontro consola os corações enlutados." },
      desanimo: { text: "Espera no Senhor, anima-te, e ele fortalecerá o teu coração.", reference: "Salmo 27:14", reflection: "Deus renova o vigor daqueles que n'Ele confiam." },
      saude: { text: "Amado, desejo que te vá bem em todas as coisas, e que tenhas saúde, assim como bem vai a tua alma.", reference: "3 João 1:2", reflection: "Ar puro, água fresca, repouso e fé caminham juntos na restauração da saúde." },
      gratidao: { text: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.", reference: "1 Tessalonicenses 5:18", reflection: "O louvor sincero ilumina o lar." },
      solidao: { text: "Não to mandei eu? Esforça-te, e tem bom ânimo; porque o Senhor teu Deus é contigo, por onde quer que andares.", reference: "Josué 1:9", reflection: "Cristo caminha ao seu lado hoje." },
      medo: { text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", reference: "Salmo 46:1", reflection: "Nele encontramos abrigo seguro." },
      insonia: { text: "À tarde, pela manhã e ao meio-dia orarei; e o Senhor ouvirá a minha voz.", reference: "Salmo 55:17", reflection: "Descanse na paz do sábado e da guarda divina." },
      familia: { text: "Ensina a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele.", reference: "Provérbios 22:6", reflection: "O culto familiar no lar abençoa todas as gerações." },
      sustento: { text: "O Senhor te abrirá o seu bom tesouro, o céu, para dar chuva à tua terra no seu tempo, e para abençoar toda a obra das tuas mãos.", reference: "Deuteronômio 28:12", reflection: "Deus abençoa o trabalho honesto." },
      perdao: { text: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados.", reference: "1 João 1:9", reflection: "A graça de Cristo oferece um novo começo a cada manhã." },
      paz: { text: "Lembra-te do dia de sábado, para o santificar.", reference: "Êxodo 20:8", reflection: "Separe um tempo sagrado de repouso e comunhão com o Criador." }
    },
    chapters: [
      {
        title: "Caminho a Cristo - Capítulo 1: O Amor de Deus pelo Homem",
        verses: [
          "1. A natureza e a revelação dão igualmente testemunho do amor de Deus.",
          "2. Nosso Pai celeste é a fonte de vida, de sabedoria e de alegria.",
          "3. Olhai as maravilhas e belezas da natureza: o sol e a chuva que alegram e refrescam a terra falam do cuidado constante do Criador.",
          "4. 'Deus é amor' está escrito sobre cada botão que desabrocha, sobre cada haste de erva que brota."
        ]
      },
      {
        title: "Caminho a Cristo - Capítulo 11: O Privilégio da Oração",
        verses: [
          "1. Orar é o ato de abrir o coração a Deus como a um amigo sincero.",
          "2. Não é que se torne necessário a fim de tornar conhecido a Deus o que somos, mas sim a fim de nos habilitar a recebê-Lo.",
          "3. A oração não faz Deus descer a nós, mas eleva-nos a Ele.",
          "4. Apresentai a Deus as vossas necessidades, alegrias, tristezas, cuidados e temores."
        ]
      },
      {
        title: "Êxodo 20 e Apocalipse 14 - Os Mandamentos e a Esperança",
        verses: [
          "1. Lembrar-te-ás do dia do sábado, para o santificar: em seis dias fez o Senhor os céus e a terra, o mar e tudo que neles há, e ao sétimo dia descansou.",
          "2. Temei a Deus e dai-lhe glória; e adorai aquele que fez o céu, e a terra, e o mar, e as fontes das águas.",
          "3. Aqui está a paciência dos santos; aqui estão os que guardam os mandamentos de Deus e a fé em Jesus."
        ]
      }
    ]
  },
  {
    id: "mormons",
    imagePath: "assets/traditions/mormons.jpg",
    imageCaption: "O Templo Sagrado, as Famílias Eternas e o Evangelho de Jesus Cristo",
    name: "Santos dos Últimos Dias",
    tag: "A Igreja de Jesus Cristo dos Santos dos Últimos Dias",
    symbol: "🏛",
    greeting: "Que a paz do Salvador habite em sua família",
    canonicalWorkTitle: "O Livro de Mórmon Completo",
    dailyPassages: {
      ansiedade: { text: "Aprende de mim e ouve minhas palavras; anda na mansidão de meu Espírito e terás paz em mim.", reference: "Doutrina e Convênios 19:23", reflection: "A mansidão de Cristo acalma o coração aflito." },
      luto: { text: "As famílias são eternas pelo plano de misericórdia do grande Criador.", reference: "2 Néfi 9:6-13", reflection: "O amor familiar transcende o véu da mortalidade." },
      desanimo: { text: "Por meio de coisas pequenas e simples, grandes coisas são realizadas.", reference: "Alma 37:6", reflection: "Um pequeno passo de fé hoje constrói grandes bênçãos." },
      saude: { text: "E todos os santos que se lembrarem de guardar e praticar estas palavras receberão saúde no umbigo e medula nos ossos.", reference: "Doutrina e Convênios 89:18", reflection: "Cuidar do corpo com equilíbrio traz vigor e clareza mental." },
      gratidao: { text: "Vivei em ação de graças diariamente, pelas muitas misericórdias e bênçãos que ele vos concede.", reference: "Alma 34:38", reflection: "Contar as bênçãos diárias enche o lar de luz." },
      solidao: { text: "Sede de bom ânimo e não temais, porque eu, o Senhor, estou convosco e ficarei ao vosso lado.", reference: "Doutrina e Convênios 68:6", reflection: "O Salvador conhece seu nome e suas provações." },
      medo: { text: "Se estais preparados, não temereis.", reference: "Doutrina e Convênios 38:30", reflection: "A preparação espiritual traz tranquilidade diante do futuro." },
      insonia: { text: "Aconselha-te com o Senhor em tudo que fizeres; e quando te deitares à noite, deita-te no Senhor, para que ele vele por ti em teu sono.", reference: "Alma 37:37", reflection: "Faça sua oração noturna e descanse sob o olhar do Pai Celestial." },
      familia: { text: "Os homens existem para que tenham alegria, e essa alegria floresce no amor familiar.", reference: "2 Néfi 2:25", reflection: "Dedique hoje uma palavra de carinho a alguém de sua família." },
      sustento: { text: "Eu irei e cumprirei as ordens do Senhor, porque sei que o Senhor prepara um caminho para que se cumpra o que ele ordena.", reference: "1 Néfi 3:7", reflection: "O Senhor abre portas onde há fé e diligência." },
      perdao: { text: "Eu, o Senhor, perdoarei a quem eu quiser perdoar, mas de vós é exigido que perdoeis a todos os homens.", reference: "Doutrina e Convênios 64:10", reflection: "Perdoar traz o Espírito Santo de volta ao coração." },
      paz: { text: "Paz seja com a tua alma; tua adversidade e tuas aflições não durarão mais que um momento.", reference: "Doutrina e Convênios 121:7", reflection: "Suas provações atuais serão consagradas para o seu bem." }
    },
    chapters: [
      {
        title: "1 Néfi 1 a 3 - Fé e Obediência Familiar",
        verses: [
          "1. Eu, Néfi, tendo nascido de bons pais, recebi portanto alguma instrução em todo o conhecimento de meu pai.",
          "2. E aconteceu que eu, Néfi, disse a meu pai: Eu irei e cumprirei as ordens do Senhor, porque sei que o Senhor nunca dá ordens aos filhos dos homens sem antes preparar um caminho pelo qual suas ordens possam ser cumpridas.",
          "3. E as ternas misericórdias do Senhor estendem-se sobre todos aqueles que Ele escolheu, por causa de sua fé, para torná-los fortes."
        ]
      },
      {
        title: "Mosias 2 - O Serviço ao Próximo é Serviço a Deus",
        verses: [
          "1. Escutai-me e abri vossos ouvidos para que ouçais, e vosso coração para que entendais.",
          "2. Eis que vos digo que, por vos ter dito que passei a vida a vosso serviço, não desejo gloriar-me, pois só estive a serviço de Deus.",
          "3. E eis que vos digo estas coisas para que aprendais sabedoria; para que saibais que, quando estais a serviço de vosso próximo, estais somente a serviço de vosso Deus."
        ]
      },
      {
        title: "Alma 32 - A Semente da Fé",
        verses: [
          "1. Fé não é ter um conhecimento perfeito das coisas; portanto, se tendes fé, tendes esperança nas coisas que se não veem e que são verdadeiras.",
          "2. Compararemos, pois, a palavra a uma semente. Se derdes lugar para que uma semente seja plantada em vosso coração, eis que, se for uma semente verdadeira, ela começará a inchar em vosso peito.",
          "3. E nutrindo a palavra com fé, grande diligência e paciência, colhereis o fruto precioso da vida eterna."
        ]
      },
      {
        title: "3 Néfi 11 e Morôni 10 - O Ministério de Cristo e a Promessa",
        verses: [
          "1. Eis que eu sou Jesus Cristo, de quem os profetas testificaram que viria ao mundo. E eis que eu sou a luz e a vida do mundo.",
          "2. A caridade é o puro amor de Cristo e permanece para sempre; e para todo aquele que for achado possuindo-a no último dia, tudo irá bem.",
          "3. Perguntai a Deus, o Pai Eterno, em nome de Cristo, se estas coisas não são verdadeiras; e pelo poder do Espírito Santo sabereis a verdade de todas as coisas."
        ]
      }
    ]
  },
  {
    id: "testemunhas-jeova",
    imagePath: "assets/traditions/testemunhas-jeova.jpg",
    imageCaption: "A Promessa Bíblica de Paz e Restauração na Terra",
    name: "Testemunhas de Jeová",
    tag: "Estudo Bíblico Cristão",
    symbol: "📜",
    greeting: "Que a paz e o consolo de Jeová Deus fortaleçam você",
    canonicalWorkTitle: "Escrituras Sagradas Completas",
    usesFullBibleIndex: true,
    dailyPassages: {
      ansiedade: { text: "Lancem sobre ele toda a sua ansiedade, porque ele cuida de vocês.", reference: "1 Pedro 5:7", reflection: "Jeová conhece suas preocupações íntimas e ouve suas orações." },
      luto: { text: "Haverá uma ressurreição tanto de justos como de injustos.", reference: "Atos 24:15", reflection: "A promessa segura da ressurreição traz esperança real aos enlutados." },
      desanimo: { text: "Ele dá poder ao cansado e enche de vigor os sem forças.", reference: "Isaías 40:29", reflection: "Peça em oração o espírito e a força que vêm de Deus." },
      saude: { text: "E nenhum habitante dirá: 'Estou doente'.", reference: "Isaías 33:24", reflection: "Mantenha viva a esperança no Reino de Deus, onde toda enfermidade cessará." },
      gratidao: { text: "Agradeçam a Jeová, pois ele é bom; o seu amor leal dura para sempre.", reference: "Salmo 136:1", reflection: "Meditar no amor leal do Criador renova a alegria diária." },
      solidao: { text: "Jeová está perto dos que têm o coração quebrantado; ele salva os que têm o espírito esmagado.", reference: "Salmo 34:18", reflection: "Deus nunca se afasta de quem O busca de coração sincero." },
      medo: { text: "Não tenha medo, pois estou com você. Não fique ansioso, pois eu sou o seu Deus. Vou fortalecê-lo, sim, vou ajudá-lo.", reference: "Isaías 41:10", reflection: "Segure firme na mão protetora do Criador." },
      insonia: { text: "Em paz me deitarei e dormirei, pois só tu, ó Jeová, me fazes morar em segurança.", reference: "Salmo 4:8", reflection: "Converse com Deus em oração silenciosa antes de adormecer." },
      familia: { text: "O amor é paciente e bondoso. Tudo suporta, tudo crê, tudo espera, tudo persevera.", reference: "1 Coríntios 13:4, 7", reflection: "A paciência e a bondade edificam a paz na família." },
      sustento: { text: "Continuem, então, a buscar primeiro o Reino e a justiça de Deus, e todas essas outras coisas lhes serão acrescentadas.", reference: "Mateus 6:33", reflection: "Priorizar as coisas espirituais traz equilíbrio e provisão." },
      perdao: { text: "Continuem a suportar uns aos outros e a perdoar uns aos outros liberalmente.", reference: "Colossenses 3:13", reflection: "Perdoar liberalmente promove a paz na congregação e no lar." },
      paz: { text: "E a paz de Deus, que está além de toda compreensão, guardará o seu coração e a sua mente.", reference: "Filipenses 4:7", reflection: "A oração sincera traz uma calma que protege os pensamentos." }
    },
    chapters: [
      {
        title: "Salmo 83 e Salmo 37 - A Esperança dos Mansos",
        verses: [
          "1. Para que as pessoas saibam que tu, cujo nome é Jeová, somente tu és o Altíssimo sobre toda a terra. (Salmo 83:18)",
          "2. Confie em Jeová e faça o bem; more na terra e aja com fidelidade. (Salmo 37:3)",
          "3. Mas os mansos possuirão a terra e terão grande alegria na abundância de paz. (Salmo 37:11)",
          "4. Os justos possuirão a terra e viverão nela para sempre. (Salmo 37:29)"
        ]
      },
      {
        title: "Isaías 11 e 65 - A Promessa de Paz na Terra",
        verses: [
          "1. O lobo ficará algum tempo com o cordeiro, e o leopardo se deitará com o cabritinho; e um menino pequeno os conduzirá.",
          "2. Não se fará dano nem destruição em todo o meu santo monte, porque a terra certamente estará cheia do conhecimento de Jeová, assim como as águas cobrem o mar.",
          "3. Construirão casas e morarão nelas; plantarão vinhedos e comerão o seu fruto."
        ]
      },
      {
        title: "Apocalipse 21 - O Fim do Pranto e da Dor",
        verses: [
          "1. Vi então um novo céu e uma nova terra.",
          "3. Com isso ouvi uma voz alta do trono dizer: 'Veja! A tenda de Deus está com a humanidade'.",
          "4. E ele enxugará dos seus olhos toda lágrima, e não haverá mais morte, nem haverá mais tristeza, nem choro, nem dor. As coisas anteriores já passaram."
        ]
      }
    ]
  },
  {
    id: "judaica",
    imagePath: "assets/traditions/judaica.jpg",
    imageCaption: "A Sagrada Torá, a Menorá e a Luz da Paz (Shalom)",
    name: "Tradição Judaica",
    tag: "Judaísmo - Torá e Tehilim (Salmos)",
    symbol: "✡",
    greeting: "Shalom Aleichem! Que a paz do Eterno habite sua casa",
    canonicalWorkTitle: "Torá e Salmos (Tanakh) Completo",
    usesFullBibleIndex: true,
    dailyPassages: {
      ansiedade: { text: "Entrega o teu caminho ao Eterno, confia Nele, e Ele agirá.", reference: "Tehilim (Salmo) 37:5", reflection: "Bitachon (confiança ativa no Eterno) liberta a mente do peso da ansiedade." },
      luto: { text: "O Eterno deu, o Eterno levou; bendito seja o nome do Eterno. Que a memória do justo seja para bênção (Zichrono Livracha).", reference: "Jó 1:21 e Provérbios 10:7", reflection: "As boas ações (Mitzvot) realizadas em memória de quem partiu elevam a sua alma." },
      desanimo: { text: "Sê forte e corajoso (Chazak ve'Ematz); não temas nem te espantes, pois o Eterno teu Deus é contigo.", reference: "Devarim (Deuteronômio) 31:6", reflection: "A força espiritual renova-se no estudo e na prece." },
      saude: { text: "Cura-nos, ó Eterno, e seremos curados; salva-nos, e seremos salvos, pois Tu és o nosso louvor (Refuah Shelemah).", reference: "Jeremias 17:14", reflection: "Desejamos Refuah Shelemah (cura completa do corpo e da alma)." },
      gratidao: { text: "Modeh Ani: Dou graças diante de Ti, Rei vivo e eterno, que com misericórdia devolveste em mim a minha alma; grande é a Tua fidelidade.", reference: "Prece Matinal Judaica", reflection: "Acordar é um milagre diário digno de gratidão." },
      solidao: { text: "Mesmo que meu pai e minha mãe me abandonem, o Eterno me acolherá.", reference: "Tehilim (Salmo) 27:10", reflection: "A Presença Divina (Shechiná) nunca desampara você." },
      medo: { text: "O Eterno está comigo; não temerei.", reference: "Tehilim (Salmo) 118:6", reflection: "Caminhe com fé na proteção do Criador." },
      insonia: { text: "Em Suas mãos entrego o meu espírito, ao adormecer e ao despertar; e com o meu espírito, o meu corpo; o Eterno está comigo, não temerei.", reference: "Hino Adon Olam (Keriat Shemá al HaMitá)", reflection: "Recite o Shemá antes de dormir e repouse em paz." },
      familia: { text: "Que o Eterno te abençoe e te guarde; que o Eterno faça resplandecer o Seu rosto sobre ti e te conceda Shalom.", reference: "Bamidbar (Números) 6:24-26", reflection: "Abençoar os filhos e netos mantém acesa a chama do lar." },
      sustento: { text: "Abres a Tua mão e satisfazes o desejo de todo ser vivo.", reference: "Tehilim (Salmo) 145:16", reflection: "O Eterno é a fonte de Parnassá Tová (sustento digno e abençoado)." },
      perdao: { text: "Perdoo a todo aquele que me magoou ou pecou contra mim, para que nenhum irmão seja punido por minha causa.", reference: "Prece Noturna do Perdão (Ribono shel Olam)", reflection: "Perdoar antes de dormir purifica o coração." },
      paz: { text: "Afasta-te do mal e faze o bem; busca a paz (Shalom) e empenha-te por alcançá-la.", reference: "Tehilim (Salmo) 34:15", reflection: "Shalom é plenitude, harmonia e integridade." }
    },
    chapters: [
      {
        title: "Bereshit (Gênesis 1) - A Criação e o Shabat",
        verses: [
          "1. No princípio criou Deus os céus e a terra.",
          "3. E disse Deus: Haja luz; e houve luz.",
          "27. E criou Deus o ser humano à Sua imagem.",
          "31. E viu Deus tudo quanto tinha feito, e eis que era muito bom. E abençoou Deus o sétimo dia e o santificou."
        ]
      },
      {
        title: "Devarim (Deuteronômio 6) - O Shemá Israel",
        verses: [
          "4. Ouve, ó Israel: O Eterno é nosso Deus, o Eterno é Um! (Shemá Yisrael Adonai Eloheinu Adonai Echad).",
          "5. Amarás, pois, ao Eterno teu Deus de todo o teu coração, e de toda a tua alma, e de todas as tuas forças.",
          "6. E estas palavras, que hoje te ordeno, estarão no teu coração;",
          "7. E as intimarás a teus filhos, e delas falarás assentado em tua casa, e andando pelo caminho, e deitando-te e levantando-te."
        ]
      },
      {
        title: "Pirkei Avot (Ética dos Pais) - Capítulo 1",
        verses: [
          "1. Shimon, o Justo, costumava dizer: O mundo se sustenta sobre três pilares: sobre a Torá (o estudo), sobre o serviço divino (a prece) e sobre a prática da bondade (Gemilut Chassadim).",
          "2. Hillel dizia: Sê um dos discípulos de Aarão: ama a paz, persegue a paz, ama as criaturas e aproxima-as da sabedoria.",
          "3. Shammai dizia: Faze do teu estudo um hábito constante; fala pouco e faze muito; e recebe a todas as pessoas com um semblante alegre e acolhedor."
        ]
      }
    ]
  },
  {
    id: "islamica",
    imagePath: "assets/traditions/islamica.jpg",
    imageCaption: "O Sagrado Alcorão sob a Luz do Clemente e Misericordioso",
    name: "Fé Islâmica",
    tag: "Islã - Sagrado Alcorão e Sabedoria Profética",
    symbol: "☪",
    greeting: "As-salamu alaykum! Que a paz e a misericórdia de Deus estejam com você",
    canonicalWorkTitle: "Sagrado Alcorão Completo",
    dailyPassages: {
      ansiedade: { text: "Por certo, com a dificuldade vem a facilidade. Sim, com a dificuldade vem a facilidade.", reference: "Sagrado Alcorão, Surata Ash-Sharh (94:5-6)", reflection: "Deus nunca impõe a uma alma uma carga superior às suas forças; o alívio está próximo." },
      luto: { text: "De Deus somos e a Ele retornaremos (Inna lillahi wa inna ilayhi raji'un).", reference: "Sagrado Alcorão, Surata Al-Baqarah (2:156)", reflection: "Sobre os pacientes nas horas de perda recaem as bênçãos e a misericórdia do Clemente." },
      desanimo: { text: "Não desanimeis nem vos entristeçais, pois sereis superiores se tiverdes fé verdadeira.", reference: "Sagrado Alcorão, Surata Ali 'Imran (3:139)", reflection: "A paciência perseverante (Sabr) é recompensada por Deus." },
      saude: { text: "E quando adoeço, é Ele quem me concede a cura.", reference: "Sagrado Alcorão, Surata Ash-Shu'ara (26:80)", reflection: "Suplique a Ash-Shafi (O Curador) com serenidade e esperança." },
      gratidao: { text: "Se agradecerdes, multiplicar-vos-ei as Minhas graças.", reference: "Sagrado Alcorão, Surata Ibrahim (14:7)", reflection: "Dizer Alhamdulillah (Louvado seja Deus) atrai bênçãos crescentes." },
      solidao: { text: "E Ele está convosco onde quer que estejais.", reference: "Sagrado Alcorão, Surata Al-Hadid (57:4)", reflection: "Deus está mais próximo do ser humano do que a sua própria veia jugular." },
      medo: { text: "A quem confia em Deus (Tawakkul), Ele lhe basta.", reference: "Sagrado Alcorão, Surata At-Talaq (65:3)", reflection: "Coloque sua confiança no Clemente e Misericordioso." },
      insonia: { text: "Acaso não é com a lembrança de Deus (Dhikr) que os corações encontram tranquilidade?", reference: "Sagrado Alcorão, Surata Ar-Ra'd (13:28)", reflection: "Lembre-se da bondade divina ao deitar e o coração repousará." },
      familia: { text: "Ó Senhor nosso, concede-nos em nossos cônjuges e em nossa descendência o frescor dos nossos olhos.", reference: "Sagrado Alcorão, Surata Al-Furqan (25:74)", reflection: "Honrar os pais e abençoar os filhos é pilar da fé." },
      sustento: { text: "E a quem teme a Deus, Ele lhe prepara uma saída e o provê de onde menos espera.", reference: "Sagrado Alcorão, Surata At-Talaq (65:2-3)", reflection: "Ar-Razzaq (O Provedor) cuida do sustento de quem age com honestidade." },
      perdao: { text: "Que perdoem e relevem: acaso não desejais que Deus vos perdoe? E Deus é Indulgente, Misericordioso.", reference: "Sagrado Alcorão, Surata An-Nur (24:22)", reflection: "Perdoar ao próximo atrai o perdão do Altíssimo." },
      paz: { text: "É Ele quem fez descer a serenidade (Sakinah) aos corações dos crentes.", reference: "Sagrado Alcorão, Surata Al-Fath (48:4)", reflection: "Que a Sakinah (paz celeste) envolva a sua casa." }
    },
    chapters: [
      {
        title: "Surata 1 (Al-Fatiha) - A Abertura",
        verses: [
          "1. Em nome de Deus, o Clemente, o Misericordioso.",
          "2. Louvado seja Deus, Senhor do Universo,",
          "3. O Clemente, o Misericordioso,",
          "4. Soberano do Dia do Juízo.",
          "5. Só a Ti adoramos e só de Ti imploramos auxílio!",
          "6. Guia-nos à senda reta,",
          "7. À senda dos que agraciaste, não à dos incorridos na Tua ira, nem à dos desviados. Amin."
        ]
      },
      {
        title: "Surata 2:255 (Ayat al-Kursi) e Surata 24:35 (O Versículo da Luz)",
        verses: [
          "1. Deus! Não há divindade além d'Ele, o Vivente, o Subsistente. Não O tomam a sonolência nem o sono.",
          "2. A Ele pertence tudo quanto há nos céus e na terra. Seu Trono abrange os céus e a terra, e a preservação de ambos não Lhe causa fadiga; Ele é o Excelso, o Magnífico.",
          "3. Deus é a Luz dos céus e da terra. O exemplo de Sua luz é como um nicho em que há uma lâmpada radiante: Luz sobre Luz!"
        ]
      },
      {
        title: "Suratas 93 (Ad-Duha), 94 (Ash-Sharh) e 112 (Al-Ikhlas)",
        verses: [
          "1. Pelas horas da manhã e pela noite quando se acalma: o teu Senhor não te abandonou, nem te desamparou.",
          "2. E por certo que o futuro será melhor para ti do que o presente. (Surata 93:1-4)",
          "3. Por certo, com a dificuldade vem a facilidade. Sim, com a dificuldade vem a facilidade. (Surata 94:5-6)",
          "4. Dize: Ele é Deus, o Único! Deus, o Absoluto! Não gerou e não foi gerado, e ninguém é comparável a Ele. (Surata 112:1-4)"
        ]
      }
    ]
  },
  {
    id: "messianica",
    imagePath: "assets/traditions/messianica.jpg",
    imageCaption: "A Luz Divina, o Belo e a Harmonia com a Natureza",
    name: "Igreja Messiânica / Seicho-no-Ie",
    tag: "Filosofias Espiritualistas de Gratidão e Luz Divina",
    symbol: "☀",
    greeting: "Muito obrigado! Que a Luz Divina purifique e ilumine seu lar",
    canonicalWorkTitle: "Sutra Sagrada e Ensinamentos Completos",
    dailyPassages: {
      ansiedade: { text: "Entregando tudo nas mãos de Deus, a mente se aquieta e a Sabedoria Infinita conduz cada acontecimento à perfeição.", reference: "Sabedoria da Imagem Verdadeira", reflection: "Solte o excesso de controle e confie na ordem perfeita de Deus." },
      luto: { text: "A Vida de Deus é eterna e indestrutível; quem amamos vive na Luz e recebe o nosso sentimento de gratidão.", reference: "Prece aos Antepassados", reflection: "Envie palavras de gratidão sincera aos seus antepassados." },
      desanimo: { text: "Você é Filho de Deus, dotado de capacidade infinita e envolto pela Luz que renova todas as coisas.", reference: "Sutra Sagrada - Chuva de Néctar da Verdade", reflection: "Contemple a perfeição espiritual que habita em você." },
      saude: { text: "A Luz Divina purifica as nuvens espirituais e manifesta a saúde original criada por Deus.", reference: "Princípio do Johrei e da Cura Espiritual", reflection: "Receba a Luz Divina em pensamento e agradeça pela vida do seu corpo." },
      gratidao: { text: "Gratidão gera gratidão; queixa gera queixa. Ao agradecer, sintonizamos com o Paraíso Terrestre.", reference: "Ensinamentos de Meishu-Sama", reflection: "Repita hoje com sinceridade: 'Muito obrigado por tudo'." },
      solidao: { text: "Deus habita no âmago da sua vida; quem vive em comunhão com Deus está sempre acompanhado pelo Amor Universal.", reference: "Meditação Shinsokan", reflection: "Sinta a presença luminosa do Criador dentro do seu coração." },
      medo: { text: "Onde brilha a Luz da Verdade, a escuridão do medo se dissipa naturalmente.", reference: "Chuva de Néctar da Verdade", reflection: "Afirme a presença do Bem em todas as situações." },
      insonia: { text: "Agradeça a todas as pessoas e coisas antes de dormir, e seu sono será profundo e reparador.", reference: "Prática Diária da Gratidão", reflection: "Encerre o dia abençoando a todos." },
      familia: { text: "Quando nos reconciliamos de coração com nossos pais, filhos e antepassados, todo o lar prospera em harmonia.", reference: "Prece de Reconciliação Familiar", reflection: "O lar harmonioso é o alicerce da felicidade." },
      sustento: { text: "A provisão de Deus é inesgotável; quem serve ao próximo com alegria recebe abundância em todas as áreas.", reference: "Lei da Abundância Espiritual", reflection: "Trabalhe com o desejo sincero de tornar os outros felizes." },
      perdao: { text: "Ao enxergar a natureza divina no próximo, as mágoas se dissolvem como gelo ao sol.", reference: "Ensinamento da Harmonia", reflection: "Veja o bem essencial em cada pessoa." },
      paz: { text: "Verdade, Bem e Belo: cercar-se de beleza, gratidão e altruísmo constrói a paz no lar.", reference: "Alicerce do Paraíso", reflection: "Cultive uma flor, um sorriso ou uma boa leitura hoje." }
    },
    chapters: [
      {
        title: "Capítulo 1 - A Verdade da Vida e o Filho de Deus",
        verses: [
          "1. Deus é o Criador de todo o Universo, a Fonte de Sabedoria Infinita, Amor Infinito e Vida Infinita.",
          "2. O ser humano, em sua essência espiritual (Imagem Verdadeira), é Filho de Deus, criado perfeito e livre do mal.",
          "3. As palavras luminosas e os pensamentos de gratidão fazem manifestar na terra a harmonia perfeita do mundo espiritual."
        ]
      },
      {
        title: "Capítulo 2 - A Lei da Purificação e o Belo",
        verses: [
          "1. Assim como limpamos a casa física, devemos purificar o espírito através da prece, do altruísmo e da transmissão de Luz.",
          "2. A prática de fazer o próximo feliz é o caminho mais curto para alcançar a própria felicidade.",
          "3. Apreciar a natureza e a arte eleva os sentimentos e aproxima a alma da serenidade divina."
        ]
      },
      {
        title: "Capítulo 3 - Oração de Gratidão aos Antepassados e à Família",
        verses: [
          "1. 'Agradecemos profundamente a nossos pais e a todos os nossos antepassados pelas raízes da nossa vida.'",
          "2. 'Reconcilia-te com todas as coisas do céu e da terra: quando há reconciliação verdadeira, toda a natureza colabora a teu favor.'",
          "3. 'Muito obrigado, Senhor Deus, pela paz, pela saúde e pela harmonia que reinam em nosso lar.'"
        ]
      }
    ]
  },
  {
    id: "ortodoxa",
    imagePath: "assets/traditions/ortodoxa.jpg",
    imageCaption: "Cristo Pantocrator e a Tradição Milenar da Igreja Cristã Ortodoxa",
    name: "Cristã Ortodoxa",
    tag: "Igreja Cristã Ortodoxa Oriental",
    symbol: "☦",
    greeting: "Glória a Jesus Cristo! Glória para sempre!",
    canonicalWorkTitle: "Bíblia e Saltério Ortodoxo Completo",
    usesFullBibleIndex: true,
    dailyPassages: {
      ansiedade: { text: "Adquire o espírito de paz, e milhares ao teu redor encontrarão a salvação.", reference: "São Serafim de Sarov", reflection: "A paz interior começa na guarda silenciosa do coração." },
      luto: { text: "Com os santos dá repouso, ó Cristo, à alma do Teu servo, onde não há dor, nem tristeza, nem gemido, mas vida interminável.", reference: "Liturgia Ortodoxa pelos Fiéis Defuntos (Memória Eterna)", reflection: "Eterna seja a memória de quem partiu na esperança da Ressurreição." },
      desanimo: { text: "Senhor Jesus Cristo, Filho de Deus, tem piedade de mim.", reference: "Oração de Jesus (Filocalia)", reflection: "Repita esta curta prece no ritmo tranquilo da sua respiração." },
      saude: { text: "Médico das nossas almas e dos nossos corpos, visita e cura as nossas enfermidades pela Tua misericórdia.", reference: "Eucológio Ortodoxo", reflection: "Cristo é o verdadeiro Médico que restaura o ser humano por inteiro." },
      gratidao: { text: "Glória a Deus por todas as coisas!", reference: "São João Crisóstomo", reflection: "Louvar a Deus em todas as circunstâncias ilumina a alma." },
      solidao: { text: "Rei Celeste, Consolador, Espírito da Verdade, que estás presente em toda parte e tudo preenches: vem e habita em nós.", reference: "Oração Inicial ao Espírito Santo", reflection: "O Espírito Consolador preenche todo espaço de solidão." },
      medo: { text: "Deus está conosco! Entendei isto, ó nações, e submetei-vos, pois Deus está conosco.", reference: "Grande Compline (Isaías 8)", reflection: "Onde Cristo está presente, nenhum temor prevalece." },
      insonia: { text: "Ilumina as minhas trevas, ó Senhor meu Deus, e concede-me um sono pacífico e livre de inquietação.", reference: "Orações Antes de Dormir (Apodeipnon)", reflection: "Faça o sinal da Cruz e entregue sua noite ao Senhor." },
      familia: { text: "O lar cristão é uma pequena igreja onde o amor mútuo reflete o amor da Santíssima Trindade.", reference: "São João Crisóstomo", reflection: "Abençoe sua casa com paciência e mansidão." },
      sustento: { text: "Os olhos de todos esperam em Ti, Senhor, e Tu lhes dás o alimento no tempo oportuno.", reference: "Salmo 144 (145):15", reflection: "A Providência Divina sustenta os que trabalham com fé." },
      perdao: { text: "Não deixes que o sol se ponha sobre o teu ressentimento; perdoa de coração a teu irmão.", reference: "Sabedoria dos Padres do Deserto", reflection: "A humildade e o perdão abrem as portas da graça." },
      paz: { text: "Em paz oremos ao Senhor: pela paz que vem do alto e pela salvação de nossas almas.", reference: "Divina Liturgia de São João Crisóstomo", reflection: "A verdadeira paz desce do alto ao coração humilde." }
    },
    chapters: [
      {
        title: "Orações Iniciais e o Triságio Sagrado",
        verses: [
          "1. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.",
          "2. Rei Celeste, Consolador, Espírito da Verdade, que estás presente em toda parte e tudo preenches, Tesouro de bens e Doador da vida: vem e habita em nós, purifica-nos de toda mancha e salva, ó Bom, as nossas almas.",
          "3. Santo Deus, Santo Forte, Santo Imortal, tem piedade de nós. (3 vezes)",
          "4. Santíssima Trindade, tem piedade de nós; Senhor, purifica-nos de nossos pecados; Mestre, perdoa nossas iniquidades; Santo, visita e cura nossas enfermidades, por amor do Teu Nome."
        ]
      },
      {
        title: "Sabedoria da Filocalia e dos Padres do Deserto",
        verses: [
          "1. Disse Abba Antônio: 'Aquele que se senta na quietude e no silêncio livra-se de três combates: do ouvir, do falar e do julgar; resta-lhe apenas guardar a paz do próprio coração.'",
          "2. Disse São João Clímaco: 'Que a lembrança de Jesus se una à tua respiração, e então conhecerás o valor da paz interior (Hesychia).'",
          "3. Disse São Isaque da Síria: 'Um coração misericordioso é aquele que arde de compaixão por toda a criação.'"
        ]
      },
      {
        title: "Homilia Pascal de São João Crisóstomo",
        verses: [
          "1. Se alguém é piedoso e ama a Deus, que desfrute desta bela e radiante festa!",
          "2. Que ninguém chore suas faltas, pois o perdão brotou do sepulcro.",
          "3. Que ninguém tema a morte, pois a morte do Salvador nos libertou. Cristo ressuscitou, e a vida reina!"
        ]
      }
    ]
  },
  {
    id: "indigena",
    imagePath: "assets/traditions/indigena.jpg",
    imageCaption: "Sabedoria Ancestral dos Povos Originários e da Floresta Sagrada",
    name: "Sabedoria Indígena",
    tag: "Espiritualidade Ancestral dos Povos Originários",
    symbol: "🪶",
    greeting: "Que o Grande Espírito e a força da Mãe Terra caminhem com você",
    canonicalWorkTitle: "Sabedoria e Cantos Ancestrais Completo",
    dailyPassages: {
      ansiedade: { text: "Escuta o vento nas folhas e o curso calmo do rio: a natureza nunca se apressa, e ainda assim tudo floresce no tempo certo.", reference: "Sabedoria dos Anciãos da Floresta", reflection: "Respire o ar da manhã e desacelere o passo." },
      luto: { text: "Aqueles que amamos encantaram-se na luz das estrelas e no sopro da mata; continuam vivos na memória do nosso povo.", reference: "Tradição dos Encantados e Ancestrais", reflection: "Olhe para o céu e sinta a presença viva dos seus antepassados." },
      desanimo: { text: "Como a árvore de raízes fundas que resiste ao temporal, busca tua força na terra que sustenta teus pés.", reference: "Ensinamento Guarani (Teko Porã)", reflection: "Apoie os pés no chão e sinta a firmeza da vida." },
      saude: { text: "Na água limpa da nascente, no sol da manhã e na sabedoria das plantas sagradas mora o espírito da cura.", reference: "Tradição dos Pajés e Rezadores", reflection: "Tome um copo de água fresca agradecendo pela restauração do corpo." },
      gratidao: { text: "Ao abrir os olhos, saúda o Sol que aquece a todos sem distinção e agradece à Terra pelo alimento.", reference: "Canto Matinal às Quatro Direções", reflection: "A gratidão mantém o ser humano em harmonia com a criação." },
      solidao: { text: "Quem reconhece o parentesco com os rios, os pássaros, as árvores e as estrelas jamais está sozinho no mundo.", reference: "Sabedoria Originária", reflection: "Você faz parte da grande teia sagrada da vida." },
      medo: { text: "Dentro do peito habitam o medo e a coragem: prevalece aquele que você alimenta com seus pensamentos.", reference: "Parábola Tradicional dos Anciãos", reflection: "Alimente hoje a coragem, a verdade e a serenidade." },
      insonia: { text: "A noite não veio para assustar, mas para cobrir a terra de silêncio e renovar os sonhos da alma.", reference: "Sabedoria Noturna da Aldeia", reflection: "Acolha o silêncio da noite como um manto de descanso." },
      familia: { text: "A palavra dos mais velhos é a raiz da árvore; o riso das crianças é a flor que anuncia o futuro.", reference: "Conselho Comunitário Indígena", reflection: "Valorize a conversa ao redor da mesa com sua família." },
      sustento: { text: "A Terra é mãe generosa para quem planta com respeito e reparte a colheita com justiça.", reference: "Princípio da Reciprocidade", reflection: "Seu esforço honesto dará bons frutos." },
      perdao: { text: "Não carregues pedras pesadas na canoa da tua vida; lança a mágoa nas águas para seguir viagem leve.", reference: "Provérbio das Águas", reflection: "Deixe a correnteza levar o ressentimento." },
      paz: { text: "Teko Porã (O Bem Viver): caminhar com beleza, falar palavras doces e viver em paz com todos os seres.", reference: "Sabedoria Guarani", reflection: "Que suas palavras de hoje sejam palavras que curam." }
    },
    chapters: [
      {
        title: "Capítulo 1 - O Bem Viver (Teko Porã) e a Palavra Sagrada (Ayvu Rapyta)",
        verses: [
          "1. Antes de existirem a terra e as águas, o Grande Mistério (Nhanderu) desdobrou-se a partir do amor e da palavra luminosa.",
          "2. A alma humana é uma palavra sagrada enviada para caminhar com retidão sobre a terra.",
          "3. Teko Porã é o modo belo e justo de viver: sem ganância, honrando os anciãos, protegendo as crianças e respeitando a floresta."
        ]
      },
      {
        title: "Capítulo 2 - Prece às Quatro Direções Sagradas",
        verses: [
          "1. Ao Leste, onde nasce o Sol, pedimos clareza de visão e renovação a cada amanhecer.",
          "2. Ao Sul, morada das águas e do crescimento, pedimos confiança e coração generoso.",
          "3. Ao Oeste, onde a tarde se recolhe, pedimos introspecção e paz interior.",
          "4. Ao Norte, morada dos ventos brancos e dos anciãos, pedimos sabedoria, memória e paciência."
        ]
      },
      {
        title: "Capítulo 3 - Conselhos dos Anciãos sobre a Vida e a Família",
        verses: [
          "1. 'Escuta mais do que falas; observa o ritmo das estações e nunca desprezes o conselho de quem tem cabelos brancos.'",
          "2. 'Trata a Terra não como uma posse, mas como uma mãe que empresta o berço aos teus netos.'",
          "3. 'Quando o coração estiver pesado, caminha descalço, respira fundo e entrega tua prece ao vento.'"
        ]
      }
    ]
  },
  {
    id: "budismo",
    imagePath: "assets/traditions/budismo.jpg",
    imageCaption: "Serenidade, Compaixão e Atenção Plena nos Ensinamentos de Buda",
    name: "Budismo",
    tag: "Tradição Budista - O Caminho do Meio e da Compaixão",
    symbol: "☸",
    greeting: "Que todos os seres estejam em paz e livres do sofrimento",
    canonicalWorkTitle: "Dhammapada Completo",
    dailyPassages: {
      ansiedade: { text: "Não te prendas ao passado, não te percas na ansiedade pelo futuro: concentra a mente inteiramente no momento presente.", reference: "Bhaddekaratta Sutta (Majjhima Nikaya 131)", reflection: "Volte sua atenção para a respiração suave de agora." },
      luto: { text: "Tudo o que é composto está sujeito à transformação; mas o amor compassivo cultivado em vida resplandece além do tempo.", reference: "Mahaparinibbana Sutta", reflection: "Dedique os méritos de um gesto bondoso de hoje à memória de quem partiu." },
      desanimo: { text: "Assim como uma rocha maciça não é abalada pelo vento, os sábios permanecem serenos diante dos altos e baixos da vida.", reference: "Dhammapada, Verso 81", reflection: "Encontre sua estabilidade interior no silêncio." },
      saude: { text: "A saúde é o maior dos ganhos, o contentamento é a maior riqueza, a confiança é o melhor parente.", reference: "Dhammapada, Verso 204", reflection: "Cuide do corpo com atenção plena e gentileza." },
      gratidao: { text: "Felizes vivemos nós, livres de aversão e plenos de contentamento e gratidão pela preciosidade da vida humana.", reference: "Dhammapada, Versos 197-200", reflection: "Agradeça hoje pelo simples ato de respirar e perceber o mundo." },
      solidao: { text: "Se tiveres compaixão por todos os seres vivos, teu coração será um santuário habitado pela paz universal.", reference: "Karaniya Metta Sutta", reflection: "Irradie bondade amorosa (Metta) e sinta-se unido a toda a vida." },
      medo: { text: "Da mente pacificada e compassiva desaparece todo medo.", reference: "Dhammapada, Verso 39", reflection: "Acolha o medo com respiração calma até que ele se dissolva." },
      insonia: { text: "Aquele que pratica a bondade amorosa dorme em paz, desperta em paz e não tem sonhos perturbadores.", reference: "Metta (Mettanisamsa) Sutta", reflection: "Deseje paz a todos os seres antes de fechar os olhos." },
      familia: { text: "Amparar o pai e a mãe, cuidar do cônjuge e dos filhos e ter ocupações pacíficas: esta é a suprema bênção.", reference: "Mangala Sutta (Discurso das Bênçãos)", reflection: "A harmonia familiar é uma prática espiritual diária." },
      sustento: { text: "O meio de vida correto (Samma Ajiva) traz sustento honesto sem causar dano a nenhum ser vivo.", reference: "Nobre Caminho Óctuplo", reflection: "A integridade no trabalho garante tranquilidade de consciência." },
      perdao: { text: "O ódio nunca cessa pelo ódio neste mundo; somente pelo não-ódio e pela bondade ele cessa. Esta é uma lei eterna.", reference: "Dhammapada, Verso 5", reflection: "Soltar o ressentimento é um presente que você dá à sua própria paz." },
      paz: { text: "Não há felicidade superior à paz interior (Nibbana).", reference: "Dhammapada, Verso 202", reflection: "Sente-se confortavelmente por três minutos e observe a calma da respiração." }
    },
    chapters: [
      {
        title: "Capítulo 1 (Yamakavagga) - Os Versos Gêmeos sobre a Mente",
        verses: [
          "1. A mente precede todos os estados mentais; a mente é o seu fundamento, e eles são criados pela mente. Se alguém fala ou age com mente impura, o sofrimento o acompanha como a roda segue a pata do boi que puxa a carroça.",
          "2. A mente precede todos os estados mentais. Se alguém fala ou age com mente pura e serena, a felicidade o acompanha como uma sombra que jamais o deixa.",
          "5. Pois o ódio nunca é apaziguado pelo ódio neste mundo; somente pelo amor e pela compaixão o ódio é apaziguado. Esta é uma lei milenar."
        ]
      },
      {
        title: "Capítulo 2 (Appamadavagga) - A Atenção Plena e a Serenidade",
        verses: [
          "21. A atenção plena é o caminho para a imortalidade; a dispersão é o caminho do pesar. Os que permanecem atentos não perecem.",
          "25. Pela diligência, pela atenção plena, pela disciplina e pelo autodomínio, o sábio constrói para si uma ilha que nenhuma inundação pode submergir.",
          "28. Quando o sábio afasta a agitação por meio da serenidade, ele sobe ao terraço da sabedoria e contempla o mundo com compaixão."
        ]
      },
      {
        title: "Capítulo 14 e 15 (Buddhavagga e Sukhavagga) - O Desperto e a Felicidade",
        verses: [
          "183. Evitar todo o mal, cultivar o bem e purificar a própria mente: este é o ensinamento de todos os Budas.",
          "197. Quão felizes vivemos nós, sem inimizade entre os que têm inimizade!",
          "204. A saúde é o maior dos ganhos, o contentamento é a maior riqueza, a confiança é o melhor parente, e a Paz Suprema é a maior felicidade."
        ]
      },
      {
        title: "Karaniya Metta Sutta - O Discurso da Bondade Amorosa",
        verses: [
          "1. Que todos os seres sejam felizes e seguros; que os seus corações estejam plenos de alegria.",
          "2. Quaisquer que sejam os seres vivos, frágeis ou fortes, próximos ou distantes: que todos os seres sejam felizes.",
          "3. Assim como uma mãe protege o seu único filho com a própria vida, cultivemos um coração ilimitado de benevolência para com todo o universo."
        ]
      }
    ]
  },
  {
    id: "hinduismo",
    imagePath: "assets/traditions/hinduismo.jpg",
    imageCaption: "As Luzes Sagradas do Ganges e a Sabedoria Eterna do Bhagavad Gita",
    name: "Hinduísmo",
    tag: "Tradição Védica - Bhagavad Gita e Upanishads",
    symbol: "🕉",
    greeting: "Namastê! Om Shanti: o divino em mim saúda o divino em você",
    canonicalWorkTitle: "Bhagavad Gita Completo",
    dailyPassages: {
      ansiedade: { text: "Aquele cuja mente não se perturba na adversidade e está livre do medo e da ansiedade é chamado um sábio de consciência firme.", reference: "Bhagavad Gita 2:56", reflection: "Respire fundo e lembre-se da sua essência pacífica (Atman)." },
      luto: { text: "Para a alma (Atman) nunca há nascimento nem morte; ela é eterna, imortal e primordial, e não perece quando o corpo perece.", reference: "Bhagavad Gita 2:20", reflection: "A alma de quem amamos é eterna e indestrutível." },
      desanimo: { text: "Ergue-te pelo teu próprio Ser e nunca deixes que o teu ânimo se abata, pois o Ser interior é o teu maior amigo.", reference: "Bhagavad Gita 6:5", reflection: "Desperte a força luminosa que mora no seu coração." },
      saude: { text: "Para aquele que é moderado no comer, no repouso, no trabalho e no vigiar, a prática espiritual dissipa todas as dores.", reference: "Bhagavad Gita 6:17", reflection: "O equilíbrio nos hábitos diários preserva a saúde e a paz." },
      gratidao: { text: "Seja uma folha, uma flor, um fruto ou um pouco de água: tudo o que Me é oferecido com devoção e gratidão, Eu aceito com amor.", reference: "Bhagavad Gita 9:26", reflection: "A simplicidade de um coração grato agrada ao Divino." },
      solidao: { text: "Para aquele que vê o Divino em todas as partes e vê todas as coisas no Divino, Eu nunca estou longe dele, nem ele está longe de Mim.", reference: "Bhagavad Gita 6:30", reflection: "A Presença Suprema habita no centro do seu próprio coração." },
      medo: { text: "Destemor, pureza de coração, caridade e não-violência (Ahimsa) são os tesouros da natureza divina.", reference: "Bhagavad Gita 16:1-2", reflection: "Cultive a confiança serena no Dharma (a lei do bem)." },
      insonia: { text: "Como a chama de uma lâmpada que não oscila em um lugar sem vento, assim repousa a mente recolhida na paz interior.", reference: "Bhagavad Gita 6:19", reflection: "Visualize uma chama tranquila no coração antes de dormir." },
      familia: { text: "Que caminhamos juntos, que falemos em harmonia e que nossos corações estejam unidos em concórdia.", reference: "Rig Veda 10.191 (Hino da União)", reflection: "A concórdia familiar é fonte de bênção para todas as gerações." },
      sustento: { text: "Tens direito ao teu trabalho dedicado, mas realiza-o com a mente equilibrada, confiando os frutos à ordem divina.", reference: "Bhagavad Gita 2:47", reflection: "Trabalhe com serenidade e dedicação hoje." },
      perdao: { text: "Aquele que não guarda rancor de nenhum ser, que é amigável, compassivo e pronto a perdoar, esse devoto é muito querido por Mim.", reference: "Bhagavad Gita 12:13-14", reflection: "A compaixão mantém a mente limpa e luminosa." },
      paz: { text: "Om. Conduze-nos da ilusão à Verdade, da escuridão à Luz, da mortalidade à Imortalidade. Om Shanti, Shanti, Shanti!", reference: "Brihadaranyaka Upanishad 1.3.28", reflection: "Que a Paz tripla envolva seu corpo, sua mente e seu lar." }
    },
    chapters: [
      {
        title: "Capítulo 2 (Sankhya Yoga) - A Imortalidade da Alma e a Serenidade",
        verses: [
          "13. Assim como a alma corporificada passa neste corpo pela infância, juventude e velhice, da mesma maneira ela passa a outra morada; o sábio não se perturba com isso.",
          "20. Para a alma nunca há nascimento nem morte. Ela não passou a existir, não passa a existir e não passará a existir. Ela é não-nascida, eterna, sempre existente e primordial; ela não morre quando o corpo morre.",
          "47. Tens o direito de cumprir o teu dever prescrito, mas sem apego ansioso aos frutos; que o teu motivo não seja a inação.",
          "56. Aquele cuja mente não se abala em meio às tristezas, que não anseia avidamente pelos prazeres e está livre do apego, do medo e da ira, é chamado um sábio de mente firme."
        ]
      },
      {
        title: "Capítulo 6 (Dhyana Yoga) - O Caminho da Meditação e do Equilíbrio",
        verses: [
          "5. Deve-se elevar a si mesmo por meio da própria mente, e não degradar-se; pois a mente tranquila é a maior amiga do ser, e a mente desgovernada comporta-se como inimiga.",
          "17. Aquele que é equilibrado na alimentação, na recreação, nas ações, no sono e na vigília encontra o caminho que extingue o sofrimento.",
          "19. Como uma lâmpada num local abrigado do vento não tremeluz, essa é a imagem da mente serena recolhida na paz interior."
        ]
      },
      {
        title: "Capítulo 9 e 12 (Bhakti Yoga) - O Caminho do Amor Devocional",
        verses: [
          "26. Se alguém Me oferecer com amor e devoção uma folha, uma flor, um fruto ou água, Eu aceitarei essa oferta nascida de um coração puro.",
          "13. Aquele que não odeia nenhuma criatura, que é amigável e compassivo, livre do egoísmo, equânime na dor e no prazer, e paciente,",
          "14. Sempre contente, firme na meditação e com a mente e o coração dedicados a Mim: esse devoto é muito querido por Mim."
        ]
      }
    ]
  },
  {
    id: "universal",
    imagePath: "assets/traditions/universal.jpg",
    imageCaption: "O Amanhecer da Paz Interior e da Fraternidade Universal",
    name: "Busca Universal",
    tag: "Espiritualidade Livre, Paz Interior e Sabedoria Humana",
    symbol: "✨",
    greeting: "Que a paz, a serenidade e o amor iluminem o seu dia",
    canonicalWorkTitle: "Sabedoria Espiritual Universal Completa",
    dailyPassages: {
      ansiedade: { text: "Nem todas as tempestades vêm para perturbar a sua vida; muitas vêm apenas para limpar o caminho e renovar o ar.", reference: "Sabedoria Contemplativa Universal", reflection: "Respire lentamente: você já superou dias difíceis antes e superará este com calma." },
      luto: { text: "O amor verdadeiro não conhece despedida definitiva: ele permanece vivo nos gestos, nos valores e na ternura que herdamos.", reference: "Meditação sobre a Memória Afetiva", reflection: "Acolha a saudade como prova de um grande amor vivido." },
      desanimo: { text: "Mesmo a noite mais longa termina com a chegada silenciosa do amanhecer.", reference: "Provérbio Universal de Esperança", reflection: "Permita-se descansar hoje para recomeçar amanhã com suavidade." },
      saude: { text: "A serenidade da mente, o afeto da família e a esperança no coração são aliados preciosos na recuperação do corpo.", reference: "Sabedoria Integrativa do Cuidado", reflection: "Trate a si mesmo com a mesma paciência que teria com alguém muito querido." },
      gratidao: { text: "A gratidão transforma o que temos em suficiente e ilumina até os dias mais simples.", reference: "Filosofia da Gratidão", reflection: "Lembre-se hoje de três coisas boas presentes na sua vida." },
      solidao: { text: "Quando abrimos o coração à bondade e à escuta, descobrimos que fazemos parte de uma grande família humana.", reference: "Reflexão Humanista e Espiritual", reflection: "Envie hoje uma mensagem de carinho a um amigo ou familiar." },
      medo: { text: "A coragem não é a ausência de medo, mas a decisão serena de dar um passo de cada vez na direção do bem.", reference: "Sabedoria Prática para a Vida", reflection: "Concentre-se apenas no passo que está diante de você hoje." },
      insonia: { text: "Desligue as preocupações do mundo exterior: a noite é o santuário onde o corpo e a mente se restauram.", reference: "Meditação do Repouso Noturno", reflection: "Relaxe os ombros, a testa e as mãos, respirando profundamente." },
      familia: { text: "Em uma família, ter paz é muito mais valioso do que ter razão em todas as discussões.", reference: "Sabedoria da Maturidade", reflection: "Escolha o afeto e a escuta pacífica dentro do lar." },
      sustento: { text: "Mãos honestas e mente tranquila sempre encontram novos caminhos de trabalho e dignidade.", reference: "Sabedoria do Trabalho Digno", reflection: "Confie na sua experiência de vida e na sua capacidade." },
      perdao: { text: "Perdoar não é apagar a memória, mas retirar a dor da lembrança para que o coração volte a caminhar livre.", reference: "Sabedoria do Perdão", reflection: "Escolha a sua paz interior acima de qualquer mágoa antiga." },
      paz: { text: "A paz não é um lugar distante onde não há ruído: é a calma que cultivamos dentro do peito mesmo em meio ao movimento da vida.", reference: "Meditação da Paz Interior", reflection: "Reserve cinco minutos de silêncio tranquilo para você hoje." }
    },
    chapters: [
      {
        title: "Capítulo 1 - A Regra de Ouro nas Grandes Tradições da Humanidade",
        verses: [
          "1. Cristianismo: 'Tudo o que quereis que os homens vos façam, fazei-o vós a eles.'",
          "2. Judaísmo: 'O que é odioso para ti, não o faças ao teu próximo: esta é toda a Lei.'",
          "3. Islamismo: 'Nenhum de vós crê verdadeiramente até que deseje para o seu irmão o que deseja para si mesmo.'",
          "4. Budismo e Hinduísmo: 'Não firas os outros com aquilo que fere a ti mesmo; esta é a soma de todo o dever.'",
          "5. Sabedoria Africana e Indígena: 'Eu sou porque nós somos (Ubuntu): a vida de cada ser está entrelaçada à vida de todos.'"
        ]
      },
      {
        title: "Capítulo 2 - Meditações de Serenidade para a Maturidade (50+)",
        verses: [
          "1. A maturidade ensina a distinguir o que merece a nossa paz daquilo que é apenas barulho passageiro.",
          "2. Cuidar da saúde física, cultivar boas amizades e manter viva a leitura espiritual conservam a juventude da alma.",
          "3. Cada geração entrega à seguinte uma lâmpada acesa de experiência, paciência e amor familiar."
        ]
      },
      {
        title: "Capítulo 3 - Prece Universal da Paz (Atribuída a São Francisco de Assis)",
        verses: [
          "1. Senhor, fazei-me instrumento de vossa paz.",
          "2. Onde houver ódio, que eu leve o amor; onde houver ofensa, que eu leve o perdão; onde houver discórdia, que eu leve a união.",
          "3. Onde houver dúvida, que eu leve a fé; onde houver erro, que eu leve a verdade; onde houver desespero, que eu leve a esperança.",
          "4. Onde houver tristeza, que eu leve a alegria; onde houver trevas, que eu leve a luz."
        ]
      }
    ]
  }
];
