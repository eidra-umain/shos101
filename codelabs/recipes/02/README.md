# 📌 SHOS - Recipe 02 - Running Recipe 01 in a Simple Docker Container

Inside your project folder (where index.js is), create a file named Dockerfile and add the following content:


📌 Steps to Create a Dockerfile

Inside your project folder (where index.js is), create a file named Dockerfile and add the following content:
```dockerfile
# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package files (if needed) and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
```

📌 Steps to Build and Run the Container

1️⃣ Build the Docker image:

```sh
docker build -t shos-receipe-02 .

[+] Building 26.9s (10/10) FINISHED    docker:desktop-linux
 => [internal] load build definition from Dockerfile   0.0s
 => => transferring dockerfile: 422B                   0.0s
 => [internal] load metadata for docker.io/library/node:18  3.2s
 => [internal] load .dockerignore                      0.0s
 => => transferring context: 2B                        0.0s
 => [1/5] FROM docker.io/library/node:18@sha256:f12d34408955b2081f82078e8f96c3299ca0f38d11e76086cb9b9b1b669977e4   22.7s
 => => resolve docker.io/library/node:18@sha256:f12d34408955b2081f82078e8f96c3299ca0f38d11e76086cb9b9b1b669977e4    0.0s
 => => sha256:193c44006e77abbadfdd7be72b4ab6d7a5c08640ef575970f722b798ee7800ac 23.60MB / 23.60MB                    3.2s
 => => sha256:7f64f2de6125d2cecc7cdb8ab74ccf2c75c48432fb27d3cb31bb5ff6aa9b22f8 6.40kB / 6.40kB                      0.0s
 => => sha256:c9d3572a68af0b860060b7ea84adfa8406fa20cfd1337c947dfb661aa965eee7 64.36MB / 64.36MB                    9.4s
 => => sha256:9611c2b713640ce0f9156445b244c4da5e621183b56c0901d97a8b6d54ce10d7 202.72MB / 202.72MB                 18.2s
 => => sha256:f12d34408955b2081f82078e8f96c3299ca0f38d11e76086cb9b9b1b669977e4 6.41kB / 6.41kB                      0.0s
 => => sha256:f7408d42e1d2e15d67527d3cc3a97e5cf6916461b107c9ef69a16be51db26dba 2.50kB / 2.50kB                      0.0s
 => => extracting sha256:193c44006e77abbadfdd7be72b4ab6d7a5c08640ef575970f722b798ee7800ac                           0.3s
 => => sha256:c21298d709bbe636f8e0117479908714e3c57fc25c29912ba1a879d9fe3b6be7 3.32kB / 3.32kB                      3.5s
 => => sha256:16daed19a1beec25d01691949c814b87b7ebfb79df2c7a2a00a2898342aa90f3 45.77MB / 45.77MB                   11.3s
 => => extracting sha256:c9d3572a68af0b860060b7ea84adfa8406fa20cfd1337c947dfb661aa965eee7                           1.4s
 => => sha256:b63479a954b7c77d3022504ea6bf68bceef49aee1741a0146c2f9e2b883ffad3 1.25MB / 1.25MB                      9.7s
 => => sha256:ef16dcdb0e8b45ab53d32cd286f54173f2e5805312e0eaf2c4add1f2d4bb7aa7 447B / 447B                         10.1s
 => => extracting sha256:9611c2b713640ce0f9156445b244c4da5e621183b56c0901d97a8b6d54ce10d7                           3.2s
 => => extracting sha256:c21298d709bbe636f8e0117479908714e3c57fc25c29912ba1a879d9fe3b6be7                           0.0s
 => => extracting sha256:16daed19a1beec25d01691949c814b87b7ebfb79df2c7a2a00a2898342aa90f3                           1.1s
 => => extracting sha256:b63479a954b7c77d3022504ea6bf68bceef49aee1741a0146c2f9e2b883ffad3                           0.0s
 => => extracting sha256:ef16dcdb0e8b45ab53d32cd286f54173f2e5805312e0eaf2c4add1f2d4bb7aa7                           0.0s
 => [internal] load build context                      0.0s
 => => transferring context: 40.16kB                   0.0s
 => [2/5] WORKDIR /app                                 0.1s
 => [3/5] COPY package*.json ./                        0.0s
 => [4/5] RUN npm install                              0.9s
 => [5/5] COPY . .                                     0.0s
 => exporting to image                                 0.1s
 => => exporting layers                                0.0s
 => => writing image sha256:d9d3ca3bf51a821a1e30ce01d94d403e39ec79371e9091bd4b126cbc5d97481a                        0.0s
 => => naming to docker.io/library/shos-receipe-02
```

2️⃣ Run the container:

```sh
docker run -p 80:5006 shos-receipe-02

🚀 Server is running at http://localhost:5006
```
> http://localhost/mock.json


🚀 Done! Your app is now running inside a Docker container!