import React from 'react';
import { View, StyleSheet } from "react-native";

const AppProvider: React.FC = ({ children  }) => (
    <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default AppProvider;