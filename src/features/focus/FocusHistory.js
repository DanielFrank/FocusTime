import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';



export const FocusHistory = ({ history }) => {

  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;
  
  const renderItem = ({item}) => <Text style={styles.historyItem}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on</Text>
      <FlatList data={history} renderItem={renderItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex: 1
  },
  historyItem: {
    fontSize: fontSizes.md,
    color: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
});
