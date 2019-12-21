import React from 'react'
import Code from '../components/prism'

const grid = [
  ['col-1', 'col-11'],
  ['col-2', 'col-10'],
  ['col-3', 'col-9'],
  ['col-4', 'col-8'],
  ['col-6', 'col-6'],
  ['col-7', 'col-5'],
  ['col-8', 'col-4'],
  ['col-9', 'col-3'],
  ['col-10', 'col-2'],
  ['col-11', 'col-1'],
  ['col-12'],
  ['col-3', 'col-3', 'col-3', 'col-3'],
  ['col-5', 'col-2', 'col-5']
]

const grid_offset = [
  ['col-1 col-1-offset'],
  ['col-1 col-2-offset'],
  ['col-1 col-3-offset'],
  ['col-1 col-4-offset'],
  ['col-1 col-5-offset'],
  ['col-1 col-6-offset'],
  ['col-1 col-7-offset'],
  ['col-1 col-8-offset'],
  ['col-1 col-9-offset'],
  ['col-1 col-10-offset'],
  ['col-1 col-11-offset'],
  ['col-1 col-12-offset']
]

export default class GridDemo extends React.Component {
  render() {
    return (
      <>
        <h1>Grid</h1>
        <h2>Basic Grid</h2>
        <Code language="html">
          {`
<div class="row">
  <div class="col-2">Column Size 2</div>
  <div class="col-10">Column Size 10</div>
</div>
          `}
        </Code>

        <p>
            Adding &apos;.full-width&apos; will make the content expand the how view port
        </p>

        {grid.map((columns, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {columns.map((column, index) => {
                const classes = `${column} demo-column `
                return (
                  <div key={index} className={classes}>
                    {column}
                  </div>
                )
              })}
            </div>
          )
        })}

        <div className="row">
          <div className="col demo-column">Full width</div>
        </div>

        <div className="row">
          <div className="col-half demo-column">Half of screen</div>
          <div className="col-half demo-column">Other half</div>

        </div>


        <h2>Grid offset</h2>
        <Code language="html">
          {`
<div class="row">
  <div class="col-2 col-2-offset">Column</div>
</div>
            `}
        </Code>
        {grid_offset.map((columns, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {columns.map((column, index) => {
                const classes = `${column} demo-column `
                return (
                  <div key={index} className={classes}>
                    {column}
                  </div>
                )
              })}
            </div>
          )
        })}
        <h2>Flex Grid</h2>
        <Code language="html">
          {`
<div class="flex-row">
  <div class="flex-column">Column One</div>
  <div class="flex-column">Column Two</div>
</div>
            `}
        </Code>
        <div className="flex-row">
          <div className="flex-column demo-column ">Column One</div>
          <div className="flex-column demo-column ">Column Two</div>
        </div>
        <div className="flex-row">
          <div className="flex-column demo-column ">Column One</div>
        </div>

        <div className="flex-row">
          <div className="flex-column flex-size-2 demo-column ">
            Column One + One
          </div>
          <div className="flex-column demo-column ">Column Three</div>
        </div>

        <div className="flex-row">
          <div className="flex-column demo-column ">Column One</div>
          <div className="flex-column flex-size-2 demo-column ">Column Two</div>
          <div className="flex-column flex-size-3 demo-column ">
            Column Three
          </div>
        </div>

        <h2>CSS Grid</h2>
        <Code language="html">
          {`
<div class="grid-container">
  <div class="grid-column">Column One</div>
  <div class="grid-column">Column Two</div>
  <div class="grid-column">Column Three</div>
</div>
            `}
        </Code>
        <div className="grid-container">
          <div className="grid-column demo-column ">Column One</div>
          <div className="grid-column demo-column ">Column Two</div>
          <div className="grid-column demo-column ">Column Three</div>
        </div>
      </>
    )
  }
}
