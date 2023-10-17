import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {premieresSelectors} from "./index";
import {fetchPremieresFilms} from "../../bll/reducers/premieresFilmsReducer/premieresFilmsReducer";
import {useCurrentMonthAndYear} from "../../utils/hooks/currentDate";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import styled from "styled-components";
import {ThemeType} from "../../common/types/commonTypes";
import {PremiereItemType} from "../../api/types/PremieresFilmsType";


export const PremieresPage = () => {
    const dispatch = useAppDispatch()

    const premieresFilms: PremiereItemType[] = useAppSelector(premieresSelectors.selectPremieresFilms)
    const currentYear = useCurrentMonthAndYear().currentYear
    const currentMonth = useCurrentMonthAndYear().currentMonth

    useEffect(() => {
        dispatch(fetchPremieresFilms(currentYear, currentMonth))
    }, [dispatch])

    return (
        <PremieresWrapper>
            <Title>Премьеры <span>фильмов</span></Title>
            <FilmsBlock>
                {premieresFilms.map((el, index) => (
                    <CardMovie key={index}
                               item={el}
                    />
                ))}
            </FilmsBlock>
        </PremieresWrapper>
    );
};

export const FilmsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 30px;
`

export const Title = styled.h2<{ theme: ThemeType }>`
  font-style: normal;
  font-weight: 700;
  font-size: 62px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  color: #000;
  margin: 0 auto -3px auto;
  width: 100%;
  line-height: 100%;

  padding: 50px 0;

  span {
    color: ${props => props.theme.colors.accent};
  }
`

export const PremieresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`