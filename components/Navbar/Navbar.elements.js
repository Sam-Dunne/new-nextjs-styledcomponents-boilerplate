import Image from 'next/image';
import { device } from '../../device';
import { theme } from '../../pallette'
import styled from 'styled-components';



export const NavLink = styled.a`
    text-decoration: none;
    padding: 0 0;
    margin: ${props => props.mobile ? '0 0 50px 0' : '0'};
    color: ${theme.white};
    font-size: 1.5rem;
    font-weight: 500;

    @media ${device.tablet} {  
      padding: 0 20px;   
      font-size: 2.3rem;
    }
    
    @media ${device.laptop} {  
      padding: 0 20px;   
      font-size: 1.3rem;
    }

    &:hover{
        text-decoration: underline;
        text-decoration-color: #fafafa;
    }
`;

export const NonHomeViewLinks = styled.div`
    display: none;

    @media ${device.laptop} {  
      display: block;  
    }
`;

export const MobileBurger = styled.a`
    color: #fafafa;
    font-size: 2rem;
    height: 30px;
    width: fit-content;

    @media ${device.mobileL} {
        font-size: 2.3rem;
    }

    @media ${device.laptop}{
        display: none;
    }
`;

export const StyledSvg = styled.svg`
    /* display: block; */
    width: 100%;
    height: fit-content; 
`;

//mobile nav elements
export const MobileMenuContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${theme.mediumDark};
    position: fixed;
    padding: 3rem;
    top: ${props => props.isOpen ? '0' : '-200vh'};
    left: ${props => props.isOpen ? '0' : '-200vw'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    z-index: 9999;

    transition:
       top 500ms ease-out,
       opacity 1000ms ease, 
       left 500ms ease-out;

    @media ${device.mobileL} {
        padding: 5rem;
    }
`;
export const Icon = styled(Image)`
 
    @media ${device.mobileL} {
        
    }
`;


export const MobileNavBurgerWrapper = styled.div`
    display: flex;
    justify-content: end;
`;

export const MobileNavLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 70px 0 0 0;
`;