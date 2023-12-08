import React from 'react';
import { Button, Card } from 'antd';

const { Meta } = Card;

const ExperienceCard = ({ jobTitle, companyName, startDate, endDate, description, Delete }) => {
    return (
        <Card
            style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', backgroundColor: 'white' }}
        >
            <Meta title={jobTitle} description={companyName} />
            <section style={{ display: "flex" }}>
                <section style={{ margin: "0 5px" }}>
                    <h4>Start </h4>
                    <p>{startDate}</p>
                </section>

                <section style={{ margin: "0 5px" }}>
                    <h4>end </h4>
                    <p>{endDate}</p>
                </section>

            </section>

            <p>{description}</p>

            <Button onClick={Delete} type='dashed'>Delete</Button>
        </Card >
    );
};

export default ExperienceCard;