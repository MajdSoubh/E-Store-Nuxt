// stores/auth.ts
import { defineStore } from "pinia";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false,
    loading: false,
  }),
  actions: {
    async login(credentials: { email: string; password: string }) {
      try {
        this.loading = true;
        // Simulated API call
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
        });

        const user = await response.json();
        this.user = user;
        this.isLoggedIn = true;
        localStorage.setItem("auth", JSON.stringify(user));
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.user = null;
      this.isLoggedIn = false;
      localStorage.removeItem("auth");
      // Redirect to home or login page
      navigateTo("/");
    },
    checkAuth() {
      const auth = localStorage.getItem("auth");
      if (auth) {
        this.user = JSON.parse(auth);
        this.isLoggedIn = true;
      }
    },
  },
});
