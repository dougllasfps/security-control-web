import React from 'react'

export default class Login extends React.Component{

    state = {
        formValues: {
            username: '',
            password: ''
        }        
    }

    onSubmit(event){
       console.log(this.state.formValues)
       event.preventDefault(); 
    }

    onChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({...this.state, formValues: {...this.state.formValues, [name]: value}})
    }

    render(){
        return(
            <div className="login-box">
            <div className="login-logo">
                <b>My App</b>
            </div>
            
            <div className="login-box-body">
                <p className="login-box-msg">Entre para inicializar sua sessão</p>

                <form method="post" onSubmit={e => this.onSubmit(e)}>

                    <div className="form-group has-feedback">
                        <input value={this.state.username} type="text" className="form-control" placeholder="Login ou Email" name="username" onChange={(e) => this.onChange(e)} />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>

                    <div className="form-group has-feedback">
                        <input value={this.state.password} type="password" className="form-control" placeholder="Senha" name="password" onChange={(e) => this.onChange(e)}/>
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>

                    <div className="row">
                        <div className="col-xs-8">
                            <div className="checkbox icheck">
                                
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