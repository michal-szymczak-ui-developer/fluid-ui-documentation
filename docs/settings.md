# Settings

::: tip :bulb: Below steps are optional.
All settings are already defined by CSS variables.
:::

## Design tokens

In <code>settings/design-tokens.scss</code> tweak basic spacers, font-sizes and colors.

```CSS

// spacing value that will change from 16px (mobile) to 32px (desktop)
--g-spacer-500: #{g-fluid(16px, 32px)};


// font size value that will change from 24px (mobile) to 38px (desktop)
--g-fs-900: #{g-fluid(24px, 38px)};
...

```

## Define Fluid minimum and maximum resolution

Go to <code>settings/fluid-breakpoint.scss</code> file and specify the minimum and maximum resolution for which the CSS fluid values will be calculated.

```CSS
$g-default-min-bp: 460px;
$g-default-max-bp: 1440px;
```

## Adjust semantic variables:

In <code>settings/global.scss</code> adjust global values for default global paddings, margins, gaps classes e.g.:

```CSS
--g-gutter: 1rem;
```

will be used later for a CSS class:

```CSS
.ps-gutter {
   padding: var(--g-gutter);
}

.g-gutter {
   gap: var(--g-gutter);
}
```

Same with .g-border, .g-shadow, .g-rounded, .g-transition.

## Adapt the typography to your needs

<p>by tweaking the map</p>

```CSS
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
