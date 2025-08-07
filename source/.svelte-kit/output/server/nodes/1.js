

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3c7f0617.js","_app/immutable/chunks/index.aeb42276.js","_app/immutable/chunks/singletons.c20128e6.js","_app/immutable/chunks/index.7396666b.js","_app/immutable/chunks/paths.3d827a61.js"];
export const stylesheets = [];
export const fonts = [];
