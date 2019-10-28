import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <li className="login" onClick={this.toggle}>Login</li>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Login</ModalHeader>
          <ModalBody>
          <div className="facebook">
          <span className="facebookf">F</span> Login with Facebook
          </div>
          <div className="google">
           <span className="googleg">G</span> Login with Google
          </div>
          <hr />
            <form>
             <input placeholder="Email Address"/>
             <input placeholder="Password"/>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
            <h6> Forgot Password? </h6>
            <h5> Don't have an account? <a href='#'> Sign up </a> </h5>
            <hr />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
