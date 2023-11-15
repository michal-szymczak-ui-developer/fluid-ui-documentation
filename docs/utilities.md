# Utilities

Besides spacers, typography and color **Fluid UI** contains other CSS functional classes.

## .rounded

Use `.rounded` for default **border-radius** style.<br/>
Border radius related variables are defined in <code>./settings/global.scss </code>

```SCSS
  --g-rounded-50: var(--g-spacer-50);
  --g-rounded-100: var(--g-spacer-100);
  --g-rounded-200: var(--g-spacer-200);
  --g-rounded-300: var(--g-spacer-300);
  --g-rounded-400: var(--g-spacer-400);
  --g-rounded-500: var(--g-spacer-500);
  --g-rounded-full: 9999px;
  --g-rounded: var(--g-spacer-100);
```

List of all classes:

| Class        | border-radius       |
| ------------ | ------------------- |
| rounded-50   | var(--g-spacer-50)  |
| rounded-100  | var(--g-spacer-100) |
| rounded-200  | var(--g-spacer-200) |
| rounded-300  | var(--g-spacer-300) |
| rounded-400  | var(--g-spacer-400) |
| rounded-500  | var(--g-spacer-500) |
| rounded-full | 9999px              |

## .shadow

Use `.shadow` for default **shadow** styles.<br/>
Shadow related variables are defined in <code>./settings/global.scss </code>

```SCSS
  --g-shadow-100: 0 0 var(--g-spacer-100) var(--g-gray-200);
  --g-shadow-200: 0 0 var(--g-spacer-200) var(--g-gray-200);
  --g-shadow-300: 0 0 var(--g-spacer-300) var(--g-gray-300);
  --g-shadow-400: 0 0 var(--g-spacer-400) var(--g-gray-400);
  --g-shadow-500: 0 0 var(--g-spacer-500) var(--g-gray-500);
  --g-shadow: var(--g-shadow-200);
```

List of all classes:

| Class      | Shadow size         | Shadow color      |
| ---------- | ------------------- | ----------------- |
| shadow-100 | var(--g-spacer-100) | var(--g-gray-200) |
| shadow-200 | var(--g-spacer-200) | var(--g-gray-200) |
| shadow-300 | var(--g-spacer-300) | var(--g-gray-300) |
| shadow-400 | var(--g-spacer-400) | var(--g-gray-400) |
| shadow-500 | var(--g-spacer-500) | var(--g-gray-500) |
| shadow     | var(--g-spacer-100) | var(--g-gray-200) |

## .border

Use `.border` for default **border** styles: width, type and color.<br/>
Border related variables are defined in <code>./settings/global.scss </code>

```SCSS
  // Borders
  --g-border-width: 1px;
  --g-border-color: var(--g-gray-200);
  --g-border-radius: var(--g-rounded);
  --g-border: var(--g-border-width) solid var(--g-border-color);
```

Definition of `.border` class in <code>./utilities/border.scss </code>

```SCSS
.border {
  border: var(--g-border);
}
```

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

## .hstack & .vstack

Vertical and horizontal stacks.

```SCSS
// Horizontal stack
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
```

## .grid-center

Basic "center all" container.

```SCSS
.grid-center {
display: grid;
place-items: center;
}
```

## display ...

There are many basic flex and grid related classes similarly to Bootstrap e.g. `.d-flex`, `.d-grid` etc.

| Class          | Property              |
| -------------- | --------------------- |
| d-none         | display: none;        |
| d-inline-block | display: inline-block |
| d-block        | display: block        |
| d-ine-flex     | display: ine-flex     |
| d-flex         | display: flex         |
| d-inline-grid  | display: inline-grid  |
| d-grid         | display: grid         |

## flex ...

There are many basic flex related classes similarly to Bootstrap e.g. `.justify-content-between`, `.flex-wrap` etc.

**Justify content**

| Class                   | Property                        |
| ----------------------- | ------------------------------- |
| justify-content-start   | justify-content: flex-start;    |
| justify-content-end     | justify-content: flex-end;      |
| justify-content-center  | justify-content: center;        |
| justify-content-between | justify-content: space-between; |
| justify-content-around  | justify-content: space-around;  |

**Align items**

| Class                | Property                 |
| -------------------- | ------------------------ |
| align-items-start    | align-items: flex-start; |
| align-items-end      | align-items: flex-end;   |
| align-items-center   | align-items: center;     |
| align-items-baseline | align-items: baseline;   |
| align-items-stretch  | align-items: stretch;    |

**Align self**

| Class               | Property                |
| ------------------- | ----------------------- |
| align-self-start    | align-self: flex-start; |
| align-self-end      | align-self: flex-end;   |
| align-self-center   | align-self: center;     |
| align-self-baseline | align-self: baseline;   |
| align-self-stretch  | align-self: stretch;    |

**Align self**

| Class               | Property                |
| ------------------- | ----------------------- |
| align-self-start    | align-self: flex-start; |
| align-self-end      | align-self: flex-end;   |
| align-self-center   | align-self: center;     |
| align-self-baseline | align-self: baseline;   |
| align-self-stretch  | align-self: stretch;    |

**flex-\***

| Class         | Property                |
| ------------- | ----------------------- |
| flex-grow-1   | flex-grow: 1;           |
| flex-shrink-0 | flex-shrink: 0;         |
| flex-column   | flex-direction: column; |
| flex-row      | flex-direction: row;    |
| flex-wrap     | flex-wrap: wrap;        |
| flex-nowrap   | flex-wrap: nowrap;      |
