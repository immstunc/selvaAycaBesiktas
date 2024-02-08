import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

const data=[
  {
    id: '1',
    postTitle: 'Arkadaşlık İsteği' ,
    postImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/150px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png',
    userName: 'BesiktasKralDoctor',
    notifications: 'BesiktasKralDoctor seninle arkadaş olmak istiyor.',
    time: '10:00'
  },
  {
    id: '2',
    postTitle: 'Gollll!!' ,
    postImage: 'https://media.gelbura.com/photos/blog/6/cover-w720h0.jpg',
    userName: 'System Notification',
    notifications: 'Bjk 2-0 Karagumruk',
    time: '12:00'
  },
  {
    id: '3',
    postTitle: 'Ligde yükselme' ,
    postImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/150px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png',
    userName: 'Kartal Haber',
    notifications: 'Beşiktaş  ligde 4e yükseldi.',
    time: '15:00'
  },
  {
    id: '4',
    postTitle: 'Olumsuz Hava Koşulları' ,
    postImage: 'https://help.apple.com/assets/63FFF4F425D106794D09CC92/63FFF4F525D106794D09CC99/tr_TR/dc7f8cdb406dc7704cccb5188ddc28c1.png',
    userName: 'HavaIstanbul',
    notifications: 'olumsuz hava koşulları sebebiyle maç iptal edildi.',
    time: '20:00'
  },
  {
    id: '5',
    postTitle: 'Arkadaşlık İsteği' ,
    postImage: 'https://reactnative.dev/img/tiny_logo.png',
    userName: 'DoctorWho',
    notifications: 'DoctorWho seninle arkadaş olmak istiyor.',
    time: '01:00'
  }
  
]

const NotificationScreen = () => {
  return (
    <View>
      <View style={{backgroundColor: 'white'}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize:40, marginStart:20}}>Bildirimler</Text>
      </View>
      
      <FlatList
      data={data}
      keyExtractor={(item, index)=>{return index.toString()}}
      renderItem={({item})=>{
        return(
          <View style={styles.container}>
            <View style={styles.headerImageView}>
              <Image style={styles.headerImage} source={{uri: item.postImage}}/>
            </View>

            <View style={{flexDirection:'row', marginLeft:10}}>
              <View>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:20 }}>
                  {item.userName}
                </Text>
                <View>
                <Text style={{color: 'black'}}>{item.notifications}</Text>
              </View>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:20 }}>
                  {item.time}
                </Text>
              </View>
              <View> 
              </View>
              
            </View>
           
          </View>
        )
      }}
      />
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerImage: {
    width:'100%',
    height:'100%',
    borderRadius: 10
  },
  headerImageView: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginLeft: 15

  }
});