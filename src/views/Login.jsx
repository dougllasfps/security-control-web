import React from 'react'
import {DefaultForm as Form} from '../components/common/Form'

export default class Login extends React.Component{

    onSubmit(values){
       console.log(values)
    }

    render(){
        return(
            <div className="login-box">
            <div className="login-logo">
                <b>My App</b>
            </div>
            
            <div className="login-box-body">
                <p className="login-box-msg">Entre para inicializar sua sessão</p>

                <Form onSubmit={this.onSubmit}>

                    <div className="form-group has-feedback">
                        <input  type="text" className="form-control" placeholder="Login ou Email" name="username" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>

                    <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder="Senha" name="password"/>
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

                </Form>
            </div>
        </div>
        )
    }
}