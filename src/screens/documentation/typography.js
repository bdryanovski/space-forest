import React from 'react'
import {Header1, Header2, Header3, Header4, Header5, Header6} from '../../react'
import DemoPlayground from '../playground/demo-playground'

const HEADER_EXAMPLE = `
<h1>H1 headline</h1>
<h2>H2 headline</h2>
<h3>H3 headline</h3>
<h4>H4 headline</h4>
<h5>H5 headline</h5>
<h6>H6 headline</h6>
`.trim()

const HEADER_P_EXAMPLE = `
<p className="h1">H1 headline with class</p>
<p className="h2">H2 headline with class</p>
<p className="h3">H3 headline with class</p>
<p className="h4">H4 headline with class</p>
<p className="h5">H5 headline with class</p>
<p className="h6">H6 headline with class</p>
`.trim()

const RANDOM_EXAMPLE = `
<p>The base type is 15px over 1.6 line height (24px)</p>
<strong>Bolded</strong> <br/>
<em>Italicized</em> <br/>
<a href="#">Colored</a> <br />
<u>Underlined</u>
`.trim()

const REACT_HEADER = `
<Header1>H1 headline</Header1>
<Header2>H2 headline</Header2>
<Header3>H3 headline</Header3>
<Header4>H4 headline</Header4>
<Header5>H5 headline</Header5>
<Header6>H6 headline</Header6>
`.trim()
const REACT_HEADER_SCOPE = {Header1, Header2, Header3, Header4, Header5, Header6}

export default class TypographyDemo extends React.Component {
  render() {
    return (
      <>
        <h1>Typography</h1>
        <h2>Headers</h2>
        <div className="spacer">
          <DemoPlayground code={HEADER_EXAMPLE} language="html" />
        </div>
        <div className="spacer">
          <DemoPlayground code={HEADER_P_EXAMPLE} language="html" />
        </div>
        <h2>Text tags</h2>
        <div className="spacer">
          <DemoPlayground code={RANDOM_EXAMPLE} language="html" />
        </div>
        <h2>React</h2>
        <p>
          There React component to wrap arround headers to provide semantic markup
        </p>
        <div className="spacer">
          <DemoPlayground code={REACT_HEADER} scope={REACT_HEADER_SCOPE} language="html" />
        </div>
      </>
    )
  }
}
