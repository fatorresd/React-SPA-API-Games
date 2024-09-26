import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';
import { ValvePage, RockstarPage, CdProjectPage, GotyGames, SearchPage, Game, GamesListConnect} from '../../games';

export const GamesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                <Route path="valve" element={<GamesListConnect />} />
                <Route path="rockstar" element={<RockstarPage />} />
                <Route path="cdproject" element={<CdProjectPage/>} />
                <Route path="gotygames" element={<GotyGames/>} />

                <Route path="search" element={<SearchPage/>} />
                <Route path="games" element={<Game/>} />

                <Route path="/" element={<Navigate to="/gotygames" />} />
                
            </Routes>
        </div>
    </>
  )
}
