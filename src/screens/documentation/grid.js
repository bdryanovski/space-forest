import React from 'react';
import Code from '../components/code';

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
];

const grid_offset = [
  ['cols-1 cols-1-offset'],
  ['cols-1 cols-2-offset'],
  ['cols-1 cols-3-offset'],
  ['cols-1 cols-4-offset'],
  ['cols-1 cols-5-offset'],
  ['cols-1 cols-6-offset'],
  ['cols-1 cols-7-offset'],
  ['cols-1 cols-8-offset'],
  ['cols-1 cols-9-offset'],
  ['cols-1 cols-10-offset'],
  ['cols-1 cols-11-offset'],
  ['cols-1 cols-12-offset']
];

export default class GridDemo extends React.Component {
  render() {
    return (
      <>
        <h1>Grid</h1>
        <h2>Basic Grid</h2>
        <Code language="html">
          {`
<div class="row">
  <div class="cols-2">Column Size 2</div>
  <div class="cols-10">Column Size 10</div>
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
                const classes = `${column} demo-column `;
                return (
                  <div key={index} className={classes}>
                    {column}
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="row">
          <div className="cols demo-column">Full width</div>
        </div>

        <div className="row">
          <div className="cols-half demo-column">Half of screen</div>
          <div className="cols-half demo-column">Other half</div>

        </div>


        <h2>Grid offset</h2>
        <Code language="html">
          {`
<div class="row">
  <div class="cols-2 cols-2-offset">Column</div>
</div>
            `}
        </Code>
        {grid_offset.map((columns, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {columns.map((column, index) => {
                const classes = `${column} demo-column `;
                return (
                  <div key={index} className={classes}>
                    {column}
                  </div>
                );
              })}
            </div>
          );
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


        <h2>Grid 2</h2>
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
    );
  }
}
