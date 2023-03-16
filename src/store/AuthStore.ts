import { makeAutoObservable } from 'mobx'
import { getUserProfile, login } from '../auth'

export class AuthStore {
  isLoggedIn = localStorage.getItem('authenticated') === 'true' ? true : false
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  async login(username: string, password: string): Promise<void> {
    await login(username, password)
    await getUserProfile(`${localStorage.getItem('accessToken')}`)
    this.isLoggedIn = localStorage.getItem('authenticated') === 'true' ? true : false
  }

  logout(): void {
    // Perform logout logic here and set isLoggedIn and username accordingly
    localStorage.clear()
    this.isLoggedIn = false
  }
}
