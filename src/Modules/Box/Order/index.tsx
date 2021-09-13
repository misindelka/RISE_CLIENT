/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import OrderFrom from './orderForm'
import { countFinalPrice } from '../../../Redux/Actions/boxActions'
import { addUser } from '../../../Redux/Actions/usersActions'
import { IUser } from '../../../Types/types'
import BoxBar from '../boxBar'
import { Paper, ContentWrapper } from '../../../styles/components'
import { ShopWrapper } from '../../styles/modulesComponents'

interface IProps {
    user: IUser
    FinalPrice: number
    submitUser: (user: IUser) => void
}

const Order: React.FC<IProps> = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(countFinalPrice())
    })

    const submitUser = (user) => {
        dispatch(addUser(user))
        console.log(user, 'disp ORDER component')
    }

    return (
        <ShopWrapper>
            <BoxBar />
            <ContentWrapper>
                <Paper>
                    <OrderFrom submitUser={submitUser} />
                </Paper>
            </ContentWrapper>
        </ShopWrapper>
    )
}

export default Order
