import React, { Component } from 'react';
// import Header from './Header';
import RegistrationForm from './RegistrationForm.js'
// const menu = [
//   {
//     link: '/articles',
//     label: 'Articles'
//   },
//   {
//     link: 'contacts',
//     label: 'Contacts'
//   },
//   {
//     link: '/posts',
//     label: 'Post'
//   }
// ];



class App extends Component {
  submit = () => {
    console.log('submit', this.testInput.value);
  };

  render() {
    return (
      // <div className="container">
      //   <RegistrationForm />
      // </div>
      <div>
        <input type="text" placeholder="test" ref={(input) => this.testInput = input} />
      <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default App;
