#!/bin/bash

docker run -d --rm --name blog -p 8000:8000 -w /app -v $(pwd):/app node:10 /bin/bash -c "npm install && npm install -g gatsby-cli && gatsby develop --host=0.0.0.0"

echo "Waiting blog to launch on 8000..."

waitport() {
  set -e
  while ! curl --output /dev/null --silent --head --fail http://localhost:$1; do sleep 1 && echo -n .; done;
  set +e
}

waitport 8000

echo "blog launched on http://localhost:8000"
echo "Have fun!"
