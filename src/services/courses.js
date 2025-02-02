import {
  URL_APP_COURSES,
  URL_APP_CATEGORIES,
  COMMON_HEADERS
} from '@/constants'
import {
  transformCategories,
  transformCourses,
  transformCourse
} from '@/utils/data-utils'

export const getCategories = () =>
  fetch(URL_APP_CATEGORIES, {
    headers: COMMON_HEADERS
  })
    .then((response) => response.json())
    .then((response) => transformCategories(response))
    .catch((error) => {
      console.log('There was an error while getting the categories:')
      console.log(error)
    })

export const getCourses = (limit = 10) =>
  fetch(`${URL_APP_COURSES}?per_page=${limit}`, {
    headers: COMMON_HEADERS
  })
    .then((response) => response.json())
    .then((response) => transformCourses(response))
    .catch((error) => {
      console.log('There was an error while getting the courses:')
      console.log(error)
    })

export const getCourse = (id) =>
  fetch(`${URL_APP_COURSES}/${id}`, {
    headers: COMMON_HEADERS
  })
    .then((response) => response.json())
    .then((response) => transformCourse(response))
    .catch((error) => {
      console.log('There was an error while getting the course:')
      console.log(error)
    })
