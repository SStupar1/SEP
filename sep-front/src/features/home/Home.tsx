import * as React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  console.log(items, "items");
  return (
    <>
      <div>Home</div>

      <table>
        <tr>
          <th>Product name:</th>
          <th>Product price:</th>
        </tr>

        {[...Array(7)].map((_, index) => {
          return (
            <tr>
              <td>
                <label>Name {index}</label>
              </td>
              <td>
                <label>Name {index} Price</label>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
