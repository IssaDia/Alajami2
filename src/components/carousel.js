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
    dots: true,
    infinite: true,
    speed: 800
  }
  return (
    <div className='flex flex flex-row'>
      <div className=''>
        <Slider {...settings}>
          {photos.map((photo, index) => {
            return (
              <div key={index}>
                <img className='w-full h-64' src={photo.url} />
              </div>
            )
          })}
        </Slider>
      </div>
      <div className='w-4/12 h-auto mx-6'>
    1
      </div>
    </div>
  )
}
