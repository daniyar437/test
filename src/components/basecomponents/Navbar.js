import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { routes } from "../../routes"
import SearchDropdown from '../SearchDropdown';
import { changeTheme } from "../../reduxStore/themeChanger"
import { getSortVal } from "../../reduxStore/sortFilterStates"
import { StyledLink } from '../../styledComponents/Link';
import { Dropdown, DropdownList } from "../../styledComponents/Dropdown"
import { DarkIcon, LightIcon, MenuCloseIcon, MenuOpenIcon, MoonLogo } from '../../styledComponents/Icons';
import { NavbarContent, NavbarTitle, NavMenuIcon, ThemeChangerButton } from '../../styledComponents/NavbarStyles';

function StyledNavbar() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false)
    const { theme, user } = useSelector(state => state)

    console.log("PATHNAME",location.pathname)

    return <NavbarContent theme={theme}>
        <NavbarTitle theme={theme} >
            <StyledLink onClick={() => setClicked(false)} theme={theme} to="/"> <MoonLogo theme={theme} /> Movie</StyledLink>
        </NavbarTitle>

        <NavMenuIcon theme={theme} onClick={() => setClicked(!clicked)}>{clicked ? <MenuCloseIcon /> : <MenuOpenIcon />}</NavMenuIcon>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >
            <Dropdown theme={theme}>
                Movies
                <DropdownList theme={theme} >
                    <li>
                        <StyledLink onClick={(e) => {
                            dispatch(getSortVal(e.target.name))
                            setClicked(false)
                        }}
                            theme={theme}
                            name="vote_average.desc" to="/sort-filter/vote_average.desc">
                            Top Rated
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink onClick={(e) => {
                            dispatch(getSortVal(e.target.name))
                            setClicked(false)
                        }}
                            theme={theme}
                            name="popularity.desc" to="/sort-filter/popularity.desc">
                            Popular
                        </StyledLink>
                    </li>
                </DropdownList>
            </Dropdown>

            {
                routes.filter(item => item.isNav).map((item, index) => <li className='nav-links' key={index}>
                    <StyledLink onClick={() => setClicked(false)} theme={theme} to={item?.pathname} >
                        {item.name}
                    </StyledLink>
                </li>)
            }
            
            {
                location.pathname !== "/" && location.pathname !== "/search" && <li> <SearchDropdown clicked={setClicked} /> </li>
            }
            
        </ul>
        <ThemeChangerButton theme={theme}
            onClick={() => dispatch(changeTheme(theme))}
        >
            {
                theme === "light" ? <DarkIcon /> : <LightIcon />
            }
        </ThemeChangerButton>
    </NavbarContent>;
}

export default StyledNavbar;
