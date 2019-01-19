import React from 'react'
import { Link } from 'gatsby'
import { Grid, Icon } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const handPointer = {
  cursor: 'pointer',
}

const fontAmsterdam = {
  fontFamily: 'Amsterdam',
}

const fontHolidayFree = {
  fontFamily: 'HolidayFree',
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={ [`gatsby`, `application`, `react`] } />
    <Grid centered columns={ 1 }>

      <Grid.Row centered>
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
      </Grid.Row>

      <Grid.Row centered columns={ 2 }>

        <Grid.Column>
          <div className="ui fluid image">
            <span style={ fontAmsterdam }>Save the date</span>
            <img src='/images/save_the_date.png' />
          </div>
        </Grid.Column>

        <Grid.Column>

          <Grid.Row centered>
            <Grid.Column>
              <div>
                <div style={ handPointer }
                     onClick={ () => {
                       window.open('https://www.instagram.com/explore/tags/lopescosta/')
                     } }
                >
                  <div>Share our journey!</div>
                  <div>
                    <Icon
                      name='instagram'
                      size='large'
                      link
                    />
                    #LopesCosta
                  </div>
                  <div>Tag your photos!</div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column>
              <div style={ handPointer }
                   onClick={ () => {
                     window.open('https://goo.gl/maps/Liku3ZaTx982')
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
