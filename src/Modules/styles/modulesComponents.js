import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BackgroundWooden } from '../../api/images'

const mainImageUrl = BackgroundWooden

export const ShopWrapper = styled.div`
    background: url(${mainImageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
`

export const SortBar = styled.div`
    align-items: center;
    display: flex;
    height: ${(props) => props.theme.smallIconSize};
    justify-content: space-around;
    margin: ${(props) => props.theme.smallPadding};
    width: 100%;
`

export const SortSelect = styled.select`
    background: ${(props) => props.theme.modalTransparentGrey};
    border: none;
    color: ${(props) => props.theme.primaryWhite};
`

export const SearchProduct = styled.input`
    background: none;
    border: none;
    color: ${(props) => props.theme.primaryWhite};
    margin-left: ${(props) => props.theme.smallPadding};
    width: ${(props) => props.theme.smallCardSize};
`

export const SContainer = styled.div`
    align-items: center;
    background: ${(props) => props.theme.modalTransparentGrey};
    border: none;
    color: ${(props) => props.theme.primaryWhite};
    display: flex;
    padding: ${(props) => props.theme.smallPadding};
`

export const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: ${(props) => props.theme.wrapperTopMargin};
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Row = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: ${(props) => props.theme.smallPadding};
`

export const Column = styled.div`
    display: flex;
    font-size: ${(props) => props.theme.primaryFontSize};
    height: ${(props) => props.theme.primaryFontSize};
    justify-content: center;
    padding: ${(props) => props.theme.secondaryPadding};
    width: 180px;
`

export const NavLink = styled(Link)`
    color: black;
    cursor: pointer;
    display: flex;
    font-size: ${(props) => props.theme.primaryFontSize};
    justify-content: center;
    padding: ${(props) => props.theme.secondaryPadding};
    text-decoration: none;
    :hover {
        color: #212121;
        opacity: 1.5;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`

export const BoxWrapper = styled.div`
    align-items: start;
    background: url(${mainImageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: start;
    overflow: scroll;
    padding: ${(props) => props.theme.secondaryPadding};
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const LabelSmall = styled.div`
    font-size: ${(props) => props.theme.primaryFontSize};
`
export const Paper = styled.div`
    background: ${(props) => props.theme.modalTransparentGrey};
    border-radius: ${(props) => props.theme.smallPadding};
    color: ${(props) => props.theme.primaryBoxShadow};
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    margin: ${(props) => props.theme.sideCardPadding};
    padding: ${(props) => props.theme.primaryPadding};
`
