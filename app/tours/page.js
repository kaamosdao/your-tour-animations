import PageTemplate from '../_components/PageTemplate';

const Tours = () => (
  <PageTemplate
    h1="Страница Туров"
    h2="Туры"
    p={[
      'A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
      'A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.',
      'A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.',
    ]}
  />
);

export default Tours;
