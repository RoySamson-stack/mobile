import { useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export default function EligibilityScreen() {
  const [idNumber, setIdNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const checkEligibility = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Mock response - in a real app, this would come from an API
      const isEligible = Math.random() > 0.3;
      Alert.alert(
        isEligible ? 'Eligible to Vote' : 'Not Eligible',
        isEligible 
          ? 'You are registered to vote in the next election!'
          : 'Please verify your details or register as a voter.'
      );
    }, 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">Voter Eligibility Check</ThemedText>
        
        <TextInput
          label="ID Number/Passport"
          value={idNumber}
          onChangeText={setIdNumber}
          style={styles.input}
          keyboardType="numeric"
          left={<TextInput.Icon icon="card-account-details" />}
        />

        <Button 
          mode="contained" 
          onPress={checkEligibility}
          loading={loading}
          disabled={!idNumber || idNumber.length < 6}
          style={styles.button}
          icon="account-check"
        >
          Check Status
        </Button>

        <ThemedView style={styles.infoBox}>
          <ThemedText type="defaultSemiBold">
            <FontAwesome name="info-circle" size={16} /> Requirements:
          </ThemedText>
          <ThemedText>- Must be 18+ years old</ThemedText>
          <ThemedText>- Kenyan citizen</ThemedText>
          <ThemedText>- Registered voter</ThemedText>
          <ThemedText>- Valid ID/Passport</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  content: {
    gap: 24,
  },
  input: {
    marginTop: 8,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 16,
  },
  infoBox: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    gap: 8,
    backgroundColor: 'rgba(0, 100, 0, 0.1)',
  },
});