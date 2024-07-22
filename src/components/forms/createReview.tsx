'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Combobox from '../ui/Combobox';
import { useActionState, useEffect } from 'react';
import { createReview } from '@/api/data/reviews/createReview';
import FormCTA from './formCTA';
import FormSlider from './formSlider';
import FormTextarea from './formTextArea';

type CreateReviewFormProps = {
  restaurants: string[];
};

const CreateReviewForm = ({ restaurants }: CreateReviewFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, formAction] = useActionState(createReview, {
    message: '',
    restaurantName: '',
  });
  const selectedRestaurantName = searchParams.get('restaurant');

  useEffect(() => {
    if (state && state.message === 'Review created successfully!') {
      const restaurantNameEncoded = encodeURIComponent(
        state.restaurantName ?? ''
      );
      router.push(`/restaurants/${restaurantNameEncoded}`);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="box-border flex flex-col bg-content1 shadow-medium rounded-large"
    >
      <h1 className="flex justify-start items-center p-5 rounded-t-large w-full">
        Create a Review
      </h1>
      <fieldset className="flex flex-col flex-auto gap-4 p-5 w-full h-auto">
        <Combobox
          defaultSelectedValue={selectedRestaurantName}
          values={restaurants}
          label="Restaurant"
          placeholder="Choose a restaurant"
          name="restaurant"
        />
        <FormSlider
          defaultValue={[50]}
          max={100}
          min={0}
          step={1}
          name="cost"
          id="cost"
          label="Cost"
          withLeftValue
          labelStyles="w-16"
        />
        <FormSlider
          defaultValue={[50]}
          max={100}
          min={0}
          step={1}
          name="service"
          id="service"
          label="Service"
          withLeftValue
          labelStyles="w-16"
        />
        <FormSlider
          defaultValue={[50]}
          max={100}
          min={0}
          step={1}
          name="taste"
          id="taste"
          label="Taste"
          withLeftValue
          labelStyles="w-16"
        />
        <FormSlider
          defaultValue={[50]}
          max={100}
          min={0}
          step={1}
          name="place"
          id="place"
          label="Place"
          withLeftValue
          labelStyles="w-16"
        />
        <FormSlider
          defaultValue={[50]}
          max={100}
          min={0}
          step={1}
          name="variety"
          id="variety"
          label="Variety"
          withLeftValue
          labelStyles="w-16"
        />
        <FormSlider
          defaultValue={[50]}
          max={100}
          min={0}
          step={1}
          name="value"
          id="value"
          label="Value"
          withLeftValue
          labelStyles="w-16"
        />
        <FormTextarea
          label="Comments"
          placeholder="Type your comments here :)"
          name="comment"
        />
      </fieldset>
      <section className="flex items-center p-5 rounded-b-large w-full h-auto">
        <FormCTA text="Create" />
      </section>
    </form>
  );
};

export default CreateReviewForm;
