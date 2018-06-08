# Ada's Inspiring Board

## Introduction

In this project you will use a provided API to provide an inspiration board front-end.  You will build an application which displays a set of cards containing inspirational quotes and emoji images, like the board in the Ada common room.  Users should be able to add and remove cards.

![Adas inspiration Board](./images/board.jpg)

This is a [Stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md#stage-2) individual project. You will be submitting a PR for this project at the end.

## Learning Goals
This project should enable you to demonstrate learning in:
- Using an API within a React app
- Designing a React application with multiple interacting components
- Creating test files with snapshot tests

## Project Baseline

The API is hosted at **https://inspiration-board.herokuapp.com/**.  You can find the API documentation and source code hosted [here](https://github.com/AdaGold/inspiration-board-api).

You should spend time exploring the API with Postman to get a feel for how to make requests and how the data is returned.

## Wave 1

Create `Card` and `Board` components and use the provided hardcoded data to populate the board.

- Build the Card component to display a single inspirational quote and optional emoji.
- Build a `Board` component which renders a list of Cards from hardcoded data

## Wave 2

In wave 2 you will add API functionality.
- Modify the `Board` component to use `axios` to retrieve card data from the end point:
  - `https://inspiration-board.herokuapp.com/boards/<YOUR-NAME>/cards`
  - Note that you should put your name in place of `<YOUR-NAME>`
- Create a shallow snapshot tests for the `Card` and `Board` component

## Wave 3
- Add a delete button on each card which will remove a card from the `Board` and delete it from the API.
- Create a `NewCardForm` component which will add new cards to the board and trigger POST requests to the API to create a card on the API.

## Optionals
Possible optional enhancements include:
- Allowing the user to switch between bards with a drop-down list
- Add user interaction testing
- Allow the `NewCardForm` to post to different boards on the API.

## What we're looking for
You can see what your instructors are looking for [here](./feedback.md)
