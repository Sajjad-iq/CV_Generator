import React, { useContext, useState } from 'react'
import { Input, Form, Button } from 'antd';
import { MyContext } from '../../context/data';

export const AddSkills = () => {

    const { SkillsCards, setSkillsCards } = useContext(MyContext)
    const [skillName, setSkillName] = useState("")

    return (
        <section>
            <h1>Skills</h1>

            <Form.Item
                className="form-item"
                label="Skill Name"
                name="skill"
            >
                <Input
                    name="skill"
                    onChange={(e) => setSkillName(e.target.value)}
                />
            </Form.Item>

            <Form.Item className="form-item">
                <Button onClick={() => {
                    let data = [...SkillsCards]
                    data.push(skillName)
                    setSkillsCards(data)

                }} type="primary" >Add Skill</Button>
            </Form.Item>

        </section>

    )
}
