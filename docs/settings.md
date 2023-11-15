# Settings

::: tip :bulb: Below steps are optional.
All settings are already defined by CSS variables - it's up to you whether to change them.
:::

## Design tokens

In <code>settings/design-tokens.scss</code> tweak basic spacers, font-sizes and colors.

```SCSS
:root {
// spacing value that will change from 16px (mobile) to 32px (desktop)
--g-spacer-500: #{g-fluid(16px, 32px)};


// font size value that will change from 24px (mobile) to 38px (desktop)
--g-fs-900: #{g-fluid(24px, 38px)};

}
```

## Define Fluid minimum and maximum resolution

Go to <code>settings/fluid-min-max-resolution.scss</code> file and specify the minimum (mobile) and maximum (desktop) resolution for which the CSS fluid values will be calculated.

```SCSS
$g-fluid-min-resolution: 460px;
$g-fluid-max-resolution: 1440px;
```

## Adjust semantic variables:

In <code>settings/global.scss</code> adjust global values used to generate default global classes used for paddings, margins, gaps.

### Example

For a default layout gutter we defined a semantic value:

```SCSS
:root {
    --g-gutter: var(--g-spacer-500);
}
```

that will be used later for a CSS class:

```CSS
.p-gutter {
   padding: var(--g-gutter);
}

.g-gutter {
   gap: var(--g-gutter);
}

.ms-gutter {
   margin-left: var(--g-gutter);
}
```
