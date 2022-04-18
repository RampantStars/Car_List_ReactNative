import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Colors';
import tempData from '../store';
import { observer } from 'mobx-react-lite';

const AddListModal = (props) => {
  const backgroundColors = [
    '#E9BDF0',
    '#DCECE1',
    '#E9BBAE',
    '#A496F8',
    '#5B738F',
    '#A9B37F',
    '#714F43',
  ];

  const [colorBg, setColorBg] = useState(backgroundColors[0]);
  const [name, setName] = useState('');
  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carPow, setCarPow] = useState(0);
  const [carAround, setCarAround] = useState(0);
  const [carSpeed, setCarSpeed] = useState(0);

  const createCar = () => {
    tempData.setInfoCar({
      id: Math.floor(Math.random() * 1000),
      name: name,
      color: colorBg,
      CarName: carName,
      CarBrand: carBrand,
      CarPow: carPow,
      CarAround: carAround,
      CarSpeed: carSpeed,
    });
    props.closeModal();
  };

  const renderColor = () => {
    return backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => setColorBg(color)}
        />
      );
    });
  };

  {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TouchableOpacity
          style={{ alignItems: 'flex-end', padding: 20 }}
          onPress={props.closeModal}
        >
          <AntDesign name='close' size={24} color={colors.black} />
        </TouchableOpacity>
        <View style={{ display: 'flex', alignSelf: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.title}> Create</Text>
          <TextInput
            returnKeyType='next'
            autoFocus={true}
            style={styles.input}
            placeholder='List Name?'
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            returnKeyType='next'
            autoFocus={true}
            style={styles.input}
            placeholder='Car Name?'
            onChangeText={(text) => setCarName(text)}
          />
          <TextInput
            returnKeyType='next'
            autoFocus={true}
            style={styles.input}
            placeholder='Brand Name?'
            onChangeText={(text) => setCarBrand(text)}
          />
          <TextInput
            returnKeyType='next'
            autoFocus={true}
            style={styles.input}
            placeholder='Max Power'
            onChangeText={(text) => setCarPow(text)}
          />
          <TextInput
            returnKeyType='next'
            autoFocus={true}
            style={styles.input}
            placeholder='Max Around'
            onChangeText={(text) => setCarAround(text)}
          />
          <TextInput
            returnKeyType='next'
            autoFocus={true}
            style={styles.input}
            placeholder='Max Speed'
            onChangeText={(text) => setCarSpeed(text)}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
            {renderColor()}
          </View>

          <TouchableOpacity
            style={[styles.createBt, { backgroundColor: colorBg }]}
            onPress={createCar}
          >
            <Text style={{ color: colors.white, fontWeight: '800', fontSize: 20 }}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.black,
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 10,
    paddingHorizontal: 16,
  },
  createBt: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});

export default observer(AddListModal);
