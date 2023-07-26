<template>
  <div class="not-found">
    <div class="container">
      <h1 class="big-message">404 - Page not found</h1>
      <img src="@/assets/undraw_lost_re_xqjt.svg" alt="not found" class="not-found-image" />

      <div class="message">
        Looks like you're lost, click <router-link to="/">here</router-link> to go back to the
        onboarding.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .container {
    background-color: var(--color-card-background);
    border-radius: 21px;
    display: flex;
    flex-direction: column;
    padding: 45px;
    justify-content: center;
    align-items: center;
    .big-message {
      font-size: 50px;
    }
    .not-found-image {
      width: 50vw;
      height: 50vh;
      margin: 20px;
    }

    a {
      font-weight: 800;
    }
  }
}
</style>
