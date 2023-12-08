import React, { useContext } from 'react'
import { MyContext } from '../../context/data'
import SkillCard from '../SkillCard'

export const Skills = () => {
    const { SkillsCards, setSkillsCards } = useContext(MyContext)

    const DeleteCard = (card) => {
        let cards = [...SkillsCards]
        let newCards = cards.filter((e) => e != card)
        setSkillsCards(newCards)
    }

    return (
        <section style={{ marginBottom: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {SkillsCards ? SkillsCards.map((e) => <SkillCard key={e} SkillTitle={e} Delete={() => DeleteCard(e)} />) : null
            }
        </section>
    )
}
