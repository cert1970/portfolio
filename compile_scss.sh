#!/bin/bash

if [[ "$1" = "dev" ]]; then
  scss --watch --load-path node_modules --style nested --sourcemap=auto scss/style.scss:static/css/style.css
elif [[ "$1" == "ops" ]]; then
  scss --load-path node_modules --style compressed --sourcemap=none scss/style.scss:static/css/style.css
fi
