import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';


export default function Btn({btntext, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.btn}>
            <Text style={styles.btntext}>{btntext}</Text>
        </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#00d481',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#075eec',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 275,
        marginTop: 10,
        marginTop: 20,
        borderWidth: 0
    },
    btntext:{
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF'
    }
});