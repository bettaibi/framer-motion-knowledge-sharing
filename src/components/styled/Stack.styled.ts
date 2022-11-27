/**
 * A Stack element is a Box with extra features. (flexbox)
 */
 import React from 'react';
import styled from 'styled-components';
 import { Box, BoxProps } from './Box.styled';
 
 type DirectionVariants = 'column' | 'row' | 'row-reverse' | 'column-reverse';
 type FlexVariants = Pick<React.CSSProperties, 'alignItems' | 'justifyContent' | 'flexWrap' | 'flexBasis' | 'flexGrow'>
 
 interface StackProps extends BoxProps, FlexVariants{
     direction?: DirectionVariants;
     gap?: number;
 }
 
 const Stack = styled(Box)<StackProps>`
     display: flex !important;
     flex-direction: ${({ direction})=> direction || 'row'};
     align-items: ${({ alignItems})=> alignItems || 'flex-start'};
     justify-content: ${({ justifyContent})=> justifyContent || 'flex-start'};
     flex-wrap: ${({ flexWrap})=> flexWrap || 'no-wrap'};
     gap: ${({ gap, theme})=> gap ? gap * theme.spacing.base : 0}px;
 `;
 
 export default Stack;