import styled, {css} from "styled-components";


export const Dot = styled.div<{active: boolean}>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({theme})=> theme.palette.primary['main']};

    ${({active}) => active && css`
         width: 20px;
         height: 20px;
    `}
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
`;