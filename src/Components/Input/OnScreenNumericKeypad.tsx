import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Typography} from '../Typography';
import {Icons} from '../../Theme/Icons';
import {PressableOpacity} from '../Button/PressableOpacity';

type Key = {
  type: 'value' | 'special';
  value: string;
  icon?: React.ReactNode;
  action?: () => {};
};

export const OnScreenNumericKeyboard = ({
  onKeyPress,
}: {
  onKeyPress: (value: string) => void;
}) => {
  const keys: Key[] = [
    {type: 'value', value: '1'},
    {type: 'value', value: '2'},
    {type: 'value', value: '3'},
    {type: 'value', value: '4'},
    {type: 'value', value: '5'},
    {type: 'value', value: '6'},
    {type: 'value', value: '7'},
    {type: 'value', value: '8'},
    {type: 'value', value: '9'},
    {type: 'value', value: '*'},
    {type: 'value', value: '0'},
    {type: 'special', value: 'delete', icon: <Icons.Delete />},
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={keys}
        scrollEnabled={false}
        numColumns={3}
        renderItem={({item}) => (
          <PressableOpacity
            style={styles.button}
            onPress={() => onKeyPress(item.value)}>
            {item.type === 'value' ? (
              <Typography weight="500" size={24} center>
                {item.value}
              </Typography>
            ) : (
              item.icon
            )}
          </PressableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
});
