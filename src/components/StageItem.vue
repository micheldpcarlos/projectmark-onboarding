<script setup lang="ts">
import type { Stage } from '@/types';

interface Props {
  stage: Stage;
}

defineProps<Props>();
</script>

<template>
  <div class="stage-item" :class="stage.color">
    <div class="header">
      <div class="title">{{ stage.title }}</div>
      <div class="info-area" />
    </div>
    <div class="content-area" />
  </div>
</template>

<style lang="scss">
.stage-item {
  width: 222px;
  flex-shrink: 0;
  height: 100%;
  padding: 5.5px;
  border-radius: 14px;
  position: relative;

  .header {
    padding: 9px;
    .title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .info-area {
      width: 115px;
      height: 22px;
      margin-top: 15px;
      margin-bottom: 10px;
      border-radius: 10.5px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 42px;
        height: 22px;
        border-radius: 10.5px;
      }
    }
  }

  .content-area {
    height: 175px;
    width: 100%;
    border-radius: 10.5px;
  }

  // Generate color classes
  $colors: 's1', 's2', 's3', 's4', 's5', 's6';
  @each $color in $colors {
    &.#{$color} {
      background-color: var(--c-#{$color}-lighter);
      .header {
        .title {
          color: var(--c-#{$color}-darker);
        }
        .info-area {
          background-color: var(--c-#{$color}-light);
          &::after {
            background-color: var(--c-#{$color});
          }
        }
      }
      .content-area {
        border: 1px solid var(--c-#{$color}-light);
      }
    }
  }

  // transparency at the bottom
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 210px;
    border-radius: 10.5px;
    left: 0;
    bottom: -1px;
    background: var(--stage-item-gradient);
  }
}
</style>
