import { URL_APP_POSTS, COMMON_HEADERS } from '@/constants'
import { transformPosts } from '@/utils/data-utils'

export const getPosts = (limit = 10) =>
  fetch(`${URL_APP_POSTS}?per_page=${limit}`, {
    headers: COMMON_HEADERS
  })
    .then((response) => response.json())
    .then((response) => transformPosts(response))
    .catch((error) => {
      console.log('There was an error while getting the posts:')
      console.log(error)
    })

export const getPost = (id) =>
  fetch(new URL(id, URL_APP_POSTS), {
    headers: COMMON_HEADERS
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('There was an error while getting the post:')
      console.log(error)
    })
