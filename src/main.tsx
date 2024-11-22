import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
// import { Routes } from '@generouted/react-router/lazy' // route-based code-splitting
import "./index.css"
createRoot(document.getElementById('root')!).render(<Routes />)