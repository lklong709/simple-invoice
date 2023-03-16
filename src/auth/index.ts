import axios from 'axios'
import { AuthData } from '../types/AuthDataType'

const getUserProfile = async (accessToken: string) => {
  try {
    const response = await axios.get(`${process.env.END_POINT_URL}/membership-service/1.2.0/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    localStorage.setItem('orgToken', `${response.data.data.memberships[0].token}`)
    return response
  } catch (error) {
    localStorage.clear()
  }
}

const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.END_POINT_URL}/token`,
      {
        grant_type: 'password',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        scope: 'openid',
        username: username, //'dung+octopus4@101digital.io'
        password: password //'Abc@123456'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    if (response) {
      const data: AuthData = response.data
      localStorage.setItem('accessToken', `${data.access_token}`)
      localStorage.setItem('authenticated', 'true')
    }
  } catch (error) {
    return error
    localStorage.clear()
  }
}

export { login, getUserProfile }
