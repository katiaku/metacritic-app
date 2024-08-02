import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { slug } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Game Details:{" "}
          {slug
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Text>
        <Link href="/" className="text-blue-500">
          Go Back
        </Link>
      </View>
    </View>
  );
}
