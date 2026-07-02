# Slimecoin Docs

Documentation for Slimecoin.io and the Slimecoin protocol.

This repository is a first-party static docs site. It does not depend on Mintlify,
MDX, or a build service. The docs cover:

- Slimecoin.io as the player-facing game platform
- the non-custodial Supersize Vault
- the Supersize Matchmaking queue program
- the on-chain game library
- Slimecoin emissions, SLIME, leagues, and player rewards

## Local preview

```bash
npm start
```

Then open `http://127.0.0.1:3000`.

## Validation

```bash
npm run build
```

The build script validates the static routes, required assets, and first-party
content registry.

## Publishing

Deploy this directory as a static site. `index.html` is the root page, and each
docs route has its own `index.html` entrypoint for direct links.
