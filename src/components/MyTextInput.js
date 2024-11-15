import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyTextInput({label, inputPlacehouder, value, onChangeText}) {
  return (
    <View>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput style={styles.input} placeholder={inputPlacehouder}
    placeholderTextColor='#6b7280' value={value} onChangeText={onChangeText}>
    </TextInput>
    </View>
    
  );
}

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#000000',
    height: 44,
    width:250,
    paddingHorizontal: 40,
    borderRadius: 6,
    fontSize: 15,
    fontWeight: '500',
    color: '#828282',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#828282"
    
    },
     labelText: { 
      fontSize: 17,
      fontWeight: '600',
      color: '#222',
      marginBottom: 8
     }
});