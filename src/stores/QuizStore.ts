import { makeAutoObservable } from 'mobx';
import { configurePersistable, makePersistable } from 'mobx-persist-store';
import { MMKV } from 'react-native-mmkv';
import { Question } from '../utils/questionUtil';

const storage = new MMKV();

configurePersistable({
  storage: {
    setItem: (key, data) => storage.set(key, data),
    getItem: (key) => storage.getString(key) ?? null,
    removeItem: (key) => storage.delete(key),
  },
});

export interface Answer {
  correct: boolean;
  question: Question;
}

export const createQuizStore = () => {
  const initialState = makeAutoObservable({
    answers: [] as Answer[],
    addAnswer(answer: Answer) {
      this.answers.push(answer);
    },
    get score(): number {
      return this.answers.filter((a: Answer) => a.correct).length;
    },
    get answeredQuestions(): Question[] {
      return this.answers
        .filter((a: Answer) => a.correct)
        .map((a: Answer) => a.question);
    },
  });
  makePersistable(initialState, {
    name: 'QuizStore',
    properties: ['answers'],
  });
  return initialState;
};

export type QuizStore = Awaited<ReturnType<typeof createQuizStore>>;
