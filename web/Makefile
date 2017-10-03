# example use: make ver=latest env=dev test

ifndef ver
$(error ver is not set)
endif

include $(env).mk

gcr_project = german-practice
gcr_image = german-practice-web

run:
	yarn dev

build:
	USE_CONFIG=$(USE_CONFIG) yarn build
	docker build -t gcr.io/$(gcr_project)/$(gcr_image):$(ver) .
	rm -rf dist

test:
	docker run --rm -it -p 5000:5000 \
	gcr.io/$(gcr_project)/$(gcr_image):$(ver)

push:
	gcloud docker -- push gcr.io/$(gcr_project)/$(gcr_image):$(ver)
