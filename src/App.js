import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import NewUser from './NewUser'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state={
  
  users:[
    {
  id: 1,
  firsName:'Havugimana',
  lastName:'Gustave',
  userName:'madamada',
  gamesNumber:0,
    }
    ],
      isUserExist:false,
  };
  addUser = (user) => {


   this.state.users.map((c) =>
                           
   {
     this.setState({isUserExist:false});
     if (c.userName === user.userName)
     {       
        this.setState({isUserExist:true});
     }});
     this.state.isUserExist ? '' :this.setState(prevState => ({ users: [...prevState.users, user], isUserExist:true}));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <h1 className="App-title">simple video game</h1>
        </header>
    <Users users={this.state.users}/>
    <hr/>
   <NewUser onAdduser={this.addUser}/>
      </div>
    );
  }
}

export default App;
