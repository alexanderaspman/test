import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Pressable
} from "react-native";
import Comp from "./src/Comp";

export default function App() {
  const [iButton1, setIButton1] = useState(0);
  const [iButton2, setIButton2] = useState(0);
  const [iButton3, setIButton3] = useState(0);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.iconLoggo}
            source={require("./assets/house.png")}
          />
        </View>

        <View>
          <Text
            style={{
              color: "rgb(62, 168 ,178)",
              fontSize: 15,
              fontWeight: "bold"
            }}
          >
            SmartHome
          </Text>
        </View>
      </View>
      <Text style={styles.titles}>Rooms</Text>
      <View style={styles.room}>
        <View style={styles.rooms}>
          <Image
            style={styles.roomsImage}
            source={require("./assets/living-room.png")}
          />
          <Text style={styles.roomsFont}>Living room</Text>
        </View>
        <View style={styles.rooms}>
          <Image
            style={styles.roomsImage}
            source={require("./assets/bed.png")}
          />

          <Text style={styles.roomsFont}>Bedroom </Text>
        </View>
        <View style={styles.rooms}>
          <Image
            style={styles.roomsImage}
            source={require("./assets/kitchen.png")}
          />

          <Text style={styles.roomsFont}>Kitchen </Text>
        </View>
      </View>
      <Text style={styles.titles}>Devices</Text>
      <View style={styles.firstButton}>
        <View style={{ flex: 9, flexDirection: "row" }}>
          <View
            style={[
              styles.redGeen,
              { backgroundColor: isEnabled1 ? "green" : "red" }
            ]}
          ></View>
          <View>
            <Text style={{ marginLeft: 10 }}>Living room lamp</Text>
          </View>
        </View>{" "}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Pressable onPress={() => setIButton1(1) + setIsEnabled1(true)}>
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center",
                justifyItems: "center"
              }}
            >
              <Text style={{ color: "blue" }}>On</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setIButton1(0) + setIsEnabled1(false)}>
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "blue" }}>Off</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.firstButton}>
        <View style={{ flex: 9, flexDirection: "row" }}>
          <View
            style={[
              styles.redGeen,
              { backgroundColor: isEnabled ? "green" : "red" }
            ]}
          ></View>
          <View>
            <Text style={{ marginLeft: 10 }}>Heater</Text>
          </View>
        </View>{" "}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Pressable onPress={() => setIButton2(1) + setIsEnabled(true)}>
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center",
                justifyItems: "center"
              }}
            >
              <Text style={{ color: "blue" }}>On</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setIButton2(0) + setIsEnabled(false)}>
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "blue" }}>Off</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.firstButton}>
        <View style={{ flex: 9, flexDirection: "row" }}>
          <View
            style={[
              styles.redGeen,
              { backgroundColor: isEnabled2 ? "green" : "red" }
            ]}
          ></View>
          <View>
            <Text style={{ marginLeft: 10 }}>TV</Text>
          </View>
        </View>{" "}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Pressable onPress={() => setIButton3(1) + setIsEnabled2(true)}>
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center",
                justifyItems: "center"
              }}
            >
              <Text style={{ color: "blue" }}>On</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setIButton3(0) + setIsEnabled2(false)}>
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "blue" }}>Off</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Text style={{ fontWeight: "bold" }}>
        Total devices are on {iButton1 + iButton2 + iButton3}{" "}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "start"
  },
  titles: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 23,
    fontWeight: "bold"
  },

  room: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  roomsFont: {
    paddingTop: 15
  },

  iconLoggo: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  roomsImage: {
    width: 70,
    height: 70
  },
  rooms: {
    backgroundColor: "rgb(62, 168 ,178)",
    justifyItems: "spacearound",
    height: 120,
    width: 105,
    alignItems: "center",
    justifyContent: "center"
  },
  firstButton: {
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgb(251, 217, 52)",
    marginBottom: 15
  },
  redGeen: {
    width: 20,
    height: 20,
    backgroundColor: "red"
  },
  ImageiconLoggo: {
    width: 60,
    height: 60
  }
});
