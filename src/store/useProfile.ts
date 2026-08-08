import { create } from "zustand";

interface UserProfile {
    name: string,
    address: string
}

export const useProfileStore = create<UserProfile>((set) => ({
    name: "test",
    address: "uttara"
}));