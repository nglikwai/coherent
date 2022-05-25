import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PostCard from "../PostCard";

const Posts = () => {
  const { posts } = useSelector((state) => state.search);

  return (
    <Wrapper>
      <PostWrapper>
        {posts &&
          posts.map((post) => <PostCard key={post.title} post={post} />)}
      </PostWrapper>
    </Wrapper>
  );
};

export default Posts;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PostWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
`;
