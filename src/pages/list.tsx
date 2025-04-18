import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
import { getCookie, Meme, memsData } from "@/config/utils";

export default function ListPage() {
  const savedData = getCookie("memesData");
  const data: Meme[] = savedData ? savedData : memsData;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((meme) => (
            <Card key={meme.id} className="w-full">
              <div className="flex items-center justify-center">
                <Image
                  alt={meme.name}
                  className="w-full h-56 object-contain p-3 mx-auto"
                  src={meme.imageUrl}
                />
              </div>
              <CardBody>
                <h2 className="text-xl font-semibold">{meme.name}</h2>
                <p className="text-sm text-gray-500">Likes: {meme.likes}</p>
              </CardBody>
              <CardFooter>
                <a
                  className="w-full"
                  href={meme.imageUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="w-full" color="default">
                    View Meme
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
