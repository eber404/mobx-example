import { LocalAuthService } from '@/services/impl/LocalAuthService'

import { authFactory } from './authActions'
import { authState } from './authState'
export { authState } from './authState'

const authService = new LocalAuthService()

export const authActions = authFactory(authState, {
  authService,
})
