import axios from 'axios'
const key = '650536edfd4249f0adbce7f03b6415c8'

const url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${key}`

class NewsServices {

  getNewByCategory(category = 'business') {
    return axios.get(`${url}&category=${category}`)
  }
}
export default NewsServices;