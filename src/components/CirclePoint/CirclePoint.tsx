import clsx from "clsx";
import { TIME_LINE } from "../TimeBloks/model/constants";
import styles from './CirclePoint.module.scss'
import { useState, useEffect } from "react";

interface CirclePointProps {
  item: typeof TIME_LINE[0];
  activeIndex: number;
  onPointClick: (index: number) => void;
}

export function CirclePoint({ item, activeIndex, onPointClick }: CirclePointProps) {

 const [radius, setRadius] = useState(() => window.innerWidth > 1350 ? 265 : 225);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth > 1350 ? 265 : 225);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAngleRad = (-60 * Math.PI) / 180;

  const index = item.id -1
  const total = TIME_LINE.length;

  const angle = (index / total) * 2 * Math.PI + startAngleRad;
  const x = radius + radius * Math.cos(angle)
  const y = radius + radius * Math.sin(angle)
  const isActive = index === activeIndex;

  return (
        <div
          className={styles.circle_point}
          style={{ left: `${x}px`, top: `${y}px` }}
          onClick={() => onPointClick(index)}
        >
          <div className={clsx(styles.circle_content, isActive ? styles.activ : '')}>
            {item.id}
          </div>
          <p className={styles.title_point}>{item.title}</p>
        </div>
  )
}