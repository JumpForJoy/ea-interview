import { faPlay, faTag, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

// COURSES
export const transformCategories = (data) =>
  data.map(({ id, name, slug, count, yoast_head_json }) => ({
    id,
    slug,
    title: name,
    image: yoast_head_json?.og_image[0]?.url,
    text: `${count} lesson${count === 1 ? '' : 's'}`
  }))

export const transformCourses = (data) =>
  data.map(
    ({
      id,
      name,
      image,
      categories,
      excerpt,
      instructor,
      origin_price,
      sale_price,
      course_data
    }) => {
      const list = []
      const startDate = course_data?.start_time

      if (startDate) {
        list.push({ icon: faCalendar, text: startDate.split('T')[0] })
      }

      return {
        id,
        href: `/courses/${id}`,
        tag:
          categories && Array.isArray(categories)
            ? categories[0]?.name?.replace('&amp;', '&')
            : 'none',
        title: name,
        subtitle: instructor?.name,
        image,
        text: excerpt,
        price: sale_price || origin_price,
        priceOld: origin_price,
        list,
        button: {
          icon: faPlay,
          text: 'Start Learning'
        }
      }
    }
  )

export const transformCourse = ({
  name,
  image,
  content,
  origin_price,
  sale_price,
  categories,
  instructor
}) => ({
  title: name,
  image,
  content,
  priceOld: origin_price,
  price: sale_price,
  category: categories[0]?.name?.replace('&amp;', '&'),
  instructor: {
    name: instructor?.name,
    image: instructor?.avatar,
    description: instructor?.description?.replace('&amp;', '&'),
    socials: instructor?.social
  }
})

// POSTS
export const transformPosts = (data) =>
  data.map(
    ({
      id,
      slug,
      title,
      uagb_featured_image_src,
      excerpt,
      date,
      modified
    }) => ({
      id,
      slug,
      image: uagb_featured_image_src?.medium_large[0],
      title: title?.rendered,
      text: excerpt?.rendered?.replace('<p>', '')?.replace('</p>', ''),
      list: [
        { icon: faTag, text: 'Blog' },
        { icon: faCalendar, text: (modified || date).split('T')[0] }
      ],
      isListHorizontal: true,
      link: {
        href: '#',
        text: 'Read More',
        icon: faArrowRight
      }
    })
  )
