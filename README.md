# create-tscratch-app

A CLI tool to scaffold **TScratch projects** — a Scratch-inspired TypeScript game engine.

## Features

- Quickly generate a TScratch project template.
- Works with TypeScript and modern ES modules.
- Includes starter files (`index.html`, `main.ts`).

## Installation

You don’t need to install globally — just use `npx`:

```bash
npx create-tscratch-app my-game
```

## Usage

```bash
npx create-tscratch-app <project-name>
```

- Creates a folder `<project-name>` with the TScratch template inside.
- After creation:

```bash
cd <project-name>
npm install
npm run dev
```

## License

MIT © 2025 sebastian-goat, visit [License](./LICENSE)