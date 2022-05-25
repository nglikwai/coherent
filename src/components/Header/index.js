import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchTutorRequest } from "../../redux/search";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTutorRequest());
  }, []);

  return (
    <HeaderWrapper>
      <Wrapper>
        <Logo>US News</Logo>
        <SearchWrapper></SearchWrapper>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: #5544dd;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
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
`;

const SearchWrapper = styled.div`
  background-color: rgba(256, 256, 256, 0.5);
  border-radius: 4px;
  width: 200px;
  height: 40px;
`;
