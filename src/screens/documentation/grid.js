import React from 'react'
import Code from '../components/code'

const grid = [
  ['cols-1', 'cols-11'],
  ['cols-2', 'cols-10'],
  ['cols-3', 'cols-9'],
  ['cols-4', 'cols-8'],
  ['cols-6', 'cols-6'],
  ['cols-7', 'cols-5'],
  ['cols-8', 'cols-4'],
  ['cols-9', 'cols-3'],
  ['cols-10', 'cols-2'],
  ['cols-11', 'cols-1'],
  ['cols-12'],
  ['cols-3', 'cols-3', 'cols-3', 'cols-3'],
  ['cols-5', 'cols-2', 'cols-5']
]

export default class GridDemo extends React.Component {
  render() {
    return (
      <>
        <h1>Grid</h1>
        <p>
            Adding &apos;.full-width&apos; will make the content expand the how view port
        </p>

        <div className="grid grid-gap-xs">
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
            <div className="cols demo-column">Full width</div>
          </div>

          <div className="row">
            <div className="cols-half demo-column">Half of screen</div>
            <div className="cols-half demo-column">Other half</div>
          </div>

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
