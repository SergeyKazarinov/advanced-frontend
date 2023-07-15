import Flex, { FlexProps } from '../Flex/Flex';

type TVStackProps = Omit<FlexProps, 'direction'>

const VStack = (props: TVStackProps) => {
  const { align = 'start' } = props;
  return (
    // eslint-disable-next-line
    <Flex direction="column" {...props} align={align} />
  );
};

export default VStack;
