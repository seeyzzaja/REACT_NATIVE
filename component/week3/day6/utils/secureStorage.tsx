import * as Keychain from 'react-native-keychain';

export const savePassword = async (email: string, password: string) => {
  await Keychain.setGenericPassword(email, password, {
    service: 'user-password',
  });
};

export const getPassword = async () => {
  const credentials = await Keychain.getGenericPassword({
    service: 'user-password',
  });

  if (credentials) {
    return credentials;
  }
  return null;
};

export const clearPassword = async () => {
  await Keychain.resetGenericPassword({
    service: 'user-password',
  });
};
