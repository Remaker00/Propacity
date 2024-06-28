import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/TaskCreationScreenStyles';

const TaskCreationScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigation = useNavigation();
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [dueDateError, setDueDateError] = useState('');

  // Function to format date input as YYYY-MM-DD
  const formatDueDate = (input) => {
    // Remove non-numeric characters
    const cleaned = input.replace(/\D/g, '');

    // Format as YYYY-MM-DD
    const formatted = cleaned.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    return formatted;
  };

  const saveTask = async () => {
    let hasError = false;

    if (!title.trim()) {
      setTitleError('Title cannot be empty');
      hasError = true;
    } else {
      setTitleError('');
    }

    if (!description.trim()) {
      setDescriptionError('Description cannot be empty');
      hasError = true;
    } else {
      setDescriptionError('');
    }

    if (!dueDate.trim()) {
      setDueDateError('Due Date cannot be empty');
      hasError = true;
    } else {
      setDueDateError('');
    }

    if (hasError) {
      return;
    }

    const formattedDate = formatDueDate(dueDate); // Format the due date

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      dueDate: formattedDate,
      status: 'todo', // Default status
    };

    try {
      let tasks = await AsyncStorage.getItem('tasks');
      tasks = tasks ? JSON.parse(tasks) : [];
      tasks.push(newTask);
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{titleError}</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={[styles.input, !!titleError && styles.inputError]}
      />
      <Text style={styles.errorText}>{descriptionError}</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, !!descriptionError && styles.inputError]}
      />
      <Text style={styles.errorText}>{dueDateError}</Text>
      <TextInput
        placeholder="Due Date (YYYY-MM-DD)"
        value={dueDate}
        onChangeText={setDueDate}
        onBlur={() => setDueDate(formatDueDate(dueDate))} // Format on blur
        style={[styles.input, !!dueDateError && styles.inputError]}
        keyboardType="numeric"
      />
      <Button title="Save Task" onPress={saveTask} />
    </View>
  );
};

export default TaskCreationScreen;
