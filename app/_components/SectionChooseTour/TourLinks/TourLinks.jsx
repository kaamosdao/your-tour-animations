import TourCard from '../TourCard/TourCard';

import s from './TourLinks.module.scss';

const TourLinks = () => (
  <ul className={s.links}>
    <li className={s.linksItem}>
      <TourCard name="car" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={s.linksItem}>
      <TourCard name="sand" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={s.linksItem}>
      <TourCard name="fjord" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={s.linksItem}>
      <TourCard
        name="street"
        title="Путешествие в горы"
        price="от 80 000 руб"
      />
    </li>
    <li className={s.linksItem}>
      <TourCard name="beach" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
    <li className={s.linksItem}>
      <TourCard name="lake" title="Путешествие в горы" price="от 80 000 руб" />
    </li>
  </ul>
);

export default TourLinks;
