let dados = [
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos de Paris 2024, conquistando a medalha de ouro e inspirando novas gerações de atletas.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô judo judoca judoka ouro feminino feminina"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou o mundo com suas acrobacias e força. Aos poucos anos, ela já coleciona títulos e é considerada uma das maiores ginastas da história do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginástica ginastica ouro prata feminino feminina"
    },
    {
        titulo: "Ana e Duda",
        descricao: "Ao colocarem no peito a medalha de ouro dos Jogos Olímpicos Paris 2024 aos pés da Torre Eiffel, Ana Patricia e Duda levaram o Brasil de volta ao pódio no vôlei de praia, três anos após o país ficar de fora do quadro de medalhas da modalidade pela primeira vez.",
        link: "https://pt.wikipedia.org/wiki/Duda_Lisboa",
        tags: "volei vôlei praia ouro feminino feminina"
    },
    {
        titulo: "Caio Bonfim",
        descricao: "Caio Bonfim conquistou a medalha de prata na prova de 20 km da marcha atlética nos Jogos Olímpicos de Paris. É a primeira medalha do Brasil na história da prova.",
        link: "https://pt.wikipedia.org/wiki/Caio_Bonfim",
        tags: "atletismo marcha atletita atlética prata masculino nasculina"
    },
    {
        titulo: "Willian Lima",
        descricao: "Willian Lima conquistou a primeira medalha do Brasil na Olimpíada de Paris 2024. O judoca paulista ficou com a prata após ser derrotado pelo japonês Hifumi Abe na final da categoria até 66kg. É a primeira medalha do atleta de 24 anos em Jogos Olímpicos.",
        link: "https://pt.wikipedia.org/wiki/Willian_Lima",
        tags: "judô judo judoca judoka prata masculino masculina"
    },
    {
        titulo: "Tatiana Weston-Webb",
        descricao: "Tatiana Weston-Webb ficou com a medalha de prata no torneio olímpico de surfe. Em uma disputa que começou praticamente sem ondas e esquentou apenas no final, ela perdeu para a Caroline Marks pelo placar de 10,50 a 10,33.e",
        link: "https://pt.wikipedia.org/wiki/Tatiana_Weston-Webb",
        tags: "surfe prata feminino feminina surf"
    },
    {
        titulo: "Isaquias Queiroz",
        descricao: "Uma demonstração impressionante de força física e mental deu a Isaquias Queiroz a medalha de prata no C1 1000m (Canoagem de velocidade) das Olimpíadas de Paris.",
        link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        tags: "cania canoagem velocidade prata masculino masculina"
    },
    {
        titulo: "Seleção Feminina de Futebol",
        descricao: "A seleção feminina de futebol terminou os Jogos Paris 2024 com a medalha de prata, depois de perder na decisão para os Estados Unidos, por 1 a 0, no Parc des Princes. Apesar do resultado, uma campanha que deixou excelentes impressões na torcida, com vitórias contundentes sobre a anfitriã França (1 a 0) e também sobre a atual campeã do mundo, a Espanha (4 a 2).",
        link: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Futebol_Feminino",
        tags: "futebol seleção feminino feminina prata"
    },
    {
        titulo: "Larissa Pimenta",
        descricao: "Quando a brasileira Larissa Pimenta conquistou o bronze no judô ao derrotar a italiana Odette Giuffrida na Olimpíada de Paris, na categoria até 52kg, ela não estava apenas entrando para a história do esporte brasileiro, mas transformando o “status” de uma vizinhança apaixonada por esportes.",
        link: "https://pt.wikipedia.org/wiki/Larissa_Pimenta",
        tags: "judô judo judoca judoka feminino feminina bronze"
    },
    {
        titulo: "Seleção Brasileira de Ginástica",
        descricao: "A equipe feminina de ginástica artística do Brasil prometia fazer história nos Jogos Olímpicos Paris 2024 e já cumpriu, com um feito inédito. Nesta terça-feira, 30 de julho, a seleção brasileira conquistou a primeira medalha por equipes de sua história. Na final realizada na Bercy Arena, as brasileiras faturaram o bronze. <p>O Brasil foi representado por Rebeca Andrade, Flávia Saraiva, Jade Barbosa, Júlia Soares e Lorrane Oliveira. As brasileiras totalizaram 164.497 pontos, na terceira colocação. O Time Brasil conseguiu 42.366 no salto, 41.199 nas barras assimétricas, 39.966 na trave e 40.966 no solo.</p>",
        link: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Gin%C3%A1stica_Art%C3%ADstica_Feminina",
        tags: "bronze ginástica ginastica artística artistica seleção equipe feminino feminina"
    },
    {
        titulo: "Seleção Brasileira de Judô",
        descricao: "Após o ouro de Beatriz Silva, a prata de Willian Lima e o bronze de Larissa Pimenta, os brasileiros conquistaram o bronze na disputa por equipes, ao vencer a Itália por 4 a 3 no desempate. O triunfo também sacramentou a melhor campanha do país na modalidade em Jogos Olímpicos.",
        link: "https://pt.wikipedia.org/wiki/Jud%C3%B4_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        tags: "judô judo judoca judoka equipe bronze"
    },
    {
        titulo: "Bia Ferreira",
        descricao: "Beatriz Ferreira conquistou a medalha de bronze no boxe nos Jogos Olímpicos Paris 2024. A pugilista brasileira deu tudo de si, mas acabou superada na semifinal da categoria até 60 kg pela irlandesa Kellie Harrington, em decisão dividida dos juízes (4 x 1). Com isso, garantiu o terceiro lugar na competição e a segunda medalha olímpica da carreira.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Ferreira",
        tags: "boxe bronze feminino feminina"
    },
    {
        titulo: "Gabriel medina",
        descricao: "O maior surfista brasileiro da história não podia ir embora do Taiti sem levar uma medalha. Gabriel Medina venceu o peruano Alonso Correa na disputa pelo terceiro lugar nos Jogos Olímpicos e faturou a medalha de bronze, em Teahupoo.",
        link: "https://pt.wikipedia.org/wiki/Gabriel_Medina",
        tags: "surfe surf bronze masculino masculina"
    },
    {
        titulo: "Augusto Akio",
        descricao: "Após cair no início da primeira volta e fazer uma nota apenas razoável na segunda, Akio voou cheio de estilo na terceira para chegar ao bronze com uma nota de 91.85. O ouro ficou com o australiano Keegan Palmer, com 93.11, e a prata para o americano Tom Schaar, com 92.23.",
        link: "https://pt.wikipedia.org/wiki/Augusto_Akio",
        tags: "skate park bronze masculino masculina"
    },
    {
        titulo: "Edival Pontes",
        descricao: "Edival Pontes, o Netinho, conquistou, nesta quinta-feira, o bronze na categoria até 68kg do taekwondo nas Olimpíadas de Paris 2024. O brasileiro de 26 anos foi bem nas duas lutas decisivas no Grand Palais e faturou a medalha ao bater o espanhol Javier Pérez Polo na disputa do terceiro lugar. Logo antes, na repescagem, ele havia dado o troco no turco Hakan Reçber, seu algoz em Tóquio 2020.",
        link: "https://pt.wikipedia.org/wiki/Edival_Pontes",
        tags: "taekwondo bronze masculino masculina"
    },
    {
        titulo: "Alison dos Santos",
        descricao: "Foram 47s26 entre a largada e mais uma medalha olímpica. Nos últimos anos, Alison Brendom dos Santos, o Piu, promoveu uma verdadeira revolução na forma como se corre os 400m com barreiras. E foi recompensado com mais um bronze nas Olimpíadas de Paris 2024, repetindo o resultado de Tóquio 2020.",
        link: "https://pt.wikipedia.org/wiki/Alison_dos_Santos",
        tags: "atletismo 400m barreiras bronze masculino masculina"
    },
    {
        titulo: "Seleção Brasileira de Vôlei Feminino",
        descricao: "A seleção feminina de vôlei do Brasil obteve a medalha de bronze nos Jogos Olímpicos Paris 2024 com uma vitória sobre Türkiye por 3 sets a 1, parciais de 25/21, 27/25, 22/25 e 25/15, em 10 de agosto.<p>O resultado garantiu à equipe sua sexta medalha Olímpica nas últimas oito edições. São dois ouros (Beijing 2008 e Londres 2012) e dois bronzes (Atlanta 1996 e Sydney 2000), além da prata em Tóquio 2020.</p><p>Também mantém a escrita do vôlei brasileiro: desde Barcelona 1992 o país garante um pódio na quadra em pelo menos um gênero.</p>",
        link: "https://pt.wikipedia.org/wiki/Voleibol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024_-_Feminino",
        tags: "volei feminino seleção feminina bronze"
    },
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens. Medalhista de prata em 2021 e agora Medalhista de bronze, está na elite do skete brasileiro feminino, por ser a única medalhista nesse esporte recem adicionado nas Olimpíadas.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },

];
