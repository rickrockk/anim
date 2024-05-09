import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {AuthService} from './services/AuthService.ts'
import './App.scss'

interface State {
    store: AuthService,
}

const store = new AuthService()

export const Context = createContext<State>({
    store
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Context.Provider value={{store}}>
            <App />
    </Context.Provider>
)
