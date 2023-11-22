import { motion } from 'framer-motion';
import s from './SwiperService.module.css';
import { UseContext } from '../../../UseContext/UseContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServicesPopUp from '../ServicesPopUp/ServicesPopUp';

export default () => {
  const { data, variantsLeft, openServicesPopUp } = UseContext();
  const swiperServiceElem = data.services.info;

  return (
    <>
      <ServicesPopUp />
      <Swiper
        slidesPerView={3}
        breakpoints={{
          250: {
            width: 290,
            slidesPerView: 1,
          },
          398: {
            width: 400,
            slidesPerView: 1,
          },
          815: {
            width: 780,
            slidesPerView: 2,
          },
        }}
      >
        {swiperServiceElem.data.map((el) => (
          <SwiperSlide key={el.id}>
            <motion.div
              className={s.block}
              onClick={() => openServicesPopUp(el.id)}
            >
              <motion.img
                className={s.front_img}
                variants={variantsLeft}
                src={swiperServiceElem.src}
                alt={swiperServiceElem.alt}
              />
              <motion.h2 className={s.title} variants={variantsLeft}>
                {el.title}
              </motion.h2>
              <motion.p className={s.description} variants={variantsLeft}>
                {el.description}
              </motion.p>
              <motion.div className={s.content} variants={variantsLeft}>
                <motion.p className={s.text} variants={variantsLeft}>
                  {swiperServiceElem.text}
                </motion.p>
                <motion.img
                  className={s.arrow_img}
                  variants={variantsLeft}
                  src={swiperServiceElem.img.src}
                  alt={swiperServiceElem.img.alt}
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
