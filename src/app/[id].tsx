import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const ProdutDetailsScreen = () => {

  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ color:'white'}}>product details {id}</Text>
    </View>
  )
}

export default ProdutDetailsScreen