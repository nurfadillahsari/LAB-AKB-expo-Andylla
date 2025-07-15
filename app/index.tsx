import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
} from 'react-native';


  const imageData = [
  { id: 1, mainSrc: 'https://picsum.photos/id/10/200', altSrc: 'https://picsum.photos/id/11/200' },
  { id: 2, mainSrc: 'https://picsum.photos/id/12/200', altSrc: 'https://picsum.photos/id/13/200' },
  { id: 3, mainSrc: 'https://picsum.photos/id/14/200', altSrc: 'https://picsum.photos/id/15/200' },
  { id: 4, mainSrc: 'https://picsum.photos/id/16/200', altSrc: 'https://picsum.photos/id/17/200' },
  { id: 5, mainSrc: 'https://picsum.photos/id/18/200', altSrc: 'https://picsum.photos/id/19/200' },
  { id: 6, mainSrc: 'https://picsum.photos/id/20/200', altSrc: 'https://picsum.photos/id/21/200' },
  { id: 7, mainSrc: 'https://picsum.photos/id/22/200', altSrc: 'https://picsum.photos/id/23/200' },
  { id: 8, mainSrc: 'https://picsum.photos/id/24/200', altSrc: 'https://picsum.photos/id/25/200' },
  { id: 9, mainSrc: 'https://picsum.photos/id/26/200', altSrc: 'https://picsum.photos/id/27/200' },
];




export default function ImageGrid() {
  const [images, setImages] = useState(
    imageData.map(img => ({
      ...img,
      isFlipped: false,
      scale: new Animated.Value(1),
      scaleNum: 1,
    }))
  );

  const handlePress = (id: number) => {
    setImages(prevImages =>
      prevImages.map(img => {
        if (img.id === id) {
          const newScaleNum = Math.min(img.scaleNum * 1.2, 2);
          Animated.timing(img.scale, {
            toValue: newScaleNum,
            duration: 200,
            useNativeDriver: true,
          }).start();

          return {
            ...img,
            isFlipped: !img.isFlipped,
            scaleNum: newScaleNum,
          };
        }
        return img;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {images.map(img => (
          <TouchableWithoutFeedback
            key={img.id}
            onPress={() => handlePress(img.id)}
          >
            <View style={styles.cell}>
              <Animated.Image
                source={{ uri: img.isFlipped ? img.altSrc : img.mainSrc }}
                style={[
                  styles.image,
                  { transform: [{ scale: img.scale }] }
                ]}
                resizeMode="cover"
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 330,
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});