import React from "react";
import styled from "styled-components";
import ChallengeCard from "../ChallengeCard";

function RecruitContainer() {
  return (
    <StContentsWrapper>
      <h2>쓱-하는 챌린지</h2>
      <StCardList>
        <ChallengeCard status="doing" />
        <ChallengeCard status="done" />
        <ChallengeCard status="doing" />
        <ChallengeCard status="done" />
        <ChallengeCard status="done" />
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
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 4rem;
`;

export default RecruitContainer;
