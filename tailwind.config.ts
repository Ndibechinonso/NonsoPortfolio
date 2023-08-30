import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'vantaBlack': '#000100',
        'white': '#ffffff',
        'grey': 'rgb(220, 220, 220)',
        'bg_color_2': '#E8E8E8',
        'error': '#ff0303',
        'overlay_bg': 'rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'web_developer_img' : 'url("/assets/web_developer.jpg")',
        'full_stack_img': 'url("/assets/full_stack_developer.avif")',
        'team_work_img': 'url("/assets/team_work.jpg")',
        'contact_me_img': 'url("/assets/contactMe.avif")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        "card_shadow" : "rgb(0 0 0 / 35%) 0px 5px 15px"
      }
    },
  },
  plugins: [],
}
export default config
