import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import type { CompositeScreenProps } from "@react-navigation/native";

export type HomeStackParamsList = {
  Main: { id: string };
  Details: { detail: string };
};

export type RootTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamsList>;
  Data: { userId: string };
};

export const Tab = createBottomTabNavigator<RootTabParamList>();
export const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

export interface DataScreenProps
  extends BottomTabScreenProps<RootTabParamList, "Data"> {}

export interface HomeScreenProps
  extends CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, "Home">,
    NativeStackScreenProps<HomeStackParamsList>
  > {}

export interface HomeDetailsScreenProps
  extends CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamsList, "Details">,
    HomeScreenProps
  > {}

export interface HomeMainScreenProps
  extends CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamsList, "Main">,
    HomeScreenProps
  > {}
