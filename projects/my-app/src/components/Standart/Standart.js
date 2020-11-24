import React from 'react';
import style from './Standart.module.scss';
import image from './image.png';
import Vector from './Vector.png';

function Standart() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info}>
          <div>
            <h2 className={style.header}>Высокие стандарты разработки</h2>
          </div>
          <div>
            <p className={style.text}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. стандартной "рыбой" для текстов на
              латинице с начала XVI века.
            </p>
            <div className={style.more}>
              <a href={''} className={style.link}>
                Подробнее о компании
              </a>
            </div>
          </div>
        </div>
        <div className={style.img}>
          <img src={image} />
        </div>
      </div>
      <div className={style.container_2}>
        <img src={Vector} />
        <div className={style.function}>
          <h1 className={style.header_2}>125</h1>
          <p className={style.text_2}>Our project</p>
        </div>
        <img src={Vector} />
        <div className={style.function}>
          <h1 className={style.header_2}>125</h1>
          <p className={style.text_2}>Our project</p>
        </div>
        <img src={Vector} />
        <div className={style.function}>
          <h1 className={style.header_2}>125</h1>
          <p className={style.text_2}>Our project</p>
        </div>
        <img src={Vector} />
        <div className={style.function}>
          <h1 className={style.header_2}>125</h1>
          <p className={style.text_2}>Our project</p>
        </div>
        <img src={Vector} />
        <div className={style.function}>
          <h1 className={style.header_2}>125</h1>
          <p className={style.text_2}>Our project</p>
        </div>
      </div>
    </div>
  );
}

export default Standart;
