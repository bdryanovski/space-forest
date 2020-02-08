import React from 'react'
import {Header1, Header2, Header3, Header4, Header5, Header6} from '../../react-components'
import DemoPlayground from '../../react-components/playground/demo-playground'
import Code from '../components/code'

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
<a href="#">Link</a> <br />
<u>Underlined</u> <br/>
<code>Code</code> <br/>
<kbd>Ctrl + R</kbd>
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
        <p>Basic tags and styles</p>

        <DemoPlayground scope={REACT_HEADER_SCOPE} code={`
${HEADER_EXAMPLE}

<hr />

${HEADER_P_EXAMPLE}

<hr />

<p> There React component to wrap arround headers to provide semantic markup </p>
${REACT_HEADER}

<hr />

${RANDOM_EXAMPLE}
            `} language="html" />

      </>
    )
  }
}
