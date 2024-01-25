import React, { useState, useContext, createContext, useEffect } from "react";

const GroupContext = createContext();

export const SelectionGroup = ({
  SelectedComponent,
  UnselectedComponent,
  defaultItem,
  children,
  className,
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  useEffect(() => {
    setSelectedItem(defaultItem);
  }, [defaultItem]);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className={className}>
      <GroupContext.Provider
        value={{
          SelectedComponent: SelectedComponent,
          UnselectedComponent: UnselectedComponent,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            selected: index === selectedItem,
            onClick: () => handleItemClick(index),
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
}) => {
  const { SelectedComponent, UnselectedComponent } = useContext(GroupContext);

  return (
    <div onClick={onClick} className="cursor-pointer select-none w-full">
      {selected
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
