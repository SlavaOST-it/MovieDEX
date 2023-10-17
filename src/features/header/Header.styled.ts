import styled from "styled-components";
import {ThemeType} from "../../common/types/commonTypes";

export const HeaderStyled = styled.header<{theme: ThemeType}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 60px;
  background-color: ${props => props.theme.colors.black_color};
  border-bottom: 6px solid ${props => props.theme.colors.accent};
`