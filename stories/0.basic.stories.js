import React from 'react'

export default {
  title: 'Typography & Basics',
}

export const Headers = () => {
  return (
    <React.Fragment>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
    </React.Fragment>
  )
}

export const CommonTags = () => {
  return (
    <React.Fragment>
      <code>Example for code</code>

      <p>Paragraph</p>

      <a href="#">Link</a>

      <br />

      <span>Span</span>

      <div>Div</div>

      <kbd>Ctrl + P</kbd>


      <ul>
        <li>Unordered list</li>
        <li>Second entry</li>
        <li><a href="#">Entry with link</a></li>
      </ul>
    </React.Fragment>
  )
}