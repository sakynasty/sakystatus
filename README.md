# Sakynasty Status (SakyStatus)

## 🚧 Important notice

Of course, **the project was never designed to be used by anyone other than myself**, and probably never will be. You'll have to make some modifications to the code if you intend to use my work as a basis.

Everyone has the right to use the code of the repo "SakyStatus" by [@Sakynasty](https://github.com/sakynasty) nevertheless all quotations of the code and original design must remain effective by respect of the working hours on the site which you avoid thanks to that.

The design was inspired by the "[Upptime](https://upptime.js.org/?ref=status.sakynasty.com)" Status pages, but was reworked using Tailwind, Flowbit and vanilla CSS.

The API is that of [UptimeRobot](https://uptimerobot.com/?rid=c0a0c47070eff7), which I have customized myself under the [SakyAPI](https://api.sakynasty.com/api/uptimerobot/monitors?ref=status.sakynasty.com) service to improve it and add elements that are personally useful to me for [SakyStatus](https://status.sakynasty.com).

## 🚀 Project Structure

Inside of my SvelteKit project for SakyStatus, you'll see the following folders and files:

```/
├── static/
│   ├── assets/
│   │    └── css/
│   │    │   └── *.css
│   │    └── js/
│   │    │   └── *.js
│   │    └── webfonts/
│   │        └── *.ttf, *.woff2
│   ├── banner.jpg
│   ├── robots.txt
│   └── favicon.png
├── src/
│   ├── lib/
│   │    └── css/
│   │    │   └── *.css
│   │    └── img/
│   │        └── *.png
│   ├── components/
│   │    ├── Layout/ # Elements for +layout.svelte
│   │    │    └── *.svelte
│   │    ├── Loading/ # Elements for Loading status
│   │    │    └── Loader.svelte
│   │    ├── old/ # Old elements, currently unused
│   │    │    └── old.*.svelte
│   │    ├── ActiveIncidents.svelte
│   │    ├── Error.svelte
│   │    └── LiveStatus.svelte
│   ├── routes/
│   │   ├── monitors/
│   │   │   └── [id]/ # Auto-Generative ID with API
│   │   │   │   └── logs/
│   │   │   │       └── +page.svelte
│   │   │   └── +page.svelte
│   │   ├── +error.svelte
│   │   ├── +layout.svelte
│   │   └── +page.server.js
│   └── app.d.ts, app.html
└── *.json, .*, *.config.js, *.cjs
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                                                                  |
| :-------------------- | :-------------------------------------------------------------------------------------- |
| `npm install`         | Installs dependencies                                                                   |
| `npm run dev`         | Starts local dev server at `localhost:5173`                                             |
| `npm run devhost`     | Starts local network dev server at `YourLocalIPRunServer:5173`                          |
| `npm run build`       | Build your production site to `./dist/`                                                 |
| `npm run preview`     | Preview your build locally, before deploying                                            |
| `npm run check`       | SvelteKit Sync. and Check with Svelte-Check the project via a TSConfig file.            |
| `npm run check:watch` | SvelteKit Sync. and Check with Svelte-Check the project via a TSConfig file in "Watch". |
| `npm run lint`        | Run Prettier Check & ESLint                                                             |
| `npm run format`      | Run Prettier format                                                                     |

## 👀 Want to learn more?

Don't hesitate to consult the documentation of [SvelteKit](https://svelte.dev/docs/introduction), [CloudFlare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/#deploy-a-svelte-site) (If you use too), [TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit), [Flowbite](https://flowbite.com/docs/getting-started/svelte/#sveltekit).

! **I'm not going to help you since, once again, the project isn't intended to be used by others. I'm just making it public for curious people and for certain friends learning web development, that's all.** !
