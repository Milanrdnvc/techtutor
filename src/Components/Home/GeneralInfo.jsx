import { useRef } from 'react';
import { animatePara } from '../../helpers';
import '../../CSS/GeneralInfo.css';

function GeneralInfo({ title, desc, img, png }) {
  const para = useRef(null);

  window.addEventListener('scroll', () => {
    if (para.current) animatePara(para.current);
  });

  return (
    <div className="general-info" data-png={png}>
      <div className="general-info__text">
        <h2 className="general-info__title">{title}</h2>
        <p className="general-info__desc" ref={para}>
          {desc}
        </p>
      </div>
      <img src={img} alt="mascot" className="general-info__mascot-picture" />
    </div>
  );
}

export default GeneralInfo;
