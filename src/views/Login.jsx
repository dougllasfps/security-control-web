import React from 'react'
import { observer, inject } from 'mobx-react';

@inject("auth")
@observer
class Login extends React.Component{

    state = {
        username: '',
        password: ''
    }

    onSubmit = (e) => {
       e.preventDefault();
       this.props.auth.authenticate({...this.state})
    }

    render(){
        return(
            <div className="login-box">
            <div className="login-logo">
                <b>Application</b>
            </div>
            
            <div className="login-box-body">
                <p className="login-box-msg">Entre para inicializar sua sessão</p>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group has-feedback">
                        <input  type="text" className="form-control" placeholder="Login ou Email" name="username" 
                                value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>

                    <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder="Senha" name="password"
                               value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>

                    <div className="row">
                        <div className="col-xs-8">
                            <div>
                                <input type="checkbox" /> Lembrar
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Entrar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        )
    }
}

export default Login