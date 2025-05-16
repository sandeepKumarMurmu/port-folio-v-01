// toggleStore.ts
import { create } from 'zustand';

type ToggleState = {
    isOpen: boolean;
    toggle: () => void;
};

export const useToggleStore = create<ToggleState>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));