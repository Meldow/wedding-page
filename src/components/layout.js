import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from 'semantic-ui-react'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    ` }
    render={ data => (
      <>
        <Header siteTitle={ data.site.siteMetadata.title } />
        <Container>
          { children }
        </Container>
      </>
    ) }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
