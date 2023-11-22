import s from './AddNewUser.module.css';
import { UseContext } from '../../../UseContext/UseContext';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import FormError from '../../ContactMe/FormRequest/FormError/FormError';

const AddNewUser = () => {
  const {
    variantsTop,
    validSrc,
    validAlt,
    validStar,
    validDescription,
    validUserName,
    validPosition,
    addNewTestimonialsData,
  } = UseContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    addNewTestimonialsData(data);
  };

  return (
    <motion.section
      className={s.section}
      animate="animate"
      initial="initial"
      variants={variantsTop}
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className={s.container}
        variants={variantsTop}
        autoComplete="off"
      >
        <motion.h4 className={s.name} variants={variantsTop}>
          Image
        </motion.h4>
        <motion.input
          {...register('src', validSrc)}
          className={s.input}
          variants={variantsTop}
          type="text"
        />
        {errors.src && <FormError message={errors.src.message} />}

        <motion.h4 className={s.name} variants={variantsTop}>
          ALT
        </motion.h4>
        <motion.input
          {...register('alt', validAlt)}
          className={s.input}
          variants={variantsTop}
          type="text"
        />
        {errors.alt && <FormError message={errors.alt.message} />}

        <motion.h4 className={s.name} variants={variantsTop}>
          Number of star
        </motion.h4>
        <motion.input
          {...register('star', validStar)}
          className={s.input}
          variants={variantsTop}
          type="number"
        />
        {errors.star && <FormError message={errors.star.message} />}

        <motion.h4 className={s.name} variants={variantsTop}>
          Description
        </motion.h4>
        <motion.textarea
          {...register('description', validDescription)}
          className={s.textarea}
          variants={variantsTop}
        />
        {errors.description && (
          <FormError message={errors.description.message} />
        )}

        <motion.h4 className={s.name} variants={variantsTop}>
          Name
        </motion.h4>
        <motion.input
          {...register('name', validUserName)}
          className={s.input}
          variants={variantsTop}
          type="text"
        />
        {errors.name && <FormError message={errors.name.message} />}

        <motion.h4 className={s.name} variants={variantsTop}>
          Position
        </motion.h4>
        <motion.input
          {...register('position', validPosition)}
          className={s.input}
          variants={variantsTop}
          type="text"
        />
        {errors.position && <FormError message={errors.position.message} />}

        <motion.input
          className={s.submit}
          variants={variantsTop}
          type="submit"
          value="Add"
        />
      </motion.form>
    </motion.section>
  );
};

export default AddNewUser;
