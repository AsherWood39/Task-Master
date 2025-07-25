import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const allowedStates = ["Home", "Task", "Inbox", "Meetings", "Calendar"];

export const useSidebarStore = create(
  persist(
    (set) => ({
      state: "Home",
      setState: (newState) => {
        if (!allowedStates.includes(newState)) {
          throw new Error(`Invalid state: ${newState}`);
        }
        set({ state: newState });
      },
    }),
    {
      name: 'sidebar-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);