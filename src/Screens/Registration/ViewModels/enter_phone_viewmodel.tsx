import React, {useRef, useState} from 'react';
import {Icons} from '../../../Theme/Icons';
import useModal from '../../../Hooks/modal';
import useFormFields from '../../../Hooks/formfields';
import {Alert, TextInput} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../Navigators/types';

type Country = {
  name: string;
  icon: React.ReactNode;
};

export const useEnterPhoneViewModel = (
  navigator: NativeStackNavigationProp<
    AuthStackParamList,
    'EnterPhone',
    undefined
  >,
) => {
  const {isVisible, hideModal, showModal} = useModal();
  const {values, handleValueChange} = useFormFields(1);
  const textFieldRef = useRef<TextInput>(null);

  const countries: Country[] = [
    {
      name: 'Ghana',
      icon: <Icons.Ghana />,
    },
    {
      name: 'Nigeria',
      icon: <Icons.Nigeria />,
    },
    {
      name: 'USA',
      icon: <Icons.USA />,
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[2]);

  const selectCountry = (country: Country) => {
    hideModal();
    setSelectedCountry(country);
  };

  const phoneValue = values[0];

  const handleKeyPress = (value: string) => {
    if (textFieldRef.current) {
      if (value === '*') {
        return;
      }
      if (value === 'delete') {
        const newValue = phoneValue.slice(0, -1);
        handleValueChange({index: 0, value: newValue});
        textFieldRef.current.focus();
        textFieldRef.current?.setNativeProps({text: newValue});
      } else {
        const newValue = `${phoneValue}${value}`;
        handleValueChange({index: 0, value: newValue});
        textFieldRef.current.focus();
        textFieldRef.current?.setNativeProps({text: newValue});
      }
    }
  };

  const verify = () => {
    if (phoneValue) {
      navigator.navigate('VerifyCode');
    } else {
      Alert.alert('Error', 'Please fill all required fields', [{text: 'OK'}], {
        cancelable: false,
      });
    }
  };

  return {
    countries,
    selectCountry,
    showModal,
    isVisible,
    selectedCountry,
    phoneValue,
    handleKeyPress,
    verify,
    textFieldRef,
  };
};
