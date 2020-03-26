import React from 'react'
import Layout from '@theme/Layout'
import PKG from '../../package'

import ChangeLogFile from '../../../changelog.json'

console.log(ChangeLogFile)

function Changelog() {

  function renderLog(l) {
    return (
      <>
        <h2>{l.version} ({l.date})</h2>
        {
          Object.keys(l.changes).map((topic, i) => {
            return (
              <ul key={i}>
                <li id={topic} >{l.changes[topic].description}</li>
                <ul>
                  {
                    l.changes[topic].changes.map((change, z) => {
                      return (
                        <li key={z}>

                          { change.category ? `(${change.category})` : '' }
                          {change.subject}
                          {' '}
                          [<a href={change.githubLink}>{ change.hash}</a>]
                        </li>
                      )
                    })
                  }
                </ul>
              </ul>
            )
          })
        }
      </>

    )
  }

  return (
    <Layout title="Hello">
      <div>
        {renderLog(ChangeLogFile) }
      </div>
    </Layout>
  )
}

export default Changelog