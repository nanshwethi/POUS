import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import MediaImgDetail from "./MediaImgDetail";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";

const MediaGrid = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className=" flex flex-wrap gap-1">
      <Modal
        opened={opened}
        size="lg"
        onClose={close}
        title="Strawberries.avif"
        centered
      >
        <MediaImgDetail />
      </Modal>

      <Group position="center">
        <Button onClick={open} className=" w-[200px] h-[150px] rounded-[5px]">
          <img src="/avocado.avif" className="relative media-img" alt="" >
          <div className=" absolute bottom-0 right-0 w-[60px] h-[50px] mx-auto hidden hover:flex justify-center items-center gap-3">
        <button
          className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] `}
        >
          <RiDeleteBinLine size={"1.5rem"} />
        </button>
        <button
          className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] `}
        >
          <BiCopy size={"1.5rem"} />
        </button>
      </div>
          </img>
        </Button>
      </Group>
      <Group position="center">
        <Button onClick={open} className=" w-[200px] h-[150px] rounded-[5px]">
          <img src="/lemon.avif" className="media-img" alt="" />
        </Button>
      </Group>
      <Group position="center">
        <Button onClick={open} className=" w-[200px] h-[150px] rounded-[5px]">
          <img src="/lime.avif" className="media-img" alt="" />
        </Button>
      </Group>
    </div>
  );
};

export default MediaGrid;
