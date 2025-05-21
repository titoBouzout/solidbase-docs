# WIP Solid 2.0 docs

https://solid-next-docs.netlify.app/

Rough drafts for Solid 2.0 ideas and experiments. Things may change at any time.

Stable Solid 1.9 documentation resides in https://docs.solidjs.com/

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment
to different environments.

By default, `npm run build` will generate a Node app that you can run with
`npm start`. To use a different preset, add it to the `devDependencies` in
`package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
