import "server-only"
import {db} from "~/server/db";
import {auth} from "@clerk/nextjs/server";

export async function getImages() {
  const user = auth()
  
  if(!user ) throw new Error("unauthorized:Please sign in")

  return db.query.images.findMany({
    where: (model, {eq}) => eq(model.userId, user.userId),
    orderBy: (model, {desc}) => desc(model.id),
  });
}