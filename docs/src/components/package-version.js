import React from 'react'
import PKG from './../package'

export function PackageVersion() {
  return (<span>{PKG.getVersion()}</span>)
}

export function PackageName() {
  return (<span>{PKG.getName()}</span>)
}