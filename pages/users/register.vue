<!-- Register Page (~/pages/register.vue) -->
<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card shadow-sm border-0">
          <div class="card-body p-4 p-lg-5">
            <h2 class="text-center mb-4 fw-bold">Create Account</h2>

            <form
              @submit.prevent="handleRegister"
              class="needs-validation"
              novalidate
            >
              <!-- Error Message -->
              <div v-if="error" class="alert alert-danger">{{ error }}</div>

              <!-- Name Input -->
              <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  required
                  placeholder="Enter your full name"
                />
              </div>

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
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                  placeholder="Create a password"
                  @input="checkPasswordStrength"
                />
                <div class="mt-2">
                  <small :class="passwordStrengthClass">{{
                    passwordStrengthText
                  }}</small>
                </div>
              </div>

              <!-- Confirm Password -->
              <div class="mb-4">
                <label for="confirmPassword" class="form-label"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  required
                  placeholder="Confirm your password"
                />
              </div>

              <!-- Terms Checkbox -->
              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="terms"
                  required
                />
                <label class="form-check-label" for="terms">
                  I agree to the
                  <NuxtLink to="/terms" class="text-decoration-none"
                    >Terms of Service</NuxtLink
                  >
                </label>
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
                Create Account
              </button>

              <!-- Login Link -->
              <p class="text-center mt-4 mb-0">
                Already have an account?
                <NuxtLink to="/users/login" class="text-decoration-none"
                  >Login here</NuxtLink
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
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const pending = ref(false);
const error = ref(null);
const passwordStrengthText = ref("");
const passwordStrengthClass = ref("text-muted");

const checkPasswordStrength = () => {
  const strength = zxcvbn(password.value);
  passwordStrengthText.value = `Password strength: ${strength.score}/4`;
  passwordStrengthClass.value = [
    "text-muted",
    "text-danger",
    "text-warning",
    "text-info",
    "text-success",
  ][strength.score];
};

const handleRegister = async () => {
  try {
    pending.value = true;
    error.value = null;

    if (password.value !== confirmPassword.value) {
      throw new Error("Passwords do not match");
    }

    // Add your registration logic here
    // await $fetch('/api/auth/register', { method: 'POST', body: { name, email, password } })
  } catch (err) {
    error.value = err.message || "Registration failed. Please try again.";
  } finally {
    pending.value = false;
  }
};
</script>

<style scoped>
/* Use same styles as login page */
</style>
