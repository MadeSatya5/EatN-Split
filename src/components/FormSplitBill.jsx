import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendExpense = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if(!bill || !paidByUser) return;

    const value = whoIsPaying === "user" ?  friendExpense : -paidByUser;
    onSplitBill(value);
  }

  return (
    <form
      className="form-split-bill"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="value">💰 Bill value</label>
      <input
        type="text"
        id="value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="expense">🧍‍♀️ Your expense</label>
      <input
        type="text"
        id="expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👫{selectedFriend.name}&apos;s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label htmlFor="who's">🤑 Who is paying the bill</label>
      <select
        id="who's"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
