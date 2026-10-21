import React, { useState, useEffect, createContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, ScrollView, Switch } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

export const ThemeContext = createContext();
const Tab = createBottomTabNavigator();

// --- COLORS ---
const lightColors = { bg: '#ffffff', card: '#f3e8ff', text: '#2d0a4e', sub: '#7c5cbf', tab: '#ffffff', primary: '#a78bfa' };
const darkColors = { bg: '#121212', card: '#1f1a2e', text: '#ffffff', sub: '#a78bfa', tab: '#1f1a2e', primary: '#a78bfa' };

// --- SPLASH SCREEN ---
function Splash({ onFinish }) {
  useEffect(() => { setTimeout(onFinish, 2500); }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#f3e8ff', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/logo.png')} style={{ width: 280, height: 280, resizeMode: 'contain' }} />
      <Text style={{ fontSize: 34, fontWeight: '800', color: '#7c5cbf', marginTop: 10 }}>Mahe.it</Text>
      <Text style={{ color: '#7c5cbf', marginTop: 5 }}>Social App</Text>
    </View>
  );
}

// --- 1. HOME ---
function HomeScreen() {
  const { colors } = React.useContext(ThemeContext);
  const posts = [
    { id: '1', user: 'Nimali Perera', location: 'Colombo, LK', img: 'https://picsum.photos/500/500?1', likes: '1.2k' },
    { id: '2', user: 'Kasun Silva', location: 'Kandy', img: 'https://picsum.photos/500/500?2', likes: '890' },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, paddingTop: 50 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Mahe.it</Text>
        <View style={{ flexDirection: 'row', gap: 18 }}>
          <TouchableOpacity><Ionicons name="map" size={26} color={colors.primary} /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="videocam" size={26} color={colors.primary} /></TouchableOpacity>
        </View>
      </View>
      <FlatList data={posts} keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={{ margin: 10, backgroundColor: colors.card, borderRadius: 15, overflow: 'hidden' }}>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
              <View style={{ width: 38, height: 38, borderRadius: 20, backgroundColor: colors.primary }} />
              <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: '700', color: colors.text }}>{item.user}</Text><Text style={{ fontSize: 12, color: colors.sub }}>{item.location}</Text></View>
            </View>
            <Image source={{ uri: item.img }} style={{ width: '100%', height: 380 }} />
            <View style={{ padding: 12, flexDirection: 'row', gap: 15 }}>
              <Ionicons name="heart-outline" size={26} color={colors.text} />
              <Ionicons name="chatbubble-outline" size={26} color={colors.text} />
              <Feather name="send" size={24} color={colors.text} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

// --- 2. MESSAGE ---
function MessageScreen() {
  const { colors } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 16, paddingTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Messages</Text>
      <Text style={{ color: colors.sub, marginTop: 5, marginBottom: 15, fontSize: 12 }}>🔒 No Phone Numbers / Emails Shown - Privacy Protected</Text>
      <View style={{ flexDirection: 'row', padding: 12, backgroundColor: colors.card, borderRadius: 12, marginBottom: 10 }}>
        <View style={{ width: 45, height: 45, borderRadius: 25, backgroundColor: colors.primary }} />
        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: '600', color: colors.text }}>Amaya</Text><Text style={{ color: colors.sub }}>Hey! Mahe eka patta! 😍</Text></View>
      </View>
      <TouchableOpacity style={{ backgroundColor: colors.primary, padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 25 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>🎥 Ome TV - Chat with Random Strangers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: colors.card, padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 10, borderWidth: 1, borderColor: colors.primary }}>
        <Text style={{ color: colors.primary, fontWeight: 'bold' }}>🗺️ Online Map - See Friends Near You</Text>
      </TouchableOpacity>
    </View>
  );
}

function ReelsScreen() {
  const { colors } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name="play-circle" size={90} color={colors.primary} />
      <Text style={{ color: colors.text, marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>Reels</Text>
      <Text style={{ color: colors.sub }}>Friends Reels Videos</Text>
    </View>
  );
}

function FriendsScreen() {
  const { colors } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 16, paddingTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Friends</Text>
      <Text style={{ color: colors.sub, marginTop: 5 }}>Friend Requests</Text>
      <View style={{ marginTop: 15, backgroundColor: colors.card, padding: 15, borderRadius: 12 }}>
        <Text style={{ color: colors.text, fontWeight: '600' }}>Saman Perera - Colombo</Text>
           <View style={{ marginTop: 15, backgroundColor: colors.card, padding: 15, borderRadius: 12 }}>
        <Text style={{ color: colors.text, fontWeight: '600' }}>Saman Perera - Colombo</Text>
        <Text style={{ color: colors.sub, fontSize: 12 }}>2 mutual friends</Text>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
          <TouchableOpacity style={{ backgroundColor: colors.primary, padding: 10, borderRadius: 8, flex: 1, alignItems: 'center' }}><Text style={{ color: '#fff', fontWeight: 'bold' }}>Accept</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#e5e7eb', padding: 10, borderRadius: 8, flex: 1, alignItems: 'center' }}><Text>Delete</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function ProfileScreen() {
  const { colors } = React.useContext(ThemeContext);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg, paddingTop: 50 }}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image source={require('./assets/icon.png')} style={{ width: 90, height: 90, borderRadius: 45 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text, marginTop: 10 }}>Your Name</Text>
        <Text style={{ color: colors.sub }}>mahe.it/yourname</Text>;
        <Text style={{ color: colors.sub, fontSize: 12, marginTop: 4 }}>Supported All Countries 🌍</Text>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ color: colors.text, fontWeight: '700' }}>Personal Details</Text>
        <TextInput placeholder="Bio..." placeholderTextColor={colors.sub} style={{ backgroundColor: colors.card, padding: 12, borderRadius: 10, marginTop: 8, color: colors.text }} />
        <Text style={{ color: colors.text, fontWeight: '700', marginTop: 15 }}>My Posts (Upload & Shared)</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
          <View style={{ width: '32%', height: 110, backgroundColor: colors.card, borderRadius: 10 }} />
          <View style={{ width: '32%', height: 110, backgroundColor: colors.card, borderRadius: 10 }} />
          <View style={{ width: '32%', height: 110, backgroundColor: colors.card, borderRadius: 10 }} />
        </View>
        <TouchableOpacity style={{ backgroundColor: colors.primary, padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 20 }}><Text style={{ color: '#fff', fontWeight: 'bold' }}>Upload New Post</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function SettingsScreen() {
  const { colors, isDark, setIsDark } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 16, paddingTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Settings</Text>
      <View style={{ backgroundColor: colors.card, borderRadius: 15, padding: 15, marginTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: colors.text, fontWeight: '600' }}>🌙 Dark Mode</Text>
          <Switch value={isDark} onValueChange={setIsDark} trackColor={{ true: colors.primary }} />
        </View>
        <View style={{ height: 1, backgroundColor: '#ddd', marginVertical: 12 }} />
        <Text style={{ color: colors.text }}>🔒 Account: No Phone / Email Visible ✓</Text>
        <Text style={{ color: colors.text, marginTop: 10 }}>🌍 All Countries Supported ✓</Text>
        <Text style={{ color: colors.text, marginTop: 10 }}>🗺️ Map Icon: Enabled ✓</Text>
        <Text style={{ color: colors.text, marginTop: 10 }}>🎥 Ome TV Icon: Enabled ✓</Text>
        <Text style={{ color: colors.text, marginTop: 10 }}>🎨 Color: Light Purple & White</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const colors = isDark ? darkColors : lightColors;
  if (showSplash) return <Splash onFinish={() => setShowSplash(false)} />;
  return (
    <ThemeContext.Provider value={{ colors, isDark, setIsDark }}>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: 'gray', tabBarStyle: { backgroundColor: colors.tab, borderTopWidth: 0, height: 65, paddingBottom: 8 } }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }} />
          <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="chatbubbles" color={color} size={size} /> }} />
          <Tab.Screen name="Reels" component={ReelsScreen} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="video-library" color={color} size={size} /> }} />
          <Tab.Screen name="Friends" component={FriendsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="people" color={color} size={size} /> }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} /> }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} /> }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
        <Text style={{ color: colors.sub, fontSize: 12 }}>2 mutual friends</Text>
