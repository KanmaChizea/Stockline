import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../Theme/Colors';
import {Typography} from '../../Components/Typography';
import {Spacer} from '../../Components/Spacer';
import {Button} from '../../Components/Button/Button';
import {GLOBALS} from '../../Constants/Global';
import {InputField} from '../../Components/Input/InputField';
import {layouts} from '../../Theme/Styles/Layout';
import {CountryDropdown} from '../../Components/Dropdown/CountryDropdown';
import Modal from 'react-native-modal/dist/modal';
import {BottomSheet} from '../../Components/Modal/BottomSheet';
import {useEnterPhoneViewModel} from './ViewModels/enter_phone_viewmodel';
import ListTile from '../../Components/ListTile/ListTile';
import {OnScreenNumericKeyboard} from '../../Components/Input/OnScreenNumericKeypad';
import {AuthStackScreenProps} from '../../Navigators/types';

export const EnterPhone = ({
  navigation,
}: AuthStackScreenProps<'EnterPhone'>) => {
  const controller = useEnterPhoneViewModel(navigation);
  return (
    <View style={styles.container}>
      <Typography size={20} weight="700" center>
        Enter your phone number
      </Typography>
      <Spacer height={8} />
      <Typography color={COLORS.GREY600} center>
        {"You'll receive a 4 digit code for the\nphone number verification"}
      </Typography>
      <Spacer height={40} />
      <InputField
        inputRef={controller.textFieldRef}
        isFocused={false}
        value={controller.phoneValue}
        placeholder="+1-000-000-000"
        keyboardType="numeric"
        editable={false}
        prefixComponent={
          <CountryDropdown
            icon={controller.selectedCountry.icon}
            showModal={controller.showModal}
          />
        }
      />
      <View style={layouts.fill} />
      <OnScreenNumericKeyboard onKeyPress={controller.handleKeyPress} />
      <Spacer height={16} />
      <Button title="Send Code" onPress={controller.verify} />
      <Modal isVisible={controller.isVisible}>
        <BottomSheet title="Select Country">
          <FlatList
            data={controller.countries}
            renderItem={({item}) => (
              <ListTile
                title={item.name}
                leading={item.icon}
                onPress={() => controller.selectCountry(item)}
              />
            )}
          />
        </BottomSheet>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    alignContent: 'center',
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
    paddingVertical: GLOBALS.SCREEN_V_PADDING,
  },
});
