export const prettyPrint = ({ data }: { data: object }) =>
  console.log(">> prettyPrint => ", JSON.stringify(data, null, 2));
