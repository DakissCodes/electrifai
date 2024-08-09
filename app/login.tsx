import { Button, StyleSheet, TextInput, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSession } from "./ctx";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Login() {
  const { signIn } = useSession();
  
  const handleLogin = () => {
    // Add your login logic here
    signIn();
    // Ensure the user is authenticated before navigating
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Project ElectriAI</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#D4820C"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#D4820C"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
     <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFB315",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#D4820C",
    padding: 10,
    margin: 10,
    borderRadius: 4,
    color: "#000",
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    backgroundColor: "#FFB315",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    color: "#000",
  },
  signupLink: {
    color: "#FFB315",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
