import React, {FC} from 'react';
import styled from "styled-components";


interface OptionType {
    value: string | number;
    name?: string;
}

interface CustomSelectValueType {
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
                    {el.name}
                </Option>
            ))}
        </SelectValue>
    );
};


export const Option = styled.option`
    color: inherit;
    background-color: gray;
`

export const SelectValue = styled.select`
    appearance: none;
    border: 0;
    outline: 0;
    font: inherit;
    /* Personalize */
    width: 20rem;
    padding: 1rem 4rem 1rem 1rem;
    background-color: #a63c3c;
    //background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center / 1.4em,
linear-gradient(to left, rgba(255, 255, 255, 0.3) 3 em, rgba(255, 255, 255, 0.2) 3 em);
    color: white;
    border-radius: 0.25em;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;


    &:focus {
        outline: none;
    }
`