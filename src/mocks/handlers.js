import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://fakestoreapi.com/products/categories",
    async (req, res, ctx) => {
      return res(
        ctx.json([
          "electronics",
          "jewelery",
          "men's clothing",
          "women's clothing",
          "shoes",
        ])
      );
    }
  ),
  rest.get(
    "https://fakestoreapi.com/products/category/shoes",
    async (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 87,
            title: "test shoes",
            price: "999",
            category: "shoes",
            description: "msw test",
            image: "/shoes.jpg",
            rating: {
              rate: 4.6,
              count: 400,
            },
          },
        ])
      );
    }
  ),
  rest.get("https://fakestoreapi.com/products/87", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 87,
        title: "test shoes",
        price: "999",
        category: "shoes",
        description: "msw test",
        image: "/shoes.jpg",
        rating: {
          rate: 4.6,
          count: 400,
        },
      })
    );
  }),
];
