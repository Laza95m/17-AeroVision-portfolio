import s from './SwiperTestimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { UseContext } from '../../../UseContext/UseContext';
import { motion } from 'framer-motion';
import Star from './Star/Star';

export default () => {
  const { variantsLeft, testimonialsData } = UseContext();

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        683: {
          slidesPerView: 2,
        },
        1028: {
          slidesPerView: 3,
        },
        1371: {
          slidesPerView: 4,
        },
      }}
    >
      {testimonialsData.map((el) => (
        <SwiperSlide key={el.id}>
          <motion.div className={s.container} variants={variantsLeft}>
            <motion.img
              className={s.img}
              src={el.img.src}
              alt={el.img.alt}
              variants={variantsLeft}
            />
            <motion.div className={s.block} variants={variantsLeft}>
              <Star count={el.star} />
            </motion.div>
            <motion.p className={s.description} variants={variantsLeft}>
              {el.description}
            </motion.p>
            <motion.h4 className={s.name} variants={variantsLeft}>
              {el.name}
            </motion.h4>
            <motion.p className={s.position} variants={variantsLeft}>
              {el.position}
            </motion.p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
