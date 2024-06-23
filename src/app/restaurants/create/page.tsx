'use server';

import CreateRestaurantForm from '@/components/forms/createRestaurant';

const CreateRestaurant = async () => {
  return (
    <div className="p-10 lg:px-32 lg:py-10">
      <CreateRestaurantForm />
    </div>
  );
};

export default CreateRestaurant;
