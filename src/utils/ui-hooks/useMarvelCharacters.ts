import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../ui-hocs/GlobalStateProvider";
import useFetchMock from "./useFetchMock";

const useMarvelCharacters = (query: string) => {
  const { data, isLoading, isError } = useFetchMock(query);
  const { state, dispatch, actions } = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch(
      actions?.UDPATE_MARVEL_CHARACTERS({
        data,
        isLoading,
        isError,
      })
    );
  }, [data, isLoading, isError]);

  return state.page2;
};
export default useMarvelCharacters;
