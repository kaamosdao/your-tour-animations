import cn from 'classnames';

import s from './SectionPhotos.module.scss';

const SectionPhotos = () => (
  <section className={s.photos}>
    <h2 className={s.title}>Фотографии путешествий</h2>
    <p className={s.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и место обучения кадров
    </p>
    <ul className={s.list}>
      <li className={cn(s.item, s.itemAirplane)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/airplane-desktop-lg.webp    1x,
              /img/photos/airplane-desktop-lg@2x.webp 2x
            "
            width="442"
            height="300"
          />
          <source
            type="image/webp"
            media="(min-width: 500px)"
            srcSet="
              /img/photos/airplane-desktop-md.webp    1x,
              /img/photos/airplane-desktop-md@2x.webp 2x
            "
            width="314"
            height="300"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/airplane-mobile.webp    1x,
              /img/photos/airplane-mobile@2x.webp 2x
            "
            width="150"
            height="110"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/airplane-desktop-lg.png    1x,
              /img/photos/airplane-desktop-lg@2x.png 2x
            "
            width="442"
            height="300"
          />
          <source
            media="(min-width: 500px)"
            srcSet="
              /img/photos/airplane-desktop-md.png    1x,
              /img/photos/airplane-desktop-md@2x.png 2x
            "
            width="314"
            height="300"
          />
          <img
            src="/img/photos/airplane-mobile.png"
            srcSet="/img/photos/airplane-mobile@2x.png 2x"
            alt="Самолет в небе"
            width="150"
            height="110"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemCanyon)}>
        <picture>
          <source
            type="image/webp"
            srcSet="
              /img/photos/canyon-desktop-lg.webp    1x,
              /img/photos/canyon-desktop-lg@2x.webp 2x
            "
            width="442"
            height="301"
          />
          <img
            src="/img/photos/canyon-desktop-lg.png"
            srcSet="/img/photos/canyon-desktop-lg@2x.png 2x"
            alt="Палатка в каньоне."
            width="442"
            height="301"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemSunset)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/sunset-desktop-lg.webp    1x,
              /img/photos/sunset-desktop-lg@2x.webp 2x
            "
            width="442"
            height="301"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/sunset-desktop-md.webp    1x,
              /img/photos/sunset-desktop-md@2x.webp 2x
            "
            width="314"
            height="301"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/sunset-desktop-lg.png    1x,
              /img/photos/sunset-desktop-lg@2x.png 2x
            "
            width="442"
            height="301"
          />
          <img
            src="/img/photos/sunset-desktop-md.png"
            srcSet="/img/photos/sunset-desktop-md@2x.png 2x"
            alt="Закат в горах."
            width="314"
            height="301"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemRoad)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/road-desktop-lg.webp    1x,
              /img/photos/road-desktop-lg@2x.webp 2x
            "
            width="442"
            height="300"
          />
          <source
            type="image/webp"
            media="(min-width: 500px)"
            srcSet="
              /img/photos/road-desktop-md.webp    1x,
              /img/photos/road-desktop-md@2x.webp 2x
            "
            width="314"
            height="300"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/road-mobile.webp    1x,
              /img/photos/road-mobile@2x.webp 2x
            "
            width="150"
            height="110"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/road-desktop-lg.png    1x,
              /img/photos/road-desktop-lg@2x.png 2x
            "
            width="442"
            height="300"
          />
          <source
            media="(min-width: 500px)"
            srcSet="
              /img/photos/road-desktop-md.png    1x,
              /img/photos/road-desktop-md@2x.png 2x
            "
            width="314"
            height="300"
          />
          <img
            src="/img/photos/road-mobile.png"
            srcSet="/img/photos/road-mobile@2x.png 2x"
            alt="Туманная дорога в горах"
            width="150"
            height="110"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemCliff)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/cliff-desktop-lg.webp    1x,
              /img/photos/cliff-desktop-lg@2x.webp 2x
            "
            width="349"
            height="301"
          />
          <source
            type="image/webp"
            media="(min-width: 500px)"
            srcSet="
              /img/photos/cliff-desktop-md.webp    1x,
              /img/photos/cliff-desktop-md@2x.webp 2x
            "
            width="231"
            height="301"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/cliff-mobile.webp    1x,
              /img/photos/cliff-mobile@2x.webp 2x
            "
            width="99"
            height="110"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/cliff-desktop-lg.png    1x,
              /img/photos/cliff-desktop-lg@2x.png 2x
            "
            width="349"
            height="301"
          />
          <source
            media="(min-width: 500px)"
            srcSet="
              /img/photos/cliff-desktop-md.png    1x,
              /img/photos/cliff-desktop-md@2x.png 2x
            "
            width="231"
            height="301"
          />
          <img
            src="/img/photos/cliff-mobile.png"
            srcSet="/img/photos/cliff-mobile@2x.png 2x"
            alt="Люди на утесе"
            width="99"
            height="110"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemMap)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/map-desktop-lg.webp    1x,
              /img/photos/map-desktop-lg@2x.webp 2x
            "
            width="347"
            height="301"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/map-desktop-md.webp    1x,
              /img/photos/map-desktop-md@2x.webp 2x
            "
            width="231"
            height="301"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/map-desktop-lg.png    1x,
              /img/photos/map-desktop-lg@2x.png 2x
            "
            width="347"
            height="301"
          />
          <img
            src="/img/photos/map-desktop-md.png"
            srcSet="/img/photos/map-desktop-md@2x.png 2x"
            alt="Рука указывает на карту"
            width="231"
            height="301"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemBridge)}>
        <picture>
          <source
            type="image/webp"
            srcSet="
              /img/photos/bridge-desktop-lg.webp    1x,
              /img/photos/bridge-desktop-lg@2x.webp 2x
            "
            width="347"
            height="301"
          />
          <img
            src="/img/photos/bridge-desktop-lg.png"
            srcSet="/img/photos/bridge-desktop-lg@2x.png 2x"
            alt="Мост в лесу"
            width="347"
            height="301"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemCar)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/car-desktop-lg.webp    1x,
              /img/photos/car-desktop-lg@2x.webp 2x
            "
            width="347"
            height="301"
          />
          <source
            type="image/webp"
            media="(min-width: 500px)"
            srcSet="
              /img/photos/car-desktop-md.webp    1x,
              /img/photos/car-desktop-md@2x.webp 2x
            "
            width="231"
            height="301"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/car-mobile.webp    1x,
              /img/photos/car-mobile@2x.webp 2x
            "
            width="99"
            height="110"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/car-desktop-lg.png    1x,
              /img/photos/car-desktop-lg@2x.png 2x
            "
            width="347"
            height="301"
          />
          <source
            media="(min-width: 500px)"
            srcSet="
              /img/photos/car-desktop-md.png    1x,
              /img/photos/car-desktop-md@2x.png 2x
            "
            width="231"
            height="301"
          />
          <img
            src="/img/photos/car-mobile.png"
            srcSet="/img/photos/car-mobile@2x.png 2x"
            alt="Машина с палаткой у воды"
            width="99"
            height="110"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemStreet)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/street-desktop-lg.webp    1x,
              /img/photos/street-desktop-lg@2x.webp 2x
            "
            width="348"
            height="301"
          />
          <source
            type="image/webp"
            media="(min-width: 500px)"
            srcSet="
              /img/photos/street-desktop-md.webp    1x,
              /img/photos/street-desktop-md@2x.webp 2x
            "
            width="231"
            height="301"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/street-mobile.webp    1x,
              /img/photos/street-mobile@2x.webp 2x
            "
            width="99"
            height="110"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/street-desktop-lg.png    1x,
              /img/photos/street-desktop-lg@2x.png 2x
            "
            width="348"
            height="301"
          />
          <source
            media="(min-width: 500px)"
            srcSet="
              /img/photos/street-desktop-md.png    1x,
              /img/photos/street-desktop-md@2x.png 2x
            "
            width="231"
            height="301"
          />
          <img
            src="/img/photos/street-mobile.png"
            srcSet="/img/photos/street-mobile@2x.png 2x"
            alt="Пустая улица"
            width="99"
            height="110"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemHouses)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/houses-desktop-lg.webp    1x,
              /img/photos/houses-desktop-lg@2x.webp 2x
            "
            width="442"
            height="300"
          />
          <source
            type="image/webp"
            media="(min-width: 500px)"
            srcSet="
              /img/photos/houses-desktop-md.webp    1x,
              /img/photos/houses-desktop-md@2x.webp 2x
            "
            width="314"
            height="300"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/houses-mobile.webp    1x,
              /img/photos/houses-mobile@2x.webp 2x
            "
            width="154"
            height="110"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/houses-desktop-lg.png    1x,
              /img/photos/houses-desktop-lg@2x.png 2x
            "
            width="442"
            height="300"
          />
          <source
            media="(min-width: 500px)"
            srcSet="
              /img/photos/houses-desktop-md.png    1x,
              /img/photos/houses-desktop-md@2x.png 2x
            "
            width="314"
            height="300"
          />
          <img
            src="/img/photos/houses-mobile.png"
            srcSet="/img/photos/houses-mobile@2x.png 2x"
            alt="Дома на улице"
            width="154"
            height="110"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemLake)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/lake-desktop-lg.webp    1x,
              /img/photos/lake-desktop-lg@2x.webp 2x
            "
            width="442"
            height="300"
          />
          <source
            type="image/webp"
            media="(min-width: 500px)"
            srcSet="
              /img/photos/lake-desktop-md.webp    1x,
              /img/photos/lake-desktop-md@2x.webp 2x
            "
            width="314"
            height="300"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/lake-mobile.webp    1x,
              /img/photos/lake-mobile@2x.webp 2x
            "
            width="154"
            height="110"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/lake-desktop-lg.png    1x,
              /img/photos/lake-desktop-lg@2x.png 2x
            "
            width="442"
            height="300"
          />
          <source
            media="(min-width: 500px)"
            srcSet="
              /img/photos/lake-desktop-md.png    1x,
              /img/photos/lake-desktop-md@2x.png 2x
            "
            width="314"
            height="300"
          />
          <img
            src="/img/photos/lake-mobile.png"
            srcSet="/img/photos/lake-mobile@2x.png 2x"
            alt="Озеро в горах"
            width="154"
            height="110"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemTown)}>
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/town-desktop-lg.webp    1x,
              /img/photos/town-desktop-lg@2x.webp 2x
            "
            width="442"
            height="300"
          />
          <source
            type="image/webp"
            srcSet="
              /img/photos/town-desktop-md.webp    1x,
              /img/photos/town-desktop-md@2x.webp 2x
            "
            width="314"
            height="300"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="
              /img/photos/town-desktop-lg.png    1x,
              /img/photos/town-desktop-lg@2x.png 2x
            "
            width="442"
            height="300"
          />
          <img
            src="/img/photos/town-desktop-md.png"
            srcSet="/img/photos/town-desktop-md@2x.png 2x"
            alt="Оживленная улица"
            width="314"
            height="300"
            loading="lazy"
          />
        </picture>
      </li>
      <li className={cn(s.item, s.itemSupboard)}>
        <picture>
          <source
            type="image/webp"
            srcSet="
              /img/photos/supboard-desktop-lg.webp    1x,
              /img/photos/supboard-desktop-lg@2x.webp 2x
            "
            width="442"
            height="300"
          />
          <img
            src="/img/photos/supboard-desktop-lg.png"
            srcSet="/img/photos/supboard-desktop-lg@2x.png 2x"
            alt="SUP борд на воде"
            width="442"
            height="300"
            loading="lazy"
          />
        </picture>
      </li>
    </ul>
  </section>
);

export default SectionPhotos;
