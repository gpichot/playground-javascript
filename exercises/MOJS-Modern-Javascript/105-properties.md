# Exercise 105 - Properties

Use [Excalidraw](https://excalidraw.com/) or some paper to draw a diagram of
properties and their values after the execution of the code.

## Exercise 1

```javascript
let john = {
  name: "lennon",
  address: {
    city: "liverpool",
  },
};

let paul = {
  name: "mccartney",
  address: john.address,
};

paul.address.city = "london";
```

## Exercise 2

```javascript
let griffindor = {
  name: "griffindor",
};

let harry = {
  name: "potter",
  house: griffindor,
};

let hermione = {
  name: "granger",
  house: {
    name: "griffindor",
  },
};

let ron = {
  name: "weasley",
  house: harry.house,
};

harry.house = {
  name: "hufflepuff",
};

hermione.house.name = "hufflepuff";
```

## Exercise 3

```javascript
let knight = {
  power: 40,
};
let thief = {
  power: 20,
  weapon: {
    type: "knife",
  },
};

let wizard = {
  power: thief.power,
  weapon: knight.weapon,
};

knight.weapon = thief.weapon;
thief.weapon = {
  type: "sword",
};
```
