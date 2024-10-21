# UGentUI Core

**UGentUI Core** is a collection of accessible web components and tools designed for building applications at Ghent University (UGent). The components are built on top of [Shoelace](https://shoelace.style), an open-source library of modern web components, and are optimized for usability, accessibility, and performance.

> **⚠ Warning:** This project is still under development and is not ready for production usage. Breaking changes may occur, and stability is not guaranteed at this stage.

## Features

- **Accessible Components**: All components are designed with accessibility in mind, ensuring compliance with the latest WCAG standards.
- **Customizable**: Built with flexibility in mind, the components can be customized to match your project's needs.
- **Shoelace-Based**: Extends and enhances the [Shoelace](https://shoelace.style) library, providing additional components and styles specifically tailored for UGent applications.

## Installation

To start using UGentUI Core, install the package via npm:

```bash
npm install @ugent-ui/core
```

## Usage

Once installed, you can import the components directly into your project. Here’s an example of how to use the button component:

```js
import "@ugent-ui/core/components/button";
```

## Theming

To apply the default theme and styles globally across your project, import the UGentUI stylesheet:

```js
import "@ugent-ui/core/style.css";
```

## Setting the Base Path

Some components may rely on external assets, so it's necessary to configure the base path for those assets:

```js
import { setBasePath } from "@ugent-ui/core";
setBasePath("/node_modules/@ugent-ui/core/dist/");
```
