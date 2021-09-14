import React, { useEffect } from "react"
import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  return (
    <HomeContentSection
      ref={contentRef}
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
        <Content>
         I am a creative front-end developer dedicated to creating unique digital experiences.
         I create projects under the notion that less is more and my work reflects my addiction 
         for minimal and clean design as well as my desire to push boundaries.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
