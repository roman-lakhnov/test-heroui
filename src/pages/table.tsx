import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";

import DefaultLayout from "@/layouts/default";
import { getCookie, Meme, memsData, setCookie } from "@/config/utils";

export default function TablePage() {
  const [data, setData] = useState<Meme[]>(() => {
    const savedData = getCookie("memesData");

    return savedData ? savedData : memsData;
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);
  const onClose = () => {
    setCurrentMeme(null);
    onOpenChange();
  };
  const isValidMeme = (meme: Meme) => {
    if (
      !meme.name ||
      meme.name.trim().length < 3 ||
      meme.name.trim().length > 100
    )
      return false;

    const imageRegex = /^https?:\/\/.+\.(jpg)$/i;

    if (!imageRegex.test(meme.imageUrl)) return false;

    if (meme.likes < 0 || meme.likes > 99 || !Number.isInteger(meme.likes))
      return false;

    return true;
  };

  const handleEdit = (meme: any) => {
    setCurrentMeme(meme);
    onOpen();
  };

  const handleSave = () => {
    if (currentMeme) {
      setData((prevData) => {
        const updatedData = prevData.map((item) =>
          item.id === currentMeme.id ? currentMeme : item,
        );

        setCookie("memesData", updatedData, 7);

        return updatedData;
      });
    }
    onClose();
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 ">
        <div className="shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 table-fixed">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="w-1/12 px-2 py-3 text-center" scope="col">
                  Id
                </th>
                <th className="w-4/12  px-2 py-3 " scope="col">
                  Назва
                </th>
                <th className="w-4/12 px-2 py-3 " scope="col">
                  Картинка
                </th>
                <th
                  className="w-2/12 lg:w-1/12 px-2 py-3 text-center"
                  scope="col"
                >
                  Кількість лайків
                </th>
                <th
                  className="w-4/12 lg:w-1/12  px-2 py-3 text-center "
                  scope="col"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((meme) => (
                <tr key={meme.id} className="bg-white border-b">
                  <td className="px-2 py-4 text-center">{meme.id}</td>
                  <td className="px-2 py-4 break-words">{meme.name}</td>
                  <td className="px-2 py-4 break-words">
                    <a href={meme.imageUrl} rel="noreferrer" target="_blank">
                      {meme.imageUrl}
                    </a>
                  </td>
                  <td className="px-2 py-4 text-center">{meme.likes}</td>
                  <td className="px-2 py-4 text-center">
                    <Button onPress={() => handleEdit(meme)}>Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {currentMeme && (
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Редагувати властивості мема
                  </ModalHeader>
                  <ModalBody>
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="name"
                      >
                        ID
                      </label>
                      <Input
                        disabled
                        required
                        id="id"
                        max="100"
                        min="1"
                        step="1"
                        type="number"
                        value={String(currentMeme.id)}
                        onChange={(e) =>
                          setCurrentMeme({
                            ...currentMeme,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="name"
                      >
                        Назва
                      </label>
                      <Input
                        required
                        id="name"
                        maxLength={100}
                        minLength={3}
                        type="text"
                        value={currentMeme.name}
                        onChange={(e) =>
                          setCurrentMeme({
                            ...currentMeme,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="imageUrl"
                      >
                        Картинка (URL)
                      </label>
                      <Input
                        required
                        id="imageUrl"
                        pattern="https?://.+\.(jpg)"
                        type="url"
                        value={currentMeme.imageUrl}
                        onChange={(e) =>
                          setCurrentMeme({
                            ...currentMeme,
                            imageUrl: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="likes"
                      >
                        Кількість лайків
                      </label>
                      <Input
                        required
                        id="likes"
                        max={99}
                        min={0}
                        step="1"
                        type="number"
                        value={String(currentMeme.likes)}
                        onChange={(e) =>
                          setCurrentMeme({
                            ...currentMeme,
                            likes: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      disabled={!isValidMeme(currentMeme)}
                      onPress={handleSave}
                    >
                      Зберегти
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </section>
    </DefaultLayout>
  );
}
