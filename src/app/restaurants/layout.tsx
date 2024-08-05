import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurants',
  description: 'See all restaurants that have been reviewed.',
};

const RestaurantsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:px-32 lg:py-10 p-10">{children}</div>;
};

export default RestaurantsLayout;
