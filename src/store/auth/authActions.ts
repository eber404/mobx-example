import { action } from 'mobx'

import { AuthService } from '@/services/AuthService'

import { AuthState } from './authState'

interface AuthDeps {
  authService: AuthService
}

export interface AuthActions {
  login: () => Promise<void>
  logout: () => Promise<void>
}

export const authFactory = (state: AuthState, deps: AuthDeps): AuthActions => ({
  login: action(async () => {
    await deps.authService.login()
    state.isAuth = true
  }),
  logout: action(async () => {
    await deps.authService.logout()
    state.isAuth = false
  }),
})
