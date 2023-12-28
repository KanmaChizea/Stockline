import {useRef, useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {IMAGES} from '../../Theme/Images';
import {useNavigation} from '@react-navigation/native';

export type OnboardingSlide = {
  order: number;
  title: string;
  text: string;
  image: ImageSourcePropType;
  emphasisText?: string;
};

type Size = {
  width: number;
  height: number;
};
export const useOnboardingViewModel = () => {
  const flatListRef = useRef<FlatList<OnboardingSlide>>(null);
  const navigation = useNavigation();

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [size, setSize] = useState<Size>({width: 0, height: 0});

  const slides: OnboardingSlide[] = [
    {
      order: 1,
      title: 'Investing for Everybody',
      text: 'We let you easily invest in fractional shares\nfor as little as ',
      image: IMAGES.ONBOARDING1,
      emphasisText: '$1',
    },
    {
      order: 2,
      title: 'Get Better Returns',
      text: "Invest in the world's leading brands and\nunlock amazing returns.",
      image: IMAGES.ONBOARDING2,
    },
  ];

  const login = () => {
    navigation.reset({routes: [{name: 'Auth', params: {screen: 'Login'}}]});
  };

  const register = () =>
    navigation.reset({routes: [{name: 'Auth', params: {screen: 'Register'}}]});

  const onLayout = ({nativeEvent}: LayoutChangeEvent) => {
    const {width, height} = nativeEvent.layout;
    if (width !== size.width || height !== size.height) {
      // Set new width to update rendering of pages
      setSize({width, height});
      // Set new scroll position
      const func = () => {
        flatListRef?.current?.scrollToOffset({
          offset: activeSlideIdx * width,
          animated: false,
        });
      };
      setTimeout(func, 0); // Must be called like this to avoid bugs
    }
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.x;
    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    const newIndex = Math.round(offset / size.width);

    if (newIndex === activeSlideIdx) {
      // No page change, don't do anything
      return;
    }

    setActiveSlideIdx(newIndex);
  };

  return {
    login,
    register,
    activeSlideIdx,
    slides,
    onLayout,
    onMomentumScrollEnd,
    flatListRef,
  };
};
