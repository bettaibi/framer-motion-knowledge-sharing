/**  The Typography component makes it easy to apply a default set of font weights and sizes  */

import React from 'react';
import styled from 'styled-components';
import { background, borders, colors, margins, paddings } from './Common.styled';
import { BorderProps, ColorsProps, MarginProps, PaddingProps } from './styled.model';

enum variantsProps {
    VERY_SMALL = "verySmall",
    SMALL = "small",
    NORMAL_SIZE= "normalSize",
    LARGE = "large",

    HEADING1 = "heading1",
    HEADING2 = "heading2",
    HEADING3 = "heading3",
    HEADING4 = "heading4",
    HEADING5 = "heading5",
    HEADING6 = "heading6"
}

interface TypographyProps extends PaddingProps, MarginProps, BorderProps{
    variant?: `${variantsProps}`;
    weight?: 100 | 200 | 300| 400 | 500 | 600 | 700 | 800 | 'bold' | 'bolder' | 'normal';
    bg?: ColorsProps;
    textColor?: ColorsProps;
    lineHieght?: number;
    extraProps?: React.CSSProperties;
}

const variants = {
    verySmall: '12px',
    small: '14px',
    normalSize: '16px',
    large: '18px',

    heading1: '36px',
    heading2: '30px',
    heading3: '28px',
    heading4: '24px',
    heading5: '22px',
    heading6: '20px',
};

export const Typography = styled.p<TypographyProps>`
     ${paddings}
     ${margins}
     ${background}
     ${borders}
     ${colors}

     ${({lineHieght}) => lineHieght && 'line-height: ' + lineHieght + 'px;'}
     font-size: ${({ variant }) => variants[variant || 'normalSize']};
     font-weight: ${({weight}) => weight ?? 'normal'} ;

     ${({extraProps}) => extraProps && {...extraProps}}
`;