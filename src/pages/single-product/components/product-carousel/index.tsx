import { type FC, useState } from 'react';

import type SwiperCore from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { type ProductCarouselProps } from './types';

export const ProductCarousel: FC<ProductCarouselProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | undefined>(
    undefined,
  );

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((path, index) => (
          <SwiperSlide key={index}>
            <img src={`../..${path}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((path, index) => (
          <SwiperSlide key={index}>
            <img src={`../..${path}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
