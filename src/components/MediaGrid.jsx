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

      <Group position="center" className=" relative">
          <Button
            onClick={open}
            className=" w-[200px] h-[150px] rounded-[5px] bg-[url('/strawberries.avif')] bg-center bg-cover myBtn"
          >
            <span className={`myBtnGroup duration-500	ease-in-out z-20 absolute bottom-0 right-5 w-[60px] h-[50px] mx-auto flex justify-center items-center gap-3`}>
            <span
              className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] opacity-90`}
            >
              <RiDeleteBinLine size={"1.5rem"} />
            </span>
            <span
              className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] opacity-90`}
            >
              <BiCopy size={"1.5rem"} />
            </span>
          </span>
          </Button>
          <Button
            onClick={open}
            className=" w-[200px] h-[150px] rounded-[5px] bg-[url('/orange.avif')] bg-center bg-cover myBtn"
          >
            <span className={`myBtnGroup duration-500	ease-in-out z-20 absolute bottom-0 right-5 w-[60px] h-[50px] mx-auto flex justify-center items-center gap-3`}>
            <span
              className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] opacity-90`}
            >
              <RiDeleteBinLine size={"1.5rem"} />
            </span>
            <span
              className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] opacity-90`}
            >
              <BiCopy size={"1.5rem"} />
            </span>
          </span>
          </Button>
          <Button
            onClick={open}
            className=" w-[200px] h-[150px] rounded-[5px] bg-[url('/lemon.avif')] bg-center bg-cover myBtn"
          >
            <span className={`myBtnGroup duration-500	ease-in-out z-20 absolute bottom-0 right-5 w-[60px] h-[50px] mx-auto flex justify-center items-center gap-3`}>
            <span
              className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] opacity-90`}
            >
              <RiDeleteBinLine size={"1.5rem"} />
            </span>
            <span
              className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] opacity-90`}
            >
              <BiCopy size={"1.5rem"} />
            </span>
          </span>
          </Button>
      </Group>
    </div>
  );
};

export default MediaGrid;
