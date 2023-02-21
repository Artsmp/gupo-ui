import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'md-transform',
      enforce: 'pre',
      transform(code, id) {
        if (!id.endsWith('.md')) return
        const componentId = path.basename(id, '.md')
        const scriptSetup = `const demos = import.meta.globEager('../examples/${componentId}/*.vue')`
        console.log(
          '=====',
          `\n<script setup>
        ${scriptSetup}
        </script>
        ${code}
        `
        )

        return `\n<script setup>
        ${scriptSetup}
        </script>
        ${code}
        `
      },
    },
  ],
})
