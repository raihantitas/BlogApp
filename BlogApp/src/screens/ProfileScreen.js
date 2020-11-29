import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage, Image} from "react-native";
import { Text, Card, Button, Avatar } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderComponent";
import { removeData } from "../functions/AsyncStorageFunctions"; 
const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          
          <HeaderHome
            DrawerFunction={() => {
                props.navigation.toggleDrawer();
            }}
          />

            <Card>
                <View>
                    <Image source={require("../../assets/person1.jpg")} style={styles.imageStyle} resizeMode="contain" />
                </View>
                <View>
                    <Text style={styles.textStyle}>ID:  {auth.CurrentUser.sid}</Text>
                    <Text style={styles.textStyle}>Name:  {auth.CurrentUser.name}</Text>
                   
                    <Text style={styles.textStyle}>Email: {auth.CurrentUser.email}</Text>
                    <Text style={styles.textStyle}>Address: {auth.CurrentUser.address}</Text>
                    <Button
                    title = ' Delete Account'
                    type = "solid"
                    onPress={
                        async function(){
                            await removeData(auth.CurrentUser.email);
                             auth.setIsLoggedIn(false);
                }
            }
            />

                </View>
            </Card>

        </View>
      )}
    </AuthContext.Consumer>
  );
  
};

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30,
      color: "blue",
    },
    viewStyle: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  });

export default ProfileScreen;