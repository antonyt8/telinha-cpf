import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavButton from "../components/NavButton";

export default function NavigationsScreen() {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>

            <Text>Aula de Navegação</Text>
            <NavButton text="Voltar" onPress={navigateBack} />
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#1c1a1d",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#FFFFFF",
    },
});




