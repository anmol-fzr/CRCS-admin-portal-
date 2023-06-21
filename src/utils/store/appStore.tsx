import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import UserI from '../../shared/interface';

export const useAppStore = create(
  persist(
    (set, get) => ({
      users: [],
      setUser: (user: UserI) => {
        set((store: any) => ({ users: [...store.users, user] }));
      },

      isLogin: false,
      setLogin: (value: boolean) => set({ isLogin: value }),
      currUser: {},
      setCurrUser: (user: UserI) => {
        set({ currUser: user });
      },
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
