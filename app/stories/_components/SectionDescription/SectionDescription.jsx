import s from './SectionDescription.module.scss';

const SectionDescription = () => (
  <div className="Истории">
    <section className={s.sectionDescription}>
      <div className={s.tagline}>
        <h2 className={s.title}>Истории</h2>
        <p className={s.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={s.description}>
          Nostrum sed eaque eligendi aspernatur ab fugiat rerum, adipisci
          voluptas cumque facere?
        </p>
        <p className={s.description}>
          Ut facilis reiciendis fugit sed facere! Voluptates maxime minima
          fugiat.
        </p>
      </div>
    </section>
  </div>
);

export default SectionDescription;
