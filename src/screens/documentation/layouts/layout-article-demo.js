import React, {Component} from 'react';
import {Article, Pagination, PaginationItem, Icon, Footer} from 'react-components';
import DemoPlaygourd from 'react-components/playground/demo-playground';

const ARTICLE = `
<Article>
  <h1>Maybe together save dress sentence being shaking</h1>
  <p>
    gentle actual <b>wild</b> changing himself weigh cannot visit price there supply
    material product prize decide your what slow rapidly scene century control her printed
  </p>
  <p>
    cave show instrument brush market many salmon <a>health</a> mean recent someone fresh lion log occur vessels surrounded
    brief hurried whatever down up basket activity cave show instrument brush market many salmon health mean recent
    someone fresh lion log occur vessels surrounded brief hurried whatever down up basket activity
  </p>
  <ul>
    <li>balance</li>
    <li>activity</li>
    <li>hurried</li>
    <li>instrument</li>
  </ul>
  <p>
    gentle actual wild material product prize decide your what slow rapidly scene century control her printed
  </p>
</Article>
<Pagination>
  <PaginationItem>
    <h5><Icon name="chevron-thin-left" /> Previous</h5>
    <a>surrounded brief hurried whatever</a>
  </PaginationItem>
  <PaginationItem>
    <h5>Next <Icon name="chevron-thin-right" /></h5>
    <a>salmon health mean recent someone</a>
  </PaginationItem>
</Pagination>

<Footer>Copyright { (new Date().getFullYear()) }</Footer>
`;
const SCOPE = {Article, Pagination, PaginationItem, Icon, Footer};
export default class LayoutArticleDemo extends Component {
  render() {
    return (
      <>
        <DemoPlaygourd code={ARTICLE} scope={SCOPE} language="html"/>
      </>
    );
  }
}
