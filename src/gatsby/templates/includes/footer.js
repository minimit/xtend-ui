import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          version
        }
      }
    }
  `)
  return (
    <div className="gatsby_site-footer_bottom">
      <div className="xt-row gatsby_site-footer_bottom_row">
        <div>
          {site.siteMetadata.title} v{site.siteMetadata.version}{' '}
          <a href="https://github.com/minimit/xtendui/blob/beta/LICENSE" target="_blank" rel="noopener noreferrer">
            APACHE 2.0
          </a>{' '}
          <span className="xt-separator xt-separator-dash"></span> Docs{' '}
          <a href="https://github.com/minimit/xtendui/blob/beta/LICENSE-DOCS" target="_blank" rel="noopener noreferrer">
            CC BY 3.0
          </a>
        </div>
        <div>
          © 2017 <span className="xt-separator xt-separator-dash"></span> {new Date().getFullYear()}{' '}
          {site.siteMetadata.author}
        </div>
      </div>
    </div>
  )
}
