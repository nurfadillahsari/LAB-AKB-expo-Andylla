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
  { id: 1, mainSrc: 'https://png.pngtree.com/thumb_back/fh260/background/20241008/pngtree-the-sky-is-a-deep-blue-with-moon-natural-view-image_16350044.jpg', altSrc: 'https://i.pinimg.com/736x/5a/48/5f/5a485f881bfedf0cd4ff9648bd08d2d6.jpg' },
  { id: 2, mainSrc: 'https://asset.kompas.com/crops/BD5magRmejVwX0vqq28Ud2LxPXM=/0x1536:1920x2816/1200x800/data/photo/2023/04/28/644ba26ad81cb.jpg', altSrc: 'https://asset-2.tstatic.net/prohaba/foto/bank/images/Ilustrasi-kucing-dari-Shutterstocks.jpg' },
  { id: 3, mainSrc: 'https://radarmukomuko.bacakoran.co/upload/ad75a5791de7856b25af1a2c0ed7334d.jpg', altSrc: 'https://gdb.voanews.com/01000000-0a00-0242-f13d-08dbffc63f27_w1080_h608_s.jpg' },
  { id: 4, mainSrc: 'https://cdn1-production-images-kly.akamaized.net/JY6DHKOPK49FYMaLxt45-Gpwx2s=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3233586/original/068197700_1599696585-photo-1518796745738-41048802f99a.jpg', altSrc: 'https://www.harapanrakyat.com/wp-content/uploads/2021/02/Ternak-Kelinci-Pedaging-Minim-Pesaing-Untung-Menjanjikan.jpg' },
  { id: 5, mainSrc: 'https://eventkampus.com/data/artikel/2/fakta-menarik-tentang-kupu-kupu.jpeg', altSrc: 'https://cdn.rri.co.id/berita/70/images/1709083186379-1/thcovrhrjyhkqr9.jpeg' },
  { id: 6, mainSrc: 'https://asset.kompas.com/crops/S3F-pCbcc41u77pS8Z4-cSd1BKM=/0x0:1920x1280/1200x800/data/photo/2023/05/24/646d7382809f8.jpg', altSrc: 'https://unair.ac.id/wp-content/uploads/2019/12/bunga-matahari-1.jpeg' },
  { id: 7, mainSrc: 'https://akcdn.detik.net.id/visual/2020/04/08/3ad3488f-78be-414d-8923-3ab30e745746_169.jpeg?w=1200', altSrc: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/03/16/2682206718.jpg' },
  { id: 8, mainSrc: 'https://forestinsights.id/wp-content/uploads/2024/12/Amphiprion_ocellaris_Clown_anemonefish_by_Nick_Hobgood.jpg', altSrc: 'https://dkpp.bulelengkab.go.id/uploads/konten/berkenalan-dengan-ikan-tilapia-ikan-lezat-kaya-manfaat-63.jpg' },
  { id: 9, mainSrc: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01h0wa2nxfj0vxnr32ere1aa2p.jpg', altSrc: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/65/2024/09/07/14-1438621034.jpg' },
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