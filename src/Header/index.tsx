/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
    IoPersonOutline,
    IoSearchOutline,
    IoPersonRemoveOutline,
} from 'react-icons/io5'
import Tippy from '@tippy.js/react'
import ShopLink from '../LinkComponents/shopLink'
import 'tippy.js/dist/tippy.css'
import {
    shoppingBoxHeaderButton,
    logInHeaderButton,
    searchHeaderButton,
    homeButton,
} from '../tippy/labels'
import {
    HeadContainer,
    Wrapper,
    LinkTo,
    TopLink,
    IconWrapper,
    BoxIcon,
    Image,
    CountProductsInBox,
    CountProductsInBoxText,
    TopLinkWrapper,
} from './styles/headerComponents'

const Header: React.FC = () => {
    const productsInBox = useSelector((state: any) => state.productsInBox.data)

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('profile')!)
    )

    const name = user?.result.email
    const token = user?.token

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const { t } = useTranslation()

    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null)
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')!))
    }, [location])

    const itemsInBox = Object.keys(productsInBox).length

    return (
        <HeadContainer>
            <Wrapper>
                <LinkTo to="/">
                    <Tippy content={homeButton}>
                        <Image
                            src={`${process.env.PUBLIC_URL}/assets/logo-text.png`}
                        />
                    </Tippy>
                </LinkTo>
            </Wrapper>
            <Wrapper>
                <TopLink
                    activeStyle={{
                        color: 'black',
                    }}
                    to="./About"
                >
                    {t('headerAbout')}
                </TopLink>
                <TopLink
                    activeStyle={{
                        color: 'black',
                    }}
                    to="./Gallery"
                >
                    {t('headerGallery')}
                </TopLink>
                <TopLink
                    activeStyle={{
                        color: 'black',
                    }}
                    to="./Faq"
                >
                    {t('headerFaQ')}
                </TopLink>
                <TopLink
                    activeStyle={{
                        color: 'black',
                    }}
                    to="./Contacts"
                >
                    {t('headerContact')}
                </TopLink>

                <TopLinkWrapper>
                    {t('headerShop')}
                    <ShopLink />
                </TopLinkWrapper>
            </Wrapper>
            <Wrapper>
                <LinkTo to="/Search">
                    <Tippy content={searchHeaderButton}>
                        <IconWrapper>
                            <IoSearchOutline size={25} />
                        </IconWrapper>
                    </Tippy>
                </LinkTo>
                <IconWrapper>{name}</IconWrapper>
                <LinkTo to="/Auth">
                    <Tippy content={logInHeaderButton}>
                        <IconWrapper>
                            {token ? (
                                <IoPersonRemoveOutline
                                    onClick={logOut}
                                    size={25}
                                />
                            ) : (
                                <IoPersonOutline size={25} />
                            )}
                        </IconWrapper>
                    </Tippy>
                </LinkTo>
                <Tippy content={shoppingBoxHeaderButton}>
                    <LinkTo to="/Box">
                        <Wrapper>
                            <BoxIcon
                                src={`${process.env.PUBLIC_URL}/assets/box.png`}
                            />
                            {itemsInBox > 0 && (
                                <CountProductsInBox>
                                    <CountProductsInBoxText>
                                        {itemsInBox}
                                    </CountProductsInBoxText>
                                </CountProductsInBox>
                            )}
                        </Wrapper>
                    </LinkTo>
                </Tippy>
            </Wrapper>
        </HeadContainer>
    )
}

export default Header
