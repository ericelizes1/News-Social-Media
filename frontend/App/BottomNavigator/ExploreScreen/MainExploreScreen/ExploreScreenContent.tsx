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
        {/*(() => {
            switch (props.topic) {
            case 1:
                return <ForYouExploreScreen category={category}/>
            case 2:
                return <TrendingExploreScreen/>
            case 3:
                return <PostExploreScreen/>
            case 4:
                return <ArticleExploreScreen/>
            }
        })()*/}
        </View>
    )
}

export default ExploreScreenContent;