<template>
  <div class="py-1 px-4">
    <div class="d-flex justify-content-between align-items-center gap-4">
      <!-- Logo -->
      <div>
        <img
          class="img-fluid"
          style="width: 80px; height: 80px"
          src="/images/logo-black.png"
        />
      </div>
      <!-- Navigation -->
      <div class="d-flex justify-content-between align-items-center gap-3">
        <!-- Categories -->
        <div>
          <NuxtLink
            class="text-uppercase text-dark fw-medium text-decoration-none cursor-pointer"
            to=""
            >Electronics</NuxtLink
          >
        </div>
        <div>
          <NuxtLink
            class="text-uppercase text-dark fw-medium text-decoration-none cursor-pointer"
            to=""
            >Jewelry</NuxtLink
          >
        </div>
        <div>
          <NuxtLink
            class="text-uppercase text-dark fw-medium text-decoration-none cursor-pointer"
            to=""
            >Men Clothing</NuxtLink
          >
        </div>
        <div>
          <NuxtLink
            class="text-uppercase text-dark fw-medium text-decoration-none cursor-pointer"
            to=""
            >Women Clothing</NuxtLink
          >
        </div>
      </div>
      <!-- Utilities -->
      <div class="d-flex justify-content-between align-items-center gap-3">
        <!-- Search -->
        <div class="position-relative">
          <input
            type="text"
            class="pe-5 ps-3 py-1 rounded border-0"
            style="height: 32px; background-color: #eeeee4"
          />
          <img
            class="position-absolute top-50 translate-middle-y end-0 me-2"
            style="width: 24px; height: 24px"
            src="/icons/search.png"
          />
        </div>
        <div>
          <img
            class="img-fluid"
            style="width: 28px; height: 28px"
            src="/icons/login.png"
          />
        </div>
        <div>
          <img
            class="img-fluid"
            style="width: 28px; height: 28px"
            src="/icons/heart.png"
          />
        </div>
        <div>
          <img
            class="img-fluid"
            style="width: 28px; height: 28px"
            src="/icons/cart.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
