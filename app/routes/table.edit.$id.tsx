import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getUser, updateUser } from "~/services/member.server";
import { json, redirect } from "@remix-run/node";

export async function loader({ params }){
  const user = await getUser(params.id);
  return json(user);
};

export async function action({ request }){
  const formData = await request.formData();

  const id = formData.get("id");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const age = formData.get("age");

  invariant(typeof firstName === "string");
  invariant(typeof lastName === "string");
  invariant(typeof email === "string");
  invariant(typeof age === "string");

  await updateUser({ id, firstName, lastName, email, age });
  return redirect("/table");
};

export default function EditPost() {
  const user = useLoaderData();
  return (
    <>
      <h2>Edit User</h2>
      <form method="post">
        <input type="text" name="id" defaultValue={user._id} readOnly />
        <input type="text" name="firstName" defaultValue={user.firstName} />
        <input type="text" name="lastName" defaultValue={user.lastName} />
        <input type="text" name="email" defaultValue={user.email} />
        <input type="number" min="18" name="age" defaultValue={user.age} />
        <input type="submit" value="Update User" />
      </form>
    </>
  );
}
