<template>
  <div>
    <!-- Backdrop for contrast effect -->
    <transition name="fade">
      <div
        v-if="cart.isCartOpen"
        class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        style="z-index: 199"
        @click="cart.toggleCart"
      ></div>
    </transition>

    <!-- Slide Transition for the Cart -->
    <transition name="slide">
      <div
        v-if="cart.isCartOpen"
        id="cartMenu"
        class="cart-menu d-flex flex-column"
      >
        <!-- Header: Title + Close Button -->
        <div class="d-flex justify-content-between align-items-center py-2">
          <div class="h5 mb-0 text-dark">Shopping Cart</div>
          <button
            @click="cart.toggleCart"
            class="btn btn-link text-primary p-0"
          >
            <i
              class="bi bi-x"
              style="font-size: 1.6rem; color: cornflowerblue"
            ></i>
          </button>
        </div>

        <!-- Cart Content -->
        <div
          class="flex-grow-1 overflow-auto"
          style="-ms-overflow-style: none; scrollbar-width: none"
        >
          <!-- No Items -->
          <div
            v-if="cart.items.length === 0"
            class="d-flex h-100 align-items-center justify-content-center"
          >
            <p class="text-muted">Your cart is empty.</p>
          </div>
          <!-- Iterate over items -->
          <div v-else class="d-flex flex-column gap-3 w-100">
            <div
              v-for="item in cart.items"
              :key="item.id"
              class="d-flex align-items-center justify-content-center w-100 gap-2"
            >
              <!-- Product Image -->
              <div
                class="flex-shrink-0 border rounded overflow-hidden"
                style="width: 6rem; height: 6rem"
              >
                <img
                  :src="item.image"
                  class="img-fluid object-fit-contain h-100 w-100"
                />
              </div>

              <!-- Product Details -->
              <div class="ms-3 flex-grow-1 d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start">
                  <h6 class="mb-0">{{ item.title }}</h6>
                  <p class="ms-3 fw-semibold">${{ item.price }}</p>
                </div>

                <!-- Quantity & Actions -->
                <div
                  class="d-flex justify-content-between align-items-center mt-2 text-muted"
                >
                  <p class="mb-0">Qty {{ item.quantity }}</p>

                  <div class="d-flex gap-2">
                    <!-- Increase Quantity Button -->
                    <button
                      type="button"
                      class="border border-black rounded-3 bg-transparent p-1"
                      @click="cart.updateItem(item.id, 1)"
                    >
                      <i class="icon bi bi-plus" style="font-size: 1.2rem"></i>
                    </button>

                    <!-- Decrease Quantity Button -->
                    <button
                      type="button"
                      class="border border-black rounded-3 bg-transparent p-1"
                      @click="cart.updateItem(item.id, -1)"
                    >
                      <i class="icon bi bi-dash" style="font-size: 1.2rem"></i>
                    </button>

                    <!-- Remove Item Button -->
                    <button
                      type="button"
                      class="border border-black rounded-3 bg-transparent p-1"
                      @click="cart.removeItem(item.id)"
                    >
                      <i class="icon bi bi-x" style="font-size: 1.2rem"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-top py-3 px-2 mt-auto">
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold">Subtotal</p>
            <p class="fw-bold">${{ cart.totalPrice }}</p>
          </div>
          <p class="mt-1">Shipping and taxes calculated at checkout.</p>
          <button
            @click="handleCheckout"
            class="mt-3 w-100 d-flex align-items-center justify-content-center rounded-3 border-0"
            style="
              padding: 0.7rem 1rem;
              background-color: #cbcbb0;
              color: white;
            "
          >
            Checkout
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const cart = useCartStore();
</script>

<style scoped>
.cart-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 24rem;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, width 0.3s ease;
  z-index: 200;
}

/* Hide scrollbar */
.cart-menu .overflow-auto::-webkit-scrollbar {
  display: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cart-menu {
    width: 100vw;
  }
}

/* SLIDE IN/OUT TRANSITION */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}

/* FADE TRANSITION FOR BACKDROP */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
