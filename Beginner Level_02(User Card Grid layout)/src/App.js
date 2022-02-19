import Users from "./User";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="box">
            <div className="column1">
              <h2 id="heading"> USER DETAILS </h2>
              <button onClick={this.updateState} id="getusers">
                Get Users
              </button>
            </div>
          </div>
        </nav>
        <div className="box2">
          <Users info={this.state.loading} users={this.state.users_data} />
        </div>
        <footer>
          <hr></hr>
          <h4>Author: Sakshi Ashok Patil</h4>
          <a href="mailto: sakshipatil.172001@gmail.com" color="red">
            sakshipatil.172001@gmail.com
          </a>
          <hr></hr>
          <h5>Copyright &copy; 2022 Sakshi172001, All Rights Reserved.</h5>
        </footer>
      </>
    );
  }
}
export default App;
