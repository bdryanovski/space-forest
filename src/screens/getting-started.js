import React from 'react'
import PrismCode from './components/prism'

export default class GettingStarted extends React.Component {
    render() {
        return (
            <>
                <h4>Getting started</h4>
                <PrismCode language="bash">
                    {'npm install --save package-name'}
                </PrismCode>
            </>
        )
    }
}
