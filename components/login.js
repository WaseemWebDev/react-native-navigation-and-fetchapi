import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <View
        style={{
          backgroundColor: '#F8F9FA',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          height: '100%',
        }}>
        <View style={{height: '80%', alignSelf: 'center', width: '80%'}}>
          <Text
            style={{
              fontSize: 50,
              textAlign: 'center',
              height: '19%',
              marginBottom: 35,
              fontWeight: 'bold',
            }}>
            Login
          </Text>

          <Image
            style={{width: 270, height: 160, alignSelf: 'center'}}
            source={{
              uri:
                'https://www.pngitem.com/pimgs/m/15-155460_web-development-mobile-app-development-animation-hd-png.png',
            }}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Enter Email"
            onChangeText={(email) => setEmail(email)}
            defaultValue=""
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 20,
            }}
            // defaultValue="You can type in me"
          />
          <TextInput
            style={{height: 40}}
            placeholder="Enter password"
            onChangeText={(password) => setPassword(password)}
            defaultValue=""
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              marginTop: 30,
              borderRadius: 10,
            }}
            // defaultValue="You can type in me"
          />
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={{backgroundColor: 'blue', padding: 20, borderRadius: 20}}
              onPress={() => {
                alert(email);
                alert(password);
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
          style={{backgroundColor: 'green', marginTop:20, width:150, padding: 9, borderRadius: 20}}
          onPress={() => navigation.navigate('FetchApi')}>
          <Text style={{color:"white", alignSelf:"center"}}>show Data</Text>
        </TouchableOpacity>
         
        </View>
      </View>
    </>
  );
}
