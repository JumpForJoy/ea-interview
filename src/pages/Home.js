import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Section from '@/components/Section/Section'
import Grid from '@/components/Grid/Grid'
import Title from '@/components/Title/Title'
import Intro from '@/components/Intro/Intro'
import Logos from '@/components/Logos/Logos'
import Slider from '@/components/Slider/Slider'
import Card from '@/components/Card/Card'
import Tile from '@/components/Tile/Tile'
import Extra from '@/components/Extra/Extra'
import Testimonial from '@/components/Testimonial/Testimonial'
import Banner from '@/components/Banner/Banner'

import { getCourses, getCategories } from '@/services/courses'
import { getPosts } from '@/services/posts'

import image from '@/styles/assets/temp/intro-1.webp'
import logo1 from '@/styles/assets/temp/logo-1.webp'
import logo2 from '@/styles/assets/temp/logo-2.webp'
import logo3 from '@/styles/assets/temp/logo-3.webp'
import logo4 from '@/styles/assets/temp/logo-4.webp'
import logo5 from '@/styles/assets/temp/logo-5.webp'
import logo6 from '@/styles/assets/temp/logo-6.webp'
import avatar1 from '@/styles/assets/temp/avatar.jpg'
import banner1 from '@/styles/assets/temp/banner1.webp'
import banner2 from '@/styles/assets/temp/banner2.webp'

const testimonials = [
  {
    text: "LearnPress is a WordPress complete solution for creating a Learning Management System (LMS). It can help me to create courses, lessons and quizzes and manage them as easy as I want. I've learned a lot, and I highly recommend it. Thank you.",
    name: 'Bennett Cu',
    position: 'Front-end Developer',
    avatar: avatar1
  },
  {
    text: "LearnPress is a WordPress complete solution for creating a Learning Management System (LMS). It can help me to create courses, lessons and quizzes and manage them as easy as I want. I've learned a lot, and I highly recommend it. Thank you.",
    name: 'Bennett Cu',
    position: 'Front-end Developer',
    avatar: avatar1
  },
  {
    text: "LearnPress is a WordPress complete solution for creating a Learning Management System (LMS). It can help me to create courses, lessons and quizzes and manage them as easy as I want. I've learned a lot, and I highly recommend it. Thank you.",
    name: 'Bennett Cu',
    position: 'Front-end Developer',
    avatar: avatar1
  }
]

const Home = async () => {
  const courses = await getCourses(5)
  const categories = await getCategories()
  const news = await getPosts(5)

  return (
    <>
      <Section>
        <Intro
          image={image}
          actions={[
            { href: '#', children: 'Create Your Free Account' },
            { href: '#', children: 'View Courses', isInverse: true }
          ]}
        >
          <h1>
            First Education Theme For <strong>Marketplace</strong>
          </h1>

          <p>
            This will be the best place for anyone to sell courses online, with
            all the necessary eCommerce features. This is Eduma - Education
            WordPress Theme.
          </p>
        </Intro>
      </Section>

      <Section>
        <h5 className="text--center">MORE THAN 1,300 CUSTOMERS TRUST EDUMA</h5>

        <Logos logos={[logo1, logo2, logo3, logo4, logo5, logo6, logo1]} />
      </Section>

      <Section>
        <Title
          title={
            <>
              <strong>Popular</strong> Courses
            </>
          }
          link={{
            href: '#',
            label: 'See More',
            icon: faArrowRight
          }}
        />

        <Slider
          id="slider-courses"
          options={{
            spaceBetween: 30,
            slidesPerView: 4,
            loop: true
          }}
          slides={courses.map((course, index) => {
            return <Card key={`card-${index}`} {...course} />
          })}
          showNavigation
          showPagination
        />
      </Section>

      <Section>
        <Title
          title={
            <>
              <strong>Outstanding</strong> Categories
            </>
          }
          link={{
            href: '#',
            label: 'See More',
            icon: faArrowRight
          }}
        />

        <Grid cols={3}>
          {categories.map((category, index) => (
            <Tile key={`category-tile-${index}`} {...category} />
          ))}
        </Grid>
      </Section>

      <Section>
        <Title
          title={
            <>
              <strong>New</strong> Release
            </>
          }
          link={{
            href: '#',
            label: 'See More',
            icon: faArrowRight
          }}
        />

        <Slider
          id="slider-releases"
          options={{
            spaceBetween: 30,
            slidesPerView: 3,
            loop: true
          }}
          slides={courses.map((release, index) => (
            <Card key={`release-${index}`} {...release} />
          ))}
          showNavigation
        />
      </Section>

      <Section isCenter bgColor="grey">
        <Title
          title={
            <>
              What to expect from a <strong>Eduma courses?</strong>
            </>
          }
        />

        <Grid cols={3}>
          <Extra
            title="Highly Experienced"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          />

          <Extra
            title="Question, Quiz & Course"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          />

          <Extra
            title="Dedicated Support"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          />

          <Extra
            title="Highly Experienced"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          />

          <Extra
            title="Question, Quiz & Course"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          />

          <Extra
            title="Dedicated Support"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          />
        </Grid>
      </Section>

      <Section>
        <Slider
          id="slider-testimonials"
          options={{
            slidesPerView: 1,
            loop: true
          }}
          slides={testimonials.map((testimonial, index) => (
            <Testimonial key={`testimonial-${index}`} {...testimonial} />
          ))}
          showNavigation
          showPagination
        />
      </Section>

      <Banner
        image={banner1}
        title="Online Learning Now In Your Fingertips"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ..."
        showApps
      />

      <Section>
        <Title
          title={
            <>
              <strong>Upcoming</strong> Events
            </>
          }
          subtitle="Upcoming Education Events to feed your brain."
          link={{
            href: '#',
            label: 'See More',
            icon: faArrowRight
          }}
        />

        <Slider
          id="slider-events"
          options={{
            spaceBetween: 30,
            slidesPerView: 3,
            loop: true
          }}
          slides={courses.map((course, index) => (
            <Card key={`card-${index}`} {...course} />
          ))}
          showNavigation
          showPagination
        />
      </Section>

      <Section>
        <Title
          title={
            <>
              <strong>Latest</strong> News
            </>
          }
          link={{
            href: '#',
            label: 'See More',
            icon: faArrowRight
          }}
        />

        <Slider
          id="slider-news"
          options={{
            spaceBetween: 30,
            slidesPerView: 3,
            loop: true
          }}
          slides={news.map((newsItem, index) => (
            <Card key={`card-${index}`} {...newsItem} />
          ))}
          showPagination
        />
      </Section>

      <Banner
        image={banner2}
        title={
          <>
            Become One Of <strong>1000+</strong> <br />
            Eduma’s Instructors
          </>
        }
        text="Become an instructor and change lives — including your own"
        color="grey"
        buttons={[{ href: '#', children: 'Get Started' }]}
        useH1Size
      />
    </>
  )
}

export default Home
