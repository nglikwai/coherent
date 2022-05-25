import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header/index.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPostRequest } from "./redux/search";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Posts from "./components/Posts";

function App() {
  return (
    <Provider store={store}>
      <PageWrapper className="App">
        <Float>
          <Header />
        </Float>
        <Posts />
      </PageWrapper>
    </Provider>
  );
}

export default App;

const PageWrapper = styled.div`

`;

const Float = styled.div`
position: sticky;
top:0;
`
