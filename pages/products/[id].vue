<template>
  <div class="container py-5">
    <!-- Loading State -->
    <div v-if="status === 'pending'" class="product-skeleton">
      <div class="row g-5">
        <!-- Image Skeleton -->
        <div class="col-lg-6">
          <div class="card placeholder-glow border-0">
            <div class="ratio ratio-1x1">
              <div class="card-img-top placeholder" style="height: 500px"></div>
            </div>
          </div>
        </div>

        <!-- Content Skeleton -->
        <div class="col-lg-6">
          <div class="d-flex flex-column h-100 gap-4">
            <!-- Breadcrumb Skeleton -->
            <nav aria-hidden="true">
              <div class="breadcrumb">
                <span class="placeholder col-3"></span>
                <span class="placeholder col-2"></span>
                <span class="placeholder col-4"></span>
              </div>
            </nav>

            <!-- Title & Category -->
            <div>
              <h1 class="placeholder-glow">
                <span class="placeholder col-8"></span>
              </h1>
              <div class="placeholder col-4" style="height: 32px"></div>
            </div>

            <!-- Price Skeleton -->
            <div class="d-flex align-items-center gap-4">
              <span class="placeholder col-2" style="height: 40px"></span>
              <span class="placeholder col-3" style="height: 24px"></span>
            </div>

            <!-- Quantity Controls -->
            <div class="mt-auto">
              <div class="d-flex gap-3 align-items-center">
                <div class="input-group" style="width: 150px">
                  <div class="placeholder col rounded-3" disabled />
                </div>
                <div class="placeholder col rounded-3 py-4"></div>
              </div>
            </div>

            <!-- Description Skeleton -->
            <div class="card border-0 bg-light">
              <div class="card-body">
                <div class="placeholder-glow">
                  <p class="placeholder col-12"></p>
                  <p class="placeholder col-10"></p>
                  <p class="placeholder col-11"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Similar Products Skeleton -->
      <section class="py-5">
        <h2 class="placeholder-glow">
          <span class="placeholder col-4" style="height: 32px"></span>
        </h2>
        <div class="row g-4">
          <div v-for="i in 4" :key="i" class="col-md-6 col-lg-4 col-xl-3">
            <div class="card h-100 border-0 shadow-sm">
              <div class="ratio ratio-1x1">
                <div class="card-img-top placeholder"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-8"></span>
                </h5>
                <div class="placeholder-glow">
                  <p class="placeholder col-12"></p>
                  <div class="d-flex justify-content-between">
                    <span class="placeholder col-5"></span>
                    <span class="placeholder col-3"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger">
      Error loading product: {{ error.message }}
    </div>

    <!-- Main Content -->
    <div v-else>
      <!-- Product Details Section -->
      <div class="row g-5 mb-5">
        <!-- Main Image -->
        <div class="col-lg-6">
          <div class="card border-0 shadow-sm h-100">
            <img
              :src="product.image"
              :alt="product.title"
              class="card-img-top p-4 object-fit-contain"
              style="height: 500px"
            />
          </div>
        </div>

        <!-- Product Info -->
        <div class="col-lg-6">
          <div class="d-flex flex-column h-100 gap-4">
            <!-- Title and Category -->
            <div>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <NuxtLink to="/">Home</NuxtLink>
                  </li>
                  <li class="breadcrumb-item">
                    <NuxtLink :to="categoryLink">
                      {{ product.category }}
                    </NuxtLink>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ product.title }}
                  </li>
                </ol>
              </nav>
              <h1 class="display-6 fw-bold mb-3">{{ product.title }}</h1>
              <div class="d-flex align-items-center gap-3">
                <span class="badge bg-primary fs-6">{{
                  product.category
                }}</span>
              </div>
            </div>

            <!-- Price Section -->
            <div class="d-flex align-items-center gap-4">
              <h2 class="text-danger fw-bold mb-0">${{ product.price }}</h2>
              <small class="text-muted text-decoration-line-through fs-5">
                ${{ (product.price * 1.2).toFixed(2) }}
              </small>
            </div>

            <!-- Actions -->
            <div class="mt-auto">
              <div class="d-flex gap-3 align-items-center mb-4">
                <div class="input-group" style="width: 150px; height: 42px">
                  <button
                    class="btn btn-outline-secondary"
                    @click="quantity > 0 ? quantity-- : 0"
                  >
                    −
                  </button>
                  <input
                    v-model.number="quantity"
                    type="number"
                    class="form-control text-center"
                    min="1"
                  />
                  <button class="btn btn-outline-secondary" @click="quantity++">
                    +
                  </button>
                </div>
                <button
                  class="border-0 text-white btn btn-secondary flex-grow-1"
                  @click="addToCart"
                  style="padding: 0.6rem 0.2rem"
                >
                  <i class="icon text-white bi bi-cart3 me-2"></i>
                  Add to Cart
                </button>
              </div>
            </div>

            <!-- Description -->
            <div class="card border-0 bg-light">
              <div class="card-body">
                <h3 class="h5 fw-bold mb-3">Description</h3>
                <p class="card-text text-muted mb-0">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Similar Products -->
      <section class="py-5">
        <h2 class="mb-4 fw-bold">Similar Products</h2>
        <div class="row g-4">
          <NuxtLink
            v-for="similar in similarProducts"
            :key="similar.id"
            :to="`/products/${similar.id}`"
            class="col-md-6 col-lg-4 col-xl-3"
          >
            <div class="card h-100 border-0 shadow-sm product-card">
              <NuxtLink :to="`/products/${similar.id}`">
                <img
                  :src="similar.image"
                  :alt="similar.title"
                  class="card-img-top p-3 object-fit-contain"
                  style="height: 250px"
                />
              </NuxtLink>
              <div class="card-body">
                <NuxtLink
                  :to="`/products/${similar.id}`"
                  class="text-decoration-none text-dark"
                >
                  <h5 class="card-title fw-bold">{{ similar.title }}</h5>
                </NuxtLink>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <span class="text-danger fw-bold fs-5">
                      ${{ similar.price }}
                    </span>
                    <small class="text-muted text-decoration-line-through ms-2">
                      ${{ (similar.price * 1.2).toFixed(2) }}
                    </small>
                  </div>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="addToCart(similar)"
                  >
                    <i class="icon bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const cart = useCartStore();

// Fetch main product
const {
  data: product,
  status,
  error,
} = useFetch(`https://fakestoreapi.com/products/${route.params.id}`, {
  // key: `product-${route.params.id}`,
  lazy: true,
  transform: (product) => ({
    ...product,
    description:
      product.description.charAt(0).toUpperCase() +
      product.description.slice(1),
  }),
});
const quantity = ref(0);

const categoryLink = computed(() => {
  if (product.value && product.value.category) {
    let result = product.value.category;
    if (product.value.category === "men's clothing") {
      result = "men-clothing";
    } else if (product.value.category === "women's clothing") {
      result = "women-clothing";
    } else if (product.value.category === "jewelery") {
      result = "jewelry";
    }
    return "/categories/" + result;
  }
  return "/";
});

// Fetch similar products
const { data: similarProducts } = useFetch(
  () => {
    if (product.value && product.value.category) {
      let category = product.value.category;
      if (product.value.category === "men's clothing") {
        category = "men's%20clothing";
      } else if (product.value.category === "women's clothing") {
        category = "women's%20clothing";
      }
      return `https://fakestoreapi.com/products/category/${category}?limit=5`;
    }
    return null;
  },
  { lazy: true }
);

const addToCart = () => {
  cart.insertOrUpdateItem(product.value, quantity.value);
  // useToast().success(`${quantity.value} ${item.title} added to cart!`);
};
</script>

<style scoped>
.product-skeleton .placeholder {
  background-color: #e9ecef;
}

.product-skeleton .card-img-top.placeholder {
  background-color: #dee2e6;
}

.product-skeleton .breadcrumb .placeholder {
  height: 1rem;
}

.product-skeleton .input-group .placeholder {
  height: 42px;
}

.product-skeleton .btn-lg.placeholder {
  height: 50px;
}

/* Fetching Product Transition */
.main-content {
  transition: opacity 0.3s ease;
}

.main-content[data-pending] {
  opacity: 0.5;
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
}

.breadcrumb-item a {
  color: #6c757d;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  color: #0d6efd;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}

.card-img-top {
  transition: transform 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.05);
}
</style>
