/*
 * action 类型
 */

 const LOGIN = 'LOGIN';

/*
 * action 创建函数
 */

 function creatLoginAction(user) {
     console.log(user)
    return { type: LOGIN, user }
}



export  default creatLoginAction