import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const profile = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex justify-center items-center flex-1 flex-col gap-5'>
<FontAwesome6 name="user-large" size={24} color="white" />
      </View>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})