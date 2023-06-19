import { action } from 'mobx'
import { AuthState } from './authState'
import { AuthService } from '../../services/AuthService'

interface AuthDeps {
  authService: AuthService
}

interface AuthActions {
  login: () => Promise<void>
  logout: () => Promise<void>
}

export const authFactory = (state: AuthState, deps: AuthDeps): AuthActions => ({
  login: action(async () => {
    console.log('login')
    await deps.authService.login()

    state.isAuth = true
  }),
  logout: action(async () => {
    console.log('logout')
    await deps.authService.logout()
    state.isAuth = false
  }),
})
