import Login from '../pages/login';
import { connect } from 'react-redux';
import {actions} from '../constant';
import axios from 'axios';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.user
  }
}

const asyncLogin = (data)=>{
  return (dispatch)=>{
    axios.post('http://localhost:3002/api/users',data).then(r=>{
      const data = r.data;
      const action = {
        type: actions.LOGIN,
        data
      }
      dispatch(action)
    }).catch(()=>{
      console.log('error');
    })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (data) => {
      dispatch(asyncLogin(data));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);