import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import * as SpalsScreen from "expo-splash-screen"; 
import { useEffect } from "react";

SpalsScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [ loaded, Error ] = useFonts({
    "Outfit-VariableFont" :
    require ("../assets/fonts/Outfit-VariableFont_wght.ttf"),
  })

  useEffect(() => {
    if(loaded && Error == null) {
      SpalsScreen.hideAsync();
    }
  }, [loaded, Error])

  if(!loaded && !Error) {
    return null
  }   
  return <Stack />;
}
