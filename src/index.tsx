// let id: number = 5;
// let firstName: string = 'Jamie';
// let isMale: boolean = true;
// let x: any = 'Hey';

// let ids: number[] = [1, 2, 3, 4, 5];
// let arr: any[] = [1, true, 'hey'];

// let person: [number, string, boolean] = [1, 'Jamie', false];
// let employee: [number, string][];
// employee = [
//     [1, 'Kenny'],
//     [2, 'Sid'],
//     [3, 'Roger'],
// ];

// let product: string | number = 'Hosting';

// enum Direction {
//     Up = 'Up',
//     Down = 'Down',
//     Left = 'Left',
//     Right = 'Right'
// }

// type User = {
//     id: number,
//     name: string
// }

// const user: User = {
//     id: 1,
//     name: 'John'
// }

// /* learn this stuff, type assertions */
// let cid: any = true;
// let customerId = <number>1;
// /* */

// function addNum(x: number, y: number): number {
//     return x + y;
// }

// function sayMessage(message: string | number): void {
//     console.log(message);
// }

// interface UserOneInterface {
//     readonly id: number,
//     name: string,
//     age?: number
// }

// const userOne: UserOneInterface = {
//     id: 1,
//     name: 'John'
// }

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';


// Component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);