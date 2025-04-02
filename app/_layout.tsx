import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack as RouterStack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import CountyStatsScreen from '@/app/(tabs)/countyStats';
import PollingStationsScreen from '@/app/(tabs)/PollingStationsScreen';
import LoginScreen from '@/app/(tabs)/LoginScreen';
import SignupScreen from '@/app/(tabs)/SignupScreen';
import AdminScreen from '@/app/(tabs)/AdminScree';
// import DashboardScreen from '@/app/(dashboard)/dashboatabs
const NativeStack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RouterStack>
        {/* Public routes */}
        <RouterStack.Screen 
          name="(tabs)/login" 
          options={{ 
            headerShown: false,
            title: 'Login'
          }} 
        />
        <RouterStack.Screen 
          name="(tabs)/signup" 
          options={{ 
            headerShown: false,
            title: 'Sign Up'
          }} 
        />
        
        <RouterStack.Screen 
          name="(tabs)/dashboard" 
          options={{ 
            headerShown: false,
            title: 'Dashboard'
          }} 
        />
        
        <RouterStack.Screen 
          name="(tabs)/admin" 
          options={{ 
            headerShown: true,
            title: 'Admin Panel'
          }} 
        />
        
        <RouterStack.Screen name="(tabs)" options={{ headerShown: false }} />
        <RouterStack.Screen name="+not-found" />
      </RouterStack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}