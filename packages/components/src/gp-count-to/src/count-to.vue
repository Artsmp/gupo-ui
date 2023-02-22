<script lang="ts" setup>
import { computed, onMounted, ref, unref, watch, watchEffect } from 'vue'
import { isNumber } from '../../../utils'
import { TransitionPresets, useTransition } from '@vueuse/core'

type Props = {
  start?: number
  end: number
  duration?: number
  autoplay?: boolean
  decimals?: number
  prefix?: string
  suffix?: string
  separator?: string
  color?: string
  useEasing?: boolean
  transition?: keyof typeof TransitionPresets
}
const props = withDefaults(defineProps<Props>(), {
  start: 0,
  duration: 1500,
  autoplay: true,
  decimals: 0,
  prefix: '',
  suffix: '',
  separator: ',',
  color: 'currentColor',
  useEasing: true,
  transition: 'linear',
})
const enum Events {
  started = 'started',
  finished = 'finished',
}
type Emitter = {
  (e: Events.started): void
  (e: Events.finished): void
}
const emitter = defineEmits<Emitter>()
const color = ref(props.color)
const source = ref(props.start)
const disabled = ref(false)
let outputValue = useTransition(source)

watchEffect(() => {
  source.value = props.start
})

watch([() => props.start, () => props.end], () => {
  if (props.autoplay) {
    start()
  }
})

onMounted(() => {
  props.autoplay && start()
})

function start() {
  run()
  source.value = props.end
}

function reset() {
  source.value = props.start
  run()
}

function run() {
  outputValue = useTransition(source, {
    disabled,
    duration: props.duration,
    onFinished: () => emitter(Events.finished),
    onStarted: () => emitter(Events.started),
    ...(props.useEasing ? { transition: TransitionPresets[props.transition] } : {}),
  })
}

const value = computed(() => formatNumber(unref(outputValue)))

function formatNumber(num: number | string) {
  if (!num && num !== 0) {
    return ''
  }
  const { decimals, separator, suffix, prefix } = props
  num = Number(num).toFixed(decimals)
  num += ''
  const x = num.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? '.' + x[1] : ''
  const rgx = /(\d+)(\d{3})/
  if (separator && !isNumber(separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + separator + '$2')
    }
  }
  return prefix + x1 + x2 + suffix
}
</script>

<template>
  <span :style="{ color }">
    <slot :value="value">
      {{ value }}
    </slot>
  </span>
</template>
