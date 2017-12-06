# > CodeMode

CodeMode is a Google Chrome extension that turns any Youtube coding tutorial into an interactive learning platform.

![CodeMode intro gif](https://i.imgur.com/WBhVtl8.gifv)

## Why CodeMode?

Youtube has an active community of content creators and students learning to

## How does it work?

CodeMode reimagines learning to code on Youtube by adding a code editor to the bottom of your Youtube page. CodeMode keeps track of questions assigned to individual Youtube videos so viewers can practice the skills they are learning without having to leave the page.

[Watch the rest of the CodeMode product demo on Youtube.](youtube.com/watch?v=H9oYe_8Ks9M)
![[CodeMode product demo on Youtube](https://i.imgur.com/58XGzI0.jpg)](youtube.com/watch?v=H9oYe_8Ks9M)

Goal
Provide an easy and friendly experience for teachers to produce coding content that students can watch and follow along with.

Contribution guide

Make an issue (or multiple issues)
Merge master into the branch before Pull Request to make sure that there are NO conflicts
Make a Pull Request that references that issue
Get it code reviewed by someone on the team, address any comments
Merge into master (with merge commit)
Code style guide

Linting!
Pay attention to the linter!
Use semicolons
const or let over var
Use require and module.exports in .js files
Use import and export in .jsx files
Put import statements at top
Put the default export at bottom
Consider splitting up any file larger than 100 lines
Name files using lowercase-and-dashes instead of camelCase or PascalCase, except for when the default export is a class, then use PascalCase
Define react components as pure functions (instead of classes) whenever possible

Technologies
Postgres
Express
Node
Mocha/Chai
