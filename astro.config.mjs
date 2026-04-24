// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Mi nuevo sitio',
      logo:({
        src:'./src/assets/www.png',
        //replacesTitle:true,//en caso de que el logo tenga titulo
        
      }),

      customCss: [
			'./src/styles/custom.css',
			],

      locales: {
				root: {
				label: 'Español',
				lang: 'es',
				},
      },


      social: [
					{
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/withastro/starlight' 
					},
					{ 
					icon: 'facebook', 
					label: 'Facebook', 
					href: 'https://facebook.com/tu-cuenta' 
					},
					{ 
					icon: 'instagram',
					label: 'Instagram', 
					href: 'https://instagram.com/tu-cuenta' 
					},
					{ 
					icon: 'tiktok', 
					label: 'Tiktok', 
					href: 'https://tiktok.com/tu-cuenta' 
					}
					],
      sidebar: [
				{
					label: 'Guides',
					items: [
            { label: 'inicio', link: '/guides/' },
            { label: 'Prueba', link: '/guides/prueba-uno', badge: { text: 'Nuevo', variant: 'tip' } },
						
            
					],
				},
        {
					label: 'Información',
					autogenerate: { directory: 'informacion' },
				},
      ],
    }),
  ],
});