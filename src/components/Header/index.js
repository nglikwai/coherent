import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderWrapper>

            <Wrapper>
                <Logo>US News</Logo>
                <SearchWrapper></SearchWrapper>
            </Wrapper>
        </HeaderWrapper>

    )
}

export default Header

const HeaderWrapper = styled.div`
background-color: #5544dd;
display: flex;
`


const Wrapper = styled.div`
width: 1000px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding:0 30px;
`

const Logo = styled.span`
color: white;
font-size: 20px;
font-weight: bold;
`

const SearchWrapper = styled.div`
background-color: rgba(256,256,256,0.5);
border-radius: 4px;
width:200px;
height: 40px;
`