<script setup lang="ts"></script>

<template>
  <div>
    <div class="text">
      <GpButton>按钮</GpButton>
      <GpButton color="error">按钮</GpButton>
      <GpButton loading color="error">按钮</GpButton>
      <GpButton color="warning">按钮</GpButton>
      <GpButton color="success">按钮</GpButton>
    </div>

    <div class="text">
      <GpButton type="primary">按钮</GpButton>
      <GpButton type="primary" color="error">按钮</GpButton>
      <GpButton type="primary" color="warning">按钮</GpButton>
      <GpButton type="primary" color="success">按钮</GpButton>
    </div>

    <div class="text">
      <GpButton disabled type="primary">按钮</GpButton>
      <GpButton disabled type="primary" color="error">按钮</GpButton>
      <GpButton disabled type="primary" color="warning">按钮</GpButton>
      <GpButton disabled type="primary" color="success">按钮</GpButton>
    </div>

    <div class="text">
      <GpButton type="dashed">按钮</GpButton>
      <GpButton type="dashed" color="error">按钮</GpButton>
      <GpButton loading type="dashed" color="error">按钮</GpButton>
      <GpButton type="dashed" color="warning">按钮</GpButton>
      <GpButton type="dashed" color="success">按钮</GpButton>
    </div>

    <div class="text">
      <GpButton type="link">按钮</GpButton>
      <GpButton loading type="link" color="error">按钮</GpButton>
      <GpButton type="link" color="error">按钮</GpButton>
      <GpButton type="link" color="warning">按钮</GpButton>
      <GpButton type="link" color="success">按钮</GpButton>
    </div>

    <div class="text">
      <GpButton type="danger">按钮</GpButton>
      <GpButton type="danger" color="error">按钮</GpButton>
      <GpButton type="danger" color="warning">按钮</GpButton>
      <GpButton type="danger" color="success">按钮</GpButton>
    </div>

    <div class="text">
      <GpButton type="text">按钮</GpButton>
      <GpButton type="text" color="error">按钮</GpButton>
      <GpButton type="text" color="warning">按钮</GpButton>
      <GpButton type="text" color="success">按钮</GpButton>
    </div>

    <div class="text">
      <GpButton loading>按钮</GpButton>
      <GpButton loading color="error">按钮</GpButton>
      <GpButton color="error">按钮</GpButton>
      <GpButton loading color="warning">按钮</GpButton>
      <GpButton loading color="success">按钮</GpButton>
    </div>

    <div class="text" style="background-color: #c0c8c8">
      <GpButton ghost>按钮</GpButton>
      <GpButton type="primary" ghost>按钮</GpButton>
      <GpButton ghost color="error">按钮</GpButton>
      <GpButton loading ghost color="error">按钮</GpButton>
      <GpButton ghost color="warning">按钮</GpButton>
      <GpButton ghost color="success">按钮</GpButton>
    </div>
  </div>
</template>

<style scoped>
.text {
  display: flex;
  gap: 16px;
  padding: 16px;
}
</style>
