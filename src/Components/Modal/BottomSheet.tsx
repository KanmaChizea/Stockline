import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Typography} from '../Typography';

type BottomSheetProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
};
export const BottomSheet = ({title, children}: BottomSheetProps) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.bottomSheet}>
        <View style={styles.header}>
          <View style={styles.headerBar} />
        </View>
        <View style={styles.content}>
          <Typography size={18} weight="700" center>
            {title}
          </Typography>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: -25,
    marginVertical: -16,
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%', // Set maximum height as per your requirement
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerBar: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  content: {
    paddingBottom: 20,
  },
});
