import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { libaryStored } from './utils/libs/store';
import { categorySystemServiceApi } from './features/category-system-key-search/categorySystemKeySearchService';
import Header from "./components/header";

function App() {
  return (
    <ApiProvider api={categorySystemServiceApi}>
      <Provider store={libaryStored}>
        <BrowserRouter>
          <div className="main-root h-screen">
            <Header />
          </div>
        </BrowserRouter>
      </Provider>
    </ApiProvider>
  );
}

export default App;
