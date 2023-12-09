import React, { useContext, useState } from 'react'
import { Input, Form, Button } from 'antd';
import { MyContext } from '../../context/data';

export const AddLanguage = () => {

    const { LanguagesCards, setLanguagesCards } = useContext(MyContext)
    const [LanguageName, setLanguageName] = useState("")

    return (
        <section>
            <h1>Languages</h1>

            <Form.Item
                className="form-item"
                label="Language Name"
                name="language"
            >
                <Input
                    name="language"
                    onChange={(e) => setLanguageName(e.target.value)}
                />
            </Form.Item>

            <Form.Item className="form-item">
                <Button onClick={() => {
                    let data = [...LanguagesCards]
                    data.push(LanguageName)
                    setLanguagesCards(data)
                }} type="primary" >Add Language</Button>
            </Form.Item>

        </section>

    )
}
