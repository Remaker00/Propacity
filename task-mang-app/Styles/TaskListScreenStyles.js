import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  taskItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskTitle: {
    fontSize: 18,
    flex: 1,
  },
  taskTitleDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  taskDueDate: {
    fontSize: 18,
    color: '#888',
  },
  taskDescription: {
    marginTop: 5,
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    paddingTop: 6,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
});
