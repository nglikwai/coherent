import React from "react";
import styled from "styled-components";
import PostCard from "../PostCard";

const Loading = () => {
    const post = {
        title: '',
        publishedAt: '',
        description: '',
        source: {
            name: ''
        }

    }
    return (
        <Wrapper>
            <PostWrapper>
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
            </PostWrapper>
        </Wrapper>
    );
};

export default Loading;

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
