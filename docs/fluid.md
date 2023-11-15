# Fluid layout

One of the most important things in User Interface is spacing and typography.<br/>
In Fluid UI those values changes relatively to viewport width without arbitrary breakpoints.
::: tip :bulb: Fluid means that...
we can get rid of classical breakpoints such as <strong>xs, sm, md, lg, xl, xxl, 3xl, ... </strong>
:::

In our library we use CSS [<code>clamp()</code>](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) function to calculate all the values for different sizes scale: **50**, **100**, **200**, **300**, **400**, **500**, **600**, **700**, **800**, **900**, **1000**.

## Example:

Let's define font size with a CSS variable:

```SCSS
--g-fs-1000: #{g-fluid(32px, 58px)};
```

That means that this font size will scale linear from 32px (on mobile) to 58px (desktop).

![fluid font size scaling](./images/fluid-font-size-1000.png)

The compiled CSS for **--g-fs-1000** variable:

```SCSS
--g-fs-1000: clamp(2rem, 2.65vw + 1.24rem, 3.63rem);
```

And finally we define a class based on that value:

```CSS
.fs-1000 {
    font-size: var(--g-fs-1000);
}
```

::: warning Better User Experience ...

<ul>
<li> In final CSS we use <strong>rem</strong> values, however there are <strong>px</strong> values in the function call <strong class="text-no-wrap">#{g-fluid(32px, 58px)}</strong>. It's easier to get the <strong>px</strong> values from the designs file (Figma etc.).</li>
<li>User accessibility - there is rem value inside the clamp() to support browser zooming</li>
</ul>
:::
