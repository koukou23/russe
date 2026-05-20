#!/usr/bin/env python3
"""Append niveaux 2-5, plus remaining code to scripts.js"""
import json, os

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
    # ===== NIVEAU 2: INTERMEDIAIRE =====
    f.write("  // ===== NIVEAU 2 \u2014 INTERM\u00c9DIAIRE (A2) =====\n")
    f.write("  intermediaire: [\n")

    write_lesson(f, "i1", "La nourriture et les boissons", "vocab",
        '<p>Vocabulaire essentiel pour le restaurant.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0435\u0434\u0430</span><span class="fr">nourriture</span><span class="pron">[yi-da]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043d\u0430\u043f\u0438\u0442\u043e\u043a</span><span class="fr">boisson</span><span class="pron">[na-pi-tak]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0445\u043b\u0435\u0431</span><span class="fr">pain</span><span class="pron">[khlyep]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043c\u043e\u043b\u043e\u043a\u043e</span><span class="fr">lait</span><span class="pron">[ma-la-ko]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043c\u044f\u0441\u043e</span><span class="fr">viande</span><span class="pron">[mya-sa]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0440\u044b\u0431\u0430</span><span class="fr">poisson</span><span class="pron">[ry-ba]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0444\u0440\u0443\u043a\u0442\u044b</span><span class="fr">fruits</span><span class="pron">[frouk-ty]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043e\u0432\u043e\u0449\u0438</span><span class="fr">l\u00e9gumes</span><span class="pron">[o-va-chchi]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0447\u0430\u0439</span><span class="fr">th\u00e9</span><span class="pron">[tcha\u00ef]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043a\u043e\u0444\u0435</span><span class="fr">caf\u00e9</span><span class="pron">[ko-fye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0432\u043e\u0434\u0430</span><span class="fr">eau</span><span class="pron">[va-da]</span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;">Phrase : <strong>\u042f \u0445\u043e\u0447\u0443 \u0435\u0441\u0442\u044c/\u043f\u0438\u0442\u044c</strong> [ya kha-tchou yest\\\'/pit\\\'] \u2014 J\'ai faim/soif.</p>',
        ["\u0425\u043b\u0435\u0431 \u2014 pain", "\u041c\u043e\u043b\u043e\u043a\u043e \u2014 lait", "\u0427\u0430\u0439 \u2014 th\u00e9", "\u0412\u043e\u0434\u0430 \u2014 eau"],
        {"type": "choice", "question": "Comment dit-on \u00ab eau \u00bb en russe ?", "options": ["\u0432\u0438\u043d\u043e [vi-no]", "\u0432\u043e\u0434\u0430 [va-da]", "\u0432\u043e\u0434\u043a\u0430 [vod-ka]", "\u043c\u043e\u043b\u043e\u043a\u043e [ma-la-ko]"], "correct": 1, "hints": 1, "hintText": ["\u00c7a commence par V et a 2 syllabes."]},
        1
    )
    f.write(",\n")

    write_lesson(f, "i2", "Le pass\u00e9 des verbes", "grammar",
        '<p>Le pass\u00e9 russe : on ajoute un suffixe au radical.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>Formation :</strong> radical + <strong>-\u043b</strong> / <strong>-\u043b\u0430</strong> / <strong>-\u043b\u043e</strong> / <strong>-\u043b\u0438</strong></p>\n'
        '          <p>\u0447\u0438\u0442\u0430\u0442\u044c [chi-tat\\\'] (lire) \u2192 <strong>\u0447\u0438\u0442\u0430-</strong></p>\n'
        '          <p>\u2014 \u043e\u043d \u0447\u0438\u0442\u0430<strong>\u043b</strong> [chi-tal] (il lisait)</p>\n'
        '          <p>\u2014 \u043e\u043d\u0430 \u0447\u0438\u0442\u0430<strong>\u043b\u0430</strong> [chi-ta-la] (elle lisait)</p>\n'
        '          <p>\u2014 \u043e\u043d\u0438 \u0447\u0438\u0442\u0430<strong>\u043b\u0438</strong> [chi-ta-li] (ils lisaient)</p>\n'
        '        </div>\n'
        '        <table class="case-table" style="margin-top:1rem">\n'
        '          <tr><th>Infinitif</th><th>Masculin</th><th>F\u00e9minin</th><th>Pluriel</th></tr>\n'
        '          <tr><td>\u0434\u0435\u043b\u0430\u0442\u044c</td><td>\u0434\u0435\u043b\u0430\u043b</td><td>\u0434\u0435\u043b\u0430\u043b\u0430</td><td>\u0434\u0435\u043b\u0430\u043b\u0438</td></tr>\n'
        '          <tr><td>\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c</td><td>\u0433\u043e\u0432\u043e\u0440\u0438\u043b</td><td>\u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0430</td><td>\u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0438</td></tr>\n'
        '          <tr><td>\u0431\u044b\u0442\u044c</td><td>\u0431\u044b\u043b</td><td>\u0431\u044b\u043b\u0430</td><td>\u0431\u044b\u043b\u0438</td></tr>\n'
        '        </table>',
        ["\u0447\u0438\u0442\u0430\u043b \u2014 il lisait", "\u0447\u0438\u0442\u0430\u043b\u0430 \u2014 elle lisait", "\u0431\u044b\u043b\u0430 \u2014 elle \u00e9tait"],
        {"type": "error", "question": "Cette phrase est-elle correcte ? \u00ab \u041e\u043d\u0430 \u0432\u0447\u0435\u0440\u0430 \u0447\u0438\u0442\u0430\u043b \u043a\u043d\u0438\u0433\u0443. \u00bb", "options": ["Oui, c\u2019est correct", "Non, c\u2019est incorrect"], "correct": 1, "hints": 1, "hintText": ["Regardez le genre du sujet (\u043e\u043d\u0430) et la terminaison du verbe."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "i3", "Dialogue : Au restaurant", "reading",
        '<p>Un dialogue typique dans un restaurant russe.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru"><strong>\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442:</strong> \u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440! \u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c?<br>\n          <strong>\u0412\u044b:</strong> \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u044e?<br>\n          <strong>\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442:</strong> \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0442 \u043c\u0435\u043d\u044e.<br>\n          <strong>\u0412\u044b:</strong> \u042f \u0431\u0443\u0434\u0443 \u0431\u043e\u0440\u0449 \u0438 \u0441\u0430\u043b\u0430\u0442. \u0410 \u043d\u0430 \u0434\u0435\u0441\u0435\u0440\u0442 \u2014 \u0447\u0430\u0439.<br>\n          <strong>\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442:</strong> \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u0441\u0442\u043e\u0438\u0442?<br>\n          <strong>\u0412\u044b:</strong> 850 \u0440\u0443\u0431\u043b\u0435\u0439. \u0412\u043e\u0442, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430. \u0421\u0434\u0430\u0447\u0438 \u043d\u0435 \u043d\u0430\u0434\u043e.</p>\n'
        '          <p class="poem-fr">Serveur : Bonsoir ! Que d\u00e9sirez-vous commander ?<br>\nVous : Bonjour ! Puis-je voir le menu ?<br>\nServeur : Voici le menu.<br>\nVous : Je prendrai le bortsch et une salade. En dessert \u2014 du th\u00e9.<br>\nServeur : Combien \u00e7a co\u00fbte ?<br>\nVous : 850 roubles. Voil\u00e0. Gardez la monnaie.</p>\n'
        '        </div>',
        ["\u041c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u044e? \u2014 Puis-je voir le menu ?", "\u042f \u0431\u0443\u0434\u0443... \u2014 Je prendrai..."],
        {"type": "choice", "question": "Que commande le client dans le dialogue ?", "options": ["Du th\u00e9 et des fruits", "Du bortsch, une salade et du th\u00e9", "De la viande et du caf\u00e9", "Juste une salade"], "correct": 1, "hints": 0},
        1
    )
    f.write(",\n")

    write_lesson(f, "i4", "Les directions et la ville", "vocab",
        '<p>Se rep\\u00e9rer en ville.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0433\u0434\u0435?</span><span class="fr">o\u00f9 ?</span><span class="pron">[gdye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043a\u0443\u0434\u0430?</span><span class="fr">vers o\u00f9 ?</span><span class="pron">[kou-da]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043f\u0440\u044f\u043c\u043e</span><span class="fr">tout droit</span><span class="pron">[prya-ma]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043d\u0430\u043b\u0435\u0432\u043e</span><span class="fr">\u00e0 gauche</span><span class="pron">[na-lye-va]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043d\u0430\u043f\u0440\u0430\u0432\u043e</span><span class="fr">\u00e0 droite</span><span class="pron">[na-pra-va]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0432\u043e\u043a\u0437\u0430\u043b</span><span class="fr">gare</span><span class="pron">[vak-zal]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442</span><span class="fr">a\u00e9roport</span><span class="pron">[a-e-ra-port]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430</span><span class="fr">arr\u00eat (bus)</span><span class="pron">[as-ta-nov-ka]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043c\u0435\u0442\u0440\u043e</span><span class="fr">m\u00e9tro</span><span class="pron">[mi-tro]</span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;">Phrase :<br><strong>\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043a\u0430\u043a \u043f\u0440\u043e\u0439\u0442\u0438 \u043a \u043c\u0435\u0442\u0440\u043e?</strong> [iz-vi-ni-tye, kak pro\u00ef-ti k mi-tro] \u2014 Excusez-moi, comment aller au m\u00e9tro ?</p>',
        ["\u041f\u0440\u044f\u043c\u043e \u2014 tout droit", "\u041d\u0430\u043b\u0435\u0432\u043e \u2014 \u00e0 gauche", "\u041d\u0430\u043f\u0440\u0430\u0432\u043e \u2014 \u00e0 droite"],
        {"type": "choice", "question": "Comment dit-on \u00ab tout droit \u00bb en russe ?", "options": ["\u043d\u0430\u043b\u0435\u0432\u043e [na-lye-va]", "\u043d\u0430\u043f\u0440\u0430\u0432\u043e [na-pra-va]", "\u043f\u0440\u044f\u043c\u043e [prya-ma]", "\u0433\u0434\u0435 [gdye]"], "correct": 2, "hints": 0},
        1
    )
    f.write(",\n")

    write_lesson(f, "i5", "Le cas accusatif", "grammar",
        '<p>L\'accusatif marque le compl\u00e9ment d\'objet direct (COD).</p>\n'
        '        <div class="example-box">\n'
        '          <p>\u042f \u0432\u0438\u0436\u0443 <strong>\u0441\u0442\u043e\u043b</strong>. \u2014 Je vois la table. (masc. inanim\u00e9 = identique)</p>\n'
        '          <p>\u042f \u0432\u0438\u0436\u0443 <strong>\u043a\u043d\u0438\u0433\u0443</strong> [kni-gou]. \u2014 Je vois le livre. (f\u00e9m. : -\u0430 \u2192 -\u0443)</p>\n'
        '          <p>\u042f \u0432\u0438\u0436\u0443 <strong>\u0431\u0440\u0430\u0442\u0430</strong> [bra-ta]. \u2014 Je vois mon fr\u00e8re. (anim\u00e9 : -\u0430)</p>\n'
        '        </div>\n'
        '        <table class="case-table" style="margin-top:1rem">\n'
        '          <tr><th>Genre</th><th>Nominatif</th><th>Accusatif</th></tr>\n'
        '          <tr><td>Masc. inanim\u00e9</td><td>\u0441\u0442\u043e\u043b</td><td>\u0441\u0442\u043e\u043b</td></tr>\n'
        '          <tr><td>Masc. anim\u00e9</td><td>\u0431\u0440\u0430\u0442</td><td>\u0431\u0440\u0430\u0442\u0430</td></tr>\n'
        '          <tr><td>F\u00e9minin (-\u0430)</td><td>\u043a\u043d\u0438\u0433\u0430</td><td>\u043a\u043d\u0438\u0433\u0443</td></tr>\n'
        '          <tr><td>Neutre</td><td>\u043e\u043a\u043d\u043e</td><td>\u043e\u043a\u043d\u043e</td></tr>\n'
        '        </table>',
        ["\u041a\u043d\u0438\u0433\u0443 \u2014 livre (COD)", "\u0411\u0440\u0430\u0442\u0430 \u2014 fr\u00e8re (COD, anim\u00e9)"],
        {"type": "fill", "question": "Mettez \u00ab \u0441\u0435\u0441\u0442\u0440\u0430 \u00bb [sis-tra] (\u0153ur) \u00e0 l\'accusatif : \u00ab \u042f \u043b\u044e\u0431\u043b\u044e _____ \u00bb (6 lettres)", "correct": "\u0441\u0435\u0441\u0442\u0440\u0443", "hints": 2, "hintText": ["Le f\u00e9minin en -\u0430 change -\u0430 en -\u0443.", "Donc \u0441\u0435\u0441\u0442\u0440\u0430 \u2192 \u0441\u0435\u0441\u0442\u0440\u0443"]},
        2
    )
    f.write(",\n")

    write_lesson(f, "i6", "Exercice m\u00e9lang\u00e9", "exercise",
        '<p>Testez vos connaissances avec cet exercice combin\u00e9.</p>\n'
        '        <div style="padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px;margin:1rem 0">\n'
        '          <p style="margin-bottom:0.5rem">Rappel des th\u00e8mes :</p>\n'
        '          <ul style="font-size:0.85rem;color:var(--text-secondary);line-height:1.8">\n'
        '            <li>Nourriture et boissons</li>\n'
        '            <li>Pass\u00e9 des verbes</li>\n'
        '            <li>Directions en ville</li>\n'
        '            <li>Cas accusatif</li>\n'
        '          </ul>\n'
        '        </div>',
        [],
        {"type": "choice", "question": "\u00ab \u0412\u0447\u0435\u0440\u0430 \u043c\u044b ______ \u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0435. \u00bb \u2014 verbe \u00ab \u0431\u044b\u0442\u044c \u00bb au pass\u00e9 pluriel.", "options": ["\u0431\u044b\u043b [byl]", "\u0431\u044b\u043b\u0430 [by-la]", "\u0431\u044b\u043b\u043e [by-la]", "\u0431\u044b\u043b\u0438 [by-li]"], "correct": 3, "hints": 1, "hintText": ["Le sujet est \u00ab \u043c\u044b \u00bb (nous) \u2192 terminaison plurielle."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "i7", "Les f\u00eates russes", "culture",
        '<p>La Russie c\u00e9l\u00e8bre de nombreuses f\u00eates uniques.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u041d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434</span><span class="fr">Nouvel An (la + importante)</span><span class="pron">[no-vy\u00ef got]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u043e</span><span class="fr">No\u00ebl orthodoxe (6-7 janv.)</span><span class="pron">[razh-dyest-vo]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041c\u0430\u0441\u043b\u0435\u043d\u0438\u0446\u0430</span><span class="fr">Maslenitsa (cr\u00eapes, printemps)</span><span class="pron">[mas-lye-ni-tsa]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041f\u0430\u0441\u0445\u0430</span><span class="fr">P\u00e2ques orthodoxe</span><span class="pron">[pas-kha]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0414\u0435\u043d\u044c \u041f\u043e\u0431\u0435\u0434\u044b</span><span class="fr">9 mai (Victoire)</span><span class="pron">[dyen\\\' pa-bye-dy]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0414\u0435\u0434 \u041c\u043e\u0440\u043e\u0437</span><span class="fr">P\u00e8re No\u00ebl russe</span><span class="pron">[dyed ma-ros]</span></div>\n'
        '        </div>\n'
        '        <p style="margin-top:1rem;font-style:italic;color:var(--text-muted)">La Maslenitsa dure une semaine : on mange des <strong>\u0431\u043b\u0438\u043d\u044b</strong> [bli-ny] (cr\u00eapes) et on br\u00fble un \u00e9pouvantail.</p>',
        ["\u041d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434 \u2014 Nouvel An", "\u041c\u0430\u0441\u043b\u0435\u043d\u0438\u0446\u0430 \u2014 f\u00eate des cr\u00eapes"],
        {"type": "choice", "question": "Quelle est la f\u00eate la plus importante en Russie ?", "options": ["No\u00ebl", "P\u00e2ques", "Le Nouvel An", "Le Jour de la Victoire"], "correct": 2, "hints": 1, "hintText": ["M\u00eame sous l'URSS, quand la religion \u00e9tait restreinte, cette f\u00eate \u00e9tait toujours c\u00e9l\u00e9br\u00e9e."]},
        1
    )
    f.write(",\n")

    write_lesson(f, "i8", "Mini-texte : \u00ab \u041c\u043e\u0439 \u0434\u0435\u043d\u044c \u00bb", "reading",
        '<p>Une journ\u00e9e typique d\u00e9crite en russe.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru"><strong>\u041c\u043e\u0439 \u0434\u0435\u043d\u044c</strong><br><br>\n\u042f \u0432\u0441\u0442\u0430\u044e \u0432 \u0441\u0435\u043c\u044c \u0447\u0430\u0441\u043e\u0432 \u0443\u0442\u0440\u0430.<br>\n\u042f \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u0430\u044e \u0438 \u043f\u044c\u044e \u043a\u043e\u0444\u0435.<br>\n\u041f\u043e\u0442\u043e\u043c \u044f \u0438\u0434\u0443 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443.<br>\n\u042f \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0434\u043e \u043f\u044f\u0442\u0438 \u0447\u0430\u0441\u043e\u0432.<br>\n\u0412\u0435\u0447\u0435\u0440\u043e\u043c \u044f \u0443\u0436\u0438\u043d\u0430\u044e \u0438 \u0441\u043c\u043e\u0442\u0440\u044e \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440.<br>\n\u042f \u043b\u043e\u0436\u0443\u0441\u044c \u0441\u043f\u0430\u0442\u044c \u0432 \u043e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u0447\u0430\u0441\u043e\u0432.</p>\n'
        '          <p class="poem-fr">Ma journ\u00e9e<br><br>\nJe me l\u00e8ve \u00e0 7h du matin.<br>\nJe prends le petit-d\u00e9j et je bois du caf\u00e9.<br>\nEnsuite je vais au travail.<br>\nJe travaille jusqu\u2019\u00e0 17h.<br>\nLe soir je d\u00eene et regarde la t\u00e9l\u00e9.<br>\nJe me couche \u00e0 23h.</p>\n'
        '        </div>',
        ["\u042f \u0432\u0441\u0442\u0430\u044e \u0432 \u0441\u0435\u043c\u044c \u0447\u0430\u0441\u043e\u0432 \u2014 Je me l\u00e8ve \u00e0 7h"],
        {"type": "choice", "question": "Que fait la personne apr\u00e8s le travail (\u0432\u0435\u0447\u0435\u0440\u043e\u043c) ?", "options": ["Elle va au travail", "Elle d\u00eene et regarde la t\u00e9l\u00e9", "Elle se l\u00e8ve", "Elle prend son caf\u00e9"], "correct": 1, "hints": 0},
        1
    )
    f.write("\n  ],\n")

    # ===== NIVEAU 3: AVANCE =====
    f.write("  // ===== NIVEAU 3 \u2014 AVANC\u00c9 (B1) =====\n")
    f.write("  avance: [\n")

    write_lesson(f, "a1", "Les \u00e9motions et sentiments", "vocab",
        '<p>Exprimer ses \u00e9motions en russe.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u043b\u044e\u0431\u043e\u0432\u044c</span><span class="fr">amour</span><span class="pron">[lyou-bov\\\']</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0440\u0430\u0434\u043e\u0441\u0442\u044c</span><span class="fr">joie</span><span class="pron">[ra-dast\\\']</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0433\u0440\u0443\u0441\u0442\u044c</span><span class="fr">tristesse</span><span class="pron">[groust\\\']</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0441\u0442\u0440\u0430\u0445</span><span class="fr">peur</span><span class="pron">[strakh]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0433\u043d\u0435\u0432</span><span class="fr">col\u00e8re</span><span class="pron">[gnyev]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0443\u0434\u0438\u0432\u043b\u0435\u043d\u0438\u0435</span><span class="fr">surprise</span><span class="pron">[ou-div-lye-ni-ye]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043d\u0430\u0434\u0435\u0436\u0434\u0430</span><span class="fr">espoir</span><span class="pron">[na-dyezh-da]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0433\u043e\u0440\u0434\u043e\u0441\u0442\u044c</span><span class="fr">fiert\u00e9</span><span class="pron">[gor-dast\\\']</span></div>\n'
        '        </div>',
        ["\u041b\u044e\u0431\u043e\u0432\u044c \u2014 amour", "\u0420\u0430\u0434\u043e\u0441\u0442\u044c \u2014 joie", "\u0421\u0442\u0440\u0430\u0445 \u2014 peur"],
        {"type": "choice", "question": "Quel mot signifie \u00ab joie \u00bb en russe ?", "options": ["\u0433\u0440\u0443\u0441\u0442\u044c [groust\\\']", "\u0440\u0430\u0434\u043e\u0441\u0442\u044c [ra-dast\\\']", "\u0433\u043e\u0440\u0434\u043e\u0441\u0442\u044c [gor-dast\\\']", "\u0441\u0442\u0440\u0430\u0445 [strakh]"], "correct": 1, "hints": 0},
        1
    )
    f.write(",\n")

    write_lesson(f, "a2", "Verbes de mouvement : \u0438\u0434\u0442\u0438 / \u0445\u043e\u0434\u0438\u0442\u044c", "grammar",
        '<p>Les verbes de mouvement : une sp\u00e9cificit\u00e9 fascinante du russe.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>\u0418\u0434\u0442\u0438</strong> [it-ti] (d\u00e9termin\u00e9) : action en cours, direction unique.<br>\n\u042f <strong>\u0438\u0434\u0443</strong> \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d. \u2014 Je vais au magasin (maintenant).</p>\n'
        '          <p><strong>\u0425\u043e\u0434\u0438\u0442\u044c</strong> [kha-dit\\\'] (ind\u00e9termin\u00e9) : mouvement habituel.<br>\n\u042f <strong>\u0445\u043e\u0436\u0443</strong> \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c.</p>\n'
        '        </div>\n'
        '        <table class="case-table" style="margin-top:1rem">\n'
        '          <tr><th>Personne</th><th>\u0418\u0434\u0442\u0438</th><th>\u0425\u043e\u0434\u0438\u0442\u044c</th></tr>\n'
        '          <tr><td>\u044f</td><td>\u0438\u0434\u0443</td><td>\u0445\u043e\u0436\u0443</td></tr>\n'
        '          <tr><td>\u0442\u044b</td><td>\u0438\u0434\u0451\u0448\u044c</td><td>\u0445\u043e\u0434\u0438\u0448\u044c</td></tr>\n'
        '          <tr><td>\u043e\u043d/\u0430</td><td>\u0438\u0434\u0451\u0442</td><td>\u0445\u043e\u0434\u0438\u0442</td></tr>\n'
        '          <tr><td>\u043c\u044b</td><td>\u0438\u0434\u0451\u043c</td><td>\u0445\u043e\u0434\u0438\u043c</td></tr>\n'
        '          <tr><td>\u043e\u043d\u0438</td><td>\u0438\u0434\u0443\u0442</td><td>\u0445\u043e\u0434\u044f\u0442</td></tr>\n'
        '        </table>',
        ["\u0418\u0434\u0442\u0438 \u2014 aller (maintenant, \u00e0 pied)", "\u0425\u043e\u0434\u0438\u0442\u044c \u2014 aller (habitude)"],
        {"type": "choice", "question": "\u00ab \u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u044f ______ \u0432 \u0448\u043a\u043e\u043b\u0443. \u00bb (habitude)", "options": ["\u0438\u0434\u0443 [i-dou]", "\u0438\u0434\u0451\u0442 [i-dyot]", "\u0445\u043e\u0436\u0443 [kha-jou]", "\u0445\u043e\u0434\u0438\u0442 [kho-dit]"], "correct": 2, "hints": 2, "hintText": ["Chaque jour = habitude = verbe ind\u00e9termin\u00e9.", "\u00c0 la 1re personne, \u0445\u043e\u0434\u0438\u0442\u044c devient \u0445\u043e\u0436\u0443."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "a3", "Extrait de Tchekhov : \u00ab \u041a\u0430\u0448\u0442\u0430\u043d\u043a\u0430 \u00bb", "reading",
        '<p>Un court extrait adapt\u00e9 de Tchekhov.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru">\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0440\u044b\u0436\u0430\u044f \u0441\u043e\u0431\u0430\u043a\u0430 \u0431\u0435\u0433\u0430\u043b\u0430 \u043f\u043e \u0442\u0440\u043e\u0442\u0443\u0430\u0440\u0443. \u041e\u043d\u0430 \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0430 \u0445\u043e\u0437\u044f\u0438\u043d\u0430 \u0438 \u043d\u0435 \u0437\u043d\u0430\u043b\u0430, \u043a\u0443\u0434\u0430 \u0438\u0434\u0442\u0438. \u0411\u044b\u043b \u0432\u0435\u0447\u0435\u0440. \u0421\u043e\u0431\u0430\u043a\u0430 \u0441\u0435\u043b\u0430 \u043d\u0430 \u0442\u0440\u043e\u0442\u0443\u0430\u0440 \u0438 \u0442\u0438\u0445\u043e \u0437\u0430\u0432\u044b\u043b\u0430.</p>\n'
        '          <p class="poem-fr">Un jeune chien roux courait sur le trottoir. Il avait perdu son ma\u00eetre et ne savait pas o\u00f9 aller. C\u2019\u00e9tait le soir. Le chien s\u2019assit sur le trottoir et se mit \u00e0 hurler doucement.</p>\n'
        '        </div>\n'
        '        <div class="vocab-list" style="margin-top:1rem">\n'
        '          <div class="vocab-item"><span class="ru">\u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0430</span><span class="fr">a perdu (pass\u00e9 f\u00e9m.)</span><span class="pron">[pa-tye-rya-la]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0445\u043e\u0437\u044f\u0438\u043d</span><span class="fr">ma\u00eetre</span><span class="pron">[kha-zya-in]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0437\u0430\u0432\u044b\u043b\u0430</span><span class="fr">s\u2019est mise \u00e0 hurler</span><span class="pron">[za-vy-la]</span></div>\n'
        '        </div>',
        ["\u041f\u043e\u0442\u0435\u0440\u044f\u043b\u0430 \u2014 a perdu", "\u0425\u043e\u0437\u044f\u0438\u043d \u2014 le ma\u00eetre"],
        {"type": "choice", "question": "Pourquoi le chien est-il triste ?", "options": ["Il a faim", "Il a perdu son ma\u00eetre", "Il n\u2019aime pas la ville", "Il a froid"], "correct": 1, "hints": 0},
        2
    )
    f.write(",\n")

    write_lesson(f, "a4", "L\u2019aspect verbal : perfectif / imperfectif", "grammar",
        '<p>Chaque verbe russe a deux aspects : notion fondamentale.</p>\n'
        '        <div class="example-box">\n'
        '          <p><strong>Imperfectif (HCB)</strong> \u2014 action en cours, habituelle :<br>\u042f <strong>\u0447\u0438\u0442\u0430\u043b</strong> \u043a\u043d\u0438\u0433\u0443. \u2014 Je lisais (sans dire si fini).</p>\n'
        '          <p><strong>Perfectif (CB)</strong> \u2014 action accomplie, r\u00e9sultat :<br>\u042f <strong>\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b</strong> \u043a\u043d\u0438\u0433\u0443. \u2014 J\u2019ai lu (fini).</p>\n'
        '        </div>\n'
        '        <table class="case-table" style="margin-top:1rem">\n'
        '          <tr><th>Imperfectif</th><th>Perfectif</th><th>Pr\u00e9fixe</th></tr>\n'
        '          <tr><td>\u0434\u0435\u043b\u0430\u0442\u044c</td><td>\u0441\u0434\u0435\u043b\u0430\u0442\u044c</td><td>\u0441-</td></tr>\n'
        '          <tr><td>\u0447\u0438\u0442\u0430\u0442\u044c</td><td>\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c</td><td>\u043f\u0440\u043e-</td></tr>\n'
        '          <tr><td>\u043f\u0438\u0441\u0430\u0442\u044c</td><td>\u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c</td><td>\u043d\u0430-</td></tr>\n'
        '        </table>',
        ["\u0414\u0435\u043b\u0430\u0442\u044c / \u0421\u0434\u0435\u043b\u0430\u0442\u044c \u2014 faire", "\u0427\u0438\u0442\u0430\u0442\u044c / \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u2014 lire"],
        {"type": "error", "question": "\u00ab \u0412\u0447\u0435\u0440\u0430 \u044f \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b \u044d\u0442\u0443 \u043a\u043d\u0438\u0433\u0443 \u0437\u0430 \u0447\u0430\u0441. \u00bb \u2014 Correcte ?", "options": ["Oui, correcte", "Non, incorrecte"], "correct": 0, "hints": 1, "hintText": ["Le perfectif \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b indique une action accomplie \u2014 c\u2019est correct ici."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "a5", "Les m\u00e9dias et l\u2019actualit\u00e9", "vocab",
        '<p>Comprendre les m\u00e9dias russes.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u0433\u0430\u0437\u0435\u0442\u0430</span><span class="fr">journal</span><span class="pron">[ga-zy\u00e9-ta]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u043d\u043e\u0432\u043e\u0441\u0442\u0438</span><span class="fr">actualit\u00e9s</span><span class="pron">[no-vas-ti]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0441\u0442\u0430\u0442\u044c\u044f</span><span class="fr">article</span><span class="pron">[sta-t\\\'ya]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0436\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442</span><span class="fr">journaliste</span><span class="pron">[zhour-na-list]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442</span><span class="fr">internet</span><span class="pron">[in-tyer-net]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0442\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u0438\u0435</span><span class="fr">t\u00e9l\u00e9vision</span><span class="pron">[ti-lye-vi-dye-ni-ye]</span></div>\n'
        '        </div>',
        ["\u0413\u0430\u0437\u0435\u0442\u0430 \u2014 journal", "\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u2014 actualit\u00e9s"],
        {"type": "choice", "question": "Comment dit-on \u00ab actualit\u00e9s \u00bb en russe ?", "options": ["\u0433\u0430\u0437\u0435\u0442\u0430", "\u0436\u0443\u0440\u043d\u0430\u043b", "\u043d\u043e\u0432\u043e\u0441\u0442\u0438", "\u0441\u0442\u0430\u0442\u044c\u044f"], "correct": 2, "hints": 0},
        1
    )
    f.write(",\n")

    write_lesson(f, "a6", "Production \u00e9crite : d\u00e9crire une image", "exercise",
        '<p>D\u00e9crire une image en russe.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u041d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0435 \u044f \u0432\u0438\u0436\u0443...</span><span class="fr">Sur l\'image je vois...</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u043c \u043f\u043b\u0430\u043d\u0435</span><span class="fr">Au premier plan</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u041d\u0430 \u0437\u0430\u0434\u043d\u0435\u043c \u043f\u043b\u0430\u043d\u0435</span><span class="fr">\u00c0 l\'arri\u00e8re-plan</span></div>\n'
        '        </div>\n'
        '        <div style="margin-top:1rem;padding:1rem;background:rgba(201,169,110,0.05);border-radius:12px">\n'
        '          <p style="font-size:0.85rem;color:var(--text-secondary)"><strong>Exemple :</strong> \u041d\u0430 \u044d\u0442\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u044f \u0432\u0438\u0436\u0443 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u043f\u0435\u0439\u0437\u0430\u0436. \u041d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u043c \u043f\u043b\u0430\u043d\u0435 \u2014 \u0440\u0435\u043a\u0430.</p>\n'
        '        </div>',
        ["\u041d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0435 \u044f \u0432\u0438\u0436\u0443... \u2014 Sur l\'image je vois..."],
        {"type": "choice", "question": "Comment dit-on \u00ab au premier plan \u00bb en russe ?", "options": ["\u043d\u0430 \u0437\u0430\u0434\u043d\u0435\u043c \u043f\u043b\u0430\u043d\u0435", "\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u043c \u043f\u043b\u0430\u043d\u0435", "\u0432 \u0446\u0435\u043d\u0442\u0440\u0435", "\u0441\u043b\u0435\u0432\u0430"], "correct": 1, "hints": 1, "hintText": ["\u00ab \u041f\u0435\u0440\u0435\u0434 \u00bb signifie \u00ab devant \u00bb."]},
        2
    )
    f.write(",\n")

    write_lesson(f, "a7", "La litt\u00e9rature russe classique", "culture",
        '<p>La Russie a produit certains des plus grands \u00e9crivains.</p>\n'
        '        <div class="vocab-list">\n'
        '          <div class="vocab-item"><span class="ru">\u041f\u0443\u0448\u043a\u0438\u043d</span><span class="fr">Pouchkine (\u00ab Eug\u00e8ne On\u00e9guine \u00bb)</span><span class="pron">[pouch-kine]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0422\u043e\u043b\u0441\u0442\u043e\u0439</span><span class="fr">Tolsto\u00ef (\u00ab Guerre et Paix \u00bb)</span><span class="pron">[tal-sto\u00ef]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0414\u043e\u0441\u0442\u043e\u0435\u0432\u0441\u043a\u0438\u0439</span><span class="fr">Dosto\u00efevski (\u00ab Crime et Ch\u00e2timent \u00bb)</span><span class="pron">[da-sta-yef-ski\u00ef]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0427\u0435\u0445\u043e\u0432</span><span class="fr">Tchekhov (nouvelles, th\u00e9\u00e2tre)</span><span class="pron">[tch\u00e9-khaf]</span></div>\n'
        '          <div class="vocab-item"><span class="ru">\u0411\u0443\u043b\u0433\u0430\u043a\u043e\u0432</span><span class="fr">Boulgakov (\u00ab Le Ma\u00eetre et Marguerite \u00bb)</span><span class="pron">[boul-ga-kaf]</span></div>\n'
        '        </div>',
        ["\u041f\u0443\u0448\u043a\u0438\u043d \u2014 Pouchkine", "\u0422\u043e\u043b\u0441\u0442\u043e\u0439 \u2014 Tolsto\u00ef"],
        {"type": "choice", "question": "Qui a \u00e9crit \u00ab Le Ma\u00eetre et Marguerite \u00bb ?", "options": ["Tolsto\u00ef", "Dosto\u00efevski", "Boulgakov", "Tchekhov"], "correct": 2, "hints": 1, "hintText": ["Son nom commence par \u0411 et se termine par -\u043e\u0432. Roman sur le diable \u00e0 Moscou."]},
        1
    )
    f.write(",\n")

    write_lesson(f, "a8", "Texte : \u00ab \u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u00bb (Voyage)", "reading",
        '<p>Un texte au pass\u00e9 sur un voyage \u00e0 Moscou.</p>\n'
        '        <div class="poem-box">\n'
        '          <p class="poem-ru">\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u0433\u043e\u0434\u0443 \u044f \u043f\u043e\u0435\u0445\u0430\u043b \u0432 \u041c\u043e\u0441\u043a\u0432\u0443. \u042f \u0435\u0445\u0430\u043b \u043d\u0430 \u043f\u043e\u0435\u0437\u0434\u0435 \u0434\u0432\u043e\u0435 \u0441\u0443\u0442\u043e\u043a. \u0412 \u041c\u043e\u0441\u043a\u0432\u0435 \u044f \u043f\u043e\u0441\u0435\u0442\u0438\u043b \u041a\u0440\u0430\u0441\u043d\u0443\u044e \u043f\u043b\u043e\u0449\u0430\u0434\u044c, \u041a\u0440\u0435\u043c\u043b\u044c \u0438 \u0422\u0440\u0435\u0442\u044c\u044f\u043a\u043e\u0432\u0441\u043a\u0443\u044e \u0433\u0430\u043b\u0435\u0440\u0435\u044e. \u042f \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u043b \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0431\u043e\u0440\u0449. \u041c\u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c!</p>\n'
        '          <p class="poem-fr">L\'ann\u00e9e derni\u00e8re, je suis all\u00e9 \u00e0 Moscou. J\'ai voyag\u00e9 2 jours en train. J\'ai visit\u00e9 la Place Rouge, le Kremlin et la Galerie Tretiakov. J\'ai go\u00fbt\u00e9 un vrai bortsch. J\'ai ador\u00e9 !</p>\n'
        '        </div>',
        ["\u041f\u043e\u0435\u0445\u0430\u043b \u2014 je suis all\u00e9 (en transport)", "\u041f\u043e\u0441\u0435\u0442\u0438\u043b \u2014 j\u2019ai visit\u00e9"],
        {"type": "choice", "question": "O\u00f9 le narrateur est-il all\u00e9 ?", "options": ["\u00c0 Saint-P\u00e9tersbourg", "\u00c0 Moscou", "\u00c0 Paris", "\u00c0 la campagne"], "correct": 1, "hints": 0},
        1
    )
    f.write("\n  ],\n")

    print("Niveaux 2-3 done")
PYEOF