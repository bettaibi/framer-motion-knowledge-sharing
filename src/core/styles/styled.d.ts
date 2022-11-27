 import 'styled-components';
 import { Theme } from './themes';
 
 export interface IngredientProps {
     main: string;
     light?: string;
     dark?: string;
     textColor?: string;
 
     '100'?: string;
     '200'?: string;
     '300'?: string;
     '400'?: string;
     '500'?: string;
     '600'?: string;
     '700'?: string;
     '800'?: string;
 }
 
 export type PaletteColor = {
     primary: IngredientProps;
     secondary: IngredientProps;
     success: IngredientProps;
     accent: IngredientProps;
     danger: IngredientProps;
     yellow: IngredientProps;
 
     gray: IngredientProps;
     white: IngredientProps;
 };
 
 declare module 'styled-components' {
     export interface DefaultTheme {
         palette: PaletteColor,
 
         spacing: {
             base: number
         },
     
         typography: {
             fontSize: number
         },
         breakpoints?: {
             values: {
                 xs: number,
                 sm: number,
                 md: number,
                 lg: number,
                 xl: number,
             },
         },
     }
 };