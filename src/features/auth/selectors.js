export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContacts = state => state.auth.contacts;

export const selectFilter = state => state.auth.filter;

export const selectIsError = state => state.auth.isError;

export const token = state => state.auth.token;
