# Doggo App

This project is a React application built with Vite. It includes a Docker setup to build and serve the application using Nginx.
Purpose of this project is to use in Demos.

## Project Structure

- `src/`: Contains the source code of the React application.
- `public/`: Contains public assets.
- `Dockerfile`: Docker configuration to build and serve the application.
- `package.json`: Project configuration and dependencies.
- `.gitignore`: Specifies files to be ignored by Git.
- `charts/`: Contains Helm chart for deploying the application to EKS. repo for the chart is [here](https://github.com/awsfanboy/helm-charts)

## Prerequisites

- Node.js (latest LTS version recommended)
- npm
- Docker

## Getting Started

### Install Dependencies

```sh
npm install
```
### Run Development Server
```
npm run dev
```
### Build for Production
```
npm run build
```

## Docker

### Local docker build
```sh
docker build -t doggo-app .
```
### For both arm64 and amd64 platforms
```sh
docker buildx build --platform linux/amd64,linux/arm64 -t doggo-app .
```

