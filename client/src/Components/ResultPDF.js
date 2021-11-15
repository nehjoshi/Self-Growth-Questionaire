import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import font from '../fonts/Lato-Regular.ttf';
import fontBlack from '../fonts/Lato-Black.ttf';
import fontItalic from '../fonts/Lato-Italic.ttf';

Font.register({ family: 'Lato', src: font });
Font.register({ family: 'LatoBlack', src: fontBlack });
Font.register({ family: 'LatoItalic', src: fontItalic });
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Lato'
    },
    section: {
        width: '100%',
        height: "10%",
        backgroundColor: "#320488",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        position: 'absolute',
        left: '20px',
        top: '20px'
    },
    heading: {
        fontSize: '25px',
        textAlign: 'center',
        marginTop: '10px',
        fontFamily: 'LatoBlack',
        color: "#fff"
    },
    details: {
        width: '100%',
        padding: "30px 20px"
    },
    detailsHeading: {
        fontSize: '20px',
        color: "#121212",
        fontFamily: 'LatoBlack'
    },
    detailsBox: {
        width: '90%',
        // border: '1px solid #320488',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20
    },
    boxRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "5px 5px",
        borderBottom: '1px solid #cccccc'
    },
    boxField: {
        fontSize: '15px',
        fontFamily: 'LatoBlack',
        color: "#121212"
    },
    boxValue: {
        fontFamily: 'Lato',
        fontSize: '15px',
        color: "#121212"
    },
    question: {
        fontSize: '15px',
        fontFamily: 'LatoBlack',
        color: "#121212",
    },
    answer: {
        fontFamily: 'LatoItalic',
        fontSize: '15px',
        color: "#121212",
        marginBottom: '10px'
    },
    subHeading: {
        fontSize: '15px',
        fontFamily: 'Lato',
        color: "#121212",
    },
    footer: {
        width: '100%',
        height: "3%",
        position: 'absolute',
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: '0.5px solid #cccccc',
    },
    footerText: {
        fontSize: '8px',
        fontFamily: 'Lato',
    }
});

const ResultPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section} fixed>
                <Text style={styles.heading}>Jivan Safalya | The Mirror Test</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsHeading}>Personal Details</Text>
                <View style={styles.detailsBox}>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Name</Text>
                        <Text style={styles.boxValue}>Neh Samir Joshi</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Nationality</Text>
                        <Text style={styles.boxValue}>British</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Religion</Text>
                        <Text style={styles.boxValue}>Hindu</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Date of Birth</Text>
                        <Text style={styles.boxValue}>05/03/2002</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Height</Text>
                        <Text style={styles.boxValue}>173 cm</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Weight</Text>
                        <Text style={styles.boxValue}>64 kg</Text>
                    </View>

                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsHeading}>Additional Details</Text>
                <View style={styles.detailsBox}>
                    <Text style={styles.question}>Do you smoke?</Text>
                    <Text style={styles.answer}>No</Text>
                    <Text style={styles.question}>Do you drink?</Text>
                    <Text style={styles.answer}>No</Text>
                    <Text style={styles.question}>Do you have glasses?</Text>
                    <Text style={styles.answer}>Yes</Text>
                    <Text style={styles.question}>What are some of your hobbies?</Text>
                    <Text style={styles.answer}>Piano, reading books, exploring technology.</Text>
                    <Text style={styles.question}>Do you have any physical conditions?</Text>
                    <Text style={styles.answer}>No</Text>
                    <Text style={styles.question}>Were you diagnosed with any childhood illnesses?</Text>
                    <Text style={styles.answer}>No</Text>
                </View>
            </View>
            <View style = {styles.footer} fixed>
                <Text style={styles.footerText}>Jivan Safalya | The Mirror Test</Text>
            </View>
            <View style={styles.details} break>
                <Text style={styles.detailsHeading}>Your Views on Life</Text>
                <Text style={styles.subHeading}>On a scale of 1 (you strongly disagree) to 10 (you strongly agree), answer the following questions.</Text>
                <View style={styles.detailsBox}>
                    <Text style={styles.question}>1. I do what my heart tells me to do.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>2. I believe that love at first sight is the perfect way to get a partner.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>3. I have weaknesses.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>4. I never lie.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>5. I would rather go out than read a book.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>6. I have issues in paying attention or concentrating on things.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>7. I like to sit quietly.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>8. Reading books (other than academics) has played a major role in my life.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>9. I believe everything is fair in love and getting success.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>10. I value relationships more than my self-esteem.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>11. Destiny decides everything, we are merely its tools.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>12. My life will be filled with happiness forever after finding my soulmate.</Text>
                    <Text style={styles.answer}>10</Text>
                </View>
            </View>
            
        </Page>
    </Document>
);


export default ResultPDF;