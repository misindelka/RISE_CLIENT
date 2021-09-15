/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import GoogleSignIn from './googleSignIn'
import {
    Field,
    FieldContainer,
    FormContainer,
    ConfirmButton,
    RowWrapper,
} from './styles/authComponents'
import { PageWrapper, Paper } from '../../styles/components'

interface IProps {
    userData: {
        email: string
        password: string
        confirmPassword: string
    }
    signUp: boolean
    arePasswordsSame: boolean
    handleInputChange: any
    handleSubmit: any
    handleSignUpButton: any
    setSignUp: any
}

const AuthForm: React.FC<IProps> = ({
    signUp,
    userData,
    handleInputChange,
    arePasswordsSame,
    handleSubmit,
    handleSignUpButton,
    setSignUp,
}) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisiblity = () => {
        setShowPassword(!showPassword)
    }
    const { t } = useTranslation()

    const tableConfig = {
        signIn: [
            {
                label: `${t('authEmail')}`,
                fieldName: 'email',
            },
            {
                label: `${t('authPassword')}`,
                fieldName: 'password',
            },
        ],
        singUp: [{ label: `${t('authPassword')}`, fieldName: 'confirmPassword' }],
    }

    return (
        <PageWrapper>
            <Paper>
                <FormContainer>
                    {!signUp ? <h2>{t('authLabel')}</h2> : <h2>{t('authSignUpLabel')}</h2>}
                    <>
                        {tableConfig.signIn.map((column, i) => (
                            <FieldContainer key={i}>
                                {column.fieldName === 'password' ? (
                                    <>
                                        <RowWrapper>
                                            <p>{column.label} :</p>

                                            <>
                                                {showPassword === true ? (
                                                    <IoEyeOffOutline
                                                        onClick={togglePasswordVisiblity}
                                                        size={20}
                                                    />
                                                ) : (
                                                    <IoEyeOutline
                                                        onClick={togglePasswordVisiblity}
                                                        size={20}
                                                    />
                                                )}
                                            </>
                                        </RowWrapper>
                                        <Field
                                            type={showPassword ? 'text' : 'password'}
                                            name={column.fieldName}
                                            value={userData[column.fieldName]}
                                            onChange={handleInputChange}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <RowWrapper>
                                            <p>{column.label} :</p>
                                        </RowWrapper>
                                        <Field
                                            type="text"
                                            name={column.fieldName}
                                            value={userData[column.fieldName]}
                                            onChange={handleInputChange}
                                        />
                                    </>
                                )}
                            </FieldContainer>
                        ))}
                    </>
                    <>
                        {signUp && (
                            <>
                                {tableConfig.singUp.map((column, i) => (
                                    <FieldContainer key={i}>
                                        <RowWrapper>
                                            <p>
                                                {column.label} :
                                                {!arePasswordsSame && (
                                                    <h5>{t('authSubmitButton')}</h5>
                                                )}
                                            </p>
                                        </RowWrapper>

                                        <Field
                                            type={showPassword ? 'text' : 'password'}
                                            name={column.fieldName}
                                            value={userData[column.fieldName]}
                                            onChange={handleInputChange}
                                        />
                                    </FieldContainer>
                                ))}
                            </>
                        )}
                    </>

                    {!signUp ? (
                        <>
                            <ConfirmButton onClick={handleSubmit}>
                                <h3>{t('authSubmitButton')}</h3>
                            </ConfirmButton>
                            <GoogleSignIn />
                            <ConfirmButton onClick={handleSignUpButton}>
                                <h3>{t('authSignUpButton')}</h3>
                            </ConfirmButton>
                        </>
                    ) : (
                        <>
                            <ConfirmButton onClick={handleSignUpButton}>
                                <h3>{t('authSignUpButton')}</h3>
                            </ConfirmButton>
                            <ConfirmButton onClick={() => setSignUp(!signUp)}>
                                <h3>{t('authSubmitButton')}</h3>
                            </ConfirmButton>
                        </>
                    )}
                </FormContainer>
            </Paper>
        </PageWrapper>
    )
}

export default AuthForm
