import { create } from "zustand";

interface AppState {
    // Navigation
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    toggleMobileMenu: () => void;

    // UI
    isPageLoading: boolean;
    setPageLoading: (loading: boolean) => void;
}

/**
 * Global Zustand store for app-level UI state.
 * Keep this lean — only truly global state belongs here.
 * Feature-specific state should live in dedicated hooks or local state.
 */
export const useAppStore = create<AppState>((set) => ({
    // Navigation
    isMobileMenuOpen: false,
    setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
    toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

    // UI
    isPageLoading: false,
    setPageLoading: (loading) => set({ isPageLoading: loading }),
}));
