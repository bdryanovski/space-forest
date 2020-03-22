---
id: installation
title: Installation
sidebar_label: Installation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="npm"
  values={[
    { label: 'NPM', value: 'npm', },
    { label: 'Yarn', value: 'yarn', },
  ]
}>
  <TabItem value="npm">

  ```bash
  npm install spaceforestbeta
  ```

  </TabItem>
  <TabItem value="yarn">

  ```bash
  yarn add spaceforestbeta
  ```

  </TabItem>
</Tabs>


Import styles into project.
<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },
    { label: 'SCSS', value: 'scss', },
  ]
}>
  <TabItem value="react">

  ```js
  // app.js
  import 'spaceforestbeta/dist/style.css'
  ```

  </TabItem>
  <TabItem value="scss">

  ```scss
  @import "node_modules/spaceforestbeta/dist/style.css";
  ```

  </TabItem>
</Tabs>
