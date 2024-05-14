## Types of languages
* There are two types of laguages:
1. Strongly typed Language 
2. loosely typed language

## Strongly typed vs loosely typed
* The terms strongly typed and loosely typed refer to how programming languages handle types, particularly how strict they are about type conversions and type safety.
### Strongly typed languages
- Examples - Java, C++, C, Rust
- Benefits - Lesser runtime errors, Stricter codebase, Easy to catch errors at compile time
### Loosely typed languages
- Examples - Python, Javascript, Perl, php
- Benefits - Easy to write code, Fast to bootstrap, Low learning curve

* Note- People realised that javascript is a very power language, but lacks types.


## What is typescript ?
* TypeScript is a programming language developed and maintained by Microsoft. 
* It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

![alt text](img/Screenshot_2024-01-28_at_1.00.19_AM.png)

## Where/How does typescript code run ?
* Typescript code never runs in your browser. Your browser can only understand javascript. 
1. Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
2. Typescript is something that compiles down to javascript
3. When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 


![alt text](img/working.png)

### Typescript compiler
* tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
* There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
1. esbuild
2. swc

## How to install Typescript Node.js application locally on our machines ?
1. npm install -g typescript
2. npm init -y &  npx tsc --init 

. This is the high level benefit of typescript. It lets you catch type errors at compile time