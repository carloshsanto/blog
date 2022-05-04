
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './login.css';

const Login = () => {



    return (
        <div className="maincontainer">
            <div class="container-fluid">
                <div class="row no-gutter">

                    <div class="col-md-6 d-none d-md-flex bg-image"></div>

                    <div class="col-md-6 bg-light">
                        <div class="login d-flex align-items-center py-5">

                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10 col-xl-7 mx-auto">
                                        <h3 class="display-4">Faça seu Login</h3>
                                        <p class="text-muted mb-4">Acesso a Admininstração.</p>
                                        <form>
                                            <div class="mb-3">
                                                <input id="inputEmail" type="email" placeholder="Email" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div class="mb-3">
                                                <input id="inputPassword" type="password" placeholder="Senha" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"

                                                />

                                            </div>
                                            <div class="form-check">
                                                <Form>
                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        label="Visualizar Senha"
                                                    />
                                                </Form>
                                            </div>
                                            <div class="d-grid gap-2 mt-2">
                                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Entrar</button>
                                            </div>

                                            <div class="text-center d-flex justify-content-between mt-4"><p><a href="{{}}" class="font-italic text-muted">
                                                <u>Esqueci Minha Senha</u></a></p></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login