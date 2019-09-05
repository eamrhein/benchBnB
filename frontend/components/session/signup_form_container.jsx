import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session';


const mapSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  link: <Link to="/login" > Login </Link>,
});

const mapDTP = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
});

export default connect(mapSTP, mapDTP)(SessionForm);
