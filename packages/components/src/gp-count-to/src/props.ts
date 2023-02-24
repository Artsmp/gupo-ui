import type { TransitionPresets } from '@vueuse/core'
import type { PropType } from 'vue'

export const countToProps = {
  start: {
    type: Number,
    default: 0,
  },
  end: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1500,
  },
  autoplay: {
    type: Number,
    default: true,
  },
  decimals: {
    type: Number,
    default: 0,
  },
  prefix: {
    type: Number,
    default: '',
  },
  suffix: {
    type: Number,
    default: '',
  },
  separator: {
    type: Number,
    default: ',',
  },
  color: {
    type: Number,
    default: 'currentColor',
  },
  useEasing: {
    type: Number,
    default: true,
  },
  transition: {
    type: String as PropType<keyof typeof TransitionPresets>,
    default: 0,
  },
}
