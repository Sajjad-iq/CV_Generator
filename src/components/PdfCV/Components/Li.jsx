import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    sectionInnerPointSubtitle: {
        color: '#666666',
        fontWeight: "normal",
        fontSize: 11,
        margin: 0
    },
    LiPoint: {
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: '#333333',
        margin: "6px"
    },
    LiContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        margin: "3px 0",
        padding: "5px 0"
    }
});

export const Li = (props) => {
    return (
        <View style={styles.LiContainer}>
            <View style={styles.LiPoint}></View>
            <Text style={styles.sectionInnerPointSubtitle}>
                {props.title}
            </Text>
        </View>

    )
}
