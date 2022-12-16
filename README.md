# ui-lib

## About

This npm package acts as a central repository to expose shareable react components to be used across our BYB front-end
projects.

## Publishing Guide

1. Add a component
2. Export the component and it's types
3. Bump the package.json version via semantic versioning [reference](https://semver.org/)

   - MAJOR version: breaking changes (⬆.x.x)
   - MINOR version: feature (x.⬆.x)
   - PATCH version: bug fix (x.x.⬆)

4. Publish the package via `yarn build`

## Misc notes

- We are using `rollup` to bundle/build the package
- the `input` key is what determines what is being published for the npm publish (refer to `rollup.config.mjs`)
