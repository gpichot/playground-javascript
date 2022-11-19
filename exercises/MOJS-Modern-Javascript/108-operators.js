console.log("Modern Javascript Operators && Expressions");

console.log("--- 1. Declarations && Destructuring ---");
// 1. Use the proper declaration syntax to declare the following variables and
// use the proper destructuring syntax.

let user = {
  name: "John",
  lastName: "Snow",
  age: 30,
  email: "john.snow@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

let types = ["grass", "fire", "water", "bug", "normal", "poison"];

let grassType = types[0];
let fireType = types[1];
let otherTypes = [types[2], types[3], types[4], types[5]];

let sibling = {
  name: "Jane",
  lastName: user.lastName,
  age: 28,
  address: user.address,
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
  firstName: user2.firstName,
  lastName: user2.lastName,
  role: user2Extra.role,
  email: user2Extra.email,
};

// Arrays
const typesPikachu = ["electric", "normal"];
const typesBulbasaur = ["grass", "poison"];
const typesCharmander = ["fire"];

const pokemonTypes = [
  typesPikachu[0],
  typesPikachu[1],
  typesBulbasaur[0],
  typesBulbasaur[1],
  typesCharmander[0],
];

console.log("--- 3. Arrow functions ---");
// 3. Use the arrow functions in place of the following functions.

function add(a, b) {
  return a + b;
}

function pow(a, b) {
  console.log(`${a} to the power of ${b} is ${Math.pow(a, b)}`);

  return Math.pow(a, b);
}

function parityToString(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

function createUser(name, lastName) {
  return {
    name,
    lastName,
  };
}

function combineTypes(types1, types2) {
  return [...types1, ...types2];
}

console.log("--- 4. Best Practices ---");
// 4. Use the best practices in the following code:
//  - Use return early pattern
//  - Prefer const over let by using functions
//  - Prefer immutability patterns

function createUserStub(user) {
  let userStub = { ...user };
  let permissions = [];
  if ((user.role = "admin")) {
    permissions = ["read", "write", "delete"];
  } else {
    permissions = ["read"];
  }
  userStub.testId = "user-stub";
  userStub.permissions = permissions;

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

  const kind = bits[0];
  const name = bits[1];
  const uuid = [bits[2], bits[3], bits[4], bits[5], bits[6]].join("-");

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
  const id = user.id;
  const name = user.name;
  const email = user.email;

  const extra = {
    role: user.role,
    active: user.active,
  };

  return {
    id: id,
    name: name,
    email: email,
    extra: extra,
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
  const onCreated = options ? options.onCreated : null;

  const payload = convertUserToPayload(user);

  postUser(payload).then((user) => {
    if (onCreated) {
      onCreated(user);
    }
  });
}
