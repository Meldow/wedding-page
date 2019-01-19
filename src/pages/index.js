import React from 'react'
import { Link } from 'gatsby'
import { Grid, Image } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={ [`gatsby`, `application`, `react`] } />



    <Grid centered columns={2}>
      <Grid.Column>
        <Image
          fluid
          src='/images/us.png' />
      </Grid.Column>

      <Grid.Row centered columns={4}>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={4}>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
