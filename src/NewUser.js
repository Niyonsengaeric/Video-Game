import React, { Component } from 'react';

class NewUser extends Component {
  state={
  firstName:'',
  lastName:'',
  userName:'',
  gamesNumber:0,
  }

render (){
    const  handleChange=(e)=> {
      e.preventDefault()
    const name=e.target.name;
    this.setState({ [e.target.name] : e.target.value});
  }
  return (

  <div>
  <h1>Fill the User Form</h1>

<div>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="firstName" onChange={ handleChange}/><br/><br/>
    <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lastName" onChange={ handleChange}/><br/><br/>
      <label for="lname">User name:</label>
  <input type="text" id="userName" name="userName" onChange={ handleChange}/><br/><br/>
  <button disabled={!this.state.firstName || !this.state.lastName || !this.state.userName ? true : false } onClick={() => { this.props.onAdduser(this.state) }}>Add User</button><br/><br/><br/><br/>

</div>
  
  </div>
)
}

}
export default NewUser;