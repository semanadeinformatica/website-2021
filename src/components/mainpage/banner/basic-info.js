import React from "react"
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import BannerStyles from "../../../styles/mainpage/banner.module.css"

const links = [
  {
    icon: <AiOutlineFacebook />,
    href: "https://facebook.com/sinfFEUP",
  },
  {
    icon: <AiOutlineInstagram />,
    href: "https://instagram.com/sinffeup",
  },
  {
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/company/sinffeup/",
  },
]

const BasicInfo = () => {
  return (
    <div className={BannerStyles.info}>
      <p>4ª EDIÇÃO</p>
      <p>15 A 17 DE NOVEMBRO</p>
      <div className={BannerStyles.icon_links}>
        {links.map(({ icon, href }, index) => (
          <a href={href} className={BannerStyles.icon_link} key={index}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default BasicInfo
