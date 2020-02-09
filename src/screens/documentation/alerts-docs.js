import React, {Component} from 'react'
import {Alert, ALERT_TYPES} from '../../react-components'
import DemoPlayground from '../../react-components/playground/demo-playground'
import Code from '../components/code'

const EXAMPLE_ALERTS = `
<Alert>
  Normal alert text
</Alert>
<Alert type="primary">
  Primary alert text
</Alert>
<Alert type="info">
  Info alert text
</Alert>
<Alert type="success">
  Success alert text
</Alert>
<Alert type="warning" closable={ false }>
  Warning alert text non closable
</Alert>
<Alert type="danger">
  Danger alert text
</Alert>
`.trim()

export default class AlertDocs extends Component {
  render() {
    return (
      <div>
        <h1>Alerts</h1>
        <p>Alerts are small component to indicate messages with bigger importans</p>

        <p>
          There this types of alerts
        </p>

        <ul>
          {
            ALERT_TYPES.map((type, index) => {
              return <li key={index}><code>.{type}</code></li>
            })
          }
        </ul>

        <h2>Static</h2>
        <Code language="html">
          {'<div class="alert" role="alert"> Alert content goes here ... </div>'}
        </Code>

        <h2>React</h2>
        <DemoPlayground code={EXAMPLE_ALERTS} scope={{Alert}} language="html" />


      </div>
    )
  }
}
