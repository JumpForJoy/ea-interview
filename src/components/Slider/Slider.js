'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'

import styles from './Slider.module.css'

const SliderNav = ({ id, isPrev }) => (
  <button
    className={`${styles.slider_nav} ${isPrev ? styles.slider_prev : styles.slider_next}`}
    type="button"
    id={id}
  >
    {isPrev ? (
      <FontAwesomeIcon icon={faArrowLeft} />
    ) : (
      <FontAwesomeIcon icon={faArrowRight} />
    )}
  </button>
)

const Slider = ({
  id,
  options = {},
  slides,
  showNavigation,
  showPagination
}) => {
  const modules = []

  if (showNavigation) {
    modules.push(Navigation)
  }
  if (showPagination) {
    modules.push(Pagination)
  }

  const idPrev = `slider-prev-${id}`
  const idNext = `slider-next-${id}`
  const idPagination = `slider-pagination-${id}`

  return (
    <div className={styles.slider}>
      <Swiper
        {...options}
        navigation={{
          prevEl: `#${idPrev}`,
          nextEl: `#${idNext}`
        }}
        pagination={{
          el: `#${idPagination}`,
          clickable: true
        }}
        modules={modules}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {showPagination && (
        <div id={idPagination} className={styles.slider_pagination}></div>
      )}

      {showNavigation && (
        <>
          <SliderNav id={idPrev} isPrev={true} />

          <SliderNav id={idNext} />
        </>
      )}
    </div>
  )
}

export default Slider
