import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColor = () => {
    const persentage = (score / maxScore) * 100;
    if (persentage < 40) return "bg-green-500";
    if (persentage < 80) return "bg-yellow-500";
    return "bg-green-500";
  };
  const className = getColor();
  return (
    <View
      className={`${className} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
