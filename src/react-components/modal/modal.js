import React, {Component} from 'react'
import {Icon} from '../icons/icon'

export default class Modal extends Component {

  render() {
    return (
      <div id={this.props.name} className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close"><Icon name="circle-with-cross" size="lg"/></a>
          { this.props.children}
        </div>
      </div>
    )
  }
}
