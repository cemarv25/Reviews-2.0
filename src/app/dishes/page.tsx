import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dishes | Reviews',
  description: 'See all dishes that have been reviewed.',
};

const Dishes = () => {
  return (
    <>
      <h1>Dishes</h1>
      <p>In the dishes page</p>
    </>
  );
};

export default Dishes;
