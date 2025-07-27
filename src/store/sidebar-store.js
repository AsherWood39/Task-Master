import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// const allowedStates = ["Home", "Task", "Inbox", "Meetings", "Calendar"];

export const useSidebarStore = create(
    persist(
        (set) => ({
            current: "Home",
            setCurrent: (newState) => {
                set({ current: newState });
            },
        }),
        {
            name: 'sidebar-storage', // 🔑 unique storage key
            storage: createJSONStorage(() => sessionStorage), // ✅ use sessionStorage
        }
    )
);