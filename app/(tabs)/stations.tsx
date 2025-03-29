import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Mock polling station data
const pollingStations = [
  {
    id: 1,
    name: "Nairobi Primary School",
    latitude: -1.286389,
    longitude: 36.817223,
    description: "Main polling station for Nairobi Central"
  },
  {
    id: 2,
    name: "Uhuru Park",
    latitude: -1.2931,
    longitude: 36.8219,
    description: "Open air polling station"
  },
  // Add more stations as needed
];

export default function PollingStationsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Polling Stations</ThemedText>
      <ThemedText style={styles.subtitle}>Find your nearest voting location</ThemedText>
      
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.286389,
          longitude: 36.817223,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {pollingStations.map(station => (
          <Marker
            key={station.id}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude
            }}
            title={station.name}
            description={station.description}
          />
        ))}
      </MapView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
  },
  map: {
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').height - 180,
  },
});