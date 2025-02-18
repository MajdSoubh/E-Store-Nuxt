<template>
  <section class="container-fluid px-lg-5 px-3 py-4">
    <div class="row">
      <div class="col-12">
        <!-- Section Title -->
        <h2 class="text-uppercase fw-bold mb-4 mb-lg-5">
          {{ props.title }}
        </h2>

        <!-- Content Slot -->
        <div class="row g-3 g-lg-4">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Section Title",
  },
});
</script>

<style scoped>
section {
  background-color: var(--bs-body-bg);
  transition: background-color 0.3s ease;
}

@media (max-width: 767.98px) {
  section {
    padding: 1.5rem 0;
  }

  h2 {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  section {
    padding: 2.5rem 0;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
