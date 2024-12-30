import axios from 'axios'
import { NewsDataType } from '@/types'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import React, { useEffect, useState } from 'react'
import BreakingNews from '@/components/BreakingNews'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {}

const Page = (props: Props) => {
  const {top: safeTop } = useSafeAreaInsets();
  const [BreakingNews, setBreakingNews] = useState<NewsDataType []>([]);
  
  useEffect(()=>{
    getBreakingNews()
  }, []);

  const getBreakingNews = async () => {
    try{
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=in&language=en&image=1&removeduplicate=1&size=5`
      const response = await axios .get(URL);

      if( response && response.data){
        setBreakingNews(response.data.results);
      }
    }catch(err : any)  {
      console.log('Error Message: ', err.message);
    }
  }

  return (
    <View style={[styles.container, {paddingTop: safeTop}]}>
     <Header />
     <SearchBar />
    <BreakingNews  newsList={BreakingNews}/>
    </View>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
