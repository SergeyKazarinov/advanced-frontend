import Flex, { FlexProps } from '../Flex/Flex';

type THStackProps = Omit<FlexProps, 'direction'>;

const HStack = (props: THStackProps) => (
  // eslint-disable-next-line
  <Flex direction="row" {...props} />
);

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default HStack;
