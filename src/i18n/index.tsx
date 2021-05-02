import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const apiKey = 'IzcsIrbSGXHSgEWe6YFxOw';
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
	.use(HttpBackend)
	.use(initReactI18next)
	.init({
		fallbackLng: 'sk',

		ns: ['default '],
		defaultNS: 'default',

		supportedLngs: ['sk', 'en'],

		backend: {
			loadPath
		}
	});
