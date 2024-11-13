<template lang="pug">
.fe-photo-frame(:style='`background-image: url(${src})`' :class='{small: size === "small"}')
  slot
</template>
<script setup>
defineProps({
  src: String,
  size: String,
});
</script>
