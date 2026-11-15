// Jornada "40 Dias de Propósitos" com mensagens diárias da Bíblia Sagrada
// Quatro propósitos de vida completos do Dia 1 ao Dia 40 para Fé Católica e Evangélica.

(function () {
  var WEEKLY_PHASES = [
    "Semana 1 (Dias 1 a 7): Raízes na Palavra de Deus",
    "Semana 2 (Dias 8 a 14): Serenidade e Fé Cotidiana",
    "Semana 3 (Dias 15 a 21): Coragem e Superação",
    "Semana 4 (Dias 22 a 28): Amor ao Próximo e Perdão",
    "Semana 5 (Dias 29 a 35): Frutos Maduros de Esperança",
    "Semana 6 (Dias 36 a 40): Consagração e Vida Renovada"
  ];

  function getPhaseForDay(d) {
    if (d <= 7) return WEEKLY_PHASES[0];
    if (d <= 14) return WEEKLY_PHASES[1];
    if (d <= 21) return WEEKLY_PHASES[2];
    if (d <= 28) return WEEKLY_PHASES[3];
    if (d <= 35) return WEEKLY_PHASES[4];
    return WEEKLY_PHASES[5];
  }

  function buildPurposeDays(baseName, actionFocus, prayerOpening, rawItems) {
    var list = [];
    for (var i = 0; i < rawItems.length; i++) {
      var d = i + 1;
      var item = rawItems[i];
      list.push({
        day: d,
        phase: getPhaseForDay(d),
        title: "Dia " + d + " de 40 - " + item[0],
        verseRef: item[1],
        verseText: item[2],
        message:
          item[3] +
          " Ao aplicar este versículo no seu propósito de " +
          baseName +
          ", dê apenas o passo sereno de hoje, confiando que Deus acompanha toda a caminhada.",
        action: item[4] || actionFocus,
        prayer:
          prayerOpening +
          " Neste Dia " +
          d +
          " do meu propósito de " +
          baseName +
          ", firma o meu coração na Tua Palavra de " +
          item[1] +
          ". " +
          item[5] +
          " Amém."
      });
    }
    return list;
  }

  var pazVidaItems = [
    ["O Começo com Propósito", "Jeremias 29:11", "Eu é que sei que pensamentos tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal.", "Nenhuma fase da vida acontece ao acaso diante dos olhos de Deus.", "Separe 5 minutos silenciosos hoje ao acordar para agradecer pelo dom da vida.", "Renova meu propósito com alegria."],
    ["Luz Sobre Cada Novo Dia", "Gênesis 1:3", "E disse Deus: Haja luz. E houve luz.", "Quando convidamos Deus para dentro da nossa manhã, até o quarto silencioso se ilumina.", "Abra as cortinas da casa cedo e faça uma prece agradecendo pela claridade.", "Ilumina meus pensamentos e planos."],
    ["A Alegria de Estar Vivo", "Salmo 118:24", "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.", "Cada amanhecer é um presente inédito entregue gratuitamente em suas mãos.", "Diga bom dia com carinho à primeira pessoa que encontrar ou ligar hoje.", "Ensina-me a celebrar o presente."],
    ["Águas Tranquilas para a Mente", "Salmo 23:2", "Guia-me mansamente a águas tranquilas.", "Deus não conduz seus filhos na correria desesperada, mas na calma que restaura.", "Evite notícias agitadas hoje por pelo menos duas horas seguidas.", "Conduz minha alma ao descanso."],
    ["Valor na Maturidade", "Salmo 92:14", "Na velhice ainda darão frutos; serão viçosos e florescentes.", "Sua história, seus conselhos e suas orações continuam produzindo frutos preciosos.", "Ligue ou mande um áudio carinhoso para um filho, neto ou amigo querido.", "Faz florescer novos frutos em mim."],
    ["Gratidão Antes de Dormir", "1 Tessalonicenses 5:18", "Em tudo dai graças, porque esta é a vontade de Deus.", "Agradecer pelas pequenas coisas muda o foco da falta para a abundância.", "Antes de dormir, enumere três motivos simples pelos quais agradece hoje.", "Recebe minha sincera ação de graças."],
    ["Descanso Sem Culpa", "Mateus 11:28", "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", "Fechar a primeira semana entregando os fardos traz alívio verdadeiro ao peito.", "Deite-se um pouco mais cedo ou descanse tranquilamente à tarde.", "Alivia todo cansaço do meu coração."],
    ["Coragem Para Recomecar", "Lamentações 3:22-23", "As misericórdias do Senhor se renovam a cada manhã.", "O que passou ontem não prende você ao desânimo neste novo ciclo.", "Recomece hoje uma boa leitura ou caminhada leve sem se cobrar demais.", "Agradeço pela Tua fidelidade diária."],
    ["Olhos para o Socorro", "Salmo 121:1-2", "O meu socorro vem do Senhor, que fez o céu e a terra.", "Olhar para cima lembra que o Criador sustenta sua casa e seus passos.", "Olhe para o céu pela janela hoje respirando fundo em oração.", "Envia Teu amparo em cada hora."],
    ["Paz no Meio da Casa", "João 14:27", "Deixo-vos a paz, a minha paz vos dou.", "A paz de Cristo não depende de tudo estar perfeito lá fora, mas de confiar Nele.", "Pronuncie uma bênção silenciosa de paz sobre cada cômodo do seu lar.", "Derrama Tua paz sobre este teto."],
    ["Fidelidade no Pouco", "Lucas 16:10", "Quem é fiel no mínimo, também é fiel no muito.", "Arrumar a mesa, regar uma planta ou preparar o café com amor honra a Deus.", "Cumpra hoje uma pequena tarefa de casa com tranquilidade e capricho.", "Abençoa as obras simples das minhas mãos."],
    ["A Palavra que Guia os Passos", "Salmo 119:105", "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.", "Deus mostra o passo de hoje com clareza suficiente para não tropeçarmos.", "Leia um pequeno capítulo na Bíblia Online aqui do site ainda hoje.", "Guia cada decisão minha neste dia."],
    ["Sossego e Confiança", "Isaías 30:15", "No sossego e na confiança estará a vossa força.", "Pressa e aflição drenam a energia; calma e confiança renovam o vigor.", "Beba um chá ou água sentado em silêncio por alguns minutos hoje.", "Fortalece meu espírito na serenidade."],
    ["A Esperança que Não Falha", "Romanos 15:13", "O Deus de esperança vos encha de todo o gozo e paz em crença.", "Completando duas semanas, a esperança se torna companhia estável.", "Compartilhe uma frase de encorajamento pelo WhatsApp com alguém solitário.", "Enche meu coração de esperança viva."],
    ["O Caminho da Justiça e Vida", "Provérbios 4:18", "A vereda dos justos é como a luz da aurora, que vai brilhando mais e mais.", "Quem caminha com Deus amadurece em luz com o passar dos anos.", "Reviva com gratidão uma boa lembrança da sua caminhada de fé.", "Continua brilhando em minha história."],
    ["Sem Temor Diante do Amanhã", "Mateus 6:34", "Não vos inquieteis com o dia de amanhã.", "Entregar o futuro às mãos de Deus devolve alegria ao presente.", "Quando surgir preocupação com amanhã, diga: 'Hoje está nas mãos de Deus'.", "Liberta minha mente de medos futuros."],
    ["Coração Puro e Leve", "Salmo 51:10", "Cria em mim, ó Deus, um coração puro.", "Limpar ressentimentos devolve leveza à respiração e ao sorriso.", "Deixe para trás hoje uma crítica ou aborrecimento pequeno da semana.", "Lava e renova todo o meu interior."],
    ["O Sustento dos Cabelos Brancos", "Isaías 46:4", "Até à vossa velhice eu serei o mesmo, e até às cãs eu vos carregarei.", "Em todas as idades, o colo de Deus continua firme e acolhedor.", "Agradeça hoje pela sabedoria e experiência acumuladas até aqui.", "Carrega-me com Tua ternura eterna."],
    ["Confiança Diante das Águas", "Isaías 43:2", "Quando passares pelas águas estarei contigo.", "Mesmo diante de imprevistos, nunca estamos abandonados na travessia.", "Faça uma oração silenciosa por quem enfrenta dias nublados hoje.", "Sê minha companhia em toda travessia."],
    ["Tempo Para Todas as Coisas", "Eclesiastes 3:1", "Tudo tem o seu tempo determinado debaixo do céu.", "A paciência respeita o tempo de Deus sem desespero.", "Observe sem pressa uma árvore, flor ou o entardecer de hoje.", "Ensina-me a esperar no Teu tempo."],
    ["Metade da Caminhada em Vitória", "Salmo 37:5", "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.", "Chegando ao dia 21, você já construiu um novo hábito diário com Deus.", "Comemore lendo em voz calma o Salmo 37 aqui na Bíblia Online.", "Recebe novamente a minha entrega total."],
    ["Amor em Ações Pequenas", "1 João 3:18", "Não amemos de palavra, nem de língua, mas por obra e em verdade.", "Um gesto simples de cuidado vale mais do que longos discursos.", "Faça um pequeno agrado ou ligue para ouvir um familiar com paciência.", "Faz do meu amor uma atitude concreta."],
    ["Palavra Branda que Acalma", "Provérbios 15:1", "A resposta branda desvia o furor.", "Seu tom calmo traz paz imediata para conversas tensas ao redor.", "Pause três segundos antes de responder se alguém falar com impaciência.", "Coloca mansidão em meus lábios."],
    ["Perdoar Para Viver Livre", "Colossenses 3:13", "Suportando-vos uns aos outros e perdoando-vos mutuamente.", "O perdão solta o coração de correntes antigas.", "Entregue em oração o nome de alguém que precisa da graça do perdão.", "Cura minha memória com o Teu perdão."],
    ["Caridade que Alegra a Alma", "Atos 20:35", "Mais bem-aventurado é dar do que receber.", "Ajudar outro coração afasta a tristeza e devolve propósito.", "Separe uma peça de roupa, alimento ou boa palavra para abençoar alguém.", "Abre meus olhos para servir com alegria."],
    ["União com Nossa Família", "Salmo 133:1", "Quão bom e quão suave é que os irmãos vivam em união.", "A concórdia familiar é um dos tesouros mais doces na Terra.", "Reze nominalmente hoje por cada irmão, filho, neto ou sobrinho.", "Derrama unidade em toda a família."],
    ["Hospitalidade e Mesa Abençoada", "Romanos 12:13", "Comunicai com os santos nas suas necessidades; segui a hospitalidade.", "Acolher bem quem entra em nossa casa reflete o coração de Jesus.", "Prepare sua refeição hoje agradecendo a Deus pelo pão na mesa.", "Abençoa todos que partilham do meu lar."],
    ["Perseverar no Bem", "Gálatas 6:9", "E não nos cansemos de fazer bem, porque a seu tempo ceifaremos.", "Fechando a quarta semana, toda boa semente gera colheita fiel.", "Mande uma mensagem bíblica de paz deste site para um grupo da família.", "Renova meu ânimo para continuar no bem."],
    ["A Força do Espírito Santo", "Atos 1:8", "Recebereis a virtude do Espírito Santo, que há de vir sobre vós.", "Não caminhamos só com força humana; o Consolador fortalece por dentro.", "Peça a companhia do Espírito Santo logo após o café da manhã.", "Enche meu dia com Teu Santo Espírito."],
    ["Firmeza na Rocha Eterna", "Mateus 7:24", "Aquele que ouve as minhas palavras e as pratica é semelhante ao homem prudente sobre a rocha.", "Ouvir e praticar a Bíblia todos os dias constrói uma casa inabalável.", "Escolha um ensinamento de Jesus desta semana e aplique hoje.", "Mantém meus pés firmes na Tua Rocha."],
    ["Alegria que Vem do Alto", "Neemias 8:10", "A alegria do Senhor é a vossa força.", "Mesmo dias comuns ganham vigor quando lembramos que Deus nos ama.", "Escute uma oração em voz calma no site com um sorriso tranquilo.", "Que a Tua alegria fortaleça meu corpo."],
    ["Mente Renovada em Verdade", "Filipenses 4:8", "Tudo o que é verdadeiro, justo, puro e amável, nisso pensai.", "Escolher bons pensamentos protege a saúde emocional todos os dias.", "Troque hoje qualquer reclamação por um elogio sincero a alguém.", "Guarda minha mente no que edifica."],
    ["O Senhor que Restaura", "Joel 2:25", "Restituir-vos-ei os anos que foram consumidos.", "Nunca é tarde para viver dias cheios de paz e sentido.", "Escreva ou pense em um sonho bom que deseja viver este ano com Deus.", "Restaura em mim a esperança de viver."],
    ["Cantando Salmos de Vitória", "Salmo 100:1-2", "Servi ao Senhor com alegria; apresentai-vos a ele com cântico.", "O louvor transforma o ambiente da sala e afasta o desânimo.", "Cante ou ouça um hino ou salmo de gratidão hoje pela tarde.", "Recebe meu louvor sincero e alegre."],
    ["Prontos Para Abençoar", "Números 6:24-26", "O Senhor te abençoe e te guarde; o Senhor te dê a paz.", "Concluindo a quinta semana, abençoamos quem está perto e longe.", "Diga 'Deus te abençoe' com atenção verdadeira hoje.", "Faz de mim canal de bênçãos."],
    ["O Bom Pastor Nunca Abandona", "João 10:11", "Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas.", "Cada ovelha é conhecida pelo nome, nunca esquecida.", "Releia o Salmo 23 em letras grandes na Bíblia Online.", "Obrigado por me conheceres pelo nome."],
    ["Guardados Sob Suas Asas", "Salmo 91:4", "Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás.", "Vivemos cercados pela proteção fiel do Altíssimo.", "Acenda uma vela virtual gratuita pela saúde e proteção do lar.", "Cobre minha família sob Tuas asas."],
    ["Combate Firme na Fé", "2 Timóteo 4:7", "Combati o bom combate, acabei a carreira, guardei a fé.", "A constância diária vale mais que grandes promessas passageiras.", "Olhe para trás desde o Dia 1 e veja quanta constância você venceu.", "Preserva firme a fé no meu coração."],
    ["Consagração do Futuro", "Provérbios 16:3", "Confia ao Senhor as tuas obras, e os teus pensamentos serão estabelecidos.", "Entregar os próximos meses a Deus sela este propósito com sabedoria.", "Ore pelos seus próximos passos até o final deste ano.", "Estabelece em paz os meus projetos."],
    ["Dia 40: Propósito Cumprido em Deus!", "Salmo 138:8", "O Senhor aperfeiçoará o que me toca a mim; a tua benignidade dura para sempre.", "Parabéns! Você concluiu 40 dias caminhando com Deus na Palavra todos os dias.", "Compartilhe esta conquista com sua família ou escolha um novo propósito.", "Obrigado por me conduzires do Dia 1 ao Dia 40!"]
  ];

  var familiaUniaoItems = [
    ["Minha Casa no Altar de Deus", "Josué 24:15", "Porém, eu e a minha casa serviremos ao Senhor.", "Tudo começa quando colocamos o nome de Deus no centro da sala.", "Pronuncie o nome dos seus familiares em oração neste primeiro dia.", "Santifica todo o meu lar desde hoje."],
    ["A Bênção dos Pais e Avós", "Isaías 54:13", "Todos os teus filhos serão ensinados do Senhor; e grande será a paz.", "Oração de pai, mãe e avós é semente eterna sobre os descendentes.", "Envie uma mensagem carinhosa a um filho ou neto hoje.", "Derrama paz abundante sobre meus filhos e netos."],
    ["O Elo Perfeito do Amor", "Colossenses 3:14", "Acima de tudo, revesti-vos do amor, que é o elo perfeito.", "O respeito e o afeto sustentam a família mesmo nas diferenças de opinião.", "Valorize hoje uma qualidade boa de alguém da família.", "Reveste nossa casa do Teu amor perfeito."],
    ["Mansidão nas Conversas", "Provérbios 15:1", "A resposta branda desvia o furor.", "Responder devagar evita feridas desnecessárias dentro de casa.", "Evite retrucar na hora se surgir irritação em alguma conversa.", "Coloca paciência e mansidão em nossa mesa."],
    ["Honra Entre Gerações", "Êxodo 20:12", "Honra a teu pai e a tua mãe, para que se prolonguem os teus dias.", "O respeito entre pais, filhos e netos gera harmonia e bênção.", "Agradeça em pensamento por seus pais e pelo que aprendeu com eles.", "Abençoa todas as gerações da nossa árvore."],
    ["Casa Firmada na Rocha", "Mateus 7:25", "Caiu a chuva, sopraram os ventos, e não caiu, porque estava edificada sobre a rocha.", "Lares baseados na Palavra resistem às tempestades financeiras e emocionais.", "Leia um versículo bíblico junto de alguém em casa ou por áudio.", "Firma os alicerces da minha família em Ti."],
    ["Mesa de Paz e Gratidão", "Salmo 128:3", "Os teus filhos como plantas de oliveira à roda da tua mesa.", "Fechando a Semana 1, agradeça pelos momentos partilhados à mesa.", "Ore abençoando o alimento antes do almoço ou jantar.", "Protege quem senta ao redor da nossa mesa."],
    ["Oração Pelo Trabalho e Sustento", "Salmo 128:2", "Do trabalho das tuas mãos comerás; feliz serás, e tudo te irá bem.", "Pedir luz pelo trabalho dos familiares fortalece toda a casa.", "Interceda hoje pelo emprego ou estudos de um parente.", "Abre portas dignas de trabalho aos meus."],
    ["Cuidado na Entrada e Saída", "Salmo 121:8", "O Senhor guardará a tua entrada e a tua saída, desde agora e para sempre.", "Entregar viagens, trânsito e rotinas a Deus traz tranquilidade.", "Abençoe quem sai pela porta de casa ou mande 'Vai com Deus'.", "Guarda cada trajeto da minha família."],
    ["Cura das Mágoas Antigas", "Efésios 4:32", "Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros.", "Guardar rancor divide a família; perdoar devolve liberdade.", "Solte hoje uma lembrança difícil de discussões antigas.", "Dá-nos um coração pronto para perdoar."],
    ["Escutar Com Carinho", "Tiago 1:19", "Todo homem seja pronto para ouvir, tardio para falar.", "Ouvir um filho ou neto sem interromper faz o outro se sentir amado.", "Ouça com calma o que alguém tem para contar hoje.", "Ensina-nos a ouvir com empatia."],
    ["A Companhia do Anjo da Guarda", "Salmo 91:11", "Aos seus anjos dará ordem a teu respeito para te guardarem.", "Deus envia anjos para zelar pelos que amamos dia e noite.", "Faça a Oração ao Anjo da Guarda pensando nos netos e filhos.", "Cerca nossa morada com Teus anjos."],
    ["Proteção no Casamento e União", "Eclesiastes 4:12", "O cordão de três dobras não se quebra tão depressa.", "Quando Deus é a terceira dobra, a união ganha resistência.", "Ore pela fidelidade e respeito entre os casais da família.", "Sustenta os casamentos de nossa família."],
    ["Harmonia Entre Irmãos", "Salmo 133:1", "Oh! quão bom e quão suave é que os irmãos vivam em união!", "Ao final de 14 dias, interceda pelo entendimento fraterno.", "Mande um bom dia fraterno a um irmão, irmã ou primo.", "Traz concórdia entre todos os irmãos."],
    ["Vencendo a Ansiedade Pela Família", "Filipenses 4:6", "Em tudo sejam conhecidas diante de Deus as vossas petições.", "Transforme a preocupação materna ou paterna em oração confiante.", "Sempre que pensar preocupado num filho, ore uma frase por ele.", "Troca minha preocupação por paz confiante."],
    ["Exemplo Silencioso de Fé", "Tito 2:7", "Em tudo te dá por exemplo de boas obras.", "Nossas atitudes tranquilas ensinam mais aos jovens do que sermões.", "Mostre hoje alegria simples na rotina para inspirar quem convive contigo.", "Que meu exemplo fale do Teu amor."],
    ["Amparo na Saúde Familiar", "Jeremias 17:14", "Sara-me, Senhor, e serei sarado.", "Quando alguém adoece em casa, toda a família ora junta em apoio.", "Acenda uma vela virtual por um parente que precisa de saúde.", "Visita com cura cada enfermo de casa."],
    ["Portas Abertas e Justiça", "Apocalipse 3:8", "Eis que diante de ti pus uma porta aberta, que ninguém pode fechar.", "Deus prepara caminhos justos e honestos para quem confia Nele.", "Ore por uma questão pendente ou papelada da família.", "Abre caminhos retos diante de nós."],
    ["Acolhendo Quem Está Longe", "Lucas 15:20", "Vendo-o ainda longe, seu pai moveu-se de íntima compaixão.", "A oração constante alcança filhos ou parentes que moram distante.", "Ligue ou mande um 'Estou com saudade e orando por você'.", "Alcança quem está distante com Teu abraço."],
    ["Consolo Para Quem Sente Falta", "João 14:1", "Não se turbe o vosso coração; credes em Deus, crede também em mim.", "A fé consola toda família que lembra entes queridos na eternidade.", "Reze agradecendo pelo legado de fé dos antepassados.", "Consola nossos corações na esperança."],
    ["Metade dos 40 Dias Pela Casa", "Atos 16:31", "Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.", "Dia 21: um marco de bênção declarada sobre toda a parentela.", "Marque o Dia 21 e ouça a Oração da Família aqui do site.", "Salva, guarda e abençoa toda a minha casa."],
    ["Paciência nos Dias Difíceis", "Romanos 12:12", "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.", "Cada crise familiar passa mais suave quando há união espiritual.", "Mantenha a serenidade se surgir algum imprevisto hoje.", "Sustenta nossa paciência nos desafios."],
    ["Sabedoria Para Conselhos", "Provérbios 3:5", "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.", "Pedir luz antes de aconselhar os jovens evita mal-entendidos.", "Ore pedindo discernimento antes de opinar sobre escolhas dos filhos.", "Dá-me sabedoria para aconselhar com amor."],
    ["Alegria das Crianças e Netos", "Mateus 19:14", "Deixai os pequeninos e não os estorveis de vir a mim.", "Os pequenos merecem oração constante por proteção e bom caráter.", "Conte uma pequena história bíblica ou dê um carinho especial hoje.", "Guarda a inocência e o futuro dos netos."],
    ["Provisão Diária Sem Desperdício", "Mateus 6:11", "O pão nosso de cada dia nos dá hoje.", "Agradecer pelo alimento diário traz contentamento à casa.", "Agradeça por tudo o que há na despensa e partilhe se puder.", "Nunca falte o pão digno em nossa mesa."],
    ["Paz Ao Redor do Lar", "Salmo 4:8", "Em paz também me deitarei e dormirei.", "Noites serenas começam com palavras de paz antes de apagar a luz.", "Deseje 'Deus abençoe sua noite' aos de casa.", "Derrama descanso tranquilo no lar inteiro."],
    ["Amor Que Cobre Multidão de Falhas", "1 Pedro 4:8", "Tende ardente amor uns para com os outros, porque o amor cobrirá a multidão de pecados.", "Saber relevar defeitos pequenos preserva grandes laços afetivos.", "Releve hoje um pequeno esquecimento ou atraso de alguém próximo.", "Faz crescer em nós o amor paciente."],
    ["Fechando a Quarta Semana Unido", "Colossenses 3:15", "E a paz de Deus domine em vossos corações.", "A paz espiritual governa a atmosfera da casa inteira.", "Ouça uma passagem em áudio acompanhado ou compartilhe no grupo familiar.", "Governa nossa família com Tua paz."],
    ["Sabedoria Nas Finanças do Lar", "Provérbios 21:20", "Tesouro desejável e azeite há na casa do sábio.", "Equilíbrio, gratidão e honestidade trazem sossego ao orçamento.", "Agradeça por cada conta vencida e ore pelas decisões econômicas.", "Guia com equilíbrio nossas finanças."],
    ["Livramento de Ciladas e Perigos", "Salmo 91:10", "Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.", "A casa consagrada descansa sob proteção invisível todos os dias.", "Leia em voz calma o Salmo 91 hoje pela manhã.", "Protege portas, janelas e caminhos do lar."],
    ["Cuidadores e Idosos Honrados", "Levítico 19:32", "Diante das cãs te levantarás, e honrarás a face do ancião.", "O cuidado mútuo honra a história e fortalece toda a família.", "Agradeça a Deus pelas pessoas que cuidam e apoiam você.", "Honra e fortalece cada pessoa da casa."],
    ["União Na Oração Silenciosa", "Mateus 18:20", "Onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.", "Mesmo à distância pelo telefone, orar juntos une os corações.", "Combine uma prece simples por telefone ou mensagem hoje.", "Manifesta Tua presença entre nós."],
    ["Liberdade Contra Inveja e Discórdia", "Tiago 3:17", "A sabedoria que do alto vem é primeiramente pura, depois pacífica, moderada.", "Palavra pacificadora apaga fofocas e ciúmes antes que cresçam.", "Recuse comentários que dividam parentes ou vizinhos hoje.", "Dá-nos sabedoria pacífica e limpa."],
    ["Sementes Que Permanecem", "Salmo 112:2", "A sua descendência será poderosa na terra; a geração dos retos será abençoada.", "A fé vivida hoje deixa herança abençoada para quem ainda virá.", "Deixe escrita ou gravada em áudio uma bênção simples aos seus.", "Que a fé permaneça em nossa geração."],
    ["Gratidão Pelos Amigos Como Irmãos", "Provérbios 17:17", "Em todo o tempo ama o amigo, e na angústia nasce o irmão.", "Bons amigos e vizinhos são família escolhida por Deus.", "Mande uma saudação grata a um amigo fiel de longa data.", "Abençoa os amigos fiéis do nosso caminho."],
    ["A Família Como Porto Seguro", "Hebreus 10:24", "Consideremo-nos uns aos outros, para nos estimularmos ao amor e às boas obras.", "Nosso lar pode ser o lugar onde todos descansam acolhidos.", "Receba quem falar com você hoje com sorriso e escuta sincera.", "Faz do meu lar um verdadeiro abrigo."],
    ["Proteção Dos Anjos Nas Estradas", "Êxodo 23:20", "Eis que eu envio um anjo diante de ti, para que te guarde neste caminho.", "Quem viaja para trabalho ou visita segue guardado pelo Altíssimo.", "Ore por todos os que pegam estradas ou conduções hoje.", "Conduz cada passo até a volta segura."],
    ["Amor Que Nunca Acaba", "1 Coríntios 13:7-8", "Tudo sofre, tudo crê, tudo espera, tudo suporta. O amor nunca falha.", "O amor sustentado em Cristo vence estações inteiras da vida.", "Declare seu carinho sem vergonha a alguém querido hoje.", "Enche nossa casa com o amor eterno."],
    ["Aliança Renovada Antes do Fim", "Josué 24:15", "Escolhei hoje a quem sirvais... porém eu e a minha casa serviremos ao Senhor.", "Véspera do Dia 40: celebrando o cuidado contínuo de Deus sobre o lar.", "Prepare sua prece de agradecimento familiar para amanhã.", "Obrigado por guardar minha família até aqui."],
    ["Dia 40: Lar Abençoado e Unida em Deus!", "Salmo 103:17", "A misericórdia do Senhor é desde a eternidade sobre os que o temem, e a sua justiça sobre os filhos dos filhos.", "Parabéns! Você consagrou 40 dias pela paz e união de toda a sua família.", "Compartilhe uma bênção hoje no WhatsApp com seus familiares.", "Amém! Obrigado por cuidar de nós de geração em geração!"]
  ];

  var curaEsperancaItems = [
    ["O Médico dos Médicos", "Jeremias 17:14", "Sara-me, Senhor, e serei sarado; salva-me, e serei salvo.", "Em toda consulta ou tratamento, Cristo caminha ao seu lado.", "Entregue seus remédios e consultas desta semana nas mãos de Jesus.", "Toca minha saúde com Tua paz restauradora."],
    ["Descanso Para O Corpo", "Salmo 4:8", "Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.", "O descanso calmo coopera diretamente na recuperação física.", "Diminua telas e ruídos uma hora antes de se deitar hoje.", "Guarda meu sono nesta noite tranquila."],
    ["Força Na Fraqueza", "2 Coríntios 12:9", "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.", "Mesmo quando o corpo está cansado, o espírito recebe vigor do Alto.", "Respire fundo três vezes sem pressa sempre que sentir fadiga.", "Sustenta meu corpo com a Tua graça."],
    ["Deus Que Carrega No Colo", "Isaías 46:4", "Até à vossa velhice eu serei o mesmo, e até às cãs eu vos carregarei.", "Você não precisa carregar dores ou receios sozinho nas costas.", "Apoie as costas confortavelmente e faça uma prece confiante.", "Carrega-me com carinho em cada passo."],
    ["Sabedoria Aos Médicos", "Tiago 1:5", "Se algum de vós tem falta de sabedoria, peça-a a Deus.", "Orar pelos médicos e cuidadores atrai lucidez para cada decisão.", "Ore pelos profissionais de saúde que acompanham você ou sua família.", "Ilumina médicos, enfermeiros e cuidadores."],
    ["Alívio Das Preocupações", "1 Pedro 5:7", "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", "Preocupação excessiva aperta o peito; entrega sincera traz alívio.", "Escreva ou fale em oração o nome do que tira seu sossego.", "Recebe toda ansiedade e dá-me alívio."],
    ["O Coração Alegre Cura", "Provérbios 17:22", "O coração alegre serve de bom remédio.", "Fechando a primeira semana, cultive pensamentos leves e esperança.", "Ouça uma canção suave ou lembre um momento alegre hoje.", "Derrama alegria serena no meu peito."],
    ["Renovado Como Águia", "Isaías 40:31", "Os que esperam no Senhor renovarão as suas forças.", "Um dia de cada vez, a vitalidade volta sem pressa.", "Tome bastante água hoje cuidando bem do corpo.", "Renova o meu vigor físico e mental."],
    ["A Saúde Que Vem de Deus", "Salmo 103:2-3", "Bendize, ó minha alma, ao Senhor, que sara todas as tuas enfermidades.", "Agradecer pelos pequenos avanços anima todo o tratamento.", "Agradeça hoje por cada função do corpo que trabalha bem.", "Obrigado pelos cuidados e cura em mim."],
    ["Jesus Acalma a Tempestade", "Marcos 4:39", "Acalma-te, emudece! E o vento se aquietou, e houve grande bonança.", "Cristo tem poder para acalmar dores repentinas e aflições noturnas.", "Nos momentos de aperto, diga calmamente: 'Jesus acalma meu coração'.", "Traz grande bonança dentro de mim."],
    ["Cuidado Com As Emoções", "Salmo 147:3", "Sara os quebrantados de coração, e lhes ata as suas feridas.", "Cicatrizar tristezas antigas ajuda até na saúde do corpo físico.", "Desabafe em oração sincera tudo o que apertava o coração.", "Cicatrizas minhas feridas com ternura."],
    ["Companhia Nas Madrugadas", "Salmo 63:6", "Quando me lembrar de ti na minha cama, e meditar em ti nas vigílias da noite.", "Se acordar de madrugada, transforme o silêncio em conversa calma com Deus.", "Em vez de olhar o relógio, reze um Pai-Nosso devagar.", "Acompanha minhas horas de silêncio."],
    ["Não Temas Os Exames", "Isaías 41:10", "Não temas, porque eu sou contigo; eu te fortaleço, e te ajudo.", "Esperar resultados sem pânico protege o coração e a pressão.", "Entregue o próximo exame médico antes mesmo de fazê-lo.", "Afasta o medo e firma a minha confiança."],
    ["Paz Que Guarda O Peito", "Filipenses 4:7", "A paz de Deus, que excede todo o entendimento, guardará o vosso coração.", "Completando duas semanas, a serenidade já faz diferença nos seus dias.", "Separe 10 minutos tranquilos para ouvir a Palavra em áudio.", "Guarda minha mente e coração em Cristo."],
    ["Pão e Água Que Sustentam", "Êxodo 23:25", "Ele abençoará o teu pão e a tua água; e tirará do meio de ti as enfermidades.", "Cuidar bem da alimentação e tomar a medicação certa honra a vida.", "Faça sua refeição devagar agradecendo pelo alimento.", "Abençoa meu alimento e meu tratamento."],
    ["O Bom Pastor Guia Na Recuperação", "Salmo 23:3", "Refrigera a minha alma; guia-me pelas veredas da justiça.", "Ninguém passa pelo vale sem o amparo seguro do Pastor.", "Ouça a oração do Salmo 23 na seção de Orações Fortes.", "Refrigera todo o meu ser nesta manhã."],
    ["Alívio Para Quem Cuida", "Gálatas 6:2", "Levai as cargas uns dos outros, e assim cumprireis a lei de Cristo.", "Quem cuida de um familiar doente também merece oração e descanso.", "Agradeça ou reze hoje por alguém que cuida de enfermos.", "Fortalece todos os cuidadores com saúde."],
    ["Luz Nas Horas Nubladas", "Salmo 27:1", "O Senhor é a minha luz e a minha salvação; de quem terei temor?", "Quando o dia parecer cinzento, a luz espiritual aquece por dentro.", "Sente-se perto de uma janela com luz natural hoje.", "Ilumina meu dia com Tua presença."],
    ["A Esperança Que Renova", "Romanos 8:28", "Todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.", "Mesmo dias de espera colaboram para amadurecer nossa paciência.", "Repita com serenidade: 'Tudo coopera para o bem dos que amam a Deus'.", "Confirmo minha confiança no Teu cuidado."],
    ["Força Para Caminhar Hoje", "Deuteronômio 33:25", "Assim como os teus dias, será a tua força.", "Deus dá força exatamente na medida de hoje, sem exigir demais.", "Respeite seus limites físicos hoje sem se culpar.", "Dá-me a medida exata de força hoje."],
    ["Dia 21: Vitória Sobre o Desânimo", "Salmo 30:5", "O choro pode durar uma noite, mas a alegria vem pela manhã.", "Três semanas firmes: o sol volta a nascer sobre toda provação.", "Celebre o Dia 21 lendo ou ouvindo o Salmo 30 completo.", "Transforma meu cansaço em nova esperança."],
    ["Perdão Que Traz Leveza Física", "Salmo 32:5", "Confessei-te o meu pecado... e tu perdoaste a maldade do meu pecado.", "Aliviar a consciência pesa menos nos ombros e acalma a mente.", "Entregue qualquer culpa antiga ao abraço perdoador de Jesus.", "Devolve leveza à minha alma."],
    ["Abraço Nos Dias de Solidão", "Salmo 34:18", "Perto está o Senhor dos que têm o coração quebrantado.", "Nos quartos silenciosos, Deus permanece sentado ao lado.", "Ligue para conversar cinco minutos com alguém querido hoje.", "Obrigado por nunca me deixares só."],
    ["O Poder da Oração Simples", "Tiago 5:16", "A oração feita por um justo pode muito em seus efeitos.", "Não precisa palavras difíceis; uma súplica sincera move o céu.", "Faça uma oração curta falando com Deus como amigo.", "Ouve esta prece simples do meu coração."],
    ["Coragem Na Reabilitação", "Josué 1:9", "Esforça-te, e tem bom ânimo; não pasmes, nem te espantes.", "Fazer os exercícios e cuidados diários é ato de fé na recuperação.", "Pratique com cuidado aquilo que seu médico recomendou.", "Enche-me de coragem nos pequenos passos."],
    ["Mansidão Na Dor", "Salmo 37:7", "Descansa no Senhor, e espera nele.", "Lutar contra a ansiedade cansa; descansar em Deus restaura.", "Deixe cair qualquer agitação e apoie as mãos relaxadas.", "Descanso em Ti aguardando Tua obra."],
    ["A Presença que Tudo Sustenta", "Salmo 73:26", "A minha carne e o meu coração desfalecem; mas Deus é a fortaleza do meu coração.", "Onde nossa energia acaba, começa a sustentação fiel do Criador.", "Respire serenamente ouvindo o áudio de hoje novamente.", "Sê sempre a fortaleza do meu coração."],
    ["Quatro Semanas De Confiança", "Jeremias 30:17", "Eu te restaurarei a saúde, e sararei as tuas chagas, diz o Senhor.", "Dia 28: agradecendo pela caminhada constante até aqui.", "Acenda uma vela virtual gratuita em gratidão e súplica pela cura.", "Restaura minha saúde em nome de Jesus."],
    ["A Vida Em Abundância", "João 10:10", "Eu vim para que tenham vida, e a tenham com abundância.", "Cristo deseja saúde de espírito, calma e sentido em todas as idades.", "Anote ou pense no que hoje lhe dá paz e bem-estar.", "Manifesta em mim Tua vida abundante."],
    ["O Espírito Consolador", "João 14:16", "Ele vos dará outro Consolador, para que fique convosco para sempre.", "Temos companhia permanente em dias bons e dias delicados.", "Peça ao Espírito Santo conforto para hoje.", "Consolador fiel, permanece comigo."],
    ["Alegria Nas Pequenas Melhoras", "Salmo 116:1", "Amo ao Senhor, porque ele ouviu a minha voz e a minha súplica.", "Valorizar todo alívio alcançado fortalece a gratidão.", "Agradeça por uma dor aliviada ou noite melhor vivida recentemente.", "Amo-Te porque ouves o meu clamor."],
    ["Fé Como Grão de Mostarda", "Mateus 17:20", "Se tiverdes fé como um grão de mostarda... nada vos será impossível.", "Mesmo uma pequena semente de fé basta quando colocada em Deus.", "Reafirme com suavidade sua confiança no cuidado divino.", "Aumenta minha pequena fé cada dia mais."],
    ["A Mão Estendida de Cristo", "Mateus 14:31", "Logo Jesus, estendendo a mão, segurou-o.", "Quando sentirmos fraqueza, a mão estendida do Mestre ampara.", "Segure mentalmente na mão de Cristo ao se levantar hoje.", "Segura minha mão e firma meu passo."],
    ["Oração Pelo Pão e Remédio", "Mateus 6:11", "O pão nosso de cada dia nos dá hoje.", "Nunca falte o necessário para alimentação, cuidado e tratamento.", "Agradeça pelos recursos médicos e remédios disponíveis hoje.", "Supre cada necessidade minha e dos meus."],
    ["Cinco Semanas Vencidas", "Salmo 126:3", "Grandes coisas fez o Senhor por nós, pelas quais estamos alegres.", "Celebramos 35 dias escolhendo a esperança acima do medo.", "Leia o Salmo 126 inteiro em letras grandes.", "Alegro-me pelas grandes coisas que fazes."],
    ["Coração Grato Pela Vida", "Salmo 139:14", "Eu te louvarei, porque de um modo assombroso e tão maravilhoso fui formado.", "Nosso corpo é obra maravilhosa digna de cuidado e gratidão.", "Cuide hoje de você com carinho, higiene e calma.", "Obrigado pela maravilha da minha vida."],
    ["Esperança Que Não Engana", "Romanos 5:5", "E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações.", "A certeza do amor de Deus afugenta a desesperança.", "Compartilhe hoje uma palavra de ânimo com outro amigo enfermo.", "Derrama Teu amor consolador em mim."],
    ["Luz Até o Amanhecer", "Salmo 139:12", "As trevas e a luz são para ti a mesma coisa.", "Deus enxerga claro quando nós ainda estamos esperando a melhora.", "Confie que Deus já prepara dias mais leves adiante.", "Ilumina toda sombra neste tratamento."],
    ["Agradecendo Antes do Amanhã", "Salmo 118:1", "Louvai ao Senhor, porque ele é bom, porque a sua benignidade dura para sempre.", "Véspera do Dia 40: louvar por antecipação acalma a alma.", "Faça hoje uma oração inteira somente de agradecimento.", "Louvo-Te pela Tua eterna bondade."],
    ["Dia 40: Renovado Na Esperança!", "Apocalipse 21:4", "Deus limpará de seus olhos toda a lágrima... e não haverá mais dor.", "Parabéns por concluir 40 dias de propósito na saúde e na esperança!", "Continue lendo diariamente o Café Espiritual para manter essa força.", "Obrigado, Senhor, pela minha saúde e paz! Amém!"]
  ];

  var sabedoriaFeItems = [
    ["O Princípio da Sabedoria", "Provérbios 9:10", "O temor do Senhor é o princípio da sabedoria.", "Começamos buscando luz do Alto antes de qualquer grande decisão.", "Peça clareza a Deus antes de responder algo importante hoje.", "Concede-me sabedoria que vem do Teu altar."],
    ["Olhos Abertos Pelo Alto", "Salmo 119:18", "Desvenda os meus olhos, para que veja as maravilhas da tua lei.", "Quem pede luz enxerga saídas que antes estavam escondidas.", "Leia 5 versículos de Provérbios aqui na Bíblia Online.", "Abre meus olhos para o Teu caminho."],
    ["Passos Dirigidos Por Deus", "Provérbios 3:6", "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.", "Quando incluímos Deus nos planos, desvios perigosos são evitados.", "Apresente em oração um compromisso ou papelada desta semana.", "Endireita toda vereda diante de mim."],
    ["Coragem Como Daniel", "Daniel 6:10", "Três vezes no dia se punha de joelhos e orava, como antes costumava fazer.", "A fidelidade diária nos momentos calmos sustenta nas horas difíceis.", "Mantenha seu horário sagrado de oração de manhã e à noite.", "Dá-me constância fiel como a de Daniel."],
    ["A Armadura Espiritual", "Efésios 6:11", "Revesti-vos de toda a armadura de Deus.", "Fé, verdade e justiça protegem contra ciladas e desânimos.", "Reze hoje a Oração da Armadura de Deus ou de São Miguel.", "Reveste minha casa com Tua armadura."],
    ["Sem Pressa Na Decisão", "Provérbios 19:2", "Quem se apressa com os seus pés, peca.", "Esperar a água assentar evita escolhas precipitadas.", "Adie hoje qualquer compra ou resposta por impulso.", "Ensina-me a discernir sem pressa."],
    ["Firme Na Promessa", "Josué 1:8", "Não se aparte da tua boca o livro desta lei; antes medita nele dia e noite.", "Semana 1 concluída: a Palavra se tornou conselheira diária.", "Guarde uma frase bíblica preferida desta semana na memória.", "Firma minha fé na meditação diária."],
    ["Pedi e Recebereis", "Mateus 7:7", "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.", "Deus nunca se cansa de ouvir quem bate com fé e perseverança.", "Faça com humildade o pedido mais necessário deste mês.", "Bato à Tua porta confiando no Teu amor."],
    ["Ouvir Bons Conselhos", "Provérbios 11:14", "Onde não há conselho, o povo cai; mas na multidão de conselheiros há segurança.", "Trocar ideias com pessoas íntegras e tementes a Deus protege.", "Converse hoje com alguém sábio e honesto da sua confiança.", "Cerca-me de conselhos retos e sábios."],
    ["Sabedoria Contra Medos", "2 Timóteo 1:7", "Deus não nos deu o espírito de temor, mas de fortaleza, de amor e de moderação.", "Equilíbrio e coragem substituem sustos e boatos.", "Não repasse notícias assustadoras nem correntes falsas hoje.", "Dá-me moderação, amor e fortaleza."],
    ["Fidelidade Que Gera Paz", "Salmo 37:3", "Confia no Senhor e faze o bem; habitarás na terra e serás alimentado.", "Fazer o bem silenciosamente traz segurança ao coração.", "Pratique hoje uma pequena honestidade ou gentileza discreta.", "Sustenta meus passos na prática do bem."],
    ["Moisés Diante da Luz", "Êxodo 33:14", "A minha presença irá contigo, e eu te darei descanso.", "Antes de dar qualquer passo novo, certifique-se da presença de Deus.", "Peça direção para as decisões familiares deste mês.", "Que a Tua presença caminhe sempre comigo."],
    ["Guardando o Coração", "Provérbios 4:23", "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as saídas da vida.", "Não deixe entrar amargura ou orgulho no pensamento.", "Observe hoje o que tem alimentado sua mente na TV ou celular.", "Guarda as intenções puras do meu coração."],
    ["Duas Semanas Na Verdade", "João 8:32", "Conhecereis a verdade, e a verdade vos libertará.", "A verdade do Evangelho traz clareza onde havia dúvida.", "Leia hoje um trecho do Evangelho de São João.", "Ilumina meu entendimento com Tua verdade."],
    ["Justiça Com Mansidão", "Miqueias 6:8", "O que o Senhor pede de ti senão que pratiques a justiça, ames a benignidade e andes humildemente?", "Retidão e ternura caminham juntas na vida cristã.", "Seja justo e gentil em toda negociação ou atendimento hoje.", "Ensina-me a unir justiça e humildade."],
    ["Discernindo Pelo Fruto", "Mateus 7:16", "Por seus frutos os conhecereis.", "Olhar os frutos de paz ou confusão ajuda a decidir caminhos.", "Avalie com calma o que traz paz verdadeira à sua rotina.", "Dá-me clareza para escolher o que edifica."],
    ["Força Nos Montes", "Salmo 18:2", "O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador.", "Nossa base segura não são riquezas passageiras, e sim Deus.", "Faça uma prece de agradecimento pela proteção constante do Senhor.", "Tu és a minha rocha e meu lugar forte."],
    ["Paciência Que Vence Provas", "Tiago 1:3-4", "A prova da vossa fé obra a paciência.", "Dificuldades enfrentadas com Deus constroem maturidade sólida.", "Lembre um desafio antigo que parecia enorme e hoje você venceu.", "Aperfeiçoa em mim a paciência vitoriosa."],
    ["Humildade Que Honra", "Provérbios 15:33", "Diante da honra vai a humildade.", "Reconhecer limites com simplicidade abre portas no tempo certo.", "Peça desculpas rapidamente se perceber algum pequeno erro hoje.", "Conserva meu coração simples e humilde."],
    ["Sabedoria Nas Finanças", "Lucas 12:15", "A vida de qualquer um não consiste na abundância do que possui.", "Valorizar pessoas acima de coisas traz paz no orçamento.", "Organize algo simples nos papéis ou contas com calma hoje.", "Dá-me contentamento e sabedoria com o dinheiro."],
    ["Dia 21: Vitória Sobre Dúvidas", "Tiago 1:6", "Peça-a, porém, com fé, em nada duvidando.", "Completando 21 dias, sua confiança na orientação divina cresceu.", "Ouça a trilha de São Miguel ou os Salmos da Vitória para celebrar.", "Afasta a dúvida e firma minha fé em Ti."],
    ["Coragem Para Dizer Sim e Não", "Mateus 5:37", "Seja, porém, o vosso falar: Sim, sim; Não, não.", "Clareza respeitosa evita confusões e sobrecargas.", "Diga 'não' com educação se algo ultrapassar sua saúde hoje.", "Dá-me firmeza serena ao falar."],
    ["A Sabedoria Que Pacifica", "Tiago 3:18", "O fruto da justiça semeia-se na paz, para os que exercitam a paz.", "Ser pacificador em vez de alimentar brigas multiplica bênçãos.", "Leve concórdia se houver qualquer comentário agitado à sua volta.", "Faz de mim um semeador de paz."],
    ["Tempo De Colher Em Alegria", "Salmo 126:5", "Os que semeiam em lágrimas segarão com alegria.", "Cada oração feita nos dias difíceis já germina no céu.", "Continue semeando boas palavras mesmo sem ver resultado imediato.", "Confio na colheita de alegria no Teu tempo."],
    ["O Bom Combate Diário", "Efésios 6:16", "Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos.", "Pensamentos de desânimo somem quando levantamos o escudo da fé.", "Responda ao desânimo lendo um versículo forte hoje.", "Ergo o escudo da fé sobre meu lar."],
    ["Obediência Que Traz Bênção", "Deuteronômio 28:2", "E todas estas bênçãos virão sobre ti e te alcançarão, quando ouvires a voz do Senhor.", "Caminhar nos caminhos retos simplifica muito a vida.", "Escolha hoje agir conforme sua consciência tranquila em Jesus.", "Guia meus passos nos caminhos da bênção."],
    ["O Olho Bom Cheio De Luz", "Mateus 6:22", "Se os teus olhos forem bons, todo o teu corpo terá luz.", "Enxergar gratidão em vez de defeito ilumina o dia inteiro.", "Procure hoje elogiar honestamente alguém que trabalha ou convive contigo.", "Enche meu olhar de luz e bondade."],
    ["Quatro Semanas De Luz", "Provérbios 4:18", "A vereda dos justos é como a luz da aurora.", "Dia 28: agradecendo pela lucidez e clareza crescente.", "Reze o Salmo 27 inteiro nesta etapa final.", "Obrigado por clarear todo o meu caminho."],
    ["A Verdadeira Vitória", "1 João 5:4", "E esta é a vitória que vence o mundo, a nossa fé.", "Vencer não significa ausência de lutas, mas permanecer fiel a Deus.", "Mantenha seu coração sereno diante de qualquer notícia hoje.", "Sustenta esta fé que vence com paz."],
    ["Lâmpada Acesa Na Vigília", "Mateus 25:4", "As prudentes levaram azeite em suas vasilhas com as suas lâmpadas.", "Manter a chama da oração acesa prepara para todo imprevisto.", "Dedique hoje cinco minutos extras de oração silenciosa.", "Mantém acesa a chama da minha fé."],
    ["Mais Que Vencedores", "Romanos 8:37", "Em todas estas coisas somos mais do que vencedores, por aquele que nos amou.", "O amor de Cristo é a garantia invencível da nossa caminhada.", "Ouça uma oração forte aqui do site com atenção plena.", "Creio no Teu amor vencedor sobre mim."],
    ["Sabedoria Dos Anciãos", "Jó 12:12", "Com os idosos está a sabedoria, e na abundância dos dias o entendimento.", "Anos vividos junto de Deus são escola preciosa aos mais novos.", "Partilhe hoje um bom conselho de vida com alguém mais jovem.", "Usa minha experiência para edificar vidas."],
    ["Fidelidade Nas Pequenas Escolhas", "Lucas 16:10", "Quem é fiel no mínimo, também é fiel no muito.", "Cada dia vivido honestamente fortalece seu caráter cristão.", "Aja hoje com integridade mesmo quando ninguém estiver olhando.", "Honro a Ti em cada pequena escolha."],
    ["Livramento No Meio Da Noite", "Salmo 91:5", "Não temerás espanto noturno, nem seta que voe de dia.", "A mente sábia descansa tranquila sob a guarda de Deus.", "Faça uma prece curta pela segurança da casa antes de dormir.", "Afasta todo espanto e guarda o meu descanso."],
    ["Semana 5 Concluída Em Firmeza", "1 Coríntios 16:13", "Vigiai, estai firmes na fé; portai-vos varonilmente, e fortalecei-vos.", "Dia 35: cinco semanas sólidas nos ensinamentos da Escritura.", "Leia um capítulo inteiro do livro de Provérbios ou Tiago hoje.", "Fortalece meu espírito na fé firme."],
    ["Sábia Construção Familiar", "Provérbios 24:3", "Com a sabedoria se edifica a casa, e com o entendimento ela se estabelece.", "Decisões equilibradas edificam não só você, mas toda a família.", "Abençoe as escolhas importantes de filhos e netos.", "Edifica toda a nossa casa em sabedoria."],
    ["Coroa Da Prudência", "Provérbios 14:18", "Os prudentes se coroarão de conhecimento.", "Conhecer a Bíblia traz segurança para não cair em enganos.", "Responda uma ou duas perguntas na seção Perguntas sobre a Bíblia.", "Coroa meus dias com entendimento reto."],
    ["Prontidão Para Servir", "Isaías 6:8", "Eis-me aqui, envia-me a mim.", "A sabedoria cristã existe para ser luz onde Deus nos colocou.", "Pergunte em oração hoje: 'Como posso fazer o bem a alguém hoje?'", "Usa minha vida com sabedoria hoje."],
    ["Última Vigília Em Ação de Graças", "Colossenses 4:2", "Perseverai em oração, velando nela com ação de graças.", "Dia 39: vigilância grata celebrando o quanto Deus ensinou até aqui.", "Agradeça por cada decisão acertada nestes últimos 39 dias.", "Obrigado por iluminar todos os meus passos."],
    ["Dia 40: Propósito De Fé Concluído!", "Filipenses 1:6", "Aquele que em vós começou a boa obra a aperfeiçoará até ao dia de Jesus Cristo.", "Parabéns por completar 40 dias de sabedoria e vitória na Palavra!", "Compartilhe esta conquista no WhatsApp e continue seu propósito diário.", "Glória a Deus! Continua aperfeiçoando Tua obra em mim!"]
  ];

  window.FORTY_DAY_PURPOSES = [
    {
      id: "proposito-paz-vida-40",
      title: "40 Dias de Propósito: Vida Plena, Gratidão e Paz em Deus",
      shortTitle: "Vida em Deus (40 Dias)",
      durationDays: 40,
      traditionLabel: "Fé Católica e Evangélica",
      badge: "40 Dias de Propósitos • Sentido e Gratidão",
      imagePath: "assets/sacred/criacao-luz.jpg",
      imageCaption: "A Criação da Luz (Gênesis 1) em arte sacra renascentista",
      description: "Para quem deseja renovar a alegria de viver, vencer a ansiedade do dia a dia e acordar todo dia com uma mensagem bíblica clara.",
      days: buildPurposeDays(
        "Vida em Deus e Gratidão",
        "Leia o versículo do dia com calma e envie uma mensagem de paz para alguém querido.",
        "Senhor Criador, luz da minha existência!",
        pazVidaItems
      )
    },
    {
      id: "proposito-familia-uniao-40",
      title: "40 Dias de Propósito: Paz na Família, Filhos e Netos",
      shortTitle: "Família Abençoada (40 Dias)",
      durationDays: 40,
      traditionLabel: "Fé Católica e Evangélica",
      badge: "40 Dias de Propósitos • Família e Lar",
      imagePath: "assets/sacred/arca-noe-alianca.jpg",
      imageCaption: "A Arca da Aliança sob o Arco de Paz (Gênesis 8-9)",
      description: "Para quem escolheu dedicar 40 dias abençoando o lar, os filhos, os netos, o diálogo manso e a reconciliação dentro de casa.",
      days: buildPurposeDays(
        "Paz e União na Família",
        "Ore pronunciando o nome de um familiar hoje e pratique uma palavra mansa em casa.",
        "Deus da Aliança, protetor do meu lar!",
        familiaUniaoItems
      )
    },
    {
      id: "proposito-cura-esperanca-40",
      title: "40 Dias de Propósito: Saúde, Cura e Força Interior",
      shortTitle: "Saúde e Cura (40 Dias)",
      durationDays: 40,
      traditionLabel: "Fé Católica e Evangélica",
      badge: "40 Dias de Propósitos • Cura e Alívio",
      imagePath: "assets/sacred/jesus-bom-pastor.jpg",
      imageCaption: "Jesus o Bom Pastor cuidando das ovelhas (Salmo 23 e João 10)",
      description: "Para quem busca fortalecimento espiritual e emocional durante tratamentos médicos, recuperação física, noites difíceis ou cuidados na maturidade.",
      days: buildPurposeDays(
        "Cura, Saúde e Esperança",
        "Respire com tranquilidade por um minuto, tome seu cuidado diário e entregue o descanso a Cristo.",
        "Senhor Jesus, Médico dos médicos!",
        curaEsperancaItems
      )
    },
    {
      id: "proposito-sabedoria-fe-40",
      title: "40 Dias de Propósito: Sabedoria, Firmeza e Vitória na Fé",
      shortTitle: "Sabedoria e Fé (40 Dias)",
      durationDays: 40,
      traditionLabel: "Fé Católica e Evangélica",
      badge: "40 Dias de Propósitos • Sabedoria Bíblica",
      imagePath: "assets/sacred/daniel-cova-leoes.jpg",
      imageCaption: "Daniel em Oração Firme na Cova dos Leões (Daniel 6)",
      description: "Para quem deseja tomar decisões sábias, vencer dúvidas, blindar a casa em oração e manter firmeza diária na Palavra de Deus.",
      days: buildPurposeDays(
        "Sabedoria, Firmeza e Fé",
        "Reflita no conselho bíblico de hoje antes de decidir ou responder algo importante.",
        "Deus de toda sabedoria e força!",
        sabedoriaFeItems
      )
    }
  ];
})();
