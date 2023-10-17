import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamList } from '@/Navigation/RootStackNavigator';

export type CharacterProps = {
  navigation?: StackNavigationProp<StackParamList, 'Character'>;
  route: RouteProp<StackParamList, 'Character'>;
};
