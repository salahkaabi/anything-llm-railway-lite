# Dockerfile for simplified AnythingLLM on Railway
FROM node:18

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 3001

CMD ["npm", "run", "dev"]