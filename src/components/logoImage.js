import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'


export default function LogoImage() {
  return (
    <View>
      <MaterialCommunityIcons name= "camera-outline" size={140} color="#00d481" style={styles.logo} />

    </View>
  );
}

const styles = StyleSheet.create({
   logo:{
    marginBottom: 20
   }
});