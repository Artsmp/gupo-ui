import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'md-transform',
      enforce: 'pre',
      transform(code, id) {
        if (!id.endsWith('.md')) return code
        const componentId = path.basename(id, '.md')
        if (componentId === 'index') return code
        const scriptSetup = `const demos = import.meta.globEager('../examples/${componentId}/*.vue')`

        return `
\n<script setup>
${scriptSetup}
</script>\n
${code}
        `
      },
    },
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
