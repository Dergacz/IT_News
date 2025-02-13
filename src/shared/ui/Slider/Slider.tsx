import React, { CSSProperties } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

export const Slider = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}: SliderProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        className={styles.slider}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        style={{ '--value': ((value - min) / (max - min)) * 100 } as CSSProperties}
      />
      <div className={styles.valueDisplay}>{value}</div>
    </div>
  );
};
