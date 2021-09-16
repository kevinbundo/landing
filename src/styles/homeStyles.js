import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
`
export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
  @media (max-width: 1024px) {
    display: none;
  }
`
export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: 0px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
  @media (max-width: 600px) {
    color: ${(props) => props.theme.red};
    bottom: 150px;
  }
  @media (max-width: 1000px) {
    color: ${(props) => props.theme.red};
    bottom: 150px;
  }
`
export const Headline = styled(motion.span)`
  display: block;
  font-size: 18rem;
  font-weight: 900;
  line-height: 0.76;
  /* @media (max-width: 600px) {
    font-size: 3.3rem;
    margin-left: 10px;
  } */
  @media (max-width: 600px) {
    font-size: 3.7rem;
    margin-left: 10px;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 4rem;
    margin-left: 10px;
  }
`
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
`
export const Content = styled(motion.h2)`
  width: 63%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
  @media (max-width: 1000px) {
    width: 100% !important;
    margin: 10px;
    font-size: 1.3rem;
  }
`
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  margin-top: 100px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`
export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  @media (max-width: 1000px) {
    padding: 0px 20px;
  }
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;

    h4 {
      //margin to last child
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    @media (max-width: 1000px) {
      font-size: 2rem;
      line-height: 2rem;
    }
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;

      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        @media (max-width: 1000px) {
          top: 16px;
          left: -28px;
          width: 78px;
        }
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
`
export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
`
export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`
export const HomeAboutSection = styled(motion.div)`
  margin-bottom: 200px;
  @media (max-width: 650px) {
    margin-bottom: 100px;
  }
`

export const About = styled.div`
  width: 100%;
  h2 {
    width: 100%;
    font-size: 2.5rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
    @media (max-width: 650px) {
      margin-left: 15px;
      width: 100%;
    }
  }
  p {
    max-width: 500px;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
    @media (max-width: 650px) {
      margin-left: 15px;
      width: 100%;
    }
  }
`

export const Services = styled.div``

export const AccordionHeader = styled(motion.div)`
  text-transform: uppercase;
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 8px 0;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;

  span {
    width: 100%;
    margin: 8px 0;
    font-size: 1rem;
    color: ${(props) => props.theme.text} !important;
    text-transform: uppercase;
    display: block;
    font-weight: 300;
  }
`

export const HomeBannerAnim = styled(motion.div)`
  height: 550px;
  width: 100%;
  position: relative;
  display: flex;
  height: 120px;
  z-index: 99;
  align-items: center;
  margin-bottom: 0px;
  margin-left: 0;
  white-space: nowrap;
`

export const HomeBannerAnimTitle = styled(motion.h3)`
  font-size: 5rem;
  font-weight: 400;
  margin-left: 10px;
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  display: inline-block;
`
