import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,Platform} from 'react-native'

const CartScreen = () => {
  return (
    <View>
      <Text>cart</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})