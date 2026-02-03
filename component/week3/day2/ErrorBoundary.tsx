import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default function FakeErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  if (hasError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Something went wrong: {error?.message}</Text>
        <Button
          title="Retry"
          onPress={() => {
            setHasError(false);
            setError(null);
          }}
        />
      </View>
    );
  }

  return <>{children}</>;
}
