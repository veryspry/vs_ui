import React from "react";
import styled from "styled-components";
import {
  space,
  width,
  height,
  color,
  position,
  alignContent,
  alignItems,
  justifyContent,
  borders,
  borderRadius,
  textAlign
} from "styled-system";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  ${space};
  ${width};
  ${color};
  ${height};
  ${borders};
  ${position};
  ${alignContent};
  ${alignItems};
  ${justifyContent};
  ${borderRadius};
  ${textAlign};
`;

export const Box = styled.div`
    ${space} ${width} ${color};
`;
