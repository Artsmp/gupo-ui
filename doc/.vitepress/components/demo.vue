<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const decodedDescription = computed(() => decodeURIComponent(props.description!))
const decodedSource = computed(() => decodeURIComponent(props.source!))

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../examples/', '').replace('.vue', '')] = props.demos[key].default
  })

  return demos
})
</script>

<template>
  <div>
    <p v-html="decodedDescription" />
    <div class="example-case">
      <ClientOnly>
        <component
          :is="formatPathDemos[props.path]"
          v-if="formatPathDemos[props.path]"
          v-bind="$attrs"
        />
      </ClientOnly>
      <div class="example-source-wrapper">
        <div class="example-source" v-html="decodedSource" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.example-case {
  padding: 10px;
  border: 1px solid #4c4d4f;
  border-radius: 4px;
}

.example-source-wrapper {
  padding-top: 10px;
  margin-top: 10px;
  background: #262727;
  border-top: 1px solid #ddd;
}
</style>
