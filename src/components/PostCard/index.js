import React from "react";
import styled from "styled-components";

const PostCard = ({ post }) => {
  return (
    <Wrapper>
      <Heading>
        <Avatar>{post.source.name.substring(0, 1)}</Avatar>
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
@media (max-width:1000px) {
  width: 45%;
  min-width: 300px;
  }
  @media (max-width:620px) {
  width: 100%;
  }
  width: 310px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 10px 20px 10px 0;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);

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
  color: rgba(0, 0, 0, 0.87);
  margin-bottom:4px;
`;

const Date = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
`;

const Avatar = styled.span`
  color: #fafafa;
  width: 30px;
  height: 30px;
  font-size: 26px;
  font-weight: bold;
  padding: 10px 10px;
  background-color: #bdbdbd;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;

`;

const Title = styled.h3`
  color: rgba(0, 0, 0, 0.87);
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
  color: rgba(0, 0, 0, 0.54);
  overflow: hidden;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
