<script lang="ts" setup>
import { ref } from 'vue';
import PipelineButton from '@/components/PipelineButton.vue';
import StepViewer from '@/components/StepViewer.vue';
import StageItem from '@/components/StageItem.vue';
import { pipelines } from '../constants/pipelines';
import type { Pipeline } from '@/types';

const currentStepIndex = ref(0);
const steps = ['Sales Pipeline Settings', 'Opportunity Details Settings'];
const onStepClick = (step: string, stepIndex: number) => {
  alert(`You clicked step ${stepIndex + 1} - ${step}`);
};

const selectedPipeline = ref<Pipeline>(pipelines[0]);
const setSelectedPipeline = (pipeline: Pipeline) => {
  selectedPipeline.value = pipeline;
};

const darkMode = ref(false);
const toggleDarkMode = () => {
  document.body.classList.toggle('dark');
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
        <div class="pipeline-selector">
          <PipelineButton
            v-for="pipeline in pipelines"
            :key="pipeline.type"
            :is-selected="selectedPipeline.type === pipeline.type"
            @click="setSelectedPipeline(pipeline)"
            >{{ pipeline.title }}</PipelineButton
          >
        </div>
        <div class="stages">
          <template v-if="selectedPipeline.type !== 'custom'">
            <StageItem v-for="stage in selectedPipeline.stages" :key="stage.type" :stage="stage" />
          </template>
          <div v-else class="custom-stages">
            <span class="message"> The custom Pipeline will be implemented soon </span>
            <img
              src="@/assets/undraw_advanced_customization_re_wo6h.svg"
              alt="customization image"
              class="custom-image"
            />

            <span class="message">Meanwhile you can click this button to toggle dark mode</span>
            <button class="button highlight" @click="toggleDarkMode">Toggle Dark Mode</button>
          </div>
        </div>
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
      display: flex;
      flex-direction: column;
      overflow: auto;
    }

    .pipeline-selector {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 42px 0;
    }

    .stages {
      display: flex;
      gap: 14px;
      overflow: auto;
      flex: 1;
    }

    .custom-stages {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .custom-image {
        width: 300px;
        height: auto;
        margin: 20px 0;
      }

      .message {
        margin-top: 42px;
        margin: 10px;
      }
    }
  }
}
</style>
