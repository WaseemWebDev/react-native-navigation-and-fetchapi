import React,{useEffect,useState,} from 'react'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
  } from 'react-native';
  import Item from './Item';

export default function FetchApi() {
    const [fetchData,setFetchData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [refreshing, setRefreshing] = useState(false)
 
useEffect(()=>{

    function getData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setFetchData(json))
}
    
    getData()
},[refreshing])

const refresh = () => {
    setRefreshing(true);
    fetchData.push({
      id: Math.random(8),
      title: 'Loading Item',
    });
    setRefreshing(false);
  };

const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };
  
    return (
        <SafeAreaView style={styles.container}>
        
        <FlatList
          data={fetchData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={refresh}
          refreshing={refreshing}
          extraData={selectedId}
          onEndReached={refresh}
          onEndReachedThreshold={1}
          maxToRenderPerBatch={3}
          initialNumToRender={8}
          windowSize={4}

        />
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }
  });
