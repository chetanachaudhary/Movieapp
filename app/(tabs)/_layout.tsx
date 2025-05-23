import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabIcon = ({focused,title,icon}:any) => {
   if (focused){
      
  
  return (
   
    <View className="flex flex-row w-full flex-1 bg-[#aa4aeb] min-w-[112px] min-h-14 m-4  justify-center items-center rounded-full overflow-hidden">
      <FontAwesome name={icon} size={20} color="black" />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </View>
  );
    }
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <FontAwesome name={icon} size={20} color="#A8B5DB" />
      </View>
    )
};

const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel:false,
      tabBarItemStyle:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'

      },
      tabBarStyle:{
        backgroundColor:'#0f0D23',
        borderRadius:50,
        marginHorizontal:20,
        marginBottom:36,
        height:52,
        position:"absolute",
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#0f0d23'
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
             <TabIcon focused={focused} icon="home" title="Home" />,
         
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
          <TabIcon focused={focused} icon="search" title="Search" />,
        }}
      />
      <Tabs.Screen
        name="save"
        options={{ title: "Save", headerShown: false, tabBarIcon: ({ focused }) => 
          <TabIcon focused={focused} icon="save" title="Save" />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false, tabBarIcon: ({ focused }) => 
          <TabIcon focused={focused} icon="user" title="Profile" />,
        }}
      />
    </Tabs>
  );
};

export default _layout;
