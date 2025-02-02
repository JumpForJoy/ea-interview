import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Grid from '@/components/Grid/Grid'
import Section from '@/components/Section/Section'
import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'

import { getCourse, getCourses } from '@/services/courses'
import Course from '@/pages/Course'

const CoursePage = async ({ params }) => {
  const id = (await params).id
  const course = await getCourse(id)
  const courses = await getCourses(4)

  return (
    <>
      <Course {...course} />

      <Section>
        <Title
          title="Courses you might be interested in"
          heading="h2"
          link={{
            href: '#',
            label: 'See More',
            icon: faArrowRight
          }}
        />

        <Grid cols={4}>
          {courses.map((course, index) => (
            <Card key={`card-${index}`} {...course} />
          ))}
        </Grid>
      </Section>
    </>
  )
}

export default CoursePage
