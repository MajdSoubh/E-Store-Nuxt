<template>
  <footer class="bg-black mt-auto text-white pt-4">
    <div class="container pt-5">
      <div class="row g-4">
        <!-- Logo Section -->
        <div class="col-6 col-md-3">
          <div
            class="d-flex flex-column align-items-center align-items-md-start gap-3"
          >
            <img
              src="/images/logo-white.png"
              alt="Logo"
              class="img-fluid"
              style="max-width: 150px"
            />
            <div class="d-flex gap-3">
              <a href="#" class="text-white text-decoration-none">
                <img
                  src="/icons/facebook.png"
                  style="width: 32px; height: 32px"
                />
              </a>
              <a href="#" class="text-white text-decoration-none">
                <img
                  src="/icons/youtube.png"
                  style="width: 32px; height: 32px"
                />
              </a>
              <a href="#" class="text-white text-decoration-none">
                <img
                  src="/icons/instagram.png"
                  style="width: 32px; height: 32px"
                />
              </a>
              <a href="#" class="text-white text-decoration-none">
                <img
                  src="/icons/twitter.png"
                  style="width: 32px; height: 32px"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Links Sections -->
        <div class="col-6 col-md-3 mt-0">
          <h5 class="text-white mb-3 fw-bold">Home</h5>
          <ul class="list-unstyled d-flex flex-column gap-2">
            <li>
              <a href="#" class="text-white text-decoration-none">About us</a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none"
                >Media center</a
              >
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-3 mt-4 mt-md-0">
          <ul class="list-unstyled d-flex flex-column gap-2">
            <li>
              <nuxtLink
                to="/categories/electornics"
                class="text-white text-decoration-none"
                >Electornics</nuxtLink
              >
            </li>
            <li>
              <nuxtLink
                to="/categories/jewelry"
                class="text-white text-decoration-none"
                >Jewelery</nuxtLink
              >
            </li>
            <li>
              <nuxtLink
                to="/categories/men-clothing"
                class="text-white text-decoration-none"
                >Men Clothing</nuxtLink
              >
            </li>
            <li>
              <nuxtLink
                to="/categories/women-clothing"
                class="text-white text-decoration-none"
                >Women Clothing</nuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="col-6 col-md-3 mt-4 mt-md-0">
          <h5 class="text-white mb-3 fw-bold">Contact us</h5>
          <div class="d-flex flex-column gap-2">
            <a href="tel:+971000000000" class="text-white text-decoration-none"
              >+971 00 000 0000</a
            >
            <a href="tel:+97100000000" class="text-white text-decoration-none"
              >+971 0 000 0000</a
            >
            <a
              href="mailto:info@sample.com"
              class="text-white text-decoration-none"
              >info@sample.com</a
            >
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-top py-2 mt-5 text-center">
        <p class="mb-0 text-white-50">
          &copy; 2024 Developer Test. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.:hover {
  color: var(--bs-primary) !important;
}
</style>
