<template>
  <div>
    <!-- Carousels -->
    <div class="d-flex flex-column gap-5">
      <!-- First Carousel -->
      <Carousel id="caroused-1">
        <!-- Slide 1 -->
        <div class="h-100 w-100">
          <img
            :src="'/images/landing-3.jpg'"
            class="d-block w-100 h-100"
            alt="landing-page"
          />
        </div>
        <!-- Slide 2 -->
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

        <!-- Slide 3 -->
        <div class="h-100 w-100">
          <img
            :src="'/images/landing-2.jpg'"
            class="d-block w-100 h-100"
            alt="landing-page"
          />
        </div>
      </Carousel>

      <!-- Special Offers -->
      <Section title="SPECIAL OFFERS"
        ><Carousel id="carousel-3" multipleItemsPerSlide class="mt-4">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :quantity="cart.getItemQuantity(product.id)"
            @update-quantity="cart.insertOrUpdateItem"
          /> </Carousel
      ></Section>
      <!-- Carousel 3 -->
      <Carousel id="caroused-4" class="mt-4">
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
      <Section title=" New Arrivals">
        <Carousel id="carousel-5" multipleItemsPerSlide class="mt-4">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :quantity="cart.getItemQuantity(product.id)"
            @update-quantity="cart.insertOrUpdateItem"
          /> </Carousel
      ></Section>
    </div>
  </div>
</template>
<script setup>
const cart = useCartStore();

// Fetch products with error handling
const {
  data: products,
  pending: loading,
  error,
} = useFetch(
  "https://fakestoreapi.com/products/category/men's%20clothing?limit=15",
  {
    lazy: true,
    onRequestError({ error }) {
      console.error("Request error:", error);
    },

    // key: "products.men.clothing",
    default: () => [],
    getCachedData(key) {
      return useNuxtData(key).data.value;
    },
  }
);
</script>
