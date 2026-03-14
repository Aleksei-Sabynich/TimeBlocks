import { TIME_LINE } from "../TimeBloks/model/constants";
import styles from './Circle.module.scss';
import { CirclePoint } from "../CirclePoint";

interface CircleProps {
  activeIndex: number;
  onChange: (index: number) => void;
 circleRef: React.RefObject<HTMLDivElement | null>
}

export function Circle({ activeIndex, onChange, circleRef }: CircleProps) {
  return (
    <div className={styles.circle} ref={circleRef}>
      {TIME_LINE.map((item) => (
        <CirclePoint
          key={item.id}
          item={item}
          activeIndex={activeIndex}
          onPointClick={onChange}
        />
      ))}
    </div>
  );
}