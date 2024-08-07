import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useSession } from "@/app/ctx";

export default function ProfileScreen() {
    const { signOut } = useSession();

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Profile Screen</Text>
        <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
        />
        <Button
            title="Sign Out"
            onPress={() => {
            signOut();
            }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
