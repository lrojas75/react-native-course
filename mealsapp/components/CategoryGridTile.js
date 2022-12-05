import { Pressable, Text, StyleSheet, View, Platform } from "react-native";
//import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
  // This is an alternative to be able to use navigation without depending on the prop navigation that Stack.Screen provides to the assigned component.
  //const navigation = useNavigation();

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 8,
    flex: 1,
    height: 150,
    margin: 16,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    overflow: Platform.OS === "android" ? "hidden" : "visibles",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    alignItems: "center",
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
