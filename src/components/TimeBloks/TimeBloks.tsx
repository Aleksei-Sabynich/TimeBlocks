import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './TimeBloks.module.scss';
import { TIME_LINE } from './model/constants';
import { ArrowButton } from '../ArrowButton';
import { padZero } from '../../utils/padZero';
import { Circle } from '../Circle';
import { MySlider } from '../MySlider';

export function TimeBloks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [years, setYears] = useState({ start: TIME_LINE[0].year_start, end: TIME_LINE[0].year_end});

  const circleRef = useRef<HTMLDivElement | null>(null);

function animateChange(newIndex: number) {
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

  const prevItem = () => animateChange(activeIndex - 1);
  const nextItem = () => animateChange(activeIndex + 1);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span></span>
        <h1>Исторические даты</h1>
      </div>

      <div className={styles.years}>
        <p className={styles.years_start}>{years.start}</p>
        <p className={styles.years_end}>{years.end}</p>
        <Circle
          circleRef={circleRef}
          activeIndex={activeIndex}
          onChange={animateChange}
        />
      </div>

      <div className={styles.control}>
        <p>{padZero(activeIndex + 1)}/{padZero(TIME_LINE.length)}</p>
        <div className={styles.buttons}>
          <ArrowButton onClick={prevItem} disabled={activeIndex === 0}  direction="left"/>
          <ArrowButton onClick={nextItem} disabled={activeIndex === TIME_LINE.length - 1} />
        </div>
      </div>

      <MySlider  key={activeIndex} events={TIME_LINE[activeIndex].events} />
    </div>
  );
}