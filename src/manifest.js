import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'Chrome Extension',
  description: '',
  version: '0.0.0',
  manifest_version: 3,
  icons: {
    16: 'img/logo.png',
    32: 'img/logo.png',
    48: 'img/logo.png',
    128: 'img/logo.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/logo.png',
  },
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/content/index.js'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['img/logo.png', 'img/logo.png', 'img/logo.png', 'img/logo.png'],
      matches: [],
    },
  ],
  permissions: [
  ],
})
