import { Text, View } from "react-native";
import { Link, useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { slug } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => { },
          headerTitle: "Game Details",
          headerRight: () => { },
        }}
      />
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          {slug
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Text>
        {/* <Link href="/" className="text-blue-500">
          Go Back
        </Link> */}
      </View>
    </Screen>
  );
}
