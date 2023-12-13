import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './styles';
import { PdfExperienceCard, PdfSkillCard, PdfEducationCard, PdfLanguageCard } from './Components';

export const PdfCV = ({ fullName, jobTitle, git, LinkedIn, location, Email, Phone, About, Experience, Skills, Education, Languages }) => {


    return (
        <Document style={{ width: "100dvw" }}>
            <Page size={"A4"}>
                <View style={styles.body}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>{fullName}</Text>
                            <Text style={styles.headerSubtitle}>{jobTitle}</Text>
                        </View>
                        <View >
                            <View style={styles.contact}>
                                <View style={styles.contactItem}>
                                    <Text style={styles.ulHeader}>Email:</Text>
                                    <Text style={styles.contactText}>{Email}</Text>
                                </View>
                                <View style={styles.contactItem}>
                                    <Text style={styles.ulHeader}>Phone:</Text>
                                    <Text style={styles.contactText}>{Phone}</Text>
                                </View>
                                <View style={styles.contactItem}>
                                    <Text style={styles.ulHeader}>Git:</Text>
                                    <Text style={styles.contactText}>{git}</Text>
                                </View>
                                <View style={styles.contactItem}>
                                    <Text style={styles.ulHeader}>LinkedIn:</Text>
                                    <Text style={styles.contactText}>{LinkedIn}</Text>
                                </View>
                                <View style={styles.contactItem}>
                                    <Text style={styles.ulHeader}>Location:</Text>
                                    <Text style={styles.contactText}>{location}</Text>
                                </View>
                            </View>
                        </View>

                        {/* left side */}
                        <View style={styles.rowSection}>

                            <View style={styles.leftColumn}>
                                <View style={styles.section}>
                                    <Text style={styles.subsectionTitle}>Experience</Text>

                                    {Experience ? Experience.map((e) =>
                                        <PdfExperienceCard
                                            key={e.title}
                                            jobTitle={e.title} companyName={e.company} startDate={e.startDate} endDate={e.endDate} description={e.desc}
                                        />)
                                        :
                                        null}

                                </View>
                            </View>

                            {/* right side */}
                            <View style={styles.rightColumn}>
                                <Text style={styles.subsectionTitle}>Summary</Text>
                                <Text style={styles.summaryTitle}>
                                    {About}
                                </Text>

                                <View style={styles.section}>
                                    <Text style={styles.subsectionTitle}>Skills</Text>
                                    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "5px 0" }}>
                                        {Skills ? Skills.map((e) => <PdfSkillCard key={e}
                                            SkillTitle={e} />) : ""}
                                    </View>
                                </View>


                                <View style={styles.section}>
                                    <Text style={styles.subsectionTitle}>Languages</Text>
                                    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "5px 0" }}>
                                        {Languages ? Languages.map((e) => <PdfLanguageCard key={e}
                                            LanguageName={e} />) : ""}
                                    </View>
                                </View>

                                <View style={styles.section}>
                                    <Text style={styles.subsectionTitle}>Education</Text>
                                    {Education ? Education.map((e) => <PdfEducationCard
                                        EducationTitle={e.title}
                                        UniversityName={e.university}
                                        startDate={e.startDate}
                                        endDate={e.endDate}
                                        key={e.title}
                                    />)

                                        :
                                        null}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
