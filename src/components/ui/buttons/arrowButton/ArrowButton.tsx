import React from 'react';
import Image from 'next/image';
import styles from './arrowButton.module.scss';


interface ArrowButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  buttonColor?: string;
  textColor?: string;
  arrowColor?: string;
}


const ArrowButton: React.FC<ArrowButtonProps> = ({
  title,
  onClick,
  className = '',
  buttonColor,
  textColor,
  arrowColor
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.arrowButton} ${className}`}
      style={buttonColor ? { background: buttonColor } : undefined}
    >
      <span
        className={styles.buttonText}
        style={textColor ? { color: textColor } : undefined}
      >
        {title}
      </span>
      <Image
        src="/images/arrow.svg"
        alt="Arrow"
        width={10}
        height={10}
        className={styles.arrowIcon}
        style={arrowColor ? { filter: `invert(1) sepia(1) saturate(5) hue-rotate(${arrowColor})` } : undefined}
      />
    </button>
  );
};

export default ArrowButton;
