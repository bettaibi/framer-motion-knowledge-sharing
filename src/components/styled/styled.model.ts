import { PaletteColor, IngredientProps } from "core/styles/styled";

export type ElevationVariants = 0 | 1 | 2 | 3;

export interface PaddingProps {
    p?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    px?: number;
    py?: number;
}

export interface MarginProps {
    m?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    mx?: number;
    my?: number;
}

export interface BorderProps {
    /** Shorthand borders */
    border?: string;
    borderBottom?: string;
    borderTop?: string;
    borderLeft?: string;
    borderRight?: string;
}


export interface ColorsProps{
    color: keyof  PaletteColor;
    ingredient?: keyof IngredientProps;
}