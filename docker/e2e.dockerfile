FROM cypress/base

WORKDIR /app

COPY cypress.json ./

RUN cypress verify