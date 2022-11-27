import { css } from 'styled-components';
import { BoxProps } from './Box.styled';
import {
	BorderProps,
	MarginProps,
	PaddingProps,
} from './styled.model';

/* Paddings */
export const paddings = css<PaddingProps>`
	${({ p, theme }) => p && 'padding: ' + p * theme.spacing.base + 'px;'}
	${({ pt, theme }) =>
		pt && 'padding-top: ' + pt * theme.spacing.base + 'px;'}
    ${({ pb, theme }) =>
		pb && 'padding-bottom: ' + pb * theme.spacing.base + 'px;'}
    ${({ pl, theme }) =>
		pl && 'padding-left: ' + pl * theme.spacing.base + 'px;'}
    ${({ pr, theme }) =>
		pr && 'padding-right: ' + pr * theme.spacing.base + 'px;'}
    ${({ px, theme }) =>
		px &&
		'padding-left: ' +
			px * theme.spacing.base +
			'px; padding-right:' +
			px * theme.spacing.base +
			'px;'}
    ${({ py, theme }) =>
		py &&
		'padding-top: ' +
			py * theme.spacing.base +
			'px; padding-bottom: ' +
			py * theme.spacing.base +
			'px;'}
`;

/* Margins */
export const margins = css<MarginProps>`
	${({ m, theme }) => m && 'margin: ' + m * theme.spacing.base + 'px;'}
	${({ mt, theme }) => mt && 'margin-top: ' + mt * theme.spacing.base + 'px;'}
    ${({ mb, theme }) =>
		mb && 'margin-bottom: ' + mb * theme.spacing.base + 'px;'}
    ${({ ml, theme }) =>
		ml && 'margin-left: ' + ml * theme.spacing.base + 'px;'}
    ${({ mr, theme }) =>
		mr && 'margin-right: ' + mr * theme.spacing.base + 'px;'}
    ${({ mx, theme }) =>
		mx &&
		'margin-left: ' +
			mx * theme.spacing.base +
			'px; margin-right:' +
			mx * theme.spacing.base +
			'px;'}
    ${({ my, theme }) =>
		my &&
		'margin-top: ' +
			my * theme.spacing.base +
			'px; margin-bottom: ' +
			my * theme.spacing.base +
			'px;'}
`;

/** Borders */
export const borders = css<BorderProps>`
	${({ border }) => border && 'border:' + border + ';'}
	${({ borderBottom }) =>
		borderBottom && 'border-bottom:' + borderBottom + ';'}
   ${({ borderTop }) => borderTop && 'border-top:' + borderTop + ';'}
   ${({ borderLeft }) => borderLeft && 'border-left:' + borderLeft + ';'}
   ${({ borderRight }) => borderRight && 'border-right:' + borderRight + ';'}
`;
/** Background */
export const background = css<Pick<BoxProps, 'bg'>>`
	${({bg, theme}) => bg && 'background-color:' + theme.palette[bg.color][bg.ingredient || 'main'] + ';'}
	${({bg, theme}) => bg && theme.palette[bg.color]['textColor'] && 
	'color:' + theme.palette[bg.color]['textColor'] + ';'}
`;

/** Colors */
export const colors = css<Pick<BoxProps, 'textColor'>>`
	${({textColor, theme}) => textColor ? 'color:' + theme.palette[textColor.color][textColor.ingredient || 'main'] + ';'
										: 'color:' + theme.palette['gray']['800'] + ';'}
`;

/* Elevation */
export const elevations = css<Pick<BoxProps, 'elevation'>>`
	${({ elevation }) =>
		elevation === 1
			? 'box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);'
			: elevation === 2
			? 'box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);'
			: elevation === 3
			? 'box-shadow: 0 1rem 3rem rgba(0,0,0,.175);'
			: 'box-shadow: none;'}
`;