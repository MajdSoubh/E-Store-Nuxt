<template>
  <div>
    <Navbar />
    <Cart />
    <div id="main" style="margin-top: 96px">
      <slot />
    </div>
    <!-- Footer & Outro  -->
    <div>
      <Outro />
      <Footer />
    </div>
  </div>
</template>
