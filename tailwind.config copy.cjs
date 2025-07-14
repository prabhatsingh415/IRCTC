# PowerShell / CMD / Git Bash—जो भी यूज़ कर रहे हो:
cat > tailwind.config.cjs << 'EOF'
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './public/**/*.html',
    './public/html/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: { extend: {} },
  plugins: [],
})
EOF
