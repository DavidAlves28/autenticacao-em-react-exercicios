import { useEffect } from "react";
import feed from "../api/feed";
import { useProtect } from "../hooks/useProtect";

function FeedPage() {
  useProtect()
useEffect(()=>{
  feed()
},[])
  return (
    <main>
      <h1>Página de Feed</h1>
    <p>{localStorage.getItem('token')}</p>
    </main>
  );
}

export default FeedPage;