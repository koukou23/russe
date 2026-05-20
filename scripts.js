const QUESTIONS = [
  {
    question: "Comment interprétez-vous la phrase : « Я люблю читать русскую литературу » ?",
    options: [
      "J'aime lire la littérature russe",
      "Je veux écrire de la littérature russe",
      "Je lis de la littérature russe",
      "J'apprends la littérature russe"
    ],
    correct: 0,
    type: "compréhension"
  },
  {
    question: "Quelle est la forme correcte au génitif pluriel de « книга » (livre) ?",
    options: ["книги", "книг", "книгах", "книгам"],
    correct: 1,
    type: "grammaire"
  },
  {
    question: "Dans quel cas utilise-t-on la préposition « о » (à propos de) ?",
    options: ["Accusatif", "Génitif", "Prépositionnel", "Datif"],
    correct: 2,
    type: "grammaire"
  },
  {
    question: "Que signifie l'expression « бить баклуши » ?",
    options: [
      "Travailler dur",
      "Se reposer, ne rien faire",
      "Casser quelque chose",
      "Se dépêcher"
    ],
    correct: 1,
    type: "vocabulaire"
  },
  {
    question: "Lisez ce passage : « В Санкт-Петербурге белые ночи. Город на Неве удивительно красив летом. » Que comprend-on ?",
    options: [
      "Saint-Pétersbourg est froid en hiver",
      "Les nuits blanches à Saint-Pétersbourg sont magnifiques",
      "La Neva gèle en été",
      "Saint-Pétersbourg est une petite ville"
    ],
    correct: 1,
    type: "compréhension"
  }
];

const LEVELS = [
  { id: "debutant", name: "Débutante", min: 0, max: 1 },
  { id: "intermediaire", name: "Intermédiaire", min: 2, max: 3 },
  { id: "avance", name: "Avancée", min: 4, max: 5 }
];

const LESSONS = {
  debutant: [
    {
      id: 'd1',
      title: 'Alphabet cyrillique (А-Л)',
      content: `<p>L'alphabet russe compte <strong>33 lettres</strong>. Commençons par les 11 premières, de A à Л.</p>
        <div class="lesson-alphabet">
          <div class="letter-card"><span class="cyr">А а</span><span class="phon">/a/</span><span class="example">comme dans <strong>papa</strong></span></div>
          <div class="letter-card"><span class="cyr">Б б</span><span class="phon">/b/</span><span class="example">comme dans <strong>bébé</strong></span></div>
          <div class="letter-card"><span class="cyr">В в</span><span class="phon">/v/</span><span class="example">comme dans <strong>vélo</strong></span></div>
          <div class="letter-card"><span class="cyr">Г г</span><span class="phon">/g/</span><span class="example">comme dans <strong>gare</strong></span></div>
          <div class="letter-card"><span class="cyr">Д д</span><span class="phon">/d/</span><span class="example">comme dans <strong>dé</strong></span></div>
          <div class="letter-card"><span class="cyr">Е е</span><span class="phon">/jɛ/</span><span class="example">comme <strong>yé</strong> dans <strong>yéti</strong></span></div>
          <div class="letter-card"><span class="cyr">Ё ё</span><span class="phon">/jo/</span><span class="example">comme <strong>yo</strong> dans <strong>yoga</strong></span></div>
          <div class="letter-card"><span class="cyr">Ж ж</span><span class="phon">/ʒ/</span><span class="example">comme <strong>j</strong> dans <strong>jardin</strong></span></div>
          <div class="letter-card"><span class="cyr">З з</span><span class="phon">/z/</span><span class="example">comme dans <strong>zèbre</strong></span></div>
          <div class="letter-card"><span class="cyr">И и</span><span class="phon">/i/</span><span class="example">comme dans <strong>île</strong></span></div>
          <div class="letter-card"><span class="cyr">К к</span><span class="phon">/k/</span><span class="example">comme dans <strong>kilo</strong></span></div>
          <div class="letter-card"><span class="cyr">Л л</span><span class="phon">/l/</span><span class="example">comme dans <strong>lune</strong></span></div>
        </div>
        <p style="margin-top:1.2rem;font-style:italic;color:var(--text-muted)">Astuce : certaines lettres ressemblent au latin mais se prononcent différemment. Le <strong>В</strong> est un V, le <strong>Н</strong> sera un N (on le verra plus tard) !</p>`,
      examples: ['А — а comme dans "papa"', 'Б — б comme dans "bébé"', 'В — в comme dans "vélo"', 'Г — г comme dans "gare"'],
      exercise: {
        question: 'Comment se prononce la lettre russe « В » ?',
        options: ['Comme un B', 'Comme un V', 'Comme un W', 'Comme un F'],
        correct: 1
      }
    },
    {
      id: 'd2',
      title: 'Alphabet cyrillique (М-Я)',
      content: `<p>Continuons avec les 21 lettres restantes !</p>
        <div class="lesson-alphabet">
          <div class="letter-card"><span class="cyr">М м</span><span class="phon">/m/</span><span class="example">comme dans <strong>maman</strong></span></div>
          <div class="letter-card"><span class="cyr">Н н</span><span class="phon">/n/</span><span class="example">comme dans <strong>nez</strong></span></div>
          <div class="letter-card"><span class="cyr">О о</span><span class="phon">/o/</span><span class="example">comme dans <strong>mot</strong></span></div>
          <div class="letter-card"><span class="cyr">П п</span><span class="phon">/p/</span><span class="example">comme dans <strong>père</strong></span></div>
          <div class="letter-card"><span class="cyr">Р р</span><span class="phon">/r/</span><span class="example">R roulé, comme en <strong>espagnol</strong></span></div>
          <div class="letter-card"><span class="cyr">С с</span><span class="phon">/s/</span><span class="example">comme dans <strong>soleil</strong></span></div>
          <div class="letter-card"><span class="cyr">Т т</span><span class="phon">/t/</span><span class="example">comme dans <strong>table</strong></span></div>
          <div class="letter-card"><span class="cyr">У у</span><span class="phon">/u/</span><span class="example">comme <strong>ou</strong> dans <strong>loup</strong></span></div>
          <div class="letter-card"><span class="cyr">Ф ф</span><span class="phon">/f/</span><span class="example">comme dans <strong>fleur</strong></span></div>
          <div class="letter-card"><span class="cyr">Х х</span><span class="phon">/x/</span><span class="example">comme <strong>j</strong> espagnol ou <strong>ch</strong> allemand</span></div>
          <div class="letter-card"><span class="cyr">Ц ц</span><span class="phon">/ts/</span><span class="example">comme <strong>ts</strong> dans <strong>tsar</strong></span></div>
          <div class="letter-card"><span class="cyr">Ч ч</span><span class="phon">/tʃ/</span><span class="example">comme <strong>tch</strong> dans <strong>tchèque</strong></span></div>
        </div>
        <div class="lesson-alphabet">
          <div class="letter-card"><span class="cyr">Ш ш</span><span class="phon">/ʃ/</span><span class="example">comme <strong>ch</strong> dans <strong>chat</strong></span></div>
          <div class="letter-card"><span class="cyr">Щ щ</span><span class="phon">/ʃtʃ/</span><span class="example">"ch" plus doux, comme <strong>chtch</strong></span></div>
          <div class="letter-card"><span class="cyr">Ъ ъ</span><span class="phon">—</span><span class="example">signe dur (ne se prononce pas)</span></div>
          <div class="letter-card"><span class="cyr">Ы ы</span><span class="phon">/ɨ/</span><span class="example">son unique, entre i et ou</span></div>
          <div class="letter-card"><span class="cyr">Ь ь</span><span class="phon">—</span><span class="example">signe mou (adoucit la consonne)</span></div>
          <div class="letter-card"><span class="cyr">Э э</span><span class="phon">/ɛ/</span><span class="example">comme <strong>è</strong> dans <strong>père</strong></span></div>
          <div class="letter-card"><span class="cyr">Ю ю</span><span class="phon">/ju/</span><span class="example">comme <strong>you</strong> dans <strong>youpi</strong></span></div>
          <div class="letter-card"><span class="cyr">Я я</span><span class="phon">/ja/</span><span class="example">comme <strong>ya</strong> dans <strong>yaourt</strong></span></div>
        </div>
        <p style="margin-top:1.2rem;font-style:italic;color:var(--text-muted)">Félicitations ! Vous connaissez maintenant tout l'alphabet cyrillique. Entraînez-vous à lire des mots simples comme <strong>мама</strong> (maman), <strong>папа</strong> (papa), <strong>кот</strong> (chat).</p>`,
      examples: ['М — м comme dans "maman"', 'Н — н comme dans "nez"', 'Р — р est roulé', 'Я — я comme "ya"'],
      exercise: {
        question: 'Quel mot russe signifie « maman » ?',
        options: ['папа', 'мама', 'кот', 'дом'],
        correct: 1
      }
    },
    {
      id: 'd3',
      title: 'Salutations et présentations',
      content: `<p>Apprenons à saluer et à nous présenter en russe. Ces phrases sont essentielles pour toute conversation.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">Здравствуйте</span><span class="fr">Bonjour (formel)</span><span class="pron">[zdra-stvoï-tye]</span></div>
          <div class="vocab-item"><span class="ru">Привет</span><span class="fr">Salut (informel)</span><span class="pron">[pri-vyet]</span></div>
          <div class="vocab-item"><span class="ru">Как дела?</span><span class="fr">Comment ça va ?</span><span class="pron">[kak di-la]</span></div>
          <div class="vocab-item"><span class="ru">Хорошо</span><span class="fr">Bien</span><span class="pron">[ha-ra-cho]</span></div>
          <div class="vocab-item"><span class="ru">Спасибо</span><span class="fr">Merci</span><span class="pron">[spa-si-ba]</span></div>
          <div class="vocab-item"><span class="ru">Пожалуйста</span><span class="fr">S\'il vous plaît / De rien</span><span class="pron">[pa-zhal-sta]</span></div>
          <div class="vocab-item"><span class="ru">Меня зовут ...</span><span class="fr">Je m'appelle ...</span><span class="pron">[mi-nya za-vout]</span></div>
          <div class="vocab-item"><span class="ru">Очень приятно</span><span class="fr">Enchanté</span><span class="pron">[o-tchen pri-yat-na]</span></div>
          <div class="vocab-item"><span class="ru">До свидания</span><span class="fr">Au revoir (formel)</span><span class="pron">[da svi-da-ni-ya]</span></div>
          <div class="vocab-item"><span class="ru">Пока</span><span class="fr">Salut / À plus (informel)</span><span class="pron">[pa-ka]</span></div>
        </div>
        <p style="margin-top:1rem;">Dialogue :<br><br>
        — <strong>Здравствуйте!</strong> Как дела?<br>
        — <strong>Хорошо, спасибо!</strong> А у вас?<br>
        — Тоже хорошо. <strong>Меня зовут</strong> Анна. <strong>Очень приятно</strong>.<br>
        — <strong>Очень приятно</strong>.</p>`,
      examples: ['Здравствуйте — Bonjour (formel)', 'Привет — Salut', 'Как дела? — Comment ça va?', 'Спасибо — Merci'],
      exercise: {
        question: 'Comment dit-on « Bonjour » (formel) en russe ?',
        options: ['Привет', 'Здравствуйте', 'Пока', 'Спасибо'],
        correct: 1
      }
    },
    {
      id: 'd4',
      title: 'Les nombres 1–20',
      content: `<p>Maîtriser les nombres est essentiel pour les achats, l'heure, les dates. Voici les nombres de 1 à 20.</p>
        <div class="numbers-grid">
          <div class="num-item"><span class="num">1</span><span class="ru">один</span><span class="pron">[a-din]</span></div>
          <div class="num-item"><span class="num">2</span><span class="ru">два</span><span class="pron">[dva]</span></div>
          <div class="num-item"><span class="num">3</span><span class="ru">три</span><span class="pron">[tri]</span></div>
          <div class="num-item"><span class="num">4</span><span class="ru">четыре</span><span class="pron">[chi-ty-rye]</span></div>
          <div class="num-item"><span class="num">5</span><span class="ru">пять</span><span class="pron">[pyat']</span></div>
          <div class="num-item"><span class="num">6</span><span class="ru">шесть</span><span class="pron">[shest']</span></div>
          <div class="num-item"><span class="num">7</span><span class="ru">семь</span><span class="pron">[syem']</span></div>
          <div class="num-item"><span class="num">8</span><span class="ru">восемь</span><span class="pron">[vo-syem']</span></div>
          <div class="num-item"><span class="num">9</span><span class="ru">девять</span><span class="pron">[dye-vyat']</span></div>
          <div class="num-item"><span class="num">10</span><span class="ru">десять</span><span class="pron">[dye-syat']</span></div>
          <div class="num-item"><span class="num">11</span><span class="ru">одиннадцать</span><span class="pron">[a-di-na-tsat']</span></div>
          <div class="num-item"><span class="num">12</span><span class="ru">двенадцать</span><span class="pron">[dvi-nad-tsat']</span></div>
          <div class="num-item"><span class="num">13</span><span class="ru">тринадцать</span><span class="pron">[tri-nad-tsat']</span></div>
          <div class="num-item"><span class="num">14</span><span class="ru">четырнадцать</span><span class="pron">[chi-tyr-nad-tsat']</span></div>
          <div class="num-item"><span class="num">15</span><span class="ru">пятнадцать</span><span class="pron">[pyat-nad-tsat']</span></div>
          <div class="num-item"><span class="num">16</span><span class="ru">шестнадцать</span><span class="pron">[shest-nad-tsat']</span></div>
          <div class="num-item"><span class="num">17</span><span class="ru">семнадцать</span><span class="pron">[syem-nad-tsat']</span></div>
          <div class="num-item"><span class="num">18</span><span class="ru">восемнадцать</span><span class="pron">[va-syem-nad-tsat']</span></div>
          <div class="num-item"><span class="num">19</span><span class="ru">девятнадцать</span><span class="pron">[dye-vyat-nad-tsat']</span></div>
          <div class="num-item"><span class="num">20</span><span class="ru">двадцать</span><span class="pron">[dva-tsat']</span></div>
        </div>
        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">Les nombres de 11 à 19 se forment avec le suffixe <strong>-надцать</strong>. À partir de 20, on utilise <strong>двадцать</strong> (20), <strong>тридцать</strong> (30), etc.</p>`,
      examples: ['один — 1', 'два — 2', 'пять — 5', 'десять — 10', 'двадцать — 20'],
      exercise: {
        question: 'Comment dit-on « 5 » en russe ?',
        options: ['десять', 'пять', 'шесть', 'три'],
        correct: 1
      }
    },
    {
      id: 'd5',
      title: 'La famille et les couleurs',
      content: `<p>Apprenons le vocabulaire de la famille et les couleurs de base.</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">👨‍👩‍👧‍👦 La famille</h3>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">мама</span><span class="fr">maman</span><span class="pron">[ma-ma]</span></div>
          <div class="vocab-item"><span class="ru">папа</span><span class="fr">papa</span><span class="pron">[pa-pa]</span></div>
          <div class="vocab-item"><span class="ru">брат</span><span class="fr">frère</span><span class="pron">[brat]</span></div>
          <div class="vocab-item"><span class="ru">сестра</span><span class="fr">sœur</span><span class="pron">[sis-tra]</span></div>
          <div class="vocab-item"><span class="ru">бабушка</span><span class="fr">grand-mère</span><span class="pron">[ba-bouch-ka]</span></div>
          <div class="vocab-item"><span class="ru">дедушка</span><span class="fr">grand-père</span><span class="pron">[dye-douch-ka]</span></div>
          <div class="vocab-item"><span class="ru">дочь</span><span class="fr">fille</span><span class="pron">[dotch']</span></div>
          <div class="vocab-item"><span class="ru">сын</span><span class="fr">fils</span><span class="pron">[syn]</span></div>
        </div>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">🎨 Les couleurs</h3>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">красный</span><span class="fr">rouge</span><span class="pron">[kras-nyï]</span></div>
          <div class="vocab-item"><span class="ru">синий</span><span class="fr">bleu</span><span class="pron">[si-niï]</span></div>
          <div class="vocab-item"><span class="ru">зелёный</span><span class="fr">vert</span><span class="pron">[zi-lyo-nyï]</span></div>
          <div class="vocab-item"><span class="ru">жёлтый</span><span class="fr">jaune</span><span class="pron">[jol-tyï]</span></div>
          <div class="vocab-item"><span class="ru">белый</span><span class="fr">blanc</span><span class="pron">[bye-lyï]</span></div>
          <div class="vocab-item"><span class="ru">чёрный</span><span class="fr">noir</span><span class="pron">[chvor-nyï]</span></div>
        </div>`,
      examples: ['мама — maman', 'папа — papa', 'красный — rouge', 'синий — bleu'],
      exercise: {
        question: 'Comment dit-on « sœur » en russe ?',
        options: ['брат', 'сестра', 'мама', 'дочь'],
        correct: 1
      }
    }
  ],
  intermediaire: [
    {
      id: 'i1',
      title: 'Les cas — nominatif et accusatif',
      content: `<p>Le russe utilise des <strong>cas</strong> pour indiquer la fonction des mots dans la phrase. Contrairement au français, l'ordre des mots est plus libre grâce aux cas.</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Nominatif</h3>
        <p>Le <strong>nominatif</strong> est la forme de base du mot (le sujet). Il répond à la question <em>qui ? quoi ?</em></p>
        <div class="example-box">
          <p><strong>Стол</strong> стоит в комнате. — <strong>La table</strong> est dans la pièce.</p>
          <p><strong>Книга</strong> лежит на столе. — <strong>Le livre</strong> est sur la table.</p>
        </div>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Accusatif</h3>
        <p>L'<strong>accusatif</strong> indique le complément d'objet direct. Il répond à la question <em>qui ? quoi ?</em> (mais dans un rôle différent).</p>
        <div class="example-box">
          <p>Я вижу <strong>стол</strong>. — Je vois <strong>la table</strong>.</p>
          <p>Я читаю <strong>книгу</strong>. — Je lis <strong>le livre</strong>.</p>
        </div>
        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">Remarquez : <strong>книга</strong> (nominatif) devient <strong>книгу</strong> (accusatif). Le nom change de terminaison !</p>
        <div class="table-wrap"><table class="case-table"><tr><th>Genre</th><th>Nominatif</th><th>Accusatif</th></tr><tr><td>Masculin inanimé</td><td>стол</td><td>стол</td></tr><tr><td>Féminin (а/я)</td><td>книга</td><td>книгу</td></tr><tr><td>Neutre</td><td>окно</td><td>окно</td></tr></table></div>`,
      examples: ['Стол — table (nominatif)', 'Книгу — livre (accusatif)', 'Я вижу дом — Je vois la maison'],
      exercise: {
        question: 'Quelle est la forme accusative de « книга » (livre) ?',
        options: ['книга', 'книгу', 'книги', 'книгой'],
        correct: 1
      }
    },
    {
      id: 'i2',
      title: 'Le passé des verbes',
      content: `<p>En russe, le passé est plus simple qu'en français ! Il se forme en remplaçant la terminaison de l'infinitif par un suffixe selon le genre.</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Formation</h3>
        <p>Prenez le radical du verbe et ajoutez :</p>
        <ul style="color:var(--text-secondary);line-height:2">
          <li><strong>-л</strong> pour le masculin : <em>он чита<strong>л</strong></em> (il lisait)</li>
          <li><strong>-ла</strong> pour le féminin : <em>она чита<strong>ла</strong></em> (elle lisait)</li>
          <li><strong>-ло</strong> pour le neutre : <em>оно чита<strong>ло</strong></em> (il/elle lisait)</li>
          <li><strong>-ли</strong> pour le pluriel : <em>они чита<strong>ли</strong></em> (ils/elles lisaient)</li>
        </ul>
        <p>Verbes courants : <strong>читать</strong> (lire), <strong>говорить</strong> (parler), <strong>делать</strong> (faire).</p>
        <div class="example-box">
          <p>Я <strong>читал</strong> книгу. — Je lisais un livre. (homme)</p>
          <p>Она <strong>говорила</strong> по-русски. — Elle parlait russe.</p>
          <p>Мы <strong>делали</strong> уроки. — Nous faisions les devoirs.</p>
        </div>`,
      examples: ['читал — il lisait', 'читала — elle lisait', 'говорили — ils parlaient'],
      exercise: {
        question: 'Quelle est la forme féminine du verbe « читать » au passé ?',
        options: ['читал', 'читала', 'читало', 'читали'],
        correct: 1
      }
    },
    {
      id: 'i3',
      title: 'Vocabulaire du voyage',
      content: `<p>Partez en voyage avec ces mots et expressions essentiels !</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">🗺️ Directions et lieux</h3>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">где?</span><span class="fr">où ?</span><span class="pron">[gdye]</span></div>
          <div class="vocab-item"><span class="ru">куда?</span><span class="fr">vers où ?</span><span class="pron">[kou-da]</span></div>
          <div class="vocab-item"><span class="ru">откуда?</span><span class="fr">d'où ?</span><span class="pron">[at-kou-da]</span></div>
          <div class="vocab-item"><span class="ru">прямо</span><span class="fr">tout droit</span><span class="pron">[prya-ma]</span></div>
          <div class="vocab-item"><span class="ru">налево</span><span class="fr">à gauche</span><span class="pron">[na-lye-va]</span></div>
          <div class="vocab-item"><span class="ru">направо</span><span class="fr">à droite</span><span class="pron">[na-pra-va]</span></div>
          <div class="vocab-item"><span class="ru">вокзал</span><span class="fr">gare</span><span class="pron">[vak-zal]</span></div>
          <div class="vocab-item"><span class="ru">аэропорт</span><span class="fr">aéroport</span><span class="pron">[a-e-ra-port]</span></div>
          <div class="vocab-item"><span class="ru">остановка</span><span class="fr">arrêt (bus)</span><span class="pron">[as-ta-nov-ka]</span></div>
          <div class="vocab-item"><span class="ru">метро</span><span class="fr">métro</span><span class="pron">[mi-tro]</span></div>
        </div>
        <p style="margin-top:1rem;">Phrase utile :<br>
        <strong>Извините, как пройти к метро?</strong> — Excusez-moi, comment aller au métro ?</p>`,
      examples: ['Где вокзал? — Où est la gare ?', 'Прямо и налево — Tout droit et à gauche', 'Как пройти? — Comment aller ?'],
      exercise: {
        question: 'Comment dit-on « tout droit » en russe ?',
        options: ['налево', 'направо', 'прямо', 'где'],
        correct: 2
      }
    },
    {
      id: 'i4',
      title: 'Au restaurant',
      content: `<p>Savoir commander au restaurant est essentiel ! Voici le vocabulaire pour briller dans un restaurant russe.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">меню</span><span class="fr">le menu (la carte)</span><span class="pron">[mi-niu]</span></div>
          <div class="vocab-item"><span class="ru">официант</span><span class="fr">serveur</span><span class="pron">[a-fi-tsi-ant]</span></div>
          <div class="vocab-item"><span class="ru">счёт</span><span class="fr">l'addition</span><span class="pron">[schyot]</span></div>
          <div class="vocab-item"><span class="ru">завтрак</span><span class="fr">petit-déjeuner</span><span class="pron">[zav-trak]</span></div>
          <div class="vocab-item"><span class="ru">обед</span><span class="fr">déjeuner</span><span class="pron">[a-byed]</span></div>
          <div class="vocab-item"><span class="ru">ужин</span><span class="fr">dîner</span><span class="pron">[ou-jin]</span></div>
          <div class="vocab-item"><span class="ru">борщ</span><span class="fr">bortsch (soupe)</span><span class="pron">[borchtch]</span></div>
          <div class="vocab-item"><span class="ru">салат</span><span class="fr">salade</span><span class="pron">[sa-lat]</span></div>
        </div>
        <p style="margin-top:1rem;">Phrases utiles :<br>
        — <strong>Можно меню?</strong> — Puis-je avoir le menu ?<br>
        — <strong>Я буду борщ, пожалуйста.</strong> — Je prendrai le bortsch, s'il vous plaît.<br>
        — <strong>Счёт, пожалуйста.</strong> — L'addition, s'il vous plaît.</p>`,
      examples: ['Можно меню? — Puis-je voir le menu ?', 'Я буду... — Je prendrai...', 'Счёт, пожалуйста — L\'addition SVP'],
      exercise: {
        question: 'Comment demande-t-on l\'addition en russe ?',
        options: ['Можно меню?', 'Счёт, пожалуйста', 'Я буду борщ', 'Приятного аппетита'],
        correct: 1
      }
    },
    {
      id: 'i5',
      title: 'Les prépositions de lieu',
      content: `<p>Les prépositions de lieu sont essentielles pour décrire où se trouvent les choses. Elles se combinent avec différents cas.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">в</span><span class="fr">dans, à (intérieur)</span><span class="pron">[v]</span></div>
          <div class="vocab-item"><span class="ru">на</span><span class="fr">sur, à (surface/événement)</span><span class="pron">[na]</span></div>
          <div class="vocab-item"><span class="ru">у</span><span class="fr">chez, près de</span><span class="pron">[ou]</span></div>
          <div class="vocab-item"><span class="ru">под</span><span class="fr">sous</span><span class="pron">[pod]</span></div>
          <div class="vocab-item"><span class="ru">над</span><span class="fr">au-dessus de</span><span class="pron">[nad]</span></div>
          <div class="vocab-item"><span class="ru">за</span><span class="fr">derrière</span><span class="pron">[za]</span></div>
          <div class="vocab-item"><span class="ru">перед</span><span class="fr">devant</span><span class="pron">[pye-ryed]</span></div>
          <div class="vocab-item"><span class="ru">между</span><span class="fr">entre</span><span class="pron">[myej-dou]</span></div>
        </div>
        <div class="example-box" style="margin-top:1rem">
          <p>Книга <strong>на</strong> столе. — Le livre est <strong>sur</strong> la table.</p>
          <p>Кот <strong>под</strong> столом. — Le chat est <strong>sous</strong> la table.</p>
          <p>Лампа <strong>над</strong> столом. — La lampe est <strong>au-dessus de</strong> la table.</p>
          <p>Я <strong>у</strong> друга. — Je suis <strong>chez</strong> un ami.</p>
          <p>Мы <strong>в</strong> музее. — Nous sommes <strong>dans</strong> le musée.</p>
        </div>
        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">Note : <strong>в</strong> et <strong>на</strong> sont suivis du prépositionnel pour le lieu (où on est), mais de l'accusatif pour la direction (où on va).</p>`,
      examples: ['в — dans', 'на — sur', 'у — chez', 'под — sous', 'над — au-dessus'],
      exercise: {
        question: 'Quelle préposition signifie « sous » en russe ?',
        options: ['над', 'под', 'на', 'у'],
        correct: 1
      }
    }
  ],
  avance: [
    {
      id: 'a1',
      title: 'Verbes de mouvement',
      content: `<p>Les verbes de mouvement en russe sont un sujet fascinant et complexe. Ils existent généralement en <strong>paires</strong> : déterminé (direction précise) et indéterminé (mouvement habituel/sans direction).</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Идти / Ходить (aller à pied)</h3>
        <div class="example-box">
          <p><strong>Идти</strong> (déterminé) : action en cours, direction unique.<br>
          Я <strong>иду</strong> в магазин. — Je vais au magasin (maintenant).</p>
          <p><strong>Ходить</strong> (indéterminé) : mouvement habituel, aller-retour.<br>
          Я <strong>хожу</strong> в магазин каждый день. — Je vais au magasin tous les jours.</p>
        </div>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Ехать / Ездить (aller en transport)</h3>
        <div class="example-box">
          <p><strong>Ехать</strong> (déterminé) :<br>
          Мы <strong>едем</strong> в Москву. — Nous allons à Moscou (en train/voiture).</p>
          <p><strong>Ездить</strong> (indéterminé) :<br>
          Мы <strong>ездим</strong> в Москву каждое лето. — Nous allons à Moscou chaque été.</p>
        </div>
        <table class="case-table"><tr><th>Verbe</th><th>Type</th><th>Signification</th></tr><tr><td>идти</td><td>déterminé (à pied)</td><td>aller (maintenant)</td></tr><tr><td>ходить</td><td>indéterminé (à pied)</td><td>aller (habitude)</td></tr><tr><td>ехать</td><td>déterminé (transport)</td><td>aller (maintenant)</td></tr><tr><td>ездить</td><td>indéterminé (transport)</td><td>aller (habitude)</td></tr></table>`,
      examples: ['Идти / Ходить — aller à pied', 'Ехать / Ездить — aller en transport', 'Я иду домой — Je rentre à la maison'],
      exercise: {
        question: 'Quel verbe utilise-t-on pour un mouvement habituel à pied ?',
        options: ['идти', 'ехать', 'ходить', 'ездить'],
        correct: 2
      }
    },
    {
      id: 'a2',
      title: 'Aspect verbal — perfectif / imperfectif',
      content: `<p>Chaque verbe russe existe en deux aspects : <strong>imperfectif</strong> (action en cours, habituelle) et <strong>perfectif</strong> (action accomplie, résultat).</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Imperfectif (НСВ)</h3>
        <p>L'action n'est pas achevée :<br>
        — Elle est en cours : <em>Я <strong>читал</strong> книгу</em> (j'étais en train de lire)<br>
        — Elle est habituelle : <em>Я <strong>читаю</strong> каждый день</em> (je lis tous les jours)</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Perfectif (СВ)</h3>
        <p>L'action est accomplie, le résultat compte :<br>
        — <em>Я <strong>прочитал</strong> книгу</em> (j'ai fini de lire le livre)</p>
        <div class="example-box">
          <p><strong>Делать / Сделать</strong> (faire)<br>
          — Что ты <strong>делаешь</strong> ? — Qu'est-ce que tu fais ?<br>
          — Я <strong>сделал</strong> уроки. — J'ai fait mes devoirs.</p>
          <p><strong>Писать / Написать</strong> (écrire)<br>
          — Я <strong>пишу</strong> письмо. — J'écris une lettre.<br>
          — Я <strong>написал</strong> письмо. — J'ai écrit une lettre.</p>
        </div>
        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">Le perfectif se forme souvent en ajoutant un préfixe : <strong>про-</strong>, <strong>на-</strong>, <strong>с-</strong>, etc.</p>`,
      examples: ['делать / сделать — faire (imperfectif/perfectif)', 'читать / прочитать — lire', 'писать / написать — écrire'],
      exercise: {
        question: 'Quel aspect exprime une action accomplie ?',
        options: ['Imperfectif', 'Perfectif', 'Les deux', 'Aucun'],
        correct: 1
      }
    },
    {
      id: 'a3',
      title: 'Lecture — un texte de Pouchkine',
      content: `<p>Analysons ensemble un court extrait du célèbre poème d'Alexandre Pouchkine, <strong>« Я вас любил »</strong> (Je vous aimais).</p>
        <div class="poem-box">
          <p class="poem-ru">Я вас любил: любовь ещё, быть может,<br>
          В душе моей угасла не совсем;<br>
          Но пусть она вас больше не тревожит;<br>
          Я не хочу печалить вас ничем.</p>
          <p class="poem-fr">Je vous aimais : l'amour peut-être<br>
          Dans mon âme n'est pas encore tout à fait éteint ;<br>
          Mais qu'il ne vous trouble plus ;<br>
          Je ne veux vous attrister de rien.</p>
        </div>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">Analyse du vocabulaire</h3>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">любить</span><span class="fr">aimer</span></div>
          <div class="vocab-item"><span class="ru">любовь</span><span class="fr">l'amour</span></div>
          <div class="vocab-item"><span class="ru">душа</span><span class="fr">l'âme</span></div>
          <div class="vocab-item"><span class="ru">угасла</span><span class="fr">s'est éteinte (passé de угаснуть)</span></div>
          <div class="vocab-item"><span class="ru">тревожить</span><span class="fr">troubler, déranger</span></div>
          <div class="vocab-item"><span class="ru">печалить</span><span class="fr">attrister</span></div>
        </div>
        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">Pouchkine utilise ici le passé (<strong>любил</strong>, <strong>угасла</strong>) et l'infinitif (<strong>тревожить</strong>, <strong>печалить</strong>). Notez la musicalité des rimes : <strong>может</strong> rime avec <strong>тревожит</strong>, <strong>совсем</strong> avec <strong>ничем</strong>.</p>`,
      examples: ['Любить — aimer', 'Душа — l\'âme', 'Любовь — l\'amour', 'Печалить — attrister'],
      exercise: {
        question: 'Que signifie « душа » dans le poème ?',
        options: ['L\'amour', 'L\'âme', 'La vie', 'La tristesse'],
        correct: 1
      }
    },
    {
      id: 'a4',
      title: 'Expressions idiomatiques',
      content: `<p>Les expressions idiomatiques donnent de la couleur à votre russe. En voici 10 incontournables.</p>
        <div class="idiom-list">
          <div class="idiom-item">
            <span class="ru">Бить баклуши</span>
            <span class="fr">Se tourner les pouces (ne rien faire)</span>
            <span class="litr">litt. « battre les bâtons »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Витать в облаках</span>
            <span class="fr">Être dans la lune</span>
            <span class="litr">litt. « planer dans les nuages »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Зарубить на носу</span>
            <span class="fr">Se mettre dans le crâne (retenir fermement)</span>
            <span class="litr">litt. « entailler sur le nez »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Как рыба в воде</span>
            <span class="fr">Comme un poisson dans l'eau</span>
            <span class="litr">litt. « comme un poisson dans l'eau »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Медвежья услуга</span>
            <span class="fr">Un mauvais service (malgré de bonnes intentions)</span>
            <span class="litr">litt. « un service d'ours »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Море по колено</span>
            <span class="fr">Rien ne fait peur (tout semble facile)</span>
            <span class="litr">litt. « la mer jusqu'au genou »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Смотреть сквозь пальцы</span>
            <span class="fr">Fermer les yeux sur quelque chose</span>
            <span class="litr">litt. « regarder à travers les doigts »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Дело в шляпе</span>
            <span class="fr">C'est dans la poche (c'est réglé)</span>
            <span class="litr">litt. « l'affaire est dans le chapeau »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Кот наплакал</span>
            <span class="fr">Très peu (en parlant d'une quantité)</span>
            <span class="litr">litt. « le chat a pleuré »</span>
          </div>
          <div class="idiom-item">
            <span class="ru">Язык хорошо подвешен</span>
            <span class="fr">Avoir la langue bien pendue</span>
            <span class="litr">litt. « la langue est bien accrochée »</span>
          </div>
        </div>`,
      examples: ['Бить баклуши — ne rien faire', 'Витать в облаках — être dans la lune', 'Дело в шляпе — c\'est dans la poche'],
      exercise: {
        question: 'Que signifie « Дело в шляпе » ?',
        options: ['C\'est perdu', 'C\'est dans la poche', 'C\'est trop tard', 'C\'est dangereux'],
        correct: 1
      }
    },
    {
      id: 'a5',
      title: 'Conversation — débattre et argumenter',
      content: `<p>Savoir exprimer son opinion et débattre est le signe d'une maîtrise avancée. Voici des outils pour argumenter en russe.</p>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">🗣️ Exprimer son opinion</h3>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">Я считаю, что...</span><span class="fr">Je considère que...</span></div>
          <div class="vocab-item"><span class="ru">По-моему...</span><span class="fr">À mon avis...</span></div>
          <div class="vocab-item"><span class="ru">Мне кажется, что...</span><span class="fr">Il me semble que...</span></div>
          <div class="vocab-item"><span class="ru">Я уверен, что...</span><span class="fr">Je suis sûr que...</span></div>
          <div class="vocab-item"><span class="ru">Не сомневаюсь, что...</span><span class="fr">Je ne doute pas que...</span></div>
        </div>
        <h3 style="color:var(--gold);font-weight:400;margin:1rem 0 0.5rem">⚖️ Nuancer et contredire</h3>
        <div class="vocab-list">
          <div class="vocab-item"><span class="ru">С одной стороны... с другой стороны...</span><span class="fr">D'un côté... de l'autre côté...</span></div>
          <div class="vocab-item"><span class="ru">Не согласен, потому что...</span><span class="fr">Pas d'accord, parce que...</span></div>
          <div class="vocab-item"><span class="ru">Возможно, но...</span><span class="fr">Possible, mais...</span></div>
          <div class="vocab-item"><span class="ru">На самом деле...</span><span class="fr">En réalité...</span></div>
          <div class="vocab-item"><span class="ru">Вряд ли</span><span class="fr">Peu probable</span></div>
        </div>
        <p style="margin-top:1rem;">Dialogue :<br><br>
        — <strong>Я считаю, что</strong> экология — самая важная проблема сегодня.<br>
        — <strong>С одной стороны</strong>, да. <strong>Но с другой стороны</strong>, экономика не менее важна.<br>
        — <strong>Возможно, но</strong> без здоровой планеты экономика невозможна.<br>
        — <strong>На самом деле</strong>, нужно найти баланс.</p>`,
      examples: ['Я считаю, что... — Je considère que...', 'По-моему... — À mon avis...', 'С одной стороны... — D\'un côté...'],
      exercise: {
        question: 'Comment dit-on « À mon avis » en russe ?',
        options: ['На самом деле', 'По-моему', 'Вряд ли', 'Я уверен'],
        correct: 1
      }
    }
  ]
};

function showModal(html) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = html;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function showModalById(id) {
  if (id === 'parcours') {
    showPath();
    return;
  }
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  const cards = {};
  if (cards[id]) showModal(cards[id]);
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('modal-body').innerHTML = '';
}

function startLevelTest() {
  const html = `
    <h2>Test de Niveau</h2>
    <p style="text-align:center;margin-bottom:1.5rem">Cinq questions pour évaluer élégamment votre maîtrise du russe.</p>
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
      <button type="submit" class="submit-quiz">Voir mes résultats</button>
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

    const descriptions = {
      debutant: "Vous commencez tout juste votre voyage dans l'univers du russe. Chaque grande maîtrise commence par un premier pas. Prenez le temps de savourer chaque découverte.",
      intermediaire: "Vous possédez déjà des bases solides. La langue russe commence à dévoiler ses nuances. Continuez sur cette voie élégante.",
      avance: "Votre compréhension du russe est remarquable. Les subtilités de cette langue magnifique n'ont presque plus de secrets pour vous."
    };

    const desc = descriptions[level.id];

    const levelEmoji = level.id === 'debutant' ? '🌱' : level.id === 'intermediaire' ? '🌿' : '🌳';

    const resultHtml = `
      <div class="result-card">
        <p style="font-size:0.85rem;color:var(--text-muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:0.5rem">Résultat</p>
        <div class="result-level">${levelEmoji} ${level.name}</div>
        <p class="result-detail">Score : ${score}/${total} (${pct}%)</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin:1rem 0;line-height:1.8">${desc}</p>
        <div class="progress-bar-container" style="margin-top:1.5rem">
          <div class="progress-bar-label"><span>Progression</span><span>${pct}%</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>
        <button class="btn" onclick="closeModal();startLearning()" style="margin-top:1.5rem;width:100%;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Commencez votre apprentissage →</button>
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

function getCompletedLessons(levelId) {
  const key = 'lamia_lessons_' + levelId;
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : [];
}

function setCompletedLessons(levelId, ids) {
  localStorage.setItem('lamia_lessons_' + levelId, JSON.stringify(ids));
}

function showPath() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) {
    showModal(`
      <h2>Parcours d'Apprentissage</h2>
      <p style="text-align:center;margin:1.5rem 0">Vous n'avez pas encore passé le test de niveau.</p>
      <p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Évaluez d'abord votre niveau pour débloquer votre parcours personnalisé.</p>
      <div style="text-align:center;margin-top:1.5rem">
        <button class="btn" onclick="closeModal();startLevelTest()">Passer le test</button>
      </div>
    `);
    return;
  }

  const data = JSON.parse(saved);
  const levelId = data.levelId;
  const levelName = data.levelName;
  const lessons = LESSONS[levelId];
  const completedIds = getCompletedLessons(levelId);
  const total = lessons.length;
  const done = completedIds.length;

  const levelEmoji = levelId === 'debutant' ? '🌱' : levelId === 'intermediaire' ? '🌿' : '🌳';

  let lessonsHtml = lessons.map((lesson, idx) => {
    const isCompleted = completedIds.includes(lesson.id);
    const isUnlocked = idx === 0 || completedIds.includes(lessons[idx - 1].id);
    let statusClass = 'lesson-locked';
    let statusIcon = '🔒';
    let statusText = 'Verrouillée';
    let onclick = '';
    if (isCompleted) {
      statusClass = 'lesson-done';
      statusIcon = '✅';
      statusText = 'Terminée';
      onclick = `onclick="showLesson('${levelId}', ${idx})"`;
    } else if (isUnlocked) {
      statusClass = 'lesson-ready';
      statusIcon = '📖';
      statusText = 'Prête';
      onclick = `onclick="showLesson('${levelId}', ${idx})"`;
    }
    return `<div class="path-lesson ${statusClass}" ${onclick}>
      <span class="path-lesson-icon">${statusIcon}</span>
      <span class="path-lesson-title">${lesson.title}</span>
      <span class="path-lesson-status">${statusText}</span>
    </div>`;
  }).join('');

  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  showModal(`
    <h2>${levelEmoji} Parcours ${levelName}</h2>
    <p style="text-align:center;margin-bottom:1rem;color:var(--text-muted);font-size:0.85rem">${done}/${total} leçons terminées</p>
    <div class="progress-bar-container" style="margin-bottom:1.5rem">
      <div class="progress-bar-label"><span>Progression</span><span>${pct}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="path-lessons-list">${lessonsHtml}</div>
    ${done === total ? `<p style="text-align:center;margin:1rem 0;color:var(--gold)">🎉 Félicitations ! Vous avez terminé toutes les leçons de ce niveau !</p>` : ''}
    ${done > 0 ? `<button class="btn" onclick="closeModal();showLesson('${levelId}', ${done - 1})" style="margin-top:1rem;width:100%">Continuer mes leçons</button>` : ''}
    <button class="btn" onclick="closeModal();startLevelTest()" style="margin-top:0.8rem;width:100%">Refaire le test</button>
  `);
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

function showLesson(levelId, lessonIndex) {
  const lessons = LESSONS[levelId];
  if (!lessons || lessonIndex < 0 || lessonIndex >= lessons.length) return;

  const lesson = lessons[lessonIndex];
  const completedIds = getCompletedLessons(levelId);
  const isCompleted = completedIds.includes(lesson.id);
  const total = lessons.length;
  const pct = Math.round(((lessonIndex + 1) / total) * 100);

  const levelNames = { debutant: 'Débutante', intermediaire: 'Intermédiaire', avance: 'Avancée' };
  const levelEmoji = levelId === 'debutant' ? '🌱' : levelId === 'intermediaire' ? '🌿' : '🌳';

  const exerciseHtml = lesson.exercise ? `
    <div class="lesson-exercise">
      <h3 style="color:var(--gold);font-weight:400;margin-bottom:0.8rem;font-size:1rem">Petit exercice</h3>
      <p style="margin-bottom:0.8rem;font-size:0.9rem">${lesson.exercise.question}</p>
      <div class="exercise-options">
        ${lesson.exercise.options.map((opt, j) => `
          <label class="quiz-option exercise-option" data-correct="${j === lesson.exercise.correct}">
            <input type="radio" name="ex${lesson.id}" value="${j}">
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
      <button class="btn exercise-submit" style="margin-top:0.8rem;font-size:0.85rem;padding:0.5rem 1.5rem">Vérifier</button>
      <p class="exercise-feedback" style="margin-top:0.5rem;font-size:0.85rem;display:none"></p>
    </div>
  ` : '';

  const completeBtn = isCompleted
    ? `<p style="text-align:center;color:var(--gold);margin:0.5rem 0">✅ Leçon déjà terminée</p>`
    : `<button class="btn" onclick="completeLesson('${levelId}', ${lessonIndex})" style="width:100%;margin-top:1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Terminer la leçon ✓</button>`;

  const prevBtn = lessonIndex > 0
    ? `<button class="btn" onclick="showLesson('${levelId}', ${lessonIndex - 1})" style="flex:1">← Précédente</button>`
    : '';
  const nextBtn = lessonIndex < total - 1
    ? `<button class="btn" onclick="showLesson('${levelId}', ${lessonIndex + 1})" style="flex:1">Suivante →</button>`
    : '';

  showModal(`
    <div class="lesson-header">
      <span style="font-size:0.75rem;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase">${levelEmoji} ${levelNames[levelId]} — Leçon ${lessonIndex + 1}/${total}</span>
      <h2 style="margin:0.3rem 0 0.8rem">${lesson.title}</h2>
      <div class="progress-bar-container" style="margin-bottom:1rem">
        <div class="progress-bar-label"><span>Progression</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
    </div>
    <div class="lesson-content">${lesson.content}</div>
    <div style="margin:1.5rem 0;padding:1rem;border-top:1px solid rgba(201,169,110,0.2)">
      <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem;letter-spacing:1px;text-transform:uppercase">Exemples</p>
      ${lesson.examples.map(ex => `<div style="font-size:0.9rem;color:var(--cream);padding:0.2rem 0">✦ ${ex}</div>`).join('')}
    </div>
    ${exerciseHtml}
    ${completeBtn}
    ${isCompleted && lessonIndex === total - 1 ? `<p style="text-align:center;margin-top:1rem;color:var(--gold)">🎉 Niveau terminé ! Passez au niveau suivant ou explorez d'autres sections.</p>` : ''}
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
        const selected = document.querySelector(`input[name="ex${lesson.id}"]:checked`);
        const feedback = document.querySelector('.exercise-feedback');
        if (!selected) {
          feedback.textContent = 'Veuillez sélectionner une réponse.';
          feedback.style.display = 'block';
          feedback.style.color = 'var(--text-muted)';
          return;
        }
        const val = parseInt(selected.value);
        const isCorrect = val === lesson.exercise.correct;
        feedback.textContent = isCorrect
          ? '✓ Bravo ! Bonne réponse !'
          : '✗ Ce n\'est pas la bonne réponse. Réessayez !';
        feedback.style.display = 'block';
        feedback.style.color = isCorrect ? 'var(--gold)' : 'var(--rose-gold)';

        document.querySelectorAll('.exercise-option').forEach((opt, idx) => {
          if (idx === lesson.exercise.correct) {
            opt.style.borderColor = 'var(--gold)';
            opt.style.background = 'rgba(201,169,110,0.1)';
          }
          const radio = opt.querySelector('input');
          if (radio.checked && !isCorrect) {
            opt.style.borderColor = 'var(--rose-gold)';
            opt.style.background = 'rgba(232,180,184,0.1)';
          }
        });
      });
    }
  }, 50);
}

function completeLesson(levelId, lessonIndex) {
  const lessons = LESSONS[levelId];
  if (!lessons || lessonIndex < 0 || lessonIndex >= lessons.length) return;

  const lesson = lessons[lessonIndex];
  const completedIds = getCompletedLessons(levelId);

  if (completedIds.includes(lesson.id)) return;

  completedIds.push(lesson.id);
  setCompletedLessons(levelId, completedIds);

  const total = lessons.length;
  const done = completedIds.length;
  const pct = Math.round((done / total) * 100);

  const nextIndex = lessonIndex + 1;
  const hasNext = nextIndex < total;

  const celebrationHtml = `
    <div class="result-card" style="text-align:center">
      <p style="font-size:2rem;margin-bottom:0.5rem">🎉</p>
      <div class="result-level" style="font-size:1.3rem">Leçon terminée !</div>
      <p style="font-size:0.9rem;color:var(--text-secondary);margin:0.8rem 0">« ${lesson.title} » — maîtrisée avec élégance.</p>
      <div class="progress-bar-container" style="margin-top:1.2rem">
        <div class="progress-bar-label"><span>Progression du niveau</span><span>${done}/${total}</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      ${done === total ? `<p style="color:var(--gold);margin:1rem 0">🌟 Niveau terminé ! Quelle élégance dans votre progression !</p>` : ''}
      ${hasNext ? `<button class="btn" onclick="showLesson('${levelId}', ${nextIndex})" style="width:100%;margin-top:1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Leçon suivante →</button>` : ''}
      <button class="btn" onclick="showPath()" style="width:100%;margin-top:0.8rem">Voir le parcours</button>
      <button class="btn" onclick="closeModal()" style="width:100%;margin-top:0.5rem">Fermer</button>
    </div>
  `;

  showModal(celebrationHtml);
  updateStats();
}

function showProgress() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) {
    showModal(`
      <h2>Suivi de Progrès</h2>
      <p style="text-align:center;margin:1.5rem 0">Vous n'avez pas encore passé le test de niveau.</p>
      <p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Commencez par évaluer votre niveau pour voir vos statistiques.</p>
      <div style="text-align:center;margin-top:1.5rem">
        <button class="btn" onclick="closeModal();startLevelTest()">Passer le test</button>
      </div>
    `);
    return;
  }

  const data = JSON.parse(saved);
  const levelId = data.levelId;
  const completedIds = getCompletedLessons(levelId);
  const lessons = LESSONS[levelId] || [];
  const totalLessons = lessons.length;
  const doneLessons = completedIds.length;
  const lessonsPct = totalLessons > 0 ? Math.round((doneLessons / totalLessons) * 100) : 0;

  const streak = parseInt(localStorage.getItem('lamia_streak') || '0');
  const maxStreak = parseInt(localStorage.getItem('lamia_max_streak') || '0');

  const levelEmoji = levelId === 'debutant' ? '🌱' : levelId === 'intermediaire' ? '🌿' : '🌳';

  showModal(`
    <h2>Suivi de Progrès</h2>
    <div class="result-card">
      <p class="result-detail">Niveau actuel : <strong>${levelEmoji} ${data.levelName}</strong></p>
      <p class="result-detail" style="font-size:0.8rem;color:var(--text-muted)">Dernière évaluation : ${new Date(data.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <div class="stats" style="margin:2rem 0">
        <div class="stat"><span class="stat-num">${data.score}/${data.total}</span><span class="stat-label">Quiz</span></div>
        <div class="stat"><span class="stat-num">${doneLessons}/${totalLessons}</span><span class="stat-label">Leçons</span></div>
        <div class="stat"><span class="stat-num">${data.pct}%</span><span class="stat-label">Score</span></div>
        <div class="stat"><span class="stat-num">${streak}</span><span class="stat-label">Série</span></div>
      </div>
      <p class="result-detail" style="font-size:0.78rem;color:var(--text-muted)">Meilleure série : ${maxStreak} jours</p>
      <div class="progress-bar-container" style="margin-top:1.2rem">
        <div class="progress-bar-label"><span>Progression du niveau</span><span>${lessonsPct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${lessonsPct}%"></div></div>
      </div>
      ${doneLessons > 0 ? `<button class="btn" onclick="closeModal();showLesson('${levelId}', ${doneLessons - 1})" style="width:100%;margin-top:1rem">Continuer l'apprentissage</button>` : ''}
      <button class="btn" onclick="closeModal();showPath()" style="width:100%;margin-top:0.5rem">Voir le parcours complet</button>
      <button class="restart-quiz" onclick="closeModal();startLevelTest()" style="margin-top:0.8rem;width:100%">Refaire le test</button>
    </div>
  `);
}

function showRessources() {
  const saved = localStorage.getItem('lamia_results');
  const level = saved ? JSON.parse(saved).levelId : 'debutant';

  const resources = {
    debutant: [
      { icon: '📱', title: 'Duolingo — Russe', desc: 'Application ludique pour débuter. Gratuite et accessible sur iOS, Android et Web.', url: 'https://fr.duolingo.com/course/ru/fr/Apprendre-le-russe' },
      { icon: '🔤', title: 'RussianForFree.com', desc: 'Cours complets gratuits : alphabet, grammaire, vocabulaire avec audio. Excellent pour les vrais débutants.', url: 'https://www.russianforfree.com/' },
      { icon: '📖', title: 'Assimil — Le Russe', desc: 'Méthode intuitive avec dialogues audio. Idéale pour apprendre en douceur. Disponible en livre et e-méthode.', url: 'https://www.assimil.com/fr/991-le-russe' },
      { icon: '🎬', title: 'RussianPod101 (YouTube)', desc: 'Chaîne YouTube avec des centaines de vidéos courtes pour débutants : alphabet, vocabulaire, prononciation.', url: 'https://www.youtube.com/user/RussianPod101' },
      { icon: '📝', title: 'RusseFacile.fr', desc: 'Plateforme française gratuite avec cours audio, exercices et tests de niveau. Parfaite pour les francophones.', url: 'https://www.russefacile.fr/' },
      { icon: '🎵', title: 'Russian with Max (Débutant)', desc: 'Vidéos lentes et sous-titrées pour apprendre le russe par des histoires simples. Idéal pour l\'immersion douce.', url: 'https://www.youtube.com/c/russianwithmax' },
      { icon: '📱', title: 'MosaLingua Russe', desc: 'Application basée sur la répétition espacée. 10 minutes par jour suffisent. Système très efficace.', url: 'https://www.mosalingua.com/russe/' },
      { icon: '📖', title: 'Le Penguin Russian Course', desc: 'LE manuel de référence en anglais pour débuter. Complet, progressif et bien structuré. (Nicholas J. Brown)', url: 'https://www.penguin.co.uk/books/104/104466/the-new-penguin-russian-course/9780140120417.html' },
      { icon: '🗣️', title: 'Memrise — Russe', desc: 'Apprentissage par vidéos de locuteurs natifs. Parfait pour la prononciation et le vocabulaire concret.', url: 'https://www.memrise.com/fr/apprendre-le-russe' },
      { icon: '📰', title: 'Loecsen — Russe', desc: 'Méthode visuelle et audio avec illustrations. Idéal pour apprendre les phrases essentielles du voyage.', url: 'https://www.loecsen.com/fr/cours-russe' }
    ],
    intermediaire: [
      { icon: '🎬', title: 'Be Fluent in Russian', desc: 'Chaîne YouTube de Fedor Shirin. Leçons dynamiques, expressions idiomatiques, culture russe. Très pédagogique.', url: 'https://www.youtube.com/c/BeFluentinRussian' },
      { icon: '📖', title: 'Lingopie — Apprendre par la TV', desc: 'Plateforme de streaming avec séries et films russes. Sous-titres interactifs, clic pour traduire. Révolutionnaire !', url: 'https://lingopie.com/' },
      { icon: '🎧', title: 'Russian with Max (Podcast)', desc: 'Podcast en russe compréhensible pour intermédiaires. Transcripts inclus. Sujets variés : voyage, culture, société.', url: 'https://www.russianwithmax.com/podcast' },
      { icon: '📰', title: 'RT.com — Learn Russian', desc: 'Cours gratuits avec articles de presse adaptés. Textes authentiques avec vocabulaire expliqué.', url: 'https://learnrussian.rt.com/' },
      { icon: '📱', title: 'Clozemaster — Russe', desc: 'Application pour enrichir son vocabulaire en contexte. Des milliers de phrases à compléter. Niveau intermédiaire idéal.', url: 'https://www.clozemaster.com/' },
      { icon: '🎬', title: 'In Russian From Afar', desc: 'Chaîne YouTube avec Sergei. Russe lent et compréhensible avec sous-titres. Culture, histoire et vie en Sibérie.', url: 'https://www.youtube.com/c/InRussianFromAfar' },
      { icon: '📖', title: 'Nouvelles russes (recueil)', desc: 'Recueils de nouvelles adaptées pour intermédiaires : Tchekhov simplifié, contes populaires, histoires modernes.', url: 'https://www.russianforfree.com/texts.php' },
      { icon: '🎧', title: 'News in Slow Russian', desc: 'Actualités lues lentement en russe. Parfait pour entraîner la compréhension orale sur des sujets d\'actualité.', url: 'https://newsinslowrussian.com/' },
      { icon: '🎭', title: 'Easy Languages — Russie', desc: 'Interviews dans la rue russe sous-titrées. Russe authentique et naturel. Comprendre les vraies conversations.', url: 'https://www.youtube.com/playlist?list=PLA5UIoabheFNOm_ylrROO_dBD3Z5hNrhS' },
      { icon: '📱', title: 'Reverso Context', desc: 'Dictionnaire contextuel avec exemples réels. Indispensable pour comprendre les nuances et les expressions.', url: 'https://context.reverso.net/traduction/francais-russe/' }
    ],
    avance: [
      { icon: '📖', title: 'Littérature russe en VO', desc: 'Pouchkine, Tolstoï, Dostoïevski, Tchekhov, Gogol, Boulgakov. Lisez les classiques dans le texte original.', url: 'https://ilibrary.ru/' },
      { icon: '📰', title: 'Meduza.io', desc: 'Média russe indépendant. Articles en russe moderne sur l\'actualité, la culture et la société. Excellent niveau de langue.', url: 'https://meduza.io/' },
      { icon: '🎬', title: 'Russian Progress', desc: 'Chaîne YouTube pour avancés. Vidéos 100% en russe sur la grammaire fine, les nuances et la culture.', url: 'https://www.youtube.com/c/RussianProgress' },
      { icon: '🎧', title: 'Arzamas — Русский язык', desc: 'Cours en ligne sur l\'histoire de la langue russe, la littérature et la culture. Contenu académique de haute qualité.', url: 'https://arzamas.academy/' },
      { icon: '🎭', title: 'Théâtre russe en ligne', desc: 'Enregistrements du Théâtre d\'Art de Moscou (МХАТ), du Bolchoï et du Mariinsky. Pièces de Tchekhov en VO.', url: 'https://www.culture.ru/' },
      { icon: '📰', title: 'Полка (Polka)', desc: 'Magazine littéraire en ligne. Analyses approfondies des grands classiques russes. Pour amateurs de littérature exigeante.', url: 'https://polka.academy/' },
      { icon: '🎬', title: 'Varlamov (YouTube)', desc: 'Journaliste russe engagé. Vidéos longues sur l\'urbanisme, la politique et la société. Russe soutenu et naturel.', url: 'https://www.youtube.com/c/ivarlamov' },
      { icon: '🎧', title: 'Slow Russian Podcast (Avancé)', desc: 'Podcast de Daria Molchanova pour niveaux avancés. Sujets culturels et historiques profonds. Transcripts inclus.', url: 'https://realrussianclub.com/slowrussianpodcast/' },
      { icon: '📖', title: 'Dictionnaire Dahl (Толковый словарь)', desc: 'Le dictionnaire de référence de la langue russe. Pour explorer l\'étymologie et la richesse du vocabulaire.', url: 'https://gufo.me/dict/dal' },
      { icon: '🗣️', title: 'Preply — Cours particulier', desc: 'Trouvez un professeur natif pour des leçons individuelles. Pratiquez la conversation à votre rythme.', url: 'https://preply.com/fr/cours/russe' }
    ]
  };

  const list = resources[level] || resources.debutant;
  const levelName = saved ? JSON.parse(saved).levelName : 'Débutante';

  const levelEmoji = level === 'debutant' ? '🌱' : level === 'intermediaire' ? '🌿' : '🌳';

  showModal(`
    <h2>Ressources</h2>
    <p style="text-align:center;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-muted)">Recommandations personnalisées</p>
    <p style="text-align:center;margin-bottom:1.5rem;font-size:0.9rem">Niveau actuel : <strong style="color:var(--gold)">${levelEmoji} ${levelName}</strong></p>
    <ul class="resource-list">
      ${list.map(r => `
        <li>
          <span class="resource-icon">${r.icon}</span>
          <div>
            <strong style="color:var(--cream);font-weight:400">${r.title}</strong>
            <br><span style="font-size:0.82rem;color:var(--text-muted)">${r.desc}</span>
            ${r.url ? `<br><a href="${r.url}" target="_blank" style="font-size:0.75rem;color:var(--gold);text-decoration:none;opacity:0.7;hover:opacity:1">→ Accéder à la ressource</a>` : ''}
          </div>
        </li>
      `).join('')}
    </ul>
    <button class="btn" onclick="closeModal()" style="margin-top:1.5rem;width:100%">Fermer</button>
  `);
}

let storyState = {
  step: 0,
  choices: []
};

const STORY = [
  {
    text: "Vous arrivez à Saint-Pétersbourg à la saison des nuits blanches. Le ciel crépusculaire embrasse la Neva d'une lueur nacrée. Vous descendez sur la perspective Nevski, l'avenue impériale bordée de palais. Que souhaitez-vous faire ?",
    choices: [
      { text: "Flâner le long du canal Griboïedov", next: 1 },
      { text: "Visiter le musée de l'Ermitage", next: 2 }
    ]
  },
  {
    text: "Vous longez le canal aux eaux paisibles. Les façades pastel des immeubles du XIXe siècle se reflètent dans l'eau. Un vieux musicien joue une mélodie de Tchaïkovski au violon. Il vous sourit et dit : « Добрый вечер ! Как дела ? »",
    choices: [
      { text: "« Добрый вечер! Всё хорошо, спасибо » (Bonsoir, tout va bien merci)", next: 3 },
      { text: "« Извините, я не говорю по-русски » (Pardon, je ne parle pas russe)", next: 3 }
    ]
  },
  {
    text: "Vous entrez dans l'Ermitage. Les salles dorées du palais d'Hiver s'étendent à perte de vue. Devant un Rembrandt, une guide chuchote à son groupe : « Эта картина — настоящий шедевр ». Vous reconnaissez le mot « шедевр ».",
    choices: [
      { text: "Demander en russe : « Сколько стоит билет ? » (Combien coûte le billet ?)", next: 4 },
      { text: "Admirer en silence et noter le mot dans votre carnet", next: 4 }
    ]
  },
  {
    text: "Vous arrivez sur la place du Palais. La colonne Alexandre s'élève vers le ciel laiteux. Un vendeur de rue propose des pirojki chauds. Il vous dit : « Попробуйте, очень вкусно ! »",
    choices: [
      { text: "« Да, спасибо! Сколько? » (Oui merci, combien ?)", next: 5 },
      { text: "« Я вегетарианец » (Je suis végétarien)", next: 5 }
    ]
  },
  {
    text: "Vous ressortez de l'Ermitage et vous dirigez vers le pont du Palais. Il se lève lentement pour laisser passer un navire. Le soleil de minuit teinte la ville d'or rose. Un poète amateur récite près du quai. Il vous tend un feuillet.",
    choices: [
      { text: "Accepter le poème et remercier en russe", next: 5 },
      { text: "Lire le poème à voix haute", next: 5 }
    ]
  },
  {
    text: "Saint-Pétersbourg vous a envoûtée. Entre canaux majestueux, palais impériaux et cette lumière unique des nuits blanches, vous repartez avec des mots plein le cœur. До новых встреч ! À bientôt pour une nouvelle aventure.",
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
      <p class="story-text">L'aventure s'achève ici, mais votre voyage dans la langue russe continue.</p>
      <button class="btn" onclick="closeModal()" style="width:100%">Fermer</button>
    `);
    return;
  }

  const choicesHtml = s.choices.map(c => `
    <button class="story-choice" data-next="${c.next}">
      ${c.text}
    </button>
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

setInterval(createSparkle, 2500);
for (let i = 0; i < 3; i++) {
  setTimeout(createSparkle, i * 800);
}

document.addEventListener('click', function(e) {
  if (e.target === document.getElementById('modal')) {
    closeModal();
  }
});

// Splash screen handling
document.addEventListener('DOMContentLoaded', function() {
  const splash = document.getElementById('splash');
  const splashBtn = document.getElementById('splash-btn');
  const mainContent = document.querySelector('main');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  
  // Ensure main content is hidden initially
  if (mainContent) mainContent.style.opacity = '0';
  if (header) header.style.opacity = '0';
  if (footer) footer.style.opacity = '0';
  
  splashBtn.addEventListener('click', function() {
    splash.classList.add('hidden');
    // Fade in the main content
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
