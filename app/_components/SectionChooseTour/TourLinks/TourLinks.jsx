import TourCard from '../TourCard/TourCard';

import { tours } from '@/data';

import s from './TourLinks.module.scss';

const TourLinks = () => (
  <ul className={s.links}>
    {tours.map(({ name, title, price }) => (
      <li key={name} className={s.linksItem}>
        <TourCard name={name} title={title} price={price} />
      </li>
    ))}
  </ul>
);

export default TourLinks;
