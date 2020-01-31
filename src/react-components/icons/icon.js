import React from 'react'
import { REGISTER } from './icons-register'

let iconCounter = 0

const DEFAULT_SIZE = 16

export const SIZES = {
  'xs': 8,
  's': 16,
  'm': 32,
  'l': 64,
  'xl': 128,
  '2xl': 256,
}

export function IconWrapper(props) {
  let id = props.id
  const title = props.title || ''
  let width = props.width || DEFAULT_SIZE
  let height = props.height || DEFAULT_SIZE

  if (id === undefined) {
    id = `icon-${++iconCounter}`
  }

  if (props.size) {
    width = height = SIZES[props.size] || SIZES['s']
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      aria-labelledby={id}
      enableBackground="new 0 0 20 20"
    >
      <title id={id}>{title}</title>
      {props.children}
    </svg>
  )
}


export function Icon(props) {
  if (!props.name) {
    throw new Error('Icon require icon name to know what to render')
  }
  if (!isValidIconName(props.name)) {
    throw new Error(`Unknown icon name (${props.name})used inside <Icon />`)
  }

  return (
    <IconWrapper {...props}>
      {REGISTER[props.name]}
      {props.children}
    </IconWrapper>
  )
}

export function AvailableIcons() {
  return Object.keys(REGISTER)
}

function isValidIconName(name) {
  return Object.keys(REGISTER).includes(name)
}