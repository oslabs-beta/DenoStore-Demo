// adds all the fields with a true (edited on) value to a string containing the rest of the query as well
const queryCombiner = (
  fields: { [key: string]: boolean },
  restOfQuery: string
) => {
  const trueFields = Object.keys(fields).filter(
    (fieldName) => fields[fieldName]
  );
  return restOfQuery.replace('_', trueFields.join(' '));
};

const randomKey = (): number =>
  Math.floor(Math.random() * Math.random() * 1000);

export { queryCombiner, randomKey };
