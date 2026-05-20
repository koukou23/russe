#!/usr/bin/env python3
"""Generate the complete scripts.js file for Russian with Lamia."""
import json, os

path = "/Users/haxor/Desktop/Apprendre le Russe/scripts.js"

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

with open(path, 'w', encoding='utf-8') as f:
    # ===== HEADER =====
    f.write("// ================================================================\n")
    f.write("// RUSSIAN WITH LAMIA — Script principal\n")
    f.write("// ================================================================\n\n")

    # ===== QUESTIONS =====
    f.write("const QUESTIONS = [\n")
    questions = [
        {"q": "Que signifie l'expression \u00ab \u043c\u0435\u0434\u0432\u0435\u0436\u044c\u044f \u0443\u0441\u043b\u0443\u0433\u0430 \u00bb ?", "opts": ["Un service rendu maladroitement qui nuit au lieu d'aider", "Un service tr\u00e8s g\u00e9n\u00e9reux et attentionn\u00e9", "Un service li\u00e9 \u00e0 la chasse \u00e0 l'ours", "Un service gratuit"], "c": 0, "t": "vocabulaire"},
        {"q": "Quel mot signifie \u00ab parfaitement / tout \u00e0 fait \u00bb ?", "opts": ["\u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e", "\u0441\u043e\u0432\u0435\u0441\u0442\u044c", "\u0441\u043e\u0432\u0435\u0442", "\u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439"], "c": 0, "t": "vocabulaire"},
        {"q": "Que veut dire \u00ab \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e \u00bb ?", "opts": ["Malheureusement", "Inattendu / soudainement", "In\u00e9vitablement", "Impoli"], "c": 1, "t": "vocabulaire"},
        {"q": "Dans quelle phrase le verbe est-il correctement conjugu\u00e9 au pass\u00e9 f\u00e9minin ?", "opts": ["\u041e\u043d\u0430 \u0447\u0438\u0442\u0430\u043b \u043a\u043d\u0438\u0433\u0443", "\u041e\u043d\u0430 \u0447\u0438\u0442\u0430\u043b\u0430 \u043a\u043d\u0438\u0433\u0443", "\u041e\u043d\u0430 \u0447\u0438\u0442\u0430\u043b\u043e \u043a\u043d\u0438\u0433\u0443", "\u041e\u043d\u0430 \u0447\u0438\u0442\u0430\u043b\u0438 \u043a\u043d\u0438\u0433\u0443"], "c": 1, "t": "grammaire"},
        {"q": "Quel cas doit-on utiliser apr\u00e8s la pr\u00e9position \u00ab \u0431\u0435\u0437 \u00bb (sans) ?", "opts": ["Accusatif", "G\u00e9nitif", "Datif", "Pr\u00e9positionnel"], "c": 1, "t": "grammaire"},
        {"q": "\u00ab \u042f ______ \u0432 \u041c\u043e\u0441\u043a\u0432\u0443 \u043a\u0430\u0436\u0434\u043e\u0435 \u043b\u0435\u0442\u043e. \u00bb \u2014 choisissez la forme correcte du verbe \u00ab aller (en transport) \u00bb pour un mouvement habituel.", "opts": ["\u0435\u0434\u0443", "\u0435\u0445\u0430\u043b", "\u0435\u0437\u0436\u0443", "\u0435\u0437\u0434\u0438\u043b"], "c": 2, "t": "grammaire"},
        {"q": "Lisez : \u00ab \u041d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0434\u043e\u0436\u0434\u044c, \u043c\u044b \u043f\u043e\u0448\u043b\u0438 \u0433\u0443\u043b\u044f\u0442\u044c. \u00bb Que comprend-on ?", "opts": ["Nous sommes rest\u00e9s \u00e0 cause de la pluie", "Nous sommes sortis nous promener malgr\u00e9 la pluie", "Il pleuvait donc nous avons annul\u00e9", "La pluie a commenc\u00e9 pendant la promenade"], "c": 1, "t": "compr\u00e9hension"},
        {"q": "\u00ab \u0415\u0441\u043b\u0438 \u0431\u044b \u0443 \u043c\u0435\u043d\u044f \u0431\u044b\u043b\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u044f \u0431\u044b \u0432\u044b\u0443\u0447\u0438\u043b \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a. \u00bb \u2014 Que signifie cette phrase ?", "opts": ["J'ai beaucoup de temps pour apprendre le russe", "Si j'avais plus de temps, j'apprendrais le russe", "J'apprends le russe depuis longtemps", "Le russe prend beaucoup de temps \u00e0 apprendre"], "c": 1, "t": "compr\u00e9hension"},
        {"q": "Dans quel mot le \u00ab o \u00bb se prononce-t-il [a] (r\u00e9duction vocalique) ?", "opts": ["\u043c\u043e\u043b\u043e\u043a\u043e", "\u0441\u0442\u043e\u043b", "\u043a\u043e\u0442", "\u0434\u043e\u043c"], "c": 0, "t": "prononciation"},
        {"q": "Qui est l'auteur du roman \u00ab Guerre et Paix \u00bb ?", "opts": ["Fiodor Dosto\u00efevski", "L\u00e9on Tolsto\u00ef", "Anton Tchekhov", "Alexandre Pouchkine"], "c": 1, "t": "culture"},
    ]
    for i, q in enumerate(questions):
        comma = "," if i < len(questions) - 1 else ""
        f.write("  {\n")
        f.write(f"    question: {js_str(q['q'])},\n")
        f.write(f"    options: {js_str(q['opts'])},\n")
        f.write(f"    correct: {q['c']},\n")
        f.write(f"    type: {js_str(q['t'])}\n")
        f.write(f"  }}{comma}\n")
    f.write("];\n\n")

    # ===== LEVELS =====
    f.write("const LEVELS = [\n")
    levels = [
        {"id": "debutant", "name": "D\u00e9butante", "min": 0, "max": 1, "cefr": "A1", "emoji": "\U0001f331", "desc": "Les premiers pas"},
        {"id": "intermediaire", "name": "Interm\u00e9diaire", "min": 2, "max": 3, "cefr": "A2", "emoji": "\U0001f33f", "desc": "La vie quotidienne"},
        {"id": "avance", "name": "Avanc\u00e9", "min": 4, "max": 5, "cefr": "B1", "emoji": "\U0001f333", "desc": "L'ind\u00e9pendance"},
        {"id": "expert", "name": "Experte", "min": 6, "max": 7, "cefr": "B2", "emoji": "\U0001f451", "desc": "La ma\u00eetrise"},
        {"id": "maitre", "name": "Ma\u00eetre", "min": 8, "max": 10, "cefr": "C1", "emoji": "\U0001f3c6", "desc": "L'\u00e9l\u00e9gance"},
    ]
    for i, lv in enumerate(levels):
        comma = "," if i < len(levels) - 1 else ""
        f.write(f"  {{ id: {js_str(lv['id'])}, name: {js_str(lv['name'])}, min: {lv['min']}, max: {lv['max']}, cefr: {js_str(lv['cefr'])}, emoji: {js_str(lv['emoji'])}, desc: {js_str(lv['desc'])} }}{comma}\n")
    f.write("];\n\n")

    f.write("const levelNames = {\n")
    for i, lv in enumerate(levels):
        comma = "," if i < len(levels) - 1 else ""
        f.write(f"  {lv['id']}: {js_str(lv['name'])}{comma}\n")
    f.write("};\n\n")

    print("Data structures written. Writing lessons...")

    # ===== LESSONS =====
    f.write("// ================================================================\n")
    f.write("// LESSONS — 40 le\u00e7ons (5 niveaux \u00d7 8)\n")
    f.write("// ================================================================\n\n")
    f.write("const LESSONS = {\n")

    # Helper to write a lesson
    def write_lesson(lesson_id, title, typ, content, examples, exercise, difficulty):
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

    # ----- NIVEAU 1: DEBUTANT -----
    f.write("  // ===== NIVEAU 1 \u2014 D\u00c9BUTANTE (A1) =====\n")
    f.write("  debutant: [\n")

    write_lesson("d1", "Alphabet cyrillique A\u2013L", "vocab",
        '<p>L\\\'alphabet russe compte <strong>33 lettres</strong>. D\\u00e9couvrons les 11 premi\\u00e8res.</p>\n'
        '        <div class="lesson-alphabet">\n'
        '          <div class="letter-card"><span class="cyr">\u0410 \u0430</span><span class="phon">[a]</span><span class="example">comme <strong>papa</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0411 \u0431</span><span class="phon">[b]</span><span class="example">comme <strong>b\\u00e9b\\u00e9</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0412 \u0432</span><span class="phon">[v]</span><span class="example">comme <strong>v\\u00e9lo</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0413 \u0433</span><span class="phon">[g]</span><span class="example">comme <strong>gare</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0414 \u0434</span><span class="phon">[d]</span><span class="example">comme <strong>d\\u00e9</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0415 \u0435</span><span class="phon">[y\\u00e9]</span><span class="example">comme <strong>y\\u00e9ti</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0401 \u0451</span><span class="phon">[yo]</span><span class="example">comme <strong>yoga</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0416 \u0436</span><span class="phon">[j]</span><span class="example">comme <strong>jardin</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0417 \u0437</span><span class="phon">[z]</span><span class="example">comme <strong>z\\u00e8bre</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0418 \u0438</span><span class="phon">[i]</span><span class="example">comme <strong>\\u00eele</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u041a \u043a</span><span class="phon">[k]</span><span class="example">comme <strong>kilo</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u041b \u043b</span><span class="phon">[l]</span><span class="example">comme <strong>lune</strong></span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1.2rem;font-style:italic;color:var(--text-muted)">Pi\\u00e8ge : le <strong>\u0412</strong> se prononce V, pas B !</p>',
        ["A = a comme dans papa", "V = v comme dans v\u00e9lo", "J = j comme dans jardin", "I = i comme dans \u00eele"],
        {"type": "choice", "question": "Quelle lettre se prononce [v] et ressemble \u00e0 un B latin ?", "options": ["\u0411 [b]", "\u0412 [v]", "\u0413 [g]", "\u041b [l]"], "correct": 1, "hints": 1, "hintText": ["Regardez les lettres qui ressemblent au latin mais sonnent diff\u00e9remment."]},
        1
    )
    f.write(",\n")

    write_lesson("d2", "Alphabet cyrillique M\u2013R", "vocab",
        '<p>Les 21 derni\\u00e8res lettres de l\\\'alphabet russe.</p>\n'
        '        <div class="lesson-alphabet">\n'
        '          <div class="letter-card"><span class="cyr">\u041c \u043c</span><span class="phon">[m]</span><span class="example"><strong>maman</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u041d \u043d</span><span class="phon">[n]</span><span class="example"><strong>nez</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u041e \u043e</span><span class="phon">[o/a]</span><span class="example"><strong>mot</strong> (ou [a] sans accent)</span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u041f \u043f</span><span class="phon">[p]</span><span class="example"><strong>p\\u00e8re</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0420 \u0440</span><span class="phon">[r]</span><span class="example">R roul\\u00e9 (espagnol)</span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0421 \u0441</span><span class="phon">[s]</span><span class="example"><strong>soleil</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0422 \u0442</span><span class="phon">[t]</span><span class="example"><strong>table</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0423 \u0443</span><span class="phon">[ou]</span><span class="example"><strong>loup</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0424 \u0444</span><span class="phon">[f]</span><span class="example"><strong>fleur</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0425 \u0445</span><span class="phon">[kh]</span><span class="example">j espagnol</span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0426 \u0446</span><span class="phon">[ts]</span><span class="example"><strong>tsar</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0427 \u0447</span><span class="phon">[tch]</span><span class="example"><strong>tch\\u00e8que</strong></span></div>\n'
        '        </div>\n'
        '        <div class="lesson-alphabet">\n'
        '          <div class="letter-card"><span class="cyr">\u0428 \u0448</span><span class="phon">[ch]</span><span class="example"><strong>chat</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u0429 \u0449</span><span class="phon">[chtch]</span><span class="example">son plus doux</span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u042a \u044a</span><span class="phon">[\u2014]</span><span class="example">signe dur (muet)</span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u042b \u044b</span><span class="phon">[y]</span><span class="example">son unique entre i et ou</span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u042c \u044c</span><span class="phon">[\u2014]</span><span class="example">signe mou (adoucit)</span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u042d \u044d</span><span class="phon">[\\u00e8]</span><span class="example"><strong>p\\u00e8re</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u042e \u044e</span><span class="phon">[you]</span><span class="example"><strong>youpi</strong></span></div>\n'
        '          <div class="letter-card"><span class="cyr">\u042f \u044f</span><span class="phon">[ya]</span><span class="example"><strong>yaourt</strong></span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1.2rem;font-style:italic;color:var(--text-muted)">Bravo ! Lisez : <strong>\u043c\u0430\u043c\u0430</strong> [ma-ma] (maman), <strong>\u043f\u0430\u043f\u0430</strong> [pa-pa] (papa).</p>',
        ["R = r roul\u00e9", "Y = son unique [y]", "b = signe mou", "R = ya comme yaourt"],
        {"type": "fill", "question": "Tapez le mot russe pour \u00ab maman \u00bb (4 lettres) :", "correct": "\u043c\u0430\u043c\u0430", "hints": 2, "hintText": ["La premi\u00e8re lettre est \u041c [m]", "La deuxi\u00e8me lettre est \u0410 [a]"]},
        2
    )
    f.write(",\n")

    write_lesson("d3", "Salutations de base", "vocab",
        '<p>Les salutations sont la cl\\u00e9 de toute conversation.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435</span><span class="fr">Bonjour (formel)</span><span class="pron">[zdra-stvo\\u00ef-tye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041f\u0440\u0438\u0432\u0435\u0442</span><span class="fr">Salut (informel)</span><span class="pron">[pri-vyet]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0414\u043e \u0441\u0432\u0438\u0434\u0430\u043d\u0438\u044f</span><span class="fr">Au revoir (formel)</span><span class="pron">[da svi-da-ni-ya]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041f\u043e\u043a\u0430</span><span class="fr">Salut / \\u00c0 plus</span><span class="pron">[pa-ka]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0421\u043f\u0430\u0441\u0438\u0431\u043e</span><span class="fr">Merci</span><span class="pron">[spa-si-ba]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430</span><span class="fr">S\\\'il vous pla\\u00eet</span><span class="pron">[pa-zhal-sta]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041a\u0430\u043a \u0434\u0435\u043b\u0430?</span><span class="fr">Comment \\u00e7a va ?</span><span class="pron">[kak di-la]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0425\u043e\u0440\u043e\u0448\u043e</span><span class="fr">Bien</span><span class="pron">[ha-ra-cho]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 ...</span><span class="fr">Je m\\\'appelle ...</span><span class="pron">[mi-nya za-vout]</span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;">Dialogue :<br><br>\u2014 <strong>\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435!</strong> \u041a\u0430\u043a \u0434\u0435\u043b\u0430?<br>\u2014 <strong>\u0425\u043e\u0440\u043e\u0448\u043e, \u0441\u043f\u0430\u0441\u0438\u0431\u043e!</strong> \u0410 \u0443 \u0432\u0430\u0441?<br>\u2014 \u0422\u043e\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u043e. <strong>\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442</strong> \u0410\u043d\u043d\u0430.</p>',
        ["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u2014 Bonjour (formel)", "\u041f\u0440\u0438\u0432\u0435\u0442 \u2014 Salut", "\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u2014 Merci"],
        {"type": "choice", "question": "Comment r\u00e9pond-on \u00e0 \u00ab \u041a\u0430\u043a \u0434\u0435\u043b\u0430? \u00bb ?", "options": ["\u041f\u0440\u0438\u0432\u0435\u0442", "\u0425\u043e\u0440\u043e\u0448\u043e, \u0441\u043f\u0430\u0441\u0438\u0431\u043e", "\u041f\u043e\u043a\u0430", "\u0414\u043e \u0441\u0432\u0438\u0434\u0430\u043d\u0438\u044f"], "correct": 1, "hints": 1, "hintText": ["On r\u00e9pond en parlant de son \u00e9tat, puis on remercie."]},
        1
    )
    f.write(",\n")

    write_lesson("d4", "Les pronoms personnels", "grammar",
        '<p>Les pronoms personnels sont le socle de la conjugaison.</p>\n'
        '        <table class="case-table">\n'
        '          <tr><th>Fran\\u00e7ais</th><th>Russe</th><th>Prononciation</th></tr>\n'
        '          <tr><td>je</td><td>\u044f</td><td>[ya]</td></tr>\n'
        '          <tr><td>tu</td><td>\u0442\u044b</td><td>[ty]</td></tr>\n'
        '          <tr><td>il</td><td>\u043e\u043d</td><td>[on]</td></tr>\n'
        '          <tr><td>elle</td><td>\u043e\u043d\u0430</td><td>[a-na]</td></tr>\n'
        '          <tr><td>nous</td><td>\u043c\u044b</td><td>[my]</td></tr>\n'
        '          <tr><td>vous</td><td>\u0432\u044b</td><td>[vy]</td></tr>\n'
        '          <tr><td>ils/elles</td><td>\u043e\u043d\u0438</td><td>[a-ni]</td></tr>\n'
        '        </table>\n'
        '        <div class="example-box" style="margin-top:1rem">\n'
        '          <p><strong>\u042f</strong> \u0447\u0438\u0442\u0430\u044e. \u2014 Je lis.</p>\n'
        '          <p><strong>\u0422\u044b</strong> \u0433\u043e\u0432\u043e\u0440\u0438\u0448\u044c. \u2014 Tu parles.</p>\n'
        '          <p><strong>\u041e\u043d</strong> \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442. \u2014 Il travaille.</p>\n'
        '          <p><strong>\u041c\u044b</strong> \u0443\u0447\u0438\u043c \u0440\u0443\u0441\u0441\u043a\u0438\u0439. \u2014 Nous apprenons le russe.</p>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)"><strong>\u0412\u044b</strong> est aussi la forme de politesse.</p>',
        ["\u044f \u2014 je", "\u0442\u044b \u2014 tu", "\u043e\u043d/\u043e\u043d\u0430 \u2014 il/elle", "\u043c\u044b \u2014 nous"],
        {"type": "choice", "question": "Remplacez \u00ab \u0410\u043d\u043d\u0430 \u00bb par le bon pronom : \u00ab \u0410\u043d\u043d\u0430 \u0447\u0438\u0442\u0430\u0435\u0442 \u00bb", "options": ["\u041e\u043d \u0447\u0438\u0442\u0430\u0435\u0442", "\u041e\u043d\u0430 \u0447\u0438\u0442\u0430\u0435\u0442", "\u041e\u043d\u0438 \u0447\u0438\u0442\u0430\u044e\u0442", "\u041c\u044b \u0447\u0438\u0442\u0430\u0435\u043c"], "correct": 1, "hints": 0},
        1
    )
    f.write(",\n")

    write_lesson("d5", "Les nombres 1\u201320", "vocab",
        '<p>Les nombres sont essentiels pour les achats et les dates.</p>\n'
        '        <div class="numbers-grid">\n'
        '          <div class="num-item"><span class="num">1</span><span class="ru">\u043e\u0434\u0438\u043d</span><span class="pron">[a-din]</span></div>\n'
        '          <div class="num-item"><span class="num">2</span><span class="ru">\u0434\u0432\u0430</span><span class="pron">[dva]</span></div>\n'
        '          <div class="num-item"><span class="num">3</span><span class="ru">\u0442\u0440\u0438</span><span class="pron">[tri]</span></div>\n'
        '          <div class="num-item"><span class="num">4</span><span class="ru">\u0447\u0435\u0442\u044b\u0440\u0435</span><span class="pron">[chi-ty-rye]</span></div>\n'
        '          <div class="num-item"><span class="num">5</span><span class="ru">\u043f\u044f\u0442\u044c</span><span class="pron">[pyat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">6</span><span class="ru">\u0448\u0435\u0441\u0442\u044c</span><span class="pron">[shest\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">7</span><span class="ru">\u0441\u0435\u043c\u044c</span><span class="pron">[syem\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">8</span><span class="ru">\u0432\u043e\u0441\u0435\u043c\u044c</span><span class="pron">[vo-syem\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">9</span><span class="ru">\u0434\u0435\u0432\u044f\u0442\u044c</span><span class="pron">[dye-vyat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">10</span><span class="ru">\u0434\u0435\u0441\u044f\u0442\u044c</span><span class="pron">[dye-syat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">11</span><span class="ru">\u043e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[a-di-na-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">12</span><span class="ru">\u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[dvi-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">13</span><span class="ru">\u0442\u0440\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[tri-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">14</span><span class="ru">\u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[chi-tyr-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">15</span><span class="ru">\u043f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[pyat-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">16</span><span class="ru">\u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[shest-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">17</span><span class="ru">\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[syem-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">18</span><span class="ru">\u0432\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[va-syem-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">19</span><span class="ru">\u0434\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[dye-vyat-nad-tsat\\\']</span></div>\n'
        '          <div class="num-item"><span class="num">20</span><span class="ru">\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c</span><span class="pron">[dva-tsat\\\']</span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">Les nombres de 11 \u00e0 19 prennent le suffixe <strong>-\u043d\u0430\u0434\u0446\u0430\u0442\u044c</strong>.</p>',
        ["\u043e\u0434\u0438\u043d \u2014 1", "\u0434\u0432\u0430 \u2014 2", "\u043f\u044f\u0442\u044c \u2014 5", "\u0434\u0435\u0441\u044f\u0442\u044c \u2014 10"],
        {"type": "fill", "question": "Tapez \u00ab 7 \u00bb en russe (4 lettres) :", "correct": "\u0441\u0435\u043c\u044c", "hints": 1, "hintText": ["La premi\u00e8re lettre est \u0421 [s], \u00e7a commence comme \u00ab sept \u00bb..."]},
        2
    )
    f.write(",\n")

    write_lesson("d6", "Le genre des noms", "grammar",
        '<p>En russe, chaque nom a un genre : masculin, f\\u00e9minin ou neutre.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>Masculin</strong> : se termine par consonne ou <strong>-\u0439</strong><br>\u0441\u0442\u043e\u043b [stol] (table), \u043c\u0443\u0437\u0435\u0439 [mou-zy\\u00e9\\u00ef] (mus\\u00e9e)</p>\n'
        '          <p><strong>F\\u00e9minin</strong> : se termine par <strong>-\u0430</strong> ou <strong>-\u044f</strong><br>\u043a\u043d\u0438\u0433\u0430 [kni-ga] (livre), \u0437\u0435\u043c\u043b\u044f [zyim-lya] (terre)</p>\n'
        '          <p><strong>Neutre</strong> : se termine par <strong>-\u043e</strong> ou <strong>-\u0435</strong><br>\u043e\u043a\u043d\u043e [ak-no] (fen\\u00eatre), \u043c\u043e\u0440\u0435 [mo-rye] (mer)</p>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">Exceptions : les noms en <strong>-\u044c</strong> peuvent \\u00eatre masculins ou f\\u00e9minins.</p>',
        ["\u0441\u0442\u043e\u043b (m.) \u2014 table", "\u043a\u043d\u0438\u0433\u0430 (f.) \u2014 livre", "\u043e\u043a\u043d\u043e (n.) \u2014 fen\u00eatre"],
        {"type": "choice", "question": "Quel est le genre de \u00ab \u0434\u0432\u0435\u0440\u044c \u00bb [dvyer\\\'] (porte) ?", "options": ["Masculin", "F\u00e9minin", "Neutre", "\u00c7a d\u00e9pend du contexte"], "correct": 1, "hints": 2, "hintText": ["Le -\u044c peut \u00eatre masculin ou f\u00e9minin.", "Pensez \u00e0 \u00ab la porte \u00bb en fran\u00e7ais \u2014 c\u2019est f\u00e9minin aussi !"]},
        2
    )
    f.write(",\n")

    write_lesson("d7", "Mini-texte : \u00ab \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442... \u00bb", "reading",
        '<p>Lisons notre premier texte russe !</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru"><strong>\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043d\u043d\u0430.</strong><br>\n\u042f \u0438\u0437 \u0424\u0440\u0430\u043d\u0446\u0438\u0438. \u042f \u0436\u0438\u0432\u0443 \u0432 \u041f\u0430\u0440\u0438\u0436\u0435.<br>\n\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043c\u0430\u043c\u0430, \u043f\u0430\u043f\u0430 \u0438 \u0431\u0440\u0430\u0442.<br>\n\u042f \u043b\u044e\u0431\u043b\u044e \u0447\u0438\u0442\u0430\u0442\u044c \u0438 \u0441\u043b\u0443\u0448\u0430\u0442\u044c \u043c\u0443\u0437\u044b\u043a\u0443.<br>\n\u042f \u0443\u0447\u0443 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a.</p>\n'
        '          <p class="poem-fr">Je m\\\'appelle Anna.<br>\nJe viens de France. J\'habite \u00e0 Paris.<br>\nJ\'ai une maman, un papa et un fr\\u00e8re.<br>\nJ\'aime lire et \\u00e9couter de la musique.<br>\nJ\'apprends le russe.</p>\n'
        '        </div>\n'
        '        <div class="vocab-list" style="margin-top:1rem">\n'
        '          <div class="vocab-item"><span class="ru">\u0438\u0437</span><span class="fr">de (provenance)</span><span class="pron">[iz]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0436\u0438\u0432\u0443</span><span class="fr">je vis / j\'habite</span><span class="pron">[ji-vou]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0443 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c</span><span class="fr">j\'ai</span><span class="pron">[ou mye-nya yest\\\']</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043b\u044e\u0431\u043b\u044e</span><span class="fr">j\'aime</span><span class="pron">[lyoub-lyou]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0443\u0447\u0443</span><span class="fr">j\'apprends</span><span class="pron">[ou-tchou]</span></div>\n'
        '        </div>',
        ["\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043d\u043d\u0430 \u2014 Je m'appelle Anna", "\u042f \u0438\u0437 \u0424\u0440\u0430\u043d\u0446\u0438\u0438 \u2014 Je viens de France"],
        {"type": "choice", "question": "D'apr\u00e8s le texte, qu'est-ce qu'Anna a ?", "options": ["Un chat et un chien", "Une maman, un papa et un fr\u00e8re", "Une s\u0153ur", "Elle vit seule"], "correct": 1, "hints": 0},
        1
    )
    f.write(",\n")

    write_lesson("d8", "La Russie et ses symboles", "culture",
        '<p>D\\u00e9couvrons la culture russe \\u00e0 travers ses symboles.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0444\u043b\u0430\u0433 \u0420\u043e\u0441\u0441\u0438\u0438</span><span class="fr">drapeau russe (blanc, bleu, rouge)</span><span class="pron">[flag ras-si-i]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043c\u0430\u0442\u0440\u0451\u0448\u043a\u0430</span><span class="fr">poup\\u00e9e gigogne Matriochka</span><span class="pron">[ma-tryoch-ka]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0431\u0430\u043b\u0430\u043b\u0430\u0439\u043a\u0430</span><span class="fr">instrument Balala\\u00efka</span><span class="pron">[ba-la-la\\u00ef-ka]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043c\u0435\u0434\u0432\u0435\u0434\u044c</span><span class="fr">ours (symbole national)</span><span class="pron">[myed-vyed\\\']</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041a\u0440\u0435\u043c\u043b\u044c</span><span class="fr">Kremlin</span><span class="pron">[kryeml\\\']</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c</span><span class="fr">Place Rouge</span><span class="pron">[kras-na-ya plo-chchad\\\']</span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">La premi\\u00e8re Matriochka a \\u00e9t\\u00e9 fabriqu\\u00e9e en 1890 par Vassili Zviozdotchkine.</p>',
        ["\u041c\u0430\u0442\u0440\u0451\u0448\u043a\u0430 \u2014 poup\u00e9e gigogne", "\u0411\u0430\u043b\u0430\u043b\u0430\u0439\u043a\u0430 \u2014 instrument \u00e0 3 cordes"],
        {"type": "choice", "question": "Quel instrument traditionnel est associ\u00e9 \u00e0 la Russie ?", "options": ["Le ukul\u00e9l\u00e9", "La balala\u00efka", "La guitare \u00e9lectrique", "Le violon"], "correct": 1, "hints": 1, "hintText": ["Il a 3 cordes et un corps triangulaire."]},
        1
    )
    f.write("\n  ],\n")

    print("Niveau 1 done. Writing niveau 2...")

print("Phase 1 complete")
