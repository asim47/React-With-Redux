import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const App = (props) => {

  return (
    <Fragment>
      <h1>START CODING</h1>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, null)(App));
