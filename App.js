import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import colors from './Colors';
import { AntDesign } from '@expo/vector-icons';
import store from './store';
import CarList from './components/CarList';
import AddListModal from './components/AddListModal';
import { observer } from 'mobx-react-lite';

const App = () => {
  const [visible, setVisible] = useState(false);
  console.log(store);
  {
    return (
      <View style={styles.container}>
        <Modal animationType='slide' visible={visible} onRequestClose={() => setVisible(!visible)}>
          <AddListModal closeModal={() => setVisible(!visible)} />
        </Modal>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Cars<Text style={{ fontWeight: '500', color: colors.blue }}>List</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addBtn} onPress={() => setVisible(!visible)}>
            <AntDesign name='plus' size={16} color={colors.blue}></AntDesign>
          </TouchableOpacity>

          <Text style={styles.add}>Add Car</Text>
        </View>

        <View style={{ height: 280, paddingLeft: 32 }}>
          <FlatList
            data={store._carInfo}
            keyExtractor={(item) => item.Name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CarList list={item} />}
          />
        </View>
      </View>
    );
  }
};

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

export default observer(App);
