import React from "react"
import { Container, FlexAbout } from "../styles/globalStyles"
import { Instagram, Linkedin } from "../assets/svg/social-icons"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <FlexAbout spaceBetween>
          <FooterContent>
            <p>+355675167244</p>
            <p>kevin_bundo@yahoo.com</p>
          </FooterContent>

          <FooterContent>
            <p>Tirane</p>
            <p>Albania</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </FooterSocial>
        </FlexAbout>
      </Container>
    </FooterNav>
  )
}

export default Footer
