# NextJs with Tailwindcss Truffle Box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a NextJs app.
The popular css framework tailwindcss is also integrated

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox mbigant/truffle-nextjs-tailwind
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox mbigant/truffle-nextjs-tailwind
```

Start the next dev server.

```sh
$ cd client
$ npm run dev
```

From there, follow the instructions on the hosted app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## Resources

- [Truffle](https://trufflesuite.com)
- [NextJs](https://nextjs.org/docs/getting-started)
- [Tailwindcss](https://tailwindcss.com/)
