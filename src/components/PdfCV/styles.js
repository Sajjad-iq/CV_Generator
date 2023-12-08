import { StyleSheet, Font } from '@react-pdf/renderer';
import { fontFamily, fontFamilyBold, fontFamilyMid } from '../../assets/fonts';

Font.register({
    family: 'open-sans',
    fonts: [
        { src: fontFamilyBold, fontWeight: 'bold' },
        { src: fontFamily, fontWeight: 'normal' },
        { src: fontFamilyMid, fontWeight: 'medium' }
    ],
});

export const styles = StyleSheet.create({
    body: {
        fontFamily: "open-sans",
        backgroundColor: '#f9f9f9',
        color: '#333333',
        margin: 0,
        padding: 0,
    },
    container: {
        maxWidth: 800,
        margin: '0 auto',
        padding: 20,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        marginBottom: 15,
    },
    headerTitle: {
        fontSize: 40,
        marginBottom: 15,
        color: '#666666',
        fontWeight: "bold"
    },
    headerSubtitle: {
        fontSize: 20,
        color: '#3E0097',
        fontWeight: "bold",
        margin: 0
    },
    contact: {
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        margin: '5px 0',
        flexDirection: "row"
    },
    contactItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginRight: 12,
        flexDirection: "row"
    },
    contactText: {
        marginLeft: 7,
        color: '#333333',
        fontSize: 14
    },
    summaryTitle: {
        fontSize: 11,
        color: '#333333',

    },
    section: {
        margin: '20px 0',
        borderBottom: '2px dotted #666666',
    },
    sectionTitle: {
        color: '#3E0097',
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 6
    },
    sectionSubtitle: {
        color: '#666666',
        fontWeight: "medium",
        fontSize: 15,
        marginBottom: 6
    },
    sectionInnerSubtitle: {
        color: '#666666',
        fontWeight: "normal",
        fontSize: 11,
        marginBottom: 6
    },
    sectionInnerContainerPointSubtitle: {
        padding: "0 10px"
    },
    sectionInnerPointSubtitle: {
        color: '#666666',
        fontWeight: "normal",
        fontSize: 11,
        marginBottom: 3,

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    leftColumn: {
        flexBasis: '50%',
        paddingRight: 20,

    },
    rightColumn: {
        flexBasis: '50%',
        paddingLeft: 20,
    },
    subsectionTitle: {
        borderBottom: '2px solid #3E0097',
        paddingBottom: 10,
        color: '#3E0097',
        fontWeight: "bold",
        marginBottom: 10
    },
    rowSection: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15
    },
    ulHeader: {
        fontSize: 14,
        fontWeight: "bold",
    }
});
