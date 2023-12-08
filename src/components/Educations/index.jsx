import React, { useContext } from 'react'
import { MyContext } from '../../context/data'
import EducationCard from '../EducationCard'

export const Educations = () => {
    const { EducationCards, setEducationCards } = useContext(MyContext)

    const DeleteCard = (card) => {
        let cards = [...EducationCards]
        let newCards = cards.filter((e) => e.title != card.title)
        setEducationCards(newCards)
    }

    return (
        <section style={{ marginBottom: "30px" }}>
            {EducationCards ?
                EducationCards.map((e) => <EducationCard key={e.title} EducationTitle={e.title} UniversityName={e.university} startDate={e.startDate} endDate={e.endDate} Delete={() => DeleteCard(e)} />)
                :
                null
            }
        </section>
    )
}
