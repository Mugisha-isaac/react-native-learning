import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,FlatList} from 'react-native';
import ProductList from './ProductList';

const data = require('../../assets/data/products.json');

const ProductContainer = ()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
     setProducts(data);
     return ()=>{
         setProducts([])
     }
    },[])
    return(
        <View>
           <View>
           <FlatList 
           horizontal
            data={products}
            renderItem={({item})=><ProductList 
            key={item.id}
            item={item}
            />}
            keyExtractor={item=>item.name}
            />
           </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    mainDiv:{
        // borderWidth:3,
        // color:'red',
        marginTop:100
    }
    

})
export default ProductContainer;