import React from "react";
import styled from "styled-components";
import ChallengeCard from "../ChallengeCard";

function MyChallengeContainer() {
  return (
    <StContentsWrapper>
      <h2>참여한 챌린지</h2>
      <StCardList>
        <ChallengeCard status="recruit" />
        <ChallengeCard status="recruit" />
        <ChallengeCard status="recruit" />
        <ChallengeCard status="recruit" />
      </StCardList>
    </StContentsWrapper>
  );
}

const StContentsWrapper = styled.div`
  width: 100%;
  padding-top: 10rem;
  h2 {
    padding-bottom: 5rem;
    font-size: 3.5rem;
  }
`;

const StCardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  column-gap: 4rem;
  row-gap: 4rem;
`;

export default MyChallengeContainer;
