"use strict";

console.log("Modern Javascript Operators && Expressions");

console.log("--- 1. Declarations && Destructuring ---");
// 1. Use the proper declaration syntax to declare the following variables and
// use the proper destructuring syntax.

const user = {
  name: "John",
  lastName: "Snow",
  age: 30,
  email: "john.snow@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const types = ["grass", "fire", "water", "bug", "normal", "poison"];

const [grassType, fireType, ...otherTypes] = types;

const { lastName, address } = user;
const sibling = {
  name: "Jane",
  lastName,
  age: 28,
  address,
};

console.log("--- 2. Creating Objects and Arrays ---");
// 2. Use the proper syntax to create the following objects and arrays.

const user2 = {
  firstName: "John",
  lastName: "Snow",
};

const user2Extra = {
  role: "admin",
  email: "john.snow@example.com",
};

const user2Final = {
  ...user2,
  ...user2Extra,
};

// Arrays
const typesPikachu = ["electric", "normal"];
const typesBulbasaur = ["grass", "poison"];
const typesCharmander = ["fire"];

const pokemonTypes = [...typesPikachu, ...typesBulbasaur, ...typesCharmander];

console.log("--- 3. Arrow functions ---");
// 3. Use the arrow functions in place of the following functions.

const add = (a, b) => a + b;

const pow = (a, b) => {
  console.log(`${a} to the power of ${b} is ${Math.pow(a, b)}`);

  return Math.pow(a, b);
};

const parityToString = (n) => (n % 2 === 0 ? "even" : "odd");

const createUser = (name, lastName) => ({
  name,
  lastName,
});

const combineTypes = (types1, types2) => [...types1, ...types2];

console.log("--- 4. Best Practices ---");
// 4. Use the best practices in the following code:
//  - Use return early pattern
//  - Prefer const over let by using functions
//  - Prefer immutability patterns

function getPermissions(user) {
  if (user.role === "admin") {
    return ["read", "write", "delete"];
  }

  return ["read"];
}
function createUserStub(user) {
  const userStub = {
    ...user,
    testId: "user-stub",
    permissions: getPermissions(user),
  };

  userStub.active ??= false;

  return userStub;
}

console.log("--- 5. Combine Everything ---");

// Change the following statements and functions to use Modern JavaScript
// Syntax and handle errors properly

/**
 * Extract data from id string
 *
 * @example str "user-jsnow-629a91e5-22f7-46ae-bd0a-73d552dcc193"
 */
function retrieveIdDataFromString(str) {
  const bits = str.split("-");

  const [kind, name, ...uuidBits] = bits;
  const uuid = uuidBits.join("-");

  return {
    kind,
    name,
    uuid,
  };
}

/**
 * Convert user to payload for API
 *
 * @example user {
 *  id: 'user-jsnow-629a91e5-22f7-46ae-bd0a-73d552dcc193',
 *  name: 'John Snow',
 *  email: 'john.snow@example.com',
 *  role: 'user',
 *  active: true,
 * }
 */
function convertUserToPayload(user) {
  const { id, name, email, role, ...extra } = user;

  return {
    id,
    name,
    email,
    extra,
  };
}

function postUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const x = Math.random();

      if (x < 0.9) {
        resolve(user);
      } else {
        reject(new Error("Something went wrong"));
      }
    }, 1000);
  });
}

/**
 * Create a new user and calls the optional callback when done
 */
function createUser(user, options) {
  const onCreated = options?.onCreated ?? null;

  const payload = convertUserToPayload(user);

  postUser(payload).then((user) => {
    onCreated?.(user);
  });
}
