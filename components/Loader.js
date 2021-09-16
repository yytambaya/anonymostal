import React, { useState } from 'react';
import {View, ActivityIndicator } from 'react-native';

const Loader = ({isLoading}) => {

    return (
        <View style={{flex : 1, justifyContent: 'center', alignItems: 'center',}}>
            { isLoading && <ActivityIndicator  color={'black'} />}
        </View>
    )
    
}

export default Loader;