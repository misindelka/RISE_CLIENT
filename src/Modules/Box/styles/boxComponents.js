import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ShopNavContainer = styled.div`
    font-size: ${(props) => props.theme.primaryFontSize};
    position: relative;
`

export const Row = styled.div`
    display: flex;
    justify-content: center;
    padding: ${(props) => props.theme.smallPadding};
`

export const LabelRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.smallPadding};
`

export const Column = styled.div`
    align-items: center;
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
export const ProductImage = styled.img`
    border-radius: 4px;
    height: 40px;
    width: 40px;
`

export const ImageWrapper = styled.div`
    align-items: center;
    display: flex;
    font-size: ${(props) => props.theme.primaryFontSize};
    height: ${(props) => props.theme.primaryFontSize};
    justify-content: center;
    padding: ${(props) => props.theme.secondaryPadding};
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

export const LinkTo = styled(NavLink)`
    align-items: center;
    color: ${(props) => props.theme.primaryWhite};
    cursor: pointer;
    display: flex;
    font-size: ${(props) => props.theme.primaryFontSize};
    padding: ${(props) => props.theme.primaryPadding};
    text-decoration: none;
    :hover {
        cursor: pointer;
        font-weight: bold;
        opacity: 1.5;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`
