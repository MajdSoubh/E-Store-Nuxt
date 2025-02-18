<template>
  <div
    class="card rounded-3 shadow-sm"
    :style="{ width: width, height: height }"
  >
    <!-- Wrap clickable areas in NuxtLink -->
    <NuxtLink
      :to="`/products/${product.id}`"
      class="card-link text-decoration-none text-dark"
    >
      <!-- Image container -->
      <div class="ratio ratio-1x1">
        <img
          :src="product.image"
          class="card-img-top object-fit-contain h-100"
          :alt="product.title"
        />
      </div>

      <!-- Card body content that should be clickable -->
      <div class="card-body d-flex flex-column p-2 pb-0">
        <h5 class="card-title fs-6 fw-bold mb-2 text-truncate-2">
          {{ product.title }}
        </h5>
        <p class="card-text text-truncate-2 text-muted small mb-2">
          Premium quality {{ product.title.toLowerCase() }} for any occasion.
        </p>
        <div class="d-flex align-items-center mb-2">
          <span class="text-warning small">★★★★☆</span>
          <span class="text-muted small ms-2">(4.2)</span>
        </div>
      </div>
    </NuxtLink>

    <!-- Non-clickable quantity controls -->
    <div
      class="mt-auto d-flex flex-row justify-content-between align-items-center p-2 pt-0"
    >
      <div>
        <span class="fs-5 fw-bold text-dark">${{ product.price }}</span>
        <span class="text-muted text-decoration-line-through ms-2">
          ${{ (product.price + 20).toFixed(2) }}
        </span>
      </div>

      <!-- Quantity controls -->
      <div class="d-flex align-items-center">
        <button
          style="background-color: #eeeee4"
          class="btn rounded-circle text-white btn-sm p-1"
          @click="
            () => {
              emit('update-quantity', props.product, -1);
            }
          "
        >
          <i class="bi bi-dash"></i>
        </button>
        <span class="mx-2 fw-bold">{{ props.quantity }}</span>
        <button
          style="background-color: #eeeee4"
          class="btn rounded-circle btn-sm p-1"
          @click="() => emit('update-quantity', props.product, 1)"
        >
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      title: "Product Name",
      price: 0,
      image: "",
    }),
  },
  width: {
    type: String,
    default: "250px",
  },
  height: {
    type: String,
    default: "440px",
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update-quantity"]);
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn {
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ddd !important;
}
</style>
