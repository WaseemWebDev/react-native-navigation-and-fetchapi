
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,Button
} from 'react-native';

const Register =  ()=> {
  return (
    <>
    
     <View style={{backgroundColor:"#F8F9FA",justifyContent:"center",textAlign:"center",width:"100%",height:"100%"}}>
     <View style={{height:"60%",alignSelf:"center",width:"80%"}}>
     <Text style={{fontSize:40,textAlign:"center",marginTop:30, height:"30%"}}>Register</Text>
     <TextInput
     style={{height: 40}}
     placeholder="Enter Email"
    //  onChangeText={text => setText(text)}
     defaultValue=""
     
    style={{backgroundColor:"#eaeaea",borderColor: 'gray',
    borderWidth: 1}}
  // defaultValue="You can type in me"
   />
   <TextInput
     style={{height: 40}}
     placeholder="Enter password"
    //  onChangeText={text => setText(text)}
     defaultValue=""
    style={{backgroundColor:"#eaeaea",
    marginTop:20,
    borderColor: 'gray',
    borderWidth: 1}}
  // defaultValue="You can type in me"
   />
   <View style={{marginTop:20}}>
          <Button
          color = "green"
          onPress={() => {
           alert("hello")
          }}
            title="Register"
          />
        </View>
   
    
     </View>
   </View>
     
      
    </>
  );
};



export default Register;
