import React from 'react'
import PKG from './../../../package.json'

export function PackageVersion() {
  return (<span>{PKG.version}</span>)
}

export function PackageName() {
  return (<span>{PKG.name}</span>)
}