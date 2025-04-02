import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import TabLayout from '@/app/(tabs)'; 
import LoginScrreen from '@/app/(tabs)/LoginScreen';
import SignupScreen from '@/app/(tabs)/SignupScreen';
import AdminScreen from '@/app/(tabs)/AdminScree';

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
      <NativeStack.Navigator>
        <NativeStack.Screen 
          name="Login" 
          component={LoginScrreen}
          options={{ 
            headerShown: false,
            title: 'Login'
          }} 
        />
        <NativeStack.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{ 
            headerShown: false,
            title: 'Sign Up'
          }} 
        />
        
        <NativeStack.Screen 
          name="Tabs" 
          component={TabLayout}
          options={{ 
            headerShown: false
          }} 
        />
        
        <NativeStack.Screen 
          name="AdminScree" 
          component={AdminScreen}
          options={{ 
            headerShown: true,
            title: 'Admin Panel'
          }} 
        />
      </NativeStack.Navigator>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}