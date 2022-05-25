import React from "react";
import styled from "styled-components";

const PostCard = ({ post }) => {
  return (
    <Wrapper>
      <Heading>
        <Avatar>{post.source.name.substring(0,1)}</Avatar>
        <Info>
          <Category>{post.source.name}</Category>
          <Date>{post.publishedAt.toLocaleString()}</Date>
        </Info>
      </Heading>

      <Image src={post.urlToImage} />
      <Title>{post.title}</Title>
      <Description>{post.description}</Description>
    </Wrapper>
  );
};

export default PostCard;

const Wrapper = styled.div`
  width: 310px;
  height: 380px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 20px 10px 0;
`;

const Heading = styled.div`
  display: flex;
  padding: 12px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 4px 12px;
`;

const Category = styled.div`
  font-weight: bold;
`;

const Date = styled.div`
  color: #999;
`;

const Avatar = styled.span`
  color: white;
  width: 30px;
  height: 30px;
  font-size: 26px;
  font-weight: bold;
  padding: 10px 10px;
  background-color: #ccc;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
`;

const Title = styled.h3`
  padding: 0 ;
  margin:10px 12px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Description = styled.div`
  padding: 0 10px;
  margin:4px 0;
  color: #aaa;
  overflow: hidden;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
