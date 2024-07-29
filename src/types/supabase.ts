export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      restaurant_reviews: {
        Row: {
          comment: string | null;
          cost: number | null;
          created_at: string | null;
          id: string;
          place: number | null;
          restaurantId: string;
          service: number | null;
          taste: number | null;
          title: string;
          value: number | null;
          variety: number | null;
        };
        Insert: {
          comment?: string | null;
          cost?: number | null;
          created_at?: string | null;
          id?: string;
          place?: number | null;
          restaurantId: string;
          service?: number | null;
          taste?: number | null;
          title?: string;
          value?: number | null;
          variety?: number | null;
        };
        Update: {
          comment?: string | null;
          cost?: number | null;
          created_at?: string | null;
          id?: string;
          place?: number | null;
          restaurantId?: string;
          service?: number | null;
          taste?: number | null;
          title?: string;
          value?: number | null;
          variety?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'restaurant_reviews_restaurantId_fkey';
            columns: ['restaurantId'];
            isOneToOne: false;
            referencedRelation: 'restaurants';
            referencedColumns: ['id'];
          }
        ];
      };
      restaurants: {
        Row: {
          cost_avg: number | null;
          created_at: string | null;
          description: string;
          food_type: string | null;
          formality: string;
          grade: number | null;
          id: string;
          location: Json | null;
          name: string;
          place_avg: number | null;
          service_avg: number | null;
          taste_avg: number | null;
          value_avg: number | null;
          variety_avg: number | null;
        };
        Insert: {
          cost_avg?: number | null;
          created_at?: string | null;
          description?: string;
          food_type?: string | null;
          formality?: string;
          grade?: number | null;
          id?: string;
          location?: Json | null;
          name: string;
          place_avg?: number | null;
          service_avg?: number | null;
          taste_avg?: number | null;
          value_avg?: number | null;
          variety_avg?: number | null;
        };
        Update: {
          cost_avg?: number | null;
          created_at?: string | null;
          description?: string;
          food_type?: string | null;
          formality?: string;
          grade?: number | null;
          id?: string;
          location?: Json | null;
          name?: string;
          place_avg?: number | null;
          service_avg?: number | null;
          taste_avg?: number | null;
          value_avg?: number | null;
          variety_avg?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
