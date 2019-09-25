import React from "react";
import { 
   View,
   Text,
   Button
} from "react-native";
import { styles } from "../../styles";

const HomeScreen = (props) => (
   <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="GO TO SCREEN TEST" onPress={()=> props.navigation.navigate('TEST')}/>
   </View>
   )
export default HomeScreen;
