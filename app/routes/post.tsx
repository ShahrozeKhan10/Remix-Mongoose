import invariant from "tiny-invariant";
import { createUser } from "~/services/member.server";
import {  redirect } from "@remix-run/node";

export async function action({ request }){
  const formData = await request.formData();

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const age = formData.get("age");
  
  console.log({firstName, lastName, email, age})

  invariant(typeof firstName === "string");
  invariant(typeof lastName === "string");
  invariant(typeof email === "string");
  invariant(typeof age === "string");

  await createUser({ firstName, lastName, email, age });
  return redirect("/table");
};


