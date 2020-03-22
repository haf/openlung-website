# OpenLung web site

This is the repo for the OpenLung website / app. It's build as a progressive web app,
so it works offline, and is focused on providing support for people looking to create,
use, or understand mechanichal ventilators.


## Technical choices and opportunities

We use NextJS for rendering. This makes it possible to render everything to static files
and to host it on now.sh.

By using [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#generatesw_plugin) we can make it work well offline.