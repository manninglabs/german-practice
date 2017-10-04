# example use: make ver=latest env=dev test

ifndef ver
$(error ver is not set)
endif

include $(env).mk

gcr_project = german-practice
gcr_image = german-practice-web

run:
	CONFIG_ENV=$(CONFIG_ENV) yarn dev

buildimage:
	CONFIG_ENV=$(CONFIG_ENV) yarn build
	docker build -t gcr.io/$(gcr_project)/$(gcr_image):$(ver) .
	rm -rf dist

runimage:
	docker run --rm -it -p 5000:5000 \
	gcr.io/$(gcr_project)/$(gcr_image):$(ver)

pushimage:
	gcloud docker -- push gcr.io/$(gcr_project)/$(gcr_image):$(ver)
