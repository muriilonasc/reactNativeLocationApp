import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import {Feather,AntDesign} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
            name='Login'
            component={Login}
            options={{
                tabBarIcon: ({color, size}) => <AntDesign name='user' color={color} size={size}/>
            }}
            />
            <Tab.Screen
            name='Register'
            component={Register}
            options={{
                tabBarIcon: ({color, size}) => <AntDesign name='adduser' color={color} size={size}/>
            }}
            />
            <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>
            }}
            />
        </Tab.Navigator>
    )
}