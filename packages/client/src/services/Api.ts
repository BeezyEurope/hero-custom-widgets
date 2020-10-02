async function Api({ resource }: { resource: string }): Promise<any> {
  const URL = process.env.API_URL || "http://myserver/api";

  const result: Response = await fetch(`${URL}/${resource}`);

  if (!result.ok) {
    throw new DOMException("Api call Error", "Api call Error");
  }

  const jsonResult: any = await result.json();

  return jsonResult;
}

export default Api;
