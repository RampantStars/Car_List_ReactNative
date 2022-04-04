import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Colors';
import tempData from '../tempData';

export default class AddListModal extends Component {
  backgroundColors = ['green', 'red', 'orange', 'purple', 'yellow', 'blue', 'aqua'];
  state = {
    name: '',
    color: this.backgroundColors[0],
    CarName: '',
    CarBrand: '',
    CarPow: '',
    CarAround: '',
    CarSpeed: '',
  };

  createCar = () => {
    const { name, color, CarName, CarBrand, CarPow, CarAround, CarSpeed } = this.state;
    tempData.push({
      name,
      color,
      car: [
        { name: CarName },
        { brand: CarBrand },
        { maxPow: CarPow },
        { maxAround: CarAround },
        { timeSpeed: CarSpeed },
      ],
    });

    this.setState({ name: '' });
    this.props.closeModal();
  };

  renderColor() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ alignItems: 'flex-end', padding: 20 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>
        <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.title}> Create</Text>
          <TextInput
            style={styles.input}
            placeholder="List Name?"
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Car Name?"
            onChangeText={(text) => this.setState({ CarName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Brand Name?"
            onChangeText={(text) => this.setState({ CarBrand: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Max Power"
            onChangeText={(text) => this.setState({ CarPow: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Max Around"
            onChangeText={(text) => this.setState({ CarAround: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Max Speed"
            onChangeText={(text) => this.setState({ CarSpeed: text })}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
            {this.renderColor()}
          </View>

          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
            onPress={this.createCar}
          >
            <Text style={{ color: colors.white, fontWeight: '600' }}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  contsiner: {
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
  create: {
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
