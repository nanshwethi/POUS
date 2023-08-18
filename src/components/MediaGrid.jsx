import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import MediaImgDetail from "./MediaImgDetail";

const MediaGrid = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className=" flex flex-wrap gap-5">
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
          <img src="/avocado.avif" className="media-img" alt="" />
        </Button>
      </Group>
      <Link to={"/media/media-grid"}>
        <img src="/lemon.avif" className="media-img" alt="" />
      </Link>
      <Link to={"/media/media-grid"}>
        <img src="/lime.avif" className="media-img" alt="" />
      </Link>
    </div>
  );
};

export default MediaGrid;
