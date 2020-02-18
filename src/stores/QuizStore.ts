import {action, computed, observable} from 'mobx';
import {persist} from 'mobx-persist';
import {Question} from '../utils/questionUtil';

export interface Answer {
  correct: boolean;
  question: Question;
}

export default class QuizStore {
  @persist('object')
  @observable
  answers: Answer[] = [];

  @action
  addAnswer(answer: Answer) {
    this.answers.push(answer);
  }

  @computed
  get score() {
    return this.answers.filter(a => a.correct).length;
  }

  @computed
  get answeredQuestions() {
    return this.answers.filter(a => a.correct).map(a => a.question);
  }
}
