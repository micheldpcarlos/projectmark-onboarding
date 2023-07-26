<script lang="ts" setup>
import StepViewer from '@/components/StepViewer.vue';
import { ref } from 'vue';

const currentStepIndex = ref(0);
const steps = ['Sales Pipeline Settings', 'Opportunity Details Settings'];
const onStepClick = (step: string, stepIndex: number) => {
  alert(`You clicked step ${stepIndex + 1} - ${step}`);
};
</script>

<template>
  <div class="onboarding">
    <div class="header">
      <img alt="ProjectMark Logo" class="logo" src="@/assets/logo.svg" />
      <StepViewer
        :steps="steps"
        :current-step-index="currentStepIndex"
        @on-step-click="onStepClick"
      />
      <button class="button highlight next-btn">Next</button>
    </div>
    <div class="content">
      <div class="content-container">
        <h1>Please select the type of sales pipeline that best fits to you company</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onboarding {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px;

  .header {
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 37.029px;
      height: 37.029px;
      flex-shrink: 0;
      margin-left: 12px;
    }
    .next-btn {
      margin-right: 32px;
    }
  }
  .content {
    flex: 1;
    background-color: var(--color-card-background);
    border-radius: 21px;
    display: flex;
    justify-content: center;
    padding: 42px;

    &-container {
      max-width: 1500px;
    }
  }
}
</style>
