import { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import styles from './ComparisonSlider.module.scss';

interface ComparisonSliderProps {
  imageBefore: string;
  imageAfter: string;
  dateBefore: string;
  dateAfter: string;
}

export function ComparisonSlider({ imageBefore, imageAfter, dateBefore, dateAfter }: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setPosition(pct);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    updatePosition(e.clientX);

    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePosition(ev.clientX); };
    const onUp = () => {
      dragging.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    dragging.current = true;
    updatePosition(e.touches[0].clientX);

    const onMove = (ev: TouchEvent) => { if (dragging.current) updatePosition(ev.touches[0].clientX); };
    const onEnd = () => {
      dragging.current = false;
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
  };

  return (
    <div>
      <div
        ref={containerRef}
        className={styles.container}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Before image — clipped on right */}
        <img
          src={imageBefore}
          alt={`Before: ${dateBefore}`}
          className={styles.image}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          draggable={false}
        />

        {/* After image — clipped on left */}
        <img
          src={imageAfter}
          alt={`After: ${dateAfter}`}
          className={styles.image}
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          draggable={false}
        />

        {/* Vertical divider line */}
        <div
          className={styles.sliderLine}
          style={{ left: `${position}%` }}
          role="slider"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className={styles.dates}>
        <span className={styles.date}>{dateBefore}</span>
        <span className={styles.arrow}>
          <ArrowLeftRight size={20} color="#6B7F8E" />
        </span>
        <span className={styles.date}>{dateAfter}</span>
      </div>
    </div>
  );
}
