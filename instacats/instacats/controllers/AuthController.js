const User = require ("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthControlller {
    static  login(request, response){
        return response.render('auth/login')
    }

    static async loginpost(request, response){
        const {email, password} = request.body

        const user = await user.finOne({where: {email:email}})

        if(!user){
            request.flash('message', 'Usuario não encontrado')
            response.render('auth/login')
            return
        }

        const passwordMath = bcrypt.compareSync(password, user.password)
        if(!passwordMath){
            request.flash('message','Senha invalida')
            response.render('auth/login')
            return
        }

        request.session.userId = user.id;

        request.flash('message', 'bem vindo')

        request.session.save(()=>{
            response.redirect('/')
        })

    }

    static register(request,response){
        return response.render('auth/register')
    }

    static async registerpost(request, response){
        const {name, email, password } = request.body



    }

}