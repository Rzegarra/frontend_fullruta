
var yo = require('yo-yo')
var landing = require('../landing')

var signinForm = yo`<div class="col s12 m7">
                        <div class="row">
                          <div class="signup-box">
                            <h1 class="vego">Vego</h1>
                            <form action="" class="signup-form">
                              <div class="section">
                                <a href="" class="btn btn-fb hide-on-small-only">iniciar con facebook</a>
                                <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i>iniciar sesion</a>    
                              </div>
                              <div class="divider"></div>
                              <div class="section">
                                <input type="text" name="username" placeholder="nombre de usuario"/>
                                <input type="password" name="password" placeholder="password"/>
                                <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia</button>
                              </div>
                            </form>
                          </div>  
                        </div>
                        <div class="row">
                          <div class="login-box">
                            No tienes una cuenta ? <a href="/signup">Registrate</a>
                          </div>
                        </div>
                      </div>`

module.exports = landing(signinForm)