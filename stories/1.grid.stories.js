import React from 'react'

export default {
  title: 'Gird & Layouts',
}

export const Container960Center = () => {
  return (
    <React.Fragment>
      <div className="container demo-bg"><span>Container max-size of 960px, center</span></div>
    </React.Fragment>
  )
}

export const ContainerFullWidth = () => {
  return (
    <div className="container-fw demo-bg"><span>Full width container</span></div>
  )
}

export const ContainerFluid = () => {
  return (
    <div className="container-fluid demo-bg"><span>Full width container with padding</span></div>
  )
}

export const FlexboxRow = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 demo-column">Column</div>
        <div className="col-6 demo-column">Column</div>
      </div>
    </div>
  )
}

export const FlexboxRowAuto = () => {
  return (
    <div className="container">
      <div className="row around">
        <div className="demo-column">Column</div>
        <div className="demo-column">Column</div>
        <div className="demo-column">Column</div>
        <div className="demo-column">Column</div>
        <div className="end demo-column">End</div>
      </div>
    </div>
  )
}

export const FlexCenter = () => {
  return (
    <div className="container">
      <div className="row middle center demo-column">
        <h1>Hello World!</h1>
      </div>
    </div>
  )
}

export const FlexSizes = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row center">
          <div className="col-fit demo-column">.col-fit</div>
          <div className="col-fit demo-column">.col-fit</div>
          <div className="col-fit demo-column">.col-fit</div>
          <div className="col-fit demo-column">.col-fit</div>
        </div>
      </div>

      <div className="container">
        <div className="row center">
          <div className="col-full demo-column">.col-full</div>
          <div className="col-full demo-column">.col-full</div>
        </div>
      </div>

      <div className="container">
        <div className="row center">
          <div className="col-w50 demo-column">.col-w50</div>
          <div className="col-w50 demo-column">.col-w50</div>
        </div>
      </div>

      <div className="container">
        <div className="row center">
          <div className="col-w33 demo-column">.col-w33</div>
          <div className="col-w33 demo-column">.col-w33</div>
          <div className="col-w33 demo-column">.col-w33</div>
        </div>
      </div>

      <div className="container">
        <div className="row center">
          <div className="col-w25 demo-column">.col-w25</div>
          <div className="col-w25 demo-column">.col-w25</div>
          <div className="col-w25 demo-column">.col-w25</div>
          <div className="col-w25 demo-column">.col-w25</div>
        </div>
      </div>
    </React.Fragment>
  )
}