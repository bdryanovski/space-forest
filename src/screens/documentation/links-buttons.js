import React from 'react'

export default class LinksButtonsDemo extends React.Component {
    render() {
        return (
            <>
                <h5>Links & Buttons</h5>

                <h6 id="links">Links</h6>
                <div className="grid-container">
                    <div className="grid-column">
                        <a href="#links">Standart</a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="primary">
              Primary
                        </a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="success">
              Success
                        </a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="warning">
              Warning
                        </a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="danger">
              Danger
                        </a>
                    </div>
                </div>
                <h6>Button HTML attribute</h6>
                <div className="grid-container">
                    <div className="grid-column">
                        <button className="btn">Standart</button>
                    </div>
                    <div className="grid-column">
                        <button className="btn primary">Primary</button>
                    </div>
                    <div className="grid-column">
                        <button className="btn success">Success</button>
                    </div>
                    <div className="grid-column">
                        <button className="btn warning">Warning</button>
                    </div>
                    <div className="grid-column">
                        <button className="btn danger">Danger</button>
                    </div>
                </div>
                <h6>A HTML attribute</h6>
                <div className="grid-container">
                    <div className="grid-column">
                        <a href="#links" className="btn">
              Standart
                        </a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="btn primary">
              Primary
                        </a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="btn success">
              Success
                        </a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="btn warning">
              Warning
                        </a>
                    </div>
                    <div className="grid-column">
                        <a href="#links" className="btn danger">
              Danger
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
