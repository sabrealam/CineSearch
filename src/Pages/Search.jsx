import {
  HStack,
  Input,
  Spacer,
  Box,
  SkeletonCircle,
  SkeletonText,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { SearchCheck, SearchCode, SearchIcon } from "lucide-react";
import React from "react";
import CatogoryCard, { ListCard } from "../Components/CatogoryCard";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Search() {
  let [search, setSearch] = useState("");
  let [movies, setMovies] = useState([]);
  let [isLoading , setIsLoading] = useState(false)

  console.log(movies);

  function searchForMovie(e) {
    setSearch(e.target.value);
  }
  async function makeAPI(query) {
    setIsLoading(true)
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0ed074f3c2d5a02a05fba9b31f1aeedb&query=${query}`
      );
      setMovies(res.data.results);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }
  var timerId;
  useEffect(() => {
    if(timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
    makeAPI(search);
   }, 1000);

   return () => {
    clearTimeout(timerId)
   }
  }, [search]);

  return (
    <div style={{ height: "100vh" }}>
      <HStack>
        <Spacer></Spacer>
        <Input
          placeholder="Search"
          variant="outline"
          w={"30%"}
          h={"35"}
          onChange={searchForMovie}
        />
        <SearchIcon />
        <Spacer/> 
      </HStack>
      <Box p="12"> 
      {isLoading ? <SkeletonText mt="10" noOfLines={15} spacing="4" skeletonHeight="2" /> : <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {movies?.map((movie) => (
            <ListCard key={movie.id} {...movie} />
          ))}
        </Grid> }   
      </Box>
    </div>
  );
}
