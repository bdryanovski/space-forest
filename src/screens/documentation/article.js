import React, { Component } from 'react'
import DemoPlayground from '../playground/demo-playground'
import Code from '../components/prism'

const ARTICLE_DEMO = `
<div class="article">
  <h1>Nulla varius, augue a ornare feugiat</h1>

  <p>
    Nulla varius, augue a ornare feugiat, quam erat ultricies nunc,
    id volutpat metus orci fringilla est. Pellentesque rhoncus
    laoreet mattis. In non finibus ante. Nam dapibus varius tellus.
    Aliquam eget augue ac arcu fermentum pulvinar non quis ex.
    Praesent finibus vel lacus ut <strong>cursus</strong>. Quisque varius tempus
    metus, quis eleifend massa pulvinar eu. Etiam elementum euismod
    metus ac vulputate. Curabitur pulvinar dictum nibh tincidunt
    rutrum. Cras lobortis leo id luctus finibus. Cras aliquam felis
    in dapibus scelerisque. Maecenas viverra hendrerit eleifend. Nam
    blandit libero vitae augue ultrices rhoncus. Fusce ligula diam,
    ultricies sit amet dignissim a, pharetra ut tortor. Suspendisse
    et suscipit purus, sed posuere mauris. Aenean sagittis malesuada
    orci, ut commodo ante.
  </p>

  <h2>
    Duis egestas blandit lobortis.
  </h2>

  <p>
    Maecenas eget rutrum lectus. Integer pretium elit non arcu
    sollicitudin, in feugiat diam ultricies. Sed ullamcorper mattis
    condimentum. Maecenas <em>eget</em> sem sit amet tellus mollis aliquam
    vitae eu magna. Sed et euismod augue. Cras condimentum lacus
    sed arcu euismod, id consectetur est condimentum. Suspendisse
    quis est id sapien finibus consectetur. Duis egestas blandit
    lobortis.
  </p>

  <ul>
    <li>Aliquam eget augue ac arcu fermentum pulvinar non quis ex.</li>
    <li>Maecenas viverra hendrerit eleifend.</li>
    <li>Aenean sagittis malesuada orci, ut commodo ante.</li>
  </ul>

  <h3>
    Pellentesque dignissim, libero ut vulputate vehicula, turpis.
  </h3>

  <p>
    Maecenas eget rutrum lectus. Integer pretium elit non arcu sollicitudin,
    in feugiat diam ultricies. Sed ullamcorper mattis condimentum.
    <u>Maecenas</u> eget sem sit amet tellus mollis aliquam vitae eu magna.
    Sed et euismod augue. Cras condimentum lacus sed arcu euismod, id
    consectetur est condimentum. Suspendisse quis est id sapien finibus
    consectetur. Duis egestas blandit lobortis.
  </p>

  <h4>Aenean eu sem urna.</h4>

  <p>
    Ut eget ullamcorper purus. Donec convallis tellus eget scelerisque
    aliquet. Curabitur placerat congue lectus, sed pulvinar augue mattis
    eu. Sed tempor dictum eros sit amet ultrices. In luctus id diam ac
    porta. Nulla lorem tellus, <a href="#x">mollis</a> et risus eu, convallis luctus ex.
  </p>

  <h5>
    Praesent iaculis leo in tortor sollicitudin, consectetur eleifend
    orci auctor.
  </h5>

  <p>
    Nulla varius, augue a ornare feugiat, quam erat ultricies nunc, id
    volutpat metus orci fringilla est. Pellentesque rhoncus laoreet mattis.
    In non finibus ante. Nam dapibus varius tellus. Aliquam eget augue ac
    arcu fermentum pulvinar non quis ex. Praesent finibus vel lacus ut
    cursus. Quisque varius tempus metus, quis eleifend massa pulvinar eu.
    Etiam elementum euismod metus ac vulputate. Curabitur pulvinar
    dictum nibh tincidunt rutrum. Cras lobortis leo id luctus finibus.
    Cras aliquam felis in dapibus scelerisque.
  </p>

</div >
`.trim()

export default class ArticlesDemo extends Component {
  render() {
    return (
      <div>
        <h5>Article</h5>
        <p>Basic article template for Gatsby blog article.</p>
        <Code language='html'>{'<div class="article"><!-- content --></div>'}</Code>
        <DemoPlayground code={ARTICLE_DEMO} language="html" />

        <div className="spacer">
          <p>
            There is React component named Article that could be used to wrap
            the content inside the article CSS class.
          </p>
          <Code language='html'>{'<Article><!-- content --></Article>'}</Code>
        </div>

      </div>
    )
  }
}
