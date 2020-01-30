import repos from '../data/repos.json';

type Repo = typeof repos[number];
type Question = {
  question: string;
  anwers: string[];
  correct: number;
};

function generateQuestions(): Question[] {
  return shuffle(
    repos.map(repo =>
      descriptionQuestion(
        repo,
        repos.filter(r => r.full_name !== repo.full_name),
      ),
    ),
  );
}

function hideRepoName(description: string, name: string) {
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
