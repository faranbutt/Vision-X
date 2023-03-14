import { Component } from "react";
class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      SigninEmail : '',
      SigninPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({SigninEmail:event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({SigninPassword:event.target.value})
  }
  onSubmitSignin = () => {
    fetch('https://murmuring-brook-81935.herokuapp.com/signin',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        email: this.state.SigninEmail,
        password: this.state.SigninPassword
      })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user.id){
        this.props.loadUser(user);
        this.props.isSignedIn('home')
      }
    })
  }
  render(){
    const {isSignedIn} = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center justify-center">
        <main className="pa4 black-80 flex justify-center items-center">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="flex justify-center">
              <input
                onClick={this.onSubmitSignin}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="button"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 center flex justify-center cursor-pointer">
              <p onClick={()=>isSignedIn('register')} className="f6 link dim black db">
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    );
  }
};
export default Signin;
