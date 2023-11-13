# Spacers

Fluid UI generates a set of spacer utility classes for paddings, margins and gaps.

## CSS Variables

Basic spacing design tokens are defined in <code>./settings/design-tokens.scss</code>.

```SCSS
  --g-spacer-50: 0.25rem; // 4px
  --g-spacer-100: #{g-fluid(4px, 8px)};
  ...
  --g-spacer-1000: #{g-fluid(128px, 256px)};
```

Then we define SCSS map in <code>./settings/global.scss </code>

```SCSS
  $g-spacers: (
    50: var(--g-spacer-50),
    100: var(--g-spacer-100),
    ...
);

```

## Generated classes

Based on above SCSS Map we generate set of spacing classes.<br/>
We use the format: <code>{property}-{direction}-{size}</code> like:

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

## Paddings - available classes

| Class | Property       |
| ----- | -------------- |
| p-    | padding        |
| ps-   | padding-left   |
| pe-   | padding-right  |
| pt-   | padding-top    |
| pb-   | padding-bottom |
| px-   | padding-inline |
| py-   | padding-block  |

## Margins - available classes

| Class | Property      |
| ----- | ------------- |
| m-    | margin        |
| ms-   | margin-left   |
| me-   | margin-right  |
| mt-   | margin-top    |
| mb-   | margin-bottom |
| mx-   | margin-inline |
| my-   | margin-block  |

## Gaps - available classes

| Class | Property   |
| ----- | ---------- |
| g-    | gap        |
| gcol- | column-gap |
| grow- | row-gap    |
