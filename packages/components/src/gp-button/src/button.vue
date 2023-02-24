<script lang="ts" setup>
import { Button } from 'ant-design-vue'
import { computed, unref } from 'vue'
import { useAttrs } from '../../utils'
import { buttonProps } from './props'

const props = defineProps(buttonProps)

const attrs = useAttrs({ excludeDefaultKeys: false })

const getBindValue = computed(() => ({ ...unref(attrs), ...props }))

const getButtonClass = computed(() => {
  const { color, disabled } = props
  return [
    {
      [`ant-btn-${color}`]: !!color,
      [`is-disabled`]: disabled,
    },
  ]
})
</script>

<template>
  <Button :class="getButtonClass" v-bind="getBindValue">
    <template #default="data">
      <slot v-bind="data || {}"></slot>
    </template>
  </Button>
</template>
