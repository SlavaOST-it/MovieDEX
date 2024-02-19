import React, {FC} from 'react';
import styled from "styled-components";
import {ThemeType} from "../../types/commonTypes";


interface OptionType {
    value: string | number;
    optionName?: string;
}

export interface CustomSelectValueType {
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: OptionType[];
}

export const CustomSelectValue: FC<CustomSelectValueType> = ({value,
                                                                 onChange,
                                                                 options = []}) => {
    return (
        <SelectValue value={value} onChange={onChange}>
            {options.map((el, index) => (
                <Option key={index} value={el.value}>
                    {el.optionName}
                </Option>
            ))}
        </SelectValue>
    );
};


export const Option = styled.option`
    color: inherit;
    background-color: ${props => props.theme.colors.secondary};
`

export const SelectValue = styled.select<{theme: ThemeType}>`
    font-family: Jura, sans-serif;
    font-size: 16px;
   
    color: ${props => props.theme.colors.primary};

    width: 190px;
    padding: 10px 5px;
    border: none;
    outline: 0;
    border-radius: 0.25em;

    background-color: ${props => props.theme.colors.accent};
    box-shadow: rgba(0, 0, 0, 0.2) 3px 6px 8px 4px;

    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
        box-shadow: ${props => props.theme.box_shadow_hover};
        transition: ${props => props.theme.transition};
    }
`