import React, { Component } from 'react';
import './App.css';
import Modal from "./Components/FirstTaskComponents/Modal/Modal";
import Alert from "./Components/SecondTaskComponents/Alert/Alert";

class App extends Component {
  state = {
    modal: false,
  };
  modalShowed= () => {
    this.setState({modal: true})
  };
  modalClosed = () => {
    this.setState({modal: false})
  };


  dismiss = () => {
  alert('You closed alert')
  };
  render() {
    return (
      <div className="App">
        <div className="firstTask">
        <button onClick={this.modalShowed}>SHOW THE MODAL</button>
        <Modal
          show={this.state.modal}
          close={this.modalClosed}
        >
          Hello, world !
        </Modal>
        </div>

        <div className="secondTask">
          <Alert
              type='primary'>
            This is primary alert without dismiss function
          </Alert>
          <Alert
            type='secondary'
            dismiss={this.dismiss}
          >
            This is secondary alert
          </Alert>
          <Alert
            type='success'
            dismiss={this.dismiss}
            clickDismissable
          >
            This is success alert with close button
          </Alert>
        </div>
      </div>
    );
  }
}

export default App;
