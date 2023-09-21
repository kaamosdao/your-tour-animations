import PageTemplate from '../_components/PageTemplate';

const Stories = ({ transitionStatus, isVisible }) => (
  <PageTemplate
    transitionStatus={transitionStatus}
    isVisible={isVisible}
    h1="Страница Историй"
    h2="Истории"
    p={[
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Nostrum sed eaque eligendi aspernatur ab fugiat rerum, adipisci voluptas cumque facere?',
      'Ut facilis reiciendis fugit sed facere! Voluptates maxime minima fugiat.',
    ]}
  />
);

export default Stories;
