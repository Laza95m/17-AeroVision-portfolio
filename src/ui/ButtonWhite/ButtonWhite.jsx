import s from './ButtonWhite.module.css';

const ButtonWhite = ({ name, img, selectSkill, el }) => {
  if (el === undefined && selectSkill === undefined) {
    el = null;
  }

  const isActive = el === selectSkill ? `${s.btn} ${s.active}` : s.btn;

  return (
    <button className={isActive}>
      {name}
      {img && <img src={img} alt={`${img} broken`} />}
    </button>
  );
};

export default ButtonWhite;
