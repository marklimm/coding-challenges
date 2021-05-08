
#  Coding challenges (using ts-node)

A `ts-node` project that solves various coding challenges

Run `npm run start` on the command line to run


##  Linting

This project defines an `npm run lint` command that lints the codebase against typescript eslint and prettier rules.  I want to give credit to [https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/) for helping with this setup.  

I also tried setting up husky and lint-staged to run the linter rules before git commits can be made, however I wasn't able to get this to work.  I believe I have the correct setup in `package.json`, but I don't know what the issue is.  I'm wondering if this is a Windows/Mac issue since I'm developing this on a Windows machine
