import React from 'react';
import { DefaultProps, KubedNumberSize } from '../../theme/index';
import { Marks } from '../Marks/Mark';

import { TrackWrapper, BarWrapper } from './Track.styles';

interface TrackProps extends DefaultProps {
  filled: number;
  offset: number;
  marks: { value: number; label?: React.ReactNode }[];
  size: KubedNumberSize;
  radius: KubedNumberSize;
  min: number;
  max: number;
  value: number;
  disabled: boolean;
  children: React.ReactNode;
  onChange(value: number): void;
  onMouseEnter?(event?: React.MouseEvent<HTMLDivElement>): void;
  onMouseLeave?(event?: React.MouseEvent<HTMLDivElement>): void;
}

export function Track({
  filled,
  size,
  classNames,
  styles,
  disabled,
  radius,
  children,
  offset,
  onMouseLeave,
  onMouseEnter,
  ...others
}: TrackProps) {
  return (
    <TrackWrapper
      size={size}
      disabled={disabled}
      className="track-demo"
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <BarWrapper
        size={size}
        disabled={disabled}
        className="track-bar"
        style={{ left: `${offset}%`, width: `${filled}%`, position: 'absolute' }}
      />
      {children}
      <Marks {...others} size={size} offset={offset} classNames={classNames} styles={styles} />
    </TrackWrapper>
  );
}

Track.displayName = '@kubed/components/SliderTrack';
