import React, { Component } from 'react';
import './index.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      password:'',
      username:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username,password } = this.state;
    if(username.trim()===""||password.trim()===""){
      alert('用户名密码不能为空！')
      return 
    }
    this.props.login({username,password});
  }

  handleChange(e) {
    const { name,value } = e.target;
    this.setState({
      [name]:value
    })
  }

  componentDidUpdate(oldProps) {
    //更新钩子函数
    //就可以做逻辑处理
    //触发更新的点：props改变 setState forceUpdate
    //只有props发生了改变才发生处理
    if(oldProps!==this.props){
      const { status,history } = this.props;
      if(status===200) {
        //登录成功
        history.replace('/list');
      }else{
        //登录失败
      }
    }
  }
  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">用户名</label>
            <input type="text" 
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">密码</label>
            <input type="password" 
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" 
              name="login"
              value="登录"
            />
          </div>

        </form>
      </div>
    );
  }
}
 


export default Login;