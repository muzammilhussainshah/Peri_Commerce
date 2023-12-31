// @app
import React, {
  useState
} from 'react';
import {
  Image,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import OutlinedTextInput from './Components/OutlinedTextInput';
import Button from '../../components/Button';
import { styles } from './styles';
import { handleResetPassword } from './Components/CallBack';

const ForgetPass = ({ navigation }) => {

  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={.8}
          onPress={() => navigation.pop()}
          style={styles.backBtnContainer}>
          <AntDesign
            size={RFPercentage(2)}
            color={Colors.primary}
            name={'left'} />
          <Title
            title={`Back`}
            color={Colors.primary}
            weight={'600'}
            type={'Poppin-16'} />
        </TouchableOpacity>
        <Image
          style={styles.loginIcon}
          source={require("../../assets/SplashIcon2.png")} />

        <Title
          title={`Reset your password`}
          color={Colors.black}
          weight={'600'}
          type={'Poppin-20'} />
        <View style={styles.subHeading}>
          <Title
            title={`Enter your email address to reset your password.`}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-16'} />
        </View>

        <OutlinedTextInput
          val={email}
          onChange={(val) => setEmail(val)}
          title={'Email'} />

        <View style={styles.btnWrapper}>
          <Button
            callBack={() => handleResetPassword(email, navigation)}
            title={'Reset Password'}
            primary />
        </View>

        <View style={styles.rowWrapper}>
          <Title
            title={`Remember your password . `}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-14'} />
          <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Login')}>
            <Title
              title={`Sign in`}
              color={Colors.primary}
              weight={'600'}
              type={'Poppin-14'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};
export default ForgetPass;
