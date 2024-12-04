/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-sm': '480px', // 반응형 분기점 상세값은 tailwind css의 screens 값과 일치시켜야 합니다.
        'mantine-breakpoint-md': '768px',
        'mantine-breakpoint-lg': '1024px',
        'mantine-breakpoint-xl': '1280px',
      },
    },
    tailwindcss: {},
  },
}

export default config
