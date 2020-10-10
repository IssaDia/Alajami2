import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel () {
  const photos = [
    {
      name: 'Photo 1',
      url: 'https://423841.smushcdn.com/884745/wp-content/uploads/2018/11/mousshaf-Saint-Coran.jpg?size=662x337&lossy=1&strip=1&webp=1'
    }, {
      name: 'Photo 2',
      url: 'https://www.al-hamdoulillah.com/blog/images/non-le-coronavirus-covid-19-nest-pas-cite-dans-le-coran.webp'
    }, {
      name: 'Photo 3',
      url: 'http://www.slate.fr/sites/default/files/styles/1060x523/public/coran_3.jpg'
    }
  ]
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <Slider {...settings}>
        {photos.map((photo, index) => {
          return (
            <div key={index} className='w-full h-full m-0'>
              <img src={photo.url} />
            </div>
          )
        })}
      </Slider>
    </>
  )
}
