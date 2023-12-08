import React, { useState, useContext } from 'react'
import { MyContext } from '../../context/data'
import { Input, Form, Button, DatePicker } from 'antd';


export const AddEducation = () => {
    const { EducationCards, setEducationCards } = useContext(MyContext)
    const [EducationTitle, setEducationTitle] = useState()
    const [EducationUniversity, setEducationUniversity] = useState()
    const [EducationStartDate, setEducationStartDate] = useState()
    const [EducationEndDate, setEducationEndDate] = useState()

    return (
        <section>
            <h1>Education</h1>

            <div className="form-row">
                <Form.Item
                    className="form-item"
                    label="Education Title"
                    name="TitleEducation"
                >
                    <Input
                        name="TitleEducation"
                        onChange={(e) => setEducationTitle(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    className="form-item"
                    label="University Name"
                    name="UniversityName"
                >
                    <Input
                        name="UniversityName"
                        onChange={(e) => setEducationUniversity(e.target.value)} />
                </Form.Item>
            </div>


            <div className="form-row">

                <Form.Item
                    className="form-item"
                    label="Start Date"
                    name="EducationStartDate"
                >
                    <DatePicker
                        name="EducationStartDate"
                        onChange={(e) => setEducationStartDate(e.format('YYYY-MM-DD'))} />
                </Form.Item>

                <Form.Item
                    className="form-item"
                    label="End Date"
                    name="EducationEndDate"
                >
                    <DatePicker
                        name="EducationEndDate"
                        onChange={(e) => setEducationEndDate(e.format('YYYY-MM-DD'))} />
                </Form.Item>
            </div>

            <Form.Item className="form-item">
                <Button onClick={() => {
                    let data = [...EducationCards]
                    data.push({
                        title: EducationTitle,
                        university: EducationUniversity,
                        startDate: EducationStartDate,
                        endDate: EducationEndDate,
                    })
                    setEducationCards(data)
                    setEducationTitle("")
                    setEducationUniversity("")
                    setEducationStartDate("")
                    setEducationEndDate("")

                }} type="primary" >Add Education</Button>
            </Form.Item>

        </section>

    )
}
