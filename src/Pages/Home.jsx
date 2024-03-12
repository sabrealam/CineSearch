import React from "react";
import Img from "../assets/Main.svg";
import { Button } from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useFirebase } from "../Firebase";
export default function Home() {
  let {setData} = useFirebase();

  
 
  return (
    <div>
      <section class="text-gray-600 body-font h-auto bg-gray-100">
        <div class="container px-5 py-24 mx-auto flex justify-between flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                "Film Discovery at Your Fingertips."
              </h1>
              <div class="leading-relaxed">
                "Welcome to CineSearch – your ultimate destination for
                lightning-fast movie searches! Join millions of users on our
                high-traffic app, delivering instant results for the latest and
                greatest films. Discover, explore, and never miss a
                blockbuster!"
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-xl text-gray-900">10M</h2>
              <p className="leading-relaxed text-xs">Searches/Week</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-xl text-gray-900">3</h2>
              <p class="leading-relaxed text-xs">minute/Visitor</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-xl text-gray-900">1000</h2>
              <p class="leading-relaxed text-xs">Redirect/Day</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-xl text-gray-900">
                100000
              </h2>
              <p class="leading-relaxed text-xs">Movies</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://img.freepik.com/free-vector/camera-crew-preparing-film_1262-20623.jpg?t=st=1709729291~exp=1709732891~hmac=cd866be0bf17ca0c8959fb2b0dbf9ac19581085371096fc00147f8f11f09bec3&w=1060"
              alt="stats"
            />
          </div>
          <Link to={"/search"}>
            <Button
              variant={"outline"}
              colorScheme="success"
              w={"400px"}
              h={"45px"}
            >
              Search Here &emsp;&emsp; <SearchIcon />
            </Button>
          </Link>
        </div>
      </section> 
    </div>
  );
}
