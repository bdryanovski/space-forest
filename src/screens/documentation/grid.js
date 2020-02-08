import React from 'react'
import Code from '../components/code'

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

export default class GridDemo extends React.Component {
  render() {
    return (
      <>
        <h1>Grid</h1>
        <p>
          Adding <code>.full-width</code> will make the content expand the how view port
        </p>

        <div className="grid grid-gap-xs">
          {grid.map((columns) => {
            return columns.map((column, index) => {
              const classes = `${column} demo-column `
              return (
                <div key={index} className={classes}>
                  {column}
                </div>
              )
            })
          })}

          <div className="full-width demo-column">Full width</div>

          <div className="col-6 demo-column">Half of screen</div>
          <div className="col-6 demo-column">Other half</div>

        </div>




        <h2>Grid</h2>
        <p>
          When useing .grid without setting one of the .col-(n) every child in this container
          will act as row.
        </p>
        <Code language="html">
          {`
<div className="grid grid-gap-xs">
  <div className="demo-column">Act as Row</div>
  <div className="demo-column">Act as anoter Row</div>
</div>
          `}</Code>
        <div className="grid grid-gap-xs">
          <div className="demo-column">Act as Row</div>
          <div className="demo-column">Act as anoter Row</div>
        </div>
        <Code language="html">
          {`
<div className="grid grid-gap-xs">
  <div className="col-6 demo-column">Column one</div>
  <div className="col-6 demo-column">Column two</div>
</div>
          `}</Code>
        <div className="grid grid-gap-xs">
          <div className="col-6 demo-column">Column one</div>
          <div className="col-6 demo-column">Column two</div>
        </div>

        <p>Auto calculate width</p>
        <Code language="html">
          {`
<div className="grid-auto-cols grid-gap-xs">
  <div className="demo-column">Column</div>
  <div className="demo-column">Column</div>
  <div className="demo-column">Column</div>
  <div className="demo-column">Column</div>
  <div className="demo-column">Column</div>
</div>
          `}</Code>
        <div className="grid-auto-cols grid-gap-xs">
          <div className="demo-column">Column</div>
          <div className="demo-column">Column</div>
          <div className="demo-column">Column</div>
          <div className="demo-column">Column</div>
          <div className="demo-column">Column</div>
        </div>

      </>
    )
  }
}
