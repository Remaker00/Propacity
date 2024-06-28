import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../Styles/TaskDetailsScreenStyles';

const TaskDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { task } = route.params;

  const [status, setStatus] = useState(task.status);

  const deleteTask = async () => {
    try {
      let tasks = await AsyncStorage.getItem('tasks');
      tasks = tasks ? JSON.parse(tasks) : [];
      const updatedTasks = tasks.filter(t => t.id !== task.id);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTaskStatus = async (newStatus) => {
    try {
      let tasks = await AsyncStorage.getItem('tasks');
      tasks = tasks ? JSON.parse(tasks) : [];
      const updatedTasks = tasks.map(t => {
        if (t.id === task.id) {
          return { ...t, status: newStatus };
        }
        return t;
      });
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setStatus(newStatus);
    } catch (error) {
      console.error(error);
    }
  };

  const renderStatusOptions = () => {
    const options = ['To Do', 'In Progress', 'Done'];
    return options.map(option => (
      <TouchableOpacity
        key={option}
        style={[
          styles.statusOption,
          status === option.toLowerCase() && styles.selectedStatusOption
        ]}
        onPress={() => updateTaskStatus(option.toLowerCase())}
      >
        <Text style={styles.statusOptionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.dueDate}>{task.dueDate}</Text>
      </View>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.statusLabel}>Status:</Text>
      <View style={styles.statusRow}>
        {renderStatusOptions()}
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={deleteTask}>
        <Text style={styles.deleteButtonText}>Delete Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetailsScreen;
