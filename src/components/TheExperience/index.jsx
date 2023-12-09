import React, { useContext } from 'react'
import { MyContext } from '../../context/data'
import ExperienceCard from '../ExperienceCard'

export const TheExperience = () => {

    const { ExperienceCards, setExperienceCards } = useContext(MyContext)

    const DeleteCard = (card) => {
        let cards = [...ExperienceCards]
        let newCards = cards.filter((e) => e.title != card.title)
        setExperienceCards(newCards)
    }

    return (
        <section style={{ marginBottom: "30px" }}>
            {ExperienceCards ?
                ExperienceCards.map((e) => <ExperienceCard key={e.title} jobTitle={e.title} companyName={e.company} startDate={e.startDate} endDate={e.endDate} description={e.desc} Delete={() => DeleteCard(e)} />)
                :
                null
            }
        </section>
    )
}
