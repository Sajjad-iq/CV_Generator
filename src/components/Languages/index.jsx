import React, { useContext } from 'react'
import { MyContext } from '../../context/data'
import SmallCard from '../SmallCard'

export const Languages = () => {
    const { LanguagesCards, setLanguagesCards } = useContext(MyContext)

    const DeleteCard = (card) => {
        let cards = [...LanguagesCards]
        let newCards = cards.filter((e) => e != card)
        setLanguagesCards(newCards)
    }

    return (
        <section style={{ marginBottom: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {LanguagesCards ? LanguagesCards.map((e) => <SmallCard key={e} SkillTitle={e} Delete={() => DeleteCard(e)} />) : null
            }
        </section>
    )
}
