import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*caso o navegador não abra usando a porta 5137 e possivel trocar a porta aqui,*/
  server: {
    port: 30001,
  }
  /*como exemplo*/
})

