<template>
  <div class="component">{{ $appState }}</div>
</template>

<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { appState } from "../store/AppStore";

const $appState = useStore(appState);
</script>

<style lang="scss" scoped></style>
