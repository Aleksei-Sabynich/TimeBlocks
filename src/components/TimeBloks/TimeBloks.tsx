import { useState, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import styles from './TimeBloks.module.scss'
import { TIME_LINE } from './model/constants'
import { MySlider } from '../MySlider'
import { ArrowButton } from '../ArrowButton'
import clsx from 'clsx'

export function TimeBloks() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [years, setYears] = useState({start: TIME_LINE[0].year_start, end: TIME_LINE[0].year_end})

  const circleRef = useRef<HTMLDivElement>(null)

  const activeItem = TIME_LINE[activeIndex]

  function padZero(num: number) {
    return num < 10 ? `0${num}` : `${num}`
  }

  function changeItem(newIndex: number) {
  if (newIndex < 0 || newIndex >= TIME_LINE.length) return;

  const newItem = TIME_LINE[newIndex];

  const tl = gsap.timeline();

  const yearObj = { start: years.start, end: years.end };
  tl.to(yearObj, {
    start: newItem.year_start,
    end: newItem.year_end,
    duration: 1,
    ease: 'power3.out',
    snap: { start: 1, end: 1 },
    onUpdate: () => {
      setYears({ start: yearObj.start, end: yearObj.end });
    },
  }, 0);

 if (circleRef.current) {
  const totalPoints = TIME_LINE.length;
  const anglePerPoint = 360 / totalPoints;

  const rotateTo = -newIndex * anglePerPoint;

  tl.to(circleRef.current, {
    rotate: rotateTo,
    duration: 1.5,
    ease: 'power3.out',
    onUpdate: () => {
      const r = gsap.getProperty(circleRef.current!, "rotate");
      circleRef.current!.style.setProperty('--circle-rotate', `${r}deg`);
    },
  }, 0);
}

  setActiveIndex(newIndex);
}

  function prevItem() {
    changeItem(activeIndex - 1)
  }

  function nextItem() {
    changeItem(activeIndex + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span></span>
        <h1>Исторические даты</h1>
      </div>

      <div className={styles.years}>
        <p>{years.start}</p>
        <p>{years.end}</p>
      </div>

      <div className={styles.control}>
        <p> {padZero(activeIndex + 1)}/{padZero(TIME_LINE.length)} </p>
        <div className={styles.buttons}>
          <ArrowButton direction="left" onClick={prevItem} disabled={activeIndex === 0} />
          <ArrowButton onClick={nextItem} disabled={activeIndex === TIME_LINE.length - 1} />
        </div>
      </div>

      <div className={styles.circle} ref={circleRef}>
        {TIME_LINE.map((item, index) =>{
          const radius = 265;
          const pointSize = 6;
          const startAngleDeg = -60;
          const startAngleRad = (startAngleDeg * Math.PI) / 180;
          const angle = (index / TIME_LINE.length) * 2 * Math.PI + startAngleRad;

          const x = radius + radius * Math.cos(angle) - pointSize / 2;
          const y = radius + radius * Math.sin(angle) - pointSize / 2;
          return(
              <div
                key={item.id}
                className={clsx(styles.circle_point)}
                style={{ left: `${x}px`, top: `${y}px` }}
                onClick={() => changeItem(index)}
              >
                <div className={clsx(styles.circle_content,item.id === activeIndex + 1 ? styles.activ : '')}>
                  {item.id}
                </div>
                <p className={styles.title_point}>{item.title}</p>
              </div>
            )
          }
        )}  
      </div>
        {/* <div className={styles.swiper}>
        <MySlider events={activeItem.events} />
      </div> */}
    </div>
  )
}