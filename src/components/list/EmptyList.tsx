import React, { memo } from "react";
import { EmptyListWrapper, InnerWrap, SadFace, Label } from "./styles";

export const EmptyList: React.FC = memo(() => (
  <EmptyListWrapper data-testid="empty">
    <InnerWrap>
      <SadFace>:(</SadFace>
      <Label>No Movies!</Label>
    </InnerWrap>
  </EmptyListWrapper>
));
