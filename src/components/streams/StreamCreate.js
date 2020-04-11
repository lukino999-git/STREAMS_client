import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log('formValues', formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description';
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);