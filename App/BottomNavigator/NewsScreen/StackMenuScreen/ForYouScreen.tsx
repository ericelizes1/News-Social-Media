import React, { FC } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Text, Header, Icon, Badge } from 'react-native-elements';

import StackMiniCard from './ForYouScreen/StackMiniCard';

const ForYouScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header 
        backgroundColor='white'
        containerStyle={styles.headerContainer}
        centerComponent={
          //Copperplate-Bold
          //Palatino
          <Text h4 style={{fontFamily: 'Copperplate-Bold'}}>Your Stacks</Text>
        }
        rightComponent={
          <Pressable
            onPress={() => navigation.navigate('SubscriptionMenuScreen')}
          >
            <Icon name='bookmark-multiple-outline' type='material-community' color='black' size={35}/>
            <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: 0, right: 2 }}
            />
          </Pressable>
        }
      />
      <ScrollView style={styles.container}>
        <StackMiniCard 
          size={2} 
          title='Mobile Device Reviews' 
          username='linustechtips'
          imgUrl='https://techcrunch.com/wp-content/uploads/2020/09/2020-09-10-083646924.jpg?w=1390&crop=1'
        />
        <StackMiniCard 
          size={2}
          title='Washington Football Team'
          username='devendesai1'
          imgUrl='https://thespun.com/wp-content/uploads/2020/12/GettyImages-1289992812-775x465.jpg'
        />
        <StackMiniCard 
          size={3}
          title='When Cars Can Fly'
          username='officialelonmusk'
          imgUrl='https://cdn.mos.cms.futurecdn.net/9fXs6VTtvcuokKj6zMW4WT-1024-80.jpg.webp'
        />
        <StackMiniCard 
          size={3}
          title='When Cars Can Fly'
          username='officialelonmusk'
          imgUrl='https://cdn.mos.cms.futurecdn.net/9fXs6VTtvcuokKj6zMW4WT-1024-80.jpg.webp'
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  container: {
    padding:10,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
})
export default ForYouScreen;