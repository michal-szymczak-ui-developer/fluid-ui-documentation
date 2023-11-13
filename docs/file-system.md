<h1>File system</h1>

The directories structure is a variation of the [Inverted Triangle CSS methodology](https://developer.helpscout.com/seed/glossary/itcss/#:~:text=As%20the%20name%20implies%2C%20your,overrides%20should%20be%20added%20last.).

![Structure](http://fluid-ui.michalszymczak.com/fluid-ui-specificity.png)

The main file is <code>**./styles/main.scss**</code> which merges all files from subdirectories.<br/>
Every subdirectory contains <code>**\_index.scss**</code> which imports all files from specific subdirectory.

```SCSS
./styles/main.scss
./styles/01-functions/
./styles/02-mixins/
./styles/03-settings/
./styles/04-framework/
./styles/05-base/
./styles/06-layout/
./styles/07-components/
./styles/08-vendors/
./styles/99-utilities/
```

## Tools

`./styles/01-functions/`<br/>
`./styles/02-mixins/`

First two directories contain abstract tools - functions and mixins.
That is slightly different order than in standard Inverted Triangle CSS. Why? Sometimes we need a function or mixin to do some operations on variables before defining them (eg. convert from pixels to rems).

## Settings

`./styles/03-settings/`

Directory with global settings - design tokens / variables for spacings, colors, typography, icon font, components or vendor plugins.

## Framework

`./styles/04-framework/`

If you App/Webpage uses external frameworks (eg. Bootstrap, PrimeNG etc) this is a place for:

- overwriting frameworks variables with our global variables,
- import additional frameworks files including variables, components, utilities etc.
  If you don't need external framework - feel free to remove this directory!

::: tip :bulb: CSS Reset
In the <code>index.scss</code> we have already included modified version of [Modern CSS Reset](https://andy-bell.co.uk/a-more-modern-css-reset/). Feel free to remove it if you have another CSS Reset.
:::

## Base

`./styles/05-base/`

Base styling eg. body, typography, accessibility focus-visible.

## Layout

`./styles/06-layout/`

Layout directory defines main parts of layout like Header, Main, Sidebar or footer. They differ from components - they appear only once in a page / view.

## Components

`./styles/07-components/`

Place to add components styling. From buttons, form controls, modals, card to more sophisticated ones.

## Vendor

`./styles/08-vendor/`

We recommend to define Vendors variables under the <code>**style/03-settings**</code> directory. But if we cannot style Vendor plugin with CSS variables this directory is a place to add additional styling by overwriting or extending Vendor's CSS.

## Views

`./styles/09-views/`

CSS for specific views like Contact, custom landing page etc.

## Utilities

`./styles/99-utilities/`

Besides Fluid UI utilities you have additionally CSS classes for:

- colors (eg.: `.text-primary`, `.bg-primary-dark`, `.border-gray-100`)
- texts (eg.: truncations, line clamping)
- default classes for border, shadow, rounding, transition: `.border`, `.shadow`, `.rounded`, `.transition`
- `.flow` (helps keeping rhythm and flow - see Links section)
- grid
- custom scrollbar
- `.prose` (for text static content)
- `.wrapper`

See index.html to see all the utility classes.
::: danger :bell: Highest Specificity
For you own classes don't hesitate to use **!important**. Functional CSS class should overwrite everything else.
:::
