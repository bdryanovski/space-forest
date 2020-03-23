---
title: Intro
---

## Main goal

The main goal is to be able to place SP at any project without conflicting with current styles already there. Currently there is `normalize` styles included, but it will be provided as optional import in later version.

## Enable styles

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

  <h1>Outside styles</h1>
</>
```

## rem sizing

Because we could not (we don't want) to wrap `html` tag with additional classes. You may need to define your own `font-size`. All sizes will be `rem` based.

```css
html {
  font-size: 100%
}
```

## How things are styled

Write how all styles work in general. Why there are no styles to standart elements?