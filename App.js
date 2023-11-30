import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={{height:120, width:340, backgroundColor:"#F0ECE5", flexDirection:"row", borderTopLeftRadius:5, borderTopRightRadius:5}}>

        <View style={{flex:4, alignItems:"center", justifyContent:"center"}}>
          <Image style={{ width:100, height:100, borderRadius:70}} source={require("./assets/pp.jpeg")}/>
        </View>

        <View style={{width:150}}>
          
            <View style={{height:30, justifyContent:"center"}}>
            <Text style={{color:"black", fontSize:15, fontWeight:"bold" }}>Emir Uçgun</Text>
            </View>

            <View style={{height:80}}>
            <ScrollView>
              <View style={styles.experienceItems}>
                <TouchableOpacity onPress={()=>
                Linking.openURL("https://www.mef.edu.tr/tr") }>
                  <Image style={styles.experienceIcons} source={require("./assets/mef_logo.jpg")}/>
                </TouchableOpacity>
                <Text style={styles.experienceText}>Computer Engineering Student at MEF University</Text>
              </View>

              <View style={styles.experienceItems}>
                <TouchableOpacity onPress={()=>
                Linking.openURL("https://gdsc.community.dev/mef-university") }>
                  <Image style={styles.experienceIcons} source={require("./assets/gdsc_logo.webp")}/>
                </TouchableOpacity>
                <Text style={styles.experienceText}>Core Team Member at GDSC MEF</Text>
              </View>

              <View style={styles.experienceItems}>
                <TouchableOpacity onPress={()=>
                Linking.openURL("https://media.tenor.com/DXu_d-6Pz4AAAAAC/napoleon-there-is-nothing-we-can-do.gif") }>
                  <Image style={styles.experienceIcons} source={require("./assets/napoleon.jpg")}/>
                </TouchableOpacity>
                <Text style={styles.experienceText}>I have no other experience</Text>
              </View>
            </ScrollView>
            </View>

        </View>
        <View style={{flex:2, alignItems:"center", justifyContent:"center", paddingBottom:10, paddingTop:5 }}>
              <ScrollView>
                <View style={{alignItems:"center", paddingTop:5}}>
                <TouchableOpacity onPress={()=>
                Linking.openURL("https://www.linkedin.com/in/emir-ucgun/") }>
                  <Image 
                  source={require("./assets/linkedIn_logo.webp")}
                  style={styles.socialIcons}
                  />
                </TouchableOpacity>
                

                <TouchableOpacity onPress={()=>
                Linking.openURL("https://medium.com/@emirucgun") }>
                  <Image 
                  style={styles.socialIcons}
                  source={require("./assets/medium_logo.png")}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>
                Linking.openURL("https://github.com/Emirucgun") }>
                  <Image 
                  style={styles.socialIcons}
                  source={require("./assets/github_logo.png")}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>
                Linking.openURL("https://www.hackerrank.com/profile/emirucgun") }>
                  <Image 
                  style={styles.socialIcons}
                  source={require("./assets/hackerrank_logo.png")}/>
                </TouchableOpacity>
                </View>
              </ScrollView>
        </View>

      </View>

      <View style={{backgroundColor:"#BBAB8C", width:340, borderBottomLeftRadius:5, borderBottomRightRadius:5, flexDirection:"row", alignItems:"center", justifyContent:"center" }}>
        <Text style={{fontSize: 8, color:"#F0ECE5"}}>emirucgun@gmail.com</Text>
        <Text style={{fontSize: 9, paddingLeft:15, fontWeight:"bold", color:"#F0ECE5"}}>·</Text>
        <Text style={{fontSize: 8, paddingLeft:15, color:"#F0ECE5"}}>Maslak/Istanbul</Text>
        <Text style={{fontSize: 9, paddingLeft:15, fontWeight:"bold", color:"#F0ECE5"}}>·</Text>
        <Text style={{fontSize: 8, paddingLeft:15, color:"#F0ECE5"}}>555 555 55 55</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  experienceItems:{
    flexDirection:"row", 
    width:120, 
    alignItems:"center", 
    paddingBottom:5
  },
  experienceIcons:{
    width:30, 
    height:30, 
    borderRadius:7
  },
  experienceText:{
    color:"black", 
    fontSize:10, 
    paddingLeft:5, 
    fontStyle:"italic"
  },
  socialIcons:{
    width:35, 
    height:35, 
    borderRadius:10, 
    marginBottom:5, 
    marginRight:5
  },
});
