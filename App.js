import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import colors from './Colors';
import { AntDesign } from '@expo/vector-icons';
import tempData from './tempData';
import CarList from './components/CarList';
import AddListModal from './components/AddListModal';

export default class App extends React.Component {
  state = {
    addCarVisible: false,
  };

  toggleAddCarModal() {
    this.setState({ addCarVisible: !this.state.addCarVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addCarVisible}
          onRequestClose={() => this.toggleAddCarModal()}
        >
          <AddListModal closeModal={() => this.toggleAddCarModal()} />
        </Modal>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Cars<Text style={{ fontWeight: '500', color: colors.blue }}>List</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addBtn} onPress={() => this.toggleAddCarModal()}>
            <AntDesign name="plus" size={16} color={colors.blue}></AntDesign>
          </TouchableOpacity>

          <Text style={styles.add}>Add Car</Text>
        </View>

        <View style={{ height: 280, paddingLeft: 32 }}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CarList list={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 30,
  },
  addBtn: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
});
