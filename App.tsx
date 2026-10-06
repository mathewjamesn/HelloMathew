import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

function App(): React.JSX.Element {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setMessage('Hello mathew')}>
        <Text style={styles.buttonText}>Welcome</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  button: { backgroundColor: '#2196F3', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  message: { marginTop: 24, fontSize: 24, color: '#000' },
});

export default App;
