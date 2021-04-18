import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Article = {
  __typename?: 'Article';
  id: Scalars['ID'];
  trainingId: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type DayFood = {
  __typename?: 'DayFood';
  id: Scalars['ID'];
  title: Scalars['String'];
  meal?: Maybe<Array<Maybe<DayFoodMeal>>>;
};

export type DayFoodInput = {
  title: Scalars['String'];
  meal?: Maybe<Array<Maybe<DayFoodMealInput>>>;
};

export type DayFoodMeal = {
  __typename?: 'DayFoodMeal';
  human?: Maybe<HumanType>;
  meal?: Maybe<Array<Maybe<Meal>>>;
};

export type DayFoodMealInput = {
  human: Scalars['ID'];
  meal?: Maybe<Array<Maybe<MealInput>>>;
};

export type DeleteDayFoodResponse = {
  __typename?: 'DeleteDayFoodResponse';
  dayFood?: Maybe<DayFood>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteFoodstufResponse = {
  __typename?: 'DeleteFoodstufResponse';
  foodstuff?: Maybe<FoodStuff>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteHumanResponse = {
  __typename?: 'DeleteHumanResponse';
  human?: Maybe<HumanType>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteMarathonResponse = {
  __typename?: 'DeleteMarathonResponse';
  marathon?: Maybe<Marathon>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteRecipeResponse = {
  __typename?: 'DeleteRecipeResponse';
  recipe?: Maybe<Recipe>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteTrainingResponse = {
  __typename?: 'DeleteTrainingResponse';
  training?: Maybe<Training>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  id?: Maybe<Scalars['ID']>;
  trainingId?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Scalars['String']>;
  foods?: Maybe<Scalars['String']>;
  dayResult?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  user?: Maybe<FeedbackUserMeta>;
};

export type FeedbackResponse = {
  __typename?: 'FeedbackResponse';
  feedbacks?: Maybe<Array<Maybe<Feedback>>>;
  totalCount: Scalars['Int'];
};

export type FeedbackSaveResponse = {
  __typename?: 'FeedbackSaveResponse';
  feedback?: Maybe<Feedback>;
  totalCount: Scalars['Int'];
};

export type FeedbackUserMeta = {
  __typename?: 'FeedbackUserMeta';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type Food = {
  __typename?: 'Food';
  foodstuff?: Maybe<FoodStuff>;
  qt?: Maybe<Scalars['Int']>;
};

export type FoodInput = {
  id: Scalars['ID'];
  qt: Scalars['Int'];
};

export type FoodStuff = {
  __typename?: 'FoodStuff';
  id: Scalars['ID'];
  title: Scalars['String'];
  unit: Scalars['String'];
  calories: Scalars['Int'];
  fats: Scalars['Int'];
  carbs: Scalars['Int'];
  protein: Scalars['Int'];
};

export type FoodStuffWithTotal = {
  __typename?: 'FoodStuffWithTotal';
  foodstuff?: Maybe<FoodStuff>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FoodStuffsWithTotal = {
  __typename?: 'FoodStuffsWithTotal';
  foodstuffs?: Maybe<Array<Maybe<FoodStuff>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetDayFoodsResponse = {
  __typename?: 'GetDayFoodsResponse';
  dayFoods?: Maybe<Array<Maybe<DayFood>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetHumanTypesResponse = {
  __typename?: 'GetHumanTypesResponse';
  humans?: Maybe<Array<Maybe<HumanType>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetMarathonResponse = {
  __typename?: 'GetMarathonResponse';
  marathons?: Maybe<Array<Maybe<Marathon>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetTrainingResponse = {
  __typename?: 'GetTrainingResponse';
  trainings?: Maybe<Array<Maybe<Training>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HumanType = {
  __typename?: 'HumanType';
  id: Scalars['ID'];
  category: Scalars['String'];
};

export type Marathon = {
  __typename?: 'Marathon';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dateStart: Scalars['String'];
  dateEnd: Scalars['String'];
  trainings: Array<Maybe<Training>>;
  progressIn: Scalars['Int'];
};

export type Meal = {
  __typename?: 'Meal';
  id?: Maybe<Scalars['ID']>;
  type: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};

export type MealInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['ID'];
  recipes: Array<Maybe<Scalars['ID']>>;
};

export type Motivation = {
  __typename?: 'Motivation';
  id: Scalars['ID'];
  trainingId: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadRecipe?: Maybe<RecipeWithTotal>;
  addFoodstuff?: Maybe<FoodStuffWithTotal>;
  deleteRecipe?: Maybe<DeleteRecipeResponse>;
  deleteFoodStuff?: Maybe<DeleteFoodstufResponse>;
  saveHumanType?: Maybe<SaveHumanTypeResponse>;
  deleteHumanType?: Maybe<DeleteHumanResponse>;
  saveDayFood?: Maybe<SaveDayFoodResponse>;
  deleteDayFood?: Maybe<DeleteDayFoodResponse>;
  saveTraining?: Maybe<SaveTrainingResponse>;
  deleteTraining?: Maybe<DeleteTrainingResponse>;
  saveMarathon?: Maybe<SaveMarathonResponse>;
  deleteMarathon?: Maybe<DeleteMarathonResponse>;
  saveFeedback?: Maybe<FeedbackSaveResponse>;
};


export type MutationUploadRecipeArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['Upload']>;
  foods?: Maybe<Array<Maybe<FoodInput>>>;
};


export type MutationAddFoodstuffArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  unit: Scalars['String'];
  calories: Scalars['Int'];
  fats: Scalars['Int'];
  carbs: Scalars['Int'];
  protein: Scalars['Int'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFoodStuffArgs = {
  id: Scalars['ID'];
};


export type MutationSaveHumanTypeArgs = {
  id?: Maybe<Scalars['ID']>;
  category: Scalars['String'];
};


export type MutationDeleteHumanTypeArgs = {
  id: Scalars['ID'];
};


export type MutationSaveDayFoodArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<DayFoodInput>;
};


export type MutationDeleteDayFoodArgs = {
  id: Scalars['ID'];
};


export type MutationSaveTrainingArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  video: Scalars['Upload'];
  dayFood?: Maybe<Scalars['ID']>;
};


export type MutationDeleteTrainingArgs = {
  id: Scalars['ID'];
};


export type MutationSaveMarathonArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  trainings: Array<Maybe<Scalars['ID']>>;
  dateStart: Scalars['String'];
  dateEnd: Scalars['String'];
  progressIn: Scalars['Int'];
};


export type MutationDeleteMarathonArgs = {
  id: Scalars['ID'];
};


export type MutationSaveFeedbackArgs = {
  trainingId: Scalars['ID'];
  status?: Maybe<Scalars['Boolean']>;
  results: Scalars['String'];
  foods: Scalars['String'];
  dayResult: Scalars['String'];
  token: Scalars['String'];
  rating: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getUser?: Maybe<User>;
  authUser?: Maybe<User>;
  getFoodStuffs?: Maybe<FoodStuffsWithTotal>;
  getRecipes?: Maybe<RecipesWithTotal>;
  getLightRecipesList?: Maybe<RecipesWithTotal>;
  getDayFoods?: Maybe<GetDayFoodsResponse>;
  getDayFoodsLightList?: Maybe<GetDayFoodsResponse>;
  getHumanTypes?: Maybe<GetHumanTypesResponse>;
  getTrainings?: Maybe<GetTrainingResponse>;
  getLightTrainingList?: Maybe<GetTrainingResponse>;
  getMarathons?: Maybe<GetMarathonResponse>;
  marathon?: Maybe<Marathon>;
  dayFood?: Maybe<Array<Maybe<Meal>>>;
  getFeedbacks?: Maybe<FeedbackResponse>;
  getUserFeedback?: Maybe<Feedback>;
  getMotivation?: Maybe<Motivation>;
  getArticle?: Maybe<Article>;
};


export type QueryGetUserArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryAuthUserArgs = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type QueryGetFoodStuffsArgs = {
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetRecipesArgs = {
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetDayFoodsArgs = {
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetHumanTypesArgs = {
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetTrainingsArgs = {
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetMarathonsArgs = {
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryMarathonArgs = {
  id: Scalars['String'];
};


export type QueryDayFoodArgs = {
  dayFoodId: Scalars['ID'];
};


export type QueryGetFeedbacksArgs = {
  trainingId: Scalars['ID'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryGetUserFeedbackArgs = {
  token: Scalars['String'];
  trainingId: Scalars['String'];
};


export type QueryGetMotivationArgs = {
  trainingId: Scalars['String'];
};


export type QueryGetArticleArgs = {
  trainingId?: Maybe<Scalars['String']>;
  articleId?: Maybe<Scalars['ID']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  foods?: Maybe<Array<Maybe<Food>>>;
  pfc?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RecipeWithTotal = {
  __typename?: 'RecipeWithTotal';
  recipe?: Maybe<Recipe>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RecipesWithTotal = {
  __typename?: 'RecipesWithTotal';
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaveDayFoodResponse = {
  __typename?: 'SaveDayFoodResponse';
  dayFood?: Maybe<DayFood>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaveHumanTypeResponse = {
  __typename?: 'SaveHumanTypeResponse';
  human?: Maybe<HumanType>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaveMarathonResponse = {
  __typename?: 'SaveMarathonResponse';
  marathon?: Maybe<Marathon>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Training = {
  __typename?: 'Training';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  video: Scalars['String'];
  dayFood?: Maybe<DayFood>;
  status?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  token: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type SaveTrainingResponse = {
  __typename?: 'saveTrainingResponse';
  training?: Maybe<Training>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetArticleQueryVariables = Exact<{
  trainingId?: Maybe<Scalars['String']>;
  articleId?: Maybe<Scalars['ID']>;
}>;


export type GetArticleQuery = (
  { __typename?: 'Query' }
  & { getArticle?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'image' | 'title' | 'description'>
  )> }
);

export type GetDayFoodQueryVariables = Exact<{
  dayFoodId: Scalars['ID'];
}>;


export type GetDayFoodQuery = (
  { __typename?: 'Query' }
  & { dayFood?: Maybe<Array<Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'type'>
    & { recipes?: Maybe<Array<Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'title' | 'description' | 'image' | 'pfc'>
      & { foods?: Maybe<Array<Maybe<(
        { __typename?: 'Food' }
        & Pick<Food, 'qt'>
        & { foodstuff?: Maybe<(
          { __typename?: 'FoodStuff' }
          & Pick<FoodStuff, 'title' | 'unit'>
        )> }
      )>>> }
    )>>> }
  )>>> }
);

export type FeedbackResponseFragment = (
  { __typename?: 'Feedback' }
  & Pick<Feedback, 'id' | 'status' | 'results' | 'foods' | 'dayResult' | 'date'>
  & { user?: Maybe<(
    { __typename?: 'FeedbackUserMeta' }
    & Pick<FeedbackUserMeta, 'firstName' | 'lastName' | 'avatar'>
  )> }
);

export type GetFeedbacksQueryVariables = Exact<{
  trainingId: Scalars['ID'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GetFeedbacksQuery = (
  { __typename?: 'Query' }
  & { getFeedbacks?: Maybe<(
    { __typename?: 'FeedbackResponse' }
    & Pick<FeedbackResponse, 'totalCount'>
    & { feedbacks?: Maybe<Array<Maybe<(
      { __typename?: 'Feedback' }
      & FeedbackResponseFragment
    )>>> }
  )> }
);

export type GetUserFeedbackQueryVariables = Exact<{
  trainingId: Scalars['String'];
  token: Scalars['String'];
}>;


export type GetUserFeedbackQuery = (
  { __typename?: 'Query' }
  & { getUserFeedback?: Maybe<(
    { __typename?: 'Feedback' }
    & Pick<Feedback, 'rating'>
    & FeedbackResponseFragment
  )> }
);

export type SaveFeedbackMutationVariables = Exact<{
  trainingId: Scalars['ID'];
  status?: Maybe<Scalars['Boolean']>;
  results: Scalars['String'];
  foods: Scalars['String'];
  dayResult: Scalars['String'];
  token: Scalars['String'];
  rating: Scalars['Int'];
}>;


export type SaveFeedbackMutation = (
  { __typename?: 'Mutation' }
  & { saveFeedback?: Maybe<(
    { __typename?: 'FeedbackSaveResponse' }
    & Pick<FeedbackSaveResponse, 'totalCount'>
    & { feedback?: Maybe<(
      { __typename?: 'Feedback' }
      & Pick<Feedback, 'rating'>
      & FeedbackResponseFragment
    )> }
  )> }
);

export type GetMarathonQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMarathonQuery = (
  { __typename?: 'Query' }
  & { marathon?: Maybe<(
    { __typename?: 'Marathon' }
    & Pick<Marathon, 'id' | 'title' | 'description' | 'dateStart' | 'dateEnd' | 'progressIn'>
    & { trainings: Array<Maybe<(
      { __typename?: 'Training' }
      & Pick<Training, 'id' | 'title' | 'description' | 'video' | 'status' | 'date'>
      & { dayFood?: Maybe<(
        { __typename?: 'DayFood' }
        & Pick<DayFood, 'id'>
      )> }
    )>> }
  )> }
);

export type GetMotivationQueryVariables = Exact<{
  trainingId: Scalars['String'];
}>;


export type GetMotivationQuery = (
  { __typename?: 'Query' }
  & { getMotivation?: Maybe<(
    { __typename?: 'Motivation' }
    & Pick<Motivation, 'image' | 'title' | 'description'>
  )> }
);

export const FeedbackResponseFragmentDoc = gql`
    fragment FeedbackResponse on Feedback {
  id
  status
  results
  foods
  dayResult
  date
  user {
    firstName
    lastName
    avatar
  }
}
    `;
export const GetArticleDocument = gql`
    query getArticle($trainingId: String, $articleId: ID) {
  getArticle(trainingId: $trainingId, articleId: $articleId) {
    id
    image
    title
    description
  }
}
    `;

/**
 * __useGetArticleQuery__
 *
 * To run a query within a React component, call `useGetArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleQuery({
 *   variables: {
 *      trainingId: // value for 'trainingId'
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useGetArticleQuery(baseOptions?: Apollo.QueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
      }
export function useGetArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>;
export type GetArticleLazyQueryHookResult = ReturnType<typeof useGetArticleLazyQuery>;
export type GetArticleQueryResult = Apollo.QueryResult<GetArticleQuery, GetArticleQueryVariables>;
export const GetDayFoodDocument = gql`
    query getDayFood($dayFoodId: ID!) {
  dayFood(dayFoodId: $dayFoodId) {
    type
    recipes {
      title
      description
      image
      foods {
        foodstuff {
          title
          unit
        }
        qt
      }
      pfc
    }
  }
}
    `;

/**
 * __useGetDayFoodQuery__
 *
 * To run a query within a React component, call `useGetDayFoodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDayFoodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDayFoodQuery({
 *   variables: {
 *      dayFoodId: // value for 'dayFoodId'
 *   },
 * });
 */
export function useGetDayFoodQuery(baseOptions: Apollo.QueryHookOptions<GetDayFoodQuery, GetDayFoodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDayFoodQuery, GetDayFoodQueryVariables>(GetDayFoodDocument, options);
      }
export function useGetDayFoodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDayFoodQuery, GetDayFoodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDayFoodQuery, GetDayFoodQueryVariables>(GetDayFoodDocument, options);
        }
export type GetDayFoodQueryHookResult = ReturnType<typeof useGetDayFoodQuery>;
export type GetDayFoodLazyQueryHookResult = ReturnType<typeof useGetDayFoodLazyQuery>;
export type GetDayFoodQueryResult = Apollo.QueryResult<GetDayFoodQuery, GetDayFoodQueryVariables>;
export const GetFeedbacksDocument = gql`
    query getFeedbacks($trainingId: ID!, $limit: Int!, $offset: Int!) {
  getFeedbacks(trainingId: $trainingId, limit: $limit, offset: $offset) {
    feedbacks {
      ...FeedbackResponse
    }
    totalCount
  }
}
    ${FeedbackResponseFragmentDoc}`;

/**
 * __useGetFeedbacksQuery__
 *
 * To run a query within a React component, call `useGetFeedbacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeedbacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeedbacksQuery({
 *   variables: {
 *      trainingId: // value for 'trainingId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetFeedbacksQuery(baseOptions: Apollo.QueryHookOptions<GetFeedbacksQuery, GetFeedbacksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeedbacksQuery, GetFeedbacksQueryVariables>(GetFeedbacksDocument, options);
      }
export function useGetFeedbacksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeedbacksQuery, GetFeedbacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeedbacksQuery, GetFeedbacksQueryVariables>(GetFeedbacksDocument, options);
        }
export type GetFeedbacksQueryHookResult = ReturnType<typeof useGetFeedbacksQuery>;
export type GetFeedbacksLazyQueryHookResult = ReturnType<typeof useGetFeedbacksLazyQuery>;
export type GetFeedbacksQueryResult = Apollo.QueryResult<GetFeedbacksQuery, GetFeedbacksQueryVariables>;
export const GetUserFeedbackDocument = gql`
    query getUserFeedback($trainingId: String!, $token: String!) {
  getUserFeedback(token: $token, trainingId: $trainingId) {
    ...FeedbackResponse
    rating
  }
}
    ${FeedbackResponseFragmentDoc}`;

/**
 * __useGetUserFeedbackQuery__
 *
 * To run a query within a React component, call `useGetUserFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFeedbackQuery({
 *   variables: {
 *      trainingId: // value for 'trainingId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetUserFeedbackQuery(baseOptions: Apollo.QueryHookOptions<GetUserFeedbackQuery, GetUserFeedbackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFeedbackQuery, GetUserFeedbackQueryVariables>(GetUserFeedbackDocument, options);
      }
export function useGetUserFeedbackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFeedbackQuery, GetUserFeedbackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFeedbackQuery, GetUserFeedbackQueryVariables>(GetUserFeedbackDocument, options);
        }
export type GetUserFeedbackQueryHookResult = ReturnType<typeof useGetUserFeedbackQuery>;
export type GetUserFeedbackLazyQueryHookResult = ReturnType<typeof useGetUserFeedbackLazyQuery>;
export type GetUserFeedbackQueryResult = Apollo.QueryResult<GetUserFeedbackQuery, GetUserFeedbackQueryVariables>;
export const SaveFeedbackDocument = gql`
    mutation saveFeedback($trainingId: ID!, $status: Boolean, $results: String!, $foods: String!, $dayResult: String!, $token: String!, $rating: Int!) {
  saveFeedback(
    trainingId: $trainingId
    status: $status
    results: $results
    foods: $foods
    dayResult: $dayResult
    token: $token
    rating: $rating
  ) {
    feedback {
      ...FeedbackResponse
      rating
    }
    totalCount
  }
}
    ${FeedbackResponseFragmentDoc}`;
export type SaveFeedbackMutationFn = Apollo.MutationFunction<SaveFeedbackMutation, SaveFeedbackMutationVariables>;

/**
 * __useSaveFeedbackMutation__
 *
 * To run a mutation, you first call `useSaveFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFeedbackMutation, { data, loading, error }] = useSaveFeedbackMutation({
 *   variables: {
 *      trainingId: // value for 'trainingId'
 *      status: // value for 'status'
 *      results: // value for 'results'
 *      foods: // value for 'foods'
 *      dayResult: // value for 'dayResult'
 *      token: // value for 'token'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useSaveFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<SaveFeedbackMutation, SaveFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveFeedbackMutation, SaveFeedbackMutationVariables>(SaveFeedbackDocument, options);
      }
export type SaveFeedbackMutationHookResult = ReturnType<typeof useSaveFeedbackMutation>;
export type SaveFeedbackMutationResult = Apollo.MutationResult<SaveFeedbackMutation>;
export type SaveFeedbackMutationOptions = Apollo.BaseMutationOptions<SaveFeedbackMutation, SaveFeedbackMutationVariables>;
export const GetMarathonDocument = gql`
    query getMarathon($id: String!) {
  marathon(id: $id) {
    id
    title
    description
    dateStart
    dateEnd
    progressIn
    trainings {
      id
      title
      description
      video
      status
      date
      dayFood {
        id
      }
    }
  }
}
    `;

/**
 * __useGetMarathonQuery__
 *
 * To run a query within a React component, call `useGetMarathonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMarathonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMarathonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMarathonQuery(baseOptions: Apollo.QueryHookOptions<GetMarathonQuery, GetMarathonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMarathonQuery, GetMarathonQueryVariables>(GetMarathonDocument, options);
      }
export function useGetMarathonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMarathonQuery, GetMarathonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMarathonQuery, GetMarathonQueryVariables>(GetMarathonDocument, options);
        }
export type GetMarathonQueryHookResult = ReturnType<typeof useGetMarathonQuery>;
export type GetMarathonLazyQueryHookResult = ReturnType<typeof useGetMarathonLazyQuery>;
export type GetMarathonQueryResult = Apollo.QueryResult<GetMarathonQuery, GetMarathonQueryVariables>;
export const GetMotivationDocument = gql`
    query getMotivation($trainingId: String!) {
  getMotivation(trainingId: $trainingId) {
    image
    title
    description
  }
}
    `;

/**
 * __useGetMotivationQuery__
 *
 * To run a query within a React component, call `useGetMotivationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotivationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotivationQuery({
 *   variables: {
 *      trainingId: // value for 'trainingId'
 *   },
 * });
 */
export function useGetMotivationQuery(baseOptions: Apollo.QueryHookOptions<GetMotivationQuery, GetMotivationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMotivationQuery, GetMotivationQueryVariables>(GetMotivationDocument, options);
      }
export function useGetMotivationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMotivationQuery, GetMotivationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMotivationQuery, GetMotivationQueryVariables>(GetMotivationDocument, options);
        }
export type GetMotivationQueryHookResult = ReturnType<typeof useGetMotivationQuery>;
export type GetMotivationLazyQueryHookResult = ReturnType<typeof useGetMotivationLazyQuery>;
export type GetMotivationQueryResult = Apollo.QueryResult<GetMotivationQuery, GetMotivationQueryVariables>;