import { styles } from "../../PdfCV/styles"
import { Text, View } from '@react-pdf/renderer';
import { Li } from "./Li";

export const PdfExperienceCard = ({ jobTitle, companyName, startDate, endDate, description }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.sectionTitle}>{jobTitle}</Text>
      <Text style={styles.sectionSubtitle}>{companyName}</Text>
      <Text style={styles.sectionInnerSubtitle}>{`${startDate} - ${endDate ? endDate : "Still"}`}</Text>
      <Li title={description} />
    </View>
  )
}
