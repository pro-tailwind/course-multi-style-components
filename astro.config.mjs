import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
import solidJs from '@astrojs/solid-js'
import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [viteCommonjs()],
  },
  integrations: [react(), svelte(), vue(), solidJs(), alpinejs()],
})
