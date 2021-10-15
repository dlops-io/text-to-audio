#!/bin/bash

# exit immediately if a command exits with a non-zero status
set -e

# Define some environment variables
export IMAGE_NAME="text-to-audio-api-service"
export BASE_DIR=$(pwd)
export SECRETS_DIR=$(pwd)/../secrets/
export GOOGLE_APPLICATION_CREDENTIALS=/secrets/gcp-service.json

# Build the image based on the Dockerfile
docker build -t $IMAGE_NAME -f Dockerfile .

# Run the container
docker run --rm --name $IMAGE_NAME -ti \
--mount type=bind,source=$BASE_DIR,target=/app \
--mount type=bind,source="$SECRETS_DIR",target=/secrets \
-p 9000:9000 \
-e GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS \
-e DEV=1 $IMAGE_NAME