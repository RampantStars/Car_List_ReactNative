import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Colors';

const CarList = ({ list }) => {
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>

      <View>
        <View>
          <Text style={styles.brand}>Марка: {list.car.map((car) => car.name)}</Text>
          <Text style={styles.brand}>Модель: {list.car.map((car) => car.brand)}</Text>
          <Text style={styles.brand}>Мах Мощность: {list.car.map((car) => car.maxPow)}</Text>
          <Text style={styles.brand}>Мах обороты: {list.car.map((car) => car.MaxAround)}</Text>
          <Text style={styles.brand}>Мах разгон: {list.car.map((car) => car.timeSpeed)}</Text>
        </View>
      </View>
    </View>
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
  brand: {
    fontSize: 20,
    fontWeight: '200',
    color: colors.white,
  },
});

export default CarList;
