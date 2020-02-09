import React, { Component } from 'react'

/**
 * META
 * from version: 0.1.26
 * last updated: 0.1.27
 */

export const ALERT_TYPES = [
  'primary',
  'info',
  'success',
  'warning',
  'danger'
]
export default class Alert extends Component {
  state = {
    hide: false
  }

  closeAlert = () => {
    this.setState({hide: true})
  }

  render() {
    const classes = ['alert']
    if (this.props.type && ALERT_TYPES.includes(this.props.type)) {
      classes.push(this.props.type)
    }

    /**
     * No need to hide it .. destroy it!
     */
    if (this.state.hide) {
      return <></>
    }

    return (
      <div className={classes.join(' ')} role="alert">
        {
          this.props.closable === false
            ? <></>
            : (
              <div onClick={() => this.closeAlert()} className="alert-close">×</div>
            )
        }
        { this.props.children }
      </div>
    )
  }
}
