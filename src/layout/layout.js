import React from "react"
import PropTypes from "prop-types"

import Header from "../components/header"
import HeaderSection from "../components/headerSection"
import Footer from "../components/footer"
import Main from "../components/main"
import RightColumn from "../components/rightColumn"
import './layout.css';
import styled from "styled-components";
import { device } from '../styles/breakpoints';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  margin: auto;
  max-width: 1030px;
  @media screen and (max-width: 700px) {
        display: none;
    }
`

const Layout = ({ children }) => (
  <>
    <Header/>
    <HeaderSection />
    <Grid>
      <Main>
        {children}
      </Main>
      <RightColumn />
    </Grid>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
