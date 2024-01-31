import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
} from "react";

const GroupContext = createContext();

export const SelectionGroup = ({
  SelectedComponent,
  UnselectedComponent,
  defaultItem,
  children,
  className,
  SelectedItemMask,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const itemsRef = useRef([]);
  const groupRef = useRef(null);
  const [selectedItemRect, setSelectedItemRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const resizeObserver = useRef();
  useEffect(() => {
    setSelectedItem(defaultItem);
  }, [defaultItem]);

  useEffect(() => {
    if (resizeObserver.current) resizeObserver.current.disconnect();
    resizeObserver.current = new ResizeObserver(() => {
      console.log(itemsRef.current, selectedItem);
      if (itemsRef.current[selectedItem]) {
        const itemRect = itemsRef.current[selectedItem].getBoundingClientRect();
        const groupRect = groupRef.current.getBoundingClientRect();
        setSelectedItemRect({
          x: itemRect.x - groupRect.x,
          y: itemRect.y - groupRect.y,
          width: itemRect.width,
          height: itemRect.height,
        });
      }
    });
    resizeObserver.current.observe(groupRef.current);
  }, [itemsRef, groupRef, selectedItem]);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className={`${className} relative`} ref={groupRef}>
      <GroupContext.Provider
        value={{
          SelectedComponent: SelectedComponent,
          UnselectedComponent: UnselectedComponent,
        }}
      >
        <div
          className={`absolute w-[100px] h-[40px] top-[${selectedItemRect.y}px] left-[${selectedItemRect.x}px] w-[${selectedItemRect.width}px] h-[${selectedItemRect.height}px] transition ease-in-out duration-300 ${SelectedItemMask} z-0`}
        ></div>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            selected: index === selectedItem,
            onClick: () => handleItemClick(index),
            setRef: (el) => (itemsRef.current[index] = el),
          });
        })}
      </GroupContext.Provider>
    </div>
  );
};

export const SelectionItem = ({
  selected,
  onClick,
  SelectedItem,
  UnselectedItem,
  children,
  setRef,
}) => {
  const { SelectedComponent, UnselectedComponent } = useContext(GroupContext);
  const [selectedA, setSelectedA] = useState(selected);

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        setSelectedA(selected);
      }, 300);
    } else {
      setSelectedA(selected);
    }
  }, [selected]);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer select-none w-full z-10 relative"
      ref={(el) => setRef(el)}
    >
      {selectedA
        ? SelectedItem
          ? SelectedItem
          : SelectedComponent
        : UnselectedItem
        ? UnselectedItem
        : UnselectedComponent}
      {children}
    </div>
  );
};
