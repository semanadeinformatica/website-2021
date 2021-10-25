import React from "react"

import BasicInfo from "./basic-info"
import Carousel from "react-bootstrap/Carousel"

import BannerStyles from "../../../styles/mainpage/banner.module.css"
import Icon from "../../../images/svg/logo_sinf_comp.inline.svg"

import { useShowcaseImages } from "../../hooks/showcase-query"

const Banner = () => {
  const data = useShowcaseImages()

  return (
    <div className={BannerStyles.banner}>
      <Icon className={BannerStyles.icon} />
      <div className={BannerStyles.basic_info}>
        <BasicInfo />
      </div>
      <Carousel
        indicators={false}
        controls={false}
        fade={true}
        keyboard={false}
        pause={false}
        touch={false}
        interval={99999999999}
      >
        {data.allFile.edges.map(pic => (
          <Carousel.Item
            className={[
              BannerStyles.carouselItem,
              BannerStyles.carouselFade,
            ].join(" ")}
            key={pic.node.id}
          >
            <div
            className={BannerStyles.gradient}
            >
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner