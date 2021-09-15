import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { BackgroundVegTable } from '../api/images'

// Images
const mainImageUrl = BackgroundVegTable

// Bar

export const BarWrapper = styled.div`
    background: ${(props) => props.theme.modalTransparentGrey};
    display: flex;
    justify-content: space-around;
    overflow: scroll;
    position: absolute;
    width: 100%;
`

export const LinkTo = styled(NavLink)`
    align-items: center;
    color: white;
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

// General

export const ContentWrapper = styled.div`
    margin: ${(props) => props.theme.primaryPadding};
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

export const PageWrapper = styled.div`
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

export const RowWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export const HowerWrapper = styled.div`
    :hover {
        cursor: pointer;
        font-weight: bold;
        opacity: 1.5;
        transform: scale(1.3);
        transition: transform 0.3s;
    }
    :active {
        color: black;
        transform: scale(1.8);
        transition: transform 1s;
    }
`
