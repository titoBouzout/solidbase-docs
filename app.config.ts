import { defineConfig } from "@solidjs/start/config";
import { withSolidBase } from "@kobalte/solidbase/config";

export default defineConfig(
  withSolidBase(
    {
      /* your SolidStart config */
    },
    {
      title: "Solid.js v2",
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
                {
                  title: "Quick Start",
                  link: "/quick-start",
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
                  title: "Async Utilities",
                  link: "/reactivity/async-utilities",
                },
                {
                  title: "createStore",
                  link: "/reactivity/createStore",
                },
                {
                  title: "createProjection",
                  link: "/reactivity/createProjection",
                },
                {
                  title: "Store Utilities",
                  link: "/reactivity/store-utilities",
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
