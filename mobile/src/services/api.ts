import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'

console.log(process.env)

export const api = axios.create({
  baseURL: process.env.BASE_URL
})
