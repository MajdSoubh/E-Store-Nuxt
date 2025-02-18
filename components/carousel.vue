<template>
  <ClientOnly>
    <div
      :id="props.id"
      class="carousel slide w-100"
      style="height: 460px; margin-bottom: 2.5rem"
    >
      <!-- Dynamic Indicators -->
      <div
        v-if="slidesCount > 1"
        class="carousel-indicators m-0"
        style="bottom: -2rem"
      >
        <button
          v-for="(_, index) in slidesCount"
          :key="index"
          type="button"
          :data-bs-target="`#${props.id}`"
          :data-bs-slide-to="index"
          :class="['bg-black', { active: index === 0 }]"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <!-- Dynamic Slides -->
      <div class="carousel-inner p-0 w-100 h-100">
        <div
          v-for="(slides, index) in transformedSlides"
          :key="index"
          class="carousel-item w-100 h-100"
          :class="{ active: index === 0 }"
        >
          <div
            class="h-100 w-100 d-flex flex-row no-wrap gap-3 align-items-center justify-content-center"
          >
            <component
              v-for="(slide, index) in slides"
              :key="index + transformedSlides.length"
              :is="slide"
            />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { Comment, Fragment } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "carousel",
  },
  multipleItemsPerSlide: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();
const windowWidth = ref(1024);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

// Compute items per slide based on screen size
const itemsPerSlide = computed(() => {
  if (windowWidth.value >= 1124) {
    return 4;
  } else if (windowWidth.value >= 992) {
    return 3;
  } else if (windowWidth.value >= 768) {
    return 3;
  } else if (windowWidth.value >= 442) {
    return 2;
  } else {
    return 1;
  }
});

const slides = computed(() => {
  return (
    slots.default?.().flatMap((vnode) => {
      if (vnode.type === Comment) {
        return [];
      }

      if (vnode.type === Fragment) {
        return vnode.children || [];
      }

      return [vnode];
    }) || []
  );
});

// Handle multiple items per slide
const transformedSlides = computed(() => {
  let result = slides.value;

  if (props.multipleItemsPerSlide) {
    const groupedSlides = [];
    for (let i = 0; i < result.length; i += itemsPerSlide.value) {
      groupedSlides.push(result.slice(i, i + itemsPerSlide.value));
    }
    return groupedSlides;
  }

  return result.map((slide) => [slide]); // Wrap each slide in an array
});

const slidesCount = computed(() => {
  return transformedSlides.value.length;
});
</script>
