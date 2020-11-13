import React from 'react';
import {ScrollView, ImageBackground, Dimensions, Image, View} from 'react-native';
import {Text, Button, SafeAreaView, Header, Icon} from '@components';
import styles from './styles';
import {Images, useTheme} from '@config';
import {useTranslation} from 'react-i18next';

const { width, height } = Dimensions.get('window');

export default function OverViewCar({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  
  return (
    <ScrollView 
    ref={ref => {
      _scrollView = ref;
    } }
    horizontal={true} pagingEnabled={true} 
    >
      <ImageBackground
      source={Images.car5}
      resizeMode="cover"
      style={{width, height}}>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <Header
          title=""
          renderLeft={() => {
            return (
              <Icon
                name="arrow-left"
                size={20}
                color={colors.primary}
                enableRTL={true}
              />
            );
          }}
          onPressLeft={() => {
            navigation.goBack();
          }}
        />
        
        <ScrollView contentContainerStyle={styles.contain}>
          <Text header whiteColor>
            {t('car_sologan')}
          </Text>
          <Text body1 whiteColor>
            Extras, additional services and expert advice: Sports & Luxury Cars
            has a solution for all questions related to luxury car hire.
          </Text>
          <Button
            full
            style={{marginTop: 20}}
            onPress={() => {
              navigation.navigate('Car');
            }}>
            {t('join_now')}
          </Button>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>

      <ImageBackground
      source={Images.dietsehat1}
      resizeMode="cover"
      style={{width, height}}>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <Header
          title=""
          renderLeft={() => {
            return (
              <Icon
                name="arrow-left"
                size={20}
                color={colors.primary}
                enableRTL={true}
              />
            );
          }}
          onPressLeft={() => {
            navigation.goBack();
          }}
        />
        
        <ScrollView contentContainerStyle={styles.contain}>
        <Button
            full
            style={{marginTop: 20}}
            onPress={() => {
              navigation.navigate('Car');
            }}>
            {t('join_now')}
          </Button>
          <Text header whiteColor style={[styles.textWithShadow]}>
            {t('car_sologan')}
          </Text>
          {/* <Text body1 whiteColor>
            Extras, additional services and expert advice: Sports & Luxury Cars
            has a solution for all questions related to luxury car hire.
          </Text> */}
          
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
          
    </ScrollView>
    
  );
}
