import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentDidMount() {
    if (this.props.formType === 'demo') {
      this.setState({ username: "guest", password: "demopassword"});

    }
  }

  componentDidUpdate() {
    if (this.props.formType === 'demo') {
      const user = this.state;
      setTimeout( () => (
        this.props.processForm(user)
        .then( () => this.props.closeModal())
        .then(() => hashHistory.push("/home")), 3000
      ));
    }

  }
	// componentDidUpdate() {
	// 	this.redirectIfLoggedIn();
	// }
  //
	// redirectIfLoggedIn() {
	// 	if (this.props.loggedIn) {
	// 		this.props.router.push("/");
	// 	}
	// }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
    // debugger;
		this.props.processForm(user)
    .then(
      () => this.props.closeModal()
    )
    .then(() => hashHistory.push("/home"));
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">

        <img className="x-box"
          src='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604610/close-icon_mzdzio.png'
          width="20"
          height="20"
          onClick={this.props.closeModal}/>

        {this.renderErrors()}
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to CouchSmurfing!
					<br/>
					Please {this.props.formType} or {this.navLink()}
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(AuthForm);
