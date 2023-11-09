# Installation

You can add Fluid UI to your existing project or start a new one.

## Staring new project

Clone the repository

```bash
$ git clone https://github.com/michal-szymczak-ui-developer/fluid-ui.git
```

Install all dependencies by:

```bash
$ npm i
```

That will initiate new project with SASS compiler, Stylelint and Prettier configuration.

## Adding Fluid UI to an existing project

You can include only <code>main.css</code> file with all the functional CSS classes.

But if you want to customize spacing, typography, colors etc. you need to compile SCSS files.
If soo copy the <code>/styles/</code> directory and <code>main.scss</code> file to you project structure.
Yo can clone clone the [<code>repository</code>](https://github.com/michal-szymczak-ui-developer/fluid-ui) or download necessary files only.

If you working environment lack the SASS compiler add SASS package with:

```sh
$ npm install -g sass
```
