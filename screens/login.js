import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput } from "react-native";

export default class Login extends Component{
render(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"centre"}}>
     <Text>Login Screen</Text>
     <TextInput style={styles.TextInput} placeholder={"Enter Name"}/>
     <TextInput style={[styles.TextInput,{marginTop:20}]} placeholder={"Enter Age"}/>
     <TextInput style={[styles.TextInput,{marginTop:20}]} placeholder={"Enter Contact"}/>
     <TouchableOpacity style={styles.submitButton}><Text style={styles.submitButtonText}>Submit</Text></TouchableOpacity> 
        </View>
    )
}
}


const styles=StyleSheet.create({
    TextInput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#5653D4",
       
        color: "#FFFFFF"
      },
      submitButton: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F48D20",
        borderRadius: 15
      },
      submitButtonText: {
        fontSize: 24,
        color: "#FFFFFF",
      
      }
})






