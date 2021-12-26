import React, { forwardRef } from 'react';
import { RootWrapper } from './SliderRoot.styles';
import { KubedNumberSize, DefaultProps } from '../../theme/index';

interface SliderRootProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  size: KubedNumberSize;
  children: React.ReactNode;
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  (
    { className, children, style, size, classNames, styles, ...others }: SliderRootProps,
    ref,
    ...rest
  ) => {
    return (
      <RootWrapper {...rest} tabIndex={-1} role="slider" ref={ref} style={styles}>
        {children}
      </RootWrapper>
    );
  }
);

SliderRoot.displayName = '@kubed/components/SliderRoot';
