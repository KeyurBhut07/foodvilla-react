// Filtering The Data
export function filterData(searchText, resuturant) {
  return resuturant.filter((resuturant) => {
    return resuturant?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
}
