import axios from './axios'

export function getHomeMultidata() {
    return axios({
      url: '/home/multidata'
    })
  }