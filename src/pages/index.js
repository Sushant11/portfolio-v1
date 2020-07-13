import React from "react"
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from "../components/layout"
import { Main } from '../styles/Main';

// const StyledMainContainer = styled(Main)`
//   counter-reset: section;
// `;

const IndexPage = (location,data) => (
  <Layout location={location.location}>
    {/* <StyledMainContainer className="fillHeight"> */}
    Main
      {/* </StyledMainContainer> */}
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage
