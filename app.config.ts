import { defineConfig } from "@solidjs/start/config";
import { withSolidBase } from "@kobalte/solidbase/config";

export default defineConfig(
  withSolidBase(
    {
      server: {
        preset: "netlify",
      },
    },
    {
      title: "Solid.js v2",
			description: "Rough WIP docs for Solid 2.0.",
      editPath: "https://github.com/devagrawal09/solid-next-docs/tree/master/:path",
      themeConfig: {
        sidebar: {
          items: [
            {
              title: "Getting Started",
              collapsed: true,
              items: [
                {
                  title: "Overview",
                  link: "/",
                },
                // {
                //   title: "Quick Start",
                //   link: "/quick-start",
                // },
              ],
            },
            {
              title: "Reactivity",
              collapsed: true,
              items: [
                {
                  title: "createSignal",
                  link: "/reactivity/createSignal",
                },
                {
                  title: "createMemo",
                  link: "/reactivity/createMemo",
                },
                {
                  title: "createAsync",
                  link: "/reactivity/createAsync",
                },
                {
                  title: "Utilities",
                  link: "/reactivity/utilities",
                },
                {
                  title: "createEffect",
                  link: "/reactivity/createEffect",
                },
                {
                  title: "createRenderEffect",
                  link: "/reactivity/createRenderEffect",
                },
              ],
            },
            {
              title: "Stores",
              collapsed: true,
              items: [
                {
                  title: "createStore",
                  link: "/stores/createStore",
                },
                {
                  title: "createProjection",
                  link: "/stores/createProjection",
                },
                {
                  title: "Store Utilities",
                  link: "/stores/store-utilities",
                },
              ],
            },
            {
              title: "Rendering",
              collapsed: true,
              items: [
                {
                  title: "<Show />",
                  link: "/rendering/show",
                },
                {
                  title: "<For />",
                  link: "/rendering/for",
                },
                {
                  title: "<Repeat />",
                  link: "/rendering/repeat",
                },
                {
                  title: "<Suspense />",
                  link: "/rendering/suspense",
                },
                {
                  title: "<ErrorBoundary />",
                  link: "/rendering/error-boundary",
                },
              ],
            },
            {
              title: "Philosophy",
              collapsed: true,
              items: [
                {
                  title: "Derived Reactivity",
                  link: "/philosophy/derived-reactivity",
                },
                {
                  title: "Lazy Signals",
                  link: "/philosophy/lazy-signals",
                },
                {
                  title: "Colorless Async",
                  link: "/philosophy/colorless-async",
                },
                {
                  title: "Automatic Batching",
                  link: "/philosophy/automatic-batching",
                },
              ],
            },
            {
              title: "Migration",
              collapsed: true,
              items: [
                {
                  title: "Migration Guide",
                  link: "/migration",
                },
                {
                  title: "Breaking Changes",
                  link: "/breaking-changes",
                },
              ],
            },
            {
              title: "Development",
              collapsed: true,
              items: [
                {
                  title: "Roadmap",
                  link: "/roadmap",
                },
              ],
            },
          ],
        },
      },
    }
  )
);
