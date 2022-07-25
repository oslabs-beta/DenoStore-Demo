// adds all the fields with a true (edited on) value to a string containing the rest of the query as well
const queryCombiner = (
  fields: { [key: string]: boolean | any },
  restOfQuery: string
): string => {
  const trueFields: string[] = [];

  Object.keys(fields).forEach((fieldName) => {
    //handles nested fields here by iterating through nested queries and adding them to a
    if (typeof fields[fieldName] === 'object') {
      const trueNested: string[] = [];
      Object.keys(fields[fieldName]).forEach((nested) => {
        if (fields[fieldName][nested]) trueNested.push(nested);
      });
      trueFields.push(`${fieldName} { ${trueNested.join(' ')} }`);
    } else if (fields[fieldName]) trueFields.push(fieldName);
  });
  // actually combines the strings into a final query that GraphQL can interpret
  return restOfQuery.replace('_', trueFields.join(' '));
};

const randomKey = (): number =>
  Math.floor(Math.random() * Math.random() * 1000);

const call = async (fetchCall: Function): Promise<any> => {
  await new Promise((r) => setTimeout(r, 300));
  return await fetchCall();
};

export { queryCombiner, randomKey, call };
