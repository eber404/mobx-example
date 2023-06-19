import { observable } from 'mobx'

export interface AuthState {
  isAuth: boolean
}

export const authState: AuthState = observable<AuthState>({
  isAuth: false,
})
