import clsx from "clsx";
import { TIME_LINE } from "../TimeBloks/model/constants";
import styles from './CirclePoint.module.scss'

interface CirclePointProps {
  item: typeof TIME_LINE[0];
  index: number;
  total: number;
  activeIndex: number;
  onPointClick: (index: number) => void;
}

export function CirclePoint({ item, index, total, activeIndex, onPointClick }: CirclePointProps) {
  const radius = 265;
  const pointSize = 6;
  const startAngleRad = (-60 * Math.PI) / 180;

  const angle = (index / total) * 2 * Math.PI + startAngleRad;
  const x = radius + radius * Math.cos(angle) - pointSize / 2;
  const y = radius + radius * Math.sin(angle) - pointSize / 2;

  const isActive = index === activeIndex;

  return (
        <div
          key={item.id}
          className={clsx(styles.circle_point)}
          style={{ left: `${x}px`, top: `${y}px` }}
          onClick={() => onPointClick(index)}
        >
          <div className={clsx(styles.circle_content,item.id === activeIndex + 1 ? styles.activ : '')}>
            {item.id}
          </div>
          <p className={styles.title_point}>{item.title}</p>
        </div>
  )
}