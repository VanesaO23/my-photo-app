/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}' // Incluye todas las rutas donde se utilizan las clases de Tailwind
	],
	theme: {
		extend: {
			colors: {
				rose: {
					light: '#FFB7C5',
					DEFAULT: '#FF6392',
					dark: '#FF4070'
				},
				pink: {
					light: '#FEC8D8',
					DEFAULT: '#FF6B6B',
					dark: '#E63946'
				}
				// Puedes agregar más colores personalizados aquí
			},
			fontFamily: {
				sans: ['Helvetica', 'Arial', 'sans-serif'],
				serif: ['Merriweather', 'serif']
				// Añadir más familias de fuentes si es necesario
			},
			spacing: {
				72: '18rem',
				84: '21rem',
				96: '24rem'
				// Añadir más valores de espaciado si es necesario
			}
			// Añade más extensiones de tema según sea necesario
		}
	},
	plugins: []
};
