'use client';

import { createRestaurant } from '@/api/data/restaurants/createRestaurant';
import { useActionState } from 'react';
import Input from '../ui/Input';
import FormCTA from './formCTA';
import { useEffect, useState } from 'react';
import Select from '../ui/Select';
import { useRouter } from 'next/navigation';

const formalities = [
  { value: 'informal', label: 'Informal' },
  { value: 'formal', label: 'Formal' },
];

const foodTypes = [
  { value: 'japanese', label: 'Japanese' },
  { value: 'american', label: 'American' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'italian', label: 'Italian' },
  { value: 'french', label: 'French' },
];

const CreateRestaurantForm = () => {
  const router = useRouter();
  const [formality, setFormality] = useState('');
  const [type, setType] = useState('');
  const [state, formAction] = useActionState(createRestaurant, { message: '' });

  useEffect(() => {
    if (state?.message === 'Restaurant created successfully!') {
      router.push('/restaurants');
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col box-border bg-content1 shadow-medium rounded-large"
    >
      <h1 className="flex w-full justify-start items-center rounded-t-large p-5">
        Create a Restaurant
      </h1>
      <fieldset className="flex w-full p-5 flex-auto flex-col h-auto gap-4">
        <Input
          type="text"
          label="Restaurant Name"
          placeholder="Ichiraku Ramen"
          labelId="name-label"
          name="name"
        />
        <Input
          type="text"
          label="Restaurant Description"
          placeholder="A casual restaurant serving the best ramen in Konoha..."
          labelId="description-label"
          name="description"
        />
        <Select
          name="formality"
          label="Restaurant formality"
          options={formalities}
          placeholder="Select a formality"
          value={formality}
          onSelectionChange={(e) => setFormality(e.target.value)}
          className="w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small"
        />
        <Select
          name="type"
          label="Food type"
          options={foodTypes}
          placeholder="Select a food type"
          value={type}
          onSelectionChange={(e) => setType(e.target.value)}
          className="w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small"
        />
      </fieldset>
      <section className="h-auto flex w-full items-center rounded-b-large p-5">
        <FormCTA text="Create" />
      </section>
    </form>
  );
};

export default CreateRestaurantForm;
