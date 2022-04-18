import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tempData from '../store';
import colors from '../Colors';

const CarList = ({ list }) => {
  return (
    <TouchableOpacity key={list} onPress={() => tempData.deleteCar(list)}>
      <View style={[styles.listContainer, { backgroundColor: list.color }]}>
        <Text style={styles.listTitle} numberOfLines={1}>
          {list.name}
        </Text>
        <Text style={styles.id} numberOfLines={1}>
          id:{list.id}
        </Text>

        <View>
          <View>
            <Text style={styles.brand}>Марка: {list.CarName}</Text>
            <Text style={styles.brand}>Модель: {list.CarBrand}</Text>
            <Text style={styles.brand}>Мах Мощность: {list.CarPow}</Text>
            <Text style={styles.brand}>Мах обороты: {list.CarAround}</Text>
            <Text style={styles.brand}>Мах разгон: {list.CarSpeed}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 300,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 10,
  },
  id: {
    position: 'absolute',
    top: 5,
    left: 10,
    color: colors.white,
  },
  brand: {
    fontSize: 20,
    fontWeight: '200',
    color: colors.white,
  },
});

export default observer(CarList);
