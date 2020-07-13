import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Head from '../components/head'
import Nav from '../components/nav'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import styled from 'styled-components';
const { colors, fontSizes, fonts } = theme;

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.black};
    background-color: ${colors.white};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.Roboto};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.location.pathname === '/';

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)

  return (
    <div id='root'>
      <GlobalStyle/>
     <Head metadata={data.site.siteMetadata} />
     <SkipToContent href="#content">Skip to Content</SkipToContent>
     <StyledContent>
              <Nav isHome={isHome} />
              {/* <Social isHome={isHome} />
              <Email isHome={isHome} /> */}

              <div id="content">
                {children}
                {/* <Footer /> */}
              </div>
            </StyledContent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
