import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  plugins: [react()]

  // Carregar o ficheiro de ambiente baseado no `mode` no
  // diretório de trabalho atual.
  // Definir o terceiro parâmetro para '' para carregar todos os
  // ambientes apesar do prefixo `VITE_`
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // configuração de vite
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    }
  }
})

// // https://vitejs.dev/config/
// export default defineConfig({ 
//   plugins: [react()],
// })
