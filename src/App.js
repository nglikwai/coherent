import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header/index.js';
import PostCard from './components/PostCard';

function App() {
  return (
    <PageWrapper className="App">
      <Header />
      <PostWrapper>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

        <PostCard />
        <PostCard />
        <PostCard />

      </PostWrapper>
      <PostCard />
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.div`

`

const PostWrapper = styled.div`
padding:20px;
display: flex;
flex-wrap: wrap;
max-width: 1000px;
`
