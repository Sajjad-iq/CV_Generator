import React, { useContext, useState } from 'react'
import { Input, Form, DatePicker, Button } from 'antd';
import { MyContext } from '../../context/data';

export const AddExperience = () => {

    const { ExperienceCards, setExperienceCards } = useContext(MyContext)
    const [ExperienceTitle, setExperienceTitle] = useState()
    const [ExperienceCompany, setExperienceCompany] = useState()
    const [ExperienceStartDate, setExperienceStartDate] = useState()
    const [ExperienceEndDate, setExperienceEndDate] = useState()
    const [ExperienceDescribe, setExperienceDescribe] = useState()

    return (
        <section>
            <h1>Experience</h1>

            <div className="form-row">
                <Form.Item
                    className="form-item"
                    label="Your Title"
                    name="Title"
                >
                    <Input
                        name="Title"
                        onChange={(e) => setExperienceTitle(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    className="form-item"
                    label="Company Name"
                    name="companyName"
                >
                    <Input
                        name="companyName"
                        onChange={(e) => setExperienceCompany(e.target.value)} />
                </Form.Item>
            </div>


            <div className="form-row">

                <Form.Item
                    className="form-item"
                    label="Start Date"
                    name="startDate"
                >
                    <DatePicker
                        name="startDate"
                        onChange={(e) => setExperienceStartDate(e.format('YYYY-MM-DD'))} />
                </Form.Item>

                <Form.Item
                    className="form-item"
                    label="End Date"
                    name="endDate"
                >
                    <DatePicker
                        name="endDate"
                        onChange={(e) => setExperienceEndDate(e.format('YYYY-MM-DD'))} />
                </Form.Item>
            </div>



            <Form.Item
                className="form-item"
                label="What do you do at this company?"
                name="whatDo"

            >
                <Input.TextArea
                    name="whatDo"
                    onChange={(e) => setExperienceDescribe(e.target.value)} />
            </Form.Item>

            <Form.Item className="form-item">
                <Button onClick={() => {
                    let data = [...ExperienceCards]
                    data.push({
                        title: ExperienceTitle,
                        company: ExperienceCompany,
                        startDate: ExperienceStartDate,
                        endDate: ExperienceEndDate,
                        desc: ExperienceDescribe
                    })
                    setExperienceCards(data)
                    setExperienceTitle("")
                    setExperienceCompany("")
                    setExperienceStartDate("")
                    setExperienceEndDate("")
                    setExperienceDescribe("")

                }} type="primary" >Add Experience</Button>
            </Form.Item>

        </section>

    )
}
