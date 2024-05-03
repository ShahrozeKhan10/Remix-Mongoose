export default function Index() {
  return (
    <div>
      <h1>Remix Blog Example</h1>
      <form method="post" action="/post">
        <input type="text" name="firstName" placeholder="Enter Your First Name" />
        <input type="text" name="lastName" placeholder="Enter Your Last Name" />
        <input type="text" name="email" placeholder="Enter Your Email" />
        <input type="number" name="age" min="18" placeholder="Enter Your Age" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
