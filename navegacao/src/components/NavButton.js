import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function NavButton({ onPress, text }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

// ...import { StyleSheet, TouchableOpacity, Text} from "react-native";



const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1c1a1d",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    color: "#FFFFFF",
  }
})