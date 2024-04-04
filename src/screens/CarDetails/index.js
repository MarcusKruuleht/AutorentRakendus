import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js'

const CarDetails = () => {
  const route = useRoute();
  const { car } = route.params;

const navigation = useNavigation(); // Access the navigation object

  // Function to handle navigation to the Home screen
  const navigateToHome = () => {
      navigation.navigate('Home'); // Navigate to the Home screen
  };

  return (
  <ScrollView>
  <SafeAreaView style={styles.container}>

      {car ? (
        <>
          <View style={styles.imageContainer}>
            <Image source={car.image} style={styles.image} />
          </View>
          <Text style={styles.carName}>{car.brand} {car.model} {car?.year}</Text>
          <Text style={styles.infoText}>Spekifikatsioonid</Text>
            <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{marginBottom: -7}}
            >

            <View style={styles.centerBoxes}>
              {car.motor ? ( <>
                  <View style={styles.infoContainer}>
                        <Text style={styles.textLight}>Mootor</Text>
                        <Text style={styles.textDark}>{car.motor}</Text>
                  </View>
              </> ) : ( <Text style={styles.infoContainer}>Puudub</Text> )}

              {car.fuel ? ( <>
                  <View style={styles.infoContainer}>
                        <Text style={styles.textLight}>Kütus</Text>
                        <Text style={styles.textDark}>{car.fuel}</Text>
                  </View>
              </> ) : ( <Text style={styles.infoContainer}>Puudub</Text> )}

              {car.gearbox ? ( <>
                  <View style={styles.infoContainer}>
                        <Text style={styles.textLight}>Käigukast</Text>
                        <Text style={styles.textDark}>{car.gearbox}</Text>
                  </View>
              </> ) : ( <Text style={styles.infoContainer}>Puudub</Text> )}

              {car.power ? ( <>
                  <View style={styles.infoContainer}>
                        <Text style={styles.textLight}>Võimsus</Text>
                        <Text style={styles.textDark}>{car.power}</Text>
                  </View>
              </> ) : ( <Text style={styles.infoContainer}>Puudub</Text> )}
            </View>

             </ScrollView>

          <Text style={styles.infoText}>Asukoht</Text>
          <View style={styles.infoContainer}>
                <Text style={styles.fontText}><Image source={require('../../pictures/location.png')} style={{height: 18,width: 13}} /> Kohila, Puujumala 4, 65532</Text>
          </View>

          <Text style={styles.infoText}>Periood</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
              <View style={styles.infoContainer}>
                    <Text style={styles.fontText}>1 nädal <Image source={require('../../pictures/downArrow.png')} style={{height: 20,width: 20}} /></Text>
              </View>
              <View>
                    <Text style={styles.rentBox} >RENDI! - 105€</Text>
              </View>
          </View>


          <View style={styles.footer}>
              {/* Image 1 - Home */}
              <Image
                source={require('../../pictures/home_black.png')}
                style={styles.home}
              />
              {/* Image 2 - Location */}
              <Image
                source={require('../../pictures/location_white.png')}
                style={styles.location}
              />
              {/* Image 3 - Profile */}
              <Image
                source={require('../../pictures/profile_white.png')}
                style={styles.profile}
              />
            </View>
        </>
      ) : (
        <SafeAreaView>
            <TouchableOpacity onPress={navigateToHome}>
                <Image source={require('../../pictures/backBox.png')} style={{height: 100,width: 100}} />
            </TouchableOpacity>
            <Text>Car details not available.</Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
    </ScrollView>
  );
};

export default CarDetails;
