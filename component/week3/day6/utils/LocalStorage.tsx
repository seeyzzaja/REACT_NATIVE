import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserProfile = async (profile: {
  email: string;
  nama: string;
}) => {
  await AsyncStorage.setItem(
    'user-profile',
    JSON.stringify(profile)
  );
};

export const getUserProfile = async () => {
  const data = await AsyncStorage.getItem('user-profile');
  return data ? JSON.parse(data) : null;
};

export const clearUserProfile = async () => {
  await AsyncStorage.removeItem('user-profile');
};
