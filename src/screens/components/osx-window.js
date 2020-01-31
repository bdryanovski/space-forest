import React from 'react'

export default class OSXWindow extends React.Component {
  render() {
    const {language, title} = this.props

    return (
      <div className="window">
        <div className="window-header">
          <div className="action-buttons"></div>
          <div className="title">{ title }</div>
          <div className="language">{language}</div>
        </div>
        <div className="window-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
