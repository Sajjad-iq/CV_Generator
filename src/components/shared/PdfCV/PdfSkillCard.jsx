import { Text, StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    SkillCard: {
        fontSize: 14,
        fontWeight: "bold",
        border: "1px solid #3E0097",
        borderRadius: "50%",
        padding: "1px 7px",
        marginRight: "5px",
        marginBottom: "5px"
    }
});

export const PdfSkillCard = ({ SkillTitle }) => {
    return (
        <Text style={styles.SkillCard}>{SkillTitle}</Text>
    )
}
