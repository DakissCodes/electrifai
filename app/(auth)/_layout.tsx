import { Redirect, router, Stack  } from 'expo-router';

import { Text } from '@/components/Themed';
import { useSession } from '../ctx';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  const { session, isLoading } = useSession();
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    return <Redirect href="/login" />;
  }

  const goBack = () => router.back()

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      <Stack.Screen name="payment-details" options={{ title: 'Payment Details' }} />
      <Stack.Screen
        name='anomalies'
        options={{
          title: 'Anomaly Detection',
          headerStyle: {
            backgroundColor: '#FFAC4A',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={goBack} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name='consumption-chart'
        options={{
          title: 'Consumption Chart',
          headerStyle: {
            backgroundColor: '#FFAC4A',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={goBack} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
          )
        }}
      />
    </Stack>
  )
}
