import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../components/home_header';
import brands from '../../data/brands'; // Adjust the import path as needed
import CarItem from '../../components/CarItem';
import { cars as allCars } from '../../data/cars';
import CarDetails from '../CarDetails';

import { styles } from './styles'; // Import styles from styles.js

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [filteredCars, setFilteredCars] = useState(allCars);

  // Function to handle search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Clear the selected brand
    setSelectedBrand(null);
    // Filter cars based on search query
    const filtered = allCars.filter(car => 
      car.model.toLowerCase().includes(query.toLowerCase()) ||
      car.brand.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  // Function to handle brand logo press
  const handleBrandPress = (brandName) => {
    setSelectedBrand(brandName);
    // Filter cars for the selected brand
    const brandCars = allCars.filter(car => car.brand.toLowerCase() === brandName.toLowerCase());
    if (brandCars.length === 0) {
      // If no cars available for the selected brand, display a message
      setFilteredCars([]);
    } else {
      // If cars available for the selected brand, display them
      setFilteredCars(brandCars);
    }
  };

  // Rendering function for each brand
  const renderBrandItem = (brand, index) => {
    const isSelected = selectedBrand === brand.name;
    return (
      <TouchableOpacity
        key={brand.id}
        style={[styles.brandContainer, isSelected && styles.selectedBrandContainer]}
        onPress={() => handleBrandPress(brand.name)}
      >
        <View style={[styles.brandItem, isSelected && styles.selectedBrandItem]}>
          <View style={styles.logoContainer}>
            <Image source={brand.logo} style={styles.brandLogo} resizeMode="contain" />
          </View>
        </View>
        <Text style={[styles.brandName, isSelected && styles.selectedBrandName]}>{brand.name}</Text>
      </TouchableOpacity>
    );
  };

  // Function to handle "Vaata kõiki" press
  const handleSeeAllPress = () => {
    // Clear the selected brand
    setSelectedBrand(null);
    // Reset filtered cars to all cars
    setFilteredCars(allCars);
    // Clear search query
    setSearchQuery('');
  };

  // Rendering function for each car
  const renderCarItem = (car) => {
    const navigation = useNavigation();

    return (
      <View style={styles.carItemContainer} key={car.id}>
        <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { car })}>
          <Image source={car.image} style={styles.image}/>
          <Text style={styles.model}>{car.model}</Text>
          <Text style={styles.brand}>{car.brand}</Text>
          <Text style={styles.price}>{car.price}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HomeHeader Component */}
        <HomeHeader onSearchKeyword={handleSearch} keyword={searchQuery} />

        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.brandHeaderContainer}>
            <Text style={styles.brandHeaderText}>Brändid</Text>
            <TouchableOpacity onPress={handleSeeAllPress}>
              <Text style={[styles.seeAllText, !selectedBrand && styles.underline]}>Vaata kõiki</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.scrollViewContentContainer}
          >
            {brands.map((brand, index) => renderBrandItem(brand, index))}
          </ScrollView>

          {/* Car Items */}
          <View style={styles.carItemsContainer}>
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => renderCarItem(car))
            ) : (
              <Text style={styles.noCarsMessage}>Sorry, soon adding more cars</Text>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
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
    </SafeAreaView>
  );
};

export default Home;
