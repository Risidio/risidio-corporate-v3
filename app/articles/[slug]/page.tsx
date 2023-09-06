"use client"
import { useParams } from "next/navigation";
import ArcicleDetail from "./ArticleDetail";

export default function Detail() {
  const {slug} = useParams();
 
  return (
      <ArcicleDetail slug={slug}/>
  );
}
