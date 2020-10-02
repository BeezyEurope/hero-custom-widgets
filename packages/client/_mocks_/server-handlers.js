import { rest } from "msw";
import faker from "faker";

import getArrayOfNumber from "../src/components/Bullets/utils/getArrayOfNumber";


const handlers = [
  rest.get(" http://myserver/api/tweets/:user", async (req, res, ctx) => {
    return res(
      ctx.json(
        getArrayOfNumber(5).map(() => {
          return {
            text: faker.lorem.text(),
            createdAt: faker.date.past(),
            user: faker.name.findName(),
            link: faker.internet.url(),
          };
        })
      )
    );
  }),
  rest.get(" http://myserver/api/facebook", async (req, res, ctx) => {
    return res(
      ctx.json(
        getArrayOfNumber(10).map(() => {
          return {
            text: `facebook`,
            createdAt: faker.date.past(),
            user: faker.name.findName(),
            link: faker.internet.url(),
          };
        })
      )
    );
  }),
  rest.get(" http://myserver/api/linkedin", async (req, res, ctx) => {
    return res(
      ctx.json(
        getArrayOfNumber(15).map(() => {
          return {
            text: "linkedin",
            createdAt: faker.date.past(),
            user: faker.name.findName(),
            link: faker.internet.url(),
          };
        })
      )
    );
  }),
];
// eslint-disable-next-line import/prefer-default-export
export { handlers };
