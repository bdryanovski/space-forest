import React, { Component } from 'react'
import DemoPlayground from '../playground/demo-playground'
import Pagination from './../../react/pagination'
import PaginationItem from './../../react/pagination-item'

const PAGINATION_SCOPE = {Pagination, PaginationItem }
const PAGINATION_BASIC = `
<Pagination>
  <PaginationItem>Previous</PaginationItem>
  <PaginationItem>Next</PaginationItem>
</Pagination>
`

const PAGINATION_MORE = `
<Pagination>
  <PaginationItem className="grid-align-center">More</PaginationItem>
</Pagination>
`

export default class PaginationDemo extends Component {
  render() {
    return (
      <>
        <h1>Pagging</h1>
        <DemoPlayground code={PAGINATION_BASIC} scope={PAGINATION_SCOPE}></DemoPlayground>
        <DemoPlayground code={PAGINATION_MORE} scope={PAGINATION_SCOPE}></DemoPlayground>

      </>
    )
  }
}