export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.64e04f74.js","app":"_app/immutable/entry/app.40bd4bad.js","imports":["_app/immutable/entry/start.64e04f74.js","_app/immutable/chunks/index.aeb42276.js","_app/immutable/chunks/singletons.c20128e6.js","_app/immutable/chunks/index.7396666b.js","_app/immutable/chunks/paths.3d827a61.js","_app/immutable/entry/app.40bd4bad.js","_app/immutable/chunks/index.aeb42276.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
