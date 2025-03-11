.PHONY: build clean

build:
	mkdir -p dist/pltr/src dist/pltr/images
	cp src/pltr.js dist/pltr/src/
	cp manifest.json dist/pltr/
	cp -r images/* dist/pltr/images/

clean:
	rm -rf dist/ 