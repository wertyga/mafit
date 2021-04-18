import { NextPageContext } from 'next';
import Cookies from 'universal-cookie';

const getCookies = req => {
  const cookies = new Cookies(req.headers.cookie);
  return cookies.getAll();
};

export const getInitialState = async ({ req }: NextPageContext) => {
  return {
    cookiesStore: getCookies(req),
  };
};
