import clsx from 'clsx'
import styles from './ArrowButton.module.scss'

interface ArrowButtonProps {
  direction?: 'left' | 'right'
  onClick?: () => void
  disabled?: boolean
}

export function ArrowButton({ direction = 'right', onClick, disabled }: ArrowButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={clsx(styles.arrow, direction === 'left' ? styles.arrow_left : '')}
      />
    </button>
  )
}