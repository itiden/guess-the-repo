import React, {ReactNode, memo} from 'react';
import QuizStore from '../stores/QuizStore';
import AsyncStorage from '@react-native-community/async-storage';
import {create} from 'mobx-persist';

export interface AppContextInterface {
  quizStore: QuizStore;
}

const AppContext = React.createContext<AppContextInterface | undefined>(
  undefined,
);

const AppContextProvider = memo((props: {children: ReactNode}) => {
  const quizStore = new QuizStore();
  const hydrate = create({storage: AsyncStorage, jsonify: true});
  hydrate('quizStore', quizStore);
  return <AppContext.Provider value={{quizStore}} {...props} />;
});

function useQuizStore() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(`useQuizStore must be used within a AppContextProvider`);
  }
  return context.quizStore;
}

export {AppContextProvider, useQuizStore};
