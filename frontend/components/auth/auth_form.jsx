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
      this.setState({ username: "Guest", password: "demopassword"});

    }
  }

  componentDidUpdate() {
    if (this.props.formType === 'demo') {
      const user = this.state;
      setTimeout( () => (
        this.props.processForm(user)
        .then( () => this.props.closeModal())
        .then( () => hashHistory.push("/"))
      ), 500  );
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
    .then(() => hashHistory.push("/"));
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

	switchModal(){
		if (this.props.formType === "login") {
			return (
				() => {
					this.props.closeModalCB(this.props.openModal("signup"));

				}
			)
		} else {
			return (
				() => {
					this.props.closeModalCB(this.props.openModal("login"));
				}
			)
		}
	}

	render() {
		if (this.props.formType === "login" || this.props.formType === "demo") {
			return (
				<div className="login-form-container">
					<section className='box mod-login'>
						<header className='auth-box-header'>
							<h1 className='box-header-title'>
								Welcome to CouchSmurfing!
							</h1>
							<h1 className= 'box-header-title'>
								Please {this.props.formType}
							</h1>

						</header>
						<div className='box-content mod-padded'>
							{this.renderErrors()}

							<form onSubmit={this.handleSubmit}>
								<fieldset>
									<input
										type='text'
										className='auth-input mod-rounded mod-padded mod-no-shadow'
										placeholder='Username'
										value={this.state.username}
										onChange={this.update("username")}/>
								</fieldset>
								<fieldset>
									<input
										type='password'
										className='auth-input mod-rounded mod-padded mod-no-shadow'
										placeholder='Password'
										value={this.state.password}
										onChange={this.update("password")}/>
								</fieldset>
								<input className="mod-full-width" id="auth-submit-button" type="submit" value="Submit" />
							</form>
							<div className='footer-action u-text-center'>
								<p>Don't have an account?</p>
								<button onClick={this.switchModal()} className='button mod-outline mod-blue'>Join</button>
							</div>
						</div>
					</section>
					<img className="x-box"
						src='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604610/close-icon_mzdzio.png'
						width="20"
						height="20"
						onClick={this.props.closeModal}/>

				</div>
			);
		} else {
			return (
				<div className="login-form-container">
					<section className='box mod-login'>
						<header className='auth-box-header'>
							<h1 className='box-header-title'>
								Welcome to CouchSmurfing!
							</h1>
							<h1 className= 'box-header-title'>
								Please {this.props.formType}
							</h1>
						</header>
						<div className='box-content mod-padded'>
							{this.renderErrors()}
							<form onSubmit={this.handleSubmit}>
								<fieldset>
									<input
										type='text'
										className='auth-input mod-rounded mod-padded mod-no-shadow'
										placeholder='Full Name' />

								</fieldset>
								<fieldset>
									<input
										type='text'
										className='auth-input mod-rounded mod-padded mod-no-shadow'
										placeholder='Location' />

								</fieldset>
								<fieldset>
									<input
										type='text'
										className='auth-input mod-rounded mod-padded mod-no-shadow'
										placeholder='Username'
										value={this.state.username}
										onChange={this.update("username")}/>
								</fieldset>
								<fieldset>
									<input
										type='password'
										className='auth-input mod-rounded mod-padded mod-no-shadow'
										placeholder='Password'
										value={this.state.password}
										onChange={this.update("password")}/>
								</fieldset>
								<input className="mod-full-width" id="auth-submit-button" type="submit" value="Submit" />
							</form>
							<div className='footer-action u-text-center'>
								<p>Already have an account?</p>
								<button onClick={this.switchModal()} className='button mod-outline mod-blue'>Log In</button>
							</div>
						</div>
					</section>
					<img className="x-box"
						src='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604610/close-icon_mzdzio.png'
						width="20"
						height="20"
						onClick={this.props.closeModal}/>
				</div>
			)
		}

	}

}
// {this.renderErrors()}
// <form onSubmit={this.handleSubmit} className="login-form-box">
// 	Welcome to CouchSmurfing!
// 	<br/>
// 	Please {this.props.formType} or {this.navLink()}
// 	<div className="login-form">
// 		<br/>
// 		<label> Username:
// 			<input type="text"
// 				value={this.state.username}
// 				onChange={this.update("username")}
// 				className="login-input" />
// 		</label>
// 		<br/>
// 		<label> Password:
// 			<input type="password"
// 				value={this.state.password}
// 				onChange={this.update("password")}
// 				className="login-input" />
// 		</label>
// 		<br/>
// 		<input id="auth-submit-button" type="submit" value="Submit" />
// 	</div>
// </form>

export default withRouter(AuthForm);
