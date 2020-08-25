import React, {Component} from 'react'
import './Users.css';

class Users extends Component {
  
  state={
        action:'Hide Games',
  }

 render(){
      const handleAction=(e)=> {    
this.setState({ action: this.state.action ==='Hide Games' ? 'Show Games' : 'Hide Games' });
         }
      
return (
  <div>
  <h1>List of users</h1>
  
  <ol>
  { 
  this.props.users.map((user)=>(
  <li className='single-user' key={user.userName}>{user.userName} Played {this.state.action === 'Hide Games' ? user.gamesNumber : '*/'} Games</li>
))}
</ol><br/><br/>
 <input type="button" class="button" name='action' value={this.state.action} onClick={ handleAction}/>
</div>
)
 }
  

}

export default Users;