import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { setupStore } from './store/store.ts'

const store = setupStore()
import App from './App.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)
