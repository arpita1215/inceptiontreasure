import React from 'react'
import InstaIcon from '../images/insta.svg'
import FacebookIcon from '../images/fb.svg'
import LinkedIn from '../images/linkedin.svg'
import Github from '../images/github.svg'

const Social = () => {


  return (
    <div className='social-icons'>
    <a href="https://www.instagram.com/aman_sah_1016/" rel='norefer' ><img src={InstaIcon} alt="" /></a>
    <a href="https://m.facebook.com/aman.sah.397948?ref=bookmarks" ><img src={FacebookIcon} alt="" /></a>
    <a href="https://www.linkedin.com/in/aman-kr-poddar-7ab5bb202/" ><img src={LinkedIn} alt="" /></a>
    <a href="https://github.com/Am10aN16" ><img src={Github} alt="" /></a>
        
       
       
    </div>
  )
}

export default Social;