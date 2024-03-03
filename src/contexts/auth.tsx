'use client';

import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type AutContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const AuthContext = createContext<AutContextType>({
  user: null,
  loading: false,
  logout: async () => {},
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const logout = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      setUser(null);
      setLoading(false);
    } catch (e: unknown) {
      console.log('an error ocurred while logging out the user', e);
      setLoading(false);
    }
  };

  const authObject = useMemo(
    () => ({ user, setUser, loading, logout }),
    [user, loading, logout]
  );

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);

      try {
        const response = await supabase.auth.getSession();
        setUser(response.data.session?.user ?? null);
        setLoading(false);
      } catch (e: unknown) {
        console.log('an error ocurred while getting the user', e);
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={authObject}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
