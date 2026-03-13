import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import { useRef, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'

import styles from './MySlider.module.scss'
import { EventYear } from '../TimeBloks/model/types'
import { ArrowButton } from '../ArrowButton'

interface MySliderProps {
  events: EventYear[]
}

export function MySlider({ events }: MySliderProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <div className={styles.wrapper}>
      <ArrowButton direction="left"  onClick={() => swiperRef.current?.slidePrev()} />
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
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
      <ArrowButton onClick={() => swiperRef.current?.slideNext()} />
    </div>
  )
}