import { create } from 'zustand'

type StateMenu = {
    popap: string | null;
}
  
type Action = {
    setPopap: (state: string | null) => void
}

// Create your store, which includes both state and (optionally) actions
export const useOpenMenuStore = create<StateMenu & Action>((set) => ({
    popap: null,
    setPopap: (state: string | null) => {
        set(() => ({ popap: state }))
    },
}))
