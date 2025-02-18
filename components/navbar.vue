<template>
  <div>
    <div
      class="position-fixed backdrop-element z-2 top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
      ref="backdropElement"
      style="display: none"
      @click="closeMenu"
    ></div>
    <nav
      class="navbar position-fixed top-0 start-0 end-0 z-3 navbar-expand-lg position-relative bg-body-tertiary py-2 px-3 shadow-sm"
    >
      <div class="container-fluid">
        <!-- Logo -->
        <NuxtLink class="navbar-brand p-0" to="/">
          <img
            :src="'/images/logo-black.png'"
            alt="Logo"
            class="img-fluid"
            style="width: 4rem; height: 4rem"
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
            ref="closeBtn"
            @click="toggleMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </ClientOnly>

        <!-- Collapsible Content -->
        <div
          class="collapse navbar-collapse custom-navbar-position"
          id="navbarNav"
          ref="collapsibleContainer"
        >
          <!-- Navigation Links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
            <li class="nav-item">
              <NuxtLink
                class="nav-link text-uppercase fw-medium"
                activeClass="text-decoration-underline link-offset-2"
                to="/categories/electronics"
                @click="toggleMenu"
              >
                Electronics
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link text-uppercase fw-medium"
                activeClass="text-decoration-underline link-offset-2"
                to="/categories/jewelry"
                @click="toggleMenu"
              >
                Jewelry
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link text-uppercase fw-medium"
                activeClass="text-decoration-underline link-offset-2"
                to="/categories/men-clothing"
                @click="toggleMenu"
              >
                Men's
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link text-uppercase fw-medium"
                activeClass="text-decoration-underline link-offset-2"
                to="/categories/women-clothing"
                @click="toggleMenu"
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
                class="form-control rounded-pill transition-all search-input ps-3 pe-5"
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
              <!-- Profile Dropdown -->
              <div class="dropdown z-3">
                <button
                  class="nav-button position-relative btn btn-outline-secondary p-1 dropdown-toggle"
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    style="color: #0e0f0f87"
                    class="icon bi bi-person fs-4"
                  ></i>
                  <span
                    v-if="auth.isLoggedIn"
                    class="position-absolute bottom-0 end-0 translate-middle p-1 bg-success border border-2 border-white rounded-circle"
                  ></span>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end shadow-sm p-0 overflow-hidden mt-2"
                >
                  <template v-if="!auth.isLoggedIn">
                    <li>
                      <NuxtLink
                        class="dropdown-item d-flex align-items-center py-2 px-3"
                        to="/users/login"
                      >
                        <i class="bi bi-box-arrow-in-right me-2"></i>Login
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item d-flex align-items-center py-2 px-3"
                        to="/users/register"
                      >
                        <i class="bi bi-person-plus me-2"></i>Register
                      </NuxtLink>
                    </li>
                  </template>
                  <template v-else>
                    <li>
                      <NuxtLink
                        class="dropdown-item d-flex align-items-center"
                        to="/profile"
                      >
                        <i class="bi bi-person-circle me-2"></i>Profile
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item d-flex align-items-center"
                        to="/orders"
                      >
                        <i class="bi bi-bag-check me-2"></i>Orders
                      </NuxtLink>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <button
                        class="dropdown-item text-danger d-flex align-items-center"
                        @click="auth.logout()"
                      >
                        <i class="bi bi-box-arrow-left me-2"></i>Logout
                      </button>
                    </li>
                  </template>
                </ul>
              </div>

              <button
                class="nav-button p-1 position-relative"
                @click="toggleMenu"
              >
                <i class="icon bi bi-heart fs-5" style="color: #0e0f0f87"></i>
                <span
                  v-if="false"
                  class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill"
                >
                  0
                </span>
              </button>
              <button
                @click="
                  () => {
                    cart.toggleCart();
                    toggleMenu();
                  }
                "
                class="nav-button p-1 position-relative"
              >
                <i class="fs-5 icon bi bi-bag" style="color: #0e0f0f87"></i>
                <span
                  v-if="cart.itemCount !== 0"
                  class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill"
                >
                  {{ cart.itemCount }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
const cart = useCartStore();
const auth = useAuthStore();

const backdropElement = ref(null);
let bsCollapse = null;

// Initialize Bootstrap collapse
onMounted(() => {
  auth.checkAuth();
  const collapseElement = document.getElementById("navbarNav");
  bsCollapse = new bootstrap.Collapse(collapseElement, {
    toggle: false,
  });

  collapseElement.addEventListener("show.bs.collapse", () => {
    backdropElement.value.style.display = "block";
  });

  collapseElement.addEventListener("hide.bs.collapse", () => {
    backdropElement.value.style.display = "none";
  });
});

const toggleMenu = () => {
  bsCollapse.toggle();
};

const closeMenu = () => {
  bsCollapse.hide();
};
</script>
<style scoped>
/* Smooth transition for the navbar collapse */

.collapse.show {
  height: 235px;
}
.custom-navbar-position {
  position: absolute;
  background-color: #f8f9fa;
  width: 100%;
  left: 0;
  top: 100%;
  z-index: 199;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: height 0.3s ease-in-out;
}

@media (min-width: 992px) {
  .custom-navbar-position {
    position: static;
    box-shadow: none;
    height: 80px !important;
    background-color: transparent;
  }
  .backdrop-element {
    display: none !important;
  }
}
.navbar-toggler:focus {
  box-shadow: none !important;
}

.close-navbar-toggler.collapsed {
  z-index: -1 !important;
}
#profileDropdown::after {
  display: none;
}

.search-input:focus {
  box-shadow: 0 0 0 0.16rem #eeeee4;
  outline: none;
  border: 1px solid #dee2e6;
}
.nav-button {
  border: 1px solid #0e0f0f87;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  border-radius: 0.6rem;
  justify-content: center;
}
.nav-button:hover {
  background-color: #5e5e592e;
}
.nav-button:focus {
  background-color: #5e5e592e;
}
</style>
