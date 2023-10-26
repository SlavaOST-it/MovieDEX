import React, {ChangeEvent, FC} from 'react';
import styled from "styled-components";
import {CountriesType, GenresType} from "../../../api/types/CategoriesTypes";



type SortValueType = {
    typeValue: 'genre' | 'country'
    items: GenresType[] | CountriesType[]
    currentItemId: number | undefined
    callback: (valueId: number) => void
}
export const SortValue: FC<SortValueType> = ({typeValue, items, currentItemId, callback}) => {

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Number(event.target.value);
        callback(selectedValue);
    };


    return (
            <Select onChange={handleOptionChange} value={currentItemId}>
                {items.map((el, index) => (
                    <Option key={index} value={el.id}>

                        {typeValue === 'genre' ? (el as GenresType).genre : (el as CountriesType).country}
                    </Option>
                ))}
            </Select>
    );
};


export const Option = styled.option`
  color: inherit;
  background-color: gray;
`

export const Select = styled.select`
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  width: 20rem;
  padding: 1rem 4rem 1rem 1rem;
  background-color: #a63c3c;
  //background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center / 1.4em,
  linear-gradient(to left, rgba(255, 255, 255, 0.3) 3em, rgba(255, 255, 255, 0.2) 3em);
  color: white;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;


  &:focus {
    outline: none;
  }
`