import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.eaee6f20.js","_app/immutable/chunks/index.aeb42276.js","_app/immutable/chunks/index.7396666b.js","_app/immutable/chunks/paths.3d827a61.js","_app/immutable/chunks/store.aaf3ec16.js"];
export const stylesheets = ["_app/immutable/assets/0.45a1998b.css"];
export const fonts = ["_app/immutable/assets/dm-sans-latin-ext-400-normal.9375a45c.woff2","_app/immutable/assets/dm-sans-latin-ext-400-normal.74b01bc5.woff","_app/immutable/assets/dm-sans-latin-400-normal.68f48197.woff2","_app/immutable/assets/dm-sans-latin-400-normal.c33adc8c.woff"];
