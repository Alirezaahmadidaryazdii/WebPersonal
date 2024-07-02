
import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, Path: ""},
    {icon: <FaLinkedinIn />, Path: ""},
    {icon: <FaYoutube />, Path: ""},
    {icon: <FaTwitter />, Path: ""},
]
export default function Socials({containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return <Link key={index} href={item.Path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}
