import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
    const name = ref<string | null>("will");

    return {
        name
    }
});
