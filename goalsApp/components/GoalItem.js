import { StyleSheet, Pressable, Text, View } from 'react-native';
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                sytle={({ pressed }) => pressed && styles.pressed}
            >
                {/* Text doesn't support round corner on iOS so we wrap it with View which does support it. */}
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    pressed: {
        opacity: 0.5,
    },
    goalText: {
      color: 'white',
      padding: 8,
    }
});