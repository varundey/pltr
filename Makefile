.PHONY: build clean zip build-zip

build:
	mkdir -p dist/pltr/src dist/pltr/images
	cp src/pltr.js dist/pltr/src/
	cp manifest.json dist/pltr/
	cp -r images/* dist/pltr/images/

zip:
	cd dist && zip -r pltr.zip pltr/

build-zip: build zip

clean:
	rm -rf dist/ 