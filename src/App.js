import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'


export class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoggedin : false
    }
  }

  responseFacebook = (response) =>{
    console.log(response)
    this.setState({
      isLoggedin : true,
      resp: response
    })
  }

  getCSRFToken = () => {
      // Simple GET request using fetch
      fetch('http://localhost:8000/accounts/fb/csrf')
      .then(response => console.log(response.json())
      )
  }
  
  //imageUrl = this.state.resp.picture.data.url;

  render(){
    return (
      this.state.isLoggedin ? 
        `Welcome Home ${this.state.resp.name}`
      :
      <div>
        <FacebookLogin
          appId="764350358048782"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook} 
          state = {this.getCSRFToken}
        />
      </div>
    )
  }
}

export default App