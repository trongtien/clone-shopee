import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { libaryStored } from '~/utils/libs/store';
import { categorySystemServiceApi } from '~/features/category-system-key-search/categorySystemKeySearchService';
import LayoutAccountUser from '~/components/layoutAccountUser';
import LayoutSystem from '~/components/layoutSystem';
import { formatStringPathRoute, PathRootSystem } from './utils';

function App() {
  return (
    <ApiProvider api={categorySystemServiceApi}>
      <Provider store={libaryStored}>
        <BrowserRouter>
          <div className="main-root h-screen font-serif">
            <Routes>
              <Route path={formatStringPathRoute(PathRootSystem.home)} element={<LayoutSystem />} />
              <Route path={formatStringPathRoute(PathRootSystem.account_user)} element={<LayoutAccountUser />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </ApiProvider>
  );
}

export default App;
