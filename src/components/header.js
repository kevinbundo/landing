import React, { useEffect, useRef } from "react"

import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"
import { Link } from "gatsby"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"
import useElementPosition from "../hooks/useElementPosition"

const Header = ({
  onCursor,
  setToggleMenu,
  toggleMenu,
  hamburgerPosition,
  setHamburgerPosition,
}) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const hamburger = useRef(null)
  const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }
  const menuHover = () => {
    onCursor("locked")
    setHamburgerPosition({ x: position.x, y: position.y +110 })
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        {
          <Flex spaceBetween noHeight>
            <Logo
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Link to="/">KE</Link>
              <span
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                onClick={toggleTheme}
              >
                V
              </span>
              <Link to="/">IN</Link>
            </Logo>
            <Menu
              ref={hamburger}
              onClick={() => setToggleMenu(!toggleMenu)}
              onMouseEnter={menuHover}
              onMouseLeave={onCursor}
            >
              <button>
                <span></span>
                <span></span>
              </button>
            </Menu>
          </Flex>
        }
      </Container>
    </HeaderNav>
  )
}

export default Header
