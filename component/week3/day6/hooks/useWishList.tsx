import { useEffect, useState } from 'react';
import { loadWishlist, saveWishlist } from '../utils/wishlistSorage';

export const useWishlist = () => {
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  useEffect(() => {
    loadWishlist().then(data => {
      setWishlistIds(data.ids);
    });
  }, []);

  const toggleWishlist = async (id: number) => {
    let updated: number[];

    if (wishlistIds.includes(id)) {
      updated = wishlistIds.filter(item => item !== id);
    } else {
      updated = [...wishlistIds, id];
    }

    setWishlistIds(updated);
    await saveWishlist(updated);
  };

  const isWishlisted = (id: number) => {
    return wishlistIds.includes(id);
  };

  return { toggleWishlist, isWishlisted };
};
