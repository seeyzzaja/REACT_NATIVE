import React,{useState} from "react";
import { View,Text,StyleSheet,Modal,TouchableOpacity,TextInput } from "react-native";

export default function Log(){
    const [modal,setModal]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return(
        <View style={{backgroundColor:"#ff1385",flex:1}}>
          <View style={{ flex: 1 }}>
            <View style={style.screen}>
              <View style={style.centerGroup}>
                <Text style={style.title}>ImmoDrops</Text>

                <TouchableOpacity
                  onPress={() => setModal(true)}
                  style={style.login1}
                >
                  <Text style={style.loginText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Modal visible={modal} animationType='slide'>
              <View style={{ flex: 1 }}>

                <View style={style.modalHeader}>
                  <Text style={style.modalTitle}>ImmoDrops</Text>
                </View>

               
                <View style={style.modalBody}>
                    <Text style={{fontSize:30}}>Sig in</Text>
                  <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={setEmail}
                    style={style.input}
                  />

                  <TextInput 
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                    style={style.input}
                    secureTextEntry
                  />

                  <TouchableOpacity
                    onPress={()=>setModal(false)}
                    style={style.loginmodal}>
                    <Text>Login</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </Modal>
          </View>
        </View>
    )
}

const style = StyleSheet.create({
  
  input:{
    width: '90%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    fontSize: 16
  },

  loginmodal:{
    backgroundColor:"#ff1385",
    alignItems:'center',
    justifyContent:'center',
    height:40,
    width:120,
    borderRadius:15,
    marginTop:20
  },

  screen: {
    flex: 1,
    backgroundColor: '#ff1385',
    justifyContent: 'center',
    alignItems: 'center'
  },

  centerGroup: {
    alignItems: 'center'
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20   
  },

  login1: {
    backgroundColor: '#e0e0e0',
    height: 42,
    width: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginText: {
    fontSize: 16,
    fontWeight: '500'
  },

  modalHeader: {
  height: 140,
  backgroundColor: '#ff1385',
  justifyContent: 'flex-end',
  paddingBottom: 24,
  paddingHorizontal: 24,
//   borderBottomLeftRadius: 28,
//   borderBottomRightRadius: 28,
  elevation: 6,           
  shadowColor: '#000',    
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 6,
},

modalTitle: {
  fontSize: 28,
  fontWeight: '700',
  color: '#fff',
},

modalBody: {
  flex: 1,
  backgroundColor: '#ffffff',
  marginTop: -20,          // efek card naik ke header
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  paddingTop: 32,
  paddingHorizontal: 20,
  alignItems: 'center',
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
},
});
