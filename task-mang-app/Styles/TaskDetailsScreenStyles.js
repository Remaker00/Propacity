import { StyleSheet } from 'react-native';

const TaskDetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dueDate: {
    fontSize: 16,
    color: 'gray',
  },
  description: {
    marginBottom: 20,
    fontSize: 16,
  },
  statusLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  statusRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statusOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  selectedStatusOption: {
    backgroundColor: 'lightblue',
    borderColor: 'blue',
  },
  statusOptionText: {
    fontSize: 16,
    color: 'black',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskDetailsScreenStyles;
