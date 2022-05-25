import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PostCard from "../PostCard";
import Loading from "../Loading";
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadPostRequest, nextPage } from "../../redux/search";

const Posts = () => {

  const dispatch = useDispatch()
  const { posts, fetching, page, term } = useSelector((state) => state.search);
  const fetchMoreData = () => {
    dispatch(loadPostRequest({ term, page }))
  };
  return (
    <Wrapper>
      {fetching && <Loading />}
      <PostWrapper>

        {posts &&
          posts.map((post) => <PostCard key={post.description} post={post} />)}

        <InfiniteScroll
          dataLength={posts.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={true}

        >

        </InfiniteScroll>
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
  max-width: 1000px;
`;
