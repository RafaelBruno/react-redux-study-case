import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class FormPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="form-page">
        <Helmet>
          <title>Form Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>Form Page</h1>

        <i>and much more...</i>
      </div>
    );
  }
}
