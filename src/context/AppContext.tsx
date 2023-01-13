import React, { ReactNode, memo, useContext } from 'react';
import { QuizStore, createQuizStore } from '../stores/QuizStore';

export interface AppContextInterface {
  quizStore: QuizStore;
}

const AppContext = React.createContext<AppContextInterface>({
  quizStore: createQuizStore(),
});

const AppContextProvider = memo((props: { children: ReactNode }) => {
  const { quizStore } = useContext(AppContext);
  return <AppContext.Provider value={{ quizStore }} {...props} />;
});

function useQuizStore() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useQuizStore must be used within a AppContextProvider');
  }
  return context.quizStore!;
}

export { AppContextProvider, useQuizStore };
