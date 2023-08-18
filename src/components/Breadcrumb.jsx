import { Breadcrumbs, Anchor } from '@mantine/core';
import PropTypes from "prop-types";

const Breadcrumb = ({breadcrumbItems}) => {
    Breadcrumb.propTypes={
        'breadcrumbItems':PropTypes.any
    }
    const items = breadcrumbItems.map((item, index) => (
        <Anchor 
        // href={item.href}
         key={index}>
          {item.title}
        </Anchor>
      ));

  return (
    <div>
        <Breadcrumbs separator="/" mt="xs" className=' text-[14px] text-white opacity-70 mb-[30px] select-none	'>{items}</Breadcrumbs>
    </div>
  )
}

export default Breadcrumb