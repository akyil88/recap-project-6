import Place from "@/db/models/Place";
import dbConnect from "@/db/dbConnect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }
try {
  if (request.method === "POST") {

      const places = request.body;
      await Place.create(places);
      response.status(201).json({ status: "Places created." });
  }
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
