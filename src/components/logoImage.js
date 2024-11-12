import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'


export default function LogoImage() {
  return (
    <View>
      <MaterialCommunityIcons name= "crop-free" size={100} color="#075eec" style={styles.logo} />

    </View>
  );
}

const styles = StyleSheet.create({
   logo:{
    marginBottom: 20
   }
});