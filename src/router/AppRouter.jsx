import { Routes, Route } from 'react-router-dom';

import { GamesRoutes } from '../games';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>

        <Routes>

            <Route path="login" element={<LoginPage />} />

            <Route path="/*" element={<GamesRoutes />} />
     
        </Routes>

    </>
  )
}
