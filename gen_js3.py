#!/usr/bin/env python3
"""Append niveaux 4-5, chapter exams, and all functions to scripts.js"""
import json

path = "/Users/haxor/Desktop/Apprendre le Russe/scripts.js"

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

def write_lesson(f, lesson_id, title, typ, content, examples, exercise, difficulty):
    f.write("    {\n")
    f.write(f"      id: {js_str(lesson_id)},\n")
    f.write(f"      title: {js_str(title)},\n")
    f.write(f"      type: {js_str(typ)},\n")
    f.write(f"      content: `{content}`,\n")
    f.write(f"      examples: {js_str(examples)},\n")
    f.write("      exercise: {\n")
    f.write(f"        type: {js_str(exercise['type'])},\n")
    f.write(f"        question: {js_str(exercise['question'])},\n")
    if exercise['type'] == 'fill':
        f.write(f"        correct: {js_str(exercise['correct'])},\n")
    else:
        f.write(f"        options: {js_str(exercise['options'])},\n")
        f.write(f"        correct: {exercise['correct']},\n")
    f.write(f"        hints: {exercise['hints']},\n")
    if exercise.get('hintText'):
        f.write(f"        hintText: {js_str(exercise['hintText'])},\n")
    f.write("      },\n")
    f.write(f"      difficulty: {difficulty}\n")
    f.write("    }")

with open(path, 'a', encoding='utf-8') as f:
    # ===== NIVEAU 4: EXPERTE =====
    f.write("  // ===== NIVEAU 4 \u2014 EXPERTE (B2) =====\n")
    f.write("  expert: [\n")

    write_lesson(f, "e1", "Le monde professionnel", "vocab",
        '<p>Vocabulaire essentiel pour le milieu professionnel.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0440\u0430\u0431\u043e\u0442\u0430</span><span class="fr">travail</span><span class="pron">[ra-bo-ta]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0435</span><span class="fr">r\u00e9union</span><span class="pron">[sa-bra-ni-ye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0440\u0435\u0437\u044e\u043c\u0435</span><span class="fr">CV</span><span class="pron">[rye-zyu-m\u00e9]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435</span><span class="fr">entretien</span><span class="pron">[sa-byi-sy\u00e9-da-va-ni-ye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430</span><span class="fr">salaire</span><span class="pron">[zar-pla-ta]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u043e\u0432\u043a\u0430</span><span class="fr">voyage d\'affaires</span><span class="pron">[ka-man-di-rov-ka]</span></div>\n'
        '        </div>',
        ["\u0420\u0430\u0431\u043e\u0442\u0430 \u2014 travail", "\u0421\u043e\u0431\u0440\u0430\u043d\u0438\u0435 \u2014 r\u00e9union", "\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u2014 salaire"],
        {"type": "choice", "question": "Comment dit-on \u00ab entretien \u00bb en russe ?", "options": ["\u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0435", "\u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435", "\u043a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u043e\u0432\u043a\u0430", "\u0440\u0435\u0437\u044e\u043c\u0435"], "correct": 1, "hints": 1, "hintText": ["Ce mot contient \u00ab \u0431\u0435\u0441\u0435\u0434\u0430 \u00bb qui signifie \u00ab conversation \u00bb."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "e2", "Les phrases conditionnelles", "grammar",
        '<p>Le conditionnel russe avec <strong>\u0431\u044b</strong> + pass\u00e9.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>Si r\u00e9el</strong> (si + pr\u00e9sent \u2192 futur) :<br><strong>\u0415\u0441\u043b\u0438</strong> \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0433\u043e\u0434\u0430, \u043c\u044b <strong>\u043f\u043e\u0439\u0434\u0451\u043c</strong> \u0433\u0443\u043b\u044f\u0442\u044c.</p>\n'
        '          <p><strong>Si irr\u00e9el</strong> (si + pass\u00e9 \u2192 \u0431\u044b + pass\u00e9) :<br><strong>\u0415\u0441\u043b\u0438 \u0431\u044b</strong> \u044f \u0437\u043d\u0430\u043b, \u044f <strong>\u0431\u044b</strong> \u043f\u0440\u0438\u0448\u0451\u043b.</p>\n'
        '        </div>\n'
        '        <table class="case-table" style="margin-top:1rem">\n'
        '          <tr><th>Type</th><th>Russe</th><th>Fran\u00e7ais</th></tr>\n'
        '          <tr><td>R\u00e9elle</td><td>\u0415\u0441\u043b\u0438 + pr\u00e9sent, + futur</td><td>Si + pr\u00e9sent, + futur</td></tr>\n'
        '          <tr><td>Ir\u00e9elle</td><td>\u0415\u0441\u043b\u0438 \u0431\u044b + pass\u00e9, + \u0431\u044b + pass\u00e9</td><td>Si + imparfait, + conditionnel</td></tr>\n'
        '        </table>',
        ["\u0415\u0441\u043b\u0438 \u0431\u044b \u044f \u0437\u043d\u0430\u043b... \u2014 Si j\u2019avais su..."],
        {"type": "fill", "question": "Compl\u00e9tez : \u00ab \u0415\u0441\u043b\u0438 \u0431\u044b \u044f ______ (\u0437\u043d\u0430\u0442\u044c), \u044f \u0431\u044b \u043f\u0440\u0438\u0448\u0451\u043b. \u00bb (4 lettres)", "correct": "\u0437\u043d\u0430\u043b", "hints": 2, "hintText": ["Le verbe \u0437\u043d\u0430\u0442\u044c (savoir) au pass\u00e9 masculin.", "Radical \u0437\u043d\u0430- + -\u043b = \u0437\u043d\u0430\u043b"]},
        3
    )
    f.write(",\n")

    write_lesson(f, "e3", "Article de presse adapt\u00e9", "reading",
        '<p>Un article adapt\u00e9 sur la technologie en Russie.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru">\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u0443\u0447\u0451\u043d\u044b\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b. \u042d\u0442\u043e\u0442 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432 \u043f\u044f\u0442\u044c \u0440\u0430\u0437 \u043f\u0440\u043e\u0447\u043d\u0435\u0435 \u0431\u0435\u0442\u043e\u043d\u0430 \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043b\u0435\u0433\u0447\u0435. \u041f\u0440\u043e\u0435\u043a\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u043b 50 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0440\u0443\u0431\u043b\u0435\u0439.</p>\n'
        '          <p class="poem-fr">Des scientifiques russes ont d\u00e9velopp\u00e9 un nouveau mat\u00e9riau. Il est 5 fois plus r\u00e9sistant que le b\u00e9ton et plus l\u00e9ger. Le projet a re\u00e7u 50 millions de roubles.</p>\n'
        '        </div>',
        ["\u0423\u0447\u0451\u043d\u044b\u0435 \u2014 scientifiques", "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u2014 ont d\u00e9velopp\u00e9"],
        {"type": "choice", "question": "Quelle est la qualit\u00e9 du nouveau mat\u00e9riau ?", "options": ["Moins cher", "Plus r\u00e9sistant ET plus l\u00e9ger", "Biod\u00e9gradable", "Imperm\u00e9able"], "correct": 1, "hints": 1, "hintText": ["Le texte dit \u00ab \u0432 \u043f\u044f\u0442\u044c \u0440\u0430\u0437 \u043f\u0440\u043e\u0447\u043d\u0435\u0435 \u0431\u0435\u0442\u043e\u043d\u0430 \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043b\u0435\u0433\u0447\u0435 \u00bb."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "e4", "Le g\u00e9rondif et le participe", "grammar",
        '<p>Les formes verbales non conjugu\u00e9es enrichissent l\u2019expression.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>\u041f\u0440\u0438\u0447\u0430\u0441\u0442\u0438\u0435 (Participe)</strong><br>\u0447\u0438\u0442\u0430<strong>\u044e\u0449\u0438\u0439</strong> \u0441\u0442\u0443\u0434\u0435\u043d\u0442 \u2014 l\u2019\u00e9tudiant qui lit<br>\u043f\u0440\u043e\u0447\u0438\u0442\u0430<strong>\u043d\u043d\u0430\u044f</strong> \u043a\u043d\u0438\u0433\u0430 \u2014 le livre lu</p>\n'
        '          <p><strong>\u0414\u0435\u0435\u043f\u0440\u0438\u0447\u0430\u0441\u0442\u0438\u0435 (G\u00e9rondif)</strong><br><strong>\u0427\u0438\u0442\u0430\u044f</strong> \u043a\u043d\u0438\u0433\u0443, \u043e\u043d \u043f\u0438\u043b \u0447\u0430\u0439. \u2014 En lisant...<br><strong>\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0432</strong> \u043a\u043d\u0438\u0433\u0443, \u043e\u043d \u043b\u0451\u0433 \u0441\u043f\u0430\u0442\u044c. \u2014 Apr\u00e8s avoir lu...</p>\n'
        '        </div>',
        ["\u0427\u0438\u0442\u0430\u044e\u0449\u0438\u0439 \u2014 qui lit", "\u0427\u0438\u0442\u0430\u044f \u2014 en lisant"],
        {"type": "choice", "question": "\u00ab ______ \u043a\u043d\u0438\u0433\u0443, \u043e\u043d \u0437\u0430\u043a\u0440\u044b\u043b \u0433\u043b\u0430\u0437\u0430. \u00bb (Apr\u00e8s avoir lu...)", "options": ["\u0427\u0438\u0442\u0430\u044f", "\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0432", "\u0427\u0438\u0442\u0430\u044e\u0449\u0438\u0439", "\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0439"], "correct": 1, "hints": 2, "hintText": ["L\u2019action est ant\u00e9rieure et termin\u00e9e.", "Le g\u00e9rondif pass\u00e9 se forme avec -\u0432 pour les verbes perfectifs."]},
        3
    )
    f.write(",\n")

    write_lesson(f, "e5", "La politique et la soci\u00e9t\u00e9", "vocab",
        '<p>Vocabulaire pour comprendre la soci\u00e9t\u00e9 russe.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e</span><span class="fr">gouvernement</span><span class="pron">[pra-vi-tyel\\\'-stvo]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0437\u0430\u043a\u043e\u043d</span><span class="fr">loi</span><span class="pron">[za-kon]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043f\u0440\u0430\u0432\u0430</span><span class="fr">droits</span><span class="pron">[pra-va]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0441\u0432\u043e\u0431\u043e\u0434\u0430</span><span class="fr">libert\u00e9</span><span class="pron">[sva-bo-da]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0432\u044b\u0431\u043e\u0440\u044b</span><span class="fr">\u00e9lections</span><span class="pron">[vy-bo-ry]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d</span><span class="fr">citoyen</span><span class="pron">[grazh-da-nin]</span></div>\n'
        '        </div>',
        ["\u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u2014 gouvernement", "\u0421\u0432\u043e\u0431\u043e\u0434\u0430 \u2014 libert\u00e9"],
        {"type": "choice", "question": "Quel mot signifie \u00ab libert\u00e9 \u00bb ?", "options": ["\u0432\u043b\u0430\u0441\u0442\u044c", "\u0441\u0432\u043e\u0431\u043e\u0434\u0430", "\u0441\u0438\u043b\u0430", "\u0432\u043e\u043b\u044f"], "correct": 1, "hints": 1, "hintText": ["Commence par \u00ab \u0441\u0432\u043e- \u00bb comme \u00ab \u0441\u0432\u043e\u0439 \u00bb (son propre)."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "e6", "Traduction FR \u2192 RU", "exercise",
        '<p>Traduisez ces phrases du fran\u00e7ais vers le russe.</p>\n'
        '        <div style="padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px;margin:1rem 0">\n'
        '          <p style="font-size:0.85rem;color:var(--text-secondary)">\u00c0 traduire mentalement :<br>1. J\u2019ai lu ce livre hier. (perfectif, masc.)<br>2. Elle travaille dans un grand bureau.<br>3. Si j\u2019avais de l\u2019argent, j\u2019ach\u00e8terais une voiture.</p>\n'
        '        </div>',
        [],
        {"type": "choice", "question": "Traduction de \u00ab J\u2019ai lu ce livre hier \u00bb (perfectif, pass\u00e9 masculin) :", "options": ["\u042f \u0447\u0438\u0442\u0430\u044e \u044d\u0442\u0443 \u043a\u043d\u0438\u0433\u0443 \u0432\u0447\u0435\u0440\u0430", "\u042f \u0447\u0438\u0442\u0430\u043b \u044d\u0442\u0443 \u043a\u043d\u0438\u0433\u0443 \u0432\u0447\u0435\u0440\u0430", "\u042f \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b \u044d\u0442\u0443 \u043a\u043d\u0438\u0433\u0443 \u0432\u0447\u0435\u0440\u0430", "\u042f \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u044e \u044d\u0442\u0443 \u043a\u043d\u0438\u0433\u0443 \u0432\u0447\u0435\u0440\u0430"], "correct": 2, "hints": 2, "hintText": ["Il faut le perfectif car l\u2019action est termin\u00e9e.", "Le perfectif de \u0447\u0438\u0442\u0430\u0442\u044c est \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c."]},
        3
    )
    f.write(",\n")

    write_lesson(f, "e7", "Le cin\u00e9ma russe", "culture",
        '<p>Le cin\u00e9ma russe est riche de chefs-d\u2019\u0153uvre.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0422\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u0438\u0439</span><span class="fr">Tarkovski (\u00ab Stalker \u00bb)</span><span class="pron">[tar-kov-ski\u00ef]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041c\u0438\u0445\u0430\u043b\u043a\u043e\u0432</span><span class="fr">Mikhalkov (\u00ab Le Soleil trompeur \u00bb)</span><span class="pron">[mi-khal-kov]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0417\u0432\u044f\u0433\u0438\u043d\u0446\u0435\u0432</span><span class="fr">Zviaguintsev (\u00ab L\u00e9viathan \u00bb)</span><span class="pron">[zvyi-ghin-tsef]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0444\u0438\u043b\u044c\u043c</span><span class="fr">film</span><span class="pron">[fil\\\'m]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0440\u0435\u0436\u0438\u0441\u0441\u0451\u0440</span><span class="fr">r\u00e9alisateur</span><span class="pron">[rye-jis-syor]</span></div>\n'
        '        </div>',
        ["\u0422\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u2014 Tarkovski", "\u0424\u0438\u043b\u044c\u043c \u2014 film"],
        {"type": "choice", "question": "Qui a r\u00e9alis\u00e9 \u00ab Stalker \u00bb ?", "options": ["\u041c\u0438\u0445\u0430\u043b\u043a\u043e\u0432", "\u0411\u043e\u043d\u0434\u0430\u0440\u0447\u0443\u043a", "\u0422\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u0438\u0439", "\u0417\u0432\u044f\u0433\u0438\u043d\u0446\u0435\u0432"], "correct": 2, "hints": 1, "hintText": ["\u0152uvre lente et contemplative, consid\u00e9r\u00e9 comme l\u2019un des plus grands cin\u00e9astes."]},
        1
    )
    f.write(",\n")

    write_lesson(f, "e8", "Po\u00e8me de Pouchkine : \u00ab \u042f \u0432\u0430\u0441 \u043b\u044e\u0431\u0438\u043b \u00bb", "reading",
        '<p>Analysons un po\u00e8me de Pouchkine en version originale.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru"><strong>\u042f \u0432\u0430\u0441 \u043b\u044e\u0431\u0438\u043b</strong><br><br>\n\u042f \u0432\u0430\u0441 \u043b\u044e\u0431\u0438\u043b: \u043b\u044e\u0431\u043e\u0432\u044c \u0435\u0449\u0451, \u0431\u044b\u0442\u044c \u043c\u043e\u0436\u0435\u0442,<br>\n\u0412 \u0434\u0443\u0448\u0435 \u043c\u043e\u0435\u0439 \u0443\u0433\u0430\u0441\u043b\u0430 \u043d\u0435 \u0441\u043e\u0432\u0441\u0435\u043c;<br>\n\u041d\u043e \u043f\u0443\u0441\u0442\u044c \u043e\u043d\u0430 \u0432\u0430\u0441 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0442\u0440\u0435\u0432\u043e\u0436\u0438\u0442;<br>\n\u042f \u043d\u0435 \u0445\u043e\u0447\u0443 \u043f\u0435\u0447\u0430\u043b\u0438\u0442\u044c \u0432\u0430\u0441 \u043d\u0438\u0447\u0435\u043c.</p>\n'
        '          <p class="poem-fr">Je vous aimais : l\u2019amour peut-\u00eatre<br>\nDans mon \u00e2me n\u2019est pas encore \u00e9teint ;<br>\nMais qu\u2019il ne vous trouble plus ;<br>\nJe ne veux vous attrister de rien.</p>\n'
        '        </div>',
        ["\u041b\u044e\u0431\u0438\u043b \u2014 j\u2019aimais", "\u0414\u0443\u0448\u0430 \u2014 \u00e2me"],
        {"type": "choice", "question": "Quel sentiment domine ce po\u00e8me ?", "options": ["La col\u00e8re", "Un amour d\u00e9sint\u00e9ress\u00e9 et tendre", "La joie", "L\u2019indiff\u00e9rence"], "correct": 1, "hints": 0},
        2
    )
    f.write("\n  ],\n")

    # ===== NIVEAU 5: MAITRE =====
    f.write("  // ===== NIVEAU 5 \u2014 MA\u00ceTRE (C1) =====\n")
    f.write("  maitre: [\n")

    write_lesson(f, "m1", "Expressions idiomatiques (20)", "vocab",
        '<p>20 expressions pour parler comme un natif.</p>\n'
        '        <div class="idiom-list">\n'
        '          <div class="idiom-item"><span class="ru">\u0411\u0438\u0442\u044c \u0431\u0430\u043a\u043b\u0443\u0448\u0438</span><span class="fr">Ne rien faire</span><span class="litr">litt. \u00ab battre les b\u00e2tons \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u0412\u0438\u0442\u0430\u0442\u044c \u0432 \u043e\u0431\u043b\u0430\u043a\u0430\u0445</span><span class="fr">\u00catre dans la lune</span><span class="litr">litt. \u00ab planer dans les nuages \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u0414\u0435\u043b\u043e \u0432 \u0448\u043b\u044f\u043f\u0435</span><span class="fr">C\u2019est dans la poche</span><span class="litr">litt. \u00ab l\u2019affaire dans le chapeau \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u041a\u043e\u0442 \u043d\u0430\u043f\u043b\u0430\u043a\u0430\u043b</span><span class="fr">Tr\u00e8s peu (quantit\u00e9)</span><span class="litr">litt. \u00ab le chat a pleur\u00e9 \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u041c\u0435\u0434\u0432\u0435\u0436\u044c\u044f \u0443\u0441\u043b\u0443\u0433\u0430</span><span class="fr">Service maladroit qui nuit</span><span class="litr">litt. \u00ab service d\u2019ours \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u041d\u0438 \u043f\u0443\u0445\u0430 \u043d\u0438 \u043f\u0435\u0440\u0430</span><span class="fr">Bonne chance !</span><span class="litr">litt. \u00ab ni duvet ni plume \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u041a\u0430\u043a \u0440\u044b\u0431\u0430 \u0432 \u0432\u043e\u0434\u0435</span><span class="fr">Comme un poisson dans l\u2019eau</span><span class="litr">litt. identique</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u0421\u043e\u0431\u0430\u043a\u0443 \u0441\u044a\u0435\u043b</span><span class="fr">\u00catre expert</span><span class="litr">litt. \u00ab a mang\u00e9 un chien \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u0423\u0431\u0438\u0442\u044c \u0434\u0432\u0443\u0445 \u0437\u0430\u0439\u0446\u0435\u0432</span><span class="fr">Faire d\u2019une pierre 2 coups</span><span class="litr">litt. \u00ab tuer 2 li\u00e8vres \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u0412\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u043d\u043e\u0441</span><span class="fr">Mener en bateau</span><span class="litr">litt. \u00ab mener par le nez \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u0412\u0440\u0435\u043c\u044f \u043b\u0435\u0442\u0438\u0442</span><span class="fr">Le temps passe vite</span><span class="litr">litt. \u00ab le temps vole \u00bb</span></div>\n'
        '          <div class="idiom-item"><span class="ru">\u0414\u0443\u0448\u0430 \u0432 \u0434\u0443\u0448\u0443</span><span class="fr">En parfaite harmonie</span><span class="litr">litt. \u00ab \u00e2me \u00e0 \u00e2me \u00bb</span></div>\n'
        '        </div>',
        ["\u0411\u0438\u0442\u044c \u0431\u0430\u043a\u043b\u0443\u0448\u0438 \u2014 ne rien faire", "\u0414\u0435\u043b\u043e \u0432 \u0448\u043b\u044f\u043f\u0435 \u2014 c\u2019est dans la poche"],
        {"type": "choice", "question": "Que signifie \u00ab \u041a\u043e\u0442 \u043d\u0430\u043f\u043b\u0430\u043a\u0430\u043b \u00bb ?", "options": ["Le chat a pleur\u00e9", "Il y en a tr\u00e8s peu", "C\u2019est triste", "Le chat est content"], "correct": 1, "hints": 1, "hintText": ["Imaginez un chat qui pleure \u2014 il n\u2019y aura pas beaucoup de larmes."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "m2", "Les nuances aspectuelles", "grammar",
        '<p>Ma\u00eetriser les nuances subtiles entre perfectif et imperfectif.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>Action g\u00e9n\u00e9rale vs r\u00e9sultat :</strong><br>\u0422\u044b <strong>\u0447\u0438\u0442\u0430\u043b</strong> \u044d\u0442\u0443 \u043a\u043d\u0438\u0433\u0443? (as-tu d\u00e9j\u00e0 lu ?)<br>\u0422\u044b <strong>\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b</strong> \u044d\u0442\u0443 \u043a\u043d\u0438\u0433\u0443? (l\u2019as-tu finie ?)</p>\n'
        '          <p><strong>Action annul\u00e9e :</strong><br>\u042f <strong>\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b</strong> \u043e\u043a\u043d\u043e. (j\u2019ai ouvert et referm\u00e9)<br>\u042f <strong>\u043e\u0442\u043a\u0440\u044b\u043b</strong> \u043e\u043a\u043d\u043e. (j\u2019ai ouvert, il est ouvert)</p>\n'
        '        </div>',
        ["\u0427\u0438\u0442\u0430\u043b vs \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043b \u2014 action g\u00e9n\u00e9rale vs r\u00e9sultat"],
        {"type": "error", "question": "\u00ab \u042f \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b \u043e\u043a\u043d\u043e, \u0438 \u043e\u043d\u043e \u0434\u043e \u0441\u0438\u0445 \u043f\u043e\u0440 \u043e\u0442\u043a\u0440\u044b\u0442\u043e. \u00bb (fen\u00eatre ouverte) \u2014 Correct ?", "options": ["Oui, correct", "Non, incorrect"], "correct": 1, "hints": 2, "hintText": ["\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u043b (imperfectif) implique une action annul\u00e9e.", "Pour une fen\u00eatre qui reste ouverte, il faut \u043e\u0442\u043a\u0440\u044b\u043b (perfectif)."]},
        3
    )
    f.write(",\n")

    write_lesson(f, "m3", "Essai philosophique adapt\u00e9", "reading",
        '<p>Un texte abstrait sur le temps et la vie.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru">\u0412\u0440\u0435\u043c\u044f \u2014 \u044d\u0442\u043e \u0441\u0442\u0440\u0430\u043d\u043d\u0430\u044f \u0432\u0435\u0449\u044c. \u041c\u044b \u0434\u0443\u043c\u0430\u0435\u043c, \u0447\u0442\u043e \u0443 \u043d\u0430\u0441 \u0435\u0433\u043e \u043c\u043d\u043e\u0433\u043e, \u043d\u043e \u043e\u043d\u043e \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u043d\u0435\u0437\u0430\u043c\u0435\u0442\u043d\u043e. \u041a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0430\u0448\u0435\u0439 \u0436\u0438\u0437\u043d\u0438 \u2014 \u044d\u0442\u043e \u0432\u044b\u0431\u043e\u0440. \u041c\u044b \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c, \u043a\u0430\u043a \u0435\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0442\u044c. \u0418 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u043e\u043c \u043c\u044b \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u043c, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u043d \u0431\u044b\u043b \u0446\u0435\u043d\u0435\u043d.</p>\n'
        '          <p class="poem-fr">Le temps est une chose \u00e9trange. Nous pensons en avoir beaucoup, mais il passe inaper\u00e7u. Chaque moment de notre vie est un choix. Nous choisissons comment le vivre. Et ce n\u2019est qu\u2019apr\u00e8s que nous comprenons sa valeur.</p>\n'
        '        </div>',
        ["\u0412\u0440\u0435\u043c\u044f \u2014 le temps", "\u0416\u0438\u0437\u043d\u044c \u2014 la vie"],
        {"type": "choice", "question": "Selon le texte, qu\u2019est-ce que chaque moment de notre vie ?", "options": ["Une obligation", "Un choix", "Un hasard", "Une souffrance"], "correct": 1, "hints": 0},
        3
    )
    f.write(",\n")

    write_lesson(f, "m4", "Le langage soutenu", "vocab",
        '<p>Vocabulaire formel et litt\u00e9raire pour s\u2019exprimer avec \u00e9l\u00e9gance.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e</span><span class="fr">art</span><span class="pron">[is-kous-stvo]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0431\u044b\u0442\u0438\u0435</span><span class="fr">l\u2019\u00eatre, l\u2019existence</span><span class="pron">[by-ti-ye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0441\u043e\u0437\u043d\u0430\u043d\u0438\u0435</span><span class="fr">conscience</span><span class="pron">[saz-na-ni-ye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u0435</span><span class="fr">perception</span><span class="pron">[vas-pri-ya-ti-ye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b\u0439</span><span class="fr">magnifique (soutenu)</span><span class="pron">[pri-kras-ny\u00ef]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043d\u0435\u0438\u0437\u0431\u0435\u0436\u043d\u044b\u0439</span><span class="fr">in\u00e9vitable</span><span class="pron">[nye-iz-bezh-ny\u00ef]</span></div>\n'
        '        </div>',
        ["\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u2014 art", "\u0411\u044b\u0442\u0438\u0435 \u2014 l\u2019\u00eatre"],
        {"type": "choice", "question": "Quel mot signifie \u00ab conscience \u00bb ?", "options": ["\u0441\u043e\u0437\u043d\u0430\u043d\u0438\u0435", "\u0431\u044b\u0442\u0438\u0435", "\u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u0435", "\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e"], "correct": 0, "hints": 1, "hintText": ['Vient de \u00ab \u0437\u043d\u0430\u0442\u044c \u00bb (savoir) avec le pr\u00e9fixe \u0441\u043e-']},
        3
    )
    f.write(",\n")

    write_lesson(f, "m5", "Discours indirect et concordance des temps", "grammar",
        '<p>Rapporter les paroles de quelqu\u2019un en russe.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>Discours direct :</strong><br>\u041e\u043d\u0430 \u0441\u043a\u0430\u0437\u0430\u043b\u0430: \u00ab \u042f \u0437\u0430\u0432\u0442\u0440\u0430 \u043f\u0440\u0438\u0434\u0443. \u00bb</p>\n'
        '          <p><strong>Discours indirect :</strong><br>\u041e\u043d\u0430 \u0441\u043a\u0430\u0437\u0430\u043b\u0430, \u0447\u0442\u043e \u0437\u0430\u0432\u0442\u0440\u0430 \u043f\u0440\u0438\u0434\u0451\u0442.</p>\n'
        '          <p><strong>Question indirecte :</strong><br>\u041e\u043d \u0441\u043f\u0440\u043e\u0441\u0438\u043b, <strong>\u043a\u043e\u0433\u0434\u0430</strong> \u043e\u043d\u0430 \u043f\u0440\u0438\u0434\u0451\u0442.</p>\n'
        '          <p style="font-size:0.85rem;color:var(--text-muted)">En russe, le temps du verbe ne change pas (pas de concordance comme en fran\u00e7ais).</p>\n'
        '        </div>',
        ["\u041e\u043d\u0430 \u0441\u043a\u0430\u0437\u0430\u043b\u0430, \u0447\u0442\u043e... \u2014 Elle a dit que..."],
        {"type": "error", "question": "\u00ab \u041e\u043d \u0441\u043a\u0430\u0437\u0430\u043b, \u0447\u0442\u043e \u043e\u043d \u043f\u0440\u0438\u0448\u0451\u043b. \u00bb (Il a dit qu\u2019il est venu.) \u2014 Correct ?", "options": ["Oui, correct", "Non, devrait \u00eatre \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442"], "correct": 0, "hints": 1, "hintText": ["En russe, pas de concordance des temps. Le perfectif \u043f\u0440\u0438\u0448\u0451\u043b est correct."]},
        3
    )
    f.write(",\n")

    write_lesson(f, "m6", "Analyse de style : formel vs informel", "exercise",
        '<p>Comparez ces deux textes de style diff\u00e9rent.</p>\n'
        '        <div style="padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px;margin:1rem 0">\n'
        '          <p><strong>Style formel (lettre officielle) :</strong><br>\u0423\u0432\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0433\u043e\u0441\u043f\u043e\u0434\u0438\u043d! \u041f\u0440\u043e\u0448\u0443 \u0412\u0430\u0441 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u043e\u0451 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435...</p>\n'
        '          <p><strong>Style informel (texto) :</strong><br>\u041f\u0440\u0438\u0432\u0435\u0442! \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438 \u043c\u043e\u0451 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435, \u043f\u043b\u0437...</p>\n'
        '        </div>',
        ["\u0423\u0432\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0433\u043e\u0441\u043f\u043e\u0434\u0438\u043d \u2014 Cher Monsieur (formel)"],
        {"type": "choice", "question": "Quelle formule est typique du style informel ?", "options": ["\u0423\u0432\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0433\u043e\u0441\u043f\u043e\u0434\u0438\u043d", "\u041f\u0440\u043e\u0448\u0443 \u0412\u0430\u0441", "\u041f\u0440\u0438\u0432\u0435\u0442! \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438...", "\u0421 \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435\u043c"], "correct": 2, "hints": 1, "hintText": ["Les textos utilisent des salutations famili\u00e8res et des abr\u00e9viations."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "m7", "La Russie contemporaine", "culture",
        '<p>Art, soci\u00e9t\u00e9 et culture dans la Russie d\u2019aujourd\u2019hui.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e</span><span class="fr">art contemporain</span><span class="pron">[sav-rye-mye-nna-ye is-kous-stva]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438</span><span class="fr">technologies</span><span class="pron">[tyekh-na-lo-gi-i]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435</span><span class="fr">\u00e9ducation</span><span class="pron">[ab-ra-za-va-ni-ye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430</span><span class="fr">culture</span><span class="pron">[koul\\\'-tou-ra]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u042f\u043d\u0434\u0435\u043a\u0441</span><span class="fr">Yandex (moteur de recherche russe)</span><span class="pron">[yan-dyeks]</span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">La sc\u00e8ne artistique russe contemporaine est dynamique : les \u00e9coles d\u2019art de Moscou et Saint-P\u00e9tersbourg forment des artistes reconnus mondialement.</p>',
        ["\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u2014 art contemporain"],
        {"type": "choice", "question": "Quel est le principal moteur de recherche russe ?", "options": ["Google", "Yandex", "Bing", "Mail.ru"], "correct": 1, "hints": 0},
        2
    )
    f.write(",\n")

    write_lesson(f, "m8", "Nouvelle de Boulgakov (extrait)", "reading",
        '<p>Un extrait adapt\u00e9 de Boulgakov.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru">\u041e\u0434\u043d\u0430\u0436\u0434\u044b \u0432\u0435\u0441\u043d\u043e\u044e, \u0432 \u0447\u0430\u0441 \u043d\u0435\u0431\u044b\u0432\u0430\u043b\u043e \u0436\u0430\u0440\u043a\u043e\u0433\u043e \u0437\u0430\u043a\u0430\u0442\u0430, \u0432 \u041c\u043e\u0441\u043a\u0432\u0435, \u043d\u0430 \u041f\u0430\u0442\u0440\u0438\u0430\u0440\u0448\u0438\u0445 \u043f\u0440\u0443\u0434\u0430\u0445, \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c \u0434\u0432\u043e\u0435 \u0433\u0440\u0430\u0436\u0434\u0430\u043d. \u041e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u0431\u044b\u043b \u043e\u0434\u0435\u0442 \u0432 \u0441\u0435\u0440\u044b\u0439 \u043b\u0435\u0442\u043d\u0438\u0439 \u043f\u0438\u0434\u0436\u0430\u043a. \u041e\u043d \u0431\u044b\u043b \u043d\u0435\u0432\u044b\u0441\u043e\u043a \u0440\u043e\u0441\u0442\u043e\u043c, \u0448\u0438\u0440\u043e\u043a \u0432 \u043f\u043b\u0435\u0447\u0430\u0445 \u0438 \u0447\u0435\u0440\u0435\u043d \u0432\u043e\u043b\u043e\u0441\u0430\u043c\u0438.</p>\n'
        '          <p class="poem-fr">Un printemps, \u00e0 l\u2019heure d\u2019un coucher de soleil d\u2019une chaleur inou\u00efe, \u00e0 Moscou, aux \u00c9tangs du Patriarche, deux citoyens apparurent. L\u2019un d\u2019eux portait un veston d\u2019\u00e9t\u00e9 gris. Il \u00e9tait de petite taille, large d\u2019\u00e9paules et avait les cheveux noirs.</p>\n'
        '        </div>\n'
        '        <div class="vocab-list" style="margin-top:1rem">\n'
        '          <div class="vocab-item"><span class="ru">\u043e\u0434\u043d\u0430\u0436\u0434\u044b</span><span class="fr">un jour</span><span class="pron">[ad-nazh-dy]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c</span><span class="fr">apparurent</span><span class="pron">[pa-ya-vi-lis\\\']</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d</span><span class="fr">citoyen</span><span class="pron">[grazh-da-nin]</span></div>\n'
        '        </div>',
        ["\u041e\u0434\u043d\u0430\u0436\u0434\u044b... \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c... \u2014 Un jour apparurent..."],
        {"type": "choice", "question": "Quel c\u00e9l\u00e8bre roman commence par cette sc\u00e8ne ?", "options": ["Guerre et Paix", "Crime et Ch\u00e2timent", "Le Ma\u00eetre et Marguerite", "Les \u00c2mes mortes"], "correct": 2, "hints": 1, "hintText": ["C\u2019est l\u2019incipit du roman le plus c\u00e9l\u00e8bre de Boulgakov."]},
        3
    )
    f.write("\n  ]\n};\n\n")

    print("All 40 lessons written!")
PYEOF