import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [openAddFriend, setOpenAddFriend] = useState(false);

  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend])
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friends={friends}/>
          {openAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
          <Button onClick={() => setOpenAddFriend((prev) => !prev)}>
            {openAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
