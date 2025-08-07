import { c as create_ssr_component, a as spread, e as escape_object, v as validate_component, i as is_client, g as get_store_value, b as subscribe } from "../../chunks/index2.js";
import { r as readable, w as writable } from "../../chunks/index.js";
import "canvas-confetti";
import { t as toggleAll } from "../../chunks/store.js";
var name = "@vercel/analytics";
var version = "1.5.0";
var initQueue = () => {
  if (window.va)
    return;
  window.va = function a(...params) {
    (window.vaq = window.vaq || []).push(params);
  };
};
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = process.env.NODE_ENV;
    if (env === "development" || env === "test") {
      return "development";
    }
  } catch (e) {
  }
  return "production";
}
function setMode(mode = "auto") {
  if (mode === "auto") {
    window.vam = detectEnvironment();
    return;
  }
  window.vam = mode;
}
function getMode() {
  const mode = isBrowser() ? window.vam : detectEnvironment();
  return mode || "production";
}
function isDevelopment() {
  return getMode() === "development";
}
function getScriptSrc(props) {
  if (props.scriptSrc) {
    return props.scriptSrc;
  }
  if (isDevelopment()) {
    return "https://va.vercel-scripts.com/v1/script.debug.js";
  }
  if (props.basePath) {
    return `${props.basePath}/insights/script.js`;
  }
  return "/_vercel/insights/script.js";
}
function inject(props = {
  debug: true
}) {
  var _a;
  if (!isBrowser())
    return;
  setMode(props.mode);
  initQueue();
  if (props.beforeSend) {
    (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
  }
  const src = getScriptSrc(props);
  if (document.head.querySelector(`script[src*="${src}"]`))
    return;
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
  script.dataset.sdkv = version;
  if (props.disableAutoTrack) {
    script.dataset.disableAutoTrack = "1";
  }
  if (props.endpoint) {
    script.dataset.endpoint = props.endpoint;
  } else if (props.basePath) {
    script.dataset.endpoint = `${props.basePath}/insights`;
  }
  if (props.dsn) {
    script.dataset.dsn = props.dsn;
  }
  script.onerror = () => {
    const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
    console.log(
      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`
    );
  };
  if (isDevelopment() && props.debug === false) {
    script.dataset.debug = "false";
  }
  document.head.appendChild(script);
}
const app = "";
const index = "";
const Code_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.5em" },
      { height: "1.5em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mt-20 items-center text-xs text-stone-400"><a href="https://github.com/phenomen/dnd5e-ru-ref" target="_blank" rel="noreferrer" class="flex items-center justify-center">${validate_component(Code_2, "LucideCode2").$$render($$result, { class: "h-5 w-5" }, {}, {})}
		<span class="ml-1 font-medium hover:underline">open source by phenomen#1337</span></a></div>`;
});
const isClient = is_client;
readable(/* @__PURE__ */ new Date(), (set) => {
  const interval = setInterval(() => {
    set(/* @__PURE__ */ new Date());
  }, 10);
  return () => clearInterval(interval);
});
function storage(store, key, type = "other") {
  if (!key || typeof key !== "string" || key.trim() === "") {
    console.warn("Local storage key not provided or invalid!");
  }
  function loadFromStorage() {
    if (isClient) {
      let valueStr;
      try {
        valueStr = localStorage.getItem(key);
        if (valueStr !== null) {
          const json = JSON.parse(valueStr);
          if (type === "Map") {
            store.set(new Map(Object.entries(json)));
          } else {
            store.set(json);
          }
        }
      } catch (e) {
        if (valueStr === "") {
          store.set("");
        } else {
          if (valueStr === "false" || valueStr === "true") {
            store.set(valueStr === "false" ? false : true);
          } else if (!Number.isNaN(Number(valueStr))) {
            store.set(Number(valueStr));
          } else {
            store.set(valueStr);
          }
        }
      }
    }
  }
  function saveToStorage(value) {
    if (isClient) {
      if (typeof value === "boolean" || typeof value === "number" || typeof value === "string") {
        localStorage.setItem(key, value.toString());
      } else if (typeof value === "object") {
        if (value instanceof Map) {
          localStorage.setItem(key, JSON.stringify(Object.fromEntries(value)));
        } else {
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    }
  }
  function set(value) {
    saveToStorage(value);
    store.set(value);
  }
  function update(fn) {
    const value = fn(get_store_value(store));
    saveToStorage(value);
    store.update(fn);
  }
  loadFromStorage();
  return {
    subscribe: store.subscribe,
    set,
    update
  };
}
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.5em" },
      { height: "1.5em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></g>`}<!-- HTML_TAG_END --></svg>`;
});
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.5em" },
      { height: "1.5em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Chevrons_up_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.5em" },
      { height: "1.5em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 15l5 5l5-5M7 9l5-5l5 5"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Chevrons_down_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.5em" },
      { height: "1.5em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 20l5-5l5 5M7 4l5 5l5-5"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $toggleAll, $$unsubscribe_toggleAll;
  $$unsubscribe_toggleAll = subscribe(toggleAll, (value) => $toggleAll = value);
  const theme = storage(writable(false), "theme");
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  $$unsubscribe_toggleAll();
  return `<div class="my-4 flex items-center space-x-2 dark:text-stone-100 sm:space-x-4"><h1 class="flex-1 text-sm font-bold uppercase">D&amp;D 5e - Справочник на русском языке</h1>

	<button class="flex cursor-pointer">${$toggleAll ? `${validate_component(Chevrons_up_down, "LucideChevronsUpDown").$$render($$result, { class: "h-6 w-6" }, {}, {})}` : `${validate_component(Chevrons_down_up, "LucideChevronsDownUp").$$render($$result, { class: "h-6 w-6" }, {}, {})}`}</button>

	<button class="flex cursor-pointer">${$theme ? `${validate_component(Moon, "LucideMoon").$$render($$result, { class: "h-6 w-6 text-stone-100" }, {}, {})}` : `${validate_component(Sun, "LucideSun").$$render($$result, { class: "h-6 w-6 text-stone-700 " }, {}, {})}`}</button></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  return `<div class="mx-auto max-w-7xl p-2 md:p-4">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
