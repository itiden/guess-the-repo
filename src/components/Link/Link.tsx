import React from 'react';
import { Linking, Text } from 'react-native';

interface LinkProps {
  url: string;
}

export const Link = ({ url, children }: React.PropsWithChildren<LinkProps>) => (
  <Text className="text-violet-700" onPress={() => Linking.openURL(url)}>
    {children}
  </Text>
);
