import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Detail() {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">Game Details</Text>
        <Link href="/" className="text-blue-500">
          Go Back
        </Link>
      </View>
    </View>
  );
}
