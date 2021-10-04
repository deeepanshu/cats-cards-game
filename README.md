# Cats Card Game

## Pre-requisites

1. Redis Instance (https://redis.io/download)
2. Nodejs v14

## What is used in the project?

#### Server
- Typescript
- Redis (leaderboard using sorted set and gamestate using hashes)
-	Express for api support:
	-	GET /gamestate - Getting game state for user, user is fetched using username header.
	-	PATCH /gamestate - Update a game state for a user, user is fetched using username header.
	-	GET /leaderboard - Getting latest leaderboard.

#### Client
- React
- Redux Toolkit - For state management
- Axios for 3rd API Support
- Typescript
- Webpack

## How to start the project

#### Server

- Assuming you have already installed redis and it is using default port.
- Go to `server` dir.
- Run `npm i` or `yarn`.
- Run `yarn start`.
- If everything is working fine, you should see `server listening` on console.
- Server will run on `9000` port.
- If something goes wrong, let me know, I will have a look at it.

#### Client
- Go to `client` dir.
- Run `npm i` or `yarn`.
- Run `yarn start`.
- UI will run on `3000` port.

 ## Features
 - Game states are saved in redis instance on every move by making a `PATCH /gamestate` call.
 - Game states are retrieved everytime user enters username, if an uncompleted game is found, that game is loaded and user can continue play that. Game states are retrieved by making `GET /gamestate` call.
 - UI has a real time Leaderboard, which uses polling method to update leaderboard every 5 seconds. It is updated by making `GET /leaderboard` call.
 - Game Instructions can be found in INSTRUCTIONS section.
 - Images used for cards are precached when the UI is loaded.

## Instructions
##### You start by adding a user name, and hitting play
<img width="200" alt="Screen Shot 2021-10-04 at 10 46 18 PM" src="https://user-images.githubusercontent.com/17081705/135895490-0ffd348b-7387-4473-a0d3-ab7b292d367f.png">

##### The first card appears is this one, its basically the back face of actual card.
<img width="200" alt="Screen Shot 2021-10-04 at 10 46 44 PM" src="https://user-images.githubusercontent.com/17081705/135895486-0ccb843f-9845-4cc5-ac8e-39cf228d14c8.png">

#####  Types of Cards

 - 5 Cat Cards
 - 1 Bomb Card
 - 1 Bomb Diffuse Card
 - 1 Shuffle Card

##### Rules, are simple

 - Collect 5 Cat Cards to win the game :D
 - If you get a bomb card, you lose :(
 - If you get a bomb diffuse card, you can use it to diffuse the bomb card.
 - If you get a shuffle card, all your progess is reset, and you have to start over.

###### Cat Card
 <img width="200" alt="Screen Shot 2021-10-04 at 10 57 53 PM" src="https://user-images.githubusercontent.com/17081705/135896744-6894d9ec-f5d0-4fe8-925e-e742e0e38db8.png">
 
###### Bomb Card
<img width="200" alt="Screen Shot 2021-10-04 at 10 58 20 PM" src="https://user-images.githubusercontent.com/17081705/135896815-a7d2b1e5-93f9-4f38-bd9b-3e65b57f4500.png">

###### Bomb Diffuse Card
<img width="200" alt="Screen Shot 2021-10-04 at 10 57 22 PM" src="https://user-images.githubusercontent.com/17081705/135896713-a2a2df0e-5014-452a-94af-13ab2514be7a.png">

###### Shuffle Card
<img width="200" alt="Screen Shot 2021-10-04 at 10 57 04 PM" src="https://user-images.githubusercontent.com/17081705/135896703-97033919-5873-41df-9d23-bdc03c859d9a.png">
