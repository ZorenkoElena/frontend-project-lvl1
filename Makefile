install:
	npm ci

brain-games: 
	node bin/brain-games.js
	node bin/brain-even.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .