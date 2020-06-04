import styled from "styled-components";

export const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;
export const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
export const ImgUser = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;
export const PostPhoto = styled.img`
  width: 100%;
  max-height: 300px;
`;
export const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  justify-content: space-between;
  img {
    max-height: 40px;
    align-self: center;
    cursor: pointer;
  }
`;
export const MiniWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 50%;
`;
