import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { InfoCircleIcon } from "../components/Icons";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          // headerRight: () => (
          //   <Link asChild href="/about">
          //     <Pressable>
          //       <InfoCircleIcon />
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
    </View>
  );
}
