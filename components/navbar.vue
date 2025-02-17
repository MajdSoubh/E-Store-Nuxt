<template>
  <nav
    class="navbar navbar-expand-lg position-relative bg-body-tertiary py-2 px-3 shadow-sm"
  >
    <div class="container-fluid">
      <!-- Logo -->
      <NuxtLink class="navbar-brand p-0" to="/">
        <img
          :src="'/images/logo-black.png'"
          alt="Logo"
          class="img-fluid"
          style="width: 70px; height: 70px"
        />
      </NuxtLink>

      <!-- Hamburger Menu -->
      <ClientOnly>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </ClientOnly>

      <!-- Collapsible Content -->
      <div
        class="collapse navbar-collapse custom-navbar-position"
        id="navbarNav"
      >
        <!-- Navigation Links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
          <li class="nav-item">
            <NuxtLink
              class="nav-link text-uppercase fw-medium"
              to="/electronics"
            >
              Electronics
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-uppercase fw-medium" to="/jewelry">
              Jewelry
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link text-uppercase fw-medium"
              to="/men-clothing"
            >
              Men's
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link text-uppercase fw-medium"
              to="/women-clothing"
            >
              Women's
            </NuxtLink>
          </li>
        </ul>

        <!-- Utilities -->
        <div class="d-flex flex-column flex-lg-row align-items-center gap-3">
          <!-- Search -->
          <div class="position-relative d-none d-lg-block">
            <input
              type="text"
              class="form-control rounded-pill ps-3 pe-5"
              style="background-color: #eeeee4; height: 38px; width: 200px"
              placeholder="Search..."
            />
            <img
              :src="'/icons/search.png'"
              class="position-absolute top-50 translate-middle-y end-0 me-3"
              style="width: 20px; height: 20px"
              alt="Search"
            />
          </div>

          <!-- Icons -->
          <div class="d-flex gap-3">
            <NuxtLink class="btn btn-outline-secondary p-1">
              <img
                :src="'/icons/login.png'"
                class="img-fluid"
                style="width: 28px; height: 28px"
                alt="Login"
              />
            </NuxtLink>
            <NuxtLink class="btn btn-outline-secondary p-1 position-relative">
              <img
                :src="'/icons/heart.png'"
                class="img-fluid"
                style="width: 28px; height: 28px"
                alt="Wishlist"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill"
              >
                0
              </span>
            </NuxtLink>
            <button
              @click="toggleCart"
              class="btn btn-outline-secondary p-1 position-relative"
            >
              <img
                :src="'/icons/cart.png'"
                class="img-fluid"
                style="width: 28px; height: 28px"
                alt="Cart"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill"
              >
                {{ itemCount }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const { toggleCart, itemCount } = useCartStore();
</script>
<style scoped>
.custom-navbar-position {
  position: absolute;
  background-color: #f8f9fa;
  width: 100%;
  left: 0;
  top: 100%;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

@media (min-width: 992px) {
  .custom-navbar-position {
    position: static;
    box-shadow: none;
    background-color: transparent;
  }
}
</style>
