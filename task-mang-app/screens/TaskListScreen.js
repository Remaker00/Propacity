import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/TaskListScreenStyles';

const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadTasks();
  }, []);

  const filterTasks = () => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search tasks"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filterTasks()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TaskDetails', { task: item })}>
            <View style={styles.taskItem}>
              <View style={styles.taskRow}>
                <Text style={[styles.taskTitle, item.status === 'done' && styles.taskTitleDone]}>
                  {item.title}
                </Text>
                <Text style={styles.taskDueDate}>{item.dueDate}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('TaskCreation')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskListScreen;
