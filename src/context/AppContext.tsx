import React, { ReactNode, memo } from 'react';
import { QuizStore, quizStore } from '../stores/QuizStore';

export interface AppContextInterface {
  quizStore: QuizStore;
}

const AppContext = React.createContext<AppContextInterface>({
  quizStore,
});

const AppContextProvider = memo((props: { children: ReactNode }) => {
  return <AppContext.Provider value={{ quizStore }} {...props} />;
});

function useQuizStore() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useQuizStore must be used within a AppContextProvider');
  }
  return context.quizStore;
}

export { AppContextProvider, useQuizStore };
