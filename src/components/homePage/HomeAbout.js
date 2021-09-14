import React, { useState, useEffect } from "react"
import { Container, FlexAbout } from "../../styles/globalStyles"
import { motion, useAnimation } from "framer-motion"
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
} from "../../styles/homeStyles"
import { useGlobalStateContext } from "../../context/globalContext"
import { useInView } from "react-intersection-observer"

const accordionIds = [
  {
    id: 0,
    title: "Javascript",
    results: [
      "Vanilla",
      "React js",
      "Node js",
      "Express js",
      "Jquery",
      "Next js",
      
    ],
  },
  {
    id: 1,
    title: "Database",
    results: ["MYSQL", "Mongo db", "Heidi sql"],
  },
  {
    id: 2,
    title: "Languages",
    results: ["Javascript", "Html", "Css", "Php"],
  },
  {
    id: 3,
    title: "Frameworks",
    results: ["Laravel", "Next js", "Nest js", "Express js",],
  },
  {
    id: 4,
    title: "Other",
    results: [
      "Framer Motion",
      "Animation",
      "Wordpress",
      "Gatsby js",
      "Webpack",
      "Git",
      "Gsap",
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <FlexAbout alignTop>
          <About>
            <h2>A frontend developer</h2>
            <p>
              I think understanding the human experience is essential for
              creating useful and effective products that make life easier. I
              enjoy using my skill-set to empower people to accomplish their
              goals. I love practical learning I and taking on new challenges
              and side projects. I am alwayse looking for new project, don't be
              shy to contact me if you think we could create something great
              together.
            </p>
          </About>
          <Services>
            {/* <h3>Services</h3> */}
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </FlexAbout>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{
          color: currentTheme === "dark" ? "#ffffff" : "#000000",
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
