<script setup lang="ts">
interface Props {
  steps: string[];
  currentStepIndex?: number;
}

defineProps<Props>();

const emit = defineEmits<{
  onStepClick: [step: string, index: number];
}>();
</script>

<template>
  <div class="step-viewer">
    <div
      v-for="(step, index) in steps"
      class="step"
      :key="step"
      @click="emit('onStepClick', step, index)"
    >
      <div class="number" :class="{ active: index === currentStepIndex }">
        {{ index + 1 }}
      </div>
      <div class="title">
        {{ step }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.step-viewer {
  display: flex;
  flex-direction: row;

  .step {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    + .step {
      margin-left: 42px;
    }

    .number {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 17.5px;
      font-weight: 400;
      border-radius: 17.5px;
      background-color: var(--step-bg-color);
      color: var(--step-color);
      margin-bottom: 3px;
      border: var(--step-border);

      &.active {
        background-color: var(--step-bg-color-active);
        color: var(--step-color-active);
        border: var(--step-border-active);
      }
    }

    .title {
      color: var(--step-text-color);
      font-family: var(--font-family-narrow);
      font-size: 10.5px;
      font-weight: 700;
    }
  }
}
</style>
