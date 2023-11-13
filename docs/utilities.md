# Utilities

Beside spacing, typography and color Fluid UI contains some other CSS functionalities.

## Default border, shadow, transition

.border
.transition
.shadow

Define variable and use classes

## .wrapper

Similarly to Bootstrap .container class but... **without breakpoints**.

```SCSS
.wrapper {
  position: relative;
  width: clamp(16rem, var(--g-wrapper-max-width, 85rem), 85rem);
  margin-inline: auto;
  padding-inline: var(--g-spacer-100);
}
```

## .flow

Known as [Axiomatic CSS and Lobotomized Owls](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/)
help us to keep the rhythm of layout by adding margin-top.

```SCSS
.flow > * + * {
  margin-top: var(--g-gutter, 1em);
}
```

You can use `.flow` class Additionally use it with `.prose` to style rhythm in static text content - see `/99-utilities/_prose.scss`.

```SCSS
.prose {
  p,
  ul {
    --g-flow-spacer: var(--g-spacer-300);
  }

  h1 {
    --g-flow-spacer: var(--g-spacer-700);
  }

  h2 {
    --g-flow-spacer: var(--g-spacer-600);
  }

  h3,h4,h5 {
    --g-flow-spacer: var(--g-spacer-500);
  }
}
```

## .custom-scrollbar

You can change the look of scrollbar by setting variables

```SCSS
--g-scrollbar-size: 4px;
--g-scrollbar-radius: 2px;
--g-scrollbar-color: var(--g-gray-900);
--g-scrollbar-bg: var(--g-gray-300);
```

and using a `g-custom-scrollbar()` mixin inside a CSS selector.

::: danger :bell: Use it only when you HAVE TO
It's not recommended UX pattern to customize scrollbar.
:::

## Layout

Vertical and horizontal stacks, basic "center all" container.

```SCSS
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

// Vertical stack
.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}

// Center all
.grid-center {
  display: grid;
  place-items: center;
}
```

## Display and flex classes

There are many basic flex and grid related classes similarly to Bootstrap e.g. `.d-flex`, `.d-grid`, `.justify-content-start`, `.align-items-center` etc.

##
