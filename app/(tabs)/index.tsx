import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { SearchBar } from '@/components/searchBar'
import axios from 'axios'
import { NewsDataType } from '@/types'

type Props = {}

const Page = (props: Props) => {
  const {top: safeTop } = useSafeAreaInsets();
  const [BreakingNews, setBreakingNews] = useState<NewsDataType []>([]);

  const getBreakingNews = async () => {
    try{
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=in&language=en&image=1&removeduplicate=1&size=5`
      const response = await axios .get(URL);

      if( response && response.data){
        setBreakingNews(response.data.results);
      }
    }
  }

  return (
    <View style={[styles.container, {paddingTop: safeTop}]}>
     <Header />
     <SearchBar />
     {BreakingNews.map((item, inde ) => {})}
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})