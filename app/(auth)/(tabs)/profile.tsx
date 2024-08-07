import { Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSession } from "@/app/ctx";

export default function ProfileScreen() {
    const { signOut } = useSession();
    const user = {
        name: "Victoria Robertson",
        nickname: "Vicky",
        location: "Manila",
        age: "30 yrs Old",
        occupation: "Electronics and Communication Engineer",
        profilePhoto: "path/to/profile/photo.jpg", // replace with the actual path to the profile photo
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={{ uri: user.profilePhoto }} style={styles.profilePhoto} />
                <Text style={styles.profileName}>{user.name}</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile Photo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Personal Information</Text>
                <View style={styles.infoContent}>
                    <Text><Text style={styles.label}>Name: </Text>{user.name}</Text>
                    <Text><Text style={styles.label}>Nickname: </Text>{user.nickname}</Text>
                    <Text><Text style={styles.label}>Location: </Text>{user.location}</Text>
                    <Text><Text style={styles.label}>Age: </Text>{user.age}</Text>
                    <Text><Text style={styles.label}>Occupation: </Text>{user.occupation}</Text>
                </View>
                <TouchableOpacity style={styles.editInfoButton}>
                    <Text style={styles.editInfoButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.moreContainer}>
                <Text style={styles.moreTitle}>More</Text>
                <Text style={styles.moreSubtitle}>What would you like to do?</Text>
                <View style={styles.moreOptions}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.optionButtonText}>General Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.optionButtonText}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={signOut}>
                        <Text style={styles.optionButtonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFA500", // orange background
    },
    profileHeader: {
        alignItems: "center",
        marginTop: 50,
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#fff",
    },
    editButton: {
        marginVertical: 10,
    },
    editButtonText: {
        color: "#00f",
    },
    infoContainer: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginVertical: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    infoContent: {
        marginBottom: 10,
    },
    label: {
        fontWeight: "bold",
    },
    editInfoButton: {
        alignItems: "flex-end",
    },
    editInfoButtonText: {
        color: "#00f",
    },
    moreContainer: {
        width: "90%",
        paddingVertical: 20,
    },
    moreTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    moreSubtitle: {
        color: "#fff",
        marginBottom: 20,
    },
    moreOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    optionButton: {
        width: "30%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    optionButtonText: {
        color: "#000",
    },
});
