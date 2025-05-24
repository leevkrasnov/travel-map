import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './pages/App'
import './firebase'
import { YMaps } from '@pbe/react-yandex-maps'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <YMaps
        query={{
          apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY,
          lang: 'ru_RU',
        }}
      >
        <App />
      </YMaps>
    </BrowserRouter>
  </StrictMode>
)
