import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  errorText: {
    color: 'red', // Error message color
    marginBottom: 5, // Add spacing below error message
  },
  inputError: {
    borderColor: 'red', // Border color for input with error
  },
});

export default styles;
