# casino-games-frontend

Casino games includes blackjack and texas holdem, designed to work with custom circuits.

This front and backend casino is designed to simulate the main working parameters of a real casino website.
That includes, user and banking models.
The games will be played using a websocket connection.

This project will connact to a C# or windows python app (should be compatible with mac and pc)
The app will monitor the game and make bets for you when required.

An auto playing AI for the other players will be included.

Current Address [Live Casino Games Link](https://rococo-kleicha-53fa88.netlify.app/)

## Table of contents

- [casino-games-frontend](#casino-games-frontend)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Run this project locally](#run-this-project-locally)
  - [General action](#general-action)

## General info

<!-- <img src='./assets/images/bioclickerMd.png' alt='login page' style='width: 300px; height: 200px;' />
<img src='./assets/images/bioclickerSm.png' alt='login page' style='width: 150px; height: 300px;' /> -->

A database is not in use yet but will be and is currently found.

Server deployment with Vercel @ [https://webdesignsbytom-app.vercel.app/](https://webdesignsbytom-app.vercel.app/)

## Technologies

App developed with:

Frontend: React, JavaScript, Tailwind, Axios, validator

Backend: Express, Prisma, JavaScript, python, postgreSQL

## Run this project locally

1. Fork this repository and clone the fork to your machine.
2. Navigate to client and server files and run
3. `npm install`
4. `npm start`

## General action

General actions

- const actionDisconnect string = "disconnect"
- const actionError string = "error"
- const actionOnJoin string = "on-join"
- const actionOnTakeSeat string = "on-take-seat"
- const actionJoin string = "join"
- const actionMuteVideo string = "mute-video"
- const actionNewMessage string = "new-message"
- const actionSendMessage string = "send-message"
- const actionTakeSeat string = "take-seat"

WebRTC Signaling actions

- const actionOnReceiveSignal string = "on-receive-signal"
- const actionSendSignal string = "send-signal"

Game actions

- const actionBet string = "bet"
- const actionCall string = "call"
- const actionCheck string = "check"
- const actionFold string = "fold"
- const actionOnHoleCards string = "on-hole-cards"
- const actionRaise string = "raise"
- const actionUpdateGame string = "update-game"
