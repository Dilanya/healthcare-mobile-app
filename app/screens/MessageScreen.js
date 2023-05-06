import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../components/Chat';
import LinearGradient from 'react-native-linear-gradient';

import ChatScreen from './chatScreen';
const Messages = [
  {
    id: '1',
    userName: 'Joy Donny',
    userImg: require('../assets/Images/Icon/user.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there',
  },
  
];

const MessagesScreen = ({navigation}) => {
    return (
    <LinearGradient style={styles.container} colors={['#4B76AB', '#689BB9', '#A6C1CD']}>
        <Text
                 
                 style={{ fontSize: 46, fontFamily: 'Roboto Black',color: '#ffffff' }}>Message</Text>
      
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      
      </LinearGradient>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});