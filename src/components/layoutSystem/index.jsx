import { Routes, Route } from 'react-router-dom';
import { formatStringPathRoute, PathRootSystem } from '~/utils';
import Header from "~/components/header";
import HomeSystem from '~/sreens/HomeSystem';
import SearchSystem from '~/sreens/SearchSystem';

export default function LayoutSystem(){
    return (
        <>
            <Header />
            <div className="content mx-auto h-screen mt-28 pt-2 z-1">
                <Routes>
                    <Route path={PathRootSystem.home} element={<HomeSystem />} />
                    <Route path={formatStringPathRoute(PathRootSystem.search)} element={<SearchSystem />} />
                </Routes>
            </div>
        </>
    )
}