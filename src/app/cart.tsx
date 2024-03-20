import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,Platform, FlatList} from 'react-native'
import { useContext } from 'react'
import { useCart } from '../providers/CartProvider'
import CartListItem from '../components/CartListItem'
import Button from '../components/Button'

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View>
     <FlatList data={items}
     renderItem={({item})=> <CartListItem cartItem={item}/>}
     contentContainerStyle={{ padding:10, gap:10 }}
     />
     <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500', color:'white'}}> Total : ${total}</Text>
    { items.length > 0 && <Button text="Checkout"/>}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    color:'white',
  }
})