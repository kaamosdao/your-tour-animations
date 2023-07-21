import s from './SectionDescription.module.scss';

const SectionDescription = () => (
  <section className={s.sectionDescription}>
    <div className={s.tagline}>
      <h2 className={s.title}>Туры</h2>
      <p className={s.description}>
        A robot may not injure a human being or, through inaction, allow a human
        being to come to harm.
      </p>
      <p className={s.description}>
        A robot must obey the orders given it by human beings except where such
        orders would conflict with the First Law.
      </p>
      <p className={s.description}>
        A robot must protect its own existence as long as such protection does
        not conflict with the First or Second Law.
      </p>
      <p className={s.description}>(c)</p>
    </div>
  </section>
);

export default SectionDescription;
