import React from 'react'
import BannerBottom from './BannerBottom'


const Banner = () => {
  return (
    <div className="w-full h-auto md:h-[650px] relative" >
        <div  className="w-full h-auto md:h-[650px] object-cover">
      <img src='/bannerImgOne.jpg'></img>
      </div>
      <div className='pt-40'>
      <BannerBottom />
      </div>
    </div>
  )
}

export default Banner
