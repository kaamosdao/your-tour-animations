install:
	npm install

build:
	npm run build

serve:
	npm run dev & npm run slicemachine

start:
	npm run start

convert:
	node ./utils/convertToWebp.js

lint:
	npm run lint

prettier:
	npx prettier --check .
