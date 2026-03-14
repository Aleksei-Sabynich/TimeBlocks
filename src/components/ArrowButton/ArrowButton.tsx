import clsx from 'clsx'
import styles from './ArrowButton.module.scss'
import type{ ButtonHTMLAttributes } from 'react'

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: 'left' | 'right'
}

export function ArrowButton({ direction = 'right', onClick, disabled ,className}: ArrowButtonProps) {
  return (
    <button
      className={clsx(styles.button,className)}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={clsx(styles.arrow, direction === 'left' ? styles.arrow_left : '')}
      />
    </button>
  )
}