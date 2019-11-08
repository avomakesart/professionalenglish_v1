import React from "react";
import loading from "../assets/loading.svg";

import styled from 'styled-components';

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 17rem;
`

const Loading = () => (
  <StyledLoading>
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
  </StyledLoading>
);

export default Loading;
