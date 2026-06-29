# Slimecoin Protocol Docs

This repository contains the public documentation for the Slimecoin protocol.

The docs are written in MDX and configured through `docs.json`. They cover:

- the non-custodial Supersize Vault
- the Supersize Matchmaking queue program
- the on-chain game library
- Slimecoin emissions, SLIME, leagues, tournaments, and player rewards

## Local preview

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview your documentation changes locally. To install, use the following command:

```
npm i -g mint
```

Run the following command at the root of your documentation, where your `docs.json` is located:

```
mint dev
```

View your local preview at `http://localhost:3000`.

## Publishing

Push changes to the default branch used by the docs deployment.
