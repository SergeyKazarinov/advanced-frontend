import Flex, { FlexProps } from '../Flex/Flex';

type THStackProps = Omit<FlexProps, 'direction'>;

const HStack = (props: THStackProps) => (
  // eslint-disable-next-line
  <Flex direction="row" {...props} />
);

export default HStack;
