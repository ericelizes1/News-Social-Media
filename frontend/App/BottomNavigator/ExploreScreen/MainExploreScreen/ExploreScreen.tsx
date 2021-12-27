import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

interface ExploreFocusProps {
    category: number,
    
}

const ExploreScreen:FC = () => {

    return(
        <View>
            <Text>For You</Text>
        </View>
    )
}

export default ExploreScreen;