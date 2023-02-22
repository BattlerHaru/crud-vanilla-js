const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  throw new Error("not implemented");
};

const loadPreviousPage = async () => {
  throw new Error("not implemented");
};

const onUserChange = async () => {
  throw new Error("not implemented");
};

const reloadPage = async () => {
  throw new Error("not implemented");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChange,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
