
#  Coding challenges (using ts-node)

This is a `ts-node` project where I solved a few coding challenges found on [https://buttondown.email/cassidoo/archive/](https://buttondown.email/cassidoo/archive/).  I wrote this to implement a few of the coding challenges but also to experiment with `ts-node` and setting up eslint and prettier

Run `npm run start` on the command line to run my solutions


##  Linting

This project defines an `npm run lint` command that lints the codebase against typescript eslint and prettier rules.  I want to give credit to [https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/) for helping with this setup.  

I also tried setting up husky and lint-staged to run the linter rules before git commits can be made, however I wasn't able to get this to work.  I believe I have the correct setup in `package.json`, but I don't know what the issue is.  I'm wondering if this is a Windows/Mac issue since I'm developing this on a Windows machine

**Technology stack:**

- ts-node (allows typescript files to be run within nodejs)
- Typescript (typing for javascript)
- eslint (javascript/typescript code linting)
- Prettier (opinionated code formatting rules)

