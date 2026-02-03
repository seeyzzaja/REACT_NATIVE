import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as Keychain from 'react-native-keychain';

export default function KeychainScreen() {
  const [token, setToken] = useState({});
  const [loading, setLoading] = useState(false);

  const setDataToKechain = async () => {
      setLoading(true);
      const username = 'zuck';
      const password = 'poniesRgr8';
    try {
      await Keychain.setGenericPassword(username, password, {
        service: 'service_key',
      });

      await getDataFromKeychain()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDataFromKeychain = async () => {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: 'service_key',
      });
      setToken(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const resetDataFromKeychain = async () => {
    try {
      await Keychain.resetGenericPassword({ service: 'service_key' });
      setToken({})
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromKeychain()
  }, [token])

  if (loading) return <ActivityIndicator color={'red'} size={'large'} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 16, borderRadius: 10 }}
        onPress={setDataToKechain}
      >
        <Text>Set DAta to Keychain</Text>
      </TouchableOpacity>

      <Text>{JSON.stringify(token)}</Text>

      <TouchableOpacity
        style={{ backgroundColor: 'red', padding: 16, borderRadius: 10 }}
        onPress={resetDataFromKeychain}
      >
        <Text>Reset DAta to Keychain</Text>
      </TouchableOpacity>
    </View>
  );
}
