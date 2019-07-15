node-redis-typescript-webassembly-sass
===

This is a template of project for the develop web application using following features.

<br>

## Feature
 - Node.js
 - Redis
 - TypeScript
 - Sass
 - WebAssembly in Rust

<br>

## Usage 

 ### Create Project

  1. Clone this repository.
  ```sh
    git clone --depth 1 https://github.com/snst-lab/node-redis-typescript-webassembly-sass <project name>
  ```

  2. Run command below to launch container 
  ```sh
    make install user=<user name> project=<project name>
  ```

  3. Login to container 
  ```sh
    docker ps   //Check container ID with ps command first
    docker exec -it <container_id> bash
  ```

 ### Edit Project

  1. Run command below to launch container 
  ```sh
    make edit
  ```

  2. Login to container 
  ```sh
    docker exec -it <container_id> bash
  ```

<br>

## Operation check of Redis
  After starting the container, you can check the operation of Redis with the following command.
  
   ```sh
    curl -X POST http://localhost:3000/api
   ```
If it works properly, you have the following response.
   ```sh
    POST request received. Number of Visits: [Times of POST Request]
   ```

<br>

## Base Docker Image
  This tryout uses Minimum Ubuntu from the following repository 
> https://github.com/tianon/docker-brew-ubuntu-core/blob/59aa7dfef17153ecc812adbf26516675ce67e8aa/bionic/Dockerfile

There is 'alpine linux' as a representative of the small image.
But, I took an alternative since 'VSCode Remote Development' does not support 'alpine linux'.

<br>
