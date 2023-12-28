import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PressableOpacity} from '../../Components/Button/PressableOpacity';
import {Typography} from '../../Components/Typography';
import {COLORS} from '../../Theme/Colors';
import {layouts} from '../../Theme/Styles/Layout';
import {GLOBALS} from '../../Constants/Global';
import {OnboardingSlide, useOnboardingViewModel} from './viewmodel';
import {Button} from '../../Components/Button/Button';
import {Spacer} from '../../Components/Spacer';

export const Onboarding = () => {
  const {
    login,
    register,
    slides,
    onLayout,
    onMomentumScrollEnd,
    flatListRef,
    activeSlideIdx,
  } = useOnboardingViewModel();

  return (
    <SafeAreaView style={layouts.flexGrow}>
      <PressableOpacity style={styles.skip} onPress={login}>
        <Typography weight="500" size={16} color={COLORS.PRIMARY_BASE}>
          Skip
        </Typography>
      </PressableOpacity>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={layouts.fill}
        renderItem={({item}: {item: OnboardingSlide}) => {
          return (
            <View>
              <Image source={item.image} style={styles.image} />
              <Typography size={24} weight="700" style={styles.slideTitle}>
                {item.title}
              </Typography>
              <Typography
                size={16}
                color={COLORS.GREY600}
                style={styles.slideText}>
                {item.text}
                <Typography color={COLORS.PRIMARY_BASE} weight="500">
                  {item.emphasisText}
                </Typography>
              </Typography>
            </View>
          );
        }}
        onLayout={onLayout}
        onMomentumScrollEnd={onMomentumScrollEnd}
        initialNumToRender={slides.length}
      />
      <View style={styles.paginationDots}>
        {slides.length > 1 &&
          slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === activeSlideIdx ? styles.activeDotStyle : styles.dotStyle,
              ]}
            />
          ))}
      </View>
      <Spacer height={32} />
      <View style={styles.buttonContainer}>
        <Button title="Log in" outline style={layouts.fill} onPress={login} />
        <Spacer width={16} />
        <Button title="Get Started" style={layouts.fill} onPress={register} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  skip: {
    ...layouts.alignItemsEnd,
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
    paddingVertical: GLOBALS.SCREEN_V_PADDING,
  },
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 0,
  },
  slide: {
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
    paddingVertical: 56,
  },
  slideTitle: {
    textAlign: 'center',
    paddingBottom: 11,
  },
  slideText: {
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  paginationDots: {
    width: 50,
    height: 6,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.GREY300,
  },
  dot: {
    width: 25,
    height: 6,
    borderRadius: 50,
  },
  activeDotStyle: {
    backgroundColor: COLORS.PRIMARY_BASE,
  },
  dotStyle: {
    backgroundColor: COLORS.GREY300,
  },
  image: {
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    height: '70%',
  },
  buttonContainer: {
    ...layouts.row,
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
  },
});
