import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          <Text className="text-blue-400 text-xl mt-24">Go To Main</Text>
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">About</Text>
      <Text className="text-white/90 mb-4">
        The Metacritic Game Rating App is a comprehensive tool designed for
        gaming enthusiasts who want to stay updated on the latest and greatest
        video games. This app aggregates reviews from critics and users alike,
        providing an overall score that reflects the general consensus on a
        game's quality. With its intuitive interface, users can easily browse
        through various game genres, platforms, and release dates to find the
        top-rated games. Whether you are a casual gamer or a hardcore
        enthusiast, this app ensures that you have access to the most critically
        acclaimed games, helping you make informed decisions about what to play
        next.
      </Text>
      <Text className="text-white/90 mb-4">
        The Metacritic Game Rating App is a comprehensive tool designed for
        gaming enthusiasts who want to stay updated on the latest and greatest
        video games. This app aggregates reviews from critics and users alike,
        providing an overall score that reflects the general consensus on a
        game's quality. With its intuitive interface, users can easily browse
        through various game genres, platforms, and release dates to find the
        top-rated games. Whether you are a casual gamer or a hardcore
        enthusiast, this app ensures that you have access to the most critically
        acclaimed games, helping you make informed decisions about what to play
        next.
      </Text>
      <Text className="text-white/90 mb-4">
        Moreover, the Metacritic Game Rating App is completely free, making it
        an accessible resource for all gamers. Unlike other platforms that may
        require subscriptions or purchases to access detailed reviews and
        ratings, this app democratizes access to valuable gaming information.
        This free access ensures that every gamer, regardless of budget, can
        benefit from expert and user opinions. The app also frequently updates
        its database to include the latest game releases and reviews, keeping
        the content fresh and relevant. With its user-friendly design, extensive
        filtering options, and comprehensive review system, the Metacritic Game
        Rating App stands out as an essential tool for anyone looking to explore
        the world of video games.
      </Text>
    </ScrollView>
  );
}