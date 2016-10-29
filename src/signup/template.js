
var yo = require('yo-yo')
var landing = require('../landing')

var signupForm = yo`<div class="col s12 m7">
                        <div class="row">
                          <div class="signup-box">
                            <h1 class="vego">Vego</h1>
                            <form action="" class="signup-form">
                              <div class="section">
                                <h2>Registrate</h2>
                                <a href="" class="btn btn-fb hide-on-small-only">iniciar con facebook</a>
                                <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i>iniciar sesion</a>    
                              </div>
                              <div class="divider"></div>
                              <div class="section">
                                <input type="email" name="email" placeholder="correo electronico"/>
                                <input type="text" name="email" placeholder="nombre completo"/>
                                <input type="text" name="username" placeholder="nombre de usuario"/>
                                <input type="password" name="password" placeholder="password"/>
                                <input type="password" name="reconfirmar password" placeholder="password"/>
                                <button class="btn waves-effect waves-light btn-signup" type="submit">registrate</button>
                              </div>
                            </form>
                          </div>  
                        </div>
                        <div class="row">
                          <div class="login-box">
                            tienes una cuenta ? <a href="/signin">Entrar</a>
                          </div>
                        </div>
                      </div>`

module.exports = landing(signupForm)