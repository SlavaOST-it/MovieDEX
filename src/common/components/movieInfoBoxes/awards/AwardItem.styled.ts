import styled from "styled-components"


export const Person = styled.div`
    margin: 30px 0;
`

export const AwardItemWrapper = styled.div`
    padding-bottom: 10px;
    margin-bottom: 40px;
    border-bottom: 4px solid ${props => props.theme.colors.accent};
    img{
        max-width: 80px;
    }
`