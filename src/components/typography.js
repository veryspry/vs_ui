import React from "react";
import styled from "styled-components";
import { typography } from "styled-system";

export const H3 = styled.h3`
  color: ${({ color }) => (color ? color : "black")};
  font-weight: 100;
  font-size: 18px;
  font-family: "Segoe UI";
`;
