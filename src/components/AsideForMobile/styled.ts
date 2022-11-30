import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #96fffc, #d680f0, #dda8ed, #f5a7f5, rgb(255, 213, 136));
`;


export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 200px;
    padding: 32px 0;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;
    z-index: 9999;
    position: absolute;
    top: 0;
`;

export const HandlerIndicator = styled.div`
    width: 8px;
    height: 180px;
    
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    touch-action: none;
    cursor: grab;
`;