import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
      }}
      />
      <Tabs.Screen
      name="eligibility"
      options={{
        title: 'Check Eligibility',
        tabBarIcon: ({ color }) => <FontAwesome name="check-circle" size={24} color={color} />,
      }}
      />
      <Tabs.Screen
      name="PollingStationsScreen"
      options={{
        title: 'Polling Stations',
        tabBarIcon: ({ color }) => <FontAwesome name="map-marker" size={24} color={color} />,
      }}
      />
      <Tabs.Screen
      name="countyStats"
      options={{
        title: 'Statistics',
        tabBarIcon: ({ color }) => <FontAwesome name="bar-chart" size={24} color={color} />,
      }}
      />
      <Tabs.Screen
      name="explore"
      options={{
        title: 'explore',
        tabBarIcon: ({ color }) => <FontAwesome name="info-circle" size={24} color={color} />,
      }}
      />
    </Tabs>
  );
}