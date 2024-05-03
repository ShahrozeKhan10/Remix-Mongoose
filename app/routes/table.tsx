import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getUsers } from "~/services/member.server";
import { useState } from 'react'

export async function loader(){
  const users = await getUsers()
  return json( users );
};

export default function Users() {
    const users = useLoaderData();    
    return (
      <>
        <h1>Users</h1>
        
          <table border="2">
              <tr>
                <th>Edit</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            {users.map((user) => (
              <>
                <tr>
                  <td><Link to={`edit/${user._id}`} >{user._id}</Link></td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              </>
            ))}
          </table>
        
      </>
    );
  }
  