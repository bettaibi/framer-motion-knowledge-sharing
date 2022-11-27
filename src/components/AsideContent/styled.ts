import styled from "styled-components";

export const Asidebar = styled.nav`
   ul{
     padding: 0;
    li{
        text-align: center;
        padding: 0;
        list-style: none;
    }
   }
   a{
        text-decoration: none;
        font-weight: 600;
    }span{
        font-size: 13px;
        font-weight: 600;
    }
    .icon{
        font-size: 20px;
        background-color: ${({theme})=> theme.palette.primary['light']};
        color: ${({theme})=> theme.palette.primary['main']};
        border-radius: 30px;
        padding: 0.5rem 0.8rem;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
        transition: all .5s ease;
        &.active{
            color: #fff;
            background-color: ${({theme})=> theme.palette.primary['main']};
        }
    }
`;
