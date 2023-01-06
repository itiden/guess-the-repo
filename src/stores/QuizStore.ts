import { makeAutoObservable } from 'mobx';
import { Question } from '../utils/questionUtil';

export interface Answer {
  correct: boolean;
  question: Question;
}

export const quizStore = () => {
  return makeAutoObservable({
    answers: [] as Answer[],
    addAnswer(answer: Answer) {
      this.answers.push(answer);
    },
    get score() {
      return this.answers.filter((a: Answer) => a.correct).length;
    },
    get answeredQuestions() {
      return this.answers
        .filter((a: Answer) => a.correct)
        .map((a: Answer) => a.question);
    },
  });
};

export type QuizStore = ReturnType<typeof quizStore>;
