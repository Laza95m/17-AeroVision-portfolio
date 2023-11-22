import { useForm } from 'react-hook-form';
import { UseContext } from '../../../UseContext/UseContext';
import s from './FormRequest.module.css';
import { motion } from 'framer-motion';
import FormError from './FormError/FormError';

const FormRequest = () => {
  const { variantsRight, validName, validEmail, sendTelegramMessage, data } =
    UseContext();
  const formRequestElem = data.contactMe?.form;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    sendTelegramMessage(data);
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
      variants={variantsRight}
      autoComplete="off"
    >
      <div className={s.block_one}>
        <div className={s.box}>
          <motion.input
            {...register('name', validName)}
            className={s.name}
            type="text"
            placeholder={formRequestElem?.name}
            variants={variantsRight}
          />
          {errors.name && <FormError message={errors.name.message} />}
        </div>
        <div className={s.box}>
          <motion.input
            {...register('email', validEmail)}
            className={s.email}
            type="email"
            placeholder={formRequestElem?.email}
            variants={variantsRight}
          />
          {errors.email && <FormError message={errors.email.message} />}
        </div>
      </div>
      <motion.input
        {...register('title')}
        className={s.name}
        type="text"
        placeholder={formRequestElem?.title}
        variants={variantsRight}
      />
      <motion.textarea
        {...register('description')}
        className={s.textarea}
        rows="5"
        placeholder={formRequestElem?.title}
        variants={variantsRight}
      ></motion.textarea>
      <div className={s.block_two}>
        <motion.input
          className={s.checkbox}
          type="checkbox"
          variants={variantsRight}
          required
        />
        <motion.p className={s.text} variants={variantsRight}>
          {formRequestElem?.checkbox}
        </motion.p>
      </div>
      <motion.input
        className={s.submit}
        type="submit"
        value="Request Now"
        variants={variantsRight}
      />
    </motion.form>
  );
};

export default FormRequest;
