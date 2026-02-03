import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const LIST_API = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

export default function Outbox() {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  // ======================
  // FETCH LIST POKEMON
  // ======================
  const fetchPokemonList = async () => {
    try {
      const res = await fetch(LIST_API);
      const json = await res.json();
      setList(json.results);
    } catch (error) {
      console.log('Error fetch list:', error);
    } finally {
      setLoading(false);
    }
  };

  // ======================
  // FETCH DETAIL POKEMON
  // ======================
  const fetchPokemonDetail = async (name: string) => {
    setDetailLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const json = await res.json();
      setSelectedPokemon(json);
    } catch (error) {
      console.log('Error fetch detail:', error);
    } finally {
      setDetailLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  // ======================
  // LOADING LIST
  // ======================
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // ======================
  // DETAIL VIEW
  // ======================
  if (selectedPokemon) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setSelectedPokemon(null)}
          style={styles.backButton}
        >
          <Text style={styles.backText}> Kembali</Text>
        </TouchableOpacity>

        {detailLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <Image
              source={{
                uri: selectedPokemon.sprites.front_default,
              }}
              style={styles.image}
            />

            <Text style={styles.title}>
              {selectedPokemon.name.toUpperCase()}
            </Text>

            <Text>Height: {selectedPokemon.height}</Text>
            <Text>Weight: {selectedPokemon.weight}</Text>

            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
              Types:
            </Text>
            {selectedPokemon.types.map((item: any) => (
              <Text key={item.type.name}>
                - {item.type.name}
              </Text>
            ))}
          </>
        )}
      </View>
    );
  }

  // ======================
  // LIST VIEW
  // ======================
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Pokémon</Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => fetchPokemonDetail(item.name)}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// ======================
// STYLES
// ======================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: 'blue',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
});
