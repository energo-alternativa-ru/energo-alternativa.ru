import {useRouter} from 'next/router'

export default {
	logo: <span>Электролаборатория Альтернатива</span>,

	/**
	 * @link https://nextra.site/docs/docs-theme/theme-configuration#theme-color
	 */
	primaryHue: 25,

	project: {
		link: 'https://github.com/energo-alternativa-ru/energo-alternativa.ru',
		icon: (
			<svg width="24" height="24" viewBox="0 0 256 256">
				<path
					fill="currentColor"
					d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
				></path>
			</svg>
		)
	},

	chat: {
		link: 'https://twitter.com/shuding_',
		icon: (
			<svg width="24" height="24" viewBox="0 0 248 204">
				<path
					fill="currentColor"
					d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
				/>
			</svg>
		)
	},

	//docsRepositoryBase: 'https://github.com/energo-alternativa-ru/energo-alternativa.ru/tree/main'

	/**
	 * Вы можете настроить параметры, связанные с SEO, с помощью useNextSeoPropsопции.
	 * Функция useNextSeoProps возвращает реквизиты, которые будут переданы в Next SEO.компонент.
	 * @link https://github.com/garmeeh/next-seo#add-seo-to-page
	 * @link https://nextra.site/docs/docs-theme/theme-configuration#seo-options
	 */
	useNextSeoProps() {
		const {asPath} = useRouter()
		if (asPath !== '/') {
			return {
				titleTemplate: '%s – Альтернатива'
			}
		}
	},

	footer: {
		text: <span>{new Date().getFullYear()} © Компания ООО «Альтернатива»</span>
	},

	themeSwitch: {
		useOptions() {
			return {
				light: 'Светлая тема',
				dark: 'Темная тема',
				system: 'Автоматически'
			}
		}
	},

	faviconGlyph: '∀'
}
