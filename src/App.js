/* 
  App.js
  Author - Thilak Raj Soundararajan (thilkrajs@gmail.com)
*/

import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Hero from "./components/hero";
import ImageGallery from "./components/imageGallery";
import { connect } from "react-redux";

//Using custom font as Theme and enclosing it with the main components
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  },
});

class App extends Component {
  render() {
    const marsImages = this.props.images;
    return (
      <ThemeProvider theme={theme}>
        <Hero />
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item md={12}>
            <ImageGallery rover={marsImages} />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

//getting the images from gallery reducer
const mapStateToProps = (state) => {
  return { images: state.galleryReducer.roverImages };
};

//Optional dispatch to props 
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
