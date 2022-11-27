import { DefaultTheme } from "styled-components";
import Palette from "./palette";

export const themes: DefaultTheme = {

	palette: {
		primary: {
			main: Palette.primary,
			light: Palette.light,
		},
		secondary: {
			main: Palette.secondary,
		},
        success: {
			main: Palette.success,
		},
        accent: {
			main: Palette.purple1,
			light: Palette.purple2,
			dark: Palette.purple3
		},
		danger: {
			main: Palette.red2,
			light: Palette.red1,
			dark: Palette.red3,
		},
		yellow: {
			main: Palette.yellow2,
			light: Palette.yellow1,
			dark: Palette.yellow3
		},
		gray: {
			main: Palette.gray4,
			"100": Palette.gray1,
			"200": Palette.gray2,
			"300": Palette.gray3,
			"400": Palette.gray4,
			"500": Palette.gray5,
			"600": Palette.gray6,
			"700": Palette.gray7,
			"800": Palette.gray8,
		},
		white:{
			main: Palette.white
		}
	},

	spacing: {
		base: 8
	},

	typography: {
		fontSize: 16
	}
};

export const themeColors = themes.palette;