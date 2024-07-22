import { Tables } from './supabase';

export type Restaurant = Tables<'restaurants'>;
export type RestaurantReview = Tables<'restaurant_reviews'>;
