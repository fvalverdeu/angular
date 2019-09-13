#!/bin/bash

## Create image
docker build -t frontend:latest .

## Remover contenedor anterior
docker stop frontend
docker rm frontend

## Run image
docker run -d -p 9000:80 -it --name frontend frontend:latest

## Clear image
docker rmi $(docker images -f "dangling=true" -q)
