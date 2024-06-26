// routes.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cards from './pages/produtosAdicionados';
import Interface from './pages/index';
import ListasCriadas from './pages/listasCriadas';
import Inicio from './pages/inicio';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import perfil from './pages/perfil';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="inicio"
                component={Inicio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="index"
                component={Interface}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="produtosAdicionados"
                component={Cards}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="listasCriadas"
                component={ListasCriadas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
            name="perfil"
            component={perfil}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
