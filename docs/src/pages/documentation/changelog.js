import React from 'react'
import Layout from '@theme/Layout'
import PKG from '../../package'

//import CLOG from '../../../../CHANGELOG.md'

function Changelog() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Extract the changelog from the project CHANGELOG.md
        </p>
      </div>
    </Layout>
  )
}

export default Changelog