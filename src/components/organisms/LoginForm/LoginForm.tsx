import React from 'react';
import { Formik } from 'formik';

import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Wrapper, ErrorWrapper, } from './styles';
import { LoginSchema } from './validations';

export type LoginFormProps = {
    onLogin: (email: string, password: string) => Promise<void>;
};

const LoginForm = ({ 
    onLogin,
}: LoginFormProps) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => onLogin(values.email, values.password)}
                validationSchema={LoginSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ 
                    values, 
                    handleChange, 
                    handleSubmit, 
                    errors,
                }) => ( 
                        <form onSubmit={handleSubmit}>
                            <Wrapper>
                                <TextInput 
                                    name="email" 
                                    title="Email" 
                                    value={values.email} 
                                    onChange={handleChange("email")} 
                                />
                                <TextInput 
                                    name="password" 
                                    title="Password" 
                                    value={values.password} 
                                    onChange={handleChange("password")} 
                                    type="password" 
                                />
                            </Wrapper>
                            <Button block htmlType="submit" disabled={ !values.email || !values.password }>Login</Button>
                            <ErrorWrapper>
                                { errors.email && <p>{errors.email}</p> }
                                { errors.password && <p>{errors.password}</p> }
                            </ErrorWrapper>
                        </form>
                    )
                }
            </Formik>
        </div>
    );
}
export default LoginForm;
