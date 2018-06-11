# Inspiration Board

## Introduction

In this project you will use a provided API to provide an inspiration board front-end.  You will build an application which displays a set of cards containing inspirational quotes and emoji images, like the board in the Ada common room.  Users should be able to add and remove cards.

![Adas inspiration Board](./images/board.jpg)

This is a [Stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md#stage-2) individual project. You will be submitting a PR for this project at the end.

The project is due Monday June 18th 9am

## Learning Goals
This project should enable you to demonstrate learning in:
- Using an API within a React app
- Designing a React application with multiple interacting components
- Creating test files with snapshot tests

## Project Baseline

The API is hosted at **https://inspiration-board.herokuapp.com/**.  You can find the API documentation and source code hosted [here](https://github.com/AdaGold/inspiration-board-api).

You should spend time exploring the API with Postman to get a feel for how to make requests and how the data is returned.

### A Note About Styles

We have provided styles for you in `.css` files. Styling is not a major learning goal for this project, so please limit the amount of time you spend on styling.

To ease the use of our styles, the project conforms to a naming methodology/naming convention standard known as [BEM, or Block Element Modifier](http://getbem.com/). Essentially, you can count on the provided styles to conform to the following naming rules:
- There aren't any, or rarely any element/tag selectors or ID selectors, and all styles selectors are on classes. That means there are are a lot more classes to set, but it relies less on assuming a specific HTML structure before understanding how to use it
- Classes are named in [block__element--modifier](http://getbem.com/naming/) format:
  - The first section, `block`, will describe the semantic block that the style applies to
  - The second section, `element` (after two underscores), will describe the specific element within that block that the style applies to
  - The third section `modifier` (after two hyphens), will describe any sort of modifier (ie `enabled`, `success`, `green`) for that block and element that the style applies to

Here's an example:
```css
.new-card-form__header {
  text-align: center;
  ...
}
```

In this case, there is some "block" (section, idea, maybe component) named `new-card-form`, and this style is for the "element" that represents the header by name of `header`. This style makes the header in the new card form `text-align: center;`. Note that this does not dictate what kind of HTML tag this is, or what its parent or children are.

Again, please limit the time you spend on styling, and reach out often and frequently.

## Wave 1

Create `Card` and `Board` components and use the provided hardcoded data to populate the board.

- Build the Card component to display a single inspirational quote and optional emoji.
- Build a `Board` component which renders a list of Cards from hardcoded data

Note there is a package installed called [`emoji-dictionary`](https://github.com/IonicaBizau/emoji-dictionary) which you can elect to use to display the emojis listed.

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
- Try to deploy the app on Github pages [(nice tutorial, here!)](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)

## What we're looking for
You can see what your instructors are looking for [here](./feedback.md)
