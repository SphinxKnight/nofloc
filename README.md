# nofloc
A WebExtension to disable FLoC on Chrome.

It naively uses `webRequest` to inject a `Permission-Policy` header (or add a value to it) in order to opt-out from FLoC from the browser.

Reference: https://web.dev/floc/#how-can-websites-opt-out-of-the-floc-computation

Demo site: https://floc.glitch.me/
