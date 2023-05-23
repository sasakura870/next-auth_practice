"use client";
import { useAuth } from "@/hooks/useAuth";

export const Page = () => {
  const { auth } = useAuth();
  return <button onClick={async() => await auth()}>ログイン</button>;
};

export default Page;
