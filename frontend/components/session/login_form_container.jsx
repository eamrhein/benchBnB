import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signin } from '../../actions/session';


const mapSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  link: <Link to="/signup"> Sign Up </Link>,
});

const mapDTP = (dispatch) => ({
  submitForm: (user) => dispatch(signin(user)),
});

export default connect(mapSTP, mapDTP)(SessionForm);
