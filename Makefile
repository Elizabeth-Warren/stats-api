build:
	docker build . -t stats-api

tests:
	make build
	docker run --rm stats-api
