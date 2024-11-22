# Creating multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production


# Creating final image
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/build build/
COPY package*.json ./
RUN npm install --production
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "build"]
