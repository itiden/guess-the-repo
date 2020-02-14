import repos from '../data/repos.json';

type Repo = typeof repos[number];
type Question = {
  question: string;
  anwers: string[];
  correct: number;
  type: string;
};

const questionApprovedLanguages = [
  'JavaScript',
  'Rust',
  'C++',
  'TypeScript',
  'Java',
  'Dart',
  'C',
  'Python',
  'Go',
  'CSS',
  'PHP',
  'Vue',
  'C#',
  'Assembly',
  'Ruby',
  'Clojure',
  'HTML',
  'Kotlin',
  'Swift',
  'Objective-C',
  'Scala',
  'Lua',
  'OCaml',
  'Haskell',
  'Rascal',
  'Elixir',
  'CoffeeScript',
  'V',
  'Perl',
];

function generateQuestions(): Question[] {
  const descriptionQuestions = repos.map(repo =>
    descriptionQuestion(
      repo,
      repos.filter(r => r.full_name !== repo.full_name),
    ),
  );
  const languageFilteredRepos = repos.filter(
    repo =>
      repo.language != null &&
      questionApprovedLanguages.includes(repo.language),
  );
  const languageQuestions = languageFilteredRepos.map(repo =>
    languageQuestion(repo),
  );
  return descriptionQuestions.concat(languageQuestions);
}

function hideRepoName(description: string | null, name: string) {
  if (description == null) {
    return '***';
  }
  const names = name.split(/[\/\.-]/);
  let nonSpoiledDescription = description;
  names.forEach(
    n =>
      (nonSpoiledDescription = nonSpoiledDescription.replace(
        new RegExp(n, 'ig'),
        '***',
      )),
  );
  return nonSpoiledDescription;
}

function descriptionQuestion(repo: Repo, otherRepos: Repo[]) {
  const shuffledRepos = shuffle(otherRepos);
  const anwers: string[] = [repo.full_name];
  shuffledRepos.slice(0, 3).forEach(shuffledRepo => {
    anwers.push(shuffledRepo.full_name);
  });
  const shuffledAnswers = shuffle(anwers);
  return {
    question: hideRepoName(repo.description, repo.full_name),
    anwers: shuffledAnswers,
    correct: shuffledAnswers.indexOf(repo.full_name) + 1,
    type: 'description',
  };
}

function languageQuestion(repo: Repo) {
  const anwers: string[] = [repo.language!];
  const shuffledLanguages = shuffle(
    questionApprovedLanguages.filter(l => l !== repo.language),
  );
  shuffledLanguages.slice(0, 3).forEach(shuffledLanguage => {
    anwers.push(shuffledLanguage);
  });
  const shuffledAnswers = shuffle(anwers);
  return {
    question: `What is the main programming language for ${repo.full_name}`,
    anwers: shuffledAnswers,
    correct: shuffledAnswers.indexOf(repo.language) + 1,
    type: 'language',
  };
}

function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export {generateQuestions};
