import axios from './base'

export const fetchTopics = (tab = 'all', page = 1) => {
  return axios.get(`/topics/tab/${tab}?page=${page}`)
}

export const fetchTopic = id => {
  return axios.get(`/topics/${id}`)
}