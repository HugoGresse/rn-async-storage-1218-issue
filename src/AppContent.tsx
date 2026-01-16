import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from './persistReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  countText: {
    fontSize: 72,
    fontWeight: '200',
    color: '#eaeaea',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#e94560',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#e94560',
  },
  resetButtonText: {
    color: '#e94560',
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export const AppContent = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const clicks = useSelector((state: any) => state.count?.clicks ?? 0);
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <Text style={styles.label}>Total Clicks</Text>
      <Text style={styles.countText}>{clicks}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Click Me!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={() => dispatch(reset())}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
