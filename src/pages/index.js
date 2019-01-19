import React from 'react'
import { Link } from 'gatsby'
import { Grid, Icon } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const handPointer = {
  cursor: 'pointer',
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={ [`gatsby`, `application`, `react`] } />
    <Grid centered columns={ 1 }>
      <Grid.Column>
        <div className="ui fluid image">
          <img src='/images/us.png' />
          <div style={ {
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            width: '100%',
            height: 'auto',
            color: 'white',
          } }>TEST
          </div>
        </div>
      </Grid.Column>
      <Grid.Row centered columns={ 2 }>
        <Grid.Column>
          <div className="ui fluid image">
            <img src='/images/save_the_date.png' />
          </div>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row centered columns={ 1 }>
            <Grid.Column>
              <div>
                <div style={ handPointer }
                     onClick={ () => {
                       window.open('https://goo.gl/maps/ay3SvnUceoK2')
                     } }
                >
                  <Icon
                    name='instagram'
                    size='large'
                    link
                  />
                  <span>Share our journey!</span>
                  <span>#LopesCosta</span>
                  <span>Tag your photos!</span>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={ 1 }>
            <Grid.Column>
              <div style={ handPointer }
                   onClick={ () => {
                     window.open('https://goo.gl/maps/ay3SvnUceoK2')
                   } }
              >
                <Icon
                  name='location arrow'
                  size='large'
                  link
                />
                <span>Marriage ceremony</span>
              </div>
              <div style={ handPointer }
                   onClick={ () => {
                     window.open('https://goo.gl/maps/ay3SvnUceoK2')
                   } }
              >
                <Icon
                  name='location arrow'
                  size='large'
                  link
                />
                <span>Wedding reception</span>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
