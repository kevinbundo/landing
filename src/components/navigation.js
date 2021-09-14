import React, { useState } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { Container, Flex, FlexAbout } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "../styles/navigationStyles"
import { Instagram, Linkedin } from "../assets/svg/social-icons"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"
import video2 from "../assets/video/shop.mp4"
import video3 from "../assets/video/3webbers.mp4"
import video4 from "../assets/video/railakey.mp4"
import video5 from "../assets/video/5ashpk.mp4"

const navRoutes = [
  {
    id: 0,
    title: "shop app",
    path: "http://kevishop.herokuapp.com/",
    video: video2,
  },
  { id: 1, title: "3 webbers", path: "https://3webbers.com/", video: video3 },
  {
    id: 2,
    title: "Raila Key",
    path: "https://www.railakey.com/",
    video: video4,
  },
  {
    id: 3,
    title: "5a shpk",
    path: "https://www.5ashpk.al/",
    video: video5,
  },
  
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  })
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <a href={`${route.path}`} target="_blank">
                        <motion.div
                          initial={{ x: -108 }}
                          className="link"
                          whileHover={{
                            x: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <FlexAbout spaceBetween>
                  <FooterContent >
                    <p>+355675167244</p>
                    
                  </FooterContent>

                  <FooterContent >
                  <p>kevin_bundo@yahoo.com</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    ><Instagram />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    ><Linkedin />
                    </a>
                  </FooterSocial>
                </FlexAbout>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      loop
                      autoPlay
                      muted
                      src={revealVideo.video}
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
