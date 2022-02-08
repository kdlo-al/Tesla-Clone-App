import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Dimensions } from 'react-native';
import CarItem from './Components/CarItem/index';

const App = () => {
  return (
    <View style={styles.container}>

      <ScrollView snapToAlignment={'start'} decelerationRate={'fast'} snapToInterval={Dimensions.get('window').height}>

        <CarItem name={'Model S'} tagLine={"Starting at $96,500"} image={require('./Assets/ModelS.jpeg')} />
        <CarItem name={'Model 3'} tagLine={"Order Online for"} tagLineCta={"Touchless Delivery"} image={require('./Assets/Model3.jpeg')} />
        <CarItem name={'Model X'} tagLine={"Order Online for"} tagLineCta={"Touchless Delivery"} image={require('./Assets/ModelX.jpeg')} />
        <CarItem name={'Model Y'} tagLine={"Order Online for"} tagLineCta={"Touchless Delivery"} image={require('./Assets/ModelY.jpeg')} />
        <CarItem name={'Tesla Truck'} tagLine={"Order Online for"} tagLineCta={"Touchless Delivery"} image={require('./Assets/TeslaTruck.jpeg')} />
      </ScrollView>
      <StatusBar styles="auto" />
    </View>
  )
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', /*alignItems: 'center', justifyContent: 'center',*/ },
})

export default App;