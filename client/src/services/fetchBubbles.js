import { axiosWithAuth } from '../utils/axiosWithAuth'

export const fetchBubbles = () => {
  return axiosWithAuth()
    .get("/colors")
    // .then(res => res)
}