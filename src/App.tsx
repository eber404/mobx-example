import './App.css'
import { authActions } from './store/auth'
import { authState } from './store/auth/authState'
import { observer } from 'mobx-react-lite'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{authState.isAuth ? 'Você está logado' : 'Você está deslogado'}</p>
        {authState.isAuth ? (
          <button onClick={authActions.logout}>logout</button>
        ) : (
          <button onClick={authActions.login}>login</button>
        )}
      </header>
    </div>
  )
}

export default observer(App)
