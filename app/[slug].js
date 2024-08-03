import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../components/Screen";
import { getGameDetails } from "../lib/metacritic";
import { useState, useEffect } from "react";
import { Score } from "../components/Score";

export default function Detail() {
  const { slug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (slug) {
      getGameDetails(slug).then(setGameInfo);
    }
  }, [slug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          // eslint-disable-next-line prettier/prettier
          headerLeft: () => { },
          headerTitle: "Game Details",
          // eslint-disable-next-line prettier/prettier
          headerRight: () => { },
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mt-2 mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-xl mt-2">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
