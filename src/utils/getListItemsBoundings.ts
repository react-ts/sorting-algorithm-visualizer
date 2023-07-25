export const getListItemsBoundings = <T extends HTMLElement> (node: T) => {
  const itemsBounds: any = {};
 
  for(const child of node?.children ?? []){
    const childBounds = child.getBoundingClientRect();
    itemsBounds[child.id] = childBounds;
  }

  return itemsBounds;
};


