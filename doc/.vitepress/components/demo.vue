<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useClipboard } from '@vueuse/core'

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

const showSource = ref(false)
const copySuccess = ref(false)
const { isSupported, copied, copy } = useClipboard()
const handleCopy = () => {
  copy(decodeURIComponent(props.rawSource))
  if (isSupported.value && copied.value) {
    copySuccess.value = true
    const timer = setTimeout(() => {
      copySuccess.value = false
      clearTimeout(timer)
    }, 2000)
  }
}
</script>

<template>
  <div>
    <p v-html="decodedDescription" />
    <div class="rounded-4 b-1 b-solid">
      <ClientOnly>
        <div class="p-16">
          <component
            :is="formatPathDemos[props.path]"
            v-if="formatPathDemos[props.path]"
            v-bind="$attrs"
          />
        </div>
      </ClientOnly>
      <div class="flex justify-end px-8 py-8 b-0 b-t-1 b-b-1 b-dashed">
        <div flex gap-16 items-center>
          <div
            @click="showSource = true"
            v-if="!showSource"
            class="icon-btn"
            i-material-symbols:code
          ></div>
          <div
            @click="showSource = false"
            v-else
            class="icon-btn"
            i-material-symbols:code-off
          ></div>
          <div
            v-if="!copied"
            class="icon-btn"
            i-material-symbols:content-copy-outline-sharp
            @click="handleCopy"
          ></div>
          <div v-else class="icon-btn" i-material-symbols:assignment-turned-in></div>
        </div>
      </div>
      <div class="h-0 overflow-hidden" :class="showSource && 'h-auto'">
        <div class="p-16 overflow-auto" v-html="decodedSource" />
      </div>
    </div>
  </div>
</template>
