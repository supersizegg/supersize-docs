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

This builds the deployable static site into `public/` and serves that output at
`http://127.0.0.1:3000`.

## Validation

```bash
npm run check
```

The check script validates the static routes, required assets, and first-party
content registry without writing the deployment output.

## Vercel

Vercel is configured through `vercel.json`:

- build command: `npm run build`
- output directory: `public`

The `public/` directory is generated during the build and intentionally ignored
by git.

## Publishing

Deploy this directory as a Vercel static site. `index.html` is the root page,
and each docs route has its own `index.html` entrypoint for direct links.
