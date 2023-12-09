import React from 'react'
import { styles } from "../../PdfCV/styles"
import { Text, View } from '@react-pdf/renderer';

export const PdfEducationCard = ({ EducationTitle, UniversityName, startDate, endDate }) => {
    return (
        < View style={styles.content} >
            <Text style={styles.sectionTitle}>{EducationTitle}</Text>
            <Text style={styles.sectionSubtitle}>{UniversityName}</Text>
            <Text style={styles.sectionSubtitle}>{`${startDate} - ${endDate ? endDate : "Still"}`}</Text>
        </View >
    )
}
