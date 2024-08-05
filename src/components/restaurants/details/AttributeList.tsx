import { Restaurant } from '@/types/tables';
import React from 'react';

type AttributeListProps = Omit<Restaurant, 'name' | 'description' | 'grade'>;

const AttributeList = ({
  cost_avg,
  service_avg,
  taste_avg,
  place_avg,
  variety_avg,
  value_avg,
}: AttributeListProps) => {
  return (
    <ul className="flex flex-col gap-3 w-1/6">
      <li className="flex justify-between">
        <span>Cost</span>
        <span>{cost_avg}</span>
      </li>
      <li className="flex justify-between">
        <span>Service</span>
        <span>{service_avg}</span>
      </li>
      <li className="flex justify-between">
        <span>Taste</span>
        <span>{taste_avg}</span>
      </li>
      <li className="flex justify-between">
        <span>Place</span>
        <span>{place_avg}</span>
      </li>
      <li className="flex justify-between">
        <span>Variety</span>
        <span>{variety_avg}</span>
      </li>
      <li className="flex justify-between">
        <span>Value</span>
        <span>{value_avg}</span>
      </li>
    </ul>
  );
};

export default AttributeList;
