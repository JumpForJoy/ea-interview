const pathCourses = 'wp-json/learnpress/v1'
const pathPosts = 'wp-json/wp/v2'

export const URL_MAIN = 'https://eatradingacademy.com'
export const URL_APP_COURSES = new URL(`${pathCourses}/courses`, URL_MAIN).href
export const URL_APP_CATEGORIES = new URL(
  `${pathCourses}/course_category`,
  URL_MAIN
).href
export const URL_APP_POSTS = new URL(`${pathPosts}/posts`, URL_MAIN).href

export const COMMON_HEADERS = {
  'Content-Type': 'application/json'
}

// const courses = [
//   {
//     tag: 'Language Learning',
//     image: courseCard1,
//     title: 'Introduction LearnPress – LMS plugin',
//     subtitle: 'Keny White',
//     text: 'A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes & more.',
//     list: [{ icon: faCalendar, text: '15 Lessons' }],
//     isFree: true,
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   },
//   {
//     tag: 'Coaching',
//     image: courseCard1,
//     title: 'Create an LMS Website with LearnPress',
//     subtitle: 'Keny White',
//     text: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae.',
//     list: [{ icon: faCalendar, text: '14 Lessons' }],
//     isFree: true,
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   },
//   {
//     tag: 'Teaching Online',
//     image: courseCard1,
//     title: 'Introduction LearnPress – LMS plugin',
//     subtitle: 'Keny White',
//     text: 'A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes & more.',
//     list: [
//       { icon: faLocationDot, text: 'In-Person workshop, Edinburgh' },
//       { icon: faCalendar, text: '10 Lessons' }
//     ],
//     price: 120.0,
//     priceText: 'pw',
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     },
//     isOnly: true
//   },
//   {
//     tag: 'Coaching',
//     image: courseCard1,
//     title: 'Introduction LearnPress – LMS plugin',
//     subtitle: 'Keny White',
//     text: 'A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes & more.',
//     list: [{ icon: faCalendar, text: '0 Lessons' }],
//     price: 30.0,
//     priceText: 'incl. tax',
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   },
//   {
//     tag: 'Language Learning',
//     image: courseCard1,
//     title: 'Introduction LearnPress – LMS plugin',
//     subtitle: 'Keny White',
//     text: 'A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes & more.',
//     list: [{ icon: faCalendar, text: '15 Lessons' }],
//     isFree: true,
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   }
// ]

// const releases = [
//   {
//     tag: 'Online Business',
//     image: courseCard1,
//     title: 'How To Create In-Demand Online Courses',
//     subtitle: 'Keny White',
//     text: 'In this tutorial we will provide you with detailed instructions on how to use WordPress to create and manage your site. WordPress can be used for both simple and complex...',
//     list: [{ icon: faCalendar, text: '0 Lessons' }],
//     price: 39.0,
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   },
//   {
//     tag: 'Coaching',
//     image: courseCard1,
//     title: 'Create an LMS Website with LearnPress',
//     subtitle: 'Keny White',
//     text: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae.',
//     list: [{ icon: faCalendar, text: '0 Lessons' }],
//     price: 99.0,
//     priceOld: 159.0,
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   },
//   {
//     tag: 'Online Business',
//     image: courseCard1,
//     title: 'How To Create In-Demand Online Courses',
//     subtitle: 'Keny White',
//     text: 'In this tutorial we will provide you with detailed instructions on how to use WordPress to create and manage your site. WordPress can be used for both simple and complex...',
//     list: [{ icon: faCalendar, text: '0 Lessons' }],
//     price: 39.0,
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   },
//   {
//     tag: 'Online Business',
//     image: courseCard1,
//     title: 'How To Create In-Demand Online Courses',
//     subtitle: 'Keny White',
//     text: 'In this tutorial we will provide you with detailed instructions on how to use WordPress to create and manage your site. WordPress can be used for both simple and complex...',
//     list: [{ icon: faCalendar, text: '0 Lessons' }],
//     price: 39.0,
//     button: {
//       children: (
//         <>
//           <FontAwesomeIcon icon={faPlay} />

//           <span>Start Learning</span>
//         </>
//       )
//     }
//   }
// ]

// const testimonials = [
//   {
//     text: "LearnPress is a WordPress complete solution for creating a Learning Management System (LMS). It can help me to create courses, lessons and quizzes and manage them as easy as I want. I've learned a lot, and I highly recommend it. Thank you.",
//     name: 'Bennett Cu',
//     position: 'Front-end Developer',
//     avatar: avatar1
//   },
//   {
//     text: "LearnPress is a WordPress complete solution for creating a Learning Management System (LMS). It can help me to create courses, lessons and quizzes and manage them as easy as I want. I've learned a lot, and I highly recommend it. Thank you.",
//     name: 'Bennett Cu',
//     position: 'Front-end Developer',
//     avatar: avatar1
//   },
//   {
//     text: "LearnPress is a WordPress complete solution for creating a Learning Management System (LMS). It can help me to create courses, lessons and quizzes and manage them as easy as I want. I've learned a lot, and I highly recommend it. Thank you.",
//     name: 'Bennett Cu',
//     position: 'Front-end Developer',
//     avatar: avatar1
//   }
// ]

// const news = [
//   {
//     image: courseCard1,
//     title: 'LMS WordPress plugin',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy...',
//     list: [
//       { icon: faTag, text: 'Blog' },
//       { icon: faCalendar, text: '20/09/2022' }
//     ],
//     isListHorizontal: true,
//     link: {
//       href: '#',
//       children: (
//         <>
//           <span>Read More</span> <FontAwesomeIcon icon={faArrowRight} />
//         </>
//       )
//     }
//   },
//   {
//     image: courseCard1,
//     title: 'Admin earns scholarship',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy...',
//     list: [
//       { icon: faTag, text: 'Blog' },
//       { icon: faCalendar, text: '20/09/2022' }
//     ],
//     isListHorizontal: true,
//     link: {
//       href: '#',
//       children: (
//         <>
//           <span>Read More</span> <FontAwesomeIcon icon={faArrowRight} />
//         </>
//       )
//     }
//   },
//   {
//     image: courseCard1,
//     title: 'Forensic team earns several',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy...',
//     list: [
//       { icon: faTag, text: 'Blog' },
//       { icon: faCalendar, text: '20/09/2022' }
//     ],
//     isListHorizontal: true,
//     link: {
//       href: '#',
//       children: (
//         <>
//           <span>Read More</span> <FontAwesomeIcon icon={faArrowRight} />
//         </>
//       )
//     }
//   },
//   {
//     image: courseCard1,
//     title: 'Forensic team earns several',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy...',
//     list: [
//       { icon: faTag, text: 'Blog' },
//       { icon: faCalendar, text: '20/09/2022' }
//     ],
//     isListHorizontal: true,
//     link: {
//       href: '#',
//       children: (
//         <>
//           <span>Read More</span> <FontAwesomeIcon icon={faArrowRight} />
//         </>
//       )
//     }
//   }
// ]
