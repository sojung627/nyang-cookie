import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'nyangnyang-cookie',

  brand: {
    displayName: '냥쿠키',
    primaryColor: '#FFB7A3',
    icon: '앱아이콘URL',
  },

  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'npm run dev',
      build: 'npm run build',
    },
  },

  permissions: [],

  outdir: 'dist',

  webViewProps: {
    type: 'partner',
  },

  navigationBar: {
    withBackButton: true,
    withHomeButton: true,
  },
});import { defineConfig } from '@apps-in-toss/web-framework/config';

   export default defineConfig({
     appName: 'nyangnyang-cookie',

     brand: {
       displayName: '냥쿠키',
       primaryColor: '#FFB7A3',
       icon: '앱아이콘URL',
     },

     web: {
       host: 'localhost',
       port: 5173,
       commands: {
         dev: 'npm run dev',
         build: 'npm run build',
       },
     },

     permissions: [],

     outdir: 'dist',

     webViewProps: {
       type: 'partner',
     },

     navigationBar: {
       withBackButton: true,
       withHomeButton: true,
     },
   });