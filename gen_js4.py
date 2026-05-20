#!/usr/bin/env python3
"""Append CHAPTER_EXAMS, functions, games, story, and init code"""
import json

path = "/Users/haxor/Desktop/Apprendre le Russe/scripts.js"

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

with open(path, 'a', encoding='utf-8') as f:
    # ===== CHAPTER EXAMS =====
    f.write("\n// ================================================================\n")
    f.write("// CHAPTER EXAMS\n")
    f.write("// ================================================================\n\n")
    f.write("const CHAPTER_EXAMS = {\n")

    # Exam for debutant
    f.write("  debutant: {\n")
    f.write("    title: \"Examen du Niveau D\u00e9butante\",\n")
    f.write("    passingScore: 80,\n")
    f.write("    questions: [\n")
    debutant_exam = [
        {"q": "Comment se prononce la lettre \u00ab \u0412 \u00bb en russe ?", "opts": ["[b]", "[v]", "[f]", "[g]"], "c": 1},
        {"q": "Quel mot signifie \u00ab bonjour \u00bb (formel) ?", "opts": ["\u041f\u0440\u0438\u0432\u0435\u0442", "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435", "\u041f\u043e\u043a\u0430", "\u0421\u043f\u0430\u0441\u0438\u0431\u043e"], "c": 1},
        {"q": "Quel pronom signifie \u00ab nous \u00bb ?", "opts": ["\u044f", "\u0442\u044b", "\u043c\u044b", "\u043e\u043d\u0438"], "c": 2},
        {"q": "Quel nombre est \u00ab \u043f\u044f\u0442\u044c \u00bb ?", "opts": ["3", "5", "7", "10"], "c": 1},
        {"q": "Quel est le genre de \u00ab \u043a\u043d\u0438\u0433\u0430 \u00bb ?", "opts": ["Masculin", "F\u00e9minin", "Neutre", "Variable"], "c": 1},
        {"q": "Comment dit-on \u00ab merci \u00bb ?", "opts": ["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430", "\u0421\u043f\u0430\u0441\u0438\u0431\u043e", "\u041f\u0440\u0438\u0432\u0435\u0442", "\u0414\u043e \u0441\u0432\u0438\u0434\u0430\u043d\u0438\u044f"], "c": 1},
        {"q": "Dans le texte \u00ab \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043d\u043d\u0430 \u00bb, \u0436\u0438\u0432\u0443 signifie ?", "opts": ["Je vis/j\u2019habite", "Je lis", "J\u2019aime", "Je travaille"], "c": 0},
        {"q": "Quel instrument traditionnel a 3 cordes ?", "opts": ["Violon", "Guitare", "Balala\u00efka", "Piano"], "c": 2},
        {"q": "Quel est le symbole du signe mou \u00ab \u044c \u00bb ?", "opts": ["Il allonge le son", "Il adoucit la consonne", "Il se prononce [y]", "Il est toujours muet"], "c": 1},
        {"q": "Comment dire \u00ab je m\u2019appelle \u00bb en russe ?", "opts": ["\u042f \u0435\u0441\u0442\u044c", "\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442", "\u042f \u0437\u043e\u0432\u0443\u0442", "\u041c\u0435\u043d\u044f \u0435\u0441\u0442\u044c"], "c": 1},
    ]
    for i, q in enumerate(debutant_exam):
        comma = "," if i < len(debutant_exam) - 1 else ""
        f.write("      { question: " + js_str(q["q"]) + ", options: " + js_str(q["opts"]) + ", correct: " + str(q["c"]) + ", type: \"mix\" }" + comma + "\n")
    f.write("    ]\n  },\n")

    # Exam for intermediaire
    f.write("  intermediaire: {\n")
    f.write("    title: \"Examen du Niveau Interm\u00e9diaire\",\n")
    f.write("    passingScore: 80,\n")
    f.write("    questions: [\n")
    interm_exam = [
        {"q": "Comment dit-on \u00ab eau \u00bb ?", "opts": ["\u0432\u0438\u043d\u043e", "\u0432\u043e\u0434\u0430", "\u043c\u043e\u043b\u043e\u043a\u043e", "\u0447\u0430\u0439"], "c": 1},
        {"q": "Quelle est la forme f\u00e9minine de \u00ab \u0431\u044b\u0442\u044c \u00bb au pass\u00e9 ?", "opts": ["\u0431\u044b\u043b", "\u0431\u044b\u043b\u0430", "\u0431\u044b\u043b\u043e", "\u0431\u044b\u043b\u0438"], "c": 1},
        {"q": "Que commande-t-on dans le dialogue au restaurant ?", "opts": ["Du caf\u00e9", "Du bortsch et une salade", "De la viande", "Du vin"], "c": 1},
        {"q": "Comment dit-on \u00ab tout droit \u00bb ?", "opts": ["\u043d\u0430\u043b\u0435\u0432\u043e", "\u043d\u0430\u043f\u0440\u0430\u0432\u043e", "\u043f\u0440\u044f\u043c\u043e", "\u043d\u0430\u0437\u0430\u0434"], "c": 2},
        {"q": "Quel est l\u2019accusatif de \u00ab \u043a\u043d\u0438\u0433\u0430 \u00bb ?", "opts": ["\u043a\u043d\u0438\u0433\u0430", "\u043a\u043d\u0438\u0433\u0443", "\u043a\u043d\u0438\u0433\u0438", "\u043a\u043d\u0438\u0433\u043e\u0439"], "c": 1},
        {"q": "\u00ab \u0412\u0447\u0435\u0440\u0430 \u043c\u044b ______ \u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0435. \u00bb (\u0431\u044b\u0442\u044c, pluriel)", "opts": ["\u0431\u044b\u043b", "\u0431\u044b\u043b\u0430", "\u0431\u044b\u043b\u043e", "\u0431\u044b\u043b\u0438"], "c": 3},
        {"q": "Quelle f\u00eate est la plus importante en Russie ?", "opts": ["No\u00ebl", "P\u00e2ques", "Nouvel An", "Maslenitsa"], "c": 2},
        {"q": "Dans \u00ab \u041c\u043e\u0439 \u0434\u0435\u043d\u044c \u00bb, \u00e0 quelle heure la personne se l\u00e8ve ?", "opts": ["6h", "7h", "8h", "9h"], "c": 1},
        {"q": "Quel suffixe pour le pass\u00e9 pluriel ?", "opts": ["-\u043b", "-\u043b\u0430", "-\u043b\u043e", "-\u043b\u0438"], "c": 3},
        {"q": "Que signifie \u00ab \u0438\u0437\u0432\u0438\u043d\u0438\u0442\u0435 \u00bb ?", "opts": ["Bonjour", "Excusez-moi", "Merci", "Au revoir"], "c": 1},
    ]
    for i, q in enumerate(interm_exam):
        comma = "," if i < len(interm_exam) - 1 else ""
        f.write("      { question: " + js_str(q["q"]) + ", options: " + js_str(q["opts"]) + ", correct: " + str(q["c"]) + ", type: \"mix\" }" + comma + "\n")
    f.write("    ]\n  },\n")

    # Exam for avance
    f.write("  avance: {\n")
    f.write("    title: \"Examen du Niveau Avanc\u00e9\",\n")
    f.write("    passingScore: 80,\n")
    f.write("    questions: [\n")
    avance_exam = [
        {"q": "Quel mot signifie \u00ab joie \u00bb ?", "opts": ["\u0433\u0440\u0443\u0441\u0442\u044c", "\u0440\u0430\u0434\u043e\u0441\u0442\u044c", "\u0441\u0442\u0440\u0430\u0445", "\u0433\u043d\u0435\u0432"], "c": 1},
        {"q": "Verbe de mouvement pour habitude \u00e0 pied ?", "opts": ["\u0438\u0434\u0442\u0438", "\u0435\u0445\u0430\u0442\u044c", "\u0445\u043e\u0434\u0438\u0442\u044c", "\u0435\u0437\u0434\u0438\u0442\u044c"], "c": 2},
        {"q": "Qui a perdu son ma\u00eetre dans l\u2019extrait de Tchekhov ?", "opts": ["Un chat", "Un chien", "Un oiseau", "Un enfant"], "c": 1},
        {"q": "Quel aspect exprime une action accomplie ?", "opts": ["Imperfectif", "Perfectif", "Les deux", "Aucun"], "c": 1},
        {"q": "Perfectif de \u00ab \u0434\u0435\u043b\u0430\u0442\u044c \u00bb ?", "opts": ["\u043f\u0440\u043e\u0434\u0435\u043b\u0430\u0442\u044c", "\u0441\u0434\u0435\u043b\u0430\u0442\u044c", "\u043d\u0430\u0434\u0435\u043b\u0430\u0442\u044c", "\u043f\u043e\u0434\u0435\u043b\u0430\u0442\u044c"], "c": 1},
        {"q": "\u00ab \u041d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u043c \u043f\u043b\u0430\u043d\u0435 \u00bb signifie ?", "opts": ["\u00c0 l\u2019arri\u00e8re-plan", "Au premier plan", "Au centre", "\u00c0 gauche"], "c": 1},
        {"q": "Qui a \u00e9crit \u00ab Le Ma\u00eetre et Marguerite \u00bb ?", "opts": ["Tolsto\u00ef", "Dosto\u00efevski", "Boulgakov", "Tchekhov"], "c": 2},
        {"q": "Dans \u00ab \u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u00bb, comment le narrateur voyage-t-il ?", "opts": ["En avion", "En train", "En voiture", "\u00c0 pied"], "c": 1},
        {"q": "Comment dit-on \u00ab actualit\u00e9s \u00bb en russe ?", "opts": ["\u0433\u0430\u0437\u0435\u0442\u0430", "\u043d\u043e\u0432\u043e\u0441\u0442\u0438", "\u0441\u0442\u0430\u0442\u044c\u044f", "\u0436\u0443\u0440\u043d\u0430\u043b"], "c": 1},
        {"q": "Quel \u00e9crivain est connu pour ses nouvelles et son th\u00e9\u00e2tre ?", "opts": ["Pouchkine", "Tolsto\u00ef", "Tchekhov", "Boulgakov"], "c": 2},
    ]
    for i, q in enumerate(avance_exam):
        comma = "," if i < len(avance_exam) - 1 else ""
        f.write("      { question: " + js_str(q["q"]) + ", options: " + js_str(q["opts"]) + ", correct: " + str(q["c"]) + ", type: \"mix\" }" + comma + "\n")
    f.write("    ]\n  },\n")

    # Exam for expert
    f.write("  expert: {\n")
    f.write("    title: \"Examen du Niveau Experte\",\n")
    f.write("    passingScore: 80,\n")
    f.write("    questions: [\n")
    expert_exam = [
        {"q": "Comment dit-on \u00ab entretien \u00bb (d\u2019embauche) ?", "opts": ["\u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0435", "\u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435", "\u043a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u043e\u0432\u043a\u0430", "\u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430"], "c": 1},
        {"q": "Quel mot introduit une condition irr\u00e9elle en russe ?", "opts": ["\u0435\u0441\u043b\u0438", "\u0435\u0441\u043b\u0438 \u0431\u044b", "\u043a\u043e\u0433\u0434\u0430", "\u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e"], "c": 1},
        {"q": "Dans l\u2019article de presse, le nouveau mat\u00e9riau est...", "opts": ["Moins cher", "Plus r\u00e9sistant et plus l\u00e9ger", "Plus fragile", "Biod\u00e9gradable"], "c": 1},
        {"q": "Quel suffixe pour le g\u00e9rondif pass\u00e9 (action ant\u00e9rieure) ?", "opts": ["-\u044f", "-\u0432", "-\u0443\u0449\u0438\u0439", "-\u043d\u043d\u044b\u0439"], "c": 1},
        {"q": "Quel mot signifie \u00ab libert\u00e9 \u00bb ?", "opts": ["\u0432\u043b\u0430\u0441\u0442\u044c", "\u0441\u0432\u043e\u0431\u043e\u0434\u0430", "\u0437\u0430\u043a\u043e\u043d", "\u0432\u044b\u0431\u043e\u0440\u044b"], "c": 1},
        {"q": "Perfectif de \u00ab \u0447\u0438\u0442\u0430\u0442\u044c \u00bb ?", "opts": ["\u043d\u0430\u0447\u0438\u0442\u0430\u0442\u044c", "\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c", "\u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c", "\u0437\u0430\u0447\u0438\u0442\u0430\u0442\u044c"], "c": 1},
        {"q": "Qui a r\u00e9alis\u00e9 \u00ab Stalker \u00bb ?", "opts": ["Mikhalkov", "Bondartchouk", "Tarkovski", "Zviaguintsev"], "c": 2},
        {"q": "Dans le po\u00e8me de Pouchkine, \u00ab \u0434\u0443\u0448\u0430 \u00bb signifie ?", "opts": ["L\u2019amour", "L\u2019\u00e2me", "La vie", "La tristesse"], "c": 1},
        {"q": "Combien de temps le roman de Boulgakov a-t-il \u00e9t\u00e9 censur\u00e9 ?", "opts": ["10 ans", "26 ans", "5 ans", "1 an"], "c": 1},
        {"q": "\u00ab \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u00bb signifie ?", "opts": ["Gouvernement", "Entreprise", "Soci\u00e9t\u00e9", "\u00c9cole"], "c": 0},
    ]
    for i, q in enumerate(expert_exam):
        comma = "," if i < len(expert_exam) - 1 else ""
        f.write("      { question: " + js_str(q["q"]) + ", options: " + js_str(q["opts"]) + ", correct: " + str(q["c"]) + ", type: \"mix\" }" + comma + "\n")
    f.write("    ]\n  },\n")

    # Exam for maitre
    f.write("  maitre: {\n")
    f.write("    title: \"Examen du Niveau Ma\u00eetre\",\n")
    f.write("    passingScore: 80,\n")
    f.write("    questions: [\n")
    maitre_exam = [
        {"q": "Que signifie \u00ab \u0411\u0438\u0442\u044c \u0431\u0430\u043a\u043b\u0443\u0448\u0438 \u00bb ?", "opts": ["Travailler dur", "Ne rien faire", "Casser quelque chose", "Jouer de la musique"], "c": 1},
        {"q": "Quel verbe imperfectif implique une action annul\u00e9e ?", "opts": ["\u043e\u0442\u043a\u0440\u044b\u043b", "\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b", "\u043e\u0442\u043a\u0440\u043e\u0435\u0442", "\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442"], "c": 1},
        {"q": "Selon l\u2019essai, chaque moment de notre vie est...", "opts": ["Une obligation", "Un choix", "Un hasard", "Un destin"], "c": 1},
        {"q": "Quel mot signifie \u00ab conscience \u00bb ?", "opts": ["\u0441\u043e\u0437\u043d\u0430\u043d\u0438\u0435", "\u0431\u044b\u0442\u0438\u0435", "\u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u0435", "\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e"], "c": 0},
        {"q": "En russe, au discours indirect, le temps du verbe...", "opts": ["Change au pass\u00e9", "Ne change pas", "Devient conditionnel", "N\u2019existe pas"], "c": 1},
        {"q": "Quel mot est typique du style informel dans les textos ?", "opts": ["\u0423\u0432\u0430\u0436\u0430\u0435\u043c\u044b\u0439", "\u041f\u0440\u043e\u0448\u0443", "\u041f\u0440\u0438\u0432\u0435\u0442", "\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"], "c": 2},
        {"q": "Quel est le moteur de recherche russe le plus connu ?", "opts": ["Google", "Yandex", "Bing", "Mail.ru"], "c": 1},
        {"q": "Quel roman de Boulgakov commence aux \u00c9tangs du Patriarche ?", "opts": ["Guerre et Paix", "Le Ma\u00eetre et Marguerite", "Les \u00c2mes mortes", "Un h\u00e9ros de notre temps"], "c": 1},
        {"q": "\u00ab \u041a\u043e\u0442 \u043d\u0430\u043f\u043b\u0430\u043a\u0430\u043b \u00bb exprime...", "opts": ["Une grande quantit\u00e9", "Une tr\u00e8s petite quantit\u00e9", "Une m\u00e9chancet\u00e9", "Un \u00e9v\u00e9nement heureux"], "c": 1},
        {"q": "\u00ab \u0411\u044b\u0442\u0438\u0435 \u00bb est un mot de quel registre ?", "opts": ["Familier", "Soutenu / philosophique", "Vulgaire", "Technique"], "c": 1},
    ]
    for i, q in enumerate(maitre_exam):
        comma = "," if i < len(maitre_exam) - 1 else ""
        f.write("      { question: " + js_str(q["q"]) + ", options: " + js_str(q["opts"]) + ", correct: " + str(q["c"]) + ", type: \"mix\" }" + comma + "\n")
    f.write("    ]\n  }\n")
    f.write("};\n\n")

    print("CHAPTER_EXAMS written!")

    # ===== Now write all the functions and remaining code =====
    # I'll read from the existing file and preserve everything after the old data structures.
    # Actually, let me just append all the remaining code directly.
    
    f.write("// ================================================================\n")
    f.write("// MODAL FUNCTIONS\n")
    f.write("// ================================================================\n\n")
    f.write("""
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
""")

    print("Modal and helper functions written!")

    # Write the rest of the functions in a separate step
    f.write("""
// ================================================================
// LEVEL TEST
// ================================================================

function startLevelTest() {
  const html = `
    <h2>Test de Niveau</h2>
    <p style="text-align:center;margin-bottom:1.5rem">Dix questions pour \\u00e9valuer votre ma\\u00eetrise du russe.</p>
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
      <button type="submit" class="submit-quiz">Voir mes r\\u00e9sultats</button>
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
      debutant: "Vous commencez tout juste votre voyage dans l'univers du russe. Chaque grande ma\\u00eetrise commence par un premier pas.",
      intermediaire: "Vous poss\\u00e9dez d\\u00e9j\\u00e0 des bases solides. La langue russe commence \\u00e0 d\\u00e9voiler ses nuances.",
      avance: "Votre compr\\u00e9hension du russe est remarquable. Les subtilit\\u00e9s n'ont presque plus de secrets pour vous.",
      expert: "Votre ma\\u00eetrise du russe est impressionnante. Vous savez naviguer dans des contextes complexes.",
      maitre: "Vous avez atteint un niveau d'\\u00e9l\\u00e9gance rare. Le russe n'a presque plus de myst\\u00e8res pour vous."
    };

    const desc = descriptions[level.id] || descriptions.debutant;

    const resultHtml = `
      <div class="result-card">
        <p style="font-size:0.85rem;color:var(--text-muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:0.5rem">R\\u00e9sultat</p>
        <div class="result-level">${level.emoji} ${level.name}</div>
        <p class="result-detail">Score : ${score}/${total} (${pct}%)</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin:1rem 0;line-height:1.8">${desc}</p>
        <div class="progress-bar-container" style="margin-top:1.5rem">
          <div class="progress-bar-label"><span>Progression</span><span>${pct}%</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>
        <button class="btn" onclick="closeModal();startLearning()" style="margin-top:1.5rem;width:100%;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Commencez votre apprentissage \\u2192</button>
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
""")

    print("Level test function written!")

    # Now write showPath, showLesson, completeLesson - the updated versions
    f.write("""
// ================================================================
// PATH (Parcours)
// ================================================================

function showPath() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) {
    showModal(`
      <h2>Parcours d'Apprentissage</h2>
      <p style="text-align:center;margin:1.5rem 0">Vous n'avez pas encore pass\\u00e9 le test de niveau.</p>
      <p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">\\u00c9valuez d'abord votre niveau pour d\\u00e9bloquer votre parcours.</p>
      <div style="text-align:center;margin-top:1.5rem">
        <button class="btn" onclick="closeModal();startLevelTest()">Passer le test</button>
      </div>
    `);
    return;
  }

  let html = '<h2>\\ud83c\\udf31 Parcours d\\'Apprentissage</h2>';
  html += '<p style="text-align:center;margin-bottom:1.5rem;font-size:0.85rem;color:var(--text-muted)">Compl\\u00e9tez chaque niveau, passez l\\'examen, et d\\u00e9bloquez le suivant !</p>';

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
    let icon = '\\ud83d\\udd12';
    let statusText = 'Verrouill\\u00e9';
    let actionHtml = '';

    if (unlocked) {
      sectionClass = 'path-level unlocked';
      icon = level.emoji;
      statusText = `\\u00c9tape ${idx + 1}`;

      if (examPassed) {
        sectionClass = 'path-level completed';
        icon = '\\u2705';
        statusText = '\\u2713 Compl\\u00e9t\\u00e9';
        const nextLevel = getNextLevelId(level.id);
        if (nextLevel) {
          actionHtml = `<p style="color:var(--gold);font-size:0.85rem;margin-top:0.5rem">\\u2728 Niveau suivant d\\u00e9bloqu\\u00e9 !</p>`;
        }
      } else if (allDone) {
        actionHtml = `<button class="btn" onclick="startExam('${level.id}')" style="margin-top:0.5rem;font-size:0.82rem;padding:0.5rem 1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark)">Passer l\\'examen</button>`;
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
          <div class="progress-bar-label"><span style="font-size:0.75rem">${done}/${total} le\\u00e7ons</span><span style="font-size:0.75rem">${pct}%</span></div>
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
""")

    print("Path functions written!")

    # Write showLesson and completeLesson
    f.write("""
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
          <input type="text" id="fill-input" placeholder="Tapez votre r\\u00e9ponse ici..." style="width:100%;padding:0.8rem 1rem;background:rgba(255,255,255,0.05);border:1px solid rgba(201,169,110,0.2);border-radius:12px;color:var(--cream);font-size:1rem;text-align:center;outline:none;box-sizing:border-box">
          <div style="display:flex;gap:0.5rem;margin-top:0.8rem">
            <button class="btn exercise-submit" style="flex:1;font-size:0.85rem;padding:0.5rem 1.5rem">V\\u00e9rifier</button>
            ${ex.hints > 0 ? `<button class="btn hint-btn" style="flex:0.4;font-size:0.85rem;padding:0.5rem;background:transparent;border-color:var(--border-subtle)" onclick="showHint(this, ${JSON.stringify(ex.hintText).replace(/"/g, '&quot;')})">\\ud83d\\udca1</button>` : ''}
          </div>
          <p class="exercise-feedback" style="margin-top:0.5rem;font-size:0.85rem;display:none"></p>
          <p class="hint-display" style="margin-top:0.3rem;font-size:0.8rem;color:var(--text-muted);display:none"></p>
        </div>
      `;
    } else if (ex.type === 'error') {
      exerciseHtml = `
        <div class="lesson-exercise">
          <h3 style="color:var(--gold);font-weight:400;margin-bottom:0.8rem;font-size:1rem">D\\u00e9tection d'erreur</h3>
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
            <button class="btn exercise-submit" style="flex:1;font-size:0.85rem;padding:0.5rem 1.5rem">V\\u00e9rifier</button>
            ${ex.hints > 0 ? `<button class="btn hint-btn" style="flex:0.4;font-size:0.85rem;padding:0.5rem;background:transparent;border-color:var(--border-subtle)" onclick="showHint(this, ${JSON.stringify(ex.hintText).replace(/"/g, '&quot;')})">\\ud83d\\udca1</button>` : ''}
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
            <button class="btn exercise-submit" style="flex:1;font-size:0.85rem;padding:0.5rem 1.5rem">V\\u00e9rifier</button>
            ${ex.hints > 0 ? `<button class="btn hint-btn" style="flex:0.4;font-size:0.85rem;padding:0.5rem;background:transparent;border-color:var(--border-subtle)" onclick="showHint(this, ${JSON.stringify(ex.hintText).replace(/"/g, '&quot;')})">\\ud83d\\udca1</button>` : ''}
          </div>
          <p class="exercise-feedback" style="margin-top:0.5rem;font-size:0.85rem;display:none"></p>
          <p class="hint-display" style="margin-top:0.3rem;font-size:0.8rem;color:var(--text-muted);display:none"></p>
        </div>
      `;
    }
  }

  const completeBtn = isCompleted
    ? '<p style="text-align:center;color:var(--gold);margin:0.5rem 0">\\u2705 Le\\u00e7on d\\u00e9j\\u00e0 termin\\u00e9e</p>'
    : `<button class="btn" onclick="completeLesson('${levelId}', ${lessonIndex})" style="width:100%;margin-top:1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Terminer la le\\u00e7on \\u2713</button>`;

  const prevBtn = lessonIndex > 0
    ? `<button class="btn" onclick="showLesson('${levelId}', ${lessonIndex - 1})" style="flex:1">\\u2190 Pr\\u00e9c\\u00e9dente</button>`
    : '';
  const nextBtn = lessonIndex < total - 1
    ? `<button class="btn" onclick="showLesson('${levelId}', ${lessonIndex + 1})" style="flex:1">Suivante \\u2192</button>`
    : '';

  showModal(`
    <div class="lesson-header">
      <span style="font-size:0.75rem;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase">${level.emoji} ${levelNames[levelId]} \\u2014 Le\\u00e7on ${lessonIndex + 1}/${total}</span>
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
      ${lesson.examples.map(ex => `<div style="font-size:0.9rem;color:var(--cream);padding:0.2rem 0">\\u2726 ${ex}</div>`).join('')}
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
            feedback.textContent = 'Veuillez \\u00e9crire une r\\u00e9ponse.';
            feedback.style.display = 'block';
            feedback.style.color = 'var(--text-muted)';
            return;
          }
          const isCorrect = val === ex.correct.toLowerCase();
          feedback.textContent = isCorrect
            ? '\\u2713 Bravo ! Bonne r\\u00e9ponse !'
            : '\\u2717 Ce n\\'est pas la bonne r\\u00e9ponse. R\\u00e9essayez !';
          feedback.style.display = 'block';
          feedback.style.color = isCorrect ? 'var(--gold)' : 'var(--rose-gold)';
          if (isCorrect) input.style.borderColor = 'var(--gold)';
          else input.style.borderColor = 'var(--rose-gold)';
        } else {
          const selected = document.querySelector(`input[name="ex${lesson.id}"]:checked`);
          if (!selected) {
            feedback.textContent = 'Veuillez s\\u00e9lectionner une r\\u00e9ponse.';
            feedback.style.display = 'block';
            feedback.style.color = 'var(--text-muted)';
            return;
          }
          const val = parseInt(selected.value);
          const isCorrect = val === ex.correct;
          feedback.textContent = isCorrect
            ? '\\u2713 Bravo ! Bonne r\\u00e9ponse !'
            : '\\u2717 Ce n\\'est pas la bonne r\\u00e9ponse. R\\u00e9essayez !';
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
  display.textContent = '\\ud83d\\udca1 ' + hints[hintLevel];
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

  const total = lessons.length;
  const done = completedIds.length;
  const pct = Math.round((done / total) * 100);

  const nextIndex = lessonIndex + 1;
  const hasNext = nextIndex < total;
  const allDone = done === total;

  const celebrationHtml = `
    <div class="result-card" style="text-align:center">
      <p style="font-size:2rem;margin-bottom:0.5rem">\\ud83c\\udf89</p>
      <div class="result-level" style="font-size:1.3rem">Le\\u00e7on termin\\u00e9e !</div>
      <p style="font-size:0.9rem;color:var(--text-secondary);margin:0.8rem 0">\\u00ab ${lesson.title} \\u00bb \\u2014 ma\\u00eetris\\u00e9e avec \\u00e9l\\u00e9gance.</p>
      <div class="progress-bar-container" style="margin-top:1.2rem">
        <div class="progress-bar-label"><span>Progression du niveau</span><span>${done}/${total}</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      ${allDone ? `<p style="color:var(--gold);margin:1rem 0">\\ud83c\\udf1f Niveau termin\\u00e9 ! Pr\\u00eat pour l\\'examen ?</p>
        <button class="btn" onclick="startExam('${levelId}')" style="width:100%;margin-top:0.5rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Passer l\\'examen \\u2192</button>` : ''}
      ${hasNext ? `<button class="btn" onclick="showLesson('${levelId}', ${nextIndex})" style="width:100%;margin-top:1rem;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Le\\u00e7on suivante \\u2192</button>` : ''}
      <button class="btn" onclick="showPath()" style="width:100%;margin-top:0.8rem">Voir le parcours</button>
      <button class="btn" onclick="closeModal()" style="width:100%;margin-top:0.5rem">Fermer</button>
    </div>
  `;

  showModal(celebrationHtml);
  updateStats();
}
""")

    print("Lesson functions written!")

    # Now write EXAM functions
    f.write("""
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
    <h2>\\ud83d\\udcdd ${CHAPTER_EXAMS[exam.levelId].title}</h2>
    <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>Question ${exam.current + 1}/${total}</span>
      <span>\\ud83c\\udfaf ${exam.score} bonnes</span>
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
    feedback.textContent = 'Veuillez s\\u00e9lectionner une r\\u00e9ponse.';
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
    ? '\\u2705 Bonne r\\u00e9ponse !'
    : '\\u274c La r\\u00e9ponse \\u00e9tait : ' + q.options[q.correct];
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

  const emoji = passed ? '\\ud83c\\udfc6' : '\\ud83d\\udcaa';
  const msg = passed
    ? `F\\u00e9licitations ! Vous ma\\u00eetrisez le niveau ${level.name} ! ${getNextLevelId(levelId) ? 'Le niveau suivant est d\\u00e9bloqu\\u00e9 !' : 'Vous avez atteint le plus haut niveau !'}`
    : 'Continuez vos r\\u00e9visions et r\\u00e9essayez. Vous y \\u00eates presque !';

  showModal(`
    <div class="result-card" style="text-align:center">
      <p style="font-size:3rem;margin-bottom:0.5rem">${emoji}</p>
      <h2 style="font-size:1.3rem">${passed ? 'Examen r\\u00e9ussi !' : 'Examen non r\\u00e9ussi'}</h2>
      <p style="font-size:0.9rem;color:var(--text-secondary);margin:1rem 0">${msg}</p>
      <div class="stats" style="margin:1.5rem 0">
        <div class="stat"><span class="stat-num">${score}/${total}</span><span class="stat-label">Score</span></div>
        <div class="stat"><span class="stat-num">${pct}%</span><span class="stat-label">Pourcentage</span></div>
      </div>
      <div class="progress-bar-container" style="margin-bottom:1.5rem">
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${passed ? 'var(--gold)' : 'var(--rose-gold)'}"></div></div>
      </div>
      <button class="btn" onclick="closeModal();showPath()" style="width:100%;background:linear-gradient(135deg,var(--gold),var(--rose-gold));color:var(--bg-dark);font-weight:500">Voir le parcours</button>
      ${!passed ? `<button class="btn" onclick="startExam('${levelId}')" style="width:100%;margin-top:0.5rem">R\\u00e9essayer</button>` : ''}
      <button class="restart-quiz" onclick="closeModal()" style="margin-top:0.8rem;width:100%">Fermer</button>
    </div>
  `);

  updateStats();
}
""")

    print("Exam functions written!")

    # Write progress, resources, story, sparkles, games
    f.write("""
// ================================================================
// PROGRESS
// ================================================================

function showProgress() {
  const saved = localStorage.getItem('lamia_results');
  if (!saved) {
    showModal(`
      <h2>Suivi de Progr\\u00e8s</h2>
      <p style="text-align:center;margin:1.5rem 0">Vous n'avez pas encore pass\\u00e9 le test de niveau.</p>
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
    <h2>Suivi de Progr\\u00e8s</h2>
    <div class="result-card">
      <p class="result-detail">Niveau le plus haut : <strong>${highestLevel.emoji} ${highestLevel.name}</strong></p>
      <p class="result-detail" style="font-size:0.8rem;color:var(--text-muted)">Test initial : ${data.levelName} (${data.score}/${data.total})</p>
      <div class="stats" style="margin:2rem 0">
        <div class="stat"><span class="stat-num">${totalDone}/${totalAll}</span><span class="stat-label">Le\\u00e7ons</span></div>
        <div class="stat"><span class="stat-num">${pct}%</span><span class="stat-label">Global</span></div>
        <div class="stat"><span class="stat-num">${streak}</span><span class="stat-label">S\\u00e9rie</span></div>
      </div>
      <p class="result-detail" style="font-size:0.78rem;color:var(--text-muted)">Meilleure s\\u00e9rie : ${maxStreak} jours</p>
      <div class="progress-bar-container" style="margin-top:1.2rem">
        <div class="progress-bar-label"><span>Progression totale</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      <button class="btn" onclick="closeModal();showPath()" style="width:100%;margin-top:1rem">Voir le parcours</button>
      <button class="restart-quiz" onclick="closeModal();startLevelTest()" style="margin-top:0.8rem;width:100%">Refaire le test</button>
    </div>
  `);
}
""")

    print("Progress written!")

    # Write resources, story, sparkles, streak tracking
    f.write("""
// ================================================================
// RESOURCES
// ================================================================

function showRessources() {
  const saved = localStorage.getItem('lamia_results');
  const level = saved ? JSON.parse(saved).levelId : 'debutant';

  const resources = {
    debutant: [
      { icon: '\\ud83d\\udcf1', title: 'Duolingo \\u2014 Russe', desc: 'Application ludique pour d\\u00e9buter. Gratuite sur iOS, Android et Web.', url: 'https://fr.duolingo.com/course/ru/fr/Apprendre-le-russe' },
      { icon: '\\ud83d\\udd24', title: 'RussianForFree.com', desc: 'Cours complets gratuits : alphabet, grammaire, vocabulaire avec audio.', url: 'https://www.russianforfree.com/' },
      { icon: '\\ud83d\\udcd6', title: 'Assimil \\u2014 Le Russe', desc: 'M\\u00e9thode intuitive avec dialogues audio. Id\\u00e9ale pour apprendre en douceur.', url: 'https://www.assimil.com/fr/991-le-russe' },
      { icon: '\\ud83c\\udfac', title: 'RussianPod101 (YouTube)', desc: 'Cha\\u00eene YouTube avec des centaines de vid\\u00e9os pour d\\u00e9butants.', url: 'https://www.youtube.com/user/RussianPod101' },
      { icon: '\\ud83d\\udcdd', title: 'RusseFacile.fr', desc: 'Plateforme fran\\u00e7aise gratuite avec cours audio, exercices et tests.', url: 'https://www.russefacile.fr/' },
      { icon: '\\ud83d\\udcd1', title: 'MosaLingua Russe', desc: 'Application bas\\u00e9e sur la r\\u00e9p\\u00e9tition espac\\u00e9e. 10 min par jour.', url: 'https://www.mosalingua.com/russe/' },
      { icon: '\\ud83d\\udcda', title: 'Penguin Russian Course', desc: 'LE manuel de r\\u00e9f\\u00e9rence pour d\\u00e9buter. Complet et progressif.', url: 'https://www.penguin.co.uk/' },
      { icon: '\\ud83c\\udf10', title: 'Loecsen \\u2014 Russe', desc: 'M\\u00e9thode visuelle et audio avec illustrations pour le voyage.', url: 'https://www.loecsen.com/fr/cours-russe' }
    ],
    intermediaire: [
      { icon: '\\ud83c\\udfac', title: 'Be Fluent in Russian', desc: 'Cha\\u00eene YouTube de Fedor Shirin. Le\\u00e7ons dynamiques et culture russe.', url: 'https://www.youtube.com/c/BeFluentinRussian' },
      { icon: '\\ud83d\\udcda', title: 'Lingopie', desc: 'Plateforme de streaming avec s\\u00e9ries et films russes sous-titr\\u00e9s.', url: 'https://lingopie.com/' },
      { icon: '\\ud83c\\udfa7', title: 'Russian with Max (Podcast)', desc: 'Podcast en russe compr\\u00e9hensible pour interm\\u00e9diaires.', url: 'https://www.russianwithmax.com/podcast' },
      { icon: '\\ud83d\\udcf0', title: 'RT.com Learn Russian', desc: 'Cours gratuits avec articles de presse adapt\\u00e9s.', url: 'https://learnrussian.rt.com/' },
      { icon: '\\ud83d\\udcf1', title: 'Clozemaster', desc: 'Application pour enrichir son vocabulaire en contexte.', url: 'https://www.clozemaster.com/' },
      { icon: '\\ud83d\\udcda', title: 'Nouvelles russes adapt\\u00e9es', desc: 'Tchekhov simplifi\\u00e9, contes populaires, histoires modernes.', url: 'https://www.russianforfree.com/texts.php' }
    ],
    avance: [
      { icon: '\\ud83d\\udcda', title: 'Litt\\u00e9rature russe en VO', desc: 'Pouchkine, Tolsto\\u00ef, Dosto\\u00efevski en texte original.', url: 'https://ilibrary.ru/' },
      { icon: '\\ud83d\\udcf0', title: 'Meduza.io', desc: 'M\\u00e9dia russe ind\\u00e9pendant. Articles en russe moderne.', url: 'https://meduza.io/' },
      { icon: '\\ud83c\\udfac', title: 'Russian Progress', desc: 'Cha\\u00eene YouTube 100% russe sur la grammaire fine et la culture.', url: 'https://www.youtube.com/c/RussianProgress' },
      { icon: '\\ud83c\\udfad', title: 'Arzamas \\u2014 \\u0420\\u0443\\u0441\\u0441\\u043a\\u0438\\u0439 \\u044f\\u0437\\u044b\\u043a', desc: 'Cours sur l\\u2019histoire de la langue et la culture russes.', url: 'https://arzamas.academy/' },
      { icon: '\\ud83d\\udcf0', title: '\\u041f\\u043e\\u043b\\u043a\\u0430 (Polka)', desc: 'Magazine litt\\u00e9raire en ligne. Analyses des grands classiques.', url: 'https://polka.academy/' }
    ],
    expert: [
      { icon: '\\ud83d\\udcda', title: 'Litt\\u00e9rature russe avanc\\u00e9e', desc: 'Boulgakov, Nabokov, Soljenitsyne en version originale int\\u00e9grale.', url: 'https://ilibrary.ru/' },
      { icon: '\\ud83c\\udfac', title: 'Cin\\u00e9ma russe en VO', desc: 'Films de Tarkovski, Zviaguintsev, Sokourov avec sous-titres russes.', url: 'https://www.culture.ru/' },
      { icon: '\\ud83d\\udcf0', title: 'Varlamov (YouTube)', desc: 'Journaliste russe. Vid\\u00e9os sur l\\u2019urbanisme, la politique, la soci\\u00e9t\\u00e9.', url: 'https://www.youtube.com/c/ivarlamov' },
      { icon: '\\ud83c\\udfa7', title: 'Slow Russian Podcast (Avanc\\u00e9)', desc: 'Podcast de Daria Molchanova pour niveaux avanc\\u00e9s.', url: 'https://realrussianclub.com/slowrussianpodcast/' },
      { icon: '\\ud83d\\udcd6', title: 'Dictionnaire Dahl', desc: 'Dictionnaire de r\\u00e9f\\u00e9rence de la langue russe.', url: 'https://gufo.me/dict/dal' }
    ],
    maitre: [
      { icon: '\\ud83d\\udcda', title: '\\u0152uvres compl\\u00e8tes en VO', desc: 'Pouchkine, Tolsto\\u00ef, Tchekhov, Dosto\\u00efevski, textes int\\u00e9graux.', url: 'https://rvb.ru/' },
      { icon: '\\ud83d\\udcd0', title: '\\u0420\\u0443\\u0441\\u0441\\u043a\\u0438\\u0439 \\u044f\\u0437\\u044b\\u043a (Gramota.ru)', desc: 'Portail de r\\u00e9f\\u00e9rence linguistique : dictionnaires, conjugaison.', url: 'https://gramota.ru/' },
      { icon: '\\ud83c\\udf93', title: 'Cours universitaires en ligne', desc: 'Conf\\u00e9rences et cours de l\\u2019Universit\\u00e9 d\\u2019\\u00c9tat de Moscou.', url: 'https://www.coursera.org/moscowstate' },
      { icon: '\\ud83c\\udfa4', title: 'Th\\u00e9\\u00e2tre russe en ligne', desc: 'Enregistrements du Th\\u00e9\\u00e2tre d\\u2019Art de Moscou (\\u041c\\u0425\\u0410\\u0422).', url: 'https://www.culture.ru/' },
      { icon: '\\ud83d\\udcac', title: 'Preply \\u2014 Cours particulier', desc: 'Trouvez un professeur natif pour des le\\u00e7ons individuelles.', url: 'https://preply.com/fr/cours/russe' }
    ]
  };

  const list = resources[level] || resources.debutant;
  const levelName = saved ? JSON.parse(saved).levelName : 'D\\u00e9butante';
  const lv = LEVELS.find(l => l.id === level);

  showModal(`
    <h2>Ressources</h2>
    <p style="text-align:center;margin-bottom:1.5rem;font-size:0.9rem">Niveau actuel : <strong style="color:var(--gold)">${lv ? lv.emoji : '\\ud83c\\udf31'} ${levelName}</strong></p>
    <ul class="resource-list">
      ${list.map(r => `
        <li>
          <span class="resource-icon">${r.icon}</span>
          <div>
            <strong style="color:var(--cream);font-weight:400">${r.title}</strong>
            <br><span style="font-size:0.82rem;color:var(--text-muted)">${r.desc}</span>
            ${r.url ? `<br><a href="${r.url}" target="_blank" style="font-size:0.75rem;color:var(--gold);text-decoration:none;opacity:0.7">\\u2192 Acc\\u00e9der</a>` : ''}
          </div>
        </li>
      `).join('')}
    </ul>
    <button class="btn" onclick="closeModal()" style="margin-top:1.5rem;width:100%">Fermer</button>
  `);
}
""")

    print("Resources written!")

    # Story mode
    f.write("""
// ================================================================
// STORY MODE
// ================================================================

let storyState = { step: 0, choices: [] };

const STORY = [
  {
    text: "Vous arrivez \\u00e0 Saint-P\\u00e9tersbourg \\u00e0 la saison des nuits blanches. Le ciel cr\\u00e9pusculaire embrasse la Neva d'une lueur nacr\\u00e9e. Que souhaitez-vous faire ?",
    choices: [
      { text: "Fl\\u00e2ner le long du canal Gribo\\u00efedov", next: 1 },
      { text: "Visiter le mus\\u00e9e de l'Ermitage", next: 2 }
    ]
  },
  {
    text: "Vous longez le canal. Un vieux musicien joue Tcha\\u00efkovski au violon. Il vous sourit : \\u00ab \u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440! \u041a\u0430\u043a \u0434\u0435\u043b\u0430? \u00bb",
    choices: [
      { text: "\\u00ab \u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440! \u0412\u0441\u0451 \u0445\u043e\u0440\u043e\u0448\u043e, \u0441\u043f\u0430\u0441\u0438\u0431\u043e \u00bb", next: 3 },
      { text: "\\u00ab \u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u044f \u043d\u0435 \u0433\u043e\u0432\u043e\u0440\u044e \u043f\u043e-\u0440\u0443\u0441\u0441\u043a\u0438 \u00bb", next: 3 }
    ]
  },
  {
    text: "Vous entrez dans l'Ermitage. Devant un Rembrandt, une guide chuchote : \\u00ab \u042d\u0442\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0430 \u2014 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0448\u0435\u0434\u0435\u0432\u0440. \u00bb",
    choices: [
      { text: "Demander : \\u00ab \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0431\u0438\u043b\u0435\u0442? \u00bb", next: 4 },
      { text: "Admirer en silence et noter le mot dans votre carnet", next: 4 }
    ]
  },
  {
    text: "Vous arrivez sur la place du Palais. Un vendeur propose des pirojki : \\u00ab \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435, \u043e\u0447\u0435\u043d\u044c \u0432\u043a\u0443\u0441\u043d\u043e! \u00bb",
    choices: [
      { text: "\\u00ab \u0414\u0430, \u0441\u043f\u0430\u0441\u0438\u0431\u043e! \u0421\u043a\u043e\u043b\u044c\u043a\u043e? \u00bb", next: 5 },
      { text: "\\u00ab \u042f \u0432\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0435\u0446 \u00bb", next: 5 }
    ]
  },
  {
    text: "Vous ressortez de l'Ermitage. Le soleil de minuit teinte la ville d'or rose. Un po\\u00e8te amateur r\\u00e9cite pr\\u00e8s du quai.",
    choices: [
      { text: "Accepter le po\\u00e8me et remercier en russe", next: 5 },
      { text: "Lire le po\\u00e8me \\u00e0 voix haute", next: 5 }
    ]
  },
  {
    text: "Saint-P\\u00e9tersbourg vous a envo\\u00fbt\\u00e9e. Entre canaux majestueux, palais imp\\u00e9riaux et cette lumi\\u00e8re unique, vous repartez avec des mots plein le c\\u0153ur. \u0414\u043e \u043d\u043e\u0432\u044b\u0445 \u0432\u0441\u0442\u0440\u0435\u0447!",
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
      <p class="story-text">L'aventure s'ach\\u00e8ve ici, mais votre voyage dans la langue russe continue.</p>
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
""")

    print("Story mode written!")

    # Sparkles + streak + init
    f.write("""
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
""")

    print("Sparkles and init written!")

    # Games
    f.write("""
// ================================================================
// GAMES MODULE
// ================================================================

const GAME_WORDS = [
  { ru: '\\u043c\\u0430\\u043c\\u0430', fr: 'maman', theme: 'Famille' },
  { ru: '\\u043f\\u0430\\u043f\\u0430', fr: 'papa', theme: 'Famille' },
  { ru: '\\u0431\\u0440\\u0430\\u0442', fr: 'fr\\u00e8re', theme: 'Famille' },
  { ru: '\\u0441\\u0435\\u0441\\u0442\\u0440\\u0430', fr: 'soeur', theme: 'Famille' },
  { ru: '\\u0434\\u043e\\u043c', fr: 'maison', theme: 'Maison' },
  { ru: '\\u043a\\u043d\\u0438\\u0433\\u0430', fr: 'livre', theme: 'Maison' },
  { ru: '\\u0432\\u043e\\u0434\\u0430', fr: 'eau', theme: 'Nourriture' },
  { ru: '\\u0445\\u043b\\u0435\\u0431', fr: 'pain', theme: 'Nourriture' },
  { ru: '\\u043c\\u043e\\u043b\\u043e\\u043a\\u043e', fr: 'lait', theme: 'Nourriture' },
  { ru: '\\u043a\\u043e\\u0442', fr: 'chat', theme: 'Animaux' },
  { ru: '\\u0441\\u043e\\u0431\\u0430\\u043a\\u0430', fr: 'chien', theme: 'Animaux' },
  { ru: '\\u0440\\u044b\\u0431\\u0430', fr: 'poisson', theme: 'Animaux' },
  { ru: '\\u043a\\u0440\\u0430\\u0441\\u043d\\u044b\\u0439', fr: 'rouge', theme: 'Couleurs' },
  { ru: '\\u0441\\u0438\\u043d\\u0438\\u0439', fr: 'bleu', theme: 'Couleurs' },
  { ru: '\\u0437\\u0435\\u043b\\u0451\\u043d\\u044b\\u0439', fr: 'vert', theme: 'Couleurs' },
  { ru: '\\u0431\\u0435\\u043b\\u044b\\u0439', fr: 'blanc', theme: 'Couleurs' },
  { ru: '\\u0447\\u0451\\u0440\\u043d\\u044b\\u0439', fr: 'noir', theme: 'Couleurs' },
  { ru: '\\u0434\\u0432\\u0430', fr: 'deux', theme: 'Nombres' },
  { ru: '\\u0442\\u0440\\u0438', fr: 'trois', theme: 'Nombres' },
  { ru: '\\u043f\\u044f\\u0442\\u044c', fr: 'cinq', theme: 'Nombres' },
  { ru: '\\u0441\\u043e\\u043b\\u043d\\u0446\\u0435', fr: 'soleil', theme: 'Nature' },
  { ru: '\\u043b\\u0443\\u043d\\u0430', fr: 'lune', theme: 'Nature' },
  { ru: '\\u0437\\u0432\\u0435\\u0437\\u0434\\u0430', fr: '\\u00e9toile', theme: 'Nature' },
  { ru: '\\u043b\\u044e\\u0431\\u043e\\u0432\\u044c', fr: 'amour', theme: '\\u00c9motions' },
  { ru: '\\u0434\\u0440\\u0443\\u0433', fr: 'ami', theme: 'Personnes' },
  { ru: '\\u0441\\u0435\\u043c\\u044c\\u044f', fr: 'famille', theme: 'Personnes' },
  { ru: '\\u0448\\u043a\\u043e\\u043b\\u0430', fr: '\\u00e9cole', theme: 'Lieux' },
  { ru: '\\u0433\\u043e\\u0440\\u043e\\u0434', fr: 'ville', theme: 'Lieux' },
  { ru: '\\u043c\\u0443\\u0437\\u044b\\u043a\\u0430', fr: 'musique', theme: 'Culture' }
];
""")

    print("Game words written!")

    # Memory game
    f.write("""
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
            <span class="mem-card-label">${card.type === 'ru' ? 'RUSSE' : 'FRAN\\u00c7AIS'}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const matchedPairs = memoryState.matched.length;
  const totalPairs = memoryState.cards.length / 2;

  showModal(`
    <h2>\\ud83e\\udde0 Jeu de Memory</h2>
    <p style="text-align:center;margin-bottom:1rem;font-size:0.85rem;color:var(--text-muted)">Associez chaque mot russe \\u00e0 sa traduction</p>
    <div style="display:flex;justify-content:space-between;margin-bottom:1rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>\\ud83d\\udd50 <span id="memory-timer">0:00</span></span>
      <span>\\ud83c\\udfaf Tentatives : <span id="memory-attempts">${memoryState.attempts}</span></span>
      <span>\\u2705 <span id="memory-matched">${matchedPairs}</span>/${totalPairs}</span>
    </div>
    <div class="memory-grid">${cardsHtml}</div>
    ${matchedPairs === totalPairs ? `
      <div style="text-align:center;margin-top:1.5rem">
        <p style="color:var(--gold);font-size:1.1rem;margin-bottom:0.5rem">\\ud83c\\udf89 F\\u00e9licitations !</p>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">Termin\\u00e9 en ${formatTime(memoryState.timer)}</p>
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
""")

    print("Memory game written!")

    # Scramble game
    f.write("""
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
    <h2>\\ud83d\\udd24 Puzzle de mots</h2>
    <p style="text-align:center;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-muted)">Reconstituez le mot russe</p>
    <div style="display:flex;justify-content:space-between;margin-bottom:1rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>\\ud83c\\udfaf ${scrambleState.score}/${scrambleState.total}</span>
      <span>Th\\u00e8me : ${scrambleState.word ? scrambleState.word.theme : '-'}</span>
    </div>
    <div style="text-align:center;margin:2rem 0">
      <div style="font-size:2.5rem;letter-spacing:8px;color:var(--gold);font-family:'Cormorant Garamond',serif;margin-bottom:1.5rem">
        ${scrambleState.scrambled.split('').map(l => `<span style="display:inline-block;background:rgba(201,169,110,0.1);padding:0.3rem 0.5rem;border-radius:8px;margin:0 2px;border:1px solid rgba(201,169,110,0.2)">${l}</span>`).join('')}
      </div>
      <input type="text" id="scramble-input" placeholder="Tapez le mot ici..." 
        style="width:80%;padding:0.8rem 1rem;background:rgba(255,255,255,0.05);border:1px solid rgba(201,169,110,0.2);border-radius:12px;color:var(--cream);font-size:1.1rem;text-align:center;outline:none"
        onkeypress="if(event.key==='Enter') checkScramble()">
    </div>
    <div style="display:flex;gap:0.5rem;justify-content:center">
      <button class="btn" onclick="checkScramble()" style="flex:1">V\\u00e9rifier \\u2713</button>
      <button class="btn" onclick="showScrambleHint()" style="background:transparent;border-color:var(--border-subtle);flex:0.5">\\ud83d\\udca1</button>
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
    feedback.innerHTML = `<span style="color:var(--gold)">\\u2705 Parfait !</span>`;
    setTimeout(() => nextScramble(), 1500);
  } else {
    feedback.innerHTML = `<span style="color:#E8B4B8">\\u274c Non, indice : ${scrambleState.word.fr}</span>`;
    input.value = '';
    input.focus();
  }
}

function showScrambleHint() {
  const feedback = document.getElementById('scramble-feedback');
  if (feedback && scrambleState.word) {
    feedback.innerHTML = `<span style="color:var(--text-muted)">\\ud83d\\udca1 Traduction : ${scrambleState.word.fr}</span>`;
  }
}
""")

    print("Scramble game written!")

    # Speed Quiz
    f.write("""
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
      question: isRuToFr ? `Que signifie \\u00ab ${word.ru} \\u00bb ?` : `Comment dit-on \\u00ab ${word.fr} \\u00bb en russe ?`,
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
  const optionsHtml = q.options.map((opt, i) => `<button class="speed-option" onclick="answerSpeedQuiz(${i}, '${opt.replace(/'/g, "\\\\'")}')" id="speed-opt-${i}">${opt}</button>`).join('');

  showModal(`
    <h2>\\u26a1 Quiz \\u00c9clair</h2>
    <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-secondary)">
      <span>Question ${speedQuizState.current + 1}/${speedQuizState.total}</span>
      <span>\\ud83c\\udfaf ${speedQuizState.score} bonnes</span>
    </div>
    <div style="margin-bottom:1rem">
      <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-muted);margin-bottom:0.2rem">
        <span>\\u23f1 <span id="speed-timer">15</span>s</span>
        <span>Th\\u00e8me : ${q.theme}</span>
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
      if (feedback) feedback.innerHTML = `<span style="color:#E8B4B8">\\u23f0 Temps \\u00e9coul\\u00e9 ! La r\\u00e9ponse \\u00e9tait : ${q.correct}</span>`;
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
  if (feedback) feedback.innerHTML = isCorrect ? `<span style="color:var(--gold)">\\u2705 Correct !</span>` : `<span style="color:#E8B4B8">\\u274c La r\\u00e9ponse \\u00e9tait : ${q.correct}</span>`;
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
  const emoji = pct >= 80 ? '\\ud83c\\udf1f' : pct >= 50 ? '\\ud83d\\udc4d' : '\\ud83d\\udcaa';
  const msg = pct >= 80 ? 'Excellent niveau !' : pct >= 50 ? 'Bien ! Continue comme \\u00e7a.' : 'Entra\\u00eene-toi encore un peu !';
  showModal(`
    <h2>\\u26a1 Quiz \\u00c9clair \\u2014 Termin\\u00e9 !</h2>
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
""")

    print("Speed quiz written!")

    # Games menu + splash
    f.write("""
// ===== GAMES MENU =====
function showGamesMenu() {
  showModal(`
    <h2>\\ud83c\\udfae Jeux interactifs</h2>
    <p style="text-align:center;margin-bottom:1.5rem;font-size:0.85rem;color:var(--text-muted)">Apprenez en vous amusant !</p>
    <div style="display:flex;flex-direction:column;gap:1rem">
      <button class="game-menu-btn" onclick="closeModal();setTimeout(startMemoryGame,300)" style="background:linear-gradient(135deg,rgba(201,169,110,0.1),rgba(232,180,184,0.05));border:1px solid rgba(201,169,110,0.2);border-radius:16px;padding:1.2rem;text-align:left;cursor:pointer">
        <div style="display:flex;align-items:center;gap:1rem">
          <span style="font-size:2.5rem">\\ud83e\\udde0</span>
          <div>
            <div style="color:var(--cream);font-family:'Cormorant Garamond',serif;font-size:1.2rem;margin-bottom:0.2rem">Jeu de Memory</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">Associez les mots russes \\u00e0 leur traduction</div>
          </div>
        </div>
      </button>
      <button class="game-menu-btn" onclick="closeModal();setTimeout(startScrambleGame,300)" style="background:linear-gradient(135deg,rgba(201,169,110,0.1),rgba(232,180,184,0.05));border:1px solid rgba(201,169,110,0.2);border-radius:16px;padding:1.2rem;text-align:left;cursor:pointer">
        <div style="display:flex;align-items:center;gap:1rem">
          <span style="font-size:2.5rem">\\ud83d\\udd24</span>
          <div>
            <div style="color:var(--cream);font-family:'Cormorant Garamond',serif;font-size:1.2rem;margin-bottom:0.2rem">Puzzle de mots</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">Reconstituez le mot russe m\\u00e9lang\\u00e9</div>
          </div>
        </div>
      </button>
      <button class="game-menu-btn" onclick="closeModal();setTimeout(startSpeedQuiz,300)" style="background:linear-gradient(135deg,rgba(201,169,110,0.1),rgba(232,180,184,0.05));border:1px solid rgba(201,169,110,0.2);border-radius:16px;padding:1.2rem;text-align:left;cursor:pointer">
        <div style="display:flex;align-items:center;gap:1rem">
          <span style="font-size:2.5rem">\\u26a1</span>
          <div>
            <div style="color:var(--cream);font-family:'Cormorant Garamond',serif;font-size:1.2rem;margin-bottom:0.2rem">Quiz \\u00c9clair</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">8 questions chronom\\u00e9tr\\u00e9es</div>
          </div>
        </div>
      </button>
    </div>
    <button class="restart-quiz" onclick="closeModal()" style="margin-top:1.5rem;width:100%">Fermer</button>
  `);
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
""")

    print("ALL DONE!")

print("gen_js4.py execution complete")
