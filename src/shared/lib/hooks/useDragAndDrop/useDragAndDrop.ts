import { useDrag, useDrop } from 'react-dnd';

type TDragType = 'articleCreate' | '';

interface IUseDragAndDrop<T> {
  accept?: TDragType;
  type?: TDragType;
  dragItem?: T;
  dropCallback?: (item: T) => void;
  hoverDropCallback?: (item: T) => void;
}

/**
 * Хук для использования библиотеки React-dnd
 * @template T - Тип данных для перетаскиваемого элемента.
 *
 * @param {Object} options - параметры хука
 * @param {TDragType} [options.accept] - Тип, который хук должен принимать для использования в useDrop.
 * @param {TDragType} [options.type] - Тип перетаскиваемого элемента. Используется в useDrag.
 * @param {T} [options.dragItem] - Перетаскиваемый элемент. Используется в useDrag.
 * @param {function(T): void} [options.dropCallback] - Callback, вызываемый при бросании элемента.
 * @param {function(T): void} [options.hoverDropCallback] - Callback, вызываемый при наведении на зону сброса.
 * @returns {Object} Объект с данными хука.
 * @property {boolean} isHover - Флаг, указывающий, находится ли курсор над зоной сброса.
 * @property {T} getItem - Функция, возвращающая текущий перетаскиваемый элемент.
 * @property {refObject} dropTarget - Функция-цель для использования в компоненте, чтобы определить зону сброса.
 * @property {refObject} dragRef - Ссылка для использования в компоненте, чтобы определить перетаскиваемый элемент.
 * @property {boolean} isDrag - Флаг, указывающий, перетаскивается ли в данный момент элемент.
 */
const useDragAndDrop = <T>({
  accept = '',
  type = '',
  dragItem,
  dropCallback,
  hoverDropCallback,
}: IUseDragAndDrop<T>) => {
  const [{ isHover, getItem }, dropTarget] = useDrop({
    accept,
    drop(item: T) {
      dropCallback?.(item);
    },
    hover(item: T) {
      hoverDropCallback?.(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      getItem: monitor.getItem(),
    }),
  });

  const [{ isDrag }, dragRef] = useDrag({
    type,
    item: dragItem,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  return {
    isHover,
    getItem,
    dropTarget,
    dragRef,
    isDrag,
  };
};

export default useDragAndDrop;
