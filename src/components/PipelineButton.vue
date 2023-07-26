<script setup lang="ts">
interface Props {
  isSelected?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button class="pipeline-button" :class="{ selected: isSelected }" v-bind="$attrs">
    <!-- I could've used a custom checkbox component to be more reusable, but I don't need it this context so I won't waste time on it -->
    <div class="checkbox" :class="{ selected: isSelected }">
      <img v-if="isSelected" class="checkbox-img" src="@/assets/check.svg" />
    </div>

    <slot />
    <div v-if="isSelected" class="popover-arrow" />
  </button>
</template>

<style lang="scss">
.pipeline-button {
  width: 210px;
  height: 50px;
  border-radius: 14px;
  border: var(--pipeline-button-border);
  cursor: pointer;
  padding: 15.75px 14px;
  display: flex;
  align-items: center;

  .checkbox {
    width: 17.5px;
    height: 17.5px;
    border: var(--pipeline-checkbox-border-empty);
    margin-right: 12px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
      border: var(--pipeline-checkbox-border-checked);
      background-color: var(--pipeline-checkbox-bg-checked);
    }
  }

  &.selected {
    position: relative;
    border: var(--pipeline-button-border-selected);

    // For some reason these specific border colors do not accept vars 🤷🏽‍♂️
    .popover-arrow {
      position: absolute;
      bottom: -8px;
      left: 95px;

      &::before,
      &::after {
        position: absolute;
        display: block;
        content: '';
        border-color: transparent;
        border-style: solid;
        border-width: 8px 10px 0;
      }

      &::before {
        bottom: -1px;
        border-top-color: #2462d1;
      }

      &::after {
        bottom: 2px;
        border-top-color: white;
      }
    }
  }
}
</style>
