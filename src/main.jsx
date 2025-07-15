import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

// コードを修正したあと npm run deployとターミナルに打ち込む
// basename はリポジトリ名や公開フォルダ名と同じにします

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/React">
            <App/>
        </BrowserRouter>
    </StrictMode>,
)