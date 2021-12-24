import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

interface ExploreScreenContentProps {
    category: any,
    topic: number,
    
}

const ExploreScreenContent:FC<ExploreScreenContentProps> = (props:ExploreScreenContentProps) => {

    return(
        <View>
            <Text>For You</Text>
        </View>
    )
}

export default ExploreScreenContent;