/**
 * Styled a reusable Box. Basic Properties.
 * Usually, a Box element plays the role of a Container or Wrapper.
 */
 import styled from 'styled-components';
 import { BorderProps, ColorsProps, MarginProps, PaddingProps, ElevationVariants } from './styled.model';
 import { background, borders, colors, elevations, margins, paddings } from './Common.styled';
 
 type BoxCssVariants = Pick<React.CSSProperties, 'position' | 'display' | 'width' | 'height'| 'flex' | 'top' | 'bottom' | 'left' | 'right' | 'overflow' | 'overflowX'>;

 export interface BoxProps extends PaddingProps, MarginProps, BorderProps, BoxCssVariants{
     bg?: ColorsProps;
     textColor?: ColorsProps;

     elevation?: ElevationVariants;
     zIndex?: number;
     radius?: string;
     outline?: string;
     textAlign?: 'center' | 'right' | 'left';
     condition?: any;
 }
 
 export const Box = styled.div<BoxProps>`
     ${paddings}
     ${margins}
     ${background}
     ${borders}
     ${colors}
     ${elevations}
     ${({ width }) => width && 'width: ' + width + ';'}
     ${({ height }) => height && 'height: ' + height + ';'}
     ${({ display }) => display && 'display: ' + display + ';'}
     ${({ radius }) => radius && 'border-radius: ' + radius + ';'}
     ${({ position }) => position && 'position: ' + position + ';'}
     ${({ top }) => top && 'top: ' + top + ';'}
     ${({ bottom }) => bottom && 'bottom: ' + bottom + ';'}
     ${({ left }) => left && 'left: ' + left + ';'}
     ${({ right }) => right && 'right: ' + right + ';'}
     ${({ zIndex }) => zIndex && 'z-index: ' + zIndex + ';'}
     ${({ textAlign }) => textAlign && 'text-align:' + textAlign + ';'}
     ${({ flex }) => flex && 'flex:' + flex + ';'}
     ${({ overflow }) => overflow && 'overflow:' + overflow + ';'}
     ${({ overflowX }) => overflowX && 'overflowX:' + overflowX + ';'}
     ${({ outline }) => outline && 'outline:' + outline + ';'}

  
     ${({condition}) => condition && condition}
 `;