import { PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'

import { AuthActions } from '@/store/auth/authActions'
import { AuthState } from '@/store/auth/authState'

export interface HomeProps extends PropsWithChildren {
  deps: {
    authActions: AuthActions
    authState: AuthState
  }
}

function HomePage({ deps }: HomeProps) {
  const { authActions, authState } = deps
  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="auth-info">
          {authState.isAuth ? 'Você está logado' : 'Você está deslogado'}
        </p>
        {authState.isAuth ? (
          <button data-testid="logout-button" onClick={authActions.logout}>
            logout
          </button>
        ) : (
          <button data-testid="login-button" onClick={authActions.login}>
            login
          </button>
        )}
      </header>
    </div>
  )
}

export const Home = observer(HomePage)
