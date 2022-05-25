import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadPostRequest, setPage, setSearchTerm } from "../../redux/search";


const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('')

  const submitHandler = () => {
    dispatch(setPage(1))
    dispatch(setSearchTerm(term))
    dispatch(loadPostRequest({ term, page: 1 }))
  }
  return (

    <SearchWrapper>
      <SearchButton onClick={submitHandler}>-O</SearchButton>
      <SeachInput placeholder="Search" value={term} onChange={(e) => setTerm(e.target.value)} />
    </SearchWrapper>

  );
};

export default Header;

const SearchWrapper = styled.div`
  border-radius: 4px;
  width: 200px;
  height: 40px;
  display: flex;
`;

const SearchButton = styled.button`
background-color: transparent;
border: none;
  color: #fff;
  font-size: 20px;
  width: 50px;
  height: 100%;
  cursor: pointer;

`;

const SeachInput = styled.input`
&::placeholder{font-size:16px;
  color:rgba(255, 255, 255, 0.42)}
  background-color: transparent;
  width:80%;
  border: none;
  padding:0 10px;
  color:#fff;
`

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


