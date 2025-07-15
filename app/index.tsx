import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const initialGridImages = [
  { id: 1, mainSrc: 'https://i.pinimg.com/736x/46/7c/4c/467c4c3c49e081561a83d2e96aa06612.jpg', altSrc: 'https://i.pinimg.com/736x/06/80/08/0680086822501536dc5ae11b30c26f4a.jpg', isFlipped: false, scale: 1 },
  { id: 2, mainSrc: 'https://i.pinimg.com/736x/7b/0c/76/7b0c76993a1f280bf1f71a4685083987.jpg', altSrc: 'https://i.pinimg.com/736x/87/63/37/876337c242207b1c11f03dc4de0f9c32.jpg', isFlipped: false, scale: 1 },
  { id: 3, mainSrc: 'https://i.pinimg.com/1200x/91/db/20/91db207780ad2525a05e58420d289c78.jpg', altSrc: 'https://i.pinimg.com/736x/30/f2/ae/30f2ae09681fee7f23a54a03d007c2da.jpg', isFlipped: false, scale: 1 },
  { id: 4, mainSrc: 'https://i.pinimg.com/736x/33/48/6a/33486a759d3334a491f774de8ba86cea.jpg', altSrc: 'https://i.pinimg.com/736x/2a/15/a7/2a15a7296143a245d99f965de81f2b0b.jpg', isFlipped: false, scale: 1 },
  { id: 5, mainSrc: 'https://i.pinimg.com/736x/d1/a1/f4/d1a1f47dab051e32a917e848a97b6806.jpg', altSrc: 'https://i.pinimg.com/736x/47/2d/b2/472db25c36ec8aa0f529a8c2b6f6746c.jpg', isFlipped: false, scale: 1 },
  { id: 6, mainSrc: 'https://i.pinimg.com/736x/85/d0/7f/85d07fc709ac28ae950693ef790c3a1b.jpg', altSrc: 'https://i.pinimg.com/736x/98/bf/78/98bf78b540d6ca6c49f85caeffd1878e.jpg', isFlipped: false, scale: 1 },
  { id: 7, mainSrc: 'https://i.pinimg.com/736x/f9/63/cf/f963cf554c3a9861b0488146e1a70a69.jpg', altSrc: 'https://i.pinimg.com/1200x/32/97/92/329792db444b9bae3c41a7482b2fda0e.jpg', isFlipped: false, scale: 1 },
  { id: 8, mainSrc: 'https://i.pinimg.com/736x/86/c3/a8/86c3a8d5ead695c912c0e3e075159857.jpg', altSrc: 'https://i.pinimg.com/736x/6d/0c/89/6d0c8935701fd4ca54420313d1faafcd.jpg', isFlipped: false, scale: 1 },
  { id: 9, mainSrc: 'https://i.pinimg.com/736x/58/4b/f1/584bf12ac6342809f7e0ca56fbeb73d2.jpg', altSrc: 'https://i.pinimg.com/1200x/0a/e1/37/0ae13783a778917b42d07082b965f98b.jpg', isFlipped: false, scale: 1 },
];

export default function PandaGrid() {
  const [gridImages, setGridImages] = useState(initialGridImages);

  const handleImagePress = (id: number) => {
    setGridImages((imgs) =>
      imgs.map((img) =>
        img.id === id
          ? {
              ...img,
              isFlipped: !img.isFlipped,
              scale: img.scale < 2 ? img.scale * 1.2 : 2,
            }
          : img
      )
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.grid}>
        {gridImages.map((img) => (
          <TouchableOpacity key={img.id} onPress={() => handleImagePress(img.id)} style={styles.cell}>
            <View style={[styles.imgWrapper, { transform: [{ scale: img.scale }] }]}>
              <Image
                source={{ uri: img.isFlipped ? img.altSrc : img.mainSrc }}
                style={styles.img}
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
  root: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgWrapper: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
});
