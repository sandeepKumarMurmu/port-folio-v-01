// toggleStore.ts
import { create } from 'zustand';

type ToggleState = {
    isOpen: boolean;
    toggle: () => void;
};

type ToggleLoader = {
    isLoading: boolean;
    toggleLoader: (condition: boolean) => void;
};

interface Toast {
    isToast: boolean;
    toggleToast: () => void;
}

export const useToggleStore = create<ToggleState>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useLoaderStor = create<ToggleLoader>((set) => ({
    isLoading: false,
    toggleLoader: (condition: boolean) => set(() => ({ isLoading: condition })),
}));

export const useToastStor = create<Toast>((set) => ({
    isToast: false,
    toggleToast: () => set((state) => ({ isToast: !state.isToast })),
}));