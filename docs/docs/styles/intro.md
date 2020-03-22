---
title: Intro
---


To not have prefix for every class or id there is a top-level class that all styles will be looking for. `.sp`

So if you need to get the styles working just add it to the top level HTML element. For example

```html
<div id="root" class="sp">
  <!-- content -->
</div>
```

This way we could have this type of code.

```html live
<>
  <div class="sp">
    <h1> Styled </h1>
  </div>

  <h1>Not styled</h1>
</>
```

Because we could not (we don't want) to wrap `html` tag with additional classes. You may need to define your own `font-size`. All sizes will be `rem` based.

```css
html {
  font-size: 100%
}
```