import { RootState } from 'types/root';
import {
  ApolloQueryResult,
  DocumentNode,
  QueryHookOptions,
} from '@apollo/client';
import { initializeApollo } from 'utils/apollo/apolloClient';
import { getOrInitializeStore } from '../initializeStore';

type RootActionResult<A = any, V = any, R = any> = {
  rootState: RootState;
  dispatch: (v: R) => void;
  apolloQuery: (
    v: QueryHookOptions & {
      query: DocumentNode;
      variables: V;
    }
  ) => ApolloQueryResult<A>;
};

export const rootAction = <ApolloResult, ApolloVars, R>(): RootActionResult<
  ApolloResult,
  ApolloVars,
  R
> => {
  const rootStore = getOrInitializeStore();
  const apolloClient = initializeApollo();
  return {
    rootState: rootStore.getState(),
    dispatch: rootStore.dispatch,
    apolloQuery: apolloClient.query,
  };
};
