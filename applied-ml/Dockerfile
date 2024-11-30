FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000
ENV MODEL_URL="https://storage.googleapis.com/models_buck/model/model.jsonl"  

EXPOSE 5000

CMD ["npm", "start"]
