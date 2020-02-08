import React from 'react'
import {Link} from 'react-router-dom'

import './styles/home.scss'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container">

          <div className="bg">
            <div className="sky">
              <div className="forest">
                <div className="forest__item">
                  <div className="forest__tree forest__tree--1"></div>
                  <div className="forest__tree forest__tree--2"></div>
                  <div className="forest__tree forest__tree--3"></div>
                  <div className="forest__tree forest__tree--4"></div>
                </div>
                <div className="forest__item">
                  <div className="forest__tree forest__tree--1"></div>
                  <div className="forest__tree forest__tree--2"></div>
                  <div className="forest__tree forest__tree--3"></div>
                  <div className="forest__tree forest__tree--4"></div>
                </div>
                <div className="forest__item">
                  <div className="forest__tree forest__tree--1"></div>
                  <div className="forest__tree forest__tree--2"></div>
                  <div className="forest__tree forest__tree--3"></div>
                  <div className="forest__tree forest__tree--4"></div>
                </div>
                <div className="forest__item">
                  <div className="forest__tree forest__tree--1"></div>
                  <div className="forest__tree forest__tree--2"></div>
                  <div className="forest__tree forest__tree--3"></div>
                  <div className="forest__tree forest__tree--4"></div>
                </div>
                <div className="forest__item">
                  <div className="forest__tree forest__tree--1"></div>
                  <div className="forest__tree forest__tree--2"></div>
                  <div className="forest__tree forest__tree--3"></div>
                  <div className="forest__tree forest__tree--4"></div>
                </div>
                <div className="forest__item">
                  <div className="forest__tree forest__tree--1"></div>
                  <div className="forest__tree forest__tree--2"></div>
                  <div className="forest__tree forest__tree--3"></div>
                  <div className="forest__tree forest__tree--4"></div>
                </div>
              </div>
              <div className="main">
                <div className="tent">
                  <div className="tent__side"></div>
                  <div className="tent__front">
                    <div className="tent__door"></div>
                  </div>
                </div>
                <div className="tree">
                  <div className="tree__item tree__item--1"></div>
                  <div className="tree__item tree__item--2"></div>
                </div>
                <div className="tree">
                  <div className="tree__item tree__item--3"></div>
                  <div className="tree__item tree__item--4"></div>
                </div>
                <div className="rock">
                  <div className="rock__item rock__item--1"></div>
                  <div className="rock__item rock__item--2"></div>
                  <div className="rock__item rock__item--3"></div>
                </div>
                <div className="cloud cloud--1">
                  <div className="cloud__item"></div>
                </div>
                <div className="cloud cloud--2">
                  <div className="cloud__item"></div>
                </div>
                <div className="cloud cloud--3">
                  <div className="cloud__item"></div>
                </div>

                <div className="fire">
                  <div className="fire__item"></div>
                  <div className="fire__trunk fire__trunk--1"></div>
                  <div className="fire__trunk fire__trunk--2"></div>
                  <div className="fire__light"></div>
                </div>
              </div>
            </div>
          </div>


          <div className="onTOP">
            <h1>SpaceForest Framework</h1>
            <p>Static HTML & CSS styles and React components.</p>
            <Link to="/documentation" className="btn primary">Getting Started</Link>
          </div>

        </div>

      </>
    )
  }
}
