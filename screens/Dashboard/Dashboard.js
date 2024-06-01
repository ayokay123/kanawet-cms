import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>$14,000</Text>
            <Text style={styles.cardDescription}>This month sales</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>2,500</Text>
            <Text style={styles.cardDescription}>Inventory on hand</Text>
          </View>
        </View>
        <View style={styles.fullWidthCard}>
          <Text style={styles.cardTitle}>100</Text>
          <Text style={styles.cardDescription}>Total clients</Text>
        </View>
      </View>
      <View style={styles.clients}>
        <Text style={styles.title}>Clients</Text>
        <View style={styles.clientCard}>
          <View>
            <Text style={styles.clientName}>John Doe</Text>
            <Text style={styles.clientEmail}>email@email.com</Text>
          </View>
          <View style={styles.profileIcon}>
            <EvilIcons name="user" size={40} color="#FFF" />
          </View>
        </View>
        <View style={styles.clientCard}>
          <View>
            <Text style={styles.clientName}>John Doe</Text>
            <Text style={styles.clientEmail}>email@email.com</Text>
          </View>
          <View style={styles.profileIcon}>
            <EvilIcons name="user" size={40} color="#FFF" />
          </View>
        </View>
        <View style={styles.clientCard}>
          <View>
            <Text style={styles.clientName}>John Doe</Text>
            <Text style={styles.clientEmail}>email@email.com</Text>
          </View>
          <View style={styles.profileIcon}>
            <EvilIcons name="user" size={40} color="#FFF" />
          </View>
        </View>
        <View style={styles.clientCard}>
          <View>
            <Text style={styles.clientName}>John Doe</Text>
            <Text style={styles.clientEmail}>email@email.com</Text>
          </View>
          <View style={styles.profileIcon}>
            <EvilIcons name="user" size={40} color="#FFF" />
          </View>
        </View>
        <View style={styles.clientCard}>
          <View>
            <Text style={styles.clientName}>John Doe</Text>
            <Text style={styles.clientEmail}>email@email.com</Text>
          </View>
          <View style={styles.profileIcon}>
            <EvilIcons name="user" size={40} color="#FFF" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: "#121A21",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "#94ADC7",
    borderRadius: 10,
    width: "48%",
    height: 85,
    padding: 10,
    justifyContent: "center",
  },
  fullWidthCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#94ADC7",
    borderRadius: 10,
    width: "100%",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  cardDescription: {
    color: "#94ADC7",
    fontSize: 14,
  },
  clients: {
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  clientCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  clientName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "medium",
  },
  clientEmail: {
    color: "#94ADC7",
    fontSize: 14,
  },
});

export default Dashboard;
