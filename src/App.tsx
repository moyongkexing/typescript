import React from 'react';
import logo from './logo.svg';
import './App.css';
import { number, string } from 'yargs';
import { NumericLiteral } from '@babel/types';

interface NAME {
  first: string;
  last: string | null;
}

let userObj: NAME = { first: "Yamada", last: null };

const func1 = (x: number, y:number): number => {
  return x + y;
}
// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// Union Types
let value: boolean | number
value = 10;
value = true;

let arrayUni: (number | string)[];

arrayUni = [0, 1, 2, "hello"];

let company: "Facebook" | "Google" | "Amazon"
company = "Amazon";

let memory: 256 | 512;
memory = 256;

// typeof

let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = {cat: "small cat"};
let newAnimal: typeof animal = { cat: "big cat" };

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
