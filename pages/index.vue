<template>
  <!-- Carousels -->
  <div class="d-flex flex-column gap-5">
    <Carousel id="caroused-1">
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
            class="text-uppercase position-relative"
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
    <Carousel id="caroused-2" class="mt-4">
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

    <div>
      <!-- Special Offers -->
      <h2 class="uppercase ms-4 mt-4">SPECIAL OFFERS</h2>
      <Carousel id="carousel-3" multipleItemsPerSlide class="mt-4">
        <!-- Loop through products array -->
        <div
          v-for="product in products"
          :key="product.id"
          class="card rounded-3 shadow-sm"
          style="width: 250px"
        >
          <!-- Image container -->
          <div class="ratio ratio-1x1">
            <img
              :src="product.image"
              class="card-img-top object-fit-contain h-100"
              :alt="product.title"
            />
          </div>
          <!-- Card body -->
          <div class="card-body d-flex flex-column p-2">
            <h5 class="card-title fs-6 fw-bold mb-2">{{ product.title }}</h5>
            <p class="card-text text-truncate-2 text-muted small mb-2">
              Premium quality {{ product.title.toLowerCase() }} for any
              occasion.
            </p>
            <div class="d-flex align-items-center mb-2">
              <span class="text-warning small">★★★★☆</span>
              <span class="text-muted small ms-2">(4.2)</span>
            </div>
            <div
              class="mt-auto d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                <span class="fs-5 fw-bold text-dark">${{ product.price }}</span>
                <span class="text-muted text-decoration-line-through ms-2"
                  >${{ product.price + 20 }}</span
                >
              </div>
              <!-- Quantity controls -->
              <div class="d-flex align-items-center">
                <button
                  style="background-color: #eeeee4"
                  class="btn rounded-circle text-white btn-sm p-1"
                  @click="cart.insertOrUpdateItem(product, -1)"
                >
                  <i
                    class="bi bi-dash d-flex align-items-center justify-content-center"
                  ></i>
                </button>
                <span class="mx-2 fw-bold">{{
                  cart.getItemQuantity(product.id)
                }}</span>
                <button
                  style="background-color: #eeeee4"
                  class="btn rounded-circle btn-sm p-1"
                  @click="cart.insertOrUpdateItem(product, 1)"
                >
                  <i
                    class="bi bi-plus d-flex align-items-center justify-content-center"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
const cart = useCartStore();
const products = [
  {
    id: 1,
    price: 200,
    title: "Watch",
    quantity: 3,
    image: "/images/headphone-1.jpg",
  },
  {
    id: 2,
    price: 49.88,
    title: "Stylish Handbag",
    quantity: 5,
    image: "/images/bag-1.jpg",
  },
  {
    id: 3,
    price: 99.99,
    title: "Premium Headphones",
    quantity: 2,
    image: "/images/headphone-1.jpg",
  },
  {
    id: 4,
    price: 79.99,
    title: "Running Shoes",
    quantity: 4,
    image: "/images/shoes-1.png",
  },
  {
    id: 5,
    price: 89.99,
    title: "Casual Shoes",
    quantity: 1,
    image: "/images/shoes-2.png",
  },
];
</script>
