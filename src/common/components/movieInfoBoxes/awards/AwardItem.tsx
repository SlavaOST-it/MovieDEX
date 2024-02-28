import React, {FC} from "react";

import {AwardItemWrapper, Person} from "./AwardItem.styled";
import {AwardsMovieType} from "../../../../api/types/MovieType";


type AwardItemType = {
    item: AwardsMovieType
}
export const AwardItem: FC<AwardItemType> = (props) => {
    const { name, win, imageUrl, nominationName, year, persons } = props.item;

    return (
        <AwardItemWrapper>
            <h2>{name}</h2>

            {win && <p>Победитель</p>}

            {imageUrl && <img src={imageUrl} alt={name} />}

            <p>Номинация: {nominationName}</p>
            <p>Год: {year}</p>

            {persons.map(person => (
                <Person key={person.kinopoiskId}>
                    <a href={person.webUrl}>{person.nameRu} ({person.nameEn})</a>
                    <p>Пол: {person.sex === 'MALE' ? 'Мужской' : 'Женский'}</p>
                    {person.posterUrl && <img src={person.posterUrl} alt={person.nameRu} />}
                    {person.growth && <p>Рост: {person.growth} см</p>}
                    {person.birthday && <p>Дата рождения: {person.birthday}</p>}
                    {person.death && <p>Дата смерти: {person.death}</p> }
                    {person.age && <p>Возраст: {person.age}</p>}
                    {person.birthplace && <p>Место рождения: {person.birthplace}</p>}
                    {person.deathplace && <p>Место смерти: {person.deathplace}</p>}
                    {person.profession && <p>Профессия: {person.profession}</p>}
                </Person>
            ))}
        </AwardItemWrapper>
    );
}
