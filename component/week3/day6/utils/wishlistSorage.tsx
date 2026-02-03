import AsyncStorage from '@react-native-async-storage/async-storage';

const WISHLIST_KEY = 'wishlist-ids';
const META_COUNT_KEY = 'wishlist-count';
const META_UPDATED_KEY = 'wishlist-updatedAt';

export const saveWishlist = async (ids: number[]) => {
  const updatedAt = Date.now().toString();

  await AsyncStorage.multiSet([
    [WISHLIST_KEY, JSON.stringify(ids)],
    [META_COUNT_KEY, ids.length.toString()],
    [META_UPDATED_KEY, updatedAt],
  ]);
};

export const loadWishlist = async () => {
  const result = await AsyncStorage.multiGet([
    WISHLIST_KEY,
    META_COUNT_KEY,
    META_UPDATED_KEY,
  ]);

  const wishlistIds = result[0][1]
    ? JSON.parse(result[0][1])
    : [];

  return {
    ids: wishlistIds as number[],
    count: Number(result[1][1] || 0),
    updatedAt: result[2][1],
  };
};
