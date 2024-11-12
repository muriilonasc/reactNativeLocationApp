import {useState, useRef} from "react"
import { StyleSheet, Text, View , Button, Modal, Alert} from 'react-native';
import {CameraView, useCameraPermissions} from "expo-camera"
export default function Home() {

  const [modalVisible, setModalVisible] = useState(false)
  const [permission, requestPermission] = useCameraPermissions();
  const qrCodeLock = useRef(false);
  async function handleOpenCamera(){
    try {
      const {granted} = await requestPermission()

      if(!granted){
        return Alert.alert("Camera", "Você precisa habilitar o uso da camera")
      }

      setModalVisible(true)
      qrCodeLock.current = false
    } catch (error){
      console.log(error)
    }
  }

  function handleQRCodeRead(data: string){
    setModalVisible(false)
    Alert.alert("Produto escaneado com sucesso!", data)
  }

  return (
    <View style={styles.container}>
      <Text>Escaneie</Text>
      <Button title="Ler QRCode" onPress={handleOpenCamera}/>


      <Modal visible={modalVisible} style={{ flex: 1 }}>
        <CameraView style={{ flex: 1 }} 
        facing="back"
        onBarcodeScanned={({data}) => {
          if(data && !qrCodeLock.current){
            qrCodeLock.current = true
            setTimeout(() => handleQRCodeRead(data), 500)
          }
        }} />

        <View style={styles.footer}>
        <Button title="Cancelar" onPress={() => setModalVisible (false)}/>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 32,
    right: 32
  }
});
