import React from 'react'
import {Icon} from '../../react-components'

/** NOTE don't include by itself no styles for it will be injected */

export default class OSXWindow extends React.Component {
  copy = () => {
    if (this.props.onCopy && typeof this.props.onCopy === 'function') {
      this.props.onCopy()
    }
  }
  render() {
    const {language, title} = this.props

    return (
      <div className="window">
        <div className="window-header">
          <div className="action-buttons" onClick={this.copy} >
            <Icon title="Copy code" name="copy"/>
          </div>
          <div className="title">{ title }</div>
          <div className="language">{language} </div>
        </div>
        <div className="window-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}


