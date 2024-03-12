import React from "react";
import {
  Card,
  Image,
  Stack,
  Text,
  Heading,
  Button,
  CardBody,
  CardHeader,
  CardFooter,
  Spacer,
} from "@chakra-ui/react";
import { GoalIcon, ReceiptIndianRupee } from "lucide-react";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
export default function CatogoryCard() {
  return (
    <div>
      <div className="overflow-hidden w-60 h-60 bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <figure>
          <img
            src="https://picsum.photos/id/69/800/600"
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        <div className="p-6">
          <header>
            <h3 className="text-xl font-medium text-slate-700">
              Memories of the past
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
        </div>
      </div>
    </div>
  );
}

export function ListCard({
  overview,
  description,
  poster_path,
  original_title,
  original_language,
  id,
}) {
  return (
    <div>
      <Link to={`/search/${id}`}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          h={"200px"}
          w={"450px"}
          position={"relative"}
        >
          <Image
            objectFit="cover"
            h={"100%"}
            w={"150px"}
            maxW={{ base: "100%", sm: "200px" }}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{original_title}</Heading>

              <Text py="2" fontSize={"10px"}>
                {overview}
              </Text>
            </CardBody>

            <CardFooter>
              <Spacer />
              <Button
                variant="outline"
                w={"120px"}
                h={"30px"}
                m={"10px"}
                colorScheme="blue"
                position={"absolute"}
                bottom={"0"}
                right={"0"}
                onClick={() => console.log(id)}
              >
                <Text fontSize={"10px"}>View</Text> &nbsp; &emsp;
                <GoLinkExternal size={"16"} />
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Link>
    </div>
  );
}
