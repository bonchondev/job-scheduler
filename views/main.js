//@ts-ignore
import { createInertiaApp } from '@westacks/inertia-svelte'
import TanStack from "./src/layouts/Layout.svelte"
import "./app.css";

createInertiaApp({
  //@ts-ignore
  resolve: (name) => {
    const page = import.meta.glob('./src/pages/**/*.svelte', { eager: true })[`./src/pages/${name}.svelte`]
    page.layout = page.layout
        ? (Array.isArray(page.layout) ? [TanStack, ...page.layout] : [TanStack, page.layout])
        : [TanStack]

    return page
  },
  //@ts-ignore
  setup({ el, App, props }) {
    new App({ target: el, props });
  },
});
