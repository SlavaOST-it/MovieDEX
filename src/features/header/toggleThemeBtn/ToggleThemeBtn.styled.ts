import styled from "styled-components";
import {ThemeType} from "../../../common/types/commonTypes";



// ===============================//
type IconProps = {
    theme: ThemeType;
    $themeValue: boolean;
}
export const Icon = styled.svg<IconProps>`
  width: 20px;
  height: 20px;
  fill: ${props =>
    props.$themeValue
        ? `${props.theme.colors.primary}`
        : `${props.theme.colors.secondary}`};
`


// ===============================//
export const NameTheme = styled.span<{theme: ThemeType}>`
  display: block;
  position: absolute;
  right: 190%;
  transition: .3s;

  font-size: 12px;
  color: #fff;

  padding: 3px 8px;
  border-radius: 5px;
  background-color: #404042;

  visibility: hidden;
  opacity: 0;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background: #404042;
    position: absolute;
    right: -3px;
    top: 50%;
    transform: rotate(54deg) skew(-8deg, -39deg);
    margin-top: -5px;
    z-index: -1;
  }

  @media screen and ${props => props.theme.media.tablet} {
    display: none;
  }
  
`

// ===============================//
export const SelectThemeBtn = styled.button`
  position: relative;

  margin-top: 4px;
  border: none;
  background: none;

  cursor: pointer;

  &:hover ${NameTheme} {
    visibility: visible;
    opacity: 1;
  }
`

// ===============================//
export const ToggleBtnWrapper = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4px;
  gap: 10px;

  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 30px;
  
  @media screen and ${props => props.theme.media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 8px;
    margin-top: 40px;
  }
`