components/footer.vue
<template>
  <!-- Outro -->
  <div class="px-3 py-5" style="background-color: #ede635">
    <div
      class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4"
    >
      <div class="text-bold fs-4">BECOME A MEMBER & GET 150/0 OFF</div>
      <nuxtLink
        to="/users/login"
        class="text-uppercase position-relative"
        style="width: 240px; height: 50px"
      >
        <span
          class="position-absolute top-50 translate-middle-y d-block"
          style="color: #eeeee3; left: 10px"
        >
          SIGN UP FOR FREE
        </span>
        <img
          :src="'/icons/btn-shop-black.png'"
          class="w-100 h-100"
          alt="button"
        />
      </nuxtLink>
    </div>
  </div>
</template>
