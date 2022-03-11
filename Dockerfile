FROM node:alpine

RUN apk update
RUN apk upgrade
RUN apk add bash

RUN npm install -g npm@8.5.4

COPY . /apps

WORKDIR /apps

RUN bash build.sh

RUN git config --global user.name 'jbuendia1y'
RUN git config --global user.email 'jgamer669@gmail.com'
RUN git remote set-url origin https://jbuendia1y:TOKEN@github.com/jbuendia1y/frontend_mentor_challenges.git
RUN git add gh-pages && git commit -m "Deploy gh-pages"
RUN git subtree push --prefix gh-pages origin gh-pages