import styled, {css} from 'styled-components';

interface DividerProps{
    isVertical?: boolean;
    size?: number;
    dividerColor?: string;
}

export const Divider = styled.div<DividerProps>`

    ${({isVertical, size})=> isVertical ? css`
        height: 100%;
        width: ${size ?? 1}px;
    `: css`
        height: ${size ?? 1}px;
        width: 100%;
    `}
     background-color: ${({dividerColor}) => dividerColor ?? '#EFF0F2'};
`;