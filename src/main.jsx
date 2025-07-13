import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Practice from './Practice.jsx'

// コードを修正したあと npm run deployとターミナルに打ち込む

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <Practice/>
    </StrictMode>,
)