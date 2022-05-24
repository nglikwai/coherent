import React from 'react'
import styled from 'styled-components'

const PostCard = () => {
    return (
        <Wrapper>
            <Heading>
                <Avatar>F</Avatar>
                <Info>
                    <Category>Fox News</Category>
                    <Date>2019-09-01 23:34</Date>
                </Info>
            </Heading>
            <Image src='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/breakingnews-live-blog-1568185450-1595123397-1602035712.jpg' />
            <Title>Trio arrested over making of explosive and inciting attack on police officers</Title>
            <Description>Three people were arrested for inciting others to attack police officers and government buildings, as police seized </Description>
        </Wrapper>
    )
}

export default PostCard


const Wrapper = styled.div`
width: 300px;
height: 400px;
border: 1px solid #ccc;
border-radius: 4px;
margin:10px;
`

const Heading = styled.div`
display: flex;
padding: 12px;
`

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 4px 12px;
`

const Category = styled.div`
    font-weight: bold;
`

const Date = styled.div`
    color:#999;
`

const Avatar = styled.span`
color: white;
width: 26px;
height: 26px;
font-size: 30px;
font-weight: bold;
padding: 10px;
background-color: #ccc;
border-radius: 50%;
`

const Image = styled.img`
border-radius: 4px;
width:100%;
height: 150px;
`

const Title = styled.h3`
    text-align: left;
`

const Description = styled.div`
color: #aaa;
overflow: hidden;
text-align:left ;
`