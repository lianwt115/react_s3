
//初始化组件的初始状态 state

const initState = {

    name:'',
    loginData:{}

}


  function login(state = initState, action) {
    console.log(state,action)
    switch (action.type) {
        case 'LOGIN':

            return {name:action.user.userName}

        case 'LOGIN1':
            return [
                ...state,
                action.user
            ]
        case 'LOGIN2':
            //修改对象某个值
            return Object.assign({}, state, {
                didInvalidate: true
            })

        default:
            return state
    }
}

export default  login