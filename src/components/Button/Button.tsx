import { cx } from 'class-variance-authority';
import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  label: string;
  marginBottom?: boolean;
  onPress: () => void;
};

export const Button = memo(({ marginBottom, label, onPress }: Props) => (
  <TouchableOpacity
    className={cx(
      'w-full rounded-2xl bg-violet-700 px-2 py-5',
      marginBottom ? 'mb-5' : null,
    )}
    onPress={onPress}
  >
    <Text className="text-xl text-center text-white">{label}</Text>
  </TouchableOpacity>
));
