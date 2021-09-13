import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { countFinalPrice } from '../../../Redux/Actions/boxActions'
import { IProductTypes } from '../../../Types/types'
import BoxBar from '../boxBar'
import SummaryTable from './summaryTable'
import { Paper, ContentWrapper, LinkTo } from '../../../styles/components'
import { ShopWrapper, NavContainer } from '../../styles/modulesComponents'

interface IProps {
    finalPrice: number
    removeProductFromBox: (p: IProductTypes) => void
    increase: (p: IProductTypes) => void
    decrease: (p: IProductTypes) => void
}

const BoxSummary: React.FC<IProps> = () => {
    const dispatch = useDispatch()
    const productsInBox = useSelector((state: any) => state.productsInBox.data)
    const finalPrice = useSelector(
        (state: any) => state.productsInBox.finalPrice
    )

    const { t } = useTranslation()
    useEffect(() => {
        dispatch(countFinalPrice())
    })

    return (
        <ShopWrapper>
            <BoxBar />
            <ContentWrapper>
                <Paper>
                    <SummaryTable
                        productsInBox={productsInBox}
                        finalPrice={finalPrice}
                    />
                    <NavContainer>
                        <LinkTo to="/Box">
                            <h4>{t('boxBackToBoxButton')}</h4>
                        </LinkTo>
                        <LinkTo to="/Order">
                            <h4>{t('boxContinueToOrderButton')}</h4>
                        </LinkTo>
                    </NavContainer>
                </Paper>
            </ContentWrapper>
        </ShopWrapper>
    )
}

export default BoxSummary
