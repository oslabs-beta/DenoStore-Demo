import possibleQueries from './src/possibleQueries';

// adds a string in the middle to an immutable string
const addToQueryString = (
  string: string,
  index: number,
  replacement: string
) => {
  return (
    string.substring(0, index) +
    replacement +
    string.substring(index + replacement.length)
  );
};

// adds all the fields with a true (edited on) value to a string containing the rest of the query as well
const queryCombiner = (
  fields: { [key: string]: boolean },
  restOfQuery: string
) => {
  const trueFields = Object.keys(fields).filter(
    (fieldName) => fields[fieldName]
  );
  let braceCount = 0;
  let result = '';
  for (let i = 0; i < restOfQuery.length; i++) {
    if (restOfQuery[i] === '{') {
      braceCount++;
      if (braceCount === 2) {
        result = addToQueryString(
          restOfQuery,
          i + 1,
          '\n' + trueFields.join(' \n')
        );
        i = restOfQuery.length;
      }
    }
  }
  return result;
};

const getCurrQueryFields = (currQuery) => {
  const selected = possibleQueries.find(
    (obj) => obj.selectableQuery === currQuery
  );
  return selected.queryFields;
};

export { queryCombiner, getCurrQueryFields };
