# Spacers

Fluid UI generates a set of spacer utility classes for paddings, margins and gaps based on all spacing CSS variables defined in <code>./styles/design-tokens.scss</code>.

We use the format: <code>{property}{direction}-{size}</code>, for example:

**CSS Variables**

```SCSS
  --g-spacer-50: 0.25rem; // 4px
  --g-spacer-100: #{g-fluid(4px, 8px)};
  ...
  --g-spacer-1000: #{g-fluid(128px, 256px)};
```

**Generated classes**

```CSS
.p-50 {
  padding: var(--g-spacer-50) !important;
}

.ms-100 {
  margin-left: var(--g-spacer-100) !important;
}

.g-900 {
  gap: var(--g-spacer-900) !important;
}

```

All classes are generated for sizes from 50, 100, 200, ... to 1000.

## Paddings

| Class | Property       |
| ----- | -------------- |
| p-    | padding        |
| ps-   | padding-left   |
| pe-   | padding-right  |
| pt-   | padding-top    |
| pb-   | padding-bottom |
| px-   | padding-inline |
| py-   | padding-block  |

## Margins

| Class | Property      |
| ----- | ------------- |
| m-    | margin        |
| ms-   | margin-left   |
| me-   | margin-right  |
| mt-   | margin-top    |
| mb-   | margin-bottom |
| mx-   | margin-inline |
| my-   | margin-block  |

## Gaps

| Class | Property   |
| ----- | ---------- |
| g-    | gap        |
| gcol- | column-gap |
| grow- | row-gap    |
