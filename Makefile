# example use: make ver=0.0.1 env=dev test

ifndef ver
$(error ver is not set)
endif

include $(env).mk

gcr_project = german-practice
gcr_image = german-practice-api

run:
	go build -o app && \
	API_VERSION=$(ver) \
	DB_HOST=$(DB_HOST) \
	DB_NAME=$(DB_NAME) \
	DB_PASSWORD=$(DB_PASSWORD) \
	./app

build:
	GOOS=linux go build -o app
	docker build -t gcr.io/$(gcr_project)/$(gcr_image):$(ver) .
	rm -rf app

test:
	docker run --rm -it -p 8080:8080 \
	-e API_VERSION=$(ver) \
	-e DB_HOST=$(DB_HOST) \
	-e DB_NAME=$(DB_NAME) \
	-e DB_PASSWORD=$(DB_PASSWORD) \
	gcr.io/$(gcr_project)/$(gcr_image):$(ver)

push:
	gcloud docker -- push gcr.io/$(gcr_project)/$(gcr_image):$(ver)

