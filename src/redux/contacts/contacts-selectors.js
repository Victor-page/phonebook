 

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = (state) => {
  console.log('selectors',state);
  const allContacts = getContacts(state);
  const filter = getFilter(staete);
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const getIsLoadingContacts = (state) => state.contacts.loading;

export const getError = (state) => state.contacts.error;
