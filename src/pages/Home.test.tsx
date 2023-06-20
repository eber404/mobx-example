import React from 'react'
import { render, screen } from '@testing-library/react'

import { AuthActions, authFactory } from '@/store/auth/authActions'
import { authState } from '@/store/auth'
import { AuthService } from '@/services/AuthService'
import { AuthState } from '@/store/auth/authState'

import { Home, HomeProps } from './Home'

const makeSut = (
  authStateProps?: Partial<AuthState>,
  authActionsProps?: Partial<AuthActions>
): HomeProps => {
  const authService: AuthService = {
    login: () => Promise.resolve(void 0),
    logout: () => Promise.resolve(void 0),
  }
  const authActions = authFactory(authState, { authService })

  return {
    deps: {
      authState: {
        ...authState,
        ...authStateProps,
      },
      authActions: {
        ...authActions,
        ...authActionsProps,
      },
    },
  }
}

test('should render login button if user is not authenticated', () => {
  // given
  const homeProps = makeSut()

  // when
  render(<Home deps={homeProps.deps} />)
  const authInfo = screen.getByTestId('auth-info')
  const loginButton = screen.getByTestId('login-button')

  // then
  expect(homeProps.deps.authState.isAuth).toBeFalsy()
  expect(authInfo.textContent).toMatch('Você está deslogado')
  expect(loginButton).toBeDefined()
})

test('should render logout button if user is authenticated', async () => {
  // given
  const homeProps = makeSut({
    isAuth: true,
  })

  // when
  render(<Home deps={homeProps.deps} />)
  const authInfo = screen.getByTestId('auth-info')
  const logoutButton = screen.getByTestId('logout-button')

  // then
  expect(homeProps.deps.authState.isAuth).toBeTruthy()
  expect(authInfo.textContent).toMatch('Você está logado')
  expect(logoutButton).toBeDefined()
})
