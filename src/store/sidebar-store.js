import { create } from 'zustand';

// const allowedStates = ["Home", "Task", "Inbox", "Meetings", "Calendar"];

export const useSidebarStore = create((set) => ({
    current: "Home",
    setCurrent: (newState) => {
        set({ current: newState });
    },
}));