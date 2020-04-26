import React from 'react'
import Layout from '@theme/Layout'

import ChangeLogFile from '../../../changelog.json'

function Changelog() {

  function renderLog(json) {
    return Object.keys(json).map((version, index) => {
      let l = json[version]
      return (
        <div key={index}>
          <h2>{l.version} ({l.date})</h2>
          {
            Object.keys(l.changes).map((topic, i) => {
              return (
                <>
                  <h3 key={i} id={topic} >{l.changes[topic].description}</h3>
                  <ul>
                    {
                      l.changes[topic].changes.map((change, z) => {
                        return (
                          <li key={z}>

                            {change.category ? `(${change.category})` : ''}
                            {change.subject}
                            {' '}
                        [<a href={change.githubLink}>{change.hash}</a>]
                          </li>
                        )
                      })
                    }
                  </ul>
                </>
              )
            })
          }
        </div>

      )
    })
  }

  return (
    <Layout title="Hello">
      <div>
        {renderLog(ChangeLogFile || {}) }
      </div>
    </Layout>
  )
}

export default Changelog