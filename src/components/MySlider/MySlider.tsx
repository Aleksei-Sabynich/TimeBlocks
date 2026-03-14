import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import { useRef, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'

import styles from './MySlider.module.scss'
import { EventYear } from '../TimeBloks/model/types'
import { ArrowButton } from '../ArrowButton'
import clsx from 'clsx'

interface MySliderProps {
  events: EventYear[]
}

export function MySlider({ events }: MySliderProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <div className={styles.wrapper}>
      <ArrowButton 
        direction="left"  
        onClick={() => swiperRef.current?.slidePrev()}  
        className={clsx(styles.button_left, isBeginning ? styles.hidden : '')}
        />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={80}
        slidesPerView={3} 
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${styles.bullet}"></span>`
          },
        }}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 15 },
          500: { slidesPerView: 2, spaceBetween: 20 },    
          768: { slidesPerView: 3, spaceBetween: 40 },  
          1350: { slidesPerView: 3, spaceBetween: 80 },  
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        className={styles.slider}
      >
        {events.map((item) => (
          <SwiperSlide key={item.description}>
            <div className={styles.slide}>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowButton 
        onClick={() => swiperRef.current?.slideNext()}  
        className={clsx(styles.button_right, isEnd ? styles.hidden : '')}
        />
      <div className={styles.pagination}></div>
    </div>
  )
}