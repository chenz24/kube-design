import React from 'react';
import cx from 'classnames';
import { KubedNumberSize, DefaultProps } from '../../theme/index';
import { isMarkFilled } from '../utils/isMarkFilled';

import { MarkLabel, Mark } from './Marks.style';

export interface MarksProps extends DefaultProps {
  marks: { value: number; label?: React.ReactNode; weight?: number }[];
  size: KubedNumberSize;
  min: number;
  max: number;
  value: number;
  onChange(value: number): void;
  offset?: number;
}

export function Marks({ marks, value, classNames, offset, onChange }: MarksProps) {
  let usedWeight = 0;
  const totalWeight = marks.reduce((prev, cur) => prev + (cur.weight || 1), 0) - 1;
  const items = marks.map((mark, index) => {
    const weight = mark.weight || 1;
    usedWeight += weight;
    const percent = ((usedWeight - weight) * 100) / totalWeight;
    return (
      <div style={{ left: `${percent}%`, position: 'absolute', top: 0 }} key={index}>
        <Mark
          className={cx(classNames, {
            'mark-filled': isMarkFilled({ mark, value, offset }),
          })}
        />
        {mark.label && (
          <MarkLabel
            onMouseDown={(event) => {
              event.stopPropagation();
              onChange(mark.value);
            }}
            onTouchStart={(event) => {
              event.stopPropagation();
              onChange(mark.value);
            }}
          >
            {mark.label}
          </MarkLabel>
        )}
      </div>
    );
  });

  return <div>{items}</div>;
}

Marks.displayName = '@kubed/components/SliderMarks';
