<!-- Login Page (~/pages/login.vue) -->
<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card shadow-sm border-0">
          <div class="card-body p-4 p-lg-5">
            <h2 class="text-center mb-4 fw-bold">Welcome Back</h2>

            <form
              @submit.prevent="handleLogin"
              class="needs-validation"
              novalidate
            >
              <!-- Error Message -->
              <div v-if="error" class="alert alert-danger">{{ error }}</div>

              <!-- Email Input -->
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <!-- Password Input -->
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                  placeholder="Enter your password"
                />
              </div>

              <!-- Remember Me & Forgot Password -->
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="remember"
                  />
                  <label class="form-check-label" for="remember"
                    >Remember me</label
                  >
                </div>
                <NuxtLink to="/forgot-password" class="text-decoration-none"
                  >Forgot password?</NuxtLink
                >
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="btn btn-primary w-100 py-2"
                :disabled="pending"
                style="
                  background-color: rgb(203, 203, 176);
                  color: white;
                  border: none;
                "
              >
                <span
                  v-if="pending"
                  class="spinner-border spinner-border-sm"
                ></span>
                Sign In
              </button>

              <!-- Social Login -->
              <div class="text-center mt-4">
                <p class="text-muted">Or continue with</p>
                <div class="d-flex gap-3 justify-content-center">
                  <button type="button" class="btn btn-outline-secondary">
                    <i class="bi bi-google"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    <i class="bi bi-facebook"></i>
                  </button>
                </div>
              </div>

              <!-- Registration Link -->
              <p class="text-center mt-4 mb-0">
                Don't have an account?
                <NuxtLink to="/users/register" class="text-decoration-none"
                  >Register here</NuxtLink
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const pending = ref(false);
const error = ref(null);

const handleLogin = async () => {
  try {
    pending.value = true;
    error.value = null;
    // Add your login logic here
    // await $fetch('/api/auth/login', { method: 'POST', body: { email, password } })
  } catch (err) {
    error.value = err.message || "Login failed. Please try again.";
  } finally {
    pending.value = false;
  }
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
}

.btn-outline-secondary {
  border-color: #dee2e6;
  padding: 0.5rem 1rem;
}

.form-control {
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
}
</style>
