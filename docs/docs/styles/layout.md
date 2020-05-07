---
id: grid
title: Layout
---

## Basic

The how Grid system is based on 12 column layout. Is extended version of the [FlexboxGrid.com](http://flexboxgrid.com/)

`.col-<number>` without a size are same as `.col-xs-<number>`.

```html live
<div class="sp">
  <div class="container-full-width">
    <div class="row">
      <div class="col-12">
        <div class="demo-element">12</div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="demo-element">6</div>
      </div>
      <div class="col-6">
        <div class="demo-element">6</div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="demo-element">3</div>
      </div>
      <div class="col-9">
        <div class="demo-element">9</div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="demo-element">3</div>
      </div>
      <div class="col-3">
        <div class="demo-element">3</div>
      </div>
      <div class="col-3">
        <div class="demo-element">3</div>
      </div>
      <div class="col-3">
        <div class="demo-element">3</div>
      </div>
    </div>
  </div>
</div>
```

## Rows

When not adding a column size - we gonna make them rows.

```html live
<div class="sp">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="demo-element">row</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="demo-element">row</div>
      </div>
    </div>
  </div>
</div>
```

## Columns

```html live
<div class="sp">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="demo-element">column</div>
      </div>
      <div class="col">
        <div class="demo-element">column</div>
      </div>
    </div>
  </div>
</div>
```

## Center Element

```html live
<div class="sp demo-wrapper">
  <div class="container">
    <div class="row bottom">
      <div class="col">
        <div class="demo-element demo-element-skinny">element</div>
      </div>
      <div class="col">
        <div class="demo-element demo-element-fat">element</div>
      </div>
    </div>
    <div class="row top">
      <div class="col">
        <div class="demo-element demo-element-fat">element</div>
      </div>
      <div class="col">
        <div class="demo-element demo-element-skinny">element</div>
      </div>
      <div class="col">
        <div class="demo-element demo-element-skinny">element</div>
      </div>
    </div>
    <div class="row middle">
      <div class="col">
        <div class="demo-element demo-element-skinny">element</div>
      </div>
      <div class="col">
        <div class="demo-element demo-element-fat">element</div>
      </div>
      <div class="col">
        <div class="demo-element demo-element-skinny">element</div>
      </div>
    </div>
  </div>
</div>
```