import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const categories = ['Pizza', 'Burgers', 'Sushi', 'Desserts'];

const featuredRestaurants = [
  {
    name: 'Urban Spice Kitchen',
    cuisine: 'Indian Fusion',
    rating: 4.8,
    eta: '20-30 min',
  },
  {
    name: 'Coastal Bowl',
    cuisine: 'Seafood',
    rating: 4.6,
    eta: '25-35 min',
  },
  {
    name: 'Bella Napoli',
    cuisine: 'Italian',
    rating: 4.7,
    eta: '15-25 min',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Good evening 👋</Text>
        <Text style={styles.subHeader}>Find your next meal</Text>

        <View style={styles.searchCard}>
          <Text style={styles.searchText}>🔎 Search restaurants or dishes</Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow}>
          {categories.map((category) => (
            <TouchableOpacity key={category} style={styles.categoryPill}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Featured Restaurants</Text>
        {featuredRestaurants.map((restaurant) => (
          <View key={restaurant.name} style={styles.restaurantCard}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantMeta}>{restaurant.cuisine}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.metaBadge}>⭐ {restaurant.rating}</Text>
              <Text style={styles.metaBadge}>🛵 {restaurant.eta}</Text>
            </View>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>View Menu</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f2',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1b1b1b',
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    marginBottom: 20,
  },
  searchCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ece9e2',
  },
  searchText: {
    fontSize: 15,
    color: '#8a8a8a',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#242424',
    marginBottom: 12,
  },
  categoriesRow: {
    marginBottom: 24,
  },
  categoryPill: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ece9e2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  categoryText: {
    color: '#3d3d3d',
    fontWeight: '500',
  },
  restaurantCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ece9e2',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
  },
  restaurantMeta: {
    fontSize: 14,
    color: '#717171',
    marginTop: 4,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  metaBadge: {
    backgroundColor: '#faf8f4',
    color: '#555',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden',
    fontSize: 13,
  },
  ctaButton: {
    marginTop: 14,
    backgroundColor: '#d9480f',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
