import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="banner">
          <h2>Simple UI Framwork</h2>
          <p>Static Styles, React & React Native components</p>
        </div>

        <div className="row">
          <div className="col-4">
            <h5>Static Styles</h5>
            <p>
              Static styles that you could use to build your own components,
              layouts and many more. Tools to position and modify you current
              styles.
            </p>
          </div>

          <div className="col-4">
            <h5>React Component</h5>
            <p>
              Easy to use customizable and small React components to be used
              into your next project. Simplifying the need to know every class
              out there.
            </p>
          </div>

          <div className="col-4">
            <h5>React Native Styles</h5>
            <p>
              Collections of style that you could use to build your own mobile
              or desktop app.
            </p>
          </div>
        </div>
      </>
    );
  }
}
