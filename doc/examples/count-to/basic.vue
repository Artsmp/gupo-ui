<template>
  <div page-container flex="~ col gap-16">
    <div flex="~ col gap-16" class="text-25 font-semibold">
      <div>前缀+小数点：<GpCountTo prefix="$" :end="9999.999999" :decimals="2" /></div>
      <div>
        后缀+修改分割符：<GpCountTo suffix="🙃" separator="🙂" :end="800000" :color="'deeppink'" />
      </div>
      <div>动画时长：<GpCountTo :end="800000" :duration="100000" /></div>
    </div>
    <div flex="~ col gap-16" class="text-25 font-semibold">
      <div>
        动画时长：<GpCountTo :end="800000" :duration="100000">
          <template #default="{ value }">
            <span class="text-amber text-23">{{ value }}</span>
          </template>
        </GpCountTo>
      </div>
    </div>
  </div>
</template>
