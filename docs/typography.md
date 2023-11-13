# Typography

Fluid UI generates a set of font-sizes utility classes based on all spacing CSS variables defined in <code>./styles/design-tokens.scss</code>.

**CSS Variables**

```SCSS
  --g-fs-100: 0.625rem;
  --g-fs-200: #{g-fluid(10px, 12px)};
  ...
  --g-fs-1000: #{g-fluid(32px, 58px)};
```

**Generated classes**

```CSS
.fs-100 {
  font-size: var(--g-fs-100) !important;
}

...

.fs-1000 {
  font-size: var(--g-fs-1000) !important;
}

```

## Adapt the typography to your needs

Set all the variables in the typography map in <code>./styles/global.scss</code>.

```SCSS
$g-text-styles: (
    text-body: (
        font-size: var(--g-fs-400),
        line-height: 1.4,
    ),
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

The map above is used to determine the appearance of any typography class, for example:

```SCSS
h1,
.h1 {
  @include g-text-style("h1");
}
```
