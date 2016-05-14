#!/usr/bin/env bash

r.js -o ./config/optimize.js

# replace require-config.js to bootstrap.js
# due to optimization took care of it already
cd deploy
	sed -i.bak 's/require-config/bootstrap/' index.html
	rm index.html.bak
	rm scripts/require-config.js
cd -
