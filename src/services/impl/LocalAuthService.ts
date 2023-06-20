import { AuthService } from '@/services/AuthService'

export class LocalAuthService implements AuthService {
  private readonly DELAY_IN_MS = 0.3

  public async login(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), this.DELAY_IN_MS)
    })
  }

  public async logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, this.DELAY_IN_MS)
    })
  }
}
