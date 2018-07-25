# Quick projects

#### https://spduk.github.io/Quick-Projects

Simply install. Needs npm-run-all to watch scss & JS files at the same time.
A lot of things don't work on certain browsers or mobile, but if you use chrome it probably works.

```
npm install && npm install npm-run-all --save-dev
```

Then just start the webpack server in watch mode.

```
npm start
```

### Currently in this repo:

#### Fake loading spinner that transitions the page

##### Made with Anime.js & CSS transforms

- Uses anime.js to transform from a bar to a circle, then from a circle into a loading spinner.
- Loading spinner gets quicker as it continues spinning, until it eventually spins "out of control" and grows to take over the screen
- Once it takes over the screen the page finishes "loading" and goes to the next page, the spinner is the same color as the background of the next page

---

#### Hover text shadow that follows the mouse

##### Made with vanilla JS & CSS

- Uses vanilla JS & CSS to follow the mouse movements and apply a shadow based on the current position.

---

#### Snake game

##### Made with HTML5 Canvas & vanilla JS

- The classic snake game, use the arrow keys to control the snake, if you touch your tail you lose.
- Uses react state to keep track of the highscore and "play" states, to pause the game if you lose and display the You Lost warning message
- Has a hard mode that simply makes each apple you eat give more points, but also make you gain a much longer tail for each one.

---

#### Gravity

##### Made with HTML5 Canvas & Vanilla JS

- A bunch of lines that follow the mouse, spinning around in a circle all at different distances from the mouse.
- Slightly delayed from when the mouse moves, and has a trail behind each line to make the lines
- Leaves behind a trail everywhere you move almost like painting the background.

---

#### Bouncing Balls

##### Made with HTML5 Canvas & Vanilla JS

- Pretty much what you'd expect, just 200 balls in the canvas bouncing around, when they hit the wall they bounce back.
- When hovering near a ball it grows, when you hover away it shrinks back down to normal size.

---

#### Visualized Sort

##### Made with Vanilla JS & Flexbox
- On page load the numbers come in (1-50) and then when you click sort numbers they will be sorted from 1 - 50, moving around and turning green when sorted.
- Uses anime JS to also show a little progress bar for each individual item. Randomizes and resorts if you click sort numbers again.

---
