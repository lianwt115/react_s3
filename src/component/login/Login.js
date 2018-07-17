import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css'
import React, { Component } from 'react';
import creatLoginAction from '../actions/login';
import { connect } from 'react-redux'
import FetchUtils from '../FetchUtils'
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {



    handleSubmit =   (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {

                //逻辑处理分离
              /*  console.log('Received values of form: ', values);
                if ('lwt' === values.userName && '123456' === values.password) {


                    console.log(this.props);

                    //跳转主信息
                    this.props.history.push('/main')
                }else{

                    alert('密码或用户名错误')
                }*/

                this.props.userLogin(values)
                console.log('Received values of form: ', values);
                console.log(this.props);
                var  fetchUtisl=new FetchUtils('users/login')

                var res = await fetchUtisl.fetchPostLogin(values)
                
                if (200 === res.code  ) {
                    this.props.history.push('/main')
                }else{
                    alert(res.message)
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remmber me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

//映射state到props
function mapStateToProps(state) {

    return {
        value: state.login.name
    }
}
//dispath 修改props
function mapDispatchToProps(dispatch) {
    return {
        userLogin: (user) => dispatch(creatLoginAction(user))
    }
}
//逻辑组件  分拆
const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLoginForm)

export default LoginPage;