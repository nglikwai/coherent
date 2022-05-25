import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadPostRequest } from "../../redux/search";
import SearchBox from '../SearchBox'


const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostRequest({ term: 'cat', page: 1 }));
  }, []);

  return (
    <HeaderWrapper>
      <Wrapper>
        <Logo>US News</Logo>
        <SearchWrapper>
          <SearchBox />
        </SearchWrapper>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: #3c3b63;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0,0,0,0.2);
`;

const Wrapper = styled.div`
@media (max-width:1000px) {
  width: 100%;
  }
  width: 1000px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const SearchWrapper = styled.div`
  background-color:  rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  width: 200px;
  height: 40px;
  margin-right: 10px;

`;
