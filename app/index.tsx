import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// Link tema cinta dari Unsplash (bebas lisensi)
const romanticImages = [
  {
    id: 1,
    main: 'https://images.unsplash.com/photo-1509914438510-653af5bfd6f8?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1520974722346-79f83d60c473?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    main: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1504199367641-aba8151af3ed?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    main: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1535615615570-3b839f917dc3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    main: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178e2?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    main: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1506379326360-54f7d6c33c68?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    main: 'https://images.unsplash.com/photo-1518987048-8f7f87b2e544?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    main: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    main: 'https://images.unsplash.com/photo-1520976299090-1e9c7f91b44c?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1518893494013-d2a0d7a68426?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    main: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=400&q=80',
    alt: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=400&q=80',
  },
];

export default function LoveGallery() {
  const [photos, setPhotos] = useState(
    romanticImages.map((img) => ({
      ...img,
      flipped: false,
      scaleAnim: new Animated.Value(1),
      scaleVal: 1,
    }))
  );

  const toggleImage = (id: number) => {
    setPhotos((current) =>
      current.map((item) => {
        if (item.id === id) {
          const nextScale = Math.min(item.scaleVal * 1.2, 2);
          Animated.timing(item.scaleAnim, {
            toValue: nextScale,
            duration: 200,
            useNativeDriver: true,
          }).start();

          return {
            ...item,
            flipped: !item.flipped,
            scaleVal: nextScale,
          };
        }
        return item;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.grid}>
        {photos.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => toggleImage(item.id)}>
            <View style={styles.cell}>
              <Animated.Image
                source={{ uri: item.flipped ? item.alt : item.main }}
                style={[styles.image, { transform: [{ scale: item.scaleAnim }] }]}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  grid: {
    width: 330,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
});
