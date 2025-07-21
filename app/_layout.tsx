import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // 📌 Static fonts
    "AbrilFatface-Regular": require("../assets/fonts/Static/AbrilFatface-Regular.ttf"),
    "BowlbyOne-Regular": require("../assets/fonts/Static/BowlbyOne-Regular.ttf"),
    "Michroma-Regular": require("../assets/fonts/Static/Michroma-Regular.ttf"),
    "Play-Regular": require("../assets/fonts/Static/Play-Regular.ttf"),
    "Shojumaru-Regular": require("../assets/fonts/Static/Shojumaru-Regular.ttf"),

    // 📌 Variable fonts
    "Montserrat-Variable": require("../assets/fonts/Variable/Montserrat-VariableFont_wght.ttf"),
    "Raleway-Variable": require("../assets/fonts/Variable/Raleway-VariableFont_wght.ttf"),
    "Roboto-Variable": require("../assets/fonts/Variable/Roboto-VariableFont_wdth,wght.ttf"),
    "Rubik-Variable": require("../assets/fonts/Variable/Rubik-VariableFont_wght.ttf"),
    "TikTokSans-Variable": require("../assets/fonts/Variable/TikTokSans-VariableFont_opsz,slnt,wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }

    if (error) {
      console.error("❌ Failed to load fonts:", error);
    }
  }, [loaded, error]);

  if (!loaded) return null;

  return <Stack />;
}
