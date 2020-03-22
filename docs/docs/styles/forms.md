---
title: Forms
---

## Basic

```html live
<div class="sp">
  <form>
    <div class="form-row">
      <input  placeholder="Random input inside form" />
    </div>
  </form>

  <div class="form-row">
    <input placeholder="Stand alone input ..."/>
  </div>
</div>
```

## With label
```html live
<div class="sp">
  <div class="form-row">
    <label htmlFor="username">Username</label>
    <input id="username" placeholder="Enter username" />
  </div>
</div>
```

## With helper text
```html live
<div class="sp">
  <div class="form-row">
    <label htmlFor="monkey">Monkey</label>
    <input id="monkey" placeholder="Enter monkey name" />
    <div class="input-helper-text">Short name for that monkey!</div>
  </div>
</div>
```


## With error text

```html live
<div class="sp">
  <div class="form-row">
    <label htmlFor="monkey2">Monkey</label>
    <input id="monkey2" placeholder="Enter monkey name" />
    <div class="input-error-text">The monkey is not a valid name</div>
  </div>
</div>
```

## Input with prefix and suffix

### Prefix

```html live
<div class="sp">
  <div class="form-row">
    <label htmlFor="website">Url</label>
    <span>http://</span>
    <input id="website" placeholder="Enter website address" />
  </div>
</div>
```

### Suffix
```html live
<div class="sp">
  <div class="form-row">
    <label htmlFor="google-account">Register</label>
    <input id="google-acount" placeholder="Google account" />
    <span>@gmail.com</span>
  </div>
</div>
```

## Textarea

```html live
<div class="sp">
  <div class="form-row">
    <label htmlFor="comment">Twitter</label>
    <textarea id="comment" placeholder="Write message ..." cols="100" rows="5"></textarea>
  </div>
</div>
```

## Select and options
```html live
<div class="sp">
  <div class="form-row">
    <label htmlFor="option">Select one of two option</label>
    <select id="option">
      <option>One</option>
      <option>Two</option>
    </select>
  </div>
</div>
```