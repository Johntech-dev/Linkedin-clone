import React from 'react'
import styled from 'styled-components'
function Main() {
  return (
    <Container>
        <ShareBox>
            share
        </ShareBox>
        <div>
            <img src='images/user.svg' />
            <button>Start a post</button>
        </div>
        <div>
            <button>
                 <img src='images/photo-icon.svg' />
                <span>Photo</span>
            </button>
            <button>
                <img src='images/video-icon.svg'/>
                <span>Video</span>
            </button>
            <button>
                <img src='images/event-icon.svg'/>
                <span>Events</span>
            </button>
             <button>
             <img src='images/article-icon.svg'/>
                <span>Write article</span>
            </button>
        </div> 
    </Container>
  )
}

const Container = styled.div`
grid-area:main;
`;

const CommonCard = styled.div`
 text-align:center;
 overflow:hidden;
 margin-bottome: 8px;
 background-color: #fff;
 border-radius:5px;
 position: relative;
 box-shadow: 0 0 0 1px; rgb(0 0 0 / 15%) , 0 0 0 rgb(0 0 0/20%);
`;

const ShareBox = styled(CommonCard)`
  display:flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size:14px;
        line-height: 1.5;
        border: none;
    }
  }
`;

export default Main