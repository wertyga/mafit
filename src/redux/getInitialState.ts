import { NextPageContext } from 'next';
import Cookies from 'universal-cookie';
import { initializeApollo } from 'utils/apollo/apolloClient';

import { GetUserDocument, GetUserQuery } from 'graphql/types';

const apolloClient = initializeApollo();

const getCookies = req => {
  const cookies = new Cookies(req.headers.cookie);
  return cookies.getAll();
};

const getUser = async ({ token }: Record<string, string>) => {
  const {
    data: { getUser: user },
  } = await apolloClient.query<GetUserQuery>({
    query: GetUserDocument,
    variables: { token },
  });

  return { ...user, userId: user.id };
};

export const getInitialState = async ({ req }: NextPageContext) => {
  const cookiesStore = getCookies(req);
  try {
    const [userStore] = await Promise.all([getUser(cookiesStore)]);
    return {
      cookiesStore,
      userStore,
    };
  } catch (e) {
    console.log(e);
    return {};
  }
};
