# Next.js 13 with Module Federation

Module Federation in Next.js depends on <a href="https://www.npmjs.com/package/@module-federation/nextjs-mf">@module-federation/nextjs-mf</a>

NOTE: There seems to be a problem with css-in-js sharing between federated modules. This is likely due to some internal module not being shared as a singleton. PR is welcome

## Getting Started

1. run `npm install` in each of fe application
2. run `npm start` and browse to `http://localhost:3000`

## Context

We have three next.js applications

- `fe-home` - port 3000
- `fe-about` - port 3001
- `fe-blog` - port 3002

The applications utilize omnidirectional routing and pages or components are able to be federated between applications like a SPA

I am using hooks here to ensure multiple copies of react are not loaded into scope on server or client.

However, in the case of Next.js - you need to use <a href="https://www.npmjs.com/package/@module-federation/nextjs-mf">@module-federation/nextjs-mf</a>

## Reference Points

I took inspiration for this project from one of the module federation examples for Next.js. So you can check the following url:

https://github.com/module-federation/module-federation-examples/tree/master/nextjs-v13
