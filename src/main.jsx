import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { GamesApp } from './GamesApp'
//import GameListConnect from './games/connectionDataGames/GameListConnect';

import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GamesApp />
    </BrowserRouter>
  </StrictMode>,
)
