import {observable, action} from 'mobx';
import {persist} from 'mobx-persist';

export default class QuizStore {
  @persist
  @observable
  score: number = 0;

  @action
  addScore() {
    this.score += 1;
  }
}
