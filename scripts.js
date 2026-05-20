// ================================================================
// RUSSIAN WITH LAMIA — Script principal
// ================================================================

const QUESTIONS = [
  {
    question: "Que signifie l'expression « медвежья услуга » ?",
    options: ["Un service rendu maladroitement qui nuit au lieu d'aider", "Un service très généreux et attentionné", "Un service lié à la chasse à l'ours", "Un service gratuit"],
    correct: 0,
    type: "vocabulaire"
  },
  {
    question: "Quel mot signifie « parfaitement / tout à fait » ?",
    options: ["совершенно", "совесть", "совет", "современный"],
    correct: 0,
    type: "vocabulaire"
  },
  {
    question: "Que veut dire « неожиданно » ?",
    options: ["Malheureusement", "Inattendu / soudainement", "Inévitablement", "Impoli"],
    correct: 1,
    type: "vocabulaire"
  },
  {
    question: "Dans quelle phrase le verbe est-il correctement conjugué au passé féminin ?",
    options: ["Она читал книгу", "Она читала книгу", "Она читало книгу", "Она читали книгу"],
    correct: 1,
    type: "grammaire"
  },
  {
    question: "Quel cas doit-on utiliser après la préposition « без » (sans) ?",
    options: ["Accusatif", "Génitif", "Datif", "Prépositionnel"],
    correct: 1,
    type: "grammaire"
  },
  {
    question: "« Я ______ в Москву каждое лето. » — choisissez la forme correcte du verbe « aller (en transport) » pour un mouvement habituel.",
    options: ["еду", "ехал", "езжу", "ездил"],
    correct: 2,
    type: "grammaire"
  },
  {
    question: "Lisez : « Несмотря на дождь, мы пошли гулять. » Que comprend-on ?",
    options: ["Nous sommes restés à cause de la pluie", "Nous sommes sortis nous promener malgré la pluie", "Il pleuvait donc nous avons annulé", "La pluie a commencé pendant la promenade"],
    correct: 1,
    type: "compréhension"
  },
  {
    question: "« Если бы у меня было больше времени, я бы выучил русский язык. » — Que signifie cette phrase ?",
    options: ["J'ai beaucoup de temps pour apprendre le russe", "Si j'avais plus de temps, j'apprendrais le russe", "J'apprends le russe depuis longtemps", "Le russe prend beaucoup de temps à apprendre"],
    correct: 1,
    type: "compréhension"
  },
  {
    question: "Dans quel mot le « o » se prononce-t-il [a] (réduction vocalique) ?",
    options: ["молоко", "стол", "кот", "дом"],
    correct: 0,
    type: "prononciation"
  },
  {
    question: "Qui est l'auteur du roman « Guerre et Paix » ?",
    options: ["Fiodor Dostoïevski", "Léon Tolstoï", "Anton Tchekhov", "Alexandre Pouchkine"],
    correct: 1,
    type: "culture"
  }
];

const LEVELS = [
  { id: "debutant", name: "Débutante", min: 0, max: 1, cefr: "A1", emoji: "🌱", desc: "Les premiers pas" },
  { id: "intermediaire", name: "Intermédiaire", min: 2, max: 3, cefr: "A2", emoji: "🌿", desc: "La vie quotidienne" },
  { id: "avance", name: "Avancé", min: 4, max: 5, cefr: "B1", emoji: "🌳", desc: "L'indépendance" },
  { id: "expert", name: "Experte", min: 6, max: 7, cefr: "B2", emoji: "👑", desc: "La maîtrise" },
  { id: "maitre", name: "Maître", min: 8, max: 10, cefr: "C1", emoji: "🏆", desc: "L'élégance" }
];

const levelNames = {
  debutant: "Débutante",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
  expert: "Experte",
  maitre: "Maître"
};

// ================================================================
// LESSONS — 40 leçons (5 niveaux × 8)
// ================================================================

const LESSONS = {
  // ===== NIVEAU 1 — DÉBUTANTE (A1) =====
  debutant: [
    {
      id: "d1",
      title: "Alphabet cyrillique A–L",
      type: "vocab",
      content: `<p>L\'alphabet russe compte <strong>33 lettres</strong>. D\u00e9couvrons les 11 premi\u00e8res.</p>
        <div class="lesson-alphabet">
          <div class="letter-card"><span class="cyr">А а</span><span class="phon">[a]</span><span class="example">comme <strong>papa</strong></span></div>
          <div class="letter-card"><span class="cyr">Б б</span><span class="phon">[b]</span><span class="example">comme <strong>b\u00e9b\u00e9</strong></span></div>
          <div class="letter-card"><span class="cyr">В в</span><span class="phon">[v]</span><span class="example">comme <strong>v\u00e9lo</strong></span></div>
          <div class="letter-card"><span class="cyr">Г г</span><span class="phon">[g]</span><span class="example">comme <strong>gare</strong></span></div>
          <div class="letter-card"><span class="cyr">Д д</span><span class="phon">[d]</span><span class="example">comme <strong>d\u00e9</strong></span></div>
          <div class="letter-card"><span class="cyr">Е е</span><span class="phon">[y\u00e9]</span><span class="example">comme <strong>y\u00e9ti</strong></span></div>
          <div class="letter-card"><span class="cyr">Ё ё</span><span class="phon">[yo]</span><span class="example">comme <strong>yoga</strong></span></div>
          <div class="letter-card"><span class="cyr">Ж ж</span><span class="phon">[j]</span><span class="example">comme <strong>jardin</strong></span></div>
          <div class="letter-card"><span class="cyr">З з</span><span class="phon">[z]</span><span class="example">comme <strong>z\u00e8bre</strong></span></div>
          <div class="letter-card"><span class="cyr">И и</span><span class="phon">[i]</span><span class="example">comme <strong>\u00eele</strong></span></div>
          <div class="letter-card"><span class="cyr">К к</span><span class="phon">[k]</span><span class="example">comme <strong>kilo</strong></span></div>
          <div class="letter-card"><span class="cyr">Л л</span><span class="phon">[l]</span><span class="example">comme <strong>lune</strong></span></div>
        </div>
        <p style="margin-top:1.2rem;font-style:normal;color:var(--text-muted)">Pi\u00e8ge : le <strong>В</strong> se prononce V, pas B !</p>`,
      examples: ["A = a comme dans papa", "V = v comme dans vélo", "J = j comme dans jardin", "I = i comme dans île"],
      exercise: {
        type: "choice",
        question: "Quelle lettre se prononce [v] et ressemble à un B latin ?",
        options: ["Б [b]", "В [v]", "Г [g]", "Л [l]"],
        correct: 1,
        hints: 1,
        hintText: ["Regardez les lettres qui ressemblent au latin mais sonnent différemment."],
      },
      difficulty: 1
    },
    {
      id: "d2",
      title: "Alphabet cyrillique M–R",
      type: "vocab",
      content: `<p>Les 21 derni\u00e8res lettres de l\'alphabet russe.</p>
        <div class="lesson-alphabet">
          <div class="letter-card"><span class="cyr">М м</span><span class="phon">[m]</span><span class="example"><strong>maman</strong></span></div>
          <div class="letter-card"><span class="cyr">Н н</span><span class="phon">[n]</span><span class="example"><strong>nez</strong></span></div>
          <div class="letter-card"><span class="cyr">О о</span><span class="phon">[o/a]</span><span class="example"><strong>mot</strong> (ou [a] sans accent)</span></div>
          <div class="letter-card"><span class="cyr">П п</span><span class="phon">[p]</span><span class="example"><strong>p\u00e8re</strong></span></div>
          <div class="letter-card"><span class="cyr">Р р</span><span class="phon">[r]</span><span class="example">R roul\u00e9 (espagnol)</span></div>
          <div class="letter-card"><span class="cyr">С с</span><span class="phon">[s]</span><span class="example"><strong>soleil</strong></span></div>
          <div class="letter-card"><span class="cyr">Т т</span><span class="phon">[t]</span><span class="example"><strong>table</strong></span></div>
          <div class="letter-card"><span class="cyr">У у</span><span class="phon">[ou]</span><span class="example"><strong>loup</strong></span></div>
          <div class="letter-card"><span class="cyr">Ф ф</span><span class="phon">[f]</span><span class="example"><strong>fleur</strong></span></div>
          <div class="letter-card"><span class="cyr">Х х</span><span class="phon">[kh]</span><span class="example">j espagnol</span></div>
          <div class="letter-card"><span class="cyr">Ц ц</span><span class="phon">[ts]</span><span class="example"><strong>tsar</strong></span></div>
          <div class="letter-card"><span class="cyr">Ч ч</span><span class="phon">[tch]</span><span class="example"><strong>tch\u00e8que</strong></span></div>
        </div>
        <div class="lesson-alphabet">
          <div class="letter-card"><span class="cyr">Ш ш</span><span class="phon">[ch]</span><span class="example"><strong>chat</strong></span></div>
          <div class="letter-card"><span class="cyr">Щ щ</span><span class="phon">[chtch]</span><span class="example">son plus doux</span></div>
          <div class="letter-card"><span class="cyr">Ъ ъ</span><span class="phon">[—]</span><span class="example">signe dur (muet)</span></div>
          <div class="letter-card"><span class="cyr">Ы ы</span><span class="phon">[y]</span><span class="example">son unique entre i et ou</span></div>
          <div class="letter-card"><span class="cyr">Ь ь</span><span class="phon">[—]</span><span class="example">signe mou (adoucit)</span></div>
          <div class="letter-card"><span class="cyr">Э э</span><span class="phon">[\u00e8]</span><span class="example"><strong>p\u00e8re</strong></span></div>
          <div class="letter-card"><span class="cyr">Ю ю</span><span class="phon">[you]</span><span class="example"><strong>youpi</strong></span></div>
          <div class="letter-card"><span class="cyr">Я я</span><span class="phon">[ya]</span><span class="example"><strong>yaourt</strong></span></div>
        </div>
        <p style="margin-top:1.2rem;font-style:normal;color:var(--text-muted)">Bravo ! Lisez : <strong>мама</strong> [ma-ma] (maman), <strong>папа</strong> [pa-pa] (papa).</p>`,
      examples: ["R = r roulé", "Y = son unique [y]", "b = signe mou", "R = ya comme yaourt"],
      exercise: {
        type: "fill",
        question: "Tapez le mot russe pour « maman » (4 lettres) :",
        correct: "мама",
        hints: 2,
        hintText: ["La première lettre est М [m]", "La deuxième lettre est А [a]"],
      },
      difficulty: 2
    },
    {
      id: "d3",
      title: "Salutations de base",
      type: "vocab",
      content: `<p>Les salutations sont la cl\u00e9 de toute conversation.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">Здравствуйте</span><span class="fr">Bonjour (formel)</span><span class="pron">[zdra-stvo\u00ef-tye]</span></div>
          <div class="vocab-item"><span class="ru">Привет</span><span class="fr">Salut (informel)</span><span class="pron">[pri-vyet]</span></div>
          <div class="vocab-item"><span class="ru">До свидания</span><span class="fr">Au revoir (formel)</span><span class="pron">[da svi-da-ni-ya]</span></div>
          <div class="vocab-item"><span class="ru">Пока</span><span class="fr">Salut / \u00c0 plus</span><span class="pron">[pa-ka]</span></div>
          <div class="vocab-item"><span class="ru">Спасибо</span><span class="fr">Merci</span><span class="pron">[spa-si-ba]</span></div>
          <div class="vocab-item"><span class="ru">Пожалуйста</span><span class="fr">S\'il vous pla\u00eet</span><span class="pron">[pa-zhal-sta]</span></div>
          <div class="vocab-item"><span class="ru">Как дела?</span><span class="fr">Comment \u00e7a va ?</span><span class="pron">[kak di-la]</span></div>
          <div class="vocab-item"><span class="ru">Хорошо</span><span class="fr">Bien</span><span class="pron">[ha-ra-cho]</span></div>
          <div class="vocab-item"><span class="ru">Меня зовут ...</span><span class="fr">Je m\'appelle ...</span><span class="pron">[mi-nya za-vout]</span></div>
        </div>
        <p style="margin-top:1rem;">Dialogue :<br><br>— <strong>Здравствуйте!</strong> Как дела?<br>— <strong>Хорошо, спасибо!</strong> А у вас?<br>— Тоже хорошо. <strong>Меня зовут</strong> Анна.</p>`,
      examples: ["Здравствуйте — Bonjour (formel)", "Привет — Salut", "Спасибо — Merci"],
      exercise: {
        type: "choice",
        question: "Comment répond-on à « Как дела? » ?",
        options: ["Привет", "Хорошо, спасибо", "Пока", "До свидания"],
        correct: 1,
        hints: 1,
        hintText: ["On répond en parlant de son état, puis on remercie."],
      },
      difficulty: 1
    },
    {
      id: "d4",
      title: "Les pronoms personnels",
      type: "grammar",
      content: `<p>Les pronoms personnels sont le socle de la conjugaison.</p>
        <table class="case-table">
          <tr><th>Fran\u00e7ais</th><th>Russe</th><th>Prononciation</th></tr>
          <tr><td>je</td><td>я</td><td>[ya]</td></tr>
          <tr><td>tu</td><td>ты</td><td>[ty]</td></tr>
          <tr><td>il</td><td>он</td><td>[on]</td></tr>
          <tr><td>elle</td><td>она</td><td>[a-na]</td></tr>
          <tr><td>nous</td><td>мы</td><td>[my]</td></tr>
          <tr><td>vous</td><td>вы</td><td>[vy]</td></tr>
          <tr><td>ils/elles</td><td>они</td><td>[a-ni]</td></tr>
        </table>
        <div class="example-box" style="margin-top:1rem">
          <p><strong>Я</strong> читаю. — Je lis.</p>
          <p><strong>Ты</strong> говоришь. — Tu parles.</p>
          <p><strong>Он</strong> работает. — Il travaille.</p>
          <p><strong>Мы</strong> учим русский. — Nous apprenons le russe.</p>
        </div>
        <p style="margin-top:1rem;font-style:normal;color:var(--text-muted)"><strong>Вы</strong> est aussi la forme de politesse.</p>`,
      examples: ["я — je", "ты — tu", "он/она — il/elle", "мы — nous"],
      exercise: {
        type: "choice",
        question: "Remplacez « Анна » par le bon pronom : « Анна читает »",
        options: ["Он читает", "Она читает", "Они читают", "Мы читаем"],
        correct: 1,
        hints: 0,
      },
      difficulty: 1
    },
    {
      id: "d5",
      title: "Les nombres 1–20",
      type: "vocab",
      content: `<p>Les nombres sont essentiels pour les achats et les dates.</p>
        <div class="numbers-grid">
          <div class="num-item"><span class="num">1</span><span class="ru">один</span><span class="pron">[a-din]</span></div>
          <div class="num-item"><span class="num">2</span><span class="ru">два</span><span class="pron">[dva]</span></div>
          <div class="num-item"><span class="num">3</span><span class="ru">три</span><span class="pron">[tri]</span></div>
          <div class="num-item"><span class="num">4</span><span class="ru">четыре</span><span class="pron">[chi-ty-rye]</span></div>
          <div class="num-item"><span class="num">5</span><span class="ru">пять</span><span class="pron">[pyat\']</span></div>
          <div class="num-item"><span class="num">6</span><span class="ru">шесть</span><span class="pron">[shest\']</span></div>
          <div class="num-item"><span class="num">7</span><span class="ru">семь</span><span class="pron">[syem\']</span></div>
          <div class="num-item"><span class="num">8</span><span class="ru">восемь</span><span class="pron">[vo-syem\']</span></div>
          <div class="num-item"><span class="num">9</span><span class="ru">девять</span><span class="pron">[dye-vyat\']</span></div>
          <div class="num-item"><span class="num">10</span><span class="ru">десять</span><span class="pron">[dye-syat\']</span></div>
          <div class="num-item"><span class="num">11</span><span class="ru">одиннадцать</span><span class="pron">[a-di-na-tsat\']</span></div>
          <div class="num-item"><span class="num">12</span><span class="ru">двенадцать</span><span class="pron">[dvi-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">13</span><span class="ru">тринадцать</span><span class="pron">[tri-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">14</span><span class="ru">четырнадцать</span><span class="pron">[chi-tyr-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">15</span><span class="ru">пятнадцать</span><span class="pron">[pyat-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">16</span><span class="ru">шестнадцать</span><span class="pron">[shest-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">17</span><span class="ru">семнадцать</span><span class="pron">[syem-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">18</span><span class="ru">восемнадцать</span><span class="pron">[va-syem-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">19</span><span class="ru">девятнадцать</span><span class="pron">[dye-vyat-nad-tsat\']</span></div>
          <div class="num-item"><span class="num">20</span><span class="ru">двадцать</span><span class="pron">[dva-tsat\']</span></div>
        </div>
        <p style="margin-top:1rem;font-style:normal;color:var(--text-muted)">Les nombres de 11 à 19 prennent le suffixe <strong>-надцать</strong>.</p>`,
      examples: ["один — 1", "два — 2", "пять — 5", "десять — 10"],
      exercise: {
        type: "fill",
        question: "Tapez « 7 » en russe (4 lettres) :",
        correct: "семь",
        hints: 1,
        hintText: ["La première lettre est С [s], ça commence comme « sept »..."],
      },
      difficulty: 2
    },
    {
      id: "d6",
      title: "Le genre des noms",
      type: "grammar",
      content: `<p>En russe, chaque nom a un genre : masculin, f\u00e9minin ou neutre.</p>
        <div class="example-box">
          <p><strong>Masculin</strong> : se termine par consonne ou <strong>-й</strong><br>стол [stol] (table), музей [mou-zy\u00e9\u00ef] (mus\u00e9e)</p>
          <p><strong>F\u00e9minin</strong> : se termine par <strong>-а</strong> ou <strong>-я</strong><br>книга [kni-ga] (livre), земля [zyim-lya] (terre)</p>
          <p><strong>Neutre</strong> : se termine par <strong>-о</strong> ou <strong>-е</strong><br>окно [ak-no] (fen\u00eatre), море [mo-rye] (mer)</p>
        </div>
        <p style="margin-top:1rem;font-style:normal;color:var(--text-muted)">Exceptions : les noms en <strong>-ь</strong> peuvent \u00eatre masculins ou f\u00e9minins.</p>`,
      examples: ["стол (m.) — table", "книга (f.) — livre", "окно (n.) — fenêtre"],
      exercise: {
        type: "choice",
        question: "Quel est le genre de « дверь » [dvyer\\'] (porte) ?",
        options: ["Masculin", "Féminin", "Neutre", "Ça dépend du contexte"],
        correct: 1,
        hints: 2,
        hintText: ["Le -ь peut être masculin ou féminin.", "Pensez à « la porte » en français — c’est féminin aussi !"],
      },
      difficulty: 2
    },
    {
      id: "d7",
      title: "Mini-texte : « Меня зовут... »",
      type: "reading",
      content: `<p>Lisons notre premier texte russe !</p>
        <div class="poem-box">
          <p class="poem-ru"><strong>Меня зовут Анна.</strong><br>
Я из Франции. Я живу в Париже.<br>
У меня есть мама, папа и брат.<br>
Я люблю читать и слушать музыку.<br>
Я учу русский язык.</p>
          <p class="poem-fr">Je m\'appelle Anna.<br>
Je viens de France. J'habite à Paris.<br>
J'ai une maman, un papa et un fr\u00e8re.<br>
J'aime lire et \u00e9couter de la musique.<br>
J'apprends le russe.</p>
        </div>
        <div class="vocab-list" style="margin-top:1rem">
          <div class="vocab-item"><span class="ru">из</span><span class="fr">de (provenance)</span><span class="pron">[iz]</span></div>
          <div class="vocab-item"><span class="ru">живу</span><span class="fr">je vis / j'habite</span><span class="pron">[ji-vou]</span></div>
          <div class="vocab-item"><span class="ru">у меня есть</span><span class="fr">j'ai</span><span class="pron">[ou mye-nya yest\']</span></div>
          <div class="vocab-item"><span class="ru">люблю</span><span class="fr">j'aime</span><span class="pron">[lyoub-lyou]</span></div>
          <div class="vocab-item"><span class="ru">учу</span><span class="fr">j'apprends</span><span class="pron">[ou-tchou]</span></div>
        </div>`,
      examples: ["Меня зовут Анна — Je m'appelle Anna", "Я из Франции — Je viens de France"],
      exercise: {
        type: "choice",
        question: "D'après le texte, qu'est-ce qu'Anna a ?",
        options: ["Un chat et un chien", "Une maman, un papa et un frère", "Une sœur", "Elle vit seule"],
        correct: 1,
        hints: 0,
      },
      difficulty: 1
    },
    {
      id: "d8",
      title: "La Russie et ses symboles",
      type: "culture",
      content: `<p>D\u00e9couvrons la culture russe \u00e0 travers ses symboles.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">флаг России</span><span class="fr">drapeau russe (blanc, bleu, rouge)</span><span class="pron">[flag ras-si-i]</span></div>
          <div class="vocab-item"><span class="ru">матрёшка</span><span class="fr">poup\u00e9e gigogne Matriochka</span><span class="pron">[ma-tryoch-ka]</span></div>
          <div class="vocab-item"><span class="ru">балалайка</span><span class="fr">instrument Balala\u00efka</span><span class="pron">[ba-la-la\u00ef-ka]</span></div>
          <div class="vocab-item"><span class="ru">медведь</span><span class="fr">ours (symbole national)</span><span class="pron">[myed-vyed\']</span></div>
          <div class="vocab-item"><span class="ru">Кремль</span><span class="fr">Kremlin</span><span class="pron">[kryeml\']</span></div>
          <div class="vocab-item"><span class="ru">Красная площадь</span><span class="fr">Place Rouge</span><span class="pron">[kras-na-ya plo-chchad\']</span></div>
        </div>
        <p style="margin-top:1rem;font-style:normal;color:var(--text-muted)">La premi\u00e8re Matriochka a \u00e9t\u00e9 fabriqu\u00e9e en 1890 par Vassili Zviozdotchkine.</p>`,
      examples: ["Матрёшка — poupée gigogne", "Балалайка — instrument à 3 cordes"],
      exercise: {
        type: "choice",
        question: "Quel instrument traditionnel est associé à la Russie ?",
        options: ["Le ukulélé", "La balalaïka", "La guitare électrique", "Le violon"],
        correct: 1,
        hints: 1,
        hintText: ["Il a 3 cordes et un corps triangulaire."],
      },
      difficulty: 1
    }
  ],
  // ===== NIVEAU 2 — INTERMÉDIAIRE (A2) =====
  intermediaire: [
    {
      id: "i1",
      title: "La nourriture et les boissons",
      type: "vocab",
      content: `<p>Vocabulaire essentiel pour le restaurant.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">еда</span><span class="fr">nourriture</span><span class="pron">[yi-da]</span></div>
          <div class="vocab-item"><span class="ru">напиток</span><span class="fr">boisson</span><span class="pron">[na-pi-tak]</span></div>
          <div class="vocab-item"><span class="ru">хлеб</span><span class="fr">pain</span><span class="pron">[khlyep]</span></div>
          <div class="vocab-item"><span class="ru">молоко</span><span class="fr">lait</span><span class="pron">[ma-la-ko]</span></div>
          <div class="vocab-item"><span class="ru">мясо</span><span class="fr">viande</span><span class="pron">[mya-sa]</span></div>
          <div class="vocab-item"><span class="ru">рыба</span><span class="fr">poisson</span><span class="pron">[ry-ba]</span></div>
          <div class="vocab-item"><span class="ru">фрукты</span><span class="fr">fruits</span><span class="pron">[frouk-ty]</span></div>
          <div class="vocab-item"><span class="ru">овощи</span><span class="fr">légumes</span><span class="pron">[o-va-chchi]</span></div>
          <div class="vocab-item"><span class="ru">чай</span><span class="fr">thé</span><span class="pron">[tchaï]</span></div>
          <div class="vocab-item"><span class="ru">кофе</span><span class="fr">café</span><span class="pron">[ko-fye]</span></div>
          <div class="vocab-item"><span class="ru">вода</span><span class="fr">eau</span><span class="pron">[va-da]</span></div>
        </div>
        <p style="margin-top:1rem;">Phrase : <strong>Я хочу есть/пить</strong> [ya kha-tchou yest\'/pit\'] — J'ai faim/soif.</p>`,
      examples: ["Хлеб — pain", "Молоко — lait", "Чай — thé", "Вода — eau"],
      exercise: {
        type: "choice",
        question: "Comment dit-on « eau » en russe ?",
        options: ["вино [vi-no]", "вода [va-da]", "водка [vod-ka]", "молоко [ma-la-ko]"],
        correct: 1,
        hints: 1,
        hintText: ["Ça commence par V et a 2 syllabes."],
      },
      difficulty: 1
    },
    {
      id: "i2",
      title: "Le passé des verbes",
      type: "grammar",
      content: `<p>Le passé russe : on ajoute un suffixe au radical.</p>
        <div class="example-box">
          <p><strong>Formation :</strong> radical + <strong>-л</strong> / <strong>-ла</strong> / <strong>-ло</strong> / <strong>-ли</strong></p>
          <p>читать [chi-tat\'] (lire) → <strong>чита-</strong></p>
          <p>— он чита<strong>л</strong> [chi-tal] (il lisait)</p>
          <p>— она чита<strong>ла</strong> [chi-ta-la] (elle lisait)</p>
          <p>— они чита<strong>ли</strong> [chi-ta-li] (ils lisaient)</p>
        </div>
        <table class="case-table" style="margin-top:1rem">
          <tr><th>Infinitif</th><th>Masculin</th><th>Féminin</th><th>Pluriel</th></tr>
          <tr><td>делать</td><td>делал</td><td>делала</td><td>делали</td></tr>
          <tr><td>говорить</td><td>говорил</td><td>говорила</td><td>говорили</td></tr>
          <tr><td>быть</td><td>был</td><td>была</td><td>были</td></tr>
        </table>`,
      examples: ["читал — il lisait", "читала — elle lisait", "была — elle était"],
      exercise: {
        type: "error",
        question: "Cette phrase est-elle correcte ? « Она вчера читал книгу. »",
        options: ["Oui, c’est correct", "Non, c’est incorrect"],
        correct: 1,
        hints: 1,
        hintText: ["Regardez le genre du sujet (она) et la terminaison du verbe."],
      },
      difficulty: 2
    },
    {
      id: "i3",
      title: "Dialogue : Au restaurant",
      type: "reading",
      content: `<p>Un dialogue typique dans un restaurant russe.</p>
        <div class="poem-box">
          <p class="poem-ru"><strong>Официант:</strong> Добрый вечер! Что будете заказывать?<br>
          <strong>Вы:</strong> Здравствуйте! Можно меню?<br>
          <strong>Официант:</strong> Пожалуйста, вот меню.<br>
          <strong>Вы:</strong> Я буду борщ и салат. А на десерт — чай.<br>
          <strong>Официант:</strong> Сколько это стоит?<br>
          <strong>Вы:</strong> 850 рублей. Вот, пожалуйста. Сдачи не надо.</p>
          <p class="poem-fr">Serveur : Bonsoir ! Que désirez-vous commander ?<br>
Vous : Bonjour ! Puis-je voir le menu ?<br>
Serveur : Voici le menu.<br>
Vous : Je prendrai le bortsch et une salade. En dessert — du thé.<br>
Serveur : Combien ça coûte ?<br>
Vous : 850 roubles. Voilà. Gardez la monnaie.</p>
        </div>`,
      examples: ["Можно меню? — Puis-je voir le menu ?", "Я буду... — Je prendrai..."],
      exercise: {
        type: "choice",
        question: "Que commande le client dans le dialogue ?",
        options: ["Du thé et des fruits", "Du bortsch, une salade et du thé", "De la viande et du café", "Juste une salade"],
        correct: 1,
        hints: 0,
      },
      difficulty: 1
    },
    {
      id: "i4",
      title: "Les directions et la ville",
      type: "vocab",
      content: `<p>Se rep\u00e9rer en ville.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">где?</span><span class="fr">où ?</span><span class="pron">[gdye]</span></div>
          <div class="vocab-item"><span class="ru">куда?</span><span class="fr">vers où ?</span><span class="pron">[kou-da]</span></div>
          <div class="vocab-item"><span class="ru">прямо</span><span class="fr">tout droit</span><span class="pron">[prya-ma]</span></div>
          <div class="vocab-item"><span class="ru">налево</span><span class="fr">à gauche</span><span class="pron">[na-lye-va]</span></div>
          <div class="vocab-item"><span class="ru">направо</span><span class="fr">à droite</span><span class="pron">[na-pra-va]</span></div>
          <div class="vocab-item"><span class="ru">вокзал</span><span class="fr">gare</span><span class="pron">[vak-zal]</span></div>
          <div class="vocab-item"><span class="ru">аэропорт</span><span class="fr">aéroport</span><span class="pron">[a-e-ra-port]</span></div>
          <div class="vocab-item"><span class="ru">остановка</span><span class="fr">arrêt (bus)</span><span class="pron">[as-ta-nov-ka]</span></div>
          <div class="vocab-item"><span class="ru">метро</span><span class="fr">métro</span><span class="pron">[mi-tro]</span></div>
        </div>
        <p style="margin-top:1rem;">Phrase :<br><strong>Извините, как пройти к метро?</strong> [iz-vi-ni-tye, kak proï-ti k mi-tro] — Excusez-moi, comment aller au métro ?</p>`,
      examples: ["Прямо — tout droit", "Налево — à gauche", "Направо — à droite"],
      exercise: {
        type: "choice",
        question: "Comment dit-on « tout droit » en russe ?",
        options: ["налево [na-lye-va]", "направо [na-pra-va]", "прямо [prya-ma]", "где [gdye]"],
        correct: 2,
        hints: 0,
      },
      difficulty: 1
    },
    {
      id: "i5",
      title: "Le cas accusatif",
      type: "grammar",
      content: `<p>L'accusatif marque le complément d'objet direct (COD).</p>
        <div class="example-box">
          <p>Я вижу <strong>стол</strong>. — Je vois la table. (masc. inanimé = identique)</p>
          <p>Я вижу <strong>книгу</strong> [kni-gou]. — Je vois le livre. (fém. : -а → -у)</p>
          <p>Я вижу <strong>брата</strong> [bra-ta]. — Je vois mon frère. (animé : -а)</p>
        </div>
        <table class="case-table" style="margin-top:1rem">
          <tr><th>Genre</th><th>Nominatif</th><th>Accusatif</th></tr>
          <tr><td>Masc. inanimé</td><td>стол</td><td>стол</td></tr>
          <tr><td>Masc. animé</td><td>брат</td><td>брата</td></tr>
          <tr><td>Féminin (-а)</td><td>книга</td><td>книгу</td></tr>
          <tr><td>Neutre</td><td>окно</td><td>окно</td></tr>
        </table>`,
      examples: ["Книгу — livre (COD)", "Брата — frère (COD, animé)"],
      exercise: {
        type: "fill",
        question: "Mettez « сестра » [sis-tra] (œur) à l'accusatif : « Я люблю _____ » (6 lettres)",
        correct: "сестру",
        hints: 2,
        hintText: ["Le féminin en -а change -а en -у.", "Donc сестра → сестру"],
      },
      difficulty: 2
    },
    {
      id: "i6",
      title: "Exercice mélangé",
      type: "exercise",
      content: `<p>Testez vos connaissances avec cet exercice combiné.</p>
        <div style="padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px;margin:1rem 0">
          <p style="margin-bottom:0.5rem">Rappel des thèmes :</p>
          <ul style="font-size:0.85rem;color:var(--text-secondary);line-height:1.8">
            <li>Nourriture et boissons</li>
            <li>Passé des verbes</li>
            <li>Directions en ville</li>
            <li>Cas accusatif</li>
          </ul>
        </div>`,
      examples: [],
      exercise: {
        type: "choice",
        question: "« Вчера мы ______ в ресторане. » — verbe « быть » au passé pluriel.",
        options: ["был [byl]", "была [by-la]", "было [by-la]", "были [by-li]"],
        correct: 3,
        hints: 1,
        hintText: ["Le sujet est « мы » (nous) → terminaison plurielle."],
      },
      difficulty: 2
    },
    {
      id: "i7",
      title: "Les fêtes russes",
      type: "culture",
      content: `<p>La Russie célèbre de nombreuses fêtes uniques.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">Новый год</span><span class="fr">Nouvel An (la + importante)</span><span class="pron">[no-vyï got]</span></div>
          <div class="vocab-item"><span class="ru">Рождество</span><span class="fr">Noël orthodoxe (6-7 janv.)</span><span class="pron">[razh-dyest-vo]</span></div>
          <div class="vocab-item"><span class="ru">Масленица</span><span class="fr">Maslenitsa (crêpes, printemps)</span><span class="pron">[mas-lye-ni-tsa]</span></div>
          <div class="vocab-item"><span class="ru">Пасха</span><span class="fr">Pâques orthodoxe</span><span class="pron">[pas-kha]</span></div>
          <div class="vocab-item"><span class="ru">День Победы</span><span class="fr">9 mai (Victoire)</span><span class="pron">[dyen\' pa-bye-dy]</span></div>
          <div class="vocab-item"><span class="ru">Дед Мороз</span><span class="fr">Père Noël russe</span><span class="pron">[dyed ma-ros]</span></div>
        </div>
        <p style="margin-top:1rem;font-style:normal;color:var(--text-muted)">La Maslenitsa dure une semaine : on mange des <strong>блины</strong> [bli-ny] (crêpes) et on brûle un épouvantail.</p>`,
      examples: ["Новый год — Nouvel An", "Масленица — fête des crêpes"],
      exercise: {
        type: "choice",
        question: "Quelle est la fête la plus importante en Russie ?",
        options: ["Noël", "Pâques", "Le Nouvel An", "Le Jour de la Victoire"],
        correct: 2,
        hints: 1,
        hintText: ["Même sous l'URSS, quand la religion était restreinte, cette fête était toujours célébrée."],
      },
      difficulty: 1
    },
    {
      id: "i8",
      title: "Mini-texte : « Мой день »",
      type: "reading",
      content: `<p>Une journée typique décrite en russe.</p>
        <div class="poem-box">
          <p class="poem-ru"><strong>Мой день</strong><br><br>
Я встаю в семь часов утра.<br>
Я завтракаю и пью кофе.<br>
Потом я иду на работу.<br>
Я работаю до пяти часов.<br>
Вечером я ужинаю и смотрю телевизор.<br>
Я ложусь спать в одиннадцать часов.</p>
          <p class="poem-fr">Ma journée<br><br>
Je me lève à 7h du matin.<br>
Je prends le petit-déj et je bois du café.<br>
Ensuite je vais au travail.<br>
Je travaille jusqu’à 17h.<br>
Le soir je dîne et regarde la télé.<br>
Je me couche à 23h.</p>
        </div>`,
      examples: ["Я встаю в семь часов — Je me lève à 7h"],
      exercise: {
        type: "choice",
        question: "Que fait la personne après le travail (вечером) ?",
        options: ["Elle va au travail", "Elle dîne et regarde la télé", "Elle se lève", "Elle prend son café"],
        correct: 1,
        hints: 0,
      },
      difficulty: 1
    }
  ],
  // ===== NIVEAU 3 — AVANCÉ (B1) =====
  avance: [
    {
      id: "a1",
      title: "Les émotions et sentiments",
      type: "vocab",
      content: `<p>Exprimer ses émotions en russe.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">любовь</span><span class="fr">amour</span><span class="pron">[lyou-bov\']</span></div>
          <div class="vocab-item"><span class="ru">радость</span><span class="fr">joie</span><span class="pron">[ra-dast\']</span></div>
          <div class="vocab-item"><span class="ru">грусть</span><span class="fr">tristesse</span><span class="pron">[groust\']</span></div>
          <div class="vocab-item"><span class="ru">страх</span><span class="fr">peur</span><span class="pron">[strakh]</span></div>
          <div class="vocab-item"><span class="ru">гнев</span><span class="fr">colère</span><span class="pron">[gnyev]</span></div>
          <div class="vocab-item"><span class="ru">удивление</span><span class="fr">surprise</span><span class="pron">[ou-div-lye-ni-ye]</span></div>
          <div class="vocab-item"><span class="ru">надежда</span><span class="fr">espoir</span><span class="pron">[na-dyezh-da]</span></div>
          <div class="vocab-item"><span class="ru">гордость</span><span class="fr">fierté</span><span class="pron">[gor-dast\']</span></div>
        </div>`,
      examples: ["Любовь — amour", "Радость — joie", "Страх — peur"],
      exercise: {
        type: "choice",
        question: "Quel mot signifie « joie » en russe ?",
        options: ["грусть [groust\\']", "радость [ra-dast\\']", "гордость [gor-dast\\']", "страх [strakh]"],
        correct: 1,
        hints: 0,
      },
      difficulty: 1
    },
    {
      id: "a2",
      title: "Verbes de mouvement : идти / ходить",
      type: "grammar",
      content: `<p>Les verbes de mouvement : une spécificité fascinante du russe.</p>
        <div class="example-box">
          <p><strong>Идти</strong> [it-ti] (déterminé) : action en cours, direction unique.<br>
Я <strong>иду</strong> в магазин. — Je vais au magasin (maintenant).</p>
          <p><strong>Ходить</strong> [kha-dit\'] (indéterminé) : mouvement habituel.<br>
Я <strong>хожу</strong> в магазин каждый день.</p>
        </div>
        <table class="case-table" style="margin-top:1rem">
          <tr><th>Personne</th><th>Идти</th><th>Ходить</th></tr>
          <tr><td>я</td><td>иду</td><td>хожу</td></tr>
          <tr><td>ты</td><td>идёшь</td><td>ходишь</td></tr>
          <tr><td>он/а</td><td>идёт</td><td>ходит</td></tr>
          <tr><td>мы</td><td>идём</td><td>ходим</td></tr>
          <tr><td>они</td><td>идут</td><td>ходят</td></tr>
        </table>`,
      examples: ["Идти — aller (maintenant, à pied)", "Ходить — aller (habitude)"],
      exercise: {
        type: "choice",
        question: "« Каждый день я ______ в школу. » (habitude)",
        options: ["иду [i-dou]", "идёт [i-dyot]", "хожу [kha-jou]", "ходит [kho-dit]"],
        correct: 2,
        hints: 2,
        hintText: ["Chaque jour = habitude = verbe indéterminé.", "À la 1re personne, ходить devient хожу."],
      },
      difficulty: 2
    },
    {
      id: "a3",
      title: "Extrait de Tchekhov : « Каштанка »",
      type: "reading",
      content: `<p>Un court extrait adapté de Tchekhov.</p>
        <div class="poem-box">
          <p class="poem-ru">Молодая рыжая собака бегала по тротуару. Она потеряла хозяина и не знала, куда идти. Был вечер. Собака села на тротуар и тихо завыла.</p>
          <p class="poem-fr">Un jeune chien roux courait sur le trottoir. Il avait perdu son maître et ne savait pas où aller. C’était le soir. Le chien s’assit sur le trottoir et se mit à hurler doucement.</p>
        </div>
        <div class="vocab-list" style="margin-top:1rem">
          <div class="vocab-item"><span class="ru">потеряла</span><span class="fr">a perdu (passé fém.)</span><span class="pron">[pa-tye-rya-la]</span></div>
          <div class="vocab-item"><span class="ru">хозяин</span><span class="fr">maître</span><span class="pron">[kha-zya-in]</span></div>
          <div class="vocab-item"><span class="ru">завыла</span><span class="fr">s’est mise à hurler</span><span class="pron">[za-vy-la]</span></div>
        </div>`,
      examples: ["Потеряла — a perdu", "Хозяин — le maître"],
      exercise: {
        type: "choice",
        question: "Pourquoi le chien est-il triste ?",
        options: ["Il a faim", "Il a perdu son maître", "Il n’aime pas la ville", "Il a froid"],
        correct: 1,
        hints: 0,
      },
      difficulty: 2
    },
    {
      id: "a4",
      title: "L’aspect verbal : perfectif / imperfectif",
      type: "grammar",
      content: `<p>Chaque verbe russe a deux aspects : notion fondamentale.</p>
        <div class="example-box">
          <p><strong>Imperfectif (HCB)</strong> — action en cours, habituelle :<br>Я <strong>читал</strong> книгу. — Je lisais (sans dire si fini).</p>
          <p><strong>Perfectif (CB)</strong> — action accomplie, résultat :<br>Я <strong>прочитал</strong> книгу. — J’ai lu (fini).</p>
        </div>
        <table class="case-table" style="margin-top:1rem">
          <tr><th>Imperfectif</th><th>Perfectif</th><th>Préfixe</th></tr>
          <tr><td>делать</td><td>сделать</td><td>с-</td></tr>
          <tr><td>читать</td><td>прочитать</td><td>про-</td></tr>
          <tr><td>писать</td><td>написать</td><td>на-</td></tr>
        </table>`,
      examples: ["Делать / Сделать — faire", "Читать / Прочитать — lire"],
      exercise: {
        type: "error",
        question: "« Вчера я прочитал эту книгу за час. » — Correcte ?",
        options: ["Oui, correcte", "Non, incorrecte"],
        correct: 0,
        hints: 1,
        hintText: ["Le perfectif прочитал indique une action accomplie — c’est correct ici."],
      },
      difficulty: 2
    },
    {
      id: "a5",
      title: "Les médias et l’actualité",
      type: "vocab",
      content: `<p>Comprendre les médias russes.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">газета</span><span class="fr">journal</span><span class="pron">[ga-zyé-ta]</span></div>
          <div class="vocab-item"><span class="ru">новости</span><span class="fr">actualités</span><span class="pron">[no-vas-ti]</span></div>
          <div class="vocab-item"><span class="ru">статья</span><span class="fr">article</span><span class="pron">[sta-t\'ya]</span></div>
          <div class="vocab-item"><span class="ru">журналист</span><span class="fr">journaliste</span><span class="pron">[zhour-na-list]</span></div>
          <div class="vocab-item"><span class="ru">интернет</span><span class="fr">internet</span><span class="pron">[in-tyer-net]</span></div>
          <div class="vocab-item"><span class="ru">телевидение</span><span class="fr">télévision</span><span class="pron">[ti-lye-vi-dye-ni-ye]</span></div>
        </div>`,
      examples: ["Газета — journal", "Новости — actualités"],
      exercise: {
        type: "choice",
        question: "Comment dit-on « actualités » en russe ?",
        options: ["газета", "журнал", "новости", "статья"],
        correct: 2,
        hints: 0,
      },
      difficulty: 1
    },
    {
      id: "a6",
      title: "Production écrite : décrire une image",
      type: "exercise",
      content: `<p>Décrire une image en russe.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">На картине я вижу...</span><span class="fr">Sur l'image je vois...</span></div>
          <div class="vocab-item"><span class="ru">На переднем плане</span><span class="fr">Au premier plan</span></div>
          <div class="vocab-item"><span class="ru">На заднем плане</span><span class="fr">À l'arrière-plan</span></div>
        </div>
        <div style="margin-top:1rem;padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px">
          <p style="font-size:0.85rem;color:var(--text-secondary)"><strong>Exemple :</strong> На этой фотографии я вижу красивый пейзаж. На переднем плане — река.</p>
        </div>`,
      examples: ["На картине я вижу... — Sur l'image je vois..."],
      exercise: {
        type: "choice",
        question: "Comment dit-on « au premier plan » en russe ?",
        options: ["на заднем плане", "на переднем плане", "в центре", "слева"],
        correct: 1,
        hints: 1,
        hintText: ["« Перед » signifie « devant »."],
      },
      difficulty: 2
    },
    {
      id: "a7",
      title: "La littérature russe classique",
      type: "culture",
      content: `<p>La Russie a produit certains des plus grands écrivains.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">Пушкин</span><span class="fr">Pouchkine (« Eugène Onéguine »)</span><span class="pron">[pouch-kine]</span></div>
          <div class="vocab-item"><span class="ru">Толстой</span><span class="fr">Tolstoï (« Guerre et Paix »)</span><span class="pron">[tal-stoï]</span></div>
          <div class="vocab-item"><span class="ru">Достоевский</span><span class="fr">Dostoïevski (« Crime et Châtiment »)</span><span class="pron">[da-sta-yef-skiï]</span></div>
          <div class="vocab-item"><span class="ru">Чехов</span><span class="fr">Tchekhov (nouvelles, théâtre)</span><span class="pron">[tché-khaf]</span></div>
          <div class="vocab-item"><span class="ru">Булгаков</span><span class="fr">Boulgakov (« Le Maître et Marguerite »)</span><span class="pron">[boul-ga-kaf]</span></div>
        </div>`,
      examples: ["Пушкин — Pouchkine", "Толстой — Tolstoï"],
      exercise: {
        type: "choice",
        question: "Qui a écrit « Le Maître et Marguerite » ?",
        options: ["Tolstoï", "Dostoïevski", "Boulgakov", "Tchekhov"],
        correct: 2,
        hints: 1,
        hintText: ["Son nom commence par Б et se termine par -ов. Roman sur le diable à Moscou."],
      },
      difficulty: 1
    },
    {
      id: "a8",
      title: "Texte : « Путешествие » (Voyage)",
      type: "reading",
      content: `<p>Un texte au passé sur un voyage à Moscou.</p>
        <div class="poem-box">
          <p class="poem-ru">В прошлом году я поехал в Москву. Я ехал на поезде двое суток. В Москве я посетил Красную площадь, Кремль и Третьяковскую галерею. Я попробовал настоящий русский борщ. Мне очень понравилось!</p>
          <p class="poem-fr">L'année dernière, je suis allé à Moscou. J'ai voyagé 2 jours en train. J'ai visité la Place Rouge, le Kremlin et la Galerie Tretiakov. J'ai goûté un vrai bortsch. J'ai adoré !</p>
        </div>`,
      examples: ["Поехал — je suis allé (en transport)", "Посетил — j’ai visité"],
      exercise: {
        type: "choice",
        question: "Où le narrateur est-il allé ?",
        options: ["À Saint-Pétersbourg", "À Moscou", "À Paris", "À la campagne"],
        correct: 1,
        hints: 0,
      },
      difficulty: 1
    }
  ],
  // ===== NIVEAU 4 — EXPERTE (B2) =====
  expert: [
    {
      id: "e1",
      title: "Le monde professionnel",
      type: "vocab",
      content: `<p>Vocabulaire essentiel pour le milieu professionnel.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">работа</span><span class="fr">travail</span><span class="pron">[ra-bo-ta]</span></div>
          <div class="vocab-item"><span class="ru">собрание</span><span class="fr">réunion</span><span class="pron">[sa-bra-ni-ye]</span></div>
          <div class="vocab-item"><span class="ru">резюме</span><span class="fr">CV</span><span class="pron">[rye-zyu-mé]</span></div>
          <div class="vocab-item"><span class="ru">собеседование</span><span class="fr">entretien</span><span class="pron">[sa-byi-syé-da-va-ni-ye]</span></div>
          <div class="vocab-item"><span class="ru">зарплата</span><span class="fr">salaire</span><span class="pron">[zar-pla-ta]</span></div>
          <div class="vocab-item"><span class="ru">командировка</span><span class="fr">voyage d'affaires</span><span class="pron">[ka-man-di-rov-ka]</span></div>
        </div>`,
      examples: ["Работа — travail", "Собрание — réunion", "Зарплата — salaire"],
      exercise: {
        type: "choice",
        question: "Comment dit-on « entretien » en russe ?",
        options: ["собрание", "собеседование", "командировка", "резюме"],
        correct: 1,
        hints: 1,
        hintText: ["Ce mot contient « беседа » qui signifie « conversation »."],
      },
      difficulty: 2
    },
    {
      id: "e2",
      title: "Les phrases conditionnelles",
      type: "grammar",
      content: `<p>Le conditionnel russe avec <strong>бы</strong> + passé.</p>
        <div class="example-box">
          <p><strong>Si réel</strong> (si + présent → futur) :<br><strong>Если</strong> будет погода, мы <strong>пойдём</strong> гулять.</p>
          <p><strong>Si irréel</strong> (si + passé → бы + passé) :<br><strong>Если бы</strong> я знал, я <strong>бы</strong> пришёл.</p>
        </div>
        <table class="case-table" style="margin-top:1rem">
          <tr><th>Type</th><th>Russe</th><th>Français</th></tr>
          <tr><td>Réelle</td><td>Если + présent, + futur</td><td>Si + présent, + futur</td></tr>
          <tr><td>Iréelle</td><td>Если бы + passé, + бы + passé</td><td>Si + imparfait, + conditionnel</td></tr>
        </table>`,
      examples: ["Если бы я знал... — Si j’avais su..."],
      exercise: {
        type: "fill",
        question: "Complétez : « Если бы я ______ (знать), я бы пришёл. » (4 lettres)",
        correct: "знал",
        hints: 2,
        hintText: ["Le verbe знать (savoir) au passé masculin.", "Radical зна- + -л = знал"],
      },
      difficulty: 3
    },
    {
      id: "e3",
      title: "Article de presse adapté",
      type: "reading",
      content: `<p>Un article adapté sur la technologie en Russie.</p>
        <div class="poem-box">
          <p class="poem-ru">Российские учёные разработали новый материал. Этот материал в пять раз прочнее бетона и при этом легче. Проект получил 50 миллионов рублей.</p>
          <p class="poem-fr">Des scientifiques russes ont développé un nouveau matériau. Il est 5 fois plus résistant que le béton et plus léger. Le projet a reçu 50 millions de roubles.</p>
        </div>`,
      examples: ["Учёные — scientifiques", "Разработали — ont développé"],
      exercise: {
        type: "choice",
        question: "Quelle est la qualité du nouveau matériau ?",
        options: ["Moins cher", "Plus résistant ET plus léger", "Biodégradable", "Imperméable"],
        correct: 1,
        hints: 1,
        hintText: ["Le texte dit « в пять раз прочнее бетона и при этом легче »."],
      },
      difficulty: 2
    },
    {
      id: "e4",
      title: "Le gérondif et le participe",
      type: "grammar",
      content: `<p>Les formes verbales non conjuguées enrichissent l’expression.</p>
        <div class="example-box">
          <p><strong>Причастие (Participe)</strong><br>чита<strong>ющий</strong> студент — l’étudiant qui lit<br>прочита<strong>нная</strong> книга — le livre lu</p>
          <p><strong>Деепричастие (Gérondif)</strong><br><strong>Читая</strong> книгу, он пил чай. — En lisant...<br><strong>Прочитав</strong> книгу, он лёг спать. — Après avoir lu...</p>
        </div>`,
      examples: ["Читающий — qui lit", "Читая — en lisant"],
      exercise: {
        type: "choice",
        question: "« ______ книгу, он закрыл глаза. » (Après avoir lu...)",
        options: ["Читая", "Прочитав", "Читающий", "Прочитанный"],
        correct: 1,
        hints: 2,
        hintText: ["L’action est antérieure et terminée.", "Le gérondif passé se forme avec -в pour les verbes perfectifs."],
      },
      difficulty: 3
    },
    {
      id: "e5",
      title: "La politique et la société",
      type: "vocab",
      content: `<p>Vocabulaire pour comprendre la société russe.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">правительство</span><span class="fr">gouvernement</span><span class="pron">[pra-vi-tyel\'-stvo]</span></div>
          <div class="vocab-item"><span class="ru">закон</span><span class="fr">loi</span><span class="pron">[za-kon]</span></div>
          <div class="vocab-item"><span class="ru">права</span><span class="fr">droits</span><span class="pron">[pra-va]</span></div>
          <div class="vocab-item"><span class="ru">свобода</span><span class="fr">liberté</span><span class="pron">[sva-bo-da]</span></div>
          <div class="vocab-item"><span class="ru">выборы</span><span class="fr">élections</span><span class="pron">[vy-bo-ry]</span></div>
          <div class="vocab-item"><span class="ru">гражданин</span><span class="fr">citoyen</span><span class="pron">[grazh-da-nin]</span></div>
        </div>`,
      examples: ["Правительство — gouvernement", "Свобода — liberté"],
      exercise: {
        type: "choice",
        question: "Quel mot signifie « liberté » ?",
        options: ["власть", "свобода", "сила", "воля"],
        correct: 1,
        hints: 1,
        hintText: ["Commence par « сво- » comme « свой » (son propre)."],
      },
      difficulty: 2
    },
    {
      id: "e6",
      title: "Traduction FR → RU",
      type: "exercise",
      content: `<p>Traduisez ces phrases du français vers le russe.</p>
        <div style="padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px;margin:1rem 0">
          <p style="font-size:0.85rem;color:var(--text-secondary)">À traduire mentalement :<br>1. J’ai lu ce livre hier. (perfectif, masc.)<br>2. Elle travaille dans un grand bureau.<br>3. Si j’avais de l’argent, j’achèterais une voiture.</p>
        </div>`,
      examples: [],
      exercise: {
        type: "choice",
        question: "Traduction de « J’ai lu ce livre hier » (perfectif, passé masculin) :",
        options: ["Я читаю эту книгу вчера", "Я читал эту книгу вчера", "Я прочитал эту книгу вчера", "Я прочитаю эту книгу вчера"],
        correct: 2,
        hints: 2,
        hintText: ["Il faut le perfectif car l’action est terminée.", "Le perfectif de читать est прочитать."],
      },
      difficulty: 3
    },
    {
      id: "e7",
      title: "Le cinéma russe",
      type: "culture",
      content: `<p>Le cinéma russe est riche de chefs-d’œuvre.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">Тарковский</span><span class="fr">Tarkovski (« Stalker »)</span><span class="pron">[tar-kov-skiï]</span></div>
          <div class="vocab-item"><span class="ru">Михалков</span><span class="fr">Mikhalkov (« Le Soleil trompeur »)</span><span class="pron">[mi-khal-kov]</span></div>
          <div class="vocab-item"><span class="ru">Звягинцев</span><span class="fr">Zviaguintsev (« Léviathan »)</span><span class="pron">[zvyi-ghin-tsef]</span></div>
          <div class="vocab-item"><span class="ru">фильм</span><span class="fr">film</span><span class="pron">[fil\'m]</span></div>
          <div class="vocab-item"><span class="ru">режиссёр</span><span class="fr">réalisateur</span><span class="pron">[rye-jis-syor]</span></div>
        </div>`,
      examples: ["Тарковский — Tarkovski", "Фильм — film"],
      exercise: {
        type: "choice",
        question: "Qui a réalisé « Stalker » ?",
        options: ["Михалков", "Бондарчук", "Тарковский", "Звягинцев"],
        correct: 2,
        hints: 1,
        hintText: ["Œuvre lente et contemplative, considéré comme l’un des plus grands cinéastes."],
      },
      difficulty: 1
    },
    {
      id: "e8",
      title: "Poème de Pouchkine : « Я вас любил »",
      type: "reading",
      content: `<p>Analysons un poème de Pouchkine en version originale.</p>
        <div class="poem-box">
          <p class="poem-ru"><strong>Я вас любил</strong><br><br>
Я вас любил: любовь ещё, быть может,<br>
В душе моей угасла не совсем;<br>
Но пусть она вас больше не тревожит;<br>
Я не хочу печалить вас ничем.</p>
          <p class="poem-fr">Je vous aimais : l’amour peut-être<br>
Dans mon âme n’est pas encore éteint ;<br>
Mais qu’il ne vous trouble plus ;<br>
Je ne veux vous attrister de rien.</p>
        </div>`,
      examples: ["Любил — j’aimais", "Душа — âme"],
      exercise: {
        type: "choice",
        question: "Quel sentiment domine ce poème ?",
        options: ["La colère", "Un amour désintéressé et tendre", "La joie", "L’indifférence"],
        correct: 1,
        hints: 0,
      },
      difficulty: 2
    }
  ],
  // ===== NIVEAU 5 — MAÎTRE (C1) =====
  maitre: [
    {
      id: "m1",
      title: "Expressions idiomatiques (20)",
      type: "vocab",
      content: `<p>20 expressions pour parler comme un natif.</p>
        <div class="idiom-list">
          <div class="idiom-item"><span class="ru">Бить баклуши</span><span class="fr">Ne rien faire</span><span class="litr">litt. « battre les bâtons »</span></div>
          <div class="idiom-item"><span class="ru">Витать в облаках</span><span class="fr">Être dans la lune</span><span class="litr">litt. « planer dans les nuages »</span></div>
          <div class="idiom-item"><span class="ru">Дело в шляпе</span><span class="fr">C’est dans la poche</span><span class="litr">litt. « l’affaire dans le chapeau »</span></div>
          <div class="idiom-item"><span class="ru">Кот наплакал</span><span class="fr">Très peu (quantité)</span><span class="litr">litt. « le chat a pleuré »</span></div>
          <div class="idiom-item"><span class="ru">Медвежья услуга</span><span class="fr">Service maladroit qui nuit</span><span class="litr">litt. « service d’ours »</span></div>
          <div class="idiom-item"><span class="ru">Ни пуха ни пера</span><span class="fr">Bonne chance !</span><span class="litr">litt. « ni duvet ni plume »</span></div>
          <div class="idiom-item"><span class="ru">Как рыба в воде</span><span class="fr">Comme un poisson dans l’eau</span><span class="litr">litt. identique</span></div>
          <div class="idiom-item"><span class="ru">Собаку съел</span><span class="fr">Être expert</span><span class="litr">litt. « a mangé un chien »</span></div>
          <div class="idiom-item"><span class="ru">Убить двух зайцев</span><span class="fr">Faire d’une pierre 2 coups</span><span class="litr">litt. « tuer 2 lièvres »</span></div>
          <div class="idiom-item"><span class="ru">Водить за нос</span><span class="fr">Mener en bateau</span><span class="litr">litt. « mener par le nez »</span></div>
          <div class="idiom-item"><span class="ru">Время летит</span><span class="fr">Le temps passe vite</span><span class="litr">litt. « le temps vole »</span></div>
          <div class="idiom-item"><span class="ru">Душа в душу</span><span class="fr">En parfaite harmonie</span><span class="litr">litt. « âme à âme »</span></div>
        </div>`,
      examples: ["Бить баклуши — ne rien faire", "Дело в шляпе — c’est dans la poche"],
      exercise: {
        type: "choice",
        question: "Que signifie « Кот наплакал » ?",
        options: ["Le chat a pleuré", "Il y en a très peu", "C’est triste", "Le chat est content"],
        correct: 1,
        hints: 1,
        hintText: ["Imaginez un chat qui pleure — il n’y aura pas beaucoup de larmes."],
      },
      difficulty: 2
    },
    {
      id: "m2",
      title: "Les nuances aspectuelles",
      type: "grammar",
      content: `<p>Maîtriser les nuances subtiles entre perfectif et imperfectif.</p>
        <div class="example-box">
          <p><strong>Action générale vs résultat :</strong><br>Ты <strong>читал</strong> эту книгу? (as-tu déjà lu ?)<br>Ты <strong>прочитал</strong> эту книгу? (l’as-tu finie ?)</p>
          <p><strong>Action annulée :</strong><br>Я <strong>открывал</strong> окно. (j’ai ouvert et refermé)<br>Я <strong>открыл</strong> окно. (j’ai ouvert, il est ouvert)</p>
        </div>`,
      examples: ["Читал vs Прочитал — action générale vs résultat"],
      exercise: {
        type: "error",
        question: "« Я открывал окно, и оно до сих пор открыто. » (fenêtre ouverte) — Correct ?",
        options: ["Oui, correct", "Non, incorrect"],
        correct: 1,
        hints: 2,
        hintText: ["Открывал (imperfectif) implique une action annulée.", "Pour une fenêtre qui reste ouverte, il faut открыл (perfectif)."],
      },
      difficulty: 3
    },
    {
      id: "m3",
      title: "Essai philosophique adapté",
      type: "reading",
      content: `<p>Un texte abstrait sur le temps et la vie.</p>
        <div class="poem-box">
          <p class="poem-ru">Время — это странная вещь. Мы думаем, что у нас его много, но оно проходит незаметно. Каждый момент нашей жизни — это выбор. Мы выбираем, как его прожить. И только потом мы понимаем, насколько он был ценен.</p>
          <p class="poem-fr">Le temps est une chose étrange. Nous pensons en avoir beaucoup, mais il passe inaperçu. Chaque moment de notre vie est un choix. Nous choisissons comment le vivre. Et ce n’est qu’après que nous comprenons sa valeur.</p>
        </div>`,
      examples: ["Время — le temps", "Жизнь — la vie"],
      exercise: {
        type: "choice",
        question: "Selon le texte, qu’est-ce que chaque moment de notre vie ?",
        options: ["Une obligation", "Un choix", "Un hasard", "Une souffrance"],
        correct: 1,
        hints: 0,
      },
      difficulty: 3
    },
    {
      id: "m4",
      title: "Le langage soutenu",
      type: "vocab",
      content: `<p>Vocabulaire formel et littéraire pour s’exprimer avec élégance.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">искусство</span><span class="fr">art</span><span class="pron">[is-kous-stvo]</span></div>
          <div class="vocab-item"><span class="ru">бытие</span><span class="fr">l’être, l’existence</span><span class="pron">[by-ti-ye]</span></div>
          <div class="vocab-item"><span class="ru">сознание</span><span class="fr">conscience</span><span class="pron">[saz-na-ni-ye]</span></div>
          <div class="vocab-item"><span class="ru">восприятие</span><span class="fr">perception</span><span class="pron">[vas-pri-ya-ti-ye]</span></div>
          <div class="vocab-item"><span class="ru">прекрасный</span><span class="fr">magnifique (soutenu)</span><span class="pron">[pri-kras-nyï]</span></div>
          <div class="vocab-item"><span class="ru">неизбежный</span><span class="fr">inévitable</span><span class="pron">[nye-iz-bezh-nyï]</span></div>
        </div>`,
      examples: ["Искусство — art", "Бытие — l’être"],
      exercise: {
        type: "choice",
        question: "Quel mot signifie « conscience » ?",
        options: ["сознание", "бытие", "восприятие", "искусство"],
        correct: 0,
        hints: 1,
        hintText: ["Vient de « знать » (savoir) avec le préfixe со-"],
      },
      difficulty: 3
    },
    {
      id: "m5",
      title: "Discours indirect et concordance des temps",
      type: "grammar",
      content: `<p>Rapporter les paroles de quelqu’un en russe.</p>
        <div class="example-box">
          <p><strong>Discours direct :</strong><br>Она сказала: « Я завтра приду. »</p>
          <p><strong>Discours indirect :</strong><br>Она сказала, что завтра придёт.</p>
          <p><strong>Question indirecte :</strong><br>Он спросил, <strong>когда</strong> она придёт.</p>
          <p style="font-size:0.85rem;color:var(--text-muted)">En russe, le temps du verbe ne change pas (pas de concordance comme en français).</p>
        </div>`,
      examples: ["Она сказала, что... — Elle a dit que..."],
      exercise: {
        type: "error",
        question: "« Он сказал, что он пришёл. » (Il a dit qu’il est venu.) — Correct ?",
        options: ["Oui, correct", "Non, devrait être приходит"],
        correct: 0,
        hints: 1,
        hintText: ["En russe, pas de concordance des temps. Le perfectif пришёл est correct."],
      },
      difficulty: 3
    },
    {
      id: "m6",
      title: "Analyse de style : formel vs informel",
      type: "exercise",
      content: `<p>Comparez ces deux textes de style différent.</p>
        <div style="padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px;margin:1rem 0">
          <p><strong>Style formel (lettre officielle) :</strong><br>Уважаемый господин! Прошу Вас рассмотреть моё заявление...</p>
          <p><strong>Style informel (texto) :</strong><br>Привет! Посмотри моё заявление, плз...</p>
        </div>`,
      examples: ["Уважаемый господин — Cher Monsieur (formel)"],
      exercise: {
        type: "choice",
        question: "Quelle formule est typique du style informel ?",
        options: ["Уважаемый господин", "Прошу Вас", "Привет! Посмотри...", "С уважением"],
        correct: 2,
        hints: 1,
        hintText: ["Les textos utilisent des salutations familières et des abréviations."],
      },
      difficulty: 2
    },
    {
      id: "m7",
      title: "La Russie contemporaine",
      type: "culture",
      content: `<p>Art, société et culture dans la Russie d’aujourd’hui.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">современное искусство</span><span class="fr">art contemporain</span><span class="pron">[sav-rye-mye-nna-ye is-kous-stva]</span></div>
          <div class="vocab-item"><span class="ru">технологии</span><span class="fr">technologies</span><span class="pron">[tyekh-na-lo-gi-i]</span></div>
          <div class="vocab-item"><span class="ru">образование</span><span class="fr">éducation</span><span class="pron">[ab-ra-za-va-ni-ye]</span></div>
          <div class="vocab-item"><span class="ru">культура</span><span class="fr">culture</span><span class="pron">[koul\'-tou-ra]</span></div>
          <div class="vocab-item"><span class="ru">Яндекс</span><span class="fr">Yandex (moteur de recherche russe)</span><span class="pron">[yan-dyeks]</span></div>
        </div>
        <p style="margin-top:1rem;font-style:normal;color:var(--text-muted)">La scène artistique russe contemporaine est dynamique : les écoles d’art de Moscou et Saint-Pétersbourg forment des artistes reconnus mondialement.</p>`,
      examples: ["Современное искусство — art contemporain"],
      exercise: {
        type: "choice",
        question: "Quel est le principal moteur de recherche russe ?",
        options: ["Google", "Yandex", "Bing", "Mail.ru"],
        correct: 1,
        hints: 0,
      },
      difficulty: 2
    },
    {
      id: "m8",
      title: "Nouvelle de Boulgakov (extrait)",
      type: "reading",
      content: `<p>Un extrait adapté de Boulgakov.</p>
        <div class="poem-box">
          <p class="poem-ru">Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились двое граждан. Один из них был одет в серый летний пиджак. Он был невысок ростом, широк в плечах и черен волосами.</p>
          <p class="poem-fr">Un printemps, à l’heure d’un coucher de soleil d’une chaleur inouïe, à Moscou, aux Étangs du Patriarche, deux citoyens apparurent. L’un d’eux portait un veston d’été gris. Il était de petite taille, large d’épaules et avait les cheveux noirs.</p>
        </div>
        <div class="vocab-list" style="margin-top:1rem">
          <div class="vocab-item"><span class="ru">однажды</span><span class="fr">un jour</span><span class="pron">[ad-nazh-dy]</span></div>
          <div class="vocab-item"><span class="ru">появились</span><span class="fr">apparurent</span><span class="pron">[pa-ya-vi-lis\']</span></div>
          <div class="vocab-item"><span class="ru">гражданин</span><span class="fr">citoyen</span><span class="pron">[grazh-da-nin]</span></div>
        </div>`,
      examples: ["Однажды... появились... — Un jour apparurent..."],
      exercise: {
        type: "choice",
        question: "Quel célèbre roman commence par cette scène ?",
        options: ["Guerre et Paix", "Crime et Châtiment", "Le Maître et Marguerite", "Les Âmes mortes"],
        correct: 2,
        hints: 1,
        hintText: ["C’est l’incipit du roman le plus célèbre de Boulgakov."],
      },
      difficulty: 3
    }
  ]
};


// ================================================================
// CHAPTER EXAMS
// ================================================================

const CHAPTER_EXAMS = {
  debutant: {
    title: "Examen du Niveau Débutante",
    passingScore: 80,
    questions: [
      { question: "Comment se prononce la lettre « В » en russe ?", options: ["[b]", "[v]", "[f]", "[g]"], correct: 1, type: "mix" },
      { question: "Quel mot signifie « bonjour » (formel) ?", options: ["Привет", "Здравствуйте", "Пока", "Спасибо"], correct: 1, type: "mix" },
      { question: "Quel pronom signifie « nous » ?", options: ["я", "ты", "мы", "они"], correct: 2, type: "mix" },
      { question: "Quel nombre est « пять » ?", options: ["3", "5", "7", "10"], correct: 1, type: "mix" },
      { question: "Quel est le genre de « книга » ?", options: ["Masculin", "Féminin", "Neutre", "Variable"], correct: 1, type: "mix" },
      { question: "Comment dit-on « merci » ?", options: ["Пожалуйста", "Спасибо", "Привет", "До свидания"], correct: 1, type: "mix" },
      { question: "Dans le texte « Меня зовут Анна », живу signifie ?", options: ["Je vis/j’habite", "Je lis", "J’aime", "Je travaille"], correct: 0, type: "mix" },
      { question: "Quel instrument traditionnel a 3 cordes ?", options: ["Violon", "Guitare", "Balalaïka", "Piano"], correct: 2, type: "mix" },
      { question: "Quel est le symbole du signe mou « ь » ?", options: ["Il allonge le son", "Il adoucit la consonne", "Il se prononce [y]", "Il est toujours muet"], correct: 1, type: "mix" },
      { question: "Comment dire « je m’appelle » en russe ?", options: ["Я есть", "Меня зовут", "Я зовут", "Меня есть"], correct: 1, type: "mix" }
    ]
  },
  intermediaire: {
    title: "Examen du Niveau Intermédiaire",
    passingScore: 80,
    questions: [
      { question: "Comment dit-on « eau » ?", options: ["вино", "вода", "молоко", "чай"], correct: 1, type: "mix" },
      { question: "Quelle est la forme féminine de « быть » au passé ?", options: ["был", "была", "было", "были"], correct: 1, type: "mix" },
      { question: "Que commande-t-on dans le dialogue au restaurant ?", options: ["Du café", "Du bortsch et une salade", "De la viande", "Du vin"], correct: 1, type: "mix" },
      { question: "Comment dit-on « tout droit » ?", options: ["налево", "направо", "прямо", "назад"], correct: 2, type: "mix" },
      { question: "Quel est l’accusatif de « книга » ?", options: ["книга", "книгу", "книги", "книгой"], correct: 1, type: "mix" },
      { question: "« Вчера мы ______ в ресторане. » (быть, pluriel)", options: ["был", "была", "было", "были"], correct: 3, type: "mix" },
      { question: "Quelle fête est la plus importante en Russie ?", options: ["Noël", "Pâques", "Nouvel An", "Maslenitsa"], correct: 2, type: "mix" },
      { question: "Dans « Мой день », à quelle heure la personne se lève ?", options: ["6h", "7h", "8h", "9h"], correct: 1, type: "mix" },
      { question: "Quel suffixe pour le passé pluriel ?", options: ["-л", "-ла", "-ло", "-ли"], correct: 3, type: "mix" },
      { question: "Que signifie « извините » ?", options: ["Bonjour", "Excusez-moi", "Merci", "Au revoir"], correct: 1, type: "mix" }
    ]
  },
  avance: {
    title: "Examen du Niveau Avancé",
    passingScore: 80,
    questions: [
      { question: "Quel mot signifie « joie » ?", options: ["грусть", "радость", "страх", "гнев"], correct: 1, type: "mix" },
      { question: "Verbe de mouvement pour habitude à pied ?", options: ["идти", "ехать", "ходить", "ездить"], correct: 2, type: "mix" },
      { question: "Qui a perdu son maître dans l’extrait de Tchekhov ?", options: ["Un chat", "Un chien", "Un oiseau", "Un enfant"], correct: 1, type: "mix" },
      { question: "Quel aspect exprime une action accomplie ?", options: ["Imperfectif", "Perfectif", "Les deux", "Aucun"], correct: 1, type: "mix" },
      { question: "Perfectif de « делать » ?", options: ["проделать", "сделать", "наделать", "поделать"], correct: 1, type: "mix" },
      { question: "« На переднем плане » signifie ?", options: ["À l’arrière-plan", "Au premier plan", "Au centre", "À gauche"], correct: 1, type: "mix" },
      { question: "Qui a écrit « Le Maître et Marguerite » ?", options: ["Tolstoï", "Dostoïevski", "Boulgakov", "Tchekhov"], correct: 2, type: "mix" },
      { question: "Dans « Путешествие », comment le narrateur voyage-t-il ?", options: ["En avion", "En train", "En voiture", "À pied"], correct: 1, type: "mix" },
      { question: "Comment dit-on « actualités » en russe ?", options: ["газета", "новости", "статья", "журнал"], correct: 1, type: "mix" },
      { question: "Quel écrivain est connu pour ses nouvelles et son théâtre ?", options: ["Pouchkine", "Tolstoï", "Tchekhov", "Boulgakov"], correct: 2, type: "mix" }
    ]
  },
  expert: {
    title: "Examen du Niveau Experte",
    passingScore: 80,
    questions: [
      { question: "Comment dit-on « entretien » (d’embauche) ?", options: ["собрание", "собеседование", "командировка", "зарплата"], correct: 1, type: "mix" },
      { question: "Quel mot introduit une condition irréelle en russe ?", options: ["если", "если бы", "когда", "потому что"], correct: 1, type: "mix" },
      { question: "Dans l’article de presse, le nouveau matériau est...", options: ["Moins cher", "Plus résistant et plus léger", "Plus fragile", "Biodégradable"], correct: 1, type: "mix" },
      { question: "Quel suffixe pour le gérondif passé (action antérieure) ?", options: ["-я", "-в", "-ущий", "-нный"], correct: 1, type: "mix" },
      { question: "Quel mot signifie « liberté » ?", options: ["власть", "свобода", "закон", "выборы"], correct: 1, type: "mix" },
      { question: "Perfectif de « читать » ?", options: ["начитать", "прочитать", "почитать", "зачитать"], correct: 1, type: "mix" },
      { question: "Qui a réalisé « Stalker » ?", options: ["Mikhalkov", "Bondartchouk", "Tarkovski", "Zviaguintsev"], correct: 2, type: "mix" },
      { question: "Dans le poème de Pouchkine, « душа » signifie ?", options: ["L’amour", "L’âme", "La vie", "La tristesse"], correct: 1, type: "mix" },
      { question: "Combien de temps le roman de Boulgakov a-t-il été censuré ?", options: ["10 ans", "26 ans", "5 ans", "1 an"], correct: 1, type: "mix" },
      { question: "« Правительство » signifie ?", options: ["Gouvernement", "Entreprise", "Société", "École"], correct: 0, type: "mix" }
    ]
  },
  maitre: {
    title: "Examen du Niveau Maître",
    passingScore: 80,
    questions: [
      { question: "Que signifie « Бить баклуши » ?", options: ["Travailler dur", "Ne rien faire", "Casser quelque chose", "Jouer de la musique"], correct: 1, type: "mix" },
      { question: "Quel verbe imperfectif implique une action annulée ?", options: ["открыл", "открывал", "откроет", "открывает"], correct: 1, type: "mix" },
      { question: "Selon l’essai, chaque moment de notre vie est...", options: ["Une obligation", "Un choix", "Un hasard", "Un destin"], correct: 1, type: "mix" },
      { question: "Quel mot signifie « conscience » ?", options: ["сознание", "бытие", "восприятие", "искусство"], correct: 0, type: "mix" },
      { question: "En russe, au discours indirect, le temps du verbe...", options: ["Change au passé", "Ne change pas", "Devient conditionnel", "N’existe pas"], correct: 1, type: "mix" },
      { question: "Quel mot est typique du style informel dans les textos ?", options: ["Уважаемый", "Прошу", "Привет", "Рассмотреть"], correct: 2, type: "mix" },
      { question: "Quel est le moteur de recherche russe le plus connu ?", options: ["Google", "Yandex", "Bing", "Mail.ru"], correct: 1, type: "mix" },
      { question: "Quel roman de Boulgakov commence aux Étangs du Patriarche ?", options: ["Guerre et Paix", "Le Maître et Marguerite", "Les Âmes mortes", "Un héros de notre temps"], correct: 1, type: "mix" },
      { question: "« Кот наплакал » exprime...", options: ["Une grande quantité", "Une très petite quantité", "Une méchanceté", "Un événement heureux"], correct: 1, type: "mix" },
      { question: "« Бытие » est un mot de quel registre ?", options: ["Familier", "Soutenu / philosophique", "Vulgaire", "Technique"], correct: 1, type: "mix" }
    ]
  }
};

// ================================================================
// MODAL FUNCTIONS
// ================================================================


function showModal(html) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = html;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('modal-body').innerHTML = '';
}

// ================================================================
// PERSISTENCE HELPERS
// ================================================================

function getCompletedLessons(levelId) {
  const key = 'lamia_lessons_' + levelId;
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : [];
}

function setCompletedLessons(levelId, ids) {
  localStorage.setItem('lamia_lessons_' + levelId, JSON.stringify(ids));
}

function getUnlockedLevels() {
  const saved = localStorage.getItem('lamia_unlocked');
  if (saved) return JSON.parse(saved);
  const legacy = localStorage.getItem('lamia_level');
  return legacy ? [legacy] : ['debutant'];
}

function unlockLevel(levelId) {
  const unlocked = getUnlockedLevels();
  if (!unlocked.includes(levelId)) {
    unlocked.push(levelId);
    localStorage.setItem('lamia_unlocked', JSON.stringify(unlocked));
  }
}

function getExamResult(levelId) {
  const key = 'lamia_exam_' + levelId;
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : null;
}

function setExamResult(levelId, result) {
  localStorage.setItem('lamia_exam_' + levelId, JSON.stringify(result));
}

function isLevelUnlocked(levelId) {
  const unlocked = getUnlockedLevels();
  return unlocked.includes(levelId);
}

function getLevelIndex(levelId) {
  return LEVELS.findIndex(l => l.id === levelId);
}

function getNextLevelId(levelId) {
  const idx = getLevelIndex(levelId);
  if (idx >= 0 && idx < LEVELS.length - 1) return LEVELS[idx + 1].id;
  return null;
}

// ================================================================
// UPDATE STATS
// ================================================================

function updateStats() {
  const saved = localStorage.getItem('lamia_results');
  if (saved) {
    const data = JSON.parse(saved);
    const levelId = data.levelId || localStorage.getItem('lamia_level') || 'debutant';
    const completedIds = getCompletedLessons(levelId);
    const lessonsCount = completedIds.length;
    document.getElementById('lessonsDone').textContent = lessonsCount;
    document.getElementById('scorePct').textContent = data.pct + '%';
    const streak = parseInt(localStorage.getItem('lamia_streak') || '0');
    document.getElementById('streakDays').textContent = streak;
    document.getElementById('lessonsDone').textContent = lessonsCount || Math.min(data.score + 2, 15);
  }
}

// ================================================================
// LEVEL TEST
// ================================================================

function startLevelTest() {
  const html = `
    <h2>Test de Niveau</h2>
    <p style="text-align:center;margin-bottom:1.5rem">Dix questions pour \u00e9valuer votre ma\u00eetrise du russe.</p>
    <form id="quiz-form">
      ${QUESTIONS.map((q, i) => `
        <div class="quiz-question">
          <p>${i + 1}. ${q.question}</p>
          ${q.options.map((opt, j) => `
            <label class="quiz-option">
              <input type="radio" name="q${i}" value="${j}" required>
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      `).join('')}
      <button type="submit" class="submit-quiz">Voir mes r\u00e9sultats</button>
    </form>
  `;
  showModal(html);

  document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    let score = 0;
    const total = QUESTIONS.length;

    for (let i = 0; i < total; i++) {
      const val = formData.get(`q${i}`);
      if (val !== null && parseInt(val) === QUESTIONS[i].correct) {
        score++;
      }
    }

    const level = LEVELS.find(l => score >= l.min && score <= l.max);
    const pct = Math.round((score / total) * 100);

    const results = {
      score, total, pct,
      levelId: level.id, levelName: level.name,
      date: new Date().toISOString()
    };
    localStorage.setItem('lamia_results', JSON.stringify(results));
    localStorage.setItem('lamia_level', level.id);
    unlockLevel(level.id);

    const descriptions = {
      debutant: "Vous commencez tout juste votre voyage dans l'univers du russe. Chaque grande ma\u00eetrise commence par un premier pas.",
      intermediaire: "Vous poss\u00e9dez d\u00e9j\u00e0 des bases solides. La langue russe commence \u00e0 d\u00e9voiler ses nuances.",
      avance: "Votre compr\u00e9hension du russe est remarquable. Les subtilit\u00e9s n'ont presque plus de secrets pour vous.",
      expert: "Votre ma\u00eetrise du russe est impressionnante. Vous savez naviguer dans des contextes complexes.",
      maitre: "Vous avez atteint un niveau d'\u00e9l\u00e9gance rare. Le russe n'a presque plus de myst\u00e8res pour vous."
    };

    const desc = descriptions[level.id] || descriptions.debutant;

    const resultHtml = `
      <div class="result-card">
        <p style="font-size:0.85rem;color:var(--text-muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:0.5rem">R\u00e9sultat</p>
        <div class="result-level">${level.emoji} ${level.name}</div>
        <p class="result-detail">Score : ${score}/${total} (${pct}%)</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin:1rem 0;line-height:1.8">${desc}</p>
        <div class="progress-bar-container" style="margin-top:1.5rem">
          <div class="progress-bar-label"><span>Progression</span><span>${pct}%</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>
        <button class="btn" onclick="closeModal();startLearning()" style="margin-top:1.5rem;width:100%;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Commencez votre apprentissage \u2192</button>
        <div style="display:flex;gap:0.8rem;margin-top:0.8rem">
          <button class="restart-quiz" onclick="startLevelTest()" style="flex:1">Recommencer le test</button>
          <button class="btn" onclick="closeModal()" style="flex:1">Fermer</button>
        </div>
      </div>
    `;
    showModal(resultHtml);
    updateStats();
  });
}

// ================================================================
// PATH (Parcours)
// ================================================================

function showPath() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) {
    showModal(`
      <h2>Parcours d'Apprentissage</h2>
      <p style="text-align:center;margin:1.5rem 0">Vous n'avez pas encore pass\u00e9 le test de niveau.</p>
      <p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">\u00c9valuez d'abord votre niveau pour d\u00e9bloquer votre parcours.</p>
      <div style="text-align:center;margin-top:1.5rem">
        <button class="btn" onclick="closeModal();startLevelTest()">Passer le test</button>
      </div>
    `);
    return;
  }

  let html = '<h2>\ud83c\udf31 Parcours d\'Apprentissage</h2>';
  html += '<p style="text-align:center;margin-bottom:1.5rem;font-size:0.85rem;color:var(--text-muted)">Compl\u00e9tez chaque niveau, passez l\'examen, et d\u00e9bloquez le suivant !</p>';

  LEVELS.forEach((level, idx) => {
    const unlocked = isLevelUnlocked(level.id);
    const lessons = LESSONS[level.id] || [];
    const completedIds = getCompletedLessons(level.id);
    const total = lessons.length;
    const done = completedIds.length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const examResult = getExamResult(level.id);
    const examPassed = examResult && examResult.passed;
    const allDone = done === total && total > 0;

    let sectionClass = 'path-level locked';
    let icon = '\ud83d\udd12';
    let statusText = 'Verrouill\u00e9';
    let actionHtml = '';

    if (unlocked) {
      sectionClass = 'path-level unlocked';
      icon = level.emoji;
      statusText = `\u00c9tape ${idx + 1}`;

      if (examPassed) {
        sectionClass = 'path-level completed';
        icon = '\u2705';
        statusText = '\u2713 Compl\u00e9t\u00e9';
        const nextLevel = getNextLevelId(level.id);
        if (nextLevel) {
          actionHtml = `<p style="color:var(--gold);font-size:0.85rem;margin-top:0.5rem">\u2728 Niveau suivant d\u00e9bloqu\u00e9 !</p>`;
        }
      } else if (allDone) {
        actionHtml = `<button class="btn" onclick="startExam('${level.id}')" style="margin-top:0.5rem;font-size:0.82rem;padding:0.5rem 1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark)">Passer l\'examen</button>`;
      } else if (done > 0) {
        actionHtml = `<button class="btn" onclick="closeModal();showLesson('${level.id}', ${done - 1})" style="margin-top:0.5rem;font-size:0.82rem;padding:0.5rem 1rem">Continuer</button>`;
      } else {
        actionHtml = `<button class="btn" onclick="closeModal();showLesson('${level.id}', 0)" style="margin-top:0.5rem;font-size:0.82rem;padding:0.5rem 1rem">Commencer</button>`;
      }
    }

    html += `
      <div class="${sectionClass}" style="padding:1rem;margin-bottom:1rem;border-radius:12px;background:rgba(201,169,110,0.05);border:1px solid rgba(201,169,110,0.15)">
        <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.3rem">
          <span style="font-size:1.5rem">${icon}</span>
          <div style="flex:1">
            <strong style="color:var(--cream);font-size:1rem">${level.name}</strong>
            <span style="font-size:0.75rem;color:var(--text-muted);margin-left:0.5rem">${level.cefr}</span>
          </div>
          <span style="font-size:0.75rem;color:var(--text-muted)">${statusText}</span>
        </div>
        <p style="font-size:0.8rem;color:var(--text-secondary);margin:0.3rem 0">${level.desc}</p>
        ${unlocked ? `
        <div class="progress-bar-container" style="margin-top:0.5rem">
          <div class="progress-bar-label"><span style="font-size:0.75rem">${done}/${total} le\u00e7ons</span><span style="font-size:0.75rem">${pct}%</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>
        ${actionHtml}
        ` : ''}
        ${examPassed && examResult ? `<p style="font-size:0.75rem;color:var(--gold);margin-top:0.3rem">Examen: ${examResult.score}/${examResult.total} (${Math.round((examResult.score/examResult.total)*100)}%)</p>` : ''}
      </div>
    `;
  });

  html += '<button class="restart-quiz" onclick="closeModal()" style="margin-top:1rem;width:100%">Fermer</button>';

  showModal(html);
}

function startLearning() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) return;
  const data = JSON.parse(saved);
  const levelId = data.levelId;
  const completedIds = getCompletedLessons(levelId);

  let lessonIndex = 0;
  for (let i = 0; i < LESSONS[levelId].length; i++) {
    if (!completedIds.includes(LESSONS[levelId][i].id)) {
      lessonIndex = i;
      break;
    }
  }
  localStorage.setItem('lamia_current_lesson', lessonIndex.toString());
  showLesson(levelId, lessonIndex);
}

// ================================================================
// SHOW LESSON
// ================================================================

function showLesson(levelId, lessonIndex) {
  const lessons = LESSONS[levelId];
  if (!lessons || lessonIndex < 0 || lessonIndex >= lessons.length) return;

  const lesson = lessons[lessonIndex];
  const completedIds = getCompletedLessons(levelId);
  const isCompleted = completedIds.includes(lesson.id);
  const total = lessons.length;
  const pct = Math.round(((lessonIndex + 1) / total) * 100);
  const level = LEVELS.find(l => l.id === levelId);

  let exerciseHtml = '';
  if (lesson.exercise) {
    const ex = lesson.exercise;
    if (ex.type === 'fill') {
      exerciseHtml = `
        <div class="lesson-exercise">
          <h3 style="color:var(--gold);font-weight:400;margin-bottom:0.8rem;font-size:1rem">Petit exercice</h3>
          <p style="margin-bottom:0.8rem;font-size:0.9rem">${ex.question}</p>
          <input type="text" id="fill-input" placeholder="Tapez votre r\u00e9ponse ici..." style="width:100%;padding:0.8rem 1rem;background:rgba(255,255,255,0.05);border:1px solid rgba(201,169,110,0.2);border-radius:12px;color:var(--cream);font-size:1rem;text-align:center;outline:none;box-sizing:border-box">
          <div style="display:flex;gap:0.5rem;margin-top:0.8rem">
            <button class="btn exercise-submit" style="flex:1;font-size:0.85rem;padding:0.5rem 1.5rem">V\u00e9rifier</button>
            ${ex.hints > 0 ? `<button class="btn hint-btn" style="flex:0.4;font-size:0.85rem;padding:0.5rem;background:transparent;border-color:var(--border-subtle)" onclick="showHint(this, ${JSON.stringify(ex.hintText).replace(/"/g, '&quot;')})">\ud83d\udca1</button>` : ''}
          </div>
          <p class="exercise-feedback" style="margin-top:0.5rem;font-size:0.85rem;display:none"></p>
          <p class="hint-display" style="margin-top:0.3rem;font-size:0.8rem;color:var(--text-muted);display:none"></p>
        </div>
      `;
    } else if (ex.type === 'error') {
      exerciseHtml = `
        <div class="lesson-exercise">
          <h3 style="color:var(--gold);font-weight:400;margin-bottom:0.8rem;font-size:1rem">D\u00e9tection d'erreur</h3>
          <p style="margin-bottom:0.8rem;font-size:0.9rem">${ex.question}</p>
          <div class="exercise-options">
            ${ex.options.map((opt, j) => `
              <label class="quiz-option exercise-option" data-correct="${j === ex.correct}">
                <input type="radio" name="ex${lesson.id}" value="${j}">
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
          <div style="display:flex;gap:0.5rem;margin-top:0.8rem">
            <button class="btn exercise-submit" style="flex:1;font-size:0.85rem;padding:0.5rem 1.5rem">V\u00e9rifier</button>
            ${ex.hints > 0 ? `<button class="btn hint-btn" style="flex:0.4;font-size:0.85rem;padding:0.5rem;background:transparent;border-color:var(--border-subtle)" onclick="showHint(this, ${JSON.stringify(ex.hintText).replace(/"/g, '&quot;')})">\ud83d\udca1</button>` : ''}
          </div>
          <p class="exercise-feedback" style="margin-top:0.5rem;font-size:0.85rem;display:none"></p>
          <p class="hint-display" style="margin-top:0.3rem;font-size:0.8rem;color:var(--text-muted);display:none"></p>
        </div>
      `;
    } else {
      exerciseHtml = `
        <div class="lesson-exercise">
          <h3 style="color:var(--gold);font-weight:400;margin-bottom:0.8rem;font-size:1rem">Petit exercice</h3>
          <p style="margin-bottom:0.8rem;font-size:0.9rem">${ex.question}</p>
          <div class="exercise-options">
            ${ex.options.map((opt, j) => `
              <label class="quiz-option exercise-option" data-correct="${j === ex.correct}">
                <input type="radio" name="ex${lesson.id}" value="${j}">
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
          <div style="display:flex;gap:0.5rem;margin-top:0.8rem">
            <button class="btn exercise-submit" style="flex:1;font-size:0.85rem;padding:0.5rem 1.5rem">V\u00e9rifier</button>
            ${ex.hints > 0 ? `<button class="btn hint-btn" style="flex:0.4;font-size:0.85rem;padding:0.5rem;background:transparent;border-color:var(--border-subtle)" onclick="showHint(this, ${JSON.stringify(ex.hintText).replace(/"/g, '&quot;')})">\ud83d\udca1</button>` : ''}
          </div>
          <p class="exercise-feedback" style="margin-top:0.5rem;font-size:0.85rem;display:none"></p>
          <p class="hint-display" style="margin-top:0.3rem;font-size:0.8rem;color:var(--text-muted);display:none"></p>
        </div>
      `;
    }
  }

  const completeBtn = isCompleted
    ? '<p style="text-align:center;color:var(--gold);margin:0.5rem 0">\u2705 Le\u00e7on d\u00e9j\u00e0 termin\u00e9e</p>'
    : `<button class="btn" onclick="completeLesson('${levelId}', ${lessonIndex})" style="width:100%;margin-top:1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Terminer la le\u00e7on \u2713</button>`;

  const prevBtn = lessonIndex > 0
    ? `<button class="btn" onclick="showLesson('${levelId}', ${lessonIndex - 1})" style="flex:1">\u2190 Pr\u00e9c\u00e9dente</button>`
    : '';
  const nextBtn = lessonIndex < total - 1
    ? `<button class="btn" onclick="showLesson('${levelId}', ${lessonIndex + 1})" style="flex:1">Suivante \u2192</button>`
    : '';

  showModal(`
    <div class="lesson-header">
      <span style="font-size:0.75rem;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase">${level.emoji} ${levelNames[levelId]} \u2014 Le\u00e7on ${lessonIndex + 1}/${total}</span>
      <h2 style="margin:0.3rem 0 0.8rem">${lesson.title}</h2>
      <div class="progress-bar-container" style="margin-bottom:1rem">
        <div class="progress-bar-label"><span>Progression</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
    </div>
    <div class="lesson-content">${lesson.content}</div>
    ${lesson.examples.length > 0 ? `
    <div style="margin:1.5rem 0;padding:1rem;border-top:1px solid rgba(201,169,110,0.2)">
      <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem;letter-spacing:1px;text-transform:uppercase">Exemples</p>
      ${lesson.examples.map(ex => `<div style="font-size:0.9rem;color:var(--cream);padding:0.2rem 0">\u2726 ${ex}</div>`).join('')}
    </div>
    ` : ''}
    ${exerciseHtml}
    ${completeBtn}
    <div style="display:flex;gap:0.8rem;margin-top:1rem">
      ${prevBtn}
      <button class="btn" onclick="showPath()" style="flex:1">Voir le parcours</button>
      ${nextBtn}
    </div>
    <button class="btn" onclick="closeModal()" style="margin-top:0.5rem;width:100%">Fermer</button>
  `);

  setTimeout(() => {
    const submitBtn = document.querySelector('.exercise-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function() {
        const ex = lesson.exercise;
        const feedback = document.querySelector('.exercise-feedback');
        if (ex.type === 'fill') {
          const input = document.getElementById('fill-input');
          if (!input) return;
          const val = input.value.trim().toLowerCase();
          if (!val) {
            feedback.textContent = 'Veuillez \u00e9crire une r\u00e9ponse.';
            feedback.style.display = 'block';
            feedback.style.color = 'var(--text-muted)';
            return;
          }
          const isCorrect = val === ex.correct.toLowerCase();
          trackExercise(ex.question, isCorrect, lesson.type);
          feedback.textContent = isCorrect
            ? '\u2713 Bravo ! Bonne r\u00e9ponse !'
            : '\u2717 Ce n\'est pas la bonne r\u00e9ponse. R\u00e9essayez !';
          feedback.style.display = 'block';
          feedback.style.color = isCorrect ? 'var(--gold)' : 'var(--rose-gold)';
          if (isCorrect) input.style.borderColor = 'var(--gold)';
          else input.style.borderColor = 'var(--rose-gold)';
        } else {
          const selected = document.querySelector(`input[name="ex${lesson.id}"]:checked`);
          if (!selected) {
            feedback.textContent = 'Veuillez s\u00e9lectionner une r\u00e9ponse.';
            feedback.style.display = 'block';
            feedback.style.color = 'var(--text-muted)';
            return;
          }
          const val = parseInt(selected.value);
          const isCorrect = val === ex.correct;
          trackExercise(ex.question, isCorrect, lesson.type);
          feedback.textContent = isCorrect
            ? '\u2713 Bravo ! Bonne r\u00e9ponse !'
            : '\u2717 Ce n\'est pas la bonne r\u00e9ponse. R\u00e9essayez !';
          feedback.style.display = 'block';
          feedback.style.color = isCorrect ? 'var(--gold)' : 'var(--rose-gold)';

          document.querySelectorAll('.exercise-option').forEach((opt, idx) => {
            if (idx === ex.correct) {
              opt.style.borderColor = 'var(--gold)';
              opt.style.background = 'rgba(201,169,110,0.1)';
            }
            const radio = opt.querySelector('input');
            if (radio && radio.checked && !isCorrect) {
              opt.style.borderColor = 'var(--rose-gold)';
              opt.style.background = 'rgba(232,180,184,0.1)';
            }
          });
        }
      });
    }
  }, 50);
}

let hintLevel = 0;

function showHint(btn, hints) {
  const display = document.querySelector('.hint-display');
  if (!display || !hints || hintLevel >= hints.length) return;
  display.textContent = '\ud83d\udca1 ' + hints[hintLevel];
  display.style.display = 'block';
  hintLevel++;
  if (hintLevel >= hints.length) {
    btn.style.opacity = '0.4';
    btn.disabled = true;
  }
}

// ================================================================
// COMPLETE LESSON
// ================================================================

function completeLesson(levelId, lessonIndex) {
  const lessons = LESSONS[levelId];
  if (!lessons || lessonIndex < 0 || lessonIndex >= lessons.length) return;

  const lesson = lessons[lessonIndex];
  const completedIds = getCompletedLessons(levelId);

  if (completedIds.includes(lesson.id)) return;

  completedIds.push(lesson.id);
  setCompletedLessons(levelId, completedIds);

  AIState.stats.lessonsCompleted++;
  saveAIState();

  const total = lessons.length;
  const done = completedIds.length;
  const pct = Math.round((done / total) * 100);

  const nextIndex = lessonIndex + 1;
  const hasNext = nextIndex < total;
  const allDone = done === total;

  const celebrationHtml = `
    <div class="result-card" style="text-align:center">
      <p style="font-size:2rem;margin-bottom:0.5rem">\ud83c\udf89</p>
      <div class="result-level" style="font-size:1.3rem">Le\u00e7on termin\u00e9e !</div>
      <p style="font-size:0.9rem;color:var(--text-secondary);margin:0.8rem 0">\u00ab ${lesson.title} \u00bb \u2014 ma\u00eetris\u00e9e avec \u00e9l\u00e9gance.</p>
      <div class="progress-bar-container" style="margin-top:1.2rem">
        <div class="progress-bar-label"><span>Progression du niveau</span><span>${done}/${total}</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      ${allDone ? `<p style="color:var(--gold);margin:1rem 0">\ud83c\udf1f Niveau termin\u00e9 ! Pr\u00eat pour l\'examen ?</p>
        <button class="btn" onclick="startExam('${levelId}')" style="width:100%;margin-top:0.5rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Passer l\'examen \u2192</button>` : ''}
      ${hasNext ? `<button class="btn" onclick="showLesson('${levelId}', ${nextIndex})" style="width:100%;margin-top:1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Le\u00e7on suivante \u2192</button>` : ''}
      <button class="btn" onclick="showPath()" style="width:100%;margin-top:0.8rem">Voir le parcours</button>
      <button class="btn" onclick="closeModal()" style="width:100%;margin-top:0.5rem">Fermer</button>
    </div>
  `;

  showModal(celebrationHtml);
  updateStats();
}

// ================================================================
// EXAM SYSTEM
// ================================================================

let examState = {
  levelId: null,
  questions: [],
  current: 0,
  score: 0,
  answers: []
};

function startExam(levelId) {
  const exam = CHAPTER_EXAMS[levelId];
  if (!exam) return;
  examState = {
    levelId: levelId,
    questions: exam.questions,
    current: 0,
    score: 0,
    answers: []
  };
  renderExamQuestion();
}

function renderExamQuestion() {
  const exam = examState;
  if (exam.current >= exam.questions.length) {
    finishExam();
    return;
  }

  const q = exam.questions[exam.current];
  const total = exam.questions.length;
  const progress = Math.round((exam.current / total) * 100);

  const optionsHtml = q.options.map((opt, i) => `
    <label class="quiz-option exam-option" data-index="${i}">
      <input type="radio" name="exam-q" value="${i}">
      <span>${opt}</span>
    </label>
  `).join('');

  showModal(`
    <h2>\ud83d\udcdd ${CHAPTER_EXAMS[exam.levelId].title}</h2>
    <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>Question ${exam.current + 1}/${total}</span>
      <span>\ud83c\udfaf ${exam.score} bonnes</span>
    </div>
    <div class="progress-bar-container" style="margin-bottom:1.5rem">
      <div class="progress-bar-label"><span>Progression</span><span>${progress}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
    </div>
    <div class="quiz-question">
      <p>${exam.current + 1}. ${q.question}</p>
      ${optionsHtml}
    </div>
    <div style="display:flex;gap:0.8rem;margin-top:1.5rem">
      <button class="btn" onclick="answerExamQuestion()" style="flex:1;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Valider</button>
    </div>
    <div id="exam-feedback" style="text-align:center;margin-top:1rem;font-size:0.9rem"></div>
  `);
}

function answerExamQuestion() {
  const selected = document.querySelector('input[name="exam-q"]:checked');
  const feedback = document.getElementById('exam-feedback');
  if (!selected) {
    feedback.textContent = 'Veuillez s\u00e9lectionner une r\u00e9ponse.';
    feedback.style.display = 'block';
    feedback.style.color = 'var(--text-muted)';
    return;
  }

  const val = parseInt(selected.value);
  const q = examState.questions[examState.current];
  const isCorrect = val === q.correct;

  if (isCorrect) examState.score++;
  examState.answers.push(val);

  document.querySelectorAll('.exam-option').forEach((opt, idx) => {
    if (idx === q.correct) {
      opt.style.borderColor = 'var(--gold)';
      opt.style.background = 'rgba(201,169,110,0.1)';
    }
    const radio = opt.querySelector('input');
    if (radio && radio.checked && !isCorrect) {
      opt.style.borderColor = 'var(--rose-gold)';
      opt.style.background = 'rgba(232,180,184,0.1)';
    }
    opt.style.pointerEvents = 'none';
  });

  feedback.textContent = isCorrect
    ? '\u2705 Bonne r\u00e9ponse !'
    : '\u274c La r\u00e9ponse \u00e9tait : ' + q.options[q.correct];
  feedback.style.display = 'block';
  feedback.style.color = isCorrect ? 'var(--gold)' : 'var(--rose-gold)';

  const valBtn = document.querySelector('.btn:last-child');
  if (valBtn) valBtn.style.display = 'none';

  setTimeout(() => {
    document.querySelectorAll('.exam-option').forEach(o => o.style.pointerEvents = '');
    examState.current++;
    renderExamQuestion();
  }, 1500);
}

function finishExam() {
  const levelId = examState.levelId;
  const total = examState.questions.length;
  const score = examState.score;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= CHAPTER_EXAMS[levelId].passingScore;
  const level = LEVELS.find(l => l.id === levelId);

  setExamResult(levelId, { passed, score, total, pct, date: new Date().toISOString() });

  if (passed) {
    const nextLevel = getNextLevelId(levelId);
    if (nextLevel) unlockLevel(nextLevel);
  }

  const emoji = passed ? '\ud83c\udfc6' : '\ud83d\udcaa';
  const msg = passed
    ? `F\u00e9licitations ! Vous ma\u00eetrisez le niveau ${level.name} ! ${getNextLevelId(levelId) ? 'Le niveau suivant est d\u00e9bloqu\u00e9 !' : 'Vous avez atteint le plus haut niveau !'}`
    : 'Continuez vos r\u00e9visions et r\u00e9essayez. Vous y \u00eates presque !';

  showModal(`
    <div class="result-card" style="text-align:center">
      <p style="font-size:3rem;margin-bottom:0.5rem">${emoji}</p>
      <h2 style="font-size:1.3rem">${passed ? 'Examen r\u00e9ussi !' : 'Examen non r\u00e9ussi'}</h2>
      <p style="font-size:0.9rem;color:var(--text-secondary);margin:1rem 0">${msg}</p>
      <div class="stats" style="margin:1.5rem 0">
        <div class="stat"><span class="stat-num">${score}/${total}</span><span class="stat-label">Score</span></div>
        <div class="stat"><span class="stat-num">${pct}%</span><span class="stat-label">Pourcentage</span></div>
      </div>
      <div class="progress-bar-container" style="margin-bottom:1.5rem">
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${passed ? 'var(--gold)' : 'var(--rose-gold)'}"></div></div>
      </div>
      <button class="btn" onclick="closeModal();showPath()" style="width:100%;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Voir le parcours</button>
      ${!passed ? `<button class="btn" onclick="startExam('${levelId}')" style="width:100%;margin-top:0.5rem">R\u00e9essayer</button>` : ''}
      <button class="restart-quiz" onclick="closeModal()" style="margin-top:0.8rem;width:100%">Fermer</button>
    </div>
  `);

  updateStats();
}

// ================================================================
// PROGRESS
// ================================================================

function showProgress() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) {
    showModal(`
      <h2>Suivi de Progr\u00e8s</h2>
      <p style="text-align:center;margin:1.5rem 0">Vous n'avez pas encore pass\u00e9 le test de niveau.</p>
      <div style="text-align:center;margin-top:1.5rem">
        <button class="btn" onclick="closeModal();startLevelTest()">Passer le test</button>
      </div>
    `);
    return;
  }

  const data = JSON.parse(saved);
  let totalDone = 0;
  let totalAll = 0;
  let highestLevelId = data.levelId;

  LEVELS.forEach(lv => {
    const ids = getCompletedLessons(lv.id);
    totalDone += ids.length;
    totalAll += (LESSONS[lv.id] || []).length;
    if (getExamResult(lv.id) && getExamResult(lv.id).passed) {
      highestLevelId = lv.id;
    }
  });

  const pct = totalAll > 0 ? Math.round((totalDone / totalAll) * 100) : 0;
  const streak = parseInt(localStorage.getItem('lamia_streak') || '0');
  const maxStreak = parseInt(localStorage.getItem('lamia_max_streak') || '0');
  const highestLevel = LEVELS.find(l => l.id === highestLevelId);

  showModal(`
    <h2>Suivi de Progr\u00e8s</h2>
    <div class="result-card">
      <p class="result-detail">Niveau le plus haut : <strong>${highestLevel.emoji} ${highestLevel.name}</strong></p>
      <p class="result-detail" style="font-size:0.8rem;color:var(--text-muted)">Test initial : ${data.levelName} (${data.score}/${data.total})</p>
      <div class="stats" style="margin:2rem 0">
        <div class="stat"><span class="stat-num">${totalDone}/${totalAll}</span><span class="stat-label">Le\u00e7ons</span></div>
        <div class="stat"><span class="stat-num">${pct}%</span><span class="stat-label">Global</span></div>
        <div class="stat"><span class="stat-num">${streak}</span><span class="stat-label">S\u00e9rie</span></div>
      </div>
      <p class="result-detail" style="font-size:0.78rem;color:var(--text-muted)">Meilleure s\u00e9rie : ${maxStreak} jours</p>
      <div class="progress-bar-container" style="margin-top:1.2rem">
        <div class="progress-bar-label"><span>Progression totale</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      <button class="btn" onclick="closeModal();showPath()" style="width:100%;margin-top:1rem">Voir le parcours</button>
      <button class="restart-quiz" onclick="closeModal();startLevelTest()" style="margin-top:0.8rem;width:100%">Refaire le test</button>
    </div>
  `);
}

// ================================================================
// RESOURCES
// ================================================================

function showRessources() {
  const saved = localStorage.getItem('lamia_results');
  const level = saved ? JSON.parse(saved).levelId : 'debutant';

  const resources = {
    debutant: [
      { icon: '\ud83d\udcf1', title: 'Duolingo \u2014 Russe', desc: 'Application ludique pour d\u00e9buter. Gratuite sur iOS, Android et Web.', url: 'https://fr.duolingo.com/course/ru/fr/Apprendre-le-russe' },
      { icon: '\ud83d\udd24', title: 'RussianForFree.com', desc: 'Cours complets gratuits : alphabet, grammaire, vocabulaire avec audio.', url: 'https://www.russianforfree.com/' },
      { icon: '\ud83d\udcd6', title: 'Assimil \u2014 Le Russe', desc: 'M\u00e9thode intuitive avec dialogues audio. Id\u00e9ale pour apprendre en douceur.', url: 'https://www.assimil.com/fr/991-le-russe' },
      { icon: '\ud83c\udfac', title: 'RussianPod101 (YouTube)', desc: 'Cha\u00eene YouTube avec des centaines de vid\u00e9os pour d\u00e9butants.', url: 'https://www.youtube.com/user/RussianPod101' },
      { icon: '\ud83d\udcdd', title: 'RusseFacile.fr', desc: 'Plateforme fran\u00e7aise gratuite avec cours audio, exercices et tests.', url: 'https://www.russefacile.fr/' },
      { icon: '\ud83d\udcd1', title: 'MosaLingua Russe', desc: 'Application bas\u00e9e sur la r\u00e9p\u00e9tition espac\u00e9e. 10 min par jour.', url: 'https://www.mosalingua.com/russe/' },
      { icon: '\ud83d\udcda', title: 'Penguin Russian Course', desc: 'LE manuel de r\u00e9f\u00e9rence pour d\u00e9buter. Complet et progressif.', url: 'https://www.penguin.co.uk/' },
      { icon: '\ud83c\udf10', title: 'Loecsen \u2014 Russe', desc: 'M\u00e9thode visuelle et audio avec illustrations pour le voyage.', url: 'https://www.loecsen.com/fr/cours-russe' }
    ],
    intermediaire: [
      { icon: '\ud83c\udfac', title: 'Be Fluent in Russian', desc: 'Cha\u00eene YouTube de Fedor Shirin. Le\u00e7ons dynamiques et culture russe.', url: 'https://www.youtube.com/c/BeFluentinRussian' },
      { icon: '\ud83d\udcda', title: 'Lingopie', desc: 'Plateforme de streaming avec s\u00e9ries et films russes sous-titr\u00e9s.', url: 'https://lingopie.com/' },
      { icon: '\ud83c\udfa7', title: 'Russian with Max (Podcast)', desc: 'Podcast en russe compr\u00e9hensible pour interm\u00e9diaires.', url: 'https://www.russianwithmax.com/podcast' },
      { icon: '\ud83d\udcf0', title: 'RT.com Learn Russian', desc: 'Cours gratuits avec articles de presse adapt\u00e9s.', url: 'https://learnrussian.rt.com/' },
      { icon: '\ud83d\udcf1', title: 'Clozemaster', desc: 'Application pour enrichir son vocabulaire en contexte.', url: 'https://www.clozemaster.com/' },
      { icon: '\ud83d\udcda', title: 'Nouvelles russes adapt\u00e9es', desc: 'Tchekhov simplifi\u00e9, contes populaires, histoires modernes.', url: 'https://www.russianforfree.com/texts.php' }
    ],
    avance: [
      { icon: '\ud83d\udcda', title: 'Litt\u00e9rature russe en VO', desc: 'Pouchkine, Tolsto\u00ef, Dosto\u00efevski en texte original.', url: 'https://ilibrary.ru/' },
      { icon: '\ud83d\udcf0', title: 'Meduza.io', desc: 'M\u00e9dia russe ind\u00e9pendant. Articles en russe moderne.', url: 'https://meduza.io/' },
      { icon: '\ud83c\udfac', title: 'Russian Progress', desc: 'Cha\u00eene YouTube 100% russe sur la grammaire fine et la culture.', url: 'https://www.youtube.com/c/RussianProgress' },
      { icon: '\ud83c\udfad', title: 'Arzamas \u2014 \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a', desc: 'Cours sur l\u2019histoire de la langue et la culture russes.', url: 'https://arzamas.academy/' },
      { icon: '\ud83d\udcf0', title: '\u041f\u043e\u043b\u043a\u0430 (Polka)', desc: 'Magazine litt\u00e9raire en ligne. Analyses des grands classiques.', url: 'https://polka.academy/' }
    ],
    expert: [
      { icon: '\ud83d\udcda', title: 'Litt\u00e9rature russe avanc\u00e9e', desc: 'Boulgakov, Nabokov, Soljenitsyne en version originale int\u00e9grale.', url: 'https://ilibrary.ru/' },
      { icon: '\ud83c\udfac', title: 'Cin\u00e9ma russe en VO', desc: 'Films de Tarkovski, Zviaguintsev, Sokourov avec sous-titres russes.', url: 'https://www.culture.ru/' },
      { icon: '\ud83d\udcf0', title: 'Varlamov (YouTube)', desc: 'Journaliste russe. Vid\u00e9os sur l\u2019urbanisme, la politique, la soci\u00e9t\u00e9.', url: 'https://www.youtube.com/c/ivarlamov' },
      { icon: '\ud83c\udfa7', title: 'Slow Russian Podcast (Avanc\u00e9)', desc: 'Podcast de Daria Molchanova pour niveaux avanc\u00e9s.', url: 'https://realrussianclub.com/slowrussianpodcast/' },
      { icon: '\ud83d\udcd6', title: 'Dictionnaire Dahl', desc: 'Dictionnaire de r\u00e9f\u00e9rence de la langue russe.', url: 'https://gufo.me/dict/dal' }
    ],
    maitre: [
      { icon: '\ud83d\udcda', title: '\u0152uvres compl\u00e8tes en VO', desc: 'Pouchkine, Tolsto\u00ef, Tchekhov, Dosto\u00efevski, textes int\u00e9graux.', url: 'https://rvb.ru/' },
      { icon: '\ud83d\udcd0', title: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a (Gramota.ru)', desc: 'Portail de r\u00e9f\u00e9rence linguistique : dictionnaires, conjugaison.', url: 'https://gramota.ru/' },
      { icon: '\ud83c\udf93', title: 'Cours universitaires en ligne', desc: 'Conf\u00e9rences et cours de l\u2019Universit\u00e9 d\u2019\u00c9tat de Moscou.', url: 'https://www.coursera.org/moscowstate' },
      { icon: '\ud83c\udfa4', title: 'Th\u00e9\u00e2tre russe en ligne', desc: 'Enregistrements du Th\u00e9\u00e2tre d\u2019Art de Moscou (\u041c\u0425\u0410\u0422).', url: 'https://www.culture.ru/' },
      { icon: '\ud83d\udcac', title: 'Preply \u2014 Cours particulier', desc: 'Trouvez un professeur natif pour des le\u00e7ons individuelles.', url: 'https://preply.com/fr/cours/russe' }
    ]
  };

  const list = resources[level] || resources.debutant;
  const levelName = saved ? JSON.parse(saved).levelName : 'D\u00e9butante';
  const lv = LEVELS.find(l => l.id === level);

  showModal(`
    <h2>Ressources</h2>
    <p style="text-align:center;margin-bottom:1.5rem;font-size:0.9rem">Niveau actuel : <strong style="color:var(--gold)">${lv ? lv.emoji : '\ud83c\udf31'} ${levelName}</strong></p>
    <ul class="resource-list">
      ${list.map(r => `
        <li>
          <span class="resource-icon">${r.icon}</span>
          <div>
            <strong style="color:var(--cream);font-weight:400">${r.title}</strong>
            <br><span style="font-size:0.82rem;color:var(--text-muted)">${r.desc}</span>
            ${r.url ? `<br><a href="${r.url}" target="_blank" style="font-size:0.75rem;color:var(--gold);text-decoration:none;opacity:0.7">\u2192 Acc\u00e9der</a>` : ''}
          </div>
        </li>
      `).join('')}
    </ul>
    <button class="btn" onclick="closeModal()" style="margin-top:1.5rem;width:100%">Fermer</button>
  `);
}

// ================================================================
// STORY MODE
// ================================================================

let storyState = { step: 0, choices: [] };

const STORY = [
  {
    text: "Vous arrivez \u00e0 Saint-P\u00e9tersbourg \u00e0 la saison des nuits blanches. Le ciel cr\u00e9pusculaire embrasse la Neva d'une lueur nacr\u00e9e. Que souhaitez-vous faire ?",
    choices: [
      { text: "Fl\u00e2ner le long du canal Gribo\u00efedov", next: 1 },
      { text: "Visiter le mus\u00e9e de l'Ermitage", next: 2 }
    ]
  },
  {
    text: "Vous longez le canal. Un vieux musicien joue Tcha\u00efkovski au violon. Il vous sourit : \u00ab Добрый вечер! Как дела? »",
    choices: [
      { text: "\u00ab Добрый вечер! Всё хорошо, спасибо »", next: 3 },
      { text: "\u00ab Извините, я не говорю по-русски »", next: 3 }
    ]
  },
  {
    text: "Vous entrez dans l'Ermitage. Devant un Rembrandt, une guide chuchote : \u00ab Эта картина — настоящий шедевр. »",
    choices: [
      { text: "Demander : \u00ab Сколько стоит билет? »", next: 4 },
      { text: "Admirer en silence et noter le mot dans votre carnet", next: 4 }
    ]
  },
  {
    text: "Vous arrivez sur la place du Palais. Un vendeur propose des pirojki : \u00ab Попробуйте, очень вкусно! »",
    choices: [
      { text: "\u00ab Да, спасибо! Сколько? »", next: 5 },
      { text: "\u00ab Я вегетарианец »", next: 5 }
    ]
  },
  {
    text: "Vous ressortez de l'Ermitage. Le soleil de minuit teinte la ville d'or rose. Un po\u00e8te amateur r\u00e9cite pr\u00e8s du quai.",
    choices: [
      { text: "Accepter le po\u00e8me et remercier en russe", next: 5 },
      { text: "Lire le po\u00e8me \u00e0 voix haute", next: 5 }
    ]
  },
  {
    text: "Saint-P\u00e9tersbourg vous a envo\u00fbt\u00e9e. Entre canaux majestueux, palais imp\u00e9riaux et cette lumi\u00e8re unique, vous repartez avec des mots plein le c\u0153ur. До новых встреч!",
    choices: [
      { text: "Recommencer l'aventure", next: -1 }
    ]
  }
];

function startStory() {
  storyState = { step: 0, choices: [] };
  renderStory();
}

function renderStory() {
  const s = STORY[storyState.step];
  if (!s) {
    showModal(`
      <h2>Mode Histoire</h2>
      <p class="story-text">L'aventure s'ach\u00e8ve ici, mais votre voyage dans la langue russe continue.</p>
      <button class="btn" onclick="closeModal()" style="width:100%">Fermer</button>
    `);
    return;
  }

  const choicesHtml = s.choices.map(c => `
    <button class="story-choice" data-next="${c.next}">${c.text}</button>
  `).join('');

  showModal(`
    <h2>Mode Histoire</h2>
    <p class="story-text">${s.text}</p>
    <div id="story-choices">${choicesHtml}</div>
  `);

  document.querySelectorAll('.story-choice').forEach(btn => {
    btn.addEventListener('click', function() {
      const next = parseInt(this.dataset.next);
      if (next === -1) {
        storyState.step = 0;
        storyState.choices = [];
        closeModal();
      } else {
        storyState.step = next;
        renderStory();
      }
    });
  });
}

// ================================================================
// SPARKLE PARTICLES
// ================================================================

let sparkleId = 0;

function createSparkle() {
  sparkleId++;
  const pid = sparkleId;
  const particle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  particle.setAttribute('viewBox', '0 0 20 20');
  particle.setAttribute('width', '20');
  particle.setAttribute('height', '20');
  particle.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 0;
    opacity: 0;
  `;
  particle.innerHTML = `
    <defs>
      <linearGradient id="sparkleGrad${pid}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E8B4B8" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#C9A96E" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="M10 0 Q12 8 20 10 Q12 12 10 20 Q8 12 0 10 Q8 8 10 0Z" fill="url(#sparkleGrad${pid})"/>
  `;

  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + 20;
  const size = Math.random() * 6 + 4;
  const duration = Math.random() * 15 + 12;

  particle.style.left = startX + 'px';
  particle.style.top = startY + 'px';
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';

  document.body.appendChild(particle);

  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = (currentTime - startTime) / 1000;
    const progress = elapsed / duration;

    if (progress >= 1) {
      particle.remove();
      return;
    }

    const y = startY - (progress * (window.innerHeight + 40));
    const drift = Math.sin(progress * Math.PI * 3) * 30;
    const opacity = progress < 0.1 ? progress * 10 : progress > 0.85 ? (1 - progress) * 6.67 : 0.5;
    const rot = progress * 360;

    particle.style.transform = `translateX(${drift}px) rotate(${rot}deg)`;
    particle.style.opacity = opacity;
    particle.style.top = y + 'px';

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// ================================================================
// STREAK TRACKING
// ================================================================

const savedResults = localStorage.getItem('lamia_results');
if (savedResults) {
  try {
    const data = JSON.parse(savedResults);
    const now = new Date();
    const last = new Date(data.date);
    const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
    if (diffDays <= 1) {
      const streak = parseInt(localStorage.getItem('lamia_streak') || '0') + (diffDays === 1 ? 1 : 0);
      localStorage.setItem('lamia_streak', streak.toString());
      const max = parseInt(localStorage.getItem('lamia_max_streak') || '0');
      if (streak > max) localStorage.setItem('lamia_max_streak', streak.toString());
    } else if (diffDays > 1) {
      localStorage.setItem('lamia_streak', '0');
    }
  } catch(e) {}
}

updateStats();

// ================================================================
// INIT
// ================================================================

setInterval(createSparkle, 2500);
for (let i = 0; i < 3; i++) {
  setTimeout(createSparkle, i * 800);
}

document.addEventListener('click', function(e) {
  if (e.target === document.getElementById('modal')) {
    closeModal();
  }
});

// ================================================================
// GAMES MODULE
// ================================================================

const GAME_WORDS = [
  { ru: '\u043c\u0430\u043c\u0430', fr: 'maman', theme: 'Famille' },
  { ru: '\u043f\u0430\u043f\u0430', fr: 'papa', theme: 'Famille' },
  { ru: '\u0431\u0440\u0430\u0442', fr: 'fr\u00e8re', theme: 'Famille' },
  { ru: '\u0441\u0435\u0441\u0442\u0440\u0430', fr: 'soeur', theme: 'Famille' },
  { ru: '\u0434\u043e\u043c', fr: 'maison', theme: 'Maison' },
  { ru: '\u043a\u043d\u0438\u0433\u0430', fr: 'livre', theme: 'Maison' },
  { ru: '\u0432\u043e\u0434\u0430', fr: 'eau', theme: 'Nourriture' },
  { ru: '\u0445\u043b\u0435\u0431', fr: 'pain', theme: 'Nourriture' },
  { ru: '\u043c\u043e\u043b\u043e\u043a\u043e', fr: 'lait', theme: 'Nourriture' },
  { ru: '\u043a\u043e\u0442', fr: 'chat', theme: 'Animaux' },
  { ru: '\u0441\u043e\u0431\u0430\u043a\u0430', fr: 'chien', theme: 'Animaux' },
  { ru: '\u0440\u044b\u0431\u0430', fr: 'poisson', theme: 'Animaux' },
  { ru: '\u043a\u0440\u0430\u0441\u043d\u044b\u0439', fr: 'rouge', theme: 'Couleurs' },
  { ru: '\u0441\u0438\u043d\u0438\u0439', fr: 'bleu', theme: 'Couleurs' },
  { ru: '\u0437\u0435\u043b\u0451\u043d\u044b\u0439', fr: 'vert', theme: 'Couleurs' },
  { ru: '\u0431\u0435\u043b\u044b\u0439', fr: 'blanc', theme: 'Couleurs' },
  { ru: '\u0447\u0451\u0440\u043d\u044b\u0439', fr: 'noir', theme: 'Couleurs' },
  { ru: '\u0434\u0432\u0430', fr: 'deux', theme: 'Nombres' },
  { ru: '\u0442\u0440\u0438', fr: 'trois', theme: 'Nombres' },
  { ru: '\u043f\u044f\u0442\u044c', fr: 'cinq', theme: 'Nombres' },
  { ru: '\u0441\u043e\u043b\u043d\u0446\u0435', fr: 'soleil', theme: 'Nature' },
  { ru: '\u043b\u0443\u043d\u0430', fr: 'lune', theme: 'Nature' },
  { ru: '\u0437\u0432\u0435\u0437\u0434\u0430', fr: '\u00e9toile', theme: 'Nature' },
  { ru: '\u043b\u044e\u0431\u043e\u0432\u044c', fr: 'amour', theme: '\u00c9motions' },
  { ru: '\u0434\u0440\u0443\u0433', fr: 'ami', theme: 'Personnes' },
  { ru: '\u0441\u0435\u043c\u044c\u044f', fr: 'famille', theme: 'Personnes' },
  { ru: '\u0448\u043a\u043e\u043b\u0430', fr: '\u00e9cole', theme: 'Lieux' },
  { ru: '\u0433\u043e\u0440\u043e\u0434', fr: 'ville', theme: 'Lieux' },
  { ru: '\u043c\u0443\u0437\u044b\u043a\u0430', fr: 'musique', theme: 'Culture' }
];

// ===== GAME 1: MEMORY MATCH =====
let memoryState = { cards: [], flipped: [], matched: [], locked: false, attempts: 0, timer: 0, timerInterval: null, startTime: null };

function startMemoryGame() {
  const shuffled = [...GAME_WORDS].sort(() => Math.random() - 0.5).slice(0, 6);
  memoryState = { cards: [], flipped: [], matched: [], locked: false, attempts: 0, timer: 0, startTime: Date.now() };

  shuffled.forEach((word, i) => {
    memoryState.cards.push({ id: `ru${i}`, text: word.ru, type: 'ru', pairId: i, word: word });
    memoryState.cards.push({ id: `fr${i}`, text: word.fr, type: 'fr', pairId: i, word: word });
  });

  memoryState.cards.sort(() => Math.random() - 0.5);
  renderMemoryGame();
  startMemoryTimer();
}

function startMemoryTimer() {
  if (memoryState.timerInterval) clearInterval(memoryState.timerInterval);
  memoryState.timerInterval = setInterval(() => {
    if (memoryState.matched.length < memoryState.cards.length) {
      memoryState.timer = Math.floor((Date.now() - memoryState.startTime) / 1000);
      const timerEl = document.getElementById('memory-timer');
      if (timerEl) timerEl.textContent = formatTime(memoryState.timer);
    }
  }, 1000);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function renderMemoryGame() {
  const cardsHtml = memoryState.cards.map((card, index) => {
    const isFlipped = memoryState.flipped.includes(index) || memoryState.matched.includes(card.pairId);
    const isMatched = memoryState.matched.includes(card.pairId);
    return `
      <div class="mem-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}" 
           onclick="flipCard(${index})" data-index="${index}">
        <div class="mem-card-inner">
          <div class="mem-card-front"><span class="mem-card-question">?</span></div>
          <div class="mem-card-back ${card.type}">
            <span class="mem-card-text">${card.text}</span>
            <span class="mem-card-label">${card.type === 'ru' ? 'RUSSE' : 'FRAN\u00c7AIS'}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const matchedPairs = memoryState.matched.length;
  const totalPairs = memoryState.cards.length / 2;

  showModal(`
    <h2>\ud83e\udde0 Jeu de Memory</h2>
    <p style="text-align:center;margin-bottom:1rem;font-size:0.85rem;color:var(--text-muted)">Associez chaque mot russe \u00e0 sa traduction</p>
    <div style="display:flex;justify-content:space-between;margin-bottom:1rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>\ud83d\udd50 <span id="memory-timer">0:00</span></span>
      <span>\ud83c\udfaf Tentatives : <span id="memory-attempts">${memoryState.attempts}</span></span>
      <span>\u2705 <span id="memory-matched">${matchedPairs}</span>/${totalPairs}</span>
    </div>
    <div class="memory-grid">${cardsHtml}</div>
    ${matchedPairs === totalPairs ? `
      <div style="text-align:center;margin-top:1.5rem">
        <p style="color:var(--gold);font-size:1.1rem;margin-bottom:0.5rem">\ud83c\udf89 F\u00e9licitations !</p>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">Termin\u00e9 en ${formatTime(memoryState.timer)}</p>
        <button class="btn" onclick="startMemoryGame()" style="margin-right:0.5rem">Rejouer</button>
        <button class="btn" onclick="closeModal();showGamesMenu()" style="background:transparent;border-color:var(--border-subtle)">Autres jeux</button>
      </div>
    ` : ''}
    <button class="restart-quiz" onclick="closeModal()" style="margin-top:1rem;width:100%">Fermer</button>
  `);

  if (memoryState.timerInterval) { clearInterval(memoryState.timerInterval); startMemoryTimer(); }
}

function flipCard(index) {
  if (memoryState.locked) return;
  if (memoryState.flipped.includes(index)) return;
  if (memoryState.matched.includes(memoryState.cards[index].pairId)) return;
  if (memoryState.flipped.length >= 2) return;

  memoryState.flipped.push(index);
  renderMemoryGame();

  if (memoryState.flipped.length === 2) {
    memoryState.locked = true;
    memoryState.attempts++;
    const [i1, i2] = memoryState.flipped;
    const card1 = memoryState.cards[i1];
    const card2 = memoryState.cards[i2];

    if (card1.pairId === card2.pairId && card1.type !== card2.type) {
      memoryState.matched.push(card1.pairId);
      memoryState.flipped = [];
      memoryState.locked = false;
      setTimeout(() => renderMemoryGame(), 300);
    } else {
      setTimeout(() => { memoryState.flipped = []; memoryState.locked = false; renderMemoryGame(); }, 1000);
    }
    document.getElementById('memory-attempts').textContent = memoryState.attempts;
  }
}

// ===== GAME 2: WORD SCRAMBLE =====
let scrambleState = { word: null, scrambled: '', guessed: '', score: 0, total: 0, hint: '' };

function startScrambleGame() {
  scrambleState = { word: null, scrambled: '', guessed: '', score: 0, total: 0, hint: '' };
  nextScramble();
}

function nextScramble() {
  const word = GAME_WORDS[Math.floor(Math.random() * GAME_WORDS.length)];
  scrambleState.word = word;
  let scrambled = word.ru.split('');
  for (let i = scrambled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
  }
  if (scrambled.join('') === word.ru && word.ru.length > 1) {
    [scrambled[0], scrambled[1]] = [scrambled[1], scrambled[0]];
  }
  scrambleState.scrambled = scrambled.join('');
  scrambleState.guessed = '';
  scrambleState.total++;
  renderScramble();
}

function renderScramble() {
  showModal(`
    <h2>\ud83d\udd24 Puzzle de mots</h2>
    <p style="text-align:center;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-muted)">Reconstituez le mot russe</p>
    <div style="display:flex;justify-content:space-between;margin-bottom:1rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>\ud83c\udfaf ${scrambleState.score}/${scrambleState.total}</span>
      <span>Th\u00e8me : ${scrambleState.word ? scrambleState.word.theme : '-'}</span>
    </div>
    <div style="text-align:center;margin:2rem 0">
      <div style="font-size:2.5rem;letter-spacing:8px;color:var(--gold);font-family:'Montserrat',sans-serif;margin-bottom:1.5rem">
        ${scrambleState.scrambled.split('').map(l => `<span style="display:inline-block;background:rgba(201,169,110,0.1);padding:0.3rem 0.5rem;border-radius:8px;margin:0 2px;border:1px solid rgba(201,169,110,0.2)">${l}</span>`).join('')}
      </div>
      <input type="text" id="scramble-input" placeholder="Tapez le mot ici..." 
        style="width:80%;padding:0.8rem 1rem;background:rgba(255,255,255,0.05);border:1px solid rgba(201,169,110,0.2);border-radius:12px;color:var(--cream);font-size:1.1rem;text-align:center;outline:none"
        onkeypress="if(event.key==='Enter') checkScramble()">
    </div>
    <div style="display:flex;gap:0.5rem;justify-content:center">
      <button class="btn" onclick="checkScramble()" style="flex:1">V\u00e9rifier \u2713</button>
      <button class="btn" onclick="showScrambleHint()" style="background:transparent;border-color:var(--border-subtle);flex:0.5">\ud83d\udca1</button>
    </div>
    <div id="scramble-feedback" style="text-align:center;margin-top:1rem;font-size:0.9rem"></div>
    <button class="restart-quiz" onclick="closeModal()" style="margin-top:1rem;width:100%">Fermer</button>
  `);
  document.getElementById('scramble-input').focus();
}

function checkScramble() {
  const input = document.getElementById('scramble-input');
  const feedback = document.getElementById('scramble-feedback');
  if (!input || !feedback) return;
  const guess = input.value.trim().toLowerCase();
  if (!guess) return;

  if (guess === scrambleState.word.ru) {
    scrambleState.score++;
    feedback.innerHTML = `<span style="color:var(--gold)">\u2705 Parfait !</span>`;
    setTimeout(() => nextScramble(), 1500);
  } else {
    feedback.innerHTML = `<span style="color:#E8B4B8">\u274c Non, indice : ${scrambleState.word.fr}</span>`;
    input.value = '';
    input.focus();
  }
}

function showScrambleHint() {
  const feedback = document.getElementById('scramble-feedback');
  if (feedback && scrambleState.word) {
    feedback.innerHTML = `<span style="color:var(--text-muted)">\ud83d\udca1 Traduction : ${scrambleState.word.fr}</span>`;
  }
}

// ===== GAME 3: SPEED QUIZ =====
let speedQuizState = { questions: [], current: 0, score: 0, total: 0, timeLeft: 15, timer: null };

function startSpeedQuiz() {
  const qs = [];
  const shuffled = [...GAME_WORDS].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 8; i++) {
    const word = shuffled[i % shuffled.length];
    const isRuToFr = Math.random() > 0.5;
    let options = [isRuToFr ? word.fr : word.ru];
    const others = GAME_WORDS.filter(w => w.ru !== word.ru).sort(() => Math.random() - 0.5);
    for (let j = 0; j < 3; j++) {
      if (others[j]) options.push(isRuToFr ? others[j].fr : others[j].ru);
    }
    options = options.sort(() => Math.random() - 0.5);
    qs.push({
      question: isRuToFr ? `Que signifie \u00ab ${word.ru} \u00bb ?` : `Comment dit-on \u00ab ${word.fr} \u00bb en russe ?`,
      correct: isRuToFr ? word.fr : word.ru,
      options: options,
      answer: isRuToFr ? word.fr : word.ru,
      theme: word.theme
    });
  }
  speedQuizState = { questions: qs, current: 0, score: 0, total: qs.length, timeLeft: 15, timer: null };
  renderSpeedQuestion();
}

function renderSpeedQuestion() {
  if (speedQuizState.current >= speedQuizState.total) { endSpeedQuiz(); return; }
  const q = speedQuizState.questions[speedQuizState.current];
  speedQuizState.timeLeft = 15;
  const optionsHtml = q.options.map((opt, i) => `<button class="speed-option" onclick="answerSpeedQuiz(${i}, '${opt.replace(/'/g, "\\'")}')" id="speed-opt-${i}">${opt}</button>`).join('');

  showModal(`
    <h2>\u26a1 Quiz \u00c9clair</h2>
    <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>Question ${speedQuizState.current + 1}/${speedQuizState.total}</span>
      <span>\ud83c\udfaf ${speedQuizState.score} bonnes</span>
    </div>
    <div style="margin-bottom:1rem">
      <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-muted);margin-bottom:0.2rem">
        <span>\u23f1 <span id="speed-timer">15</span>s</span>
        <span>Th\u00e8me : ${q.theme}</span>
      </div>
      <div class="progress-bar" style="height:4px"><div class="progress-fill" id="speed-timer-bar" style="width:100%;background:linear-gradient(90deg,var(--gold),var(--rose-gold))"></div></div>
    </div>
    <p style="text-align:center;font-size:1.2rem;color:var(--cream);margin:1.5rem 0">${q.question}</p>
    <div class="speed-options" style="display:flex;flex-direction:column;gap:0.5rem">${optionsHtml}</div>
    <div id="speed-feedback" style="text-align:center;margin-top:1rem;font-size:0.9rem"></div>
  `);

  if (speedQuizState.timer) clearInterval(speedQuizState.timer);
  speedQuizState.timer = setInterval(() => {
    speedQuizState.timeLeft--;
    const timerEl = document.getElementById('speed-timer');
    const barEl = document.getElementById('speed-timer-bar');
    if (timerEl) timerEl.textContent = speedQuizState.timeLeft;
    if (barEl) barEl.style.width = `${(speedQuizState.timeLeft / 15) * 100}%`;
    if (speedQuizState.timeLeft <= 0) {
      clearInterval(speedQuizState.timer);
      const feedback = document.getElementById('speed-feedback');
      if (feedback) feedback.innerHTML = `<span style="color:#E8B4B8">\u23f0 Temps \u00e9coul\u00e9 ! La r\u00e9ponse \u00e9tait : ${q.correct}</span>`;
      disableSpeedOptions();
      setTimeout(() => { speedQuizState.current++; renderSpeedQuestion(); }, 1500);
    }
  }, 1000);
}

function answerSpeedQuiz(index, answer) {
  if (speedQuizState.timer) clearInterval(speedQuizState.timer);
  const q = speedQuizState.questions[speedQuizState.current];
  const isCorrect = answer === q.correct;
  if (isCorrect) speedQuizState.score++;
  const feedback = document.getElementById('speed-feedback');
  if (feedback) feedback.innerHTML = isCorrect ? `<span style="color:var(--gold)">\u2705 Correct !</span>` : `<span style="color:#E8B4B8">\u274c La r\u00e9ponse \u00e9tait : ${q.correct}</span>`;
  q.options.forEach((opt, i) => {
    const el = document.getElementById(`speed-opt-${i}`);
    if (el) { if (opt === q.correct) el.style.borderColor = 'var(--gold)'; else if (opt === answer && !isCorrect) el.style.borderColor = '#E8B4B8'; el.style.opacity = '0.6'; }
  });
  setTimeout(() => { speedQuizState.current++; renderSpeedQuestion(); }, 1500);
}

function disableSpeedOptions() {
  document.querySelectorAll('.speed-option').forEach(el => { el.disabled = true; el.style.opacity = '0.5'; });
}

function endSpeedQuiz() {
  const pct = Math.round((speedQuizState.score / speedQuizState.total) * 100);
  const emoji = pct >= 80 ? '\ud83c\udf1f' : pct >= 50 ? '\ud83d\udc4d' : '\ud83d\udcaa';
  const msg = pct >= 80 ? 'Excellent niveau !' : pct >= 50 ? 'Bien ! Continue comme \u00e7a.' : 'Entra\u00eene-toi encore un peu !';
  showModal(`
    <h2>\u26a1 Quiz \u00c9clair \u2014 Termin\u00e9 !</h2>
    <div style="text-align:center;margin:2rem 0">
      <div style="font-size:4rem;margin-bottom:1rem">${emoji}</div>
      <div style="font-size:2.5rem;color:var(--gold)">${speedQuizState.score}/${speedQuizState.total}</div>
      <div style="font-size:0.9rem;color:var(--text-muted);margin:0.5rem 0">${pct}%</div>
      <p style="color:var(--text-secondary);margin-top:0.5rem">${msg}</p>
      <div class="progress-bar-container" style="margin-top:1.5rem">
        <div class="progress-bar-label"><span>Score</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
    </div>
    <button class="btn" onclick="startSpeedQuiz()" style="width:100%;margin-bottom:0.5rem">Rejouer</button>
    <button class="restart-quiz" onclick="closeModal();showGamesMenu()" style="width:100%">Autres jeux</button>
  `);
}

// ===== GAMES MENU =====
function showGamesMenu() {
  showModal(`
    <h2>\ud83c\udfae Jeux interactifs</h2>
    <p style="text-align:center;margin-bottom:1.5rem;font-size:0.85rem;color:var(--text-muted)">Apprenez en vous amusant !</p>
    <div style="display:flex;flex-direction:column;gap:1rem">
      <button class="game-menu-btn" onclick="closeModal();setTimeout(startMemoryGame,300)" style="background:linear-gradient(135deg,rgba(201,169,110,0.1),rgba(232,180,184,0.05));border:1px solid rgba(201,169,110,0.2);border-radius:16px;padding:1.2rem;text-align:left;cursor:pointer">
        <div style="display:flex;align-items:center;gap:1rem">
          <span style="font-size:2.5rem">\ud83e\udde0</span>
          <div>
            <div style="color:var(--cream);font-family:'Montserrat',sans-serif;font-size:1.2rem;margin-bottom:0.2rem">Jeu de Memory</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">Associez les mots russes \u00e0 leur traduction</div>
          </div>
        </div>
      </button>
      <button class="game-menu-btn" onclick="closeModal();setTimeout(startScrambleGame,300)" style="background:linear-gradient(135deg,rgba(201,169,110,0.1),rgba(232,180,184,0.05));border:1px solid rgba(201,169,110,0.2);border-radius:16px;padding:1.2rem;text-align:left;cursor:pointer">
        <div style="display:flex;align-items:center;gap:1rem">
          <span style="font-size:2.5rem">\ud83d\udd24</span>
          <div>
            <div style="color:var(--cream);font-family:'Montserrat',sans-serif;font-size:1.2rem;margin-bottom:0.2rem">Puzzle de mots</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">Reconstituez le mot russe m\u00e9lang\u00e9</div>
          </div>
        </div>
      </button>
      <button class="game-menu-btn" onclick="closeModal();setTimeout(startSpeedQuiz,300)" style="background:linear-gradient(135deg,rgba(201,169,110,0.1),rgba(232,180,184,0.05));border:1px solid rgba(201,169,110,0.2);border-radius:16px;padding:1.2rem;text-align:left;cursor:pointer">
        <div style="display:flex;align-items:center;gap:1rem">
          <span style="font-size:2.5rem">\u26a1</span>
          <div>
            <div style="color:var(--cream);font-family:'Montserrat',sans-serif;font-size:1.2rem;margin-bottom:0.2rem">Quiz \u00c9clair</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">8 questions chronom\u00e9tr\u00e9es</div>
          </div>
        </div>
      </button>
    </div>
    <button class="restart-quiz" onclick="closeModal()" style="margin-top:1.5rem;width:100%">Fermer</button>
  `);
}

// ================================================================
// MINI IA — ASSISTANT INTELLIGENT
// ================================================================

// AI State
const AIState = {
  errors: JSON.parse(localStorage.getItem('lamia_ai_errors') || '{}'),
  reviews: JSON.parse(localStorage.getItem('lamia_ai_reviews') || '[]'),
  stats: JSON.parse(localStorage.getItem('lamia_ai_stats') || '{"lessonsStarted":0,"lessonsCompleted":0,"totalExercises":0,"correctAnswers":0,"wrongAnswers":0,"startDate":null}')
};

function saveAIState() {
  localStorage.setItem('lamia_ai_errors', JSON.stringify(AIState.errors));
  localStorage.setItem('lamia_ai_reviews', JSON.stringify(AIState.reviews));
  localStorage.setItem('lamia_ai_stats', JSON.stringify(AIState.stats));
}

if (!AIState.stats.startDate) {
  AIState.stats.startDate = new Date().toISOString();
  saveAIState();
}

function trackExercise(question, correct, category) {
  AIState.stats.totalExercises++;
  if (correct) {
    AIState.stats.correctAnswers++;
  } else {
    AIState.stats.wrongAnswers++;
    if (!AIState.errors[category]) AIState.errors[category] = [];
    AIState.errors[category].push({ question, date: new Date().toISOString() });
    if (AIState.errors[category].length > 20) AIState.errors[category].shift();
  }
  saveAIState();
}

const RUSSIAN_CONJUGATIONS = {
  'читать': {
    translation: 'lire',
    type: 'regular',
    present: { 'я': 'читаю', 'ты': 'читаешь', 'он/она': 'читает', 'мы': 'читаем', 'вы': 'читаете', 'они': 'читают' },
    past: { 'm': 'читал', 'f': 'читала', 'n': 'читало', 'pl': 'читали' },
    future: { 'я': 'буду читать', 'ты': 'будешь читать', 'он/она': 'будет читать', 'мы': 'будем читать', 'вы': 'будете читать', 'они': 'будут читать' }
  },
  'говорить': {
    translation: 'parler',
    type: 'regular',
    present: { 'я': 'говорю', 'ты': 'говоришь', 'он/она': 'говорит', 'мы': 'говорим', 'вы': 'говорите', 'они': 'говорят' },
    past: { 'm': 'говорил', 'f': 'говорила', 'n': 'говорило', 'pl': 'говорили' },
    future: { 'я': 'буду говорить', 'ты': 'будешь говорить', 'он/она': 'будет говорить', 'мы': 'будем говорить', 'вы': 'будете говорить', 'они': 'будут говорить' }
  },
  'делать': {
    translation: 'faire',
    type: 'regular',
    present: { 'я': 'делаю', 'ты': 'делаешь', 'он/она': 'делает', 'мы': 'делаем', 'вы': 'делаете', 'они': 'делают' },
    past: { 'm': 'делал', 'f': 'делала', 'n': 'делало', 'pl': 'делали' },
    future: { 'я': 'буду делать', 'ты': 'будешь делать', 'он/она': 'будет делать', 'мы': 'будем делать', 'вы': 'будете делать', 'они': 'будут делать' }
  },
  'жить': {
    translation: 'vivre',
    type: 'irregular',
    present: { 'я': 'живу', 'ты': 'живёшь', 'он/она': 'живёт', 'мы': 'живём', 'вы': 'живёте', 'они': 'живут' },
    past: { 'm': 'жил', 'f': 'жила', 'n': 'жило', 'pl': 'жили' },
    future: { 'я': 'буду жить', 'ты': 'будешь жить', 'он/она': 'будет жить', 'мы': 'будем жить', 'вы': 'будете жить', 'они': 'будут жить' }
  },
  'быть': {
    translation: 'être',
    type: 'irregular',
    present: { 'я': 'есть', 'ты': 'есть', 'он/она': 'есть', 'мы': 'есть', 'вы': 'есть', 'они': 'есть' },
    past: { 'm': 'был', 'f': 'была', 'n': 'было', 'pl': 'были' },
    future: { 'я': 'буду', 'ты': 'будешь', 'он/она': 'будет', 'мы': 'будем', 'вы': 'будете', 'они': 'будут' }
  },
  'идти': {
    translation: 'aller (à pied)',
    type: 'irregular',
    present: { 'я': 'иду', 'ты': 'идёшь', 'он/она': 'идёт', 'мы': 'идём', 'вы': 'идёте', 'они': 'идут' },
    past: { 'm': 'шёл', 'f': 'шла', 'n': 'шло', 'pl': 'шли' },
    future: { 'я': 'пойду', 'ты': 'пойдёшь', 'он/она': 'пойдёт', 'мы': 'пойдём', 'вы': 'пойдёте', 'они': 'пойдут' }
  },
  'любить': {
    translation: 'aimer',
    type: 'regular',
    present: { 'я': 'люблю', 'ты': 'любишь', 'он/она': 'любит', 'мы': 'любим', 'вы': 'любите', 'они': 'любят' },
    past: { 'm': 'любил', 'f': 'любила', 'n': 'любило', 'pl': 'любили' },
    future: { 'я': 'буду любить', 'ты': 'будешь любить', 'он/она': 'будет любить', 'мы': 'будем любить', 'вы': 'будете любить', 'они': 'будут любить' }
  },
  'знать': {
    translation: 'savoir / connaître',
    type: 'regular',
    present: { 'я': 'знаю', 'ты': 'знаешь', 'он/она': 'знает', 'мы': 'знаем', 'вы': 'знаете', 'они': 'знают' },
    past: { 'm': 'знал', 'f': 'знала', 'n': 'знало', 'pl': 'знали' },
    future: { 'я': 'буду знать', 'ты': 'будешь знать', 'он/она': 'будет знать', 'мы': 'будем знать', 'вы': 'будете знать', 'они': 'будут знать' }
  },
  'хотеть': {
    translation: 'vouloir',
    type: 'irregular',
    present: { 'я': 'хочу', 'ты': 'хочешь', 'он/она': 'хочет', 'мы': 'хотим', 'вы': 'хотите', 'они': 'хотят' },
    past: { 'm': 'хотел', 'f': 'хотела', 'n': 'хотело', 'pl': 'хотели' },
    future: { 'я': 'захочу', 'ты': 'захочешь', 'он/она': 'захочет', 'мы': 'захотим', 'вы': 'захотите', 'они': 'захотят' }
  },
  'мочь': {
    translation: 'pouvoir',
    type: 'irregular',
    present: { 'я': 'могу', 'ты': 'можешь', 'он/она': 'может', 'мы': 'можем', 'вы': 'можете', 'они': 'могут' },
    past: { 'm': 'мог', 'f': 'могла', 'n': 'могло', 'pl': 'могли' },
    future: { 'я': 'смогу', 'ты': 'сможешь', 'он/она': 'сможет', 'мы': 'сможем', 'вы': 'сможете', 'они': 'смогут' }
  },
  'есть': {
    translation: 'manger',
    type: 'regular',
    present: { 'я': 'ем', 'ты': 'ешь', 'он/она': 'ест', 'мы': 'едим', 'вы': 'едите', 'они': 'едят' },
    past: { 'm': 'ел', 'f': 'ела', 'n': 'ело', 'pl': 'ели' },
    future: { 'я': 'буду есть', 'ты': 'будешь есть', 'он/она': 'будет есть', 'мы': 'будем есть', 'вы': 'будете есть', 'они': 'будут есть' }
  },
  'пить': {
    translation: 'boire',
    type: 'irregular',
    present: { 'я': 'пью', 'ты': 'пьёшь', 'он/она': 'пьёт', 'мы': 'пьём', 'вы': 'пьёте', 'они': 'пьют' },
    past: { 'm': 'пил', 'f': 'пила', 'n': 'пило', 'pl': 'пили' },
    future: { 'я': 'буду пить', 'ты': 'будешь пить', 'он/она': 'будет пить', 'мы': 'будем пить', 'вы': 'будете пить', 'они': 'будут пить' }
  },
  'спать': {
    translation: 'dormir',
    type: 'regular',
    present: { 'я': 'сплю', 'ты': 'спишь', 'он/она': 'спит', 'мы': 'спим', 'вы': 'спите', 'они': 'спят' },
    past: { 'm': 'спал', 'f': 'спала', 'n': 'спало', 'pl': 'спали' },
    future: { 'я': 'буду спать', 'ты': 'будешь спать', 'он/она': 'будет спать', 'мы': 'будем спать', 'вы': 'будете спать', 'они': 'будут спать' }
  },
  'писать': {
    translation: 'écrire',
    type: 'regular',
    present: { 'я': 'пишу', 'ты': 'пишешь', 'он/она': 'пишет', 'мы': 'пишем', 'вы': 'пишете', 'они': 'пишут' },
    past: { 'm': 'писал', 'f': 'писала', 'n': 'писало', 'pl': 'писали' },
    future: { 'я': 'буду писать', 'ты': 'будешь писать', 'он/она': 'будет писать', 'мы': 'будем писать', 'вы': 'будете писать', 'они': 'будут писать' }
  }
};

function conjugateVerb() {
  const input = document.getElementById('ai-verb-input');
  const verb = input ? input.value.trim().toLowerCase() : '';
  const result = document.getElementById('ai-conj-result');
  
  if (!verb) {
    if (result) result.innerHTML = '<span style="color:var(--text-muted)">Entrez un verbe en russe</span>';
    return;
  }

  if (RUSSIAN_CONJUGATIONS[verb]) {
    const data = RUSSIAN_CONJUGATIONS[verb];
    result.innerHTML = `
      <div style="margin-bottom:0.5rem;color:var(--gold);font-size:1rem">
        <strong>${verb}</strong> — <em style="color:var(--text-muted)">${data.translation}</em>
        <span style="font-size:0.75rem;color:var(--text-muted);margin-left:0.5rem">[${data.type === 'irregular' ? 'irrégulier' : 'régulier'}]</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;font-size:0.85rem">
        <div>
          <p style="color:var(--gold);font-weight:500;margin-bottom:0.3rem;font-size:0.8rem">PRÉSENT</p>
          ${Object.entries(data.present).map(([p, v]) => `<div style="display:flex;justify-content:space-between;padding:0.15rem 0"><span style="color:var(--text-muted)">${p}</span><span style="color:var(--cream)">${v}</span></div>`).join('')}
        </div>
        <div>
          <p style="color:var(--gold);font-weight:500;margin-bottom:0.3rem;font-size:0.8rem">PASSÉ</p>
          ${Object.entries(data.past).map(([p, v]) => `<div style="display:flex;justify-content:space-between;padding:0.15rem 0"><span style="color:var(--text-muted)">${p === 'm' ? 'masc' : p === 'f' ? 'fém' : p === 'n' ? 'neut' : 'plur'}</span><span style="color:var(--cream)">${v}</span></div>`).join('')}
        </div>
        <div>
          <p style="color:var(--gold);font-weight:500;margin-bottom:0.3rem;font-size:0.8rem">FUTUR</p>
          ${Object.entries(data.future).map(([p, v]) => `<div style="display:flex;justify-content:space-between;padding:0.15rem 0"><span style="color:var(--text-muted)">${p}</span><span style="color:var(--cream)">${v}</span></div>`).join('')}
        </div>
      </div>
    `;
  } else {
    result.innerHTML = `<span style="color:#E8B4B8">Verbe "${verb}" non trouvé. Vérifiez l'orthographe.</span>`;
  }
}

function speakRussian(text) {
  if (!window.speechSynthesis) {
    alert("La synthèse vocale n'est pas supportée par votre navigateur.");
    return;
  }
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ru-RU';
  utterance.rate = 0.8;
  utterance.pitch = 1;
  
  const voices = window.speechSynthesis.getVoices();
  const russianVoice = voices.find(v => v.lang.startsWith('ru'));
  if (russianVoice) utterance.voice = russianVoice;
  
  window.speechSynthesis.speak(utterance);
}

function getErrorAnalysis() {
  const errors = AIState.errors;
  const totalErrors = Object.values(errors).flat().length;
  
  if (totalErrors === 0) {
    return '<p style="text-align:center;color:var(--text-muted)">Aucune erreur enregistrée. Continuez votre bon travail ! 🌟</p>';
  }

  const sorted = Object.entries(errors)
    .sort(([, a], [, b]) => b.length - a.length)
    .slice(0, 3);

  const recommendations = {
    'grammaire': 'Concentrez-vous sur les cas russes. Essayez la leçon sur l\'accusatif.',
    'vocabulaire': 'Utilisez les flashcards pour mémoriser. Essayez le jeu de Memory !',
    'lecture': 'Lisez plus de textes adaptés. Allez dans Ressources pour trouver des lectures.',
    'culture': 'Regardez des vidéos sur la culture russe (section Ressources).',
    'prononciation': 'Écoutez des podcasts russes et répétez à voix haute.',
    'conjugaison': 'Utilisez le conjugueur ci-dessus pour réviser les verbes.'
  };

  return `
    <p style="text-align:center;margin-bottom:1rem">
      <span style="font-size:2rem">📊</span>
    </p>
    <p style="text-align:center;color:var(--text-secondary);margin-bottom:1rem">
      ${totalErrors} erreur${totalErrors > 1 ? 's' : ''} au total
    </p>
    <div style="margin:1rem 0">
      ${sorted.map(([cat, errs]) => `
        <div style="background:rgba(139,0,0,0.1);border-radius:12px;padding:0.8rem;margin-bottom:0.5rem">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.3rem">
            <span style="color:var(--cream);font-weight:500">${cat}</span>
            <span style="color:var(--text-muted);font-size:0.85rem">${errs.length} erreur${errs.length > 1 ? 's' : ''}</span>
          </div>
          <div class="progress-bar" style="height:4px">
            <div class="progress-fill" style="width:${Math.min(100, (errs.length / totalErrors) * 100)}%"></div>
          </div>
          <p style="font-size:0.8rem;color:var(--text-muted);margin-top:0.3rem">💡 ${recommendations[cat] || 'Continuez à pratiquer !'}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function getProgressPrediction() {
  const stats = AIState.stats;
  const completedLessons = stats.lessonsCompleted || 0;
  const totalLessons = Object.values(LESSONS).flat().length || 40;
  
  const daysSinceStart = Math.max(1, Math.floor((new Date() - new Date(stats.startDate)) / (1000 * 60 * 60 * 24)));
  const lessonsPerDay = completedLessons / daysSinceStart;
  
  const remaining = totalLessons - completedLessons;
  const daysRemaining = lessonsPerDay > 0 ? Math.ceil(remaining / lessonsPerDay) : '—';
  
  const accuracy = stats.totalExercises > 0 
    ? Math.round((stats.correctAnswers / stats.totalExercises) * 100) 
    : 0;

  let message = '';
  if (accuracy >= 90) message = '🌟 Excellente maîtrise ! Vous êtes sur la voie de la perfection.';
  else if (accuracy >= 70) message = '👏 Très bon niveau ! Continuez ainsi.';
  else if (accuracy >= 50) message = '💪 Bonne progression ! Un peu plus de pratique et vous y serez.';
  else message = '🌱 Chaque erreur est une leçon. Persévérez !';

  return `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0">
      <div style="background:rgba(201,169,110,0.08);border-radius:12px;padding:1rem;text-align:center">
        <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">Leçons</div>
        <div style="font-size:1.8rem;color:var(--gold);font-family:'Montserrat',sans-serif">${completedLessons}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">/ ${totalLessons}</div>
      </div>
      <div style="background:rgba(201,169,110,0.08);border-radius:12px;padding:1rem;text-align:center">
        <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">Précision</div>
        <div style="font-size:1.8rem;color:var(--gold);font-family:'Montserrat',sans-serif">${accuracy}%</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">${stats.totalExercises} exercices</div>
      </div>
      <div style="background:rgba(201,169,110,0.08);border-radius:12px;padding:1rem;text-align:center">
        <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">Jours</div>
        <div style="font-size:1.8rem;color:var(--gold);font-family:'Montserrat',sans-serif">${daysSinceStart}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">depuis le début</div>
      </div>
      <div style="background:rgba(201,169,110,0.08);border-radius:12px;padding:1rem;text-align:center">
        <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">Reste</div>
        <div style="font-size:1.8rem;color:var(--gold);font-family:'Montserrat',sans-serif">${daysRemaining}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">jours estimés</div>
      </div>
    </div>
    <p style="text-align:center;color:var(--text-secondary);font-size:0.9rem;font-style:normal">${message}</p>
  `;
}

function getReviewCards() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) {
    return '<p style="text-align:center;color:var(--text-muted)">Passez d\'abord le test de niveau pour générer des révisions personnalisées.</p>';
  }

  const allWords = [...GAME_WORDS];
  const shuffled = allWords.sort(() => Math.random() - 0.5).slice(0, 5);
  
  return `
    <p style="text-align:center;color:var(--text-muted);font-size:0.85rem;margin-bottom:1rem">
      Révision intelligente — 5 mots aléatoires à réviser
    </p>
    <div style="display:flex;flex-direction:column;gap:0.5rem">
      ${shuffled.map((word, i) => `
        <div class="review-card" style="background:rgba(255,255,255,0.02);border:1px solid rgba(201,169,110,0.12);border-radius:12px;padding:0.8rem 1rem;cursor:pointer;transition:all 0.3s"
             onclick="showReviewAnswer(${i})" id="review-${i}">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="color:var(--cream);font-size:1rem;font-family:'Montserrat',sans-serif">${word.ru}</span>
            <span style="font-size:0.75rem;color:var(--text-muted)">${word.theme}</span>
          </div>
          <div id="review-answer-${i}" style="display:none;margin-top:0.5rem;padding-top:0.5rem;border-top:1px solid rgba(201,169,110,0.1)">
            <span style="color:var(--gold)">${word.fr}</span>
            <button class="btn" onclick="event.stopPropagation();speakRussian('${word.ru}');" style="font-size:0.75rem;padding:0.3rem 0.8rem;margin-left:0.5rem">🔊</button>
          </div>
        </div>
      `).join('')}
    </div>
    <style>
      .review-card:hover { border-color: rgba(201,169,110,0.3) !important; background: rgba(255,255,255,0.05) !important; }
    </style>
  `;
}

function showReviewAnswer(index) {
  const answer = document.getElementById(`review-answer-${index}`);
  if (answer) {
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  }
}

function showAIAssistant() {
  showModal(`
    <h2>🤖 Assistant IA</h2>
    <p style="text-align:center;margin-bottom:1.5rem;font-size:0.85rem;color:var(--text-muted)">
      Votre compagnon intelligent pour apprendre le russe
    </p>
    
    <div style="display:flex;flex-direction:column;gap:1rem">
      
      <div class="ai-tab" onclick="toggleAITab('conj')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:1.1rem;color:var(--cream);font-family:'Montserrat',sans-serif">📖 Conjugueur de verbes</span>
          <span style="color:var(--gold);font-size:1.2rem">▼</span>
        </div>
        <div id="ai-tab-conj" style="display:none;margin-top:1rem">
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.8rem">Entrez un verbe en russe (infinitif) pour voir sa conjugaison complète :</p>
          <div style="display:flex;gap:0.5rem">
            <input type="text" id="ai-verb-input" placeholder="Ex: читать, говорить, быть..." 
              style="flex:1;padding:0.7rem 1rem;background:rgba(255,255,255,0.05);border:1px solid rgba(201,169,110,0.2);border-radius:10px;color:var(--cream);font-family:'Montserrat',sans-serif;font-size:1rem;outline:none"
              onkeypress="if(event.key==='Enter') conjugateVerb()">
            <button class="btn" onclick="conjugateVerb()" style="padding:0.5rem 1.2rem;font-size:0.85rem">Conjuguer</button>
          </div>
          <div id="ai-conj-result" style="margin-top:1rem;font-size:0.9rem"></div>
        </div>
      </div>
      
      <div class="ai-tab" onclick="toggleAITab('pron')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:1.1rem;color:var(--cream);font-family:'Montserrat',sans-serif">🔊 Prononciation</span>
          <span style="color:var(--gold);font-size:1.2rem">▼</span>
        </div>
        <div id="ai-tab-pron" style="display:none;margin-top:1rem">
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.8rem">Tapez un mot ou une phrase en russe et écoutez la prononciation :</p>
          <div style="display:flex;gap:0.5rem">
            <input type="text" id="ai-pron-input" placeholder="Ex: Здравствуйте, как дела?" 
              style="flex:1;padding:0.7rem 1rem;background:rgba(255,255,255,0.05);border:1px solid rgba(201,169,110,0.2);border-radius:10px;color:var(--cream);font-family:'Montserrat',sans-serif;font-size:1rem;outline:none"
              onkeypress="if(event.key==='Enter') speakRussian(document.getElementById('ai-pron-input').value)">
            <button class="btn" onclick="speakRussian(document.getElementById('ai-pron-input').value)" style="padding:0.5rem 1.2rem;font-size:0.85rem">🔊</button>
          </div>
          <p style="font-size:0.75rem;color:var(--text-muted);margin-top:0.5rem">💡 Utilise la synthèse vocale de votre navigateur</p>
        </div>
      </div>
      
      <div class="ai-tab" onclick="toggleAITab('errors')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:1.1rem;color:var(--cream);font-family:'Montserrat',sans-serif">📊 Analyse de vos erreurs</span>
          <span style="color:var(--gold);font-size:1.2rem">▼</span>
        </div>
        <div id="ai-tab-errors" style="display:none;margin-top:1rem">${getErrorAnalysis()}</div>
      </div>
      
      <div class="ai-tab" onclick="toggleAITab('pred')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:1.1rem;color:var(--cream);font-family:'Montserrat',sans-serif">📈 Prédiction de progression</span>
          <span style="color:var(--gold);font-size:1.2rem">▼</span>
        </div>
        <div id="ai-tab-pred" style="display:none;margin-top:1rem">${getProgressPrediction()}</div>
      </div>
      
      <div class="ai-tab" onclick="toggleAITab('review')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:1.1rem;color:var(--cream);font-family:'Montserrat',sans-serif">🔄 Révisions intelligentes</span>
          <span style="color:var(--gold);font-size:1.2rem">▼</span>
        </div>
        <div id="ai-tab-review" style="display:none;margin-top:1rem">${getReviewCards()}</div>
      </div>
      
    </div>
    
    <button class="restart-quiz" onclick="closeModal()" style="margin-top:1.5rem;width:100%">Fermer</button>
  `);
  
  if (!window.toggleAITab) {
    window.toggleAITab = function(tabId) {
      const tab = document.getElementById(`ai-tab-${tabId}`);
      if (tab) {
        const isVisible = tab.style.display !== 'none';
        tab.style.display = isVisible ? 'none' : 'block';
      }
    };
  }
}

// ================================================================
// ORAL PRACTICE MODULE
// ================================================================

const dialogueData = [
  {
    id: 'cafe',
    titre: '☕ Au café',
    lignes: [
      { speaker: 'A', ru: 'Здравствуйте! Что вы будете?', fr: 'Bonjour ! Que prendrez-vous ?' },
      { speaker: 'B', ru: 'Здравствуйте! Можно мне кофе, пожалуйста.', fr: 'Bonjour ! Un café, s\'il vous plaît.' },
      { speaker: 'A', ru: 'Вам чёрный кофе или с молоком?', fr: 'Vous le voulez noir ou avec du lait ?' },
      { speaker: 'B', ru: 'С молоком, пожалуйста.', fr: 'Avec du lait, s\'il vous plaît.' },
      { speaker: 'A', ru: 'Хорошо. Что-нибудь ещё?', fr: 'D\'accord. Autre chose ?' },
      { speaker: 'B', ru: 'Да, один круассан, пожалуйста.', fr: 'Oui, un croissant, s\'il vous plaît.' },
      { speaker: 'A', ru: 'С вас 300 рублей.', fr: 'Cela fait 300 roubles.' },
      { speaker: 'B', ru: 'Вот, спасибо!', fr: 'Voilà, merci !' },
    ]
  },
  {
    id: 'meteo',
    titre: '🌤 La météo',
    lignes: [
      { speaker: 'A', ru: 'Какая сегодня погода?', fr: 'Quel temps fait-il aujourd\'hui ?' },
      { speaker: 'B', ru: 'Сегодня тепло и солнечно.', fr: 'Il fait chaud et il y a du soleil.' },
      { speaker: 'A', ru: 'Какая температура?', fr: 'Quelle est la température ?' },
      { speaker: 'B', ru: 'Около 25 градусов.', fr: 'Environ 25 degrés.' },
      { speaker: 'A', ru: 'Прекрасно! Будет дождь?', fr: 'Super ! Est-ce qu\'il va pleuvoir ?' },
      { speaker: 'B', ru: 'Нет, дождя не будет.', fr: 'Non, il n\'y aura pas de pluie.' },
      { speaker: 'A', ru: 'Тогда пойдём гулять в парк!', fr: 'Alors allons nous promener au parc !' },
    ]
  },
  {
    id: 'restaurant',
    titre: '✈️ Au restaurant',
    lignes: [
      { speaker: 'A', ru: 'У вас есть свободный столик?', fr: 'Avez-vous une table libre ?' },
      { speaker: 'B', ru: 'Да, для скольких человек?', fr: 'Oui, pour combien de personnes ?' },
      { speaker: 'A', ru: 'На двоих.', fr: 'Pour deux.' },
      { speaker: 'B', ru: 'Вот меню, пожалуйста.', fr: 'Voici le menu, s\'il vous plaît.' },
      { speaker: 'A', ru: 'Что вы посоветуете?', fr: 'Que recommandez-vous ?' },
      { speaker: 'B', ru: 'Наше фирменное блюдо — борщ.', fr: 'Notre plat signature est le bortsch.' },
      { speaker: 'A', ru: 'Отлично! Я возьму борщ.', fr: 'Parfait ! Je vais prendre le bortsch.' },
      { speaker: 'B', ru: 'Счёт, пожалуйста.', fr: 'L\'addition, s\'il vous plaît.' },
    ]
  },
  {
    id: 'famille',
    titre: '👨‍👩‍👧 La famille',
    lignes: [
      { speaker: 'A', ru: 'Расскажи о своей семье.', fr: 'Parle-moi de ta famille.' },
      { speaker: 'B', ru: 'У меня большая семья.', fr: 'J\'ai une grande famille.' },
      { speaker: 'A', ru: 'Сколько у тебя братьев и сестёр?', fr: 'Combien as-tu de frères et sœurs ?' },
      { speaker: 'B', ru: 'У меня есть брат и две сестры.', fr: 'J\'ai un frère et deux sœurs.' },
      { speaker: 'A', ru: 'Твои родители живут в Москве?', fr: 'Tes parents habitent à Moscou ?' },
      { speaker: 'B', ru: 'Да, они живут в центре.', fr: 'Oui, ils habitent dans le centre.' },
      { speaker: 'A', ru: 'Как зовут твоего брата?', fr: 'Comment s\'appelle ton frère ?' },
      { speaker: 'B', ru: 'Его зовут Александр.', fr: 'Il s\'appelle Alexandre.' },
    ]
  },
  {
    id: 'travail',
    titre: '💼 Au travail',
    lignes: [
      { speaker: 'A', ru: 'Кем ты работаешь?', fr: 'Quel est ton métier ?' },
      { speaker: 'B', ru: 'Я работаю программистом.', fr: 'Je suis développeur.' },
      { speaker: 'A', ru: 'Где ты работаешь?', fr: 'Où travailles-tu ?' },
      { speaker: 'B', ru: 'Я работаю в международной компании.', fr: 'Je travaille dans une entreprise internationale.' },
      { speaker: 'A', ru: 'Нравится тебе твоя работа?', fr: 'Est-ce que tu aimes ton travail ?' },
      { speaker: 'B', ru: 'Да, очень интересная работа.', fr: 'Oui, c\'est un travail très intéressant.' },
      { speaker: 'A', ru: 'Сколько часов ты работаешь в день?', fr: 'Combien d\'heures travailles-tu par jour ?' },
      { speaker: 'B', ru: 'Обычно восемь часов.', fr: 'D\'habitude huit heures.' },
    ]
  }
];

const soundData = [
  {
    letter: 'Ы ы',
    translit: '[y]',
    description: 'Son unique entre i et ou — inexistant en français',
    conseil: 'Tirez la langue en arrière et dites "i" avec la gorge',
    mots: [
      { ru: 'мы', fr: 'nous', pron: '[my]' },
      { ru: 'ты', fr: 'tu', pron: '[ty]' },
      { ru: 'сыр', fr: 'fromage', pron: '[syr]' },
    ]
  },
  {
    letter: 'Щ щ',
    translit: '[chtch]',
    description: 'Son doux comme "chtch" — plus doux que Ш',
    conseil: 'Comme dans "fresh cheese" prononcé rapidement',
    mots: [
      { ru: 'борщ', fr: 'bortsch', pron: '[borchtch]' },
      { ru: 'щётка', fr: 'brosse', pron: ['chtchot-ka'] },
      { ru: 'ещё', fr: 'encore', pron: '[ye-chtcho]' },
    ]
  },
  {
    letter: 'Ж ж',
    translit: '[j]',
    description: 'Comme le J français mais plus fort',
    conseil: 'Comme dans "jardin" mais en vibrant plus fort',
    mots: [
      { ru: 'жизнь', fr: 'vie', pron: '[jizn]' },
      { ru: 'муж', fr: 'mari', pron: '[mouj]' },
      { ru: 'жена', fr: 'femme', pron: '[je-na]' },
    ]
  },
  {
    letter: 'Р р',
    translit: '[r roulé]',
    description: 'R roulé comme en espagnol ou italien',
    conseil: 'Faites vibrer le bout de la langue contre les dents',
    mots: [
      { ru: 'работа', fr: 'travail', pron: '[ra-bo-ta]' },
      { ru: 'рыба', fr: 'poisson', pron: '[ry-ba]' },
      { ru: 'Россия', fr: 'Russie', pron: '[ra-ssi-ya]' },
    ]
  },
  {
    letter: 'Ц ц',
    translit: '[ts]',
    description: 'Comme le "ts" dans tsar ou tsigane',
    conseil: 'Prononcez "t" + "s" rapidement',
    mots: [
      { ru: 'царь', fr: 'tsar', pron: '[tsar]' },
      { ru: 'официант', fr: 'serveur', pron: '[a-fi-tsi-ant]' },
      { ru: 'улица', fr: 'rue', pron: '[ou-li-tsa]' },
    ]
  },
  {
    letter: 'Ч ч',
    translit: '[tch]',
    description: 'Comme dans "tchèque" ou "match"',
    conseil: 'Plus doux qu\'en français, la langue touche le palais',
    mots: [
      { ru: 'чай', fr: 'thé', pron: '[tchai]' },
      { ru: 'ночь', fr: 'nuit', pron: '[notch]' },
      { ru: 'человек', fr: 'personne', pron: '[tchi-la-vyek]' },
    ]
  },
  {
    letter: 'Ш ш',
    translit: '[ch]',
    description: 'Comme le CH français mais plus dur',
    conseil: 'Arrondissez les lèvres comme pour un "ch" fort',
    mots: [
      { ru: 'школа', fr: 'école', pron: '[chko-la]' },
      { ru: 'кошка', fr: 'chat', pron: '[ko-chka]' },
      { ru: 'хорошо', fr: 'bien', pron: '[ha-ra-cho]' },
    ]
  },
  {
    letter: 'Х х',
    translit: '[kh]',
    description: 'Comme la JOTA espagnole ou le CH allemand',
    conseil: 'Grattez la gorge comme dans "loch" écossais',
    mots: [
      { ru: 'хлеб', fr: 'pain', pron: '[khlep]' },
      { ru: 'холодно', fr: 'froid', pron: '[kho-lod-na]' },
      { ru: 'хороший', fr: 'bon', pron: '[kha-ro-chiy]' },
    ]
  }
];

const phraseData = [
  {
    categorie: 'Salutations',
    phrases: [
      { ru: 'Здравствуйте', fr: 'Bonjour (formel)', pron: '[zdra-stvoi-tye]' },
      { ru: 'Привет', fr: 'Salut', pron: '[pri-vyet]' },
      { ru: 'Доброе утро', fr: 'Bonjour (matin)', pron: '[dob-ra-ye ou-tra]' },
      { ru: 'Спокойной ночи', fr: 'Bonne nuit', pron: '[spa-koi-nai no-tchi]' },
      { ru: 'До свидания', fr: 'Au revoir', pron: '[da svi-da-ni-ya]' },
      { ru: 'Как дела?', fr: 'Comment ça va ?', pron: '[kak di-la]' },
    ]
  },
  {
    categorie: 'Politesse',
    phrases: [
      { ru: 'Пожалуйста', fr: 'S\'il vous plaît', pron: '[pa-zhal-sta]' },
      { ru: 'Спасибо', fr: 'Merci', pron: '[spa-si-ba]' },
      { ru: 'Большое спасибо', fr: 'Merci beaucoup', pron: '[bal-sho-ye spa-si-ba]' },
      { ru: 'Извините', fr: 'Excusez-moi / Pardon', pron: '[iz-vi-ni-tye]' },
      { ru: 'Не за что', fr: 'De rien', pron: '[nye za chta]' },
      { ru: 'Пожалуйста, помогите', fr: 'Aidez-moi, SVP', pron: '[pa-zhal-sta, pa-ma-gi-tye]' },
    ]
  },
  {
    categorie: 'Urgence',
    phrases: [
      { ru: 'Помогите!', fr: 'Au secours !', pron: '[pa-ma-gi-tye]' },
      { ru: 'Вызовите скорую!', fr: 'Appelez une ambulance !', pron: '[vy-za-vi-tye sko-ru-yu]' },
      { ru: 'Я потерялся/потерялась', fr: 'Je suis perdu(e)', pron: '[ya pa-tye-ryal-sya / pa-tye-rya-las]' },
      { ru: 'Где больница?', fr: 'Où est l\'hôpital ?', pron: '[gdye bal-ni-tsa]' },
      { ru: 'Мне нужен врач', fr: 'J\'ai besoin d\'un médecin', pron: '[mnye nou-jen vrach]' },
      { ru: 'Вызовите полицию!', fr: 'Appelez la police !', pron: '[vy-za-vi-tye pa-li-tsi-yu]' },
      { ru: 'Я не понимаю', fr: 'Je ne comprends pas', pron: '[ya nye pa-ni-ma-yu]' },
    ]
  },
  {
    categorie: 'Restaurant',
    phrases: [
      { ru: 'Можно меню?', fr: 'Puis-je avoir le menu ?', pron: '[mój-na mi-nyu]' },
      { ru: 'Я бы хотел(а) заказать...', fr: 'Je voudrais commander...', pron: '[ya by kha-tyel(a) za-ka-zat]' },
      { ru: 'Приятного аппетита!', fr: 'Bon appétit !', pron: '[pri-yat-na-va a-pi-ti-ta]' },
      { ru: 'Очень вкусно!', fr: 'C\'est très bon !', pron: '[o-tchin vkus-na]' },
      { ru: 'Счёт, пожалуйста', fr: 'L\'addition, SVP', pron: '[schyot, pa-zhal-sta]' },
      { ru: 'Можно воды?', fr: 'Puis-je avoir de l\'eau ?', pron: '[mój-na va-dy]' },
    ]
  },
  {
    categorie: 'Shopping',
    phrases: [
      { ru: 'Сколько это стоит?', fr: 'Combien ça coûte ?', pron: '[skol-ka e-ta sto-it]' },
      { ru: 'У вас есть...?', fr: 'Avez-vous ... ?', pron: '[u vas yest]' },
      { ru: 'Можно примерить?', fr: 'Puis-je essayer ?', pron: '[mój-na pri-mye-rit]' },
      { ru: 'Это дорого', fr: 'C\'est cher', pron: '[e-ta do-ra-ga]' },
      { ru: 'Я возьму это', fr: 'Je prends ça', pron: '[ya vaz-mu e-ta]' },
    ]
  },
  {
    categorie: 'Transport',
    phrases: [
      { ru: 'Где остановка?', fr: 'Où est l\'arrêt ?', pron: '[gdye a-sta-nav-ka]' },
      { ru: 'Сколько стоит билет?', fr: 'Combien coûte le billet ?', pron: '[skol-ka sto-it bi-lyet]' },
      { ru: 'Куда идёт этот автобус?', fr: 'Où va ce bus ?', pron: '[ku-da i-dyot e-tat af-to-bus]' },
      { ru: 'Остановите здесь, пожалуйста', fr: 'Arrêtez ici, SVP', pron: '[a-sta-nvi-tye zdyes pa-zhal-sta]' },
      { ru: 'Я хочу взять такси', fr: 'Je veux prendre un taxi', pron: '[ya kha-chou vzyat tak-si]' },
    ]
  },
  {
    categorie: 'Amour',
    phrases: [
      { ru: 'Я тебя люблю', fr: 'Je t\'aime', pron: '[ya ti-bya lyub-lyu]' },
      { ru: 'Ты красивая/красивый', fr: 'Tu es belle/beau', pron: '[ty kra-si-va-ya / kra-si-viy]' },
      { ru: 'Я скучаю по тебе', fr: 'Tu me manques', pron: '[ya sku-cha-yu pa ti-bye]' },
      { ru: 'Обними меня', fr: 'Prends-moi dans tes bras', pron: '[ab-ni-mi mi-nya]' },
      { ru: 'Ты моя душа', fr: 'Tu es mon âme', pron: '[ty ma-ya du-sha]' },
      { ru: 'Поцелуй меня', fr: 'Embrasse-moi', pron: '[pa-tsi-lui mi-nya]' },
    ]
  },
  {
    categorie: 'Météo',
    phrases: [
      { ru: 'Сегодня холодно', fr: 'Il fait froid aujourd\'hui', pron: '[si-vod-nya khol-od-na]' },
      { ru: 'Идёт дождь', fr: 'Il pleut', pron: '[i-dyot dojdt]' },
      { ru: 'Солнечно', fr: 'Il fait soleil', pron: '[sol-netch-na]' },
      { ru: 'Какая температура?', fr: 'Quelle est la température ?', pron: '[ka-ka-ya tim-pi-ra-tu-ra]' },
      { ru: 'Идёт снег', fr: 'Il neige', pron: '[i-dyot snyek]' },
      { ru: 'Ветрено', fr: 'Il y a du vent', pron: '[vye-tri-na]' },
    ]
  }
];

const tongueData = [
  {
    ru: 'Карл у Клары украл кораллы, а Клара у Карла украла кларнет.',
    fr: 'Karl a volé les coraux de Klara, et Klara a volé la clarinette de Karl.',
  },
  {
    ru: 'На дворе трава, на траве дрова. Не руби дрова на траве двора!',
    fr: 'Dans la cour il y a de l\'herbe, sur l\'herbe du bois. Ne coupe pas le bois sur l\'herbe de la cour !',
  },
  {
    ru: 'Шла Саша по шоссе и сосала сушку.',
    fr: 'Sacha marchait sur l\'autoroute en suçant un biscuit sec.',
  },
  {
    ru: 'Ехал Грека через реку, видит Грека — в реке рак. Сунул Грека руку в реку — рак за руку Греку цап!',
    fr: 'Grégoire traversait la rivière, il voit dans la rivière une écrevisse. Il a plongé la main dans la rivière — l\'écrevisse l\'a attrapé par la main !',
  },
  {
    ru: 'Кукушка кукушонку купила капюшон. Надел кукушонок капюшон. Как в капюшоне он смешон!',
    fr: 'Le coucou a acheté une capuche au petit coucou. Le petit coucou a mis la capuche. Comme il est drôle avec sa capuche !',
  }
];

let oralRecognition = null;

function showOralPractice() {
  showModal(`
    <h2>🎤 Pratique Orale</h2>
    <p style="text-align:center;margin-bottom:1.5rem;font-size:0.85rem;color:var(--text-muted)">
      Entraînez-vous à parler russe avec dialogues, prononciation et reconnaissance vocale
    </p>
    <div style="display:flex;flex-direction:column;gap:1rem">
      <div class="oral-tab" onclick="toggleOralTab('dialogues')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div class="oral-tab-header">
          <span>🎭 Dialogues</span>
          <span class="oral-tab-arrow">▼</span>
        </div>
        <div id="oral-tab-dialogues" class="oral-tab-body"></div>
      </div>
      <div class="oral-tab" onclick="toggleOralTab('sounds')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div class="oral-tab-header">
          <span>🔊 Sons difficiles</span>
          <span class="oral-tab-arrow">▼</span>
        </div>
        <div id="oral-tab-sounds" class="oral-tab-body"></div>
      </div>
      <div class="oral-tab" onclick="toggleOralTab('phrases')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div class="oral-tab-header">
          <span>💬 Phrases essentielles</span>
          <span class="oral-tab-arrow">▼</span>
        </div>
        <div id="oral-tab-phrases" class="oral-tab-body"></div>
      </div>
      <div class="oral-tab" onclick="toggleOralTab('listenrepeat')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div class="oral-tab-header">
          <span>🎤 Écoute & Répète</span>
          <span class="oral-tab-arrow">▼</span>
        </div>
        <div id="oral-tab-listenrepeat" class="oral-tab-body"></div>
      </div>
      <div class="oral-tab" onclick="toggleOralTab('tongue')" style="background:rgba(201,169,110,0.06);border-radius:16px;padding:1rem;cursor:pointer;border:1px solid rgba(201,169,110,0.12)">
        <div class="oral-tab-header">
          <span>📝 Virelangues</span>
          <span class="oral-tab-arrow">▼</span>
        </div>
        <div id="oral-tab-tongue" class="oral-tab-body"></div>
      </div>
    </div>
    <button class="restart-quiz" onclick="oralCleanup();closeModal()" style="margin-top:1.5rem;width:100%">Fermer</button>
  `);
  
  if (!window.toggleOralTab) {
    window.toggleOralTab = function(tabId) {
      const tab = document.getElementById('oral-tab-' + tabId);
      if (!tab) return;
      const isOpen = tab.classList.contains('open');
      document.querySelectorAll('.oral-tab-body').forEach(t => t.classList.remove('open'));
      document.querySelectorAll('.oral-tab').forEach(t => t.classList.remove('active'));
      if (!isOpen) {
        tab.classList.add('open');
        tab.closest('.oral-tab').classList.add('active');
        switch (tabId) {
          case 'dialogues': generateDialogueContent(); break;
          case 'sounds': generateSoundsContent(); break;
          case 'phrases': generatePhrasesContent(); break;
          case 'listenrepeat': generateListenRepeatContent(); break;
          case 'tongue': generateTongueContent(); break;
        }
      }
    };
  }
}

function generateDialogueContent() {
  const container = document.getElementById('oral-tab-dialogues');
  if (!container) return;
  let html = '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.8rem">Choisissez un dialogue pour pratifier :</p>';
  dialogueData.forEach(d => {
    html += '<div class="oral-dialogue" onclick="showDialogue(\'' + d.id + '\')" style="cursor:pointer">';
    html += '<div style="font-size:1rem;color:var(--cream);font-family:\'Montserrat\',sans-serif">' + d.titre + '</div>';
    html += '<div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.3rem">' + d.lignes.length + ' répliques</div>';
    html += '</div>';
  });
  container.innerHTML = html;
}

function showDialogue(id) {
  const d = dialogueData.find(d => d.id === id);
  if (!d) return;
  let html = '<button class="restart-quiz" onclick="generateDialogueContent();toggleOralTab(\'dialogues\')" style="margin-bottom:1rem;font-size:0.75rem">← Retour aux dialogues</button>';
  html += '<h3 style="text-align:center;margin-bottom:1rem">' + d.titre + '</h3>';
  html += '<div class="oral-dialogue" style="margin:0">';
  d.lignes.forEach(l => {
    const speakerClass = l.speaker === 'A' ? 'oral-speaker-a' : 'oral-speaker-b';
    const speakerIcon = l.speaker === 'A' ? '👩' : '👨';
    html += '<div class="oral-line ' + speakerClass + '">';
    html += '<span class="oral-speaker-label">' + speakerIcon + ' ' + l.speaker + '</span>';
    html += '<div style="flex:1">';
    html += '<div class="oral-text-ru">' + l.ru + '</div>';
    html += '<div class="oral-text-fr">' + l.fr + '</div>';
    html += '</div>';
    html += '<button class="oral-voice-btn" onclick="event.stopPropagation();speakRussian(\'' + l.ru.replace(/'/g, "\\'") + '\')" title="Écouter">🔊</button>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div style="text-align:center;margin-top:1rem">';
  html += '<button class="btn" onclick="startDialoguePractice(\'' + d.id + '\')" style="font-size:0.8rem;padding:0.6rem 1.4rem">🎤 Pratiquer ce dialogue</button>';
  html += '</div>';
  html += '<div id="oral-dialogue-practice-' + d.id + '"></div>';
  showModalContent(html);
}

function startDialoguePractice(id) {
  const d = dialogueData.find(d => d.id === id);
  if (!d) return;
  const container = document.getElementById('oral-dialogue-practice-' + id);
  if (!container) return;
  let currentLine = 0;
  
  function showNextLine() {
    if (currentLine >= d.lignes.length) {
      container.innerHTML = '<div class="oral-practice-mode"><p style="color:#66BB6A">✅ Dialogue terminé ! Bravo !</p></div>';
      return;
    }
    const l = d.lignes[currentLine];
    const icon = l.speaker === 'A' ? '👩' : '👨';
    container.innerHTML = '<div class="oral-practice-mode">' +
      '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem">Répétez cette phrase :</p>' +
      '<p style="font-size:1.2rem;color:var(--cream);font-family:\'Montserrat\',sans-serif;margin-bottom:0.5rem">' + icon + ' ' + l.ru + '</p>' +
      '<p style="font-size:0.8rem;color:var(--text-muted);font-style:normal;margin-bottom:0.8rem">' + l.fr + '</p>' +
      '<div style="display:flex;gap:0.5rem;justify-content:center">' +
      '<button class="oral-voice-btn" onclick="speakRussian(\'' + l.ru.replace(/'/g, "\\'") + '\')" style="width:auto;padding:0.4rem 1rem;border-radius:50px">🔊 Écouter</button>' +
      '<button class="record-btn" onclick="practiceLine(\'' + l.ru.replace(/'/g, "\\'") + '\', function(){currentLine++;showNextLine()})" style="padding:0.4rem 1rem;font-size:0.8rem">🎤 Enregistrer</button>' +
      '</div>' +
      '<div id="oral-practice-result" style="margin-top:0.5rem"></div>' +
      '</div>';
  }
  
  showNextLine();
}

function practiceLine(expectedText, onComplete) {
  startRecording(expectedText, function(result, error) {
    const resultDiv = document.getElementById('oral-practice-result');
    if (!resultDiv) return;
    if (error) {
      resultDiv.innerHTML = '<p style="color:#FF6B6B;font-size:0.8rem">' + error + '</p>';
      return;
    }
    const pct = result.accuracy;
    let cls = 'low';
    let label = 'À améliorer';
    if (pct >= 80) { cls = 'high'; label = 'Excellent !'; }
    else if (pct >= 50) { cls = 'medium'; label = 'Pas mal'; }
    resultDiv.innerHTML = '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.3rem">Vous avez dit : <span style="color:var(--cream)">"' + result.transcript + '"</span></p>' +
      '<div><span class="accuracy-score ' + cls + '">' + label + ' — ' + pct + '%</span></div>' +
      '<button class="restart-quiz" onclick="' + onComplete.toString() + '" style="margin-top:0.5rem;font-size:0.75rem;padding:0.3rem 1rem">Continuer →</button>';
  });
}

function showModalContent(html) {
  const body = document.getElementById('modal-body');
  body.innerHTML = html;
}

function generateSoundsContent() {
  const container = document.getElementById('oral-tab-sounds');
  if (!container) return;
  let html = '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.8rem">Cliquez sur un son pour le découvrir et le pratiquer :</p>';
  html += '<div class="oral-grid-2">';
  soundData.forEach(s => {
    html += '<div class="sound-card" onclick="showSoundDetail(\'' + s.letter.replace(/'/g, "\\'") + '\')">';
    html += '<span class="sound-cyr">' + s.letter + '</span>';
    html += '<span class="sound-translit">' + s.translit + '</span>';
    html += '<span class="sound-desc">' + s.description + '</span>';
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

function showSoundDetail(letter) {
  const s = soundData.find(s => s.letter === letter);
  if (!s) return;
  let html = '<button class="restart-quiz" onclick="generateSoundsContent();toggleOralTab(\'sounds\')" style="margin-bottom:1rem;font-size:0.75rem">← Retour aux sons</button>';
  html += '<div style="text-align:center;margin-bottom:1rem">';
  html += '<span class="sound-cyr" style="font-size:3.5rem">' + s.letter + '</span>';
  html += '<p style="color:var(--text-muted);font-style:normal">' + s.translit + '</p>';
  html += '<p style="font-size:0.9rem;color:var(--text-secondary);margin-top:0.5rem">' + s.description + '</p>';
  html += '<p style="font-size:0.82rem;color:var(--gold);margin-top:0.3rem">💡 ' + s.conseil + '</p>';
  html += '</div>';
  html += '<div class="vocab-list">';
  s.mots.forEach(m => {
    html += '<div class="vocab-item">';
    html += '<span class="ru">' + m.ru + '</span>';
    html += '<span class="pron">' + m.pron + '</span>';
    html += '<span class="fr">' + m.fr + '</span>';
    html += '<button class="oral-voice-btn" onclick="speakRussian(\'' + m.ru.replace(/'/g, "\\'") + '\')" style="width:28px;height:28px;font-size:0.75rem">🔊</button>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div style="text-align:center;margin-top:1rem">';
  html += '<button class="btn" onclick="practiceSound(\'' + s.letter.replace(/'/g, "\\'") + '\')" style="font-size:0.8rem;padding:0.6rem 1.4rem">🎤 Pratiquer ce son</button>';
  html += '</div>';
  html += '<div id="oral-sound-practice-' + s.letter.replace(/ /g, '') + '"></div>';
  showModalContent(html);
}

function practiceSound(letter) {
  const s = soundData.find(s => s.letter === letter);
  if (!s) return;
  const id = 'oral-sound-practice-' + s.letter.replace(/ /g, '');
  const container = document.getElementById(id);
  if (!container) return;
  const randomWord = s.mots[Math.floor(Math.random() * s.mots.length)];
  container.innerHTML = '<div class="oral-practice-mode">' +
    '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem">Répétez ce mot :</p>' +
    '<p style="font-size:1.5rem;color:var(--cream);font-family:\'Montserrat\',sans-serif;margin-bottom:0.3rem">' + randomWord.ru + '</p>' +
    '<p style="font-size:0.8rem;color:var(--text-muted);font-style:normal;margin-bottom:0.8rem">' + randomWord.pron + ' — ' + randomWord.fr + '</p>' +
    '<div style="display:flex;gap:0.5rem;justify-content:center">' +
    '<button class="oral-voice-btn" onclick="speakRussian(\'' + randomWord.ru.replace(/'/g, "\\'") + '\')" style="width:auto;padding:0.4rem 1rem;border-radius:50px">🔊 Écouter</button>' +
    '<button class="record-btn" onclick="practiceWord(\'' + randomWord.ru.replace(/'/g, "\\'") + '\',\'' + id + '\')" style="padding:0.4rem 1rem;font-size:0.8rem">🎤 Enregistrer</button>' +
    '</div>' +
    '<div id="oral-sound-result-' + id + '" style="margin-top:0.5rem"></div>' +
    '</div>';
}

function practiceWord(word, containerId) {
  startRecording(word, function(result, error) {
    const resultDiv = document.getElementById('oral-sound-result-' + containerId);
    if (!resultDiv) return;
    if (error) {
      resultDiv.innerHTML = '<p style="color:#FF6B6B;font-size:0.8rem">' + error + '</p>';
      return;
    }
    const pct = result.accuracy;
    let cls = 'low';
    let label = 'À améliorer';
    if (pct >= 80) { cls = 'high'; label = 'Excellent !'; }
    else if (pct >= 50) { cls = 'medium'; label = 'Pas mal'; }
    resultDiv.innerHTML = '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.3rem">Vous avez dit : <span style="color:var(--cream)">"' + result.transcript + '"</span></p>' +
      '<div><span class="accuracy-score ' + cls + '">' + label + ' — ' + pct + '%</span></div>' +
      '<button class="restart-quiz" onclick="this.parentElement.parentElement.innerHTML=\'\'" style="margin-top:0.5rem;font-size:0.75rem;padding:0.3rem 1rem">Nouveau mot</button>';
  });
}

function generatePhrasesContent() {
  const container = document.getElementById('oral-tab-phrases');
  if (!container) return;
  let html = '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.8rem">Cliquez sur une catégorie pour voir les phrases :</p>';
  phraseData.forEach(cat => {
    html += '<div style="margin-bottom:0.5rem">';
    html += '<div class="phrase-cat" onclick="togglePhraseCat(\'' + cat.categorie + '\')">';
    html += '<span>' + cat.categorie + '</span>';
    html += '<span style="color:var(--gold);font-size:0.85rem">' + cat.phrases.length + ' phrases</span>';
    html += '</div>';
    html += '<div id="oral-phrases-' + cat.categorie + '" class="phrase-list">';
    cat.phrases.forEach(p => {
      html += '<div class="vocab-item">';
      html += '<span class="ru">' + p.ru + '</span>';
      html += '<span class="pron">' + p.pron + '</span>';
      html += '<span class="fr">' + p.fr + '</span>';
      html += '<button class="oral-voice-btn" onclick="speakRussian(\'' + p.ru.replace(/'/g, "\\'") + '\')" style="width:28px;height:28px;font-size:0.75rem">🔊</button>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
  });
  container.innerHTML = html;
}

function togglePhraseCat(cat) {
  const el = document.getElementById('oral-phrases-' + cat);
  if (el) el.classList.toggle('open');
}

function generateListenRepeatContent() {
  const container = document.getElementById('oral-tab-listenrepeat');
  if (!container) return;
  const allPhrases = phraseData.flatMap(c => c.phrases);
  const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
  container.innerHTML = '<div style="text-align:center;padding:1rem 0">' +
    '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">Écoutez la phrase, puis enregistrez-vous pour comparer votre prononciation</p>' +
    '<div id="oral-lr-phrase" style="margin-bottom:1rem">' +
    '<p style="font-size:1.5rem;color:var(--cream);font-family:\'Montserrat\',sans-serif;margin-bottom:0.3rem">' + randomPhrase.ru + '</p>' +
    '<p style="font-size:0.82rem;color:var(--text-muted);font-style:normal">' + randomPhrase.pron + '</p>' +
    '<p style="font-size:0.85rem;color:var(--text-secondary)">' + randomPhrase.fr + '</p>' +
    '</div>' +
    '<div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap">' +
    '<button class="btn" onclick="speakRussian(\'' + randomPhrase.ru.replace(/'/g, "\\'") + '\')" style="font-size:0.8rem;padding:0.6rem 1.2rem">🔊 Écouter</button>' +
    '<button class="record-btn" onclick="startListenRepeat(\'' + randomPhrase.ru.replace(/'/g, "\\'") + '\')" style="padding:0.6rem 1.2rem;font-size:0.8rem">🎤 Enregistrer</button>' +
    '</div>' +
    '<div id="oral-rec-status" class="oral-rec-status"></div>' +
    '<div id="oral-lr-result" class="oral-result"></div>' +
    '<button class="restart-quiz" onclick="generateListenRepeatContent()" style="margin-top:0.8rem;font-size:0.75rem">Phrase suivante →</button>' +
    '</div>';
}

function startListenRepeat(expectedText) {
  startRecording(expectedText, function(result, error) {
    const status = document.getElementById('oral-rec-status');
    const resultDiv = document.getElementById('oral-lr-result');
    if (!status || !resultDiv) return;
    if (error) {
      status.textContent = '';
      resultDiv.innerHTML = '<p style="color:#FF6B6B">' + error + '</p>';
      return;
    }
    const pct = result.accuracy;
    let cls = 'low';
    let label = 'À améliorer';
    if (pct >= 80) { cls = 'high'; label = 'Excellent !'; }
    else if (pct >= 50) { cls = 'medium'; label = 'Pas mal'; }
    status.textContent = '✅ Enregistrement terminé !';
    status.style.color = '#66BB6A';
    resultDiv.innerHTML = '<p>Vous avez dit : <span class="expected">"' + result.transcript + '"</span></p>' +
      '<p style="margin-top:0.3rem">Phrase attendue : <span class="expected">"' + expectedText + '"</span></p>' +
      '<div style="margin-top:0.5rem"><span class="accuracy-score ' + cls + '">' + label + ' — ' + pct + '%</span></div>';
  });
}

function generateTongueContent() {
  const container = document.getElementById('oral-tab-tongue');
  if (!container) return;
  let html = '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.8rem">Les virelangues russes pour travailler votre prononciation :</p>';
  tongueData.forEach((t, i) => {
    html += '<div class="tongue-card">';
    html += '<div class="tongue-ru">' + t.ru + '</div>';
    html += '<div class="tongue-fr">' + t.fr + '</div>';
    html += '<div style="display:flex;gap:0.5rem">';
    html += '<button class="oral-voice-btn" onclick="speakRussian(\'' + t.ru.replace(/'/g, "\\'") + '\')" style="width:auto;padding:0.3rem 0.8rem;border-radius:50px;font-size:0.75rem">🔊 Écouter</button>';
    html += '<button class="record-btn" onclick="startTonguePractice(' + i + ')" style="padding:0.3rem 0.8rem;font-size:0.75rem">🎤 Pratiquer</button>';
    html += '</div>';
    html += '<div id="oral-tongue-result-' + i + '" style="margin-top:0.5rem"></div>';
    html += '</div>';
  });
  container.innerHTML = html;
}

function startTonguePractice(index) {
  const t = tongueData[index];
  if (!t) return;
  startRecording(t.ru, function(result, error) {
    const resultDiv = document.getElementById('oral-tongue-result-' + index);
    if (!resultDiv) return;
    if (error) {
      resultDiv.innerHTML = '<p style="color:#FF6B6B;font-size:0.8rem">' + error + '</p>';
      return;
    }
    const pct = result.accuracy;
    let cls = 'low';
    let label = 'À améliorer';
    if (pct >= 80) { cls = 'high'; label = 'Excellent !'; }
    else if (pct >= 50) { cls = 'medium'; label = 'Pas mal'; }
    resultDiv.innerHTML = '<p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.3rem">Vous avez dit : <span style="color:var(--cream)">"' + result.transcript + '"</span></p>' +
      '<div><span class="accuracy-score ' + cls + '">' + label + ' — ' + pct + '%</span></div>';
  });
}

function startRecording(expectedText, resultCallback) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    resultCallback(null, "Reconnaissance vocale non supportée. Essayez Chrome.");
    return;
  }
  if (oralRecognition) {
    try { oralRecognition.stop(); } catch(e) {}
  }
  oralRecognition = new SpeechRecognition();
  oralRecognition.lang = 'ru-RU';
  oralRecognition.interimResults = false;
  oralRecognition.maxAlternatives = 3;
  
  const statusEl = document.getElementById('oral-rec-status');
  if (statusEl) {
    statusEl.textContent = '🎤 Enregistrement... Parlez maintenant !';
    statusEl.style.color = '#FF6B6B';
    statusEl.classList.add('recording');
  }
  
  oralRecognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    const accuracy = calculateAccuracy(expectedText, transcript);
    if (statusEl) statusEl.classList.remove('recording');
    resultCallback({ transcript, confidence, accuracy }, null);
  };
  
  oralRecognition.onerror = function(event) {
    if (statusEl) statusEl.classList.remove('recording');
    resultCallback(null, "Erreur: " + event.error);
  };
  
  oralRecognition.onend = function() {
    if (statusEl) statusEl.classList.remove('recording');
  };
  
  try {
    oralRecognition.start();
  } catch(e) {
    resultCallback(null, "Erreur de démarrage: " + e.message);
    return;
  }
  
  setTimeout(function() {
    try {
      if (oralRecognition) oralRecognition.stop();
    } catch(e) {}
  }, 5000);
}

function calculateAccuracy(expected, recognized) {
  if (!recognized) return 0;
  const a = expected.toLowerCase().trim();
  const b = recognized.toLowerCase().trim();
  const dist = levenshteinDistance(a, b);
  const maxLen = Math.max(a.length, b.length);
  return Math.max(0, Math.round((1 - dist / maxLen) * 100));
}

function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++)
    for (let j = 1; j <= a.length; j++)
      matrix[i][j] = Math.min(
        matrix[i-1][j] + 1,
        matrix[i][j-1] + 1,
        matrix[i-1][j-1] + (b[i-1] === a[j-1] ? 0 : 1)
      );
  return matrix[b.length][a.length];
}

function oralCleanup() {
  if (oralRecognition) {
    try { oralRecognition.stop(); } catch(e) {}
    oralRecognition = null;
  }
}

// ================================================================
// SPLASH SCREEN
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
  const splash = document.getElementById('splash');
  const splashBtn = document.getElementById('splash-btn');
  const mainContent = document.querySelector('main');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (mainContent) mainContent.style.opacity = '0';
  if (header) header.style.opacity = '0';
  if (footer) footer.style.opacity = '0';

  splashBtn.addEventListener('click', function() {
    splash.classList.add('hidden');
    if (mainContent) {
      setTimeout(() => {
        mainContent.style.transition = 'opacity 1s ease';
        mainContent.style.opacity = '1';
      }, 200);
    }
    if (header) {
      setTimeout(() => {
        header.style.transition = 'opacity 1s ease';
        header.style.opacity = '1';
      }, 400);
    }
    if (footer) {
      setTimeout(() => {
        footer.style.transition = 'opacity 1s ease';
        footer.style.opacity = '1';
      }, 600);
    }
  });
});
