<template>
  <div>
    <!-- Loader -->
    <div
      v-if="status === 'pending'"
      class="d-flex justify-content-center align-items-center"
      style="min-height: 70vh"
    >
      <div class="spinner-border text-secondary-emphasis" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Content -->
    <div v-else class="d-flex flex-column gap-5">
      <!-- First Carousel -->
      <Carousel id="carousel-1">
        <!-- Slide 1 -->
        <div class="h-100 w-100">
          <div
            class="mx-5 position-absolute top-50 translate-middle-y"
            style="width: 16rem"
          >
            <h3>SALE</h3>
            <p class="text-uppercase fw-medium">
              Access a limited Selection With Up To 70% Off
            </p>
            <button
              class="text-uppercase position-relative mt-3"
              style="width: 140px; height: 40px"
            >
              <span
                class="position-absolute top-50 translate-middle-y d-block"
                style="color: #eeeee3; left: 10px"
              >
                Shop Now
              </span>
              <img
                :src="'/icons/btn-shop-black.png'"
                style="width: 140px; height: 40px"
                alt="button"
              />
            </button>
          </div>
          <img
            :src="'/images/landing-1.jpg'"
            class="d-block w-100 h-100"
            alt="landing-page"
          />
        </div>

        <!-- Slide 2 -->
        <div class="h-100 w-100">
          <img
            :src="'/images/landing-2.jpg'"
            class="d-block w-100 h-100"
            alt="landing-page"
          />
        </div>

        <!-- Slide 3 -->
        <div class="h-100 w-100">
          <img
            :src="'/images/landing-3.jpg'"
            class="d-block w-100 h-100"
            alt="landing-page"
          />
        </div>
      </Carousel>

      <!-- Second Carousel -->
      <Carousel id="carousel-2" class="mt-4">
        <!-- Slide 1 -->
        <div class="h-100 w-100 position-relative">
          <div class="mx-5 position-absolute" style="width: 16rem; bottom: 10%">
            <button
              class="text-uppercase position-relative"
              style="width: 140px; height: 40px"
            >
              <span
                class="position-absolute text-black top-50 translate-middle-y d-block"
                style="left: 10px"
              >
                See More
              </span>
              <img
                :src="'/icons/btn-shop-white.png'"
                class="d-block w-100 h-100"
                alt="landing-page"
              />
            </button>
          </div>
          <img
            :src="'/images/landing-2.jpg'"
            class="d-block w-100 h-100"
            alt="landing-page"
          />
        </div>
      </Carousel>

      <!-- Special Offers -->
      <Section title="SPECIAL OFFERS">
        <Carousel id="carousel-3" multipleItemsPerSlide class="mt-4">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :quantity="cart.getItemQuantity(product.id)"
            @update-quantity="cart.insertOrUpdateItem"
          />
        </Carousel>
      </Section>

      <!-- Carousel 4 -->
      <Carousel id="carousel-4" class="mt-4">
        <!-- Slide 1 -->
        <div class="h-100 w-100">
          <img
            :src="'/images/landing-3.jpg'"
            class="d-block w-100 h-100"
            alt="landing-page"
          />
        </div>
      </Carousel>

      <!-- New Arrivals -->
      <Section title="New Arrivals">
        <Carousel id="carousel-5" multipleItemsPerSlide class="mt-4">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :quantity="cart.getItemQuantity(product.id)"
            @update-quantity="cart.insertOrUpdateItem"
          />
        </Carousel>
      </Section>
    </div>
  </div>
</template>

<script setup>
const cart = useCartStore();

// Fetch products with error handling
const {
  data: products,
  status,
  error,
} = useFetch("https://fakestoreapi.com/products?limit=15", {
  lazy: true,
  onRequestError({ error }) {
    console.error("Request error:", error);
  },
  // key: "products.home",
  default: () => [],
  getCachedData(key) {
    return useNuxtData(key).data.value;
  },
});
</script>

<style scoped>
/* Optional: Customize the loader */
.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.25em;
}
</style>
