# Fluid

The most important things in User Interface are spacing and typography.<br/>
In Fluid UI those values changes relatively to viewport width without arbitrary breakpoints.
::: tip WOW!
We can finally get rid of <strong>xs, sm, md, lg, xl, xxl, 3xl</strong> etc.
:::

In our library we use <code>CSS clamp()</code> function to calculate all the values.

## Example:

Let's define CSS variable:

```CSS
--g-fs-1000: #{g-fluid(32px, 58px)};
```

That variable will compile into:

```CSS
--g-fs-1000: clamp(2rem, 2.65vw + 1.24rem, 3.63rem);
```

That means that this font size will scale from 32px (on mobile) to 58px (desktop).
![fluid font size scaling](./images/fluid-font-size-1000.png)

We give yo a set of CSS utility classes ready to use for font size values, margins, paddings, gaps.

It's easier to get the px values from the designs file (Figma etc.).

The solution is based on utopia.fyi and smashing...
