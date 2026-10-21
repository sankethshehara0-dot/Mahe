import React, { useState, useEffect, createContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, ScrollView, Switch } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const ThemeContext = createContext();
const Tab = createBottomTabNavigator();

const lightColors = { bg: '#ffffff', card: '#f3e8ff', text: '#2d0a4e', sub: '#7c5cbf', tab: '#ffffff', primary: '#a78bfa' };
const darkColors = { bg: '#121212', card: '#1f1a2e', text: '#ffffff', sub: '#a78bfa', tab: '#1f1a2e', primary: '#a78bfa' };

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
          <Text style={{fontSize:22}}>🗺️</Text>
          <Text style={{fontSize:22}}>🎥</Text>
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
              <Text style={{fontSize:22}}>🤍</Text><Text style={{fontSize:22}}>💬</Text><Text style={{fontSize:22}}>✈️</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

function MessageScreen() {
  const { colors } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 16, paddingTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Messages</Text>
      <Text style={{ color: colors.sub, marginTop: 5, marginBottom: 15, fontSize: 12 }}>🔒 No Phone Numbers / Emails Shown - Privacy Protected</Text>
      <View style={{ flexDirection: 'row', padding: 12, backgroundColor: colors.card, borderRadius: 12, marginBottom: 10 }}>
        <View style={{ width: 45, height: 45, borderRadius: 25, backgroundColor: colors.primary }} />
        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: '600', color: colors.text }}>Amaya</Text><Text style={{ color: colors.sub }}>Hey! Mahe eka patta!
       😍</Text></View>
      </View>
      <TouchableOpacity style={{ backgroundColor: colors.primary, padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 25 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>🎥 Ome TV - Chat with Random Strangers</Text>
      </TouchableOpacity>
    </View>
  );
}
function ReelsScreen() {
  const { colors } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:60}}>▶️</Text>
      <Text style={{ color: colors.text, marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>Reels</Text>
    </View>
  );
}
function FriendsScreen() {
  const { colors } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 16, paddingTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Friends</Text>
      <View style={{ marginTop: 15, backgroundColor: colors.card, padding: 15, borderRadius: 12 }}>
        <Text style={{ color: colors.text, fontWeight: '600' }}>Saman Perera - Colombo</Text>
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
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarStyle: { backgroundColor: colors.tab, height: 65 } }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <Text>🏠</Text> }} />
          <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarIcon: () => <Text>💬</Text> }} />
          <Tab.Screen name="Reels" component={ReelsScreen} options={{ tabBarIcon: () => <Text>🎥</Text> }} />
          <Tab.Screen name="Friends" component={FriendsScreen} options={{ tabBarIcon: () => <Text>👥</Text> }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => <Text>👤</Text> }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: () => <Text>⚙️</Text> }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
