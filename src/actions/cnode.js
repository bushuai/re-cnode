import { fetchTopics, fetchTopic } from '../services/topics'

export const fetchTopicList = (tab = 'all', page = 1) => {
  return async dispatch => {
    const { data: { topics } } = await fetchTopics(tab, page)
    dispatch({ 
      type: 'CHANGE_LIST',
      list: topics
    })
  }
}

export const fetchTopicDetail = topic => {
  if (topic) {
    return async dispatch => {
      const { data: { article } } = await fetchTopic(topic.id)
      dispatch({ 
        type: 'TOGGLE_DETAIL',
        article: { ...topic, ...article }
      })
    }
  } else {
    return { 
      type: 'TOGGLE_DETAIL',
      article: null
    }
  }
}