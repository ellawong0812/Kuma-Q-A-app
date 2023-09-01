import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Category from '../components/Category';

export default function HomeScreen(){
    const categories=[
        {
            id:"1",
            title:"Rilakkuma",
            image:require('../assets/rilakkuma.png'),
        },
        {
            id:"2",
            title:"Korilakkuma",
            image:require('../assets/white.png'),
        },
        {
            id:"3",
            title:"Chicken",
            image:require('../assets/chicken.png'),
        },
        {
            id:"4",
            title:"chairoikoguma",
            image:require('../assets/honey.png'),
        },
]
    
    return(
        <SafeAreaView >
            <Text style={{fontWeight:"bold", fontSize:25}}>Select one type of question:</Text>
            <FlatList
            data={categories}
            renderItem={({item}) => (
                <Category image={item.image} title={item.title}/>
            )}
            keyExtractor={(item) => item.id}/>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({

});