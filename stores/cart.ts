// stores/cart.js (or .ts)
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    isCartOpen: false,
  }),
  getters: {
    itemCount: (state) =>
      state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
  actions: {
    addItem(product, quantity = 1) {
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
      }
    },
    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    updateItem(productId, quantity) {
      const existing = this.items.find((item) => item.id === productId);
      if (existing) {
        existing.quantity += quantity;

        if (existing.quantity === 0) this.removeItem(productId);
      }
    },
    insertOrUpdateItem(product, quantity) {
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;

        if (existing.quantity === 0) this.removeItem(product.id);
      } else if (quantity > 0) this.addItem(product, quantity);
    },
    getItemQuantity(productId) {
      const existing = this.items.find((item) => item.id === productId);
      if (existing) {
        return existing.quantity;
      }
      return 0;
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
});
