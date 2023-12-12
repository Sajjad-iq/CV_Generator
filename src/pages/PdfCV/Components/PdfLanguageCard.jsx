import { Text, StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    LanguageCard: {
        fontSize: 14,
        fontWeight: "bold",
        padding: "1px 7px",
        marginRight: "5px",
        marginBottom: "5px"
    }
});

export const PdfLanguageCard = ({ LanguageName }) => {
    return (
        <Text style={styles.LanguageCard}>{LanguageName}</Text>
    )
}
