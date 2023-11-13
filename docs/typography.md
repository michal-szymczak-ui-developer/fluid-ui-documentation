# Typography

Fluid UI generates a set of font-sizes utility classes like `.fs-100`, `.fs-200` and many more.

## CSS Variables

Basic font sizes design tokens are defined in <code>./settings/design-tokens.scss</code>.

```SCSS
  --g-fs-100: 0.625rem;
  --g-fs-200: #{g-fluid(10px, 12px)};
  ...
```

Then we define SCSS map in <code>./settings/global.scss </code>

```SCSS
  $g-font-sizes: (
    100: var(--g-fs-100),
    200: var(--g-fs-200),
  ...
  );
```

## Generated classes

Based on above SCSS Map we generate set of font-sizes classes.<br/>
We use the format: <code>{fs}-{size}</code>.

```CSS
.fs-100 {
  font-size: var(--g-fs-100) !important;
}

.fs-200 {
  font-size: var(--g-fs-200) !important;
}
...
```

## Adapt the typography to your needs

For better typography management we defined a SCSS map in <code>./settings/global.scss</code>.
You can redesign or add new typography styles.

```SCSS
$g-text-styles: (
    h1: (
        font-family: var(--g-font-family-secondary),
        font-size: var(--g-fs-1000),
        font-weight: var(--g-fw-bold),
        line-height: 1.15,
        max-width: 60ch,
        text-wrap: balance,
    ),
    ...
```

Then you can include those styles for any selector by using a mixin:

```SCSS
h1,
.h1 {
  @include g-text-style("h1");
}
```
