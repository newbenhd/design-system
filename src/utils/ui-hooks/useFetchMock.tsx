import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

const mockFetchMarvelCharacters = (query: string) =>
  new Promise<{ page: number; count: number; list: string[] }>(
    (resolve, reject) => {
      const characters = [
        "Captain American",
        "Iron Man",
        "Spider Man",
        "Hulk",
        "Thor",
        "Natasha",
        "Black Panther",
        "Wanda",
        "Doctor Strange",
        "Vision",
      ];
      setTimeout(() => {
        const list = characters.filter((character) =>
          character.includes(query)
        );
        if (list.length === 0) reject("No list with the length");
        resolve({
          page: 1,
          count: 10,
          list,
        });
      }, 2000);
    }
  );

const useFetchMock = (resource: RequestInfo, init?: RequestInit) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(
    debounce((resource: string, init?: RequestInit) => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          // const response = await fetch(resource, init);
          // const data = await response.json();
          const { list } = await mockFetchMarvelCharacters(resource);
          setData(list);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, 500),
    []
  );

  useEffect(() => {
    if (typeof resource === "string") getData(resource, init);
  }, [resource, init]);

  return { data, isLoading, isError };
};

export default useFetchMock;
