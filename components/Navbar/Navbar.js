import React, { useState } from 'react';
import { GiHamburger } from 'react-icons/gi';
import { FaTimesCircle } from 'react-icons/fa';
import {NavContainer} from "../../globalstyle"
import { NavLink, NonHomeViewLinks, MobileBurger, StyledSvg, MobileMenuContainer, MobileNavBurgerWrapper, MobileNavLinkWrapper } from './Navbar.elements';
import Link from 'next/link';
import styled from 'styled-components'


const NavMainWrapper = styled.div`
     display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`

const Navbar = ({ isOpen, mobile }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }
    return (
        <>
            {menuOpen ?
                <>
                    {/* Mobile menu is Open */}
                    <MobileMenuContainer isOpen>
                        <MobileNavBurgerWrapper>
                            <MobileBurger href='' onClick={handleNavClick}>
                                <FaTimesCircle />
                            </MobileBurger>
                        </MobileNavBurgerWrapper>
                        <MobileNavLinkWrapper>

                            <Link href='/' passHref>
                                <NavLink mobile onClick={handleNavClick}>Link</NavLink>
                            </Link>
                            <Link href='/' passHref>
                                <NavLink mobile onClick={handleNavClick}>Link</NavLink>
                            </Link>
                            <Link href='/' passHref>
                                <NavLink mobile onClick={handleNavClick}>Link</NavLink>
                            </Link>
                            <Link href='/' passHref>
                                <NavLink mobile onClick={handleNavClick}>Link</NavLink>
                            </Link>
                        </MobileNavLinkWrapper>
                    </MobileMenuContainer>
                    <NavContainer>
                        <Link href='/' passHref>
                            <NavLink>Sam Dunne</NavLink>
                        </Link>
                        <MobileBurger onClick={handleNavClick}  ><GiHamburger ></GiHamburger></MobileBurger>
                        <NonHomeViewLinks>
                        </NonHomeViewLinks>
                    </NavContainer>
                
                </>
                :
                // Mobile menu is closed
                <>
                    <MobileMenuContainer href='' onClick={handleNavClick}><FaTimesCircle /></MobileMenuContainer>
                    <NavContainer>
                        <NavMainWrapper>
                            <Link href='/' passHref>
                                <NavLink>Sam Dunne</NavLink>
                            </Link>
                            {/* Hamburger Icon */}
                            <MobileBurger href='' onClick={handleNavClick} ><GiHamburger ></GiHamburger></MobileBurger>
                            <NonHomeViewLinks>

                                <Link href='/' passHref>
                                    <NavLink>Link</NavLink>
                                </Link>
                                <Link href='/' passHref>
                                    <NavLink>Link</NavLink>
                                </Link>
                                <Link href='/' passHref>
                                    <NavLink>Link</NavLink>
                                </Link>
                            </NonHomeViewLinks>
                        </NavMainWrapper>
                        
                    </NavContainer>
                </>
            }
        </>
    )
}

export default Navbar
