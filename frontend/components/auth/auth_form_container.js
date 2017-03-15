import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import AuthForm from './auth_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  const processForm = (ownProps.formType === 'signup') ? signup : login;

  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
